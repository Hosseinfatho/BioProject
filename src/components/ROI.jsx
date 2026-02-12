import React, { useState, useCallback, useEffect } from 'react';
import { CONFIG } from '../config';

// Microenvironment options and filenames must match 60_model.py output: positions_Inflammation.json, positions_Immune_cells.json, positions_B-cell.json
const MICROENVIRONMENTS = CONFIG.MICROENVIRONMENTS ?? [];

const inputStyle = {
  padding: '4px 8px',
  backgroundColor: '#222',
  color: '#fff',
  border: '1px solid #444',
  borderRadius: 4,
  fontSize: '12px'
};

// Base size in position space; 3x in x,y for bigger tiles in visualization
const ROI_BOX_SIZE = 200 * 3;

function getPositionsFilename(microenv, datasetId) {
  if (!microenv) return 'positions_Inflammation.json';
  if (typeof microenv.getFilename === 'function') return microenv.getFilename(datasetId);
  const base = (microenv.label ?? microenv.id ?? '').replace(/\s+/g, '_').replace(/\//g, '_') || 'Inflammation';
  return `positions_${base}.json`;
}

function ROI({ onPositionsChange, onRoiBoxChange }) {
  const [enabled, setEnabled] = useState(false);
  const [microenvironment, setMicroenvironment] = useState(MICROENVIRONMENTS[0]?.id ?? 'inflammation');
  const [percent, setPercent] = useState(1);
  const [showInVisualization, setShowInVisualization] = useState(false);
  const [positions, setPositions] = useState([]);
  const [filteredPositions, setFilteredPositions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const positionsBase = CONFIG.POSITIONS_BASE || 'VIS2026/output';
  const datasetId = 1; // fixed, no dataset selector

  const handleShow = useCallback(async () => {
    if (!enabled) return;

    const microenv = MICROENVIRONMENTS.find((m) => m.id === microenvironment);
    if (!microenv) return;

    const filename = getPositionsFilename(microenv, datasetId);
    const url = `${baseUrl}/${positionsBase}/dataset${datasetId}/${filename}`;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
      const data = await res.json();
      const allPositions = data.positions || [];
      setPositions(allPositions);

      const pct = Math.max(0, Math.min(100, Number(percent) || 0));
      const count = Math.max(1, Math.ceil(allPositions.length * (pct / 100)));
      const filtered = allPositions.slice(0, count);
      setFilteredPositions(filtered);
      onPositionsChange?.(filtered);
      if (showInVisualization && filtered.length > 0 && data.volume_shape) {
        const boxes = filtered.map((pos) => ({
          center: { x: pos.x, y: pos.y, z: pos.z },
          size: ROI_BOX_SIZE,
          volumeShape: data.volume_shape
        }));
        onRoiBoxChange?.(boxes);
      } else {
        onRoiBoxChange?.(null);
      }
    } catch (err) {
      setError(err.message || 'Could not load positions.');
      setPositions([]);
      setFilteredPositions([]);
      onPositionsChange?.([]);
      onRoiBoxChange?.(null);
    } finally {
      setLoading(false);
    }
  }, [enabled, microenvironment, percent, showInVisualization, baseUrl, positionsBase, onPositionsChange, onRoiBoxChange]);

  useEffect(() => {
    if (!showInVisualization) onRoiBoxChange?.(null);
  }, [showInVisualization, onRoiBoxChange]);

  const handlePercentChange = (e) => {
    const v = e.target.value;
    const num = parseInt(v, 10);
    if (!v || isNaN(num)) {
      setPercent('');
      return;
    }
    setPercent(Math.max(0, Math.min(100, num)));
  };

  const totalCount = positions.length;
  const displayCount = filteredPositions.length;

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#000000',
        border: '1px solid #444',
        padding: '8px 12px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        boxSizing: 'border-box'
      }}
    >
      {/* All controls in one line */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'nowrap' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fff', fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            style={{ width: 14, height: 14, cursor: 'pointer' }}
          />
          Enable
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
          <select
            value={microenvironment}
            onChange={(e) => setMicroenvironment(e.target.value)}
            disabled={!enabled}
            style={{ ...inputStyle, cursor: enabled ? 'pointer' : 'not-allowed', minWidth: 120 }}
          >
            {MICROENVIRONMENTS.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>%</span>
          <input
            type="number"
            min={0}
            max={100}
            value={percent}
            onChange={handlePercentChange}
            onBlur={() => { if (percent === '') setPercent(1); }}
            disabled={!enabled}
            style={{ ...inputStyle, width: 52 }}
          />
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fff', fontSize: '12px', cursor: enabled ? 'pointer' : 'not-allowed', whiteSpace: 'nowrap', opacity: enabled ? 1 : 0.6 }}>
          <input
            type="checkbox"
            checked={showInVisualization}
            onChange={(e) => setShowInVisualization(e.target.checked)}
            disabled={!enabled}
            style={{ width: 14, height: 14, cursor: enabled ? 'pointer' : 'not-allowed' }}
          />
          Visualization
        </label>
        <button
          onClick={handleShow}
          disabled={!enabled || loading}
          style={{
            padding: '4px 14px',
            backgroundColor: enabled && !loading ? '#4CAF50' : '#444',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: '12px',
            cursor: enabled && !loading ? 'pointer' : 'not-allowed',
            whiteSpace: 'nowrap'
          }}
        >
          {loading ? 'Loading…' : 'Show'}
        </button>
      </div>

      {/* Status */}
      <div style={{ marginTop: 8, fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
        {error ? (
          <span style={{ color: '#e57373' }}>{error}</span>
        ) : totalCount > 0 ? (
          <span>Showing {displayCount} of {totalCount} positions</span>
        ) : null}
      </div>
    </div>
  );
}

export default ROI;
