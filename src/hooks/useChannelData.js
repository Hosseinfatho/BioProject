import { useState, useEffect, useRef } from 'react';
import { CONFIG } from '../config';

// Global cache to persist data across component unmounts
const globalChannelCache = new Map();

/**
 * Cache key for channel data (index + optional basePath).
 * @param {number} channelIndex
 * @param {string} [basePath]
 */
function getCacheKey(channelIndex, basePath) {
    return basePath ? `${basePath}:${channelIndex}` : String(channelIndex);
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

            const dataResponse = await fetch(path.data);
            if (!dataResponse.ok) continue;

            const dataContentType = dataResponse.headers.get('content-type');
            if (dataContentType && dataContentType.includes('text/html')) continue;

            const arrayBuffer = await dataResponse.arrayBuffer();
            const data = new Uint8Array(arrayBuffer);

            const result = { data, metadata };
            globalChannelCache.set(cacheKey, result);
            return result;
        } catch (error) {
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
