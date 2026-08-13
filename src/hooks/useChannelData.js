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
function getCacheKey(channelIndex, basePath, cacheSuffix = '') {
    const base = basePath ? `${basePath}:${channelIndex}` : String(channelIndex);
    return cacheSuffix ? `${base}::${cacheSuffix}` : base;
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
 * Read a uint8 volume from a fetch body, optionally downsampling / cropping while streaming
 * so Very High (~2.9GB) never has to sit fully in JS heap.
 *
 * @param {Response} response
 * @param {number[]} shape [z,y,x] original
 * @param {{strideZ:number,strideY:number,strideX:number}} strides
 * @param {{min:{x,y,z}, max:{x,y,z}}|null} cropBounds voxel crop in ORIGINAL coords
 */
async function readVolumeFromResponse(response, shape, strides, cropBounds = null) {
    const [zSize, ySize, xSize] = shape.map(Number);
    const strideZ = Math.max(1, strides.strideZ || 1);
    const strideY = Math.max(1, strides.strideY || 1);
    const strideX = Math.max(1, strides.strideX || 1);
    const planeSize = ySize * xSize;

    let z0 = 0;
    let z1 = zSize - 1;
    let y0 = 0;
    let y1 = ySize - 1;
    let x0 = 0;
    let x1 = xSize - 1;
    if (cropBounds?.min && cropBounds?.max) {
        z0 = Math.max(0, Math.min(zSize - 1, Math.floor(cropBounds.min.z)));
        z1 = Math.max(0, Math.min(zSize - 1, Math.ceil(cropBounds.max.z)));
        y0 = Math.max(0, Math.min(ySize - 1, Math.floor(cropBounds.min.y)));
        y1 = Math.max(0, Math.min(ySize - 1, Math.ceil(cropBounds.max.y)));
        x0 = Math.max(0, Math.min(xSize - 1, Math.floor(cropBounds.min.x)));
        x1 = Math.max(0, Math.min(xSize - 1, Math.ceil(cropBounds.max.x)));
        if (z0 > z1) [z0, z1] = [z1, z0];
        if (y0 > y1) [y0, y1] = [y1, y0];
        if (x0 > x1) [x0, x1] = [x1, x0];
    }

    const outZ = Math.floor((z1 - z0) / strideZ) + 1;
    const outY = Math.floor((y1 - y0) / strideY) + 1;
    const outX = Math.floor((x1 - x0) / strideX) + 1;
    const outVoxels = outZ * outY * outX;
    if (outVoxels <= 0 || !Number.isFinite(outVoxels)) {
        throw new Error('Invalid crop / stride output size');
    }

    const needsDownsampleOrCrop =
        strideZ > 1 || strideY > 1 || strideX > 1 || z0 > 0 || y0 > 0 || x0 > 0 ||
        z1 < zSize - 1 || y1 < ySize - 1 || x1 < xSize - 1;

    // Full volume, no downsample: only safe for smaller arrays
    if (!needsDownsampleOrCrop) {
        const arrayBuffer = await response.arrayBuffer();
        return {
            data: new Uint8Array(arrayBuffer),
            shape: [zSize, ySize, xSize],
            loadStride: [1, 1, 1],
            cropOrigin: [0, 0, 0]
        };
    }

    console.log(
        `loadChannelData: streaming ${zSize}×${ySize}×${xSize} → crop/out ${outZ}×${outY}×${outX} ` +
        `(origin z,y,x=${z0},${y0},${x0}; stride ${strideZ},${strideY},${strideX}; ~${(outVoxels / 1e6).toFixed(1)} MB)`
    );

    const out = new Uint8Array(outVoxels);
    const reader = response.body?.getReader?.();
    if (!reader) {
        const arrayBuffer = await response.arrayBuffer();
        const src = new Uint8Array(arrayBuffer);
        let oi = 0;
        for (let z = z0; z <= z1; z += strideZ) {
            const zOff = z * planeSize;
            for (let y = y0; y <= y1; y += strideY) {
                const rowOff = zOff + y * xSize;
                for (let x = x0; x <= x1; x += strideX) {
                    out[oi++] = src[rowOff + x];
                }
            }
        }
        return {
            data: out.subarray(0, oi),
            shape: [outZ, outY, outX],
            loadStride: [strideZ, strideY, strideX],
            cropOrigin: [z0, y0, x0]
        };
    }

    const plane = new Uint8Array(planeSize);
    let planeFilled = 0;
    let z = 0;
    let leftover = new Uint8Array(0);

    const flushPlane = () => {
        if (z >= z0 && z <= z1 && ((z - z0) % strideZ === 0)) {
            const outZi = Math.floor((z - z0) / strideZ);
            let oi = outZi * outY * outX;
            for (let y = y0; y <= y1; y += strideY) {
                const rowOff = y * xSize;
                for (let x = x0; x <= x1; x += strideX) {
                    out[oi++] = plane[rowOff + x];
                }
            }
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

        // Early exit once past crop in Z
        if (z > z1) {
            try { await reader.cancel(); } catch (_) { /* ignore */ }
            break;
        }
    }

    if (planeFilled === planeSize && z < zSize && z <= z1) flushPlane();

    return {
        data: out,
        shape: [outZ, outY, outX],
        loadStride: [strideZ, strideY, strideX],
        cropOrigin: [z0, y0, x0]
    };
}

/**
 * Fast crop via HTTP Range: download only Z-slab × Y-band bytes (not the whole VH file).
 * Falls back to null if server does not support 206 Partial Content.
 */
async function readVolumeCropWithHttpRanges(url, shape, strides, cropBounds) {
    if (!cropBounds?.min || !cropBounds?.max) return null;

    const [zSize, ySize, xSize] = shape.map(Number);
    const strideZ = Math.max(1, strides.strideZ || 1);
    const strideY = Math.max(1, strides.strideY || 1);
    const strideX = Math.max(1, strides.strideX || 1);
    const planeSize = ySize * xSize;

    let z0 = Math.max(0, Math.min(zSize - 1, Math.floor(cropBounds.min.z)));
    let z1 = Math.max(0, Math.min(zSize - 1, Math.ceil(cropBounds.max.z)));
    let y0 = Math.max(0, Math.min(ySize - 1, Math.floor(cropBounds.min.y)));
    let y1 = Math.max(0, Math.min(ySize - 1, Math.ceil(cropBounds.max.y)));
    let x0 = Math.max(0, Math.min(xSize - 1, Math.floor(cropBounds.min.x)));
    let x1 = Math.max(0, Math.min(xSize - 1, Math.ceil(cropBounds.max.x)));
    if (z0 > z1) [z0, z1] = [z1, z0];
    if (y0 > y1) [y0, y1] = [y1, y0];
    if (x0 > x1) [x0, x1] = [x1, x0];

    const outZ = Math.floor((z1 - z0) / strideZ) + 1;
    const outY = Math.floor((y1 - y0) / strideY) + 1;
    const outX = Math.floor((x1 - x0) / strideX) + 1;
    const out = new Uint8Array(outZ * outY * outX);
    const rowWidth = x1 - x0 + 1;
    const bandRows = y1 - y0 + 1;
    const bandBytes = bandRows * xSize;

    // Probe Range support with the first needed Z plane's Y-band
    const probeZ = z0;
    const probeStart = probeZ * planeSize + y0 * xSize;
    const probeEnd = probeStart + bandBytes - 1;
    const probeRes = await fetch(url, {
        headers: { Range: `bytes=${probeStart}-${probeEnd}` }
    });
    if (probeRes.status !== 206) {
        console.warn(`loadChannelData: Range not supported for ${url} (HTTP ${probeRes.status}); falling back to stream`);
        return null;
    }

    const fillFromBand = (band, outZi) => {
        let oi = outZi * outY * outX;
        for (let y = y0; y <= y1; y += strideY) {
            const localY = y - y0;
            const rowOff = localY * xSize;
            for (let x = x0; x <= x1; x += strideX) {
                out[oi++] = band[rowOff + x];
            }
        }
    };

    const probeBuf = new Uint8Array(await probeRes.arrayBuffer());
    if (probeBuf.length < bandBytes) {
        console.warn('loadChannelData: Range probe returned short body; falling back to stream');
        return null;
    }
    fillFromBand(probeBuf, 0);

    const zList = [];
    for (let z = z0 + strideZ; z <= z1; z += strideZ) zList.push(z);

    const CONCURRENCY = 8;
    let cursor = 0;
    const workers = Array.from({ length: Math.min(CONCURRENCY, zList.length) }, async () => {
        while (cursor < zList.length) {
            const i = cursor++;
            const z = zList[i];
            const start = z * planeSize + y0 * xSize;
            const end = start + bandBytes - 1;
            const res = await fetch(url, { headers: { Range: `bytes=${start}-${end}` } });
            if (res.status !== 206) {
                throw new Error(`Range fetch failed HTTP ${res.status}`);
            }
            const buf = new Uint8Array(await res.arrayBuffer());
            if (buf.length < bandBytes) {
                throw new Error('Range body shorter than Y-band');
            }
            const outZi = Math.floor((z - z0) / strideZ);
            fillFromBand(buf, outZi);
        }
    });

    try {
        await Promise.all(workers);
    } catch (err) {
        console.warn('loadChannelData: Range crop failed, will stream instead:', err);
        return null;
    }

    const downloaded = (1 + zList.length) * bandBytes;
    console.log(
        `loadChannelData: Range crop ${outZ}×${outY}×${outX} from ${url} ` +
        `(~${(downloaded / 1e6).toFixed(1)} MB vs full file; rowWidth=${rowWidth})`
    );

    return {
        data: out,
        shape: [outZ, outY, outX],
        loadStride: [strideZ, strideY, strideX],
        cropOrigin: [z0, y0, x0]
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
    const cacheSuffix = options.cacheSuffix || '';
    // Without a crop, we can hit the cache before fetching metadata.
    if (!options.cropBounds) {
        const cacheKey = getCacheKey(channelIndex, basePath, cacheSuffix);
        if (globalChannelCache.has(cacheKey)) {
            return globalChannelCache.get(cacheKey);
        }
    }

    const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const dir = basePath || CONFIG.VISUALIZATION_DATA_DIR;
    const prefix = `${baseUrl}/${dir}`;
    const paths = [
        // Prefer standard names used by Low/High/Very High folders on arcade
        { data: `${prefix}/channel_${channelIndex}_data.raw`, metadata: `${prefix}/channel_${channelIndex}_metadata.json` },
        { data: `${prefix}/channel_${channelIndex}_data.raw`, metadata: `${prefix}/channel_${channelIndex}_data.json` },
        // Legacy napari export naming (optional)
        { data: `${prefix}/channel_${channelIndex}_napari_data.raw`, metadata: `${prefix}/channel_${channelIndex}_napari_metadata.json` }
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

            const strides = options.strides || chooseLoadStrides(shape, MAX_LOAD_VOXELS, dir);
            const cropBounds = options.cropBounds || null;
            const cropKey = cropBounds
                ? `crop:${Math.floor(cropBounds.min?.z)}:${Math.floor(cropBounds.min?.y)}:${Math.floor(cropBounds.min?.x)}:` +
                  `${Math.ceil(cropBounds.max?.z)}:${Math.ceil(cropBounds.max?.y)}:${Math.ceil(cropBounds.max?.x)}:` +
                  `${strides.strideZ}x${strides.strideY}x${strides.strideX}`
                : '';
            const effectiveSuffix = [cacheSuffix, cropKey].filter(Boolean).join('|');
            const effectiveCacheKey = getCacheKey(channelIndex, basePath, effectiveSuffix);

            if (globalChannelCache.has(effectiveCacheKey)) {
                return globalChannelCache.get(effectiveCacheKey);
            }

            console.log(
                `loadChannelData: fetching ${path.data} shape=${shape.join('×')} strides=${JSON.stringify(strides)}` +
                (cropBounds ? ' [cropped]' : '') +
                (effectiveSuffix ? ` cache=${effectiveSuffix}` : '')
            );

            let loaded = null;
            if (cropBounds) {
                loaded = await readVolumeCropWithHttpRanges(path.data, shape, strides, cropBounds);
            }

            if (!loaded) {
                const dataResponse = await fetch(path.data);
                if (!dataResponse.ok) {
                    console.warn(`loadChannelData: HTTP ${dataResponse.status} for ${path.data}`);
                    continue;
                }

                const dataContentType = dataResponse.headers.get('content-type');
                if (dataContentType && dataContentType.includes('text/html')) continue;

                loaded = await readVolumeFromResponse(dataResponse, shape, strides, cropBounds);
            }

            const result = {
                data: loaded.data,
                metadata: {
                    ...metadata,
                    shape: loaded.shape,
                    originalShape: shape,
                    loadStride: loaded.loadStride,
                    cropOrigin: loaded.cropOrigin || [0, 0, 0]
                }
            };
            globalChannelCache.set(effectiveCacheKey, result);
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
