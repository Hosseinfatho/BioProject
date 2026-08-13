import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Title from './components/Title';
import ChannelSelection from './components/ChannelSelection';
import Region_Selection from './components/Region_Selection';
import Main_View from './components/Main_View';
import Local_View from './components/Local_View';
import Graph_Pannel from './components/Graph_Pannel';
import ROI from './components/ROI';
import { useDataResolution } from './dataResolution.jsx';
import ExampleLibraryModal from './components/ExampleLibraryModal';
import {
  buildSceneSnapshot,
  saveExampleScene,
  deleteExampleScene
} from './presets/scenePreset.js';

// Helper function to convert RGB to hex
const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

function App() {
  const { channelDataDir, resolution, setResolution } = useDataResolution();
  const [channels, setChannels] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [presetVersion, setPresetVersion] = useState(0);
  const lastAggregatedSignatureRef = useRef('');
  const resolutionReadyRef = useRef(false);
  const mainViewRef = useRef(null);
  const exampleApplyTokenRef = useRef(0);
  const [showExampleLibrary, setShowExampleLibrary] = useState(false);

  const [selectedRegionsData, setSelectedRegionsData] = useState([]);
  const [roiPositions, setRoiPositions] = useState([]);
  const [roiBoxes, setRoiBoxes] = useState(null);
  const [highlightedRoiIndex, setHighlightedRoiIndex] = useState(null); // 1-based; hover on 3D box or chart bar
  const lastSelectionBoundsRef = useRef(null); // Persist selection bounds across region switches

  // Left sidebar (Channel + Region Selection) width as % of main content; right side fills the rest
  const [leftWidthPct, setLeftWidthPct] = useState(() => {
    const saved = Number(localStorage.getItem('layout.leftWidthPct'));
    return Number.isFinite(saved) && saved >= 15 && saved <= 50 ? saved : 25;
  });
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const mainRowRef = useRef(null);
  const leftWidthPctRef = useRef(leftWidthPct);

  // Main View height as % of right column; bottom row fills the rest
  const [mainHeightPct, setMainHeightPct] = useState(() => {
    const saved = Number(localStorage.getItem('layout.mainHeightPct'));
    return Number.isFinite(saved) && saved >= 35 && saved <= 85 ? saved : 68;
  });
  const [isResizingMain, setIsResizingMain] = useState(false);
  const rightColumnRef = useRef(null);
  const mainHeightPctRef = useRef(mainHeightPct);

  useEffect(() => {
    leftWidthPctRef.current = leftWidthPct;
  }, [leftWidthPct]);

  useEffect(() => {
    mainHeightPctRef.current = mainHeightPct;
  }, [mainHeightPct]);

  // Keep VTK / canvases sized to the full-bleed Main View
  useEffect(() => {
    const notify = () => window.dispatchEvent(new Event('resize'));
    notify();
    const t = setTimeout(notify, 100);
    return () => clearTimeout(t);
  }, [leftWidthPct, mainHeightPct]);

  useEffect(() => {
    if (!isResizingLeft) return undefined;

    const MIN_PCT = 15;
    const MAX_PCT = 50;

    const onMove = (event) => {
      const row = mainRowRef.current;
      if (!row) return;
      const rect = row.getBoundingClientRect();
      if (rect.width <= 0) return;
      const next = ((event.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.min(MAX_PCT, Math.max(MIN_PCT, next));
      leftWidthPctRef.current = clamped;
      setLeftWidthPct(clamped);
      window.dispatchEvent(new Event('resize'));
    };

    const onUp = () => {
      setIsResizingLeft(false);
      localStorage.setItem('layout.leftWidthPct', String(leftWidthPctRef.current));
      window.dispatchEvent(new Event('resize'));
    };

    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    return () => {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isResizingLeft]);

  useEffect(() => {
    if (!isResizingMain) return undefined;

    const MIN_PCT = 35;
    const MAX_PCT = 85;

    const onMove = (event) => {
      const col = rightColumnRef.current;
      if (!col) return;
      const rect = col.getBoundingClientRect();
      if (rect.height <= 0) return;
      const next = ((event.clientY - rect.top) / rect.height) * 100;
      const clamped = Math.min(MAX_PCT, Math.max(MIN_PCT, next));
      mainHeightPctRef.current = clamped;
      setMainHeightPct(clamped);
      window.dispatchEvent(new Event('resize'));
    };

    const onUp = () => {
      setIsResizingMain(false);
      localStorage.setItem('layout.mainHeightPct', String(mainHeightPctRef.current));
      window.dispatchEvent(new Event('resize'));
    };

    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    return () => {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isResizingMain]);

  const handleChannelsChange = useCallback((updatedChannels) => {
    console.log('App: Channels updated:', updatedChannels.length, 'channels');
    setChannels(updatedChannels);
  }, []);

  const handleSelectionChange = useCallback((selectedData) => {
    console.log('App: ===== RECEIVED SELECTION DATA =====');
    console.log('App: Selected data received:', selectedData);
    console.log('App: Bounds:', selectedData?.bounds);
    console.log('App: Channels:', selectedData?.channels);
    console.log('App: Scaling:', selectedData?.scaling);
    console.log('App: Adding to selectedRegionsData array...');

    if (!selectedData || !selectedData.bounds) {
      console.error('App: Invalid selection data received:', selectedData);
      return;
    }

    // Update persistent bounds
    if (selectedData.worldBounds) {
      lastSelectionBoundsRef.current = selectedData.worldBounds;
      console.log('App: Updated persistent selection bounds');
    }

    // Add unique ID to selection for tracking
    const selectionWithId = {
      ...selectedData,
      id: Date.now() // Simple ID based on timestamp
    };

    // Add new selection to array (append, not replace)
    setSelectedRegionsData((prev) => {
      // Check if this selection already exists (by comparing bounds)
      const exists = prev.some((sel) => {
        if (!sel.bounds || !selectedData.bounds) return false;
        return (
          sel.bounds.min.x === selectedData.bounds.min.x &&
          sel.bounds.min.y === selectedData.bounds.min.y &&
          sel.bounds.min.z === selectedData.bounds.min.z &&
          sel.bounds.max.x === selectedData.bounds.max.x &&
          sel.bounds.max.y === selectedData.bounds.max.y &&
          sel.bounds.max.z === selectedData.bounds.max.z
        );
      });

      if (exists) {
        console.log('App: Selection already exists, not adding duplicate');
        return prev;
      }

      console.log(`App: ✓ Adding new selection (total: ${prev.length + 1})`);
      return [...prev, selectionWithId];
    });
  }, []);

  const handleRegionRemove = useCallback((regionId) => {
    console.log('App: Removing region with id:', regionId);
    setSelectedRegionsData((prev) => {
      const filtered = prev.filter((region) => region.id !== regionId);
      console.log(`App: ✓ Removed region. Remaining: ${filtered.length}`);
      return filtered;
    });
  }, []);

  const buildAggregatedChannels = useCallback((regions) => {
    return regions.flatMap((region) =>
      region.channels.map((channel, index) => ({
        ...channel,
        id: channel.id ?? `${region.id}-${channel.channelIndex ?? index}`,
        regionId: region.id,
        visible: channel.visible !== false,
        opacity: channel.opacity ?? 1
      }))
    );
  }, []);

  const handleRegionToggle = useCallback(({ regionPayload, shouldSelect }) => {
    if (!regionPayload) return;

    setSelectedRegions((prevRegions) => {
      let nextRegions = prevRegions;

      if (shouldSelect) {
        const exists = prevRegions.some((region) => region.id === regionPayload.id);
        if (!exists) {
          nextRegions = [...prevRegions, regionPayload];
        }
      } else {
        nextRegions = prevRegions.filter((region) => region.id !== regionPayload.id);
      }

      console.log('App: Region toggled. New regions count:', nextRegions.length);
      return nextRegions;
    });
  }, [buildAggregatedChannels]);

  const aggregatedRegionChannels = useMemo(
    () => buildAggregatedChannels(selectedRegions),
    [selectedRegions, buildAggregatedChannels]
  );

  const aggregatedSignature = useMemo(
    () =>
      aggregatedRegionChannels
        .map((channel) => `${channel.regionId}-${channel.channelIndex}-${channel.channelBasePath || ''}`)
        .join('|'),
    [aggregatedRegionChannels]
  );

  useEffect(() => {
    if (aggregatedSignature === lastAggregatedSignatureRef.current) return;
    lastAggregatedSignatureRef.current = aggregatedSignature;
    setChannels(aggregatedRegionChannels);
    setPresetVersion((prev) => prev + 1);
  }, [aggregatedSignature, aggregatedRegionChannels]);

  // When Low/High Res toggles, retarget all channel paths and force reload
  useEffect(() => {
    if (!resolutionReadyRef.current) {
      resolutionReadyRef.current = true;
      return;
    }
    setChannels((prev) =>
      prev.map((channel) => ({ ...channel, channelBasePath: channelDataDir }))
    );
    setSelectedRegions((prev) =>
      prev.map((region) => ({
        ...region,
        channels: (region.channels || []).map((channel) => ({
          ...channel,
          channelBasePath: channelDataDir
        }))
      }))
    );
    setPresetVersion((prev) => prev + 1);
  }, [channelDataDir]);

  const handleSaveNamedExample = useCallback((name) => {
    const camera = mainViewRef.current?.getCameraState?.() || null;
    const snapshot = buildSceneSnapshot({
      resolution,
      channels,
      camera,
      selections: selectedRegionsData,
      name
    });
    saveExampleScene(snapshot);
    console.log('App: Example saved', snapshot.name, snapshot.id);
  }, [resolution, channels, selectedRegionsData]);

  const handleDeleteExample = useCallback((id) => {
    deleteExampleScene(id);
    console.log('App: Example deleted', id);
  }, []);

  const handleLoadExampleSnapshot = useCallback(async (snapshot) => {
    if (!snapshot) return;

    const token = ++exampleApplyTokenRef.current;
    console.log('App: Loading Example scene', snapshot.name || snapshot.id);

    if (snapshot.resolution && snapshot.resolution !== resolution) {
      setResolution(snapshot.resolution);
    }

    setSelectedRegions([]);
    setSelectedRegionsData([]);
    lastSelectionBoundsRef.current = null;

    const nextChannels = (snapshot.channels || []).map((ch, index) => ({
      ...ch,
      id: ch.id ?? index,
      channelBasePath:
        ch.channelBasePath ||
        (snapshot.resolution === 'very'
          ? 'visualization_data_very_high'
          : snapshot.resolution === 'low'
            ? 'visualization_data_low'
            : 'visualization_data'),
      visible: ch.visible !== false,
      opacity: ch.opacity ?? 1
    }));
    setChannels(nextChannels);
    setPresetVersion((v) => v + 1);

    const waitMs = snapshot.resolution === 'very' ? 8000 : snapshot.resolution === 'high' ? 4000 : 1500;
    await new Promise((r) => setTimeout(r, waitMs));
    if (token !== exampleApplyTokenRef.current) return;

    if (snapshot.camera) {
      mainViewRef.current?.applyCameraState?.(snapshot.camera);
    }

    const boundsList = (snapshot.selections || [])
      .map((s) => s.worldBounds)
      .filter(Boolean);
    if (boundsList.length) {
      await mainViewRef.current?.applyPresetSelections?.(boundsList);
    }
    console.log('App: Example scene applied', snapshot.name);
  }, [resolution, setResolution]);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: 'var(--app-bg)',
      color: 'var(--text-color)',
      position: 'fixed',
      top: 0,
      left: 0,
      boxSizing: 'border-box'
    }}>
      {/* Full-bleed Main View (whole screen) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <Main_View
          ref={mainViewRef}
          channels={channels}
          activeRegions={selectedRegions}
          onSelectionChange={handleSelectionChange}
          initialSelectionBounds={lastSelectionBoundsRef.current}
          selectedRegionsData={selectedRegionsData}
          roiBoxes={roiBoxes}
          highlightedRoiIndex={highlightedRoiIndex}
          onRoiHover={setHighlightedRoiIndex}
        />
      </div>

      <ExampleLibraryModal
        open={showExampleLibrary}
        onClose={() => setShowExampleLibrary(false)}
        onSave={handleSaveNamedExample}
        onLoad={handleLoadExampleSnapshot}
        onDelete={handleDeleteExample}
      />

      {/* Title — translucent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          overflow: 'hidden',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          pointerEvents: 'auto'
        }}
      >
        <Title
          softwareName="ConGAT: Context-aware graph attention network for 3D region of interest discovery in multiplexed microscopy images"
          onOpenExampleLibrary={() => setShowExampleLibrary(true)}
        />
      </div>

      {/* Layout chrome measure box (full area under title for % sizes) */}
      <div
        ref={mainRowRef}
        style={{
          position: 'absolute',
          top: '42px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: 'none',
          boxSizing: 'border-box'
        }}
      >
        {/* Left Sidebar — Channel / Region Selection */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: `${leftWidthPct}%`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxSizing: 'border-box',
            pointerEvents: 'auto',
            background: 'var(--overlay-tint)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            borderRight: '1px solid var(--border-color)',
            minWidth: 0
          }}
        >
          <div
            style={{
              width: '100%',
              maxHeight: '60%',
              overflowY: 'auto',
              overflowX: 'hidden',
              boxSizing: 'border-box',
              flexShrink: 0,
              minHeight: 0
            }}
          >
            <ChannelSelection
              onChannelsChange={handleChannelsChange}
              presetChannels={channels}
              presetVersion={presetVersion}
            />
          </div>
          <div
            style={{
              flex: 1,
              width: '100%',
              overflow: 'hidden',
              boxSizing: 'border-box',
              minHeight: 0
            }}
          >
            <Region_Selection
              onToggleRegion={handleRegionToggle}
              selectedRegions={selectedRegions}
            />
          </div>
        </div>

        {/* Drag handle — resize left sidebar width */}
        <div
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize channel and region selection width"
          aria-valuemin={15}
          aria-valuemax={50}
          aria-valuenow={Math.round(leftWidthPct)}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsResizingLeft(true);
          }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `calc(${leftWidthPct}% - 3px)`,
            width: '6px',
            cursor: 'col-resize',
            pointerEvents: 'auto',
            backgroundColor: isResizingLeft ? '#4CAF50' : 'rgba(76, 175, 80, 0.35)',
            transition: isResizingLeft ? 'none' : 'background-color 0.15s',
            zIndex: 5
          }}
          onMouseEnter={(e) => {
            if (!isResizingLeft) e.currentTarget.style.backgroundColor = '#4CAF50';
          }}
          onMouseLeave={(e) => {
            if (!isResizingLeft) e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 0.35)';
          }}
        />

        {/* Right column measure for vertical resize */}
        <div
          ref={rightColumnRef}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: `${leftWidthPct}%`,
            pointerEvents: 'none',
            boxSizing: 'border-box'
          }}
        >
          {/* Horizontal resize handle */}
          <div
            role="separator"
            aria-orientation="horizontal"
            aria-label="Resize bottom panels height"
            aria-valuemin={35}
            aria-valuemax={85}
            aria-valuenow={Math.round(mainHeightPct)}
            onMouseDown={(e) => {
              e.preventDefault();
              setIsResizingMain(true);
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: `calc(${mainHeightPct}% - 3px)`,
              height: '6px',
              cursor: 'row-resize',
              pointerEvents: 'auto',
              backgroundColor: isResizingMain ? '#4CAF50' : 'rgba(76, 175, 80, 0.35)',
              transition: isResizingMain ? 'none' : 'background-color 0.15s',
              zIndex: 5
            }}
            onMouseEnter={(e) => {
              if (!isResizingMain) e.currentTarget.style.backgroundColor = '#4CAF50';
            }}
            onMouseLeave={(e) => {
              if (!isResizingMain) e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 0.35)';
            }}
          />

          {/* Bottom panels — Local / Graph / ROI */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: `${mainHeightPct}%`,
              display: 'flex',
              overflow: 'hidden',
              boxSizing: 'border-box',
              pointerEvents: 'auto',
              background: 'var(--overlay-tint)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              borderTop: '1px solid var(--border-color)',
              minHeight: 0
            }}
          >
            <div
              style={{
                flex: 1,
                height: '100%',
                overflow: 'hidden',
                boxSizing: 'border-box',
                minWidth: 0,
                borderRight: '1px solid var(--border-color)'
              }}
            >
              <Local_View
                selectedRegionsData={selectedRegionsData}
                channels={channels}
                onRegionRemove={handleRegionRemove}
              />
            </div>
            <div
              style={{
                flex: 1,
                height: '100%',
                overflow: 'hidden',
                boxSizing: 'border-box',
                minWidth: 0,
                borderRight: '1px solid var(--border-color)'
              }}
            >
              <Graph_Pannel
                key={selectedRegionsData.map((r) => r.id).join('-') || 'empty'}
                selectedRegionsData={selectedRegionsData}
                channels={channels}
                selectedRegions={selectedRegions}
              />
            </div>
            <div
              style={{
                flex: 1,
                height: '100%',
                overflow: 'hidden',
                boxSizing: 'border-box',
                minWidth: 0
              }}
            >
              <ROI
                onPositionsChange={setRoiPositions}
                onRoiBoxChange={setRoiBoxes}
                highlightedRoiIndex={highlightedRoiIndex}
                onChartRoiHover={setHighlightedRoiIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
