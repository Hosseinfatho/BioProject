import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../theme.jsx';
import graphicalAbstract from '../../graphical_abstract.jpg';

const Title = ({
  softwareName = "Software Name (title)",
  onOpenExampleLibrary
}) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const { toggleTheme, colors, isDark } = useTheme();
  const titleRef = useRef(null);
  const titleSlotRef = useRef(null);
  const [titleFontSize, setTitleFontSize] = useState(16);

  const fitTitleFont = useCallback(() => {
    const textEl = titleRef.current;
    const slotEl = titleSlotRef.current;
    if (!textEl || !slotEl) return;

    const available = slotEl.clientWidth;
    if (available <= 0) return;

    // Measure full text width without clipping
    textEl.style.overflow = 'visible';
    textEl.style.textOverflow = 'clip';
    textEl.style.whiteSpace = 'nowrap';

    let size = Math.min(18, Math.max(12, available / 44));
    textEl.style.fontSize = `${size}px`;

    let guard = 0;
    while (guard < 50 && size > 9 && textEl.scrollWidth > available) {
      size -= 0.5;
      textEl.style.fontSize = `${size}px`;
      guard += 1;
    }

    textEl.style.overflow = 'hidden';
    textEl.style.textOverflow = 'ellipsis';
    setTitleFontSize(size);
  }, [softwareName]);

  useEffect(() => {
    fitTitleFont();
    const slotEl = titleSlotRef.current;
    if (!slotEl || typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', fitTitleFont);
      return () => window.removeEventListener('resize', fitTitleFont);
    }
    const ro = new ResizeObserver(() => fitTitleFont());
    ro.observe(slotEl);
    return () => ro.disconnect();
  }, [fitTitleFont]);

  return (
    <>
      <div style={{
        width: '100%',
        backgroundColor: 'var(--header-bg)',
        color: colors.text,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '6px 12px',
        borderBottom: `1px solid ${colors.border}`,
        boxSizing: 'border-box',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)'
      }}>
        {/* Project name — leftmost, font size adapts to available width */}
        <div
          ref={titleSlotRef}
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          <div
            ref={titleRef}
            title={softwareName}
            style={{
              fontSize: `${titleFontSize}px`,
              fontWeight: 'bold',
              lineHeight: 1.2,
              textAlign: 'left',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%'
            }}
          >
            {softwareName}
          </div>
        </div>

        {/* Right controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0
        }}>
          {typeof onOpenExampleLibrary === 'function' && (
            <button
              type="button"
              onClick={onOpenExampleLibrary}
              title="Save, load, or delete named example scenes"
              style={{
                padding: '5px 12px',
                backgroundColor: '#2e7d32',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 'bold',
                boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                lineHeight: 1.2
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#256628'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2e7d32'; }}
            >
              Example
            </button>
          )}

          {/* Day / Night pin switch */}
          <button
            type="button"
            role="switch"
            aria-checked={!isDark}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleTheme();
            }}
            title={isDark ? 'Switch to day mode' : 'Switch to night mode'}
            aria-label={isDark ? 'Day mode off, switch to day' : 'Day mode on, switch to night'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '4px 6px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'inherit',
              position: 'relative',
              zIndex: 20,
              pointerEvents: 'auto'
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: isDark ? colors.textMuted : colors.text,
                opacity: isDark ? 0.55 : 1,
                transition: 'opacity 0.2s, color 0.2s',
                minWidth: '26px',
                textAlign: 'right'
              }}
            >
              Day
            </span>
            <span
              style={{
                position: 'relative',
                width: '40px',
                height: '20px',
                borderRadius: '999px',
                backgroundColor: isDark ? '#3a3a3a' : '#d0d0d0',
                border: `1px solid ${colors.borderStrong}`,
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.25)',
                transition: 'background-color 0.25s',
                flexShrink: 0
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '1px',
                  left: isDark ? '19px' : '1px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                  border: `1px solid ${isDark ? '#666' : '#bbb'}`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.35)',
                  transition: 'left 0.22s ease, background-color 0.22s, border-color 0.22s'
                }}
              />
            </span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: isDark ? colors.text : colors.textMuted,
                opacity: isDark ? 1 : 0.55,
                transition: 'opacity 0.2s, color 0.2s',
                minWidth: '34px',
                textAlign: 'left'
              }}
            >
              Night
            </span>
          </button>

          <button
            onClick={() => setShowHelp(true)}
            style={{
              padding: '5px 12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 'bold',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
              transition: 'background-color 0.2s',
              lineHeight: 1.2
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Help
          </button>

          <button
            onClick={() => setShowAbout(true)}
            style={{
              padding: '5px 12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 'bold',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
              transition: 'background-color 0.2s',
              lineHeight: 1.2
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            About
          </button>
        </div>
      </div>

      {/* About Popup Modal */}
      {showAbout && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--modal-overlay, rgba(0, 0, 0, 0.7))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
          onClick={(e) => {
            // Close when clicking outside the modal
            if (e.target === e.currentTarget) {
              setShowAbout(false);
            }
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--surface-bg, #1a1a1a)',
              padding: '33px',
              borderRadius: '8px',
              maxWidth: '660px',
              width: '90%',
              maxHeight: '88vh',
              overflowY: 'auto',
              border: '2px solid #4CAF50',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              position: 'relative',
              color: 'var(--text-color, #ffffff)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAbout(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '6px 12px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 'bold',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              ×
            </button>

            {/* About Text */}
            <div style={{
              color: 'var(--text-color, white)',
              fontSize: '17.6px',
              lineHeight: '1.6',
              textAlign: 'justify'
            }}>
              <p style={{ marginTop: 0, marginBottom: '16px' }}>
                ConGAT is an interactive visual analytics dashboard that combines self-supervised graph attention with 3D visualization to discover, explore, and validate biologically relevant regions of interest in large multiplexed microscopy data. This work was completed by{' '}
                <a
                  href="https://hosseinfatho.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#2196F3',
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#1976D2'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#2196F3'; }}
                >
                  Hossein Fathollahian et al.
                </a>
                {' '}and published in <em>Computers & Graphics</em> (2026),{' '}
                <a
                  href="https://doi.org/10.1016/j.cag.2026.104728"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#2196F3',
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#1976D2'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#2196F3'; }}
                >
                  doi:10.1016/j.cag.2026.104728
                </a>
                .
              </p>
              <img
                src={graphicalAbstract}
                alt="ConGAT graphical abstract"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  marginTop: '8px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-color, #444)'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Help Popup Modal */}
      {showHelp && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--modal-overlay, rgba(0, 0, 0, 0.7))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
          onClick={(e) => {
            // Close when clicking outside the modal
            if (e.target === e.currentTarget) {
              setShowHelp(false);
            }
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--surface-bg, #1a1a1a)',
              padding: '30px',
              borderRadius: '8px',
              maxWidth: '840px',
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              border: '2px solid #4CAF50',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              position: 'relative',
              color: 'var(--text-color, #ffffff)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowHelp(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '6px 12px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12.6px',
                fontWeight: 'bold',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              ×
            </button>

            {/* Help Content */}
            <div style={{
              color: 'var(--text-color, white)',
              fontSize: '16.2px',
              lineHeight: '1.55'
            }}>
              <h2 style={{
                color: '#4CAF50',
                marginTop: '0',
                marginBottom: '14px',
                fontSize: '21.6px'
              }}>
                Component Guide
              </h2>

              <p style={{ margin: '0 0 8px 0', textAlign: 'justify' }}>
                <strong style={{ color: '#4CAF50' }}>Channel Selection:</strong>{' '}
                Select and configure multiple biomarker channels to visualize. You can adjust color, opacity, threshold values, and visibility for each channel. Channels can be enabled or disabled to focus on specific biomarkers.
              </p>

              <p style={{ margin: '0 0 8px 0', textAlign: 'justify' }}>
                <strong style={{ color: '#4CAF50' }}>Region Selection:</strong>{' '}
                Manage and toggle different tissue regions. Select regions to analyze and compare their biomarker expressions. Each region can be individually enabled or disabled for analysis.
              </p>

              <p style={{ margin: '0 0 8px 0', textAlign: 'justify' }}>
                <strong style={{ color: '#4CAF50' }}>Main View:</strong>{' '}
                Interactive 3D visualization of the entire tissue volume. Use the "3D Selection" button to draw selection boxes for analysis. Rotate (left-click + drag), pan (right-click + drag), and zoom (scroll) to explore the data. Each selection box is color-coded and can be used to extract data for detailed analysis.
              </p>

              <p style={{ margin: '0 0 8px 0', textAlign: 'justify' }}>
                <strong style={{ color: '#4CAF50' }}>Local View:</strong>{' '}
                Detailed 3D view of selected tissue regions. Each selection appears as a separate tab. You can rotate, zoom, and pan within each local view to examine the selected region in detail. Use "Reset View" to close the current tab.
              </p>

              <p style={{ margin: '0 0 8px 0', textAlign: 'justify' }}>
                <strong style={{ color: '#4CAF50' }}>Graph Panel:</strong>{' '}
                Statistical analysis and visualization of selected regions. View bar charts, heatmaps, or violin plots showing cell counts, density, and intensity distributions for each biomarker. Compare multiple selected regions side by side.
              </p>

              <p style={{ margin: '0', textAlign: 'justify' }}>
                <strong style={{ color: '#4CAF50' }}>Direction View:</strong>{' '}
                Spatial orientation and directional analysis of biomarker distributions. Visualize how biomarkers are distributed across different spatial directions in the tissue sample.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Title;

