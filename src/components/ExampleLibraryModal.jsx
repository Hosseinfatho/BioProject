import React, { useEffect, useState } from 'react';
import { useTheme } from '../theme.jsx';
import { listExampleScenes } from '../presets/scenePreset.js';

/**
 * Popup: save current scene with a name, list all examples, load / delete.
 */
const ExampleLibraryModal = ({
  open,
  onClose,
  onSave,
  onLoad,
  onDelete
}) => {
  const { colors } = useTheme();
  const [name, setName] = useState('');
  const [examples, setExamples] = useState([]);
  const [busyId, setBusyId] = useState(null);

  const refresh = () => setExamples(listExampleScenes());

  useEffect(() => {
    if (!open) return;
    refresh();
    setName('');
    setBusyId(null);
  }, [open]);

  if (!open) return null;

  const handleSave = async () => {
    const trimmed = name.trim();
    if (!trimmed) {
      window.alert('Please enter a name for this example.');
      return;
    }
    setBusyId('save');
    try {
      await onSave?.(trimmed);
      setName('');
      refresh();
    } finally {
      setBusyId(null);
    }
  };

  const handleLoad = async (ex) => {
    setBusyId(ex.id);
    try {
      await onLoad?.(ex);
      onClose?.();
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = (ex) => {
    const ok = window.confirm(`Delete example “${ex.name}”?`);
    if (!ok) return;
    onDelete?.(ex.id);
    refresh();
  };

  const formatWhen = (iso) => {
    if (!iso) return '';
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--modal-overlay, rgba(0, 0, 0, 0.7))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--surface-bg, #1a1a1a)',
          padding: '24px',
          borderRadius: '8px',
          maxWidth: '520px',
          width: '92%',
          maxHeight: '80vh',
          overflowY: 'auto',
          border: '2px solid #4CAF50',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          position: 'relative',
          color: 'var(--text-color, #ffffff)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
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
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          ×
        </button>

        <h2 style={{ color: '#4CAF50', margin: '0 0 8px 0', fontSize: '20px' }}>
          Examples
        </h2>
        <p style={{ margin: '0 0 18px 0', fontSize: '13px', opacity: 0.8, lineHeight: 1.4 }}>
          Save the current view (channels, camera, filters, boxes) with a name,
          or open / delete a saved example.
        </p>

        {/* Save current */}
        <div
          style={{
            marginBottom: '20px',
            padding: '14px',
            border: `1px solid ${colors.border || '#444'}`,
            borderRadius: '6px',
            backgroundColor: 'rgba(76, 175, 80, 0.06)'
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: '10px', fontSize: '14px' }}>
            Save current scene
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
              }}
              placeholder="Example name…"
              maxLength={80}
              style={{
                flex: 1,
                minWidth: '160px',
                padding: '8px 10px',
                borderRadius: '4px',
                border: `1px solid ${colors.borderStrong || '#666'}`,
                backgroundColor: colors.canvasBg || '#111',
                color: colors.text || '#fff',
                fontSize: '13px'
              }}
            />
            <button
              type="button"
              onClick={handleSave}
              disabled={busyId === 'save'}
              style={{
                padding: '8px 14px',
                backgroundColor: '#2e7d32',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '13px',
                opacity: busyId === 'save' ? 0.7 : 1
              }}
            >
              {busyId === 'save' ? 'Saving…' : 'Save'}
            </button>
          </div>
        </div>

        {/* List */}
        <div style={{ fontWeight: 700, marginBottom: '10px', fontSize: '14px' }}>
          Saved examples ({examples.length})
        </div>

        {examples.length === 0 ? (
          <div
            style={{
              padding: '18px',
              textAlign: 'center',
              opacity: 0.65,
              fontSize: '13px',
              border: `1px dashed ${colors.border || '#555'}`,
              borderRadius: '6px'
            }}
          >
            No examples yet. Arrange the view, enter a name above, and press Save.
          </div>
        ) : (
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {examples.map((ex) => (
              <li
                key={ex.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  marginBottom: '8px',
                  border: `1px solid ${colors.border || '#444'}`,
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255,255,255,0.03)'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '14px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                    title={ex.name}
                  >
                    {ex.name}
                  </div>
                  <div style={{ fontSize: '11px', opacity: 0.65, marginTop: '2px' }}>
                    {ex.resolution || 'low'}
                    {ex.createdAt ? ` · ${formatWhen(ex.createdAt)}` : ''}
                    {Array.isArray(ex.channels) ? ` · ${ex.channels.length} ch` : ''}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleLoad(ex)}
                  disabled={busyId === ex.id}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '12px',
                    flexShrink: 0
                  }}
                >
                  {busyId === ex.id ? '…' : 'Load'}
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(ex)}
                  title="Delete this example"
                  style={{
                    padding: '6px 10px',
                    backgroundColor: 'transparent',
                    color: '#e57373',
                    border: '1px solid #e57373',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '12px',
                    flexShrink: 0
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExampleLibraryModal;
