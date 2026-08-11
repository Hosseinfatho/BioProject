import { useState, useEffect, useRef } from 'react';
import { CONFIG } from '../config';

// Global cache to persist data across component unmounts
const globalChannelCache = new Map();

/** Soft cap for generic large volumes. Very High uses a fixed stride (see below). */
const MAX_LOAD_VOXELS = 200_000_000;

/**
 * Cache key for channel data (index + optional basePath).
 * @param {number} channelIndex
 * @param {string} [basePath]
 */
function getCacheKey(channelIndex, basePath) {
    return basePath ? `${basePath}:${channelIndex}` : String(channelIndex);
}

/**
 * XY/Z strides so loaded volume fits in browser memory.
 * Very High (component 1): fixed Z=1,Y=2,X=2 → ~4× High Res voxels (~728MB).
 */
function chooseLoadStrides(shape, maxVoxels = MAX_LOAD_VOXELS, basePath = '') {
    const veryHighDir = CONFIG.VERY_HIGH_RES_CHANNEL_DIR || 'visualization_data_very_high';
    if (basePath === veryHighDir || String(basePath).includes('visualization_data_very_high')) {
        return { strideZ: 1, strideY: 2, strideX: 2 };
    }

    const [z, y, x] = shape.map(Number);
    const total = z * y * x;
    if (!Number.isFinite(total) || total <= maxVoxels) {
        return { strideZ: 1, strideY: 1, strideX: 1 };
    }

    let strideZ = 1;
    let strideY = 1;
    let strideX = 1;
    while (Math.ceil(z / strideZ) * Math.ceil(y / strideY) * Math.ceil(x / strideX) > maxVoxels) {
        if (strideY <= strideX) strideY += 1;
        else strideX += 1;
        if (strideY * strideX > 64) {
            strideZ += 1;
            strideY = Math.max(1, Math.ceil(strideY / 2));
            strideX = Math.max(1, Math.ceil(strideX / 2));
        }
        if (strideZ > z) break;
    }
    return { strideZ, strideY, strideX };
}

/**
 * Read a uint8 volume from a fetch body, optionally downsampling while streaming
 * so a 2.9GB Very High channel never sits fully in JS heap.
 */
async function readVolumeFromResponse(response, shape, strides) {
    const [zSize, ySize, xSize] = shape.map(Number);
    const { strideZ, strideY, strideX } = strides;
    const outZ = Math.ceil(zSize / strideZ);
    const outY = Math.ceil(ySize / strideY);
    const outX = Math.ceil(xSize / strideX);
    const planeSize = ySize * xSize;
    const needsDownsample = strideZ > 1 || strideY > 1 || strideX > 1;

    if (!needsDownsample) {
        const arrayBuffer = await response.arrayBuffer();
        return {
            data: new Uint8Array(arrayBuffer),
            shape: [zSize, ySize, xSize],
            loadStride: [1, 1, 1]
        };
    }

    if (!response.body || typeof response.body.getReader !== 'function') {
        // Fallback: still try full buffer then subsample (may OOM on Very High)
        const arrayBuffer = await response.arrayBuffer();
        const src = new Uint8Array(arrayBuffer);
        const out = new Uint8Array(outZ * outY * outX);
        let oi = 0;
        for (let z = 0; z < zSize; z += strideZ) {
            const zOff = z * planeSize;
            for (let y = 0; y < ySize; y += strideY) {
                const rowOff = zOff + y * xSize;
                for (let x = 0; x < xSize; x += strideX) {
                    out[oi++] = src[rowOff + x];
                }
            }
        }
        return { data: out, shape: [outZ, outY, outX], loadStride: [strideZ, strideY, strideX] };
    }

    console.log(
        `loadChannelData: streaming downsample ${zSize}×${ySize}×${xSize} → ${outZ}×${outY}×${outX} ` +
        `(stride z,y,x=${strideZ},${strideY},${strideX})`
    );

    const out = new Uint8Array(outZ * outY * outX);
    const reader = response.body.getReader();
    const plane = new Uint8Array(planeSize);
    let planeFilled = 0;
    let z = 0;
    let outZi = 0;
    let leftover = new Uint8Array(0);

    const flushPlane = () => {
        if (z % strideZ === 0) {
            let oi = outZi * outY * outX;
            for (let y = 0; y < ySize; y += strideY) {
                const rowOff = y * xSize;
                for (let x = 0; x < xSize; x += strideX) {
                    out[oi++] = plane[rowOff + x];
                }
            }
            outZi += 1;
        }
        z += 1;
        planeFilled = 0;
    };

    while (z < zSize) {
        const { done, value } = await reader.read();
        if (done) break;

        let chunk = value;
        if (leftover.length) {
            const merged = new Uint8Array(leftover.length + chunk.length);
            merged.set(leftover, 0);
            merged.set(chunk, leftover.length);
            chunk = merged;
            leftover = new Uint8Array(0);
        }

        let offset = 0;
        while (offset < chunk.length && z < zSize) {
            const need = planeSize - planeFilled;
            const take = Math.min(need, chunk.length - offset);
            plane.set(chunk.subarray(offset, offset + take), planeFilled);
            planeFilled += take;
            offset += take;
            if (planeFilled === planeSize) flushPlane();
        }

        if (offset < chunk.length) {
            leftover = chunk.subarray(offset);
        }
    }

    if (planeFilled === planeSize && z < zSize) flushPlane();

    if (outZi !== outZ) {
        console.warn(`loadChannelData: expected ${outZ} output slices, got ${outZi}`);
    }

    return {
        data: out.subarray(0, outZi * outY * outX),
        shape: [outZi, outY, outX],
        loadStride: [strideZ, strideY, strideX]
    };
}

/**
 * Utility function to load channel data.
 * Can be used outside of React components or inside useEffects.
 *
 * @param {number} channelIndex - The index of the channel to load.
 * @param {{ basePath?: string }} [options] - Optional basePath (e.g. CONFIG.HI_RES_CHANNEL_DIR) to load from HI_res_channel.
 * @returns {Promise<{data: Uint8Array, metadata: Object}|null>}
 */
export const loadChannelData = async (channelIndex, options = {}) => {
    if (channelIndex === undefined || channelIndex === null) return null;

    const basePath = options.basePath;
    const cacheKey = getCacheKey(channelIndex, basePath);

    if (globalChannelCache.has(cacheKey)) {
        return globalChannelCache.get(cacheKey);
    }

    const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const dir = basePath || CONFIG.VISUALIZATION_DATA_DIR;
    const prefix = `${baseUrl}/${dir}`;
    const paths = [
        { data: `${prefix}/channel_${channelIndex}_napari_data.raw`, metadata: `${prefix}/channel_${channelIndex}_napari_metadata.json` },
        { data: `${prefix}/channel_${channelIndex}_data.raw`, metadata: `${prefix}/channel_${channelIndex}_data.json` },
        { data: `${prefix}/channel_${channelIndex}_data.raw`, metadata: `${prefix}/channel_${channelIndex}_metadata.json` }
    ];

    for (const path of paths) {
        try {
            const metadataResponse = await fetch(path.metadata);
            if (!metadataResponse.ok) continue;

            const contentType = metadataResponse.headers.get('content-type');
            if (contentType && !contentType.includes('application/json')) continue;

            const metadataText = await metadataResponse.text();
            if (metadataText.trim().startsWith('<!DOCTYPE') || metadataText.trim().startsWith('<html')) continue;

            const metadata = JSON.parse(metadataText);
            const shape = metadata.shape;
            if (!Array.isArray(shape) || shape.length < 3) {
                console.warn(`loadChannelData: bad shape in ${path.metadata}`, shape);
                continue;
            }

            const strides = chooseLoadStrides(shape, MAX_LOAD_VOXELS, dir);
            console.log(
                `loadChannelData: fetching ${path.data} shape=${shape.join('×')} strides=${JSON.stringify(strides)}`
            );

            const dataResponse = await fetch(path.data);
            if (!dataResponse.ok) {
                console.warn(`loadChannelData: HTTP ${dataResponse.status} for ${path.data}`);
                continue;
            }

            const dataContentType = dataResponse.headers.get('content-type');
            if (dataContentType && dataContentType.includes('text/html')) continue;

            const loaded = await readVolumeFromResponse(dataResponse, shape, strides);
            const result = {
                data: loaded.data,
                metadata: {
                    ...metadata,
                    shape: loaded.shape,
                    originalShape: shape,
                    loadStride: loaded.loadStride
                }
            };
            globalChannelCache.set(cacheKey, result);
            console.log(
                `loadChannelData: ready channel ${channelIndex} (${basePath || dir}) ` +
                `${loaded.shape.join('×')} = ${loaded.data.byteLength.toLocaleString()} bytes`
            );
            return result;
        } catch (error) {
            console.warn(`loadChannelData: error for channel ${channelIndex} path ${path.data}:`, error);
            continue;
        }
    }

    // Prefer high-res; if missing, try low-res but do NOT cache it under the high-res key
    const lowResDir = CONFIG.LOW_RES_CHANNEL_DIR;
    if (!basePath && lowResDir && dir !== lowResDir) {
        console.warn(
            `High-res missing for channel ${channelIndex} in ${dir}; trying low-res ${lowResDir}`
        );
        return loadChannelData(channelIndex, { basePath: lowResDir });
    }

    console.warn(`Failed to load data for channel ${channelIndex}${basePath ? ` (${basePath})` : ''}`);
    return null;
};

/**
 * React hook to load channel data.
 *
 * @param {number} channelIndex - The index of the channel to load.
 * @returns {{data: Uint8Array|null, metadata: Object|null, loading: boolean, error: Error|null}}
 */
export const useChannelData = (channelIndex) => {
    const [data, setData] = useState(null);
    const [metadata, setMetadata] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;

        if (channelIndex === undefined || channelIndex === null) {
            setData(null);
            setMetadata(null);
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await loadChannelData(channelIndex);

                if (mountedRef.current) {
                    if (result) {
                        setData(result.data);
                        setMetadata(result.metadata);
                    } else {
                        setError(new Error(`Failed to load channel ${channelIndex}`));
                    }
                }
            } catch (err) {
                if (mountedRef.current) {
                    setError(err);
                }
            } finally {
                if (mountedRef.current) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            mountedRef.current = false;
        };
    }, [channelIndex]);

    return { data, metadata, loading, error };
};
