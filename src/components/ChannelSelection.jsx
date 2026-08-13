import React, { useState, useEffect, useMemo, useRef } from 'react';
import channelNamesData from '../channel_names.json';
import { CONFIG } from '../config';
import { useDataResolution } from '../dataResolution.jsx';
import { useTheme } from '../theme.jsx';

// Generate channel options (0-69 based on data shape)
const CHANNEL_COUNT = 70;

// Default intensity thresholds as fraction of data range: 3% (min) and 80% (max)
const DEFAULT_THRESHOLD_MIN_FRACTION = 0.05;
const DEFAULT_THRESHOLD_MAX_FRACTION = 0.9;

// Helper function to convert RGB to hex
const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

const ChannelSelection = ({ onChannelsChange, presetChannels = [], presetVersion = 0 }) => {
  const { channelDataDir, resolution, setResolution } = useDataResolution();
  const { isLight, colors } = useTheme();
  const [channels, setChannels] = useState([]);
  const presetVersionRef = useRef(null);
  const presetChannelsRef = useRef(presetChannels);
  const applyingPresetRef = useRef(false);

  useEffect(() => {
    presetChannelsRef.current = presetChannels;
  }, [presetChannels]);


  const [channelRanges, setChannelRanges] = useState({}); // Store data ranges for each channel
  const [pendingThresholds, setPendingThresholds] = useState({});

  const [channelOptions, setChannelOptions] = useState(() => {
    // Initialize with channel names from JSON or fallback to "Channel X"
    if (channelNamesData && Array.isArray(channelNamesData) && channelNamesData.length >= CHANNEL_COUNT) {
      return Array.from({ length: CHANNEL_COUNT }, (_, i) => ({
        value: i,
        label: channelNamesData[i] || `Channel ${i}`
      }));
    }
    // Fallback if channel names not loaded
    return Array.from({ length: CHANNEL_COUNT }, (_, i) => ({
      value: i,
      label: `Channel ${i}`
    }));
  });

  // Load channel names from JSON file (if not already loaded)
  useEffect(() => {
    const loadChannelNames = async () => {
      try {
        // Try to load from src folder
        const response = await fetch('/src/channel_names.json');
        if (response.ok) {
          const names = await response.json();
          if (Array.isArray(names) && names.length >= CHANNEL_COUNT) {
            setChannelOptions(
              Array.from({ length: CHANNEL_COUNT }, (_, i) => ({
                value: i,
                label: names[i] || `Channel ${i}`
              }))
            );
          }
        }
      } catch (error) {
        console.warn('Could not load channel names from JSON, using defaults:', error);
        // Keep default channel options
      }
    };

    // Only load if we don't have the data from import
    if (!channelNamesData || !Array.isArray(channelNamesData) || channelNamesData.length < CHANNEL_COUNT) {
      loadChannelNames();
    }
  }, []);

  const channelIndexKey = useMemo(
    () => channels.map((c) => `${c.channelBasePath || 'hi'}:${c.channelIndex}`).join(','),
    [channels]
  );

  useEffect(() => {
    if (presetVersion === undefined || presetVersion === null) return;
    if (presetVersionRef.current === presetVersion) return;
    presetVersionRef.current = presetVersion;

    const externalChannels = Array.isArray(presetChannelsRef.current)
      ? presetChannelsRef.current
      : [];

    const usedIds = new Set();
    const normalizedChannels = externalChannels.map((channel, idx) => {
      const baseId = channel.id ?? channel.channelIndex ?? idx;
      let candidateId = String(baseId);
      let duplicateCounter = 1;
      while (usedIds.has(candidateId)) {
        candidateId = `${baseId}_${duplicateCounter++}`;
      }
      usedIds.add(candidateId);

      return {
        ...channel,
        id: candidateId,
        visible: channel.visible !== false,
        opacity: channel.opacity ?? 1,
        color: channel.color || '#ffffff'
      };
    });

    const initialPending = {};
    normalizedChannels.forEach((channel) => {
      initialPending[channel.id] = {
        thresholdMin: channel.thresholdMin ?? 0,
        thresholdMax: channel.thresholdMax ?? 0
      };
    });

    setChannelRanges({});
    setPendingThresholds(initialPending);
    applyingPresetRef.current = true;
    setChannels(normalizedChannels);
  }, [presetVersion, onChannelsChange]);

  // Keep pending thresholds in sync with channel list
  useEffect(() => {
    setPendingThresholds((prev) => {
      const next = {};
      channels.forEach((channel) => {
        const existing = prev[channel.id];
        next[channel.id] = existing || {
          thresholdMin: channel.thresholdMin,
          thresholdMax: channel.thresholdMax
        };
      });
      return next;
    });
  }, [channels]);

  // Load metadata to get data ranges for each channel only when indices change
  useEffect(() => {
    let cancelled = false;

    const loadChannelRanges = async () => {
      if (channels.length === 0) {
        if (!cancelled) {
          setChannelRanges({});
        }
        return;
      }

      const ranges = { ...channelRanges };
      let changed = false;

      for (const channel of channels) {
        const channelIndex = channel.channelIndex;
        const dir = channel.channelBasePath || channelDataDir;
        const rangeKey = `${dir}:${channelIndex}`;
        if (ranges[rangeKey]) continue;

        const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
        const prefix = `${baseUrl}/${dir}`;
        const paths = [
          `${prefix}/channel_${channelIndex}_metadata.json`,
          `${prefix}/channel_${channelIndex}_data.json`,
          `${prefix}/channel_${channelIndex}_napari_metadata.json`
        ];

        for (const path of paths) {
          try {
            const response = await fetch(path);
            if (response.ok) {
              const metadata = await response.json();
              const dataRange = metadata.dataRange || [0, 65535];
              ranges[rangeKey] = dataRange;
              // Keep index-only key for high-res defaults (no basePath)
              if (!channel.channelBasePath) {
                ranges[channelIndex] = dataRange;
              }
              console.log(`Channel ${channelIndex} (${dir}): Data range [${dataRange[0]}, ${dataRange[1]}]`);
              changed = true;
              break;
            }
          } catch (error) {
            // continue trying other paths
          }
        }

        if (!ranges[rangeKey]) {
          ranges[rangeKey] = [0, 65535];
          if (!channel.channelBasePath) {
            ranges[channelIndex] = [0, 65535];
          }
          changed = true;
          console.log(`Channel ${channelIndex} (${dir}): Using default data range [0, 65535]`);
        }
      }

      if (changed && !cancelled) {
        setChannelRanges(ranges);
        setChannels((prev) =>
          prev.map((channel) => {
            const dir = channel.channelBasePath || channelDataDir;
            const rangeKey = `${dir}:${channel.channelIndex}`;
            const range = ranges[rangeKey] || ranges[channel.channelIndex] || [0, 65535];
            if (
              channel.dataRange &&
              channel.dataRange[0] === range[0] &&
              channel.dataRange[1] === range[1]
            ) {
              return channel;
            }

            const rangeSpan = range[1] - range[0];
            const defaultMin = Math.round(range[0] + rangeSpan * DEFAULT_THRESHOLD_MIN_FRACTION);
            const defaultMax = Math.round(range[0] + rangeSpan * DEFAULT_THRESHOLD_MAX_FRACTION);

            setPendingThresholds((prevPending) => ({
              ...prevPending,
              [channel.id]: {
                thresholdMin: defaultMin,
                thresholdMax: defaultMax
              }
            }));

            return {
              ...channel,
              dataRange: range,
              thresholdMin:
                channel.thresholdMin === undefined ||
                  channel.thresholdMin < range[0] ||
                  channel.thresholdMin > range[1]
                  ? defaultMin
                  : channel.thresholdMin,
              thresholdMax:
                channel.thresholdMax === undefined ||
                  channel.thresholdMax < range[0] ||
                  channel.thresholdMax > range[1]
                  ? defaultMax
                  : channel.thresholdMax
            };
          })
        );
      }
    };

    loadChannelRanges();

    return () => {
      cancelled = true;
    };
  }, [channelIndexKey]);

  // Notify parent on mount and whenever channels change
  useEffect(() => {
    if (applyingPresetRef.current) {
      applyingPresetRef.current = false;
      return;
    }
    if (onChannelsChange) {
      onChannelsChange(channels);
    }
  }, [channels, onChannelsChange]);

  const addChannel = async () => {
    const numericIds = channels
      .map((c) => (typeof c.id === 'number' && Number.isFinite(c.id) ? c.id : null))
      .filter((id) => id !== null);
    const maxId = numericIds.length > 0 ? Math.max(...numericIds) : -1;
    const newId = maxId + 1;

    // Follow Low / High / Very High Res toggle (default Low)
    const channelBasePath = channelDataDir;
    let dataRange = [0, 65535];
    const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const fallbackDirs = [
      CONFIG.LOW_RES_CHANNEL_DIR || 'visualization_data_low',
      CONFIG.VISUALIZATION_DATA_DIR || 'visualization_data',
      CONFIG.VERY_HIGH_RES_CHANNEL_DIR || 'visualization_data_very_high'
    ].filter((dir) => dir && dir !== channelBasePath);
    const paths = [
      `${baseUrl}/${channelBasePath}/channel_0_metadata.json`,
      `${baseUrl}/${channelBasePath}/channel_0_data.json`,
      `${baseUrl}/${channelBasePath}/channel_0_napari_metadata.json`,
      ...fallbackDirs.flatMap((dir) => [
        `${baseUrl}/${dir}/channel_0_metadata.json`,
        `${baseUrl}/${dir}/channel_0_data.json`,
        `${baseUrl}/${dir}/channel_0_napari_metadata.json`
      ])
    ];

    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          const metadata = await response.json();
          dataRange = metadata.dataRange || [0, 65535];
          break;
        }
      } catch (error) {
        continue;
      }
    }

    const rangeSpan = dataRange[1] - dataRange[0];
    const defaultMin = Math.round(dataRange[0] + rangeSpan * DEFAULT_THRESHOLD_MIN_FRACTION);
    const defaultMax = Math.round(dataRange[0] + rangeSpan * DEFAULT_THRESHOLD_MAX_FRACTION);

    const newChannel = {
      id: newId,
      channelIndex: 0,
      channelBasePath,
      color: '#00ff88',  // Default to bright green - much more visible than white
      thresholdMin: defaultMin,
      thresholdMax: defaultMax,
      dataRange: dataRange,
      opacity: 1.0,
      visible: true  // Start as checked/visible by default
    };
    const updatedChannels = [...channels, newChannel];
    setChannels(updatedChannels);
    setPendingThresholds((prev) => ({
      ...prev,
      [newId]: {
        thresholdMin: newChannel.thresholdMin,
        thresholdMax: newChannel.thresholdMax
      }
    }));
    if (onChannelsChange) {
      onChannelsChange(updatedChannels);
    }
  };

  const removeChannel = (id) => {
    const updatedChannels = channels.filter(c => c.id !== id);
    setChannels(updatedChannels);
    setPendingThresholds((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    if (onChannelsChange) {
      onChannelsChange(updatedChannels);
    }
  };

  const updateChannel = (id, field, value) => {
    const updatedChannels = channels.map(channel => {
      if (channel.id === id) {
        const updated = { ...channel, [field]: value };

        // If channel index changed, update data range (same resolution folder as this row)
        if (field === 'channelIndex') {
          const newIndex = parseInt(value);
          const rangeKey = channel.channelBasePath
            ? `${channel.channelBasePath}:${newIndex}`
            : String(newIndex);
          const range = channelRanges[rangeKey] || channelRanges[newIndex] || [0, 65535];
          updated.dataRange = range;
          const rangeSpan = range[1] - range[0];
          updated.thresholdMin = Math.round(range[0] + rangeSpan * DEFAULT_THRESHOLD_MIN_FRACTION);
          updated.thresholdMax = Math.round(range[0] + rangeSpan * DEFAULT_THRESHOLD_MAX_FRACTION);
        }

        // Convert threshold and opacity to numbers
        if (field === 'opacity') {
          updated[field] = parseFloat(value);
        }

        // Ensure thresholdMin <= thresholdMax
        if (field === 'thresholdMin' && updated.thresholdMin > updated.thresholdMax) {
          updated.thresholdMax = updated.thresholdMin;
        }
        if (field === 'thresholdMax' && updated.thresholdMax < updated.thresholdMin) {
          updated.thresholdMin = updated.thresholdMax;
        }

        // Clamp thresholds to data range
        const dataRange = updated.dataRange || [0, 65535];
        if (updated.thresholdMin < dataRange[0]) updated.thresholdMin = dataRange[0];
        if (updated.thresholdMin > dataRange[1]) updated.thresholdMin = dataRange[1];
        if (updated.thresholdMax < dataRange[0]) updated.thresholdMax = dataRange[0];
        if (updated.thresholdMax > dataRange[1]) updated.thresholdMax = dataRange[1];

        if (field === 'channelIndex') {
          setPendingThresholds((prevPending) => ({
            ...prevPending,
            [id]: {
              thresholdMin: updated.thresholdMin,
              thresholdMax: updated.thresholdMax
            }
          }));
        }

        return updated;
      }
      return channel;
    });
    setChannels(updatedChannels);
    // Immediately notify parent for real-time updates
    if (onChannelsChange) {
      onChannelsChange(updatedChannels);
    }
  };

  const handlePendingThresholdChange = (id, type, rawValue) => {
    const channel = channels.find((c) => c.id === id);
    if (!channel) return;

    const dataRange = channel.dataRange || [0, 65535];
    const clamped = clampValue(parseInt(rawValue, 10), dataRange[0], dataRange[1]);

    setPendingThresholds((prev) => {
      const existing = prev[id] || {
        thresholdMin: channel.thresholdMin,
        thresholdMax: channel.thresholdMax
      };
      const next = {
        ...existing,
        [type]: clamped
      };
      if (type === 'thresholdMin' && next.thresholdMin > next.thresholdMax) {
        next.thresholdMax = next.thresholdMin;
      }
      if (type === 'thresholdMax' && next.thresholdMax < next.thresholdMin) {
        next.thresholdMin = next.thresholdMax;
      }
      next.thresholdMin = clampValue(next.thresholdMin, dataRange[0], dataRange[1]);
      next.thresholdMax = clampValue(next.thresholdMax, dataRange[0], dataRange[1]);
      return {
        ...prev,
        [id]: next
      };
    });
  };

  const clampValue = (value, min, max) => {
    if (Number.isNaN(value)) return min;
    return Math.min(Math.max(value, min), max);
  };

  const applyPendingThresholds = () => {
    let changed = false;
    const updatedChannels = channels.map((channel) => {
      const pending = pendingThresholds[channel.id];
      if (!pending) return channel;
      if (
        channel.thresholdMin === pending.thresholdMin &&
        channel.thresholdMax === pending.thresholdMax
      ) {
        return channel;
      }
      changed = true;
      return {
        ...channel,
        thresholdMin: pending.thresholdMin,
        thresholdMax: pending.thresholdMax
      };
    });

    if (!changed) return;

    setChannels(updatedChannels);
    setPendingThresholds((prev) => {
      const next = { ...prev };
      updatedChannels.forEach((channel) => {
        next[channel.id] = {
          thresholdMin: channel.thresholdMin,
          thresholdMax: channel.thresholdMax
        };
      });
      return next;
    });

    if (onChannelsChange) {
      onChannelsChange(updatedChannels);
    }
  };

  // Helper to convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 255, b: 255 };
  };

  // State for showing help tooltip
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div style={{
      height: 'auto',
      width: '100%',
      backgroundColor: 'transparent',
      border: '1px solid var(--border-color, #444)',
      borderBottom: 'none',
      padding: '1px',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '10px',
      boxSizing: 'border-box',
      overflow: 'visible',
      color: 'var(--text-color, #ffffff)'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
        marginBottom: '12px',
        padding: '8px 12px',
        backgroundColor: 'var(--header-bg, #333333)',
        borderBottom: '1px solid var(--border-color, #444)',
        flexShrink: 0,
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)'
      }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--text-color, white)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          Channel Selection
          {/* Help Button */}
          <button
            onClick={() => setShowHelp(!showHelp)}
            style={{
              background: 'transparent',
              border: `1px solid ${isLight ? 'rgba(0, 0, 0, 0.28)' : 'rgba(255, 255, 255, 0.3)'}`,
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              cursor: 'pointer',
              color: colors.text,
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              transition: 'all 0.2s',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.target.style.background = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = isLight ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = isLight ? 'rgba(0, 0, 0, 0.28)' : 'rgba(255, 255, 255, 0.3)';
            }}
            title="Show channel selection help"
          >
            ?
          </button>
        </h3>

        {/* Low / High / Very High Res segmented toggle */}
        <div
          role="group"
          aria-label="Channel data resolution"
          title="Low ≈11MB · High ≈182MB · Very High ≈2.9GB per channel"
          style={{
            display: 'inline-flex',
            alignItems: 'stretch',
            borderRadius: '8px',
            border: '1px solid var(--border-strong, #666)',
            overflow: 'hidden',
            flexShrink: 0,
            background: 'var(--header-control-bg, rgba(0,0,0,0.25))'
          }}
        >
          {[
            { id: 'low', label: 'Low' },
            { id: 'high', label: 'High' },
            { id: 'very', label: 'Very High' }
          ].map((opt, index) => {
            const active = resolution === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                aria-pressed={active}
                onClick={() => setResolution(opt.id)}
                style={{
                  margin: 0,
                  border: 'none',
                  borderLeft: index === 0 ? 'none' : '1px solid var(--border-strong, #555)',
                  padding: '3px 8px',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                  color: active ? '#0b1a0b' : 'var(--text-muted, #aaa)',
                  background: active ? '#81c784' : 'transparent',
                  transition: 'background-color 0.15s, color 0.15s'
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Help Panel - Black & Green Theme */}
      {showHelp && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.45) 0%, rgba(20, 40, 20, 0.4) 100%)',
          border: '1px solid rgba(74, 222, 128, 0.5)',
          borderRadius: '12px',
          padding: '16px 18px',
          marginBottom: '16px',
          boxShadow: '0 4px 20px rgba(74, 222, 128, 0.15), inset 0 1px 0 rgba(74, 222, 128, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Header */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '12px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(74, 222, 128, 0.3)'
          }}>
            <span style={{ fontSize: '24px' }}></span>
            <span style={{ 
              fontSize: '18px', 
              fontWeight: '700', 
              color: '#4ade80',
              letterSpacing: '0.5px'
            }}>Quick Guide</span>
          </div>

          {/* Guide Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Checkbox */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ 
                fontSize: '28px', 
                lineHeight: '1',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}></span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>
                  Checkbox
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.4' }}>
                  Toggle channel visibility on/off
                </div>
              </div>
            </div>

            {/* Color Picker */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ 
                fontSize: '28px', 
                lineHeight: '1',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}></span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>
                  Color Picker <span style={{ fontSize: '11px', color: '#4ade80' }}></span>
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.4' }}>
                  Click the square with pencil to change color
                </div>
              </div>
            </div>

            {/* Dropdown */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ 
                fontSize: '28px', 
                lineHeight: '1',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}></span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>
                  Dropdown
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.4' }}>
                  Select different biomarker channels
                </div>
              </div>
            </div>

            {/* Slider */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ 
                fontSize: '28px', 
                lineHeight: '1',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}></span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>
                  Slider
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.4' }}>
                  Adjust min/max intensity thresholds
                </div>
              </div>
            </div>

            {/* Apply Filter */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ 
                fontSize: '28px', 
                lineHeight: '1',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}></span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '2px' }}>
                  Apply Filter
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.4' }}>
                  Update visualization with new thresholds
                </div>
              </div>
            </div>
          </div>

          {/* Close hint */}
          <div style={{ 
            marginTop: '14px', 
            paddingTop: '12px',
            borderTop: '1px solid rgba(74, 222, 128, 0.2)',
            textAlign: 'center',
            fontSize: '12px',
            color: 'rgba(74, 222, 128, 0.6)',
            fontStyle: 'italic'
          }}>
            Click <strong style={{ color: '#4ade80' }}>?</strong> to close this guide
          </div>
        </div>
      )}

      {/* Channel List — grows with content; parent scrolls after 60% height */}
      <div style={{ marginBottom: '12px', flexShrink: 0 }}>
        {channels.map((channel, index) => {
          const rgb = hexToRgb(channel.color);
          const checkboxColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

          return (
            <div
              key={channel.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px',
                padding: '6px',
                backgroundColor: 'var(--row-bg, #1a1a1a)',
                borderRadius: '4px',
                border: '1px solid var(--border-color, #444)'
              }}
            >
              {/* Visibility Checkbox */}
              <div style={{ position: 'relative', width: '16px', height: '16px' }}>
                <input
                  type="checkbox"
                  checked={channel.visible}
                  onChange={(e) => updateChannel(channel.id, 'visible', e.target.checked)}
                  style={{
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer',
                    appearance: 'none',
                    border: '2px solid #ccc',
                    borderRadius: '3px',
                    backgroundColor: channel.visible ? checkboxColor : 'white',
                    position: 'relative'
                  }}
                />
                {channel.visible && (
                  <span style={{
                    position: 'absolute',
                    left: '2px',
                    top: '-1px',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    pointerEvents: 'none'
                  }}>✓</span>
                )}
              </div>

              {/* Channel Name Dropdown */}
              <select
                value={channel.channelIndex}
                onChange={(e) => updateChannel(channel.id, 'channelIndex', parseInt(e.target.value))}
                style={{
                  padding: '5px 8px',
                  backgroundColor: 'var(--row-alt-bg, #2a2a2a)',
                  color: 'var(--text-color, white)',
                  border: '1px solid var(--border-strong, #555)',
                  borderRadius: '4px',
                  fontSize: '11px',
                  minWidth: '100px',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                {channelOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Color Picker - Clearly marked with edit icon */}
              <input
                type="color"
                value={channel.color}
                onChange={(e) => updateChannel(channel.id, 'color', e.target.value)}
                style={{
                  width: '0px',
                  height: '0px',
                  opacity: 0,
                  position: 'absolute',
                  pointerEvents: 'none'
                }}
                id={`color-picker-${channel.id}`}
              />
              <div
                onClick={() => document.getElementById(`color-picker-${channel.id}`).click()}
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: channel.color,
                  borderRadius: '4px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  flexShrink: 0,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.3)'
                }}
                title="Click to change color"
              >
                {/* Paint brush/edit icon overlay */}
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  style={{ 
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))',
                    pointerEvents: 'none'
                  }}
                >
                  <path 
                    d="M13.5 2.5L11 5L11.5 5.5L14 3L13.5 2.5Z M10.5 5.5L3 13V14H4L11.5 6.5L10.5 5.5Z M2 12L3 14L4.5 12.5L3.5 11.5L2 12Z" 
                    fill="white" 
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              {/* Threshold Range Slider (Dual Range with Value Labels) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '160px', flex: 1, position: 'relative' }}>
                {(() => {
                  const dataRange = channel.dataRange || [0, 65535];
                  const rangeMin = dataRange[0];
                  const rangeMax = dataRange[1];
                  const pending = pendingThresholds[channel.id] || {
                    thresholdMin: channel.thresholdMin ?? rangeMin,
                    thresholdMax: channel.thresholdMax ?? rangeMax
                  };
                  const thresholdMin = pending.thresholdMin;
                  const thresholdMax = pending.thresholdMax;
                  const minPercent = ((thresholdMin - rangeMin) / (rangeMax - rangeMin)) * 100;
                  const maxPercent = ((thresholdMax - rangeMin) / (rangeMax - rangeMin)) * 100;

                  return (
                    <>
                      {/* Value labels above handles */}
                      <div style={{ position: 'relative', width: '100%', height: '20px', marginBottom: '4px' }}>
                        {/* Min value label */}
                        <div style={{
                          position: 'absolute',
                          left: `${minPercent}%`,
                          transform: 'translateX(-50%)',
                          top: '0px',
                          backgroundColor: channel.color,
                          color: 'white',
                          padding: '2px 6px',
                          borderRadius: '10px',
                          fontSize: '10px',
                          fontWeight: 'bold',
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          zIndex: 10,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}>
                          {thresholdMin.toLocaleString()}
                        </div>
                        {/* Max value label */}
                        <div style={{
                          position: 'absolute',
                          left: `${maxPercent}%`,
                          transform: 'translateX(-50%)',
                          top: '0px',
                          backgroundColor: channel.color,
                          color: 'white',
                          padding: '2px 6px',
                          borderRadius: '10px',
                          fontSize: '10px',
                          fontWeight: 'bold',
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          zIndex: 10,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}>
                          {thresholdMax.toLocaleString()}
                        </div>
                      </div>

                      {/* Slider container */}
                      <div style={{ position: 'relative', width: '100%', height: '10px', display: 'flex', alignItems: 'center', flex: 1 }}>
                        {/* Background track */}
                        <div style={{
                          position: 'absolute',
                          width: '100%',
                          height: '5px',
                          backgroundColor: 'var(--border-strong, #555)',
                          borderRadius: '3px',
                          zIndex: 0
                        }} />
                        {/* Active range indicator - colored with channel color */}
                        <div style={{
                          position: 'absolute',
                          left: `${minPercent}%`,
                          width: `${maxPercent - minPercent}%`,
                          height: '5px',
                          backgroundColor: channel.color,
                          borderRadius: '3px',
                          zIndex: 0,
                          pointerEvents: 'none',
                          opacity: 0.8
                        }} />

                        {/* Min Slider Handle */}
                        <input
                          type="range"
                          min={rangeMin}
                          max={rangeMax}
                          step={Math.max(1, Math.floor((rangeMax - rangeMin) / 1000))}
                          value={thresholdMin}
                          onChange={(e) => {
                            const value = Math.min(parseInt(e.target.value, 10), thresholdMax);
                            handlePendingThresholdChange(channel.id, 'thresholdMin', value);
                          }}
                          onMouseDown={(e) => {
                            e.stopPropagation();
                            // Bring min slider to front when dragging
                            e.currentTarget.style.zIndex = '10';
                            // Find max slider and put it behind
                            const container = e.currentTarget.closest('div');
                            if (container) {
                              const maxSlider = container.querySelector('input[type="range"]:last-of-type');
                              if (maxSlider && maxSlider !== e.currentTarget) {
                                maxSlider.style.zIndex = '9';
                              }
                            }
                          }}
                          onMouseUp={(e) => {
                            // Reset z-index based on position
                            const minPos = (thresholdMin - rangeMin) / (rangeMax - rangeMin);
                            const maxPos = (thresholdMax - rangeMin) / (rangeMax - rangeMin);
                            e.currentTarget.style.zIndex = minPos <= maxPos ? '4' : '5';
                          }}
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '10px',
                            margin: 0,
                            padding: 0,
                            top: '-2px',
                            zIndex: minPercent <= maxPercent ? '4' : '5',
                            pointerEvents: 'auto',
                            background: 'transparent',
                            WebkitAppearance: 'none',
                            appearance: 'none',
                            cursor: 'pointer',
                            outline: 'none',
                            touchAction: 'none'
                          }}
                        />

                        {/* Max Slider Handle */}
                        <input
                          type="range"
                          min={rangeMin}
                          max={rangeMax}
                          step={Math.max(1, Math.floor((rangeMax - rangeMin) / 1000))}
                          value={thresholdMax}
                          onChange={(e) => {
                            const value = Math.max(parseInt(e.target.value, 10), thresholdMin);
                            handlePendingThresholdChange(channel.id, 'thresholdMax', value);
                          }}
                          onMouseDown={(e) => {
                            e.stopPropagation();
                            // Bring max slider to front when dragging
                            e.currentTarget.style.zIndex = '10';
                            // Find min slider and put it behind
                            const container = e.currentTarget.closest('div');
                            if (container) {
                              const minSlider = container.querySelector('input[type="range"]:first-of-type');
                              if (minSlider && minSlider !== e.currentTarget) {
                                minSlider.style.zIndex = '9';
                              }
                            }
                          }}
                          onMouseUp={(e) => {
                            // Reset z-index based on position
                            const minPos = (thresholdMin - rangeMin) / (rangeMax - rangeMin);
                            const maxPos = (thresholdMax - rangeMin) / (rangeMax - rangeMin);
                            e.currentTarget.style.zIndex = maxPos >= minPos ? '5' : '4';
                          }}
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '10px',
                            margin: 0,
                            padding: 0,
                            top: '-2px',
                            zIndex: maxPercent >= minPercent ? '5' : '4',
                            pointerEvents: 'auto',
                            background: 'transparent',
                            WebkitAppearance: 'none',
                            appearance: 'none',
                            cursor: 'pointer',
                            outline: 'none',
                            touchAction: 'none'
                          }}
                        />
                      </div>
                    </>
                  );
                })()}
                <div />
              </div>

              {/* More Options (Vertical Ellipsis) with Delete */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Show delete confirmation or directly delete
                    if (window.confirm(`Delete channel ${channel.channelIndex}?`)) {
                      removeChannel(channel.id);
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px 6px',
                    fontSize: '16px',
                    color: '#aaa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Delete channel"
                >
                  ⋮
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Channel Button */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexShrink: 0, paddingBottom: '4px' }}>
        <button
          onClick={addChannel}
          style={{
            flex: 1,
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.4px'
          }}
          onMouseOver={(e) => { e.target.style.backgroundColor = '#45a049'; }}
          onMouseOut={(e) => { e.target.style.backgroundColor = '#4CAF50'; }}
        >
          + Add Channel
        </button>
        <button
          onClick={applyPendingThresholds}
          disabled={!channels.some((channel) => {
            const pending = pendingThresholds[channel.id];
            if (!pending) return false;
            return (
              pending.thresholdMin !== channel.thresholdMin ||
              pending.thresholdMax !== channel.thresholdMax
            );
          })}
          style={{
            padding: '8px 16px',
            backgroundColor: channels.some((channel) => {
              const pending = pendingThresholds[channel.id];
              if (!pending) return false;
              return (
                pending.thresholdMin !== channel.thresholdMin ||
                pending.thresholdMax !== channel.thresholdMax
              );
            })
              ? '#2d7ff9'
              : '#444',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: channels.some((channel) => {
              const pending = pendingThresholds[channel.id];
              if (!pending) return false;
              return (
                pending.thresholdMin !== channel.thresholdMin ||
                pending.thresholdMax !== channel.thresholdMax
              );
            })
              ? 'pointer'
              : 'default',
            fontSize: '11px',
            fontWeight: '500'
          }}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default ChannelSelection;
