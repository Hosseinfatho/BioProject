import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { loadChannelData } from '../hooks/useChannelData';
import { useTheme } from '../theme.jsx';
import { CONFIG } from '../config';
import {
  createLocalVtkView
} from '../vtk/localVtkVolumeView';

/** Local View always prefers Very High volumes when available. */
const LOCAL_VIEW_DATA_DIR =
  CONFIG.VERY_HIGH_RES_CHANNEL_DIR || 'visualization_data_very_high';

const toPlainVec = (v) => {
  if (!v) return null;
  if (typeof v.x === 'number') return { x: v.x, y: v.y, z: v.z };
  return null;
};

/**
 * Convert selection worldBounds → voxel bounds + scaling for a given volume shape.
 * Same mapping as Main_View.extractSelectedRegion so the box matches spatially.
 */
const worldBoundsToVoxelBounds = (worldBounds, shape) => {
  if (!worldBounds?.min || !worldBounds?.max || !shape) return null;
  const [zSize, ySize, xSize] = shape.map(Number);
  if (!zSize || !ySize || !xSize) return null;

  const maxDim = Math.max(zSize, ySize, xSize);
  const scaleX = xSize / maxDim;
  const scaleY = ySize / maxDim;
  const scaleZ = (zSize / maxDim) / 4;

  const min = toPlainVec(worldBounds.min);
  const max = toPlainVec(worldBounds.max);
  if (!min || !max) return null;

  let voxelMinX = Math.max(0, Math.floor(((min.x / scaleX + 1) / 2) * xSize));
  let voxelMaxX = Math.min(xSize - 1, Math.ceil(((max.x / scaleX + 1) / 2) * xSize));
  let voxelMinY = Math.max(0, Math.floor(((min.y / scaleY + 1) / 2) * ySize));
  let voxelMaxY = Math.min(ySize - 1, Math.ceil(((max.y / scaleY + 1) / 2) * ySize));
  let voxelMinZ = Math.max(0, Math.floor(((min.z / scaleZ + 1) / 2) * zSize));
  let voxelMaxZ = Math.min(zSize - 1, Math.ceil(((max.z / scaleZ + 1) / 2) * zSize));

  if (voxelMinX > voxelMaxX) [voxelMinX, voxelMaxX] = [voxelMaxX, voxelMinX];
  if (voxelMinY > voxelMaxY) [voxelMinY, voxelMaxY] = [voxelMaxY, voxelMinY];
  if (voxelMinZ > voxelMaxZ) [voxelMinZ, voxelMaxZ] = [voxelMaxZ, voxelMinZ];
  if (voxelMaxX === voxelMinX) voxelMaxX = Math.min(xSize - 1, voxelMinX + 1);
  if (voxelMaxY === voxelMinY) voxelMaxY = Math.min(ySize - 1, voxelMinY + 1);
  if (voxelMaxZ === voxelMinZ) voxelMaxZ = Math.min(zSize - 1, voxelMinZ + 1);

  return {
    bounds: {
      min: { x: voxelMinX, y: voxelMinY, z: voxelMinZ },
      max: { x: voxelMaxX, y: voxelMaxY, z: voxelMaxZ }
    },
    scaling: { scaleX, scaleY, scaleZ, xSize, ySize, zSize }
  };
};

/**
 * Remap voxel bounds from one volume shape (e.g. Low) onto another (e.g. Very High).
 */
const remapVoxelBoundsToShape = (bounds, fromScaling, toShape) => {
  if (!bounds?.min || !bounds?.max || !fromScaling || !toShape) return null;
  const [tz, ty, tx] = toShape.map(Number);
  const xSize = Number(fromScaling.xSize);
  const ySize = Number(fromScaling.ySize);
  const zSize = Number(fromScaling.zSize);
  if (!tz || !ty || !tx || !xSize || !ySize || !zSize) return null;

  const mapAxis = (v, from, to) => Math.round((Number(v) / from) * to);
  let minX = Math.max(0, mapAxis(bounds.min.x, xSize, tx));
  let maxX = Math.min(tx - 1, mapAxis(bounds.max.x, xSize, tx));
  let minY = Math.max(0, mapAxis(bounds.min.y, ySize, ty));
  let maxY = Math.min(ty - 1, mapAxis(bounds.max.y, ySize, ty));
  let minZ = Math.max(0, mapAxis(bounds.min.z, zSize, tz));
  let maxZ = Math.min(tz - 1, mapAxis(bounds.max.z, zSize, tz));

  if (minX > maxX) [minX, maxX] = [maxX, minX];
  if (minY > maxY) [minY, maxY] = [maxY, minY];
  if (minZ > maxZ) [minZ, maxZ] = [maxZ, minZ];
  if (maxX === minX) maxX = Math.min(tx - 1, minX + 1);
  if (maxY === minY) maxY = Math.min(ty - 1, minY + 1);
  if (maxZ === minZ) maxZ = Math.min(tz - 1, minZ + 1);

  return {
    min: { x: minX, y: minY, z: minZ },
    max: { x: maxX, y: maxY, z: maxZ }
  };
};

/** Lightweight metadata fetch for Very High (no .raw download). */
const fetchVeryHighMetadata = async (channelIndex) => {
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const prefix = `${baseUrl}/${LOCAL_VIEW_DATA_DIR}`;
  const names = [
    `channel_${channelIndex}_metadata.json`,
    `channel_${channelIndex}_data.json`,
    `channel_${channelIndex}_napari_metadata.json`
  ];
  for (const name of names) {
    try {
      const response = await fetch(`${prefix}/${name}`);
      if (!response.ok) continue;
      const json = await response.json();
      if (Array.isArray(json.shape) && json.shape.length >= 3) return json;
    } catch (_) {
      /* try next */
    }
  }
  return null;
};

/** Load channel for Local View: Very High crop at native density. */
const loadLocalViewChannelData = async (channelConfig, cropBounds) => {
  const index = channelConfig.channelIndex;
  const fallback = channelConfig.channelBasePath || CONFIG.VISUALIZATION_DATA_DIR;

  if (cropBounds) {
    try {
      const cropped = await loadChannelData(index, {
        basePath: LOCAL_VIEW_DATA_DIR,
        strides: { strideZ: 1, strideY: 1, strideX: 1 },
        cropBounds,
        cacheSuffix: 'local-crop'
      });
      if (cropped) {
        console.log(
          `Local_View: channel ${index} cropped NATIVE from ${LOCAL_VIEW_DATA_DIR} ` +
          `shape=${cropped.metadata.shape?.join('×')}`
        );
        return cropped;
      }
    } catch (err) {
      console.warn(`Local_View: cropped native load failed for channel ${index}:`, err);
    }
  }

  let data = await loadChannelData(index, { basePath: LOCAL_VIEW_DATA_DIR });
  if (data) {
    console.log(`Local_View: channel ${index} loaded (2×2) from ${LOCAL_VIEW_DATA_DIR}`);
    return data;
  }

  if (fallback && fallback !== LOCAL_VIEW_DATA_DIR) {
    console.warn(
      `Local_View: Very High missing for channel ${index}; falling back to ${fallback}`
    );
    data = await loadChannelData(index, { basePath: fallback });
  }
  return data;
};

// Component for rendering a single local view (VTK multi-volume)
const LocalViewContent = ({ selectedRegionData, channels = [], onCloseTab, regionId }) => {
  const { theme, colors } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;
  const mountRef = useRef(null);
  const vtkViewRef = useRef(null);
  const updateTimeoutRef = useRef(null);
  const loadGenRef = useRef(0);

  const [cellCount, setCellCount] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);

  const createLocalVisualization = useCallback(async (selectedData, channelsOverride = null) => {
    const vtkView = vtkViewRef.current;
    if (!vtkView || !selectedData || !(selectedData.bounds || selectedData.worldBounds)) {
      return;
    }

    const gen = ++loadGenRef.current;
    setLoading(true);
    setLoadError(null);

    let channelsToUse =
      channelsOverride && channelsOverride.length > 0
        ? channelsOverride
        : selectedData.channels;

    if (!channelsToUse || channelsToUse.length === 0) {
      channelsToUse = selectedData.channels || [];
    }

    const visibleChannels = (channelsToUse || []).filter((c) => c.visible !== false);
    if (visibleChannels.length === 0) {
      vtkView.clearVolumes();
      setCellCount(0);
      setLoading(false);
      return;
    }

    try {
      const metaHint = await fetchVeryHighMetadata(visibleChannels[0].channelIndex);
      if (gen !== loadGenRef.current) return;

      const fullShape = metaHint?.shape || [194, 2754, 5454];
      const remappedWorld = worldBoundsToVoxelBounds(selectedData.worldBounds, fullShape);
      const remappedBounds = remapVoxelBoundsToShape(
        selectedData.bounds,
        selectedData.scaling,
        fullShape
      );
      // Prefer world remap; fall back to scaling Low→VH so Local never loads empty crop.
      const cropBounds = remappedWorld?.bounds || remappedBounds || selectedData.bounds || null;

      if (cropBounds) {
        console.log(
          `Local_View VTK: crop on native VH ${fullShape.join('×')} → ` +
          `X[${cropBounds.min.x},${cropBounds.max.x}] Y[${cropBounds.min.y},${cropBounds.max.y}] Z[${cropBounds.min.z},${cropBounds.max.z}]`
        );
      } else {
        console.warn('Local_View VTK: no cropBounds — cannot load selection crop');
      }

      // Parallel channel loads (Range crop) — biggest win for Local load time
      const loadedList = new Array(visibleChannels.length);
      let nextIdx = 0;
      const CHANNEL_CONCURRENCY = Math.min(3, visibleChannels.length);
      await Promise.all(
        Array.from({ length: CHANNEL_CONCURRENCY }, async () => {
          while (nextIdx < visibleChannels.length) {
            if (gen !== loadGenRef.current) return;
            const i = nextIdx++;
            const channelConfig = visibleChannels[i];
            const channelData = await loadLocalViewChannelData(channelConfig, cropBounds);
            if (!channelData) {
              console.warn(`Local_View VTK: Failed to load channel ${channelConfig.channelIndex}`);
              loadedList[i] = null;
              continue;
            }
            const shape = channelData.metadata.shape.map(Number);
            loadedList[i] = {
              data: channelData.data,
              shape,
              channelConfig,
              metadata: channelData.metadata,
              approxVoxels: shape[0] * shape[1] * shape[2]
            };
          }
        })
      );

      if (gen !== loadGenRef.current) return;

      const channelVolumes = loadedList.filter(Boolean);
      const totalActive = channelVolumes.reduce((sum, cv) => sum + (cv.approxVoxels || 0), 0);

      if (channelVolumes.length === 0) {
        vtkView.clearVolumes();
        setCellCount(0);
        setLoadError('No channel volume data available');
        return;
      }

      // Native crop quality: no extra GPU downsample beyond the crop itself
      vtkView.setChannelVolumes(channelVolumes, {
        lightMode: themeRef.current === 'light',
        quality: 'fast',
        maxVoxels: Number.POSITIVE_INFINITY
      });
      setCellCount(totalActive);
      console.log(
        `Local_View VTK: ${channelVolumes.length} volume(s) via multi-volume ray casting`
      );
    } catch (err) {
      console.error('Local_View VTK: visualization failed', err);
      setLoadError(err?.message || String(err));
    } finally {
      if (gen === loadGenRef.current) setLoading(false);
    }
  }, []);

  // Init VTK view once
  useEffect(() => {
    if (!mountRef.current) return;
    const view = createLocalVtkView(mountRef.current);
    vtkViewRef.current = view;
    view.setBackground(colors.canvasBg || '#000000');

    const handleResize = () => view.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      view.delete();
      vtkViewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Theme background + TF refresh when Day/Night flips (no volume rebuild)
  useEffect(() => {
    const view = vtkViewRef.current;
    if (!view) return;
    view.setBackground(colors.canvasBg || '#000000');
    if (typeof view.updateAllAppearances === 'function') {
      view.updateAllAppearances({ lightMode: theme === 'light' });
    } else {
      view.render?.();
    }
  }, [theme, colors.canvasBg]);

  // Load / refresh volumes when selection or channels change
  useEffect(() => {
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
      updateTimeoutRef.current = null;
    }

    if (!selectedRegionData || !(selectedRegionData.bounds || selectedRegionData.worldBounds)) {
      vtkViewRef.current?.clearVolumes();
      setCellCount(0);
      return;
    }

    let channelsToUse = [];
    if (channels?.length > 0 && selectedRegionData.channels?.length > 0) {
      const selectedChannelIndices = new Set(
        selectedRegionData.channels.map((c) => c.channelIndex)
      );
      channelsToUse = channels.filter((c) => selectedChannelIndices.has(c.channelIndex));
      if (channelsToUse.length === 0) {
        channelsToUse = selectedRegionData.channels || [];
      }
    } else {
      channelsToUse =
        channels?.length > 0 ? channels : selectedRegionData.channels || [];
    }

    if (!channelsToUse.length) return;

    const tryCreate = (retries = 10) => {
      if (!vtkViewRef.current) {
        if (retries > 0) setTimeout(() => tryCreate(retries - 1), 150);
        return;
      }
      createLocalVisualization(selectedRegionData, channelsToUse);
    };

    updateTimeoutRef.current = setTimeout(() => tryCreate(), 80);

    return () => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
        updateTimeoutRef.current = null;
      }
    };
  }, [selectedRegionData, channels, createLocalVisualization]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!showInfoModal) return;
      const modal = document.getElementById('info-modal');
      const infoButton = event.target.closest('button');
      if (modal && !modal.contains(event.target)) {
        if (!infoButton || !infoButton.textContent.includes('ⓘ')) {
          setShowInfoModal(false);
        }
      }
    };

    if (showInfoModal) {
      const t = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
      return () => {
        clearTimeout(t);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showInfoModal]);

  const resetView = (e) => {
    if (onCloseTab && regionId !== undefined && selectedRegionData) {
      const event = e || { stopPropagation: () => {} };
      event.stopPropagation();
      onCloseTab(event, selectedRegionData);
      return;
    }
    vtkViewRef.current?.resetCamera();
  };

  const getSectionInfo = () => {
    if (!selectedRegionData?.bounds) return null;
    const bounds = selectedRegionData.bounds;
    const widthVoxels = bounds.max.x - bounds.min.x + 1;
    const heightVoxels = bounds.max.y - bounds.min.y + 1;
    const depthVoxels = bounds.max.z - bounds.min.z + 1;
    const voxelSize = 1;
    return {
      width: Math.round(widthVoxels * voxelSize),
      height: Math.round(heightVoxels * voxelSize),
      depth: Math.round(depthVoxels * voxelSize),
      volume: Math.round(widthVoxels * heightVoxels * depthVoxels * voxelSize ** 3)
    };
  };

  const sectionInfo = getSectionInfo();

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        border: '1px solid var(--border-color, #444)',
        padding: '1px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        color: 'var(--text-color, #ffffff)'
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: '5px',
          fontSize: '14px',
          color: 'var(--text-color, white)',
          position: 'absolute',
          top: '5px',
          left: '10px',
          zIndex: 100,
          backgroundColor: 'var(--header-bg, #333333)',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        Local View
        <span
          style={{
            fontSize: '10px',
            opacity: 0.7,
            fontWeight: 'normal'
          }}
          title="VTK.js multi-volume ray casting"
        >
          VTK
        </span>
        {selectedRegionData && sectionInfo && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInfoModal(!showInfoModal);
            }}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              lineHeight: '1'
            }}
            title="Show selection information"
          >
            ⓘ
          </button>
        )}
      </h3>

      {!selectedRegionData && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#666',
            fontSize: '12px',
            textAlign: 'center',
            zIndex: 50,
            pointerEvents: 'none'
          }}
        >
          <div>No selection made</div>
          <div style={{ fontSize: '10px', marginTop: '5px' }}>
            Select a region in Main View
          </div>
        </div>
      )}

      {loading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 60,
            color: '#ccc',
            fontSize: '12px',
            background: 'rgba(0,0,0,0.55)',
            padding: '10px 14px',
            borderRadius: '6px',
            pointerEvents: 'none'
          }}
        >
          Loading VTK volumes…
        </div>
      )}

      {loadError && !loading && (
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '12px',
            zIndex: 60,
            color: '#f88',
            fontSize: '11px',
            maxWidth: '70%'
          }}
        >
          {loadError}
        </div>
      )}

      {showInfoModal && selectedRegionData && sectionInfo && (
        <div
          id="info-modal"
          style={{
            position: 'absolute',
            top: '45px',
            left: '10px',
            zIndex: 200,
            backgroundColor: 'rgba(30, 30, 30, 0.95)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            padding: '12px 14px',
            fontSize: '12px',
            minWidth: '200px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
          }}
        >
          <div style={{ marginBottom: '6px', fontWeight: 'bold' }}>Selection</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 10px' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Size:</span>
            <span>
              {sectionInfo.width} × {sectionInfo.height} × {sectionInfo.depth} μm
            </span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Volume:</span>
            <span>{sectionInfo.volume.toLocaleString()} μm³</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Active voxels:</span>
            <span>{cellCount.toLocaleString()}</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Renderer:</span>
            <span>VTK multi-volume</span>
          </div>
        </div>
      )}

      {selectedRegionData && (
        <button
          onClick={resetView}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 100,
            padding: '6px 12px',
            backgroundColor: '#555',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
          title={onCloseTab ? 'Close tab' : 'Reset camera'}
        >
          {onCloseTab ? 'Close' : 'Reset View'}
        </button>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end'
        }}
      >
        <div
          style={{
            width: '60px',
            height: '2px',
            backgroundColor: 'white',
            marginBottom: '4px'
          }}
        />
        <div style={{ color: 'white', fontSize: '10px' }}>10 µm</div>
      </div>

      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </div>
  );
};

// Main wrapper component with tabs support
const Local_View = ({ selectedRegionsData, selectedRegionData, channels = [], onRegionRemove }) => {
  const regionsArray = selectedRegionsData || (selectedRegionData ? [selectedRegionData] : []);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [closedTabIds, setClosedTabIds] = useState(new Set());

  const regionIdMap = useMemo(() => {
    const map = new Map();
    regionsArray.forEach((region, index) => {
      const regionId = region.id || index;
      map.set(region, regionId);
    });
    return map;
  }, [regionsArray]);

  const visibleRegions = useMemo(() => {
    return regionsArray.filter((region) => {
      const regionId = regionIdMap.get(region);
      return regionId !== undefined && !closedTabIds.has(regionId);
    });
  }, [regionsArray, closedTabIds, regionIdMap]);

  useEffect(() => {
    if (visibleRegions.length > 0) {
      if (activeTabIndex >= visibleRegions.length) {
        setActiveTabIndex(visibleRegions.length - 1);
      } else if (activeTabIndex < 0) {
        setActiveTabIndex(0);
      }
    } else {
      setActiveTabIndex(0);
    }
  }, [visibleRegions.length, activeTabIndex]);

  const handleCloseTab = (e, region) => {
    e.stopPropagation();
    const regionId = regionIdMap.get(region);
    if (regionId === undefined) return;

    const currentVisibleIndex = visibleRegions.findIndex((r) => {
      const rId = regionIdMap.get(r);
      return rId === regionId;
    });
    if (currentVisibleIndex === -1) return;

    const remainingCount = visibleRegions.length - 1;
    if (activeTabIndex === currentVisibleIndex) {
      if (remainingCount > 0) {
        setActiveTabIndex(Math.min(currentVisibleIndex, remainingCount - 1));
      } else {
        setActiveTabIndex(0);
      }
    } else if (activeTabIndex > currentVisibleIndex) {
      setActiveTabIndex((prev) => Math.max(0, prev - 1));
    }

    setClosedTabIds((prev) => new Set([...prev, regionId]));
    if (onRegionRemove) onRegionRemove(regionId);
  };

  if (visibleRegions.length === 0) {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
          border: '1px solid var(--border-color, #444)',
          padding: '1px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'var(--text-muted, #666)',
            fontSize: '12px',
            textAlign: 'center',
            zIndex: 50,
            pointerEvents: 'none',
            backgroundColor: 'var(--header-bg)',
            padding: '10px 14px',
            borderRadius: '6px',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        >
          <div>No selection made</div>
          <div style={{ fontSize: '10px', marginTop: '5px' }}>
            Select a region in Main View
          </div>
        </div>
      </div>
    );
  }

  if (visibleRegions.length === 1) {
    const singleRegion = visibleRegions[0];
    const singleRegionId = regionIdMap.get(singleRegion);
    return (
      <LocalViewContent
        selectedRegionData={singleRegion}
        channels={channels}
        onCloseTab={handleCloseTab}
        regionId={singleRegionId}
      />
    );
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        border: '1px solid var(--border-color, #444)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        color: 'var(--text-color, #ffffff)'
      }}
    >
      <div
        style={{
          display: 'flex',
          backgroundColor: 'var(--header-bg, #333333)',
          borderBottom: '1px solid var(--border-color, #444)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          padding: '0',
          overflowX: 'auto',
          overflowY: 'hidden',
          flexShrink: 0,
          zIndex: 10
        }}
      >
        {visibleRegions.map((region, index) => {
          const regionId = regionIdMap.get(region);
          return (
            <div
              key={regionId || `tab-${index}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: activeTabIndex === index ? '#333' : 'transparent',
                borderBottom:
                  activeTabIndex === index ? '2px solid #4ade80' : '2px solid transparent',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setActiveTabIndex(index)}
                style={{
                  padding: '8px 16px',
                  paddingRight: '8px',
                  backgroundColor: 'transparent',
                  color: activeTabIndex === index ? '#fff' : '#aaa',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: activeTabIndex === index ? 'bold' : 'normal',
                  whiteSpace: 'nowrap',
                  minWidth: '60px'
                }}
              >
                Tab {index + 1}
              </button>
              <button
                onClick={(e) => handleCloseTab(e, region)}
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  color: activeTabIndex === index ? '#fff' : '#aaa',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  width: '20px',
                  height: '20px',
                  borderRadius: '3px',
                  marginRight: '4px'
                }}
                title="Close tab"
              >
                ×
              </button>
            </div>
          );
        })}
      </div>

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {visibleRegions.map((region, index) => {
          const isActive = activeTabIndex === index;
          if (!isActive) return null;
          return (
            <div
              key={region.id || `region-${index}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
              }}
            >
              <LocalViewContent
                key={`content-${region.id || index}`}
                selectedRegionData={region}
                channels={channels}
                onCloseTab={handleCloseTab}
                regionId={regionIdMap.get(region)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Local_View;
