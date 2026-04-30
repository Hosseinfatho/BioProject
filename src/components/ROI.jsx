import React, { useState, useCallback, useEffect, useRef } from 'react';
import * as d3 from 'd3';
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

function ROI({ onPositionsChange, onRoiBoxChange, highlightedRoiIndex = null, onChartRoiHover = null }) {
  const [enabled, setEnabled] = useState(false);
  const [microenvironment, setMicroenvironment] = useState(MICROENVIRONMENTS[0]?.id ?? 'inflammation');
  const [percent, setPercent] = useState(1);
  const [showInVisualization, setShowInVisualization] = useState(false);
  const [positions, setPositions] = useState([]);
  const [filteredPositions, setFilteredPositions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chartContainerRef = useRef(null);
  const chartSvgRef = useRef(null);
  const chartTooltipRef = useRef(null);

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
        const boxes = filtered.map((pos, idx) => ({
          center: { x: pos.x, y: pos.y, z: pos.z },
          size: ROI_BOX_SIZE,
          volumeShape: data.volume_shape,
          roiId: pos.id,
          roiIndex: idx + 1
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

  // ROI stack chart: one stack per ROI = intensity_average_norm (bottom) + saliency_average_norm (top); Y [0, 2]
  useEffect(() => {
    if (chartTooltipRef.current) {
      chartTooltipRef.current.remove();
      chartTooltipRef.current = null;
    }
    const container = chartContainerRef.current;
    const svgEl = chartSvgRef.current;
    if (!container || !svgEl || !filteredPositions.length) return;

    const sorted = [...filteredPositions].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width <= 0 || height <= 0) return;

    const margin = { top: 20, right: 44, bottom: 58, left: 36 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    if (chartWidth <= 0 || chartHeight <= 0) return;

    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();

    const xScale = d3.scaleBand()
      .domain(sorted.map((d) => String(d.id ?? 0)))
      .range([0, chartWidth])
      .padding(0.25);

    const yScale = d3.scaleLinear()
      .domain([0, 2])
      .range([chartHeight, 0]);

    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const tooltip = d3.select('body').append('div')
      .attr('class', 'graph-tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.9)')
      .style('color', '#fff')
      .style('padding', '6px 8px')
      .style('border-radius', '4px')
      .style('pointer-events', 'none')
      .style('font-size', '11px')
      .style('z-index', '10000');
    chartTooltipRef.current = tooltip.node();

    sorted.forEach((d, i) => {
      const roiIndex = i + 1;
      const idStr = String(d.id ?? 0);
      const intensity = Number(d.intensity_average_norm) ?? 0;
      const saliency = Number(d.saliency_average_norm) ?? 0;
      const x = xScale(idStr) ?? 0;
      const bw = xScale.bandwidth();
      const showHighlight = highlightedRoiIndex === roiIndex;

      const setRoiHighlight = () => {
        if (onChartRoiHover) onChartRoiHover(roiIndex);
      };
      const clearRoiHighlight = () => {
        if (onChartRoiHover) onChartRoiHover(null);
      };

      if (intensity > 0) {
        g.append('rect')
          .attr('x', x)
          .attr('y', yScale(intensity))
          .attr('width', bw)
          .attr('height', chartHeight - yScale(intensity))
          .attr('fill', '#3b82f6')
          .attr('opacity', 0.9)
          .attr('data-roi-index', roiIndex)
          .on('mouseover', function (event) {
            d3.select(this).attr('opacity', 1);
            setRoiHighlight();
            tooltip.style('opacity', 1)
              .html(`ROI ${idStr}<br/>intensity_average_norm: ${(intensity * 100).toFixed(1)}%`)
              .style('left', (event.pageX + 10) + 'px')
              .style('top', (event.pageY - 10) + 'px');
          })
          .on('mouseout', function () {
            d3.select(this).attr('opacity', 0.9);
            clearRoiHighlight();
            tooltip.style('opacity', 0);
          });
      }
      if (saliency > 0) {
        const yTop = yScale(intensity + saliency);
        const yBottom = yScale(intensity);
        g.append('rect')
          .attr('x', x)
          .attr('y', yTop)
          .attr('width', bw)
          .attr('height', Math.max(0, yBottom - yTop))
          .attr('fill', '#22c55e')
          .attr('opacity', 0.9)
          .attr('data-roi-index', roiIndex)
          .on('mouseover', function (event) {
            d3.select(this).attr('opacity', 1);
            setRoiHighlight();
            tooltip.style('opacity', 1)
              .html(`ROI ${idStr}<br/>saliency_average_norm: ${(saliency * 100).toFixed(1)}%`)
              .style('left', (event.pageX + 10) + 'px')
              .style('top', (event.pageY - 10) + 'px');
          })
          .on('mouseout', function () {
            d3.select(this).attr('opacity', 0.9);
            clearRoiHighlight();
            tooltip.style('opacity', 0);
          });
      }

      if (showHighlight) {
        g.append('rect')
          .attr('x', x - 2)
          .attr('y', -2)
          .attr('width', bw + 4)
          .attr('height', chartHeight + 4)
          .attr('fill', 'none')
          .attr('stroke', '#00ff88')
          .attr('stroke-width', 2)
          .attr('rx', 2);
      }
    });

    g.append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .style('fill', '#fff')
      .style('font-size', '9px');
    g.append('g')
      .call(d3.axisLeft(yScale).ticks(5))
      .selectAll('text')
      .style('fill', '#fff')
      .style('font-size', '9px');
    g.append('rect').attr('x', chartWidth - 34).attr('y', 0).attr('width', 10).attr('height', 10).attr('fill', '#3b82f6');
    g.append('text').attr('x', chartWidth - 22).attr('y', 9).style('fill', '#fff').style('font-size', '9px').text('Intensity');
    g.append('rect').attr('x', chartWidth - 34).attr('y', 14).attr('width', 10).attr('height', 10).attr('fill', '#22c55e');
    g.append('text').attr('x', chartWidth - 22).attr('y', 23).style('fill', '#fff').style('font-size', '9px').text('Saliency');

    return () => {
      if (chartTooltipRef.current) {
        chartTooltipRef.current.remove();
        chartTooltipRef.current = null;
      }
    };
  }, [filteredPositions, highlightedRoiIndex, onChartRoiHover]);

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
      <div style={{ marginTop: 8, fontSize: '11px', color: 'rgba(255,255,255,0.7)', flexShrink: 0 }}>
        {error ? (
          <span style={{ color: '#e57373' }}>{error}</span>
        ) : totalCount > 0 ? (
          <span>Showing {displayCount} of {totalCount} positions</span>
        ) : null}
      </div>

      {/* ROI stack chart: intensity + saliency per ROI (Y max 2) */}
      <div
        ref={chartContainerRef}
        style={{
          flex: 1,
          minHeight: 0,
          marginTop: 8,
          overflow: 'hidden',
          display: filteredPositions.length > 0 ? 'block' : 'none'
        }}
      >
        <svg ref={chartSvgRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>
    </div>
  );
}

export default ROI;
