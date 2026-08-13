import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../theme.jsx';
import {
  listExampleScenes,
  importExampleScenesFromJson,
  exportAllExampleScenes,
  exportExampleScene
} from '../presets/scenePreset.js';

/**
 * Popup: save / load / delete examples.
 * Also Import/Export JSON so local saves can be used on the Docker server
 * (localStorage does not sync across localhost vs arcade).
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
  const [status, setStatus] = useState('');
  const fileInputRef = useRef(null);

  const refresh = () => setExamples(listExampleScenes());

  useEffect(() => {
    if (!open) return;
    refresh();
    setName('');
    setBusyId(null);
    setStatus('');
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
      setStatus('Saved in this browser. Use Export to copy it to the server.');
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
    const label = ex.builtin ? `Hide built-in “${ex.name}”?` : `Delete example “${ex.name}”?`;
    const ok = window.confirm(label);
    if (!ok) return;
    onDelete?.(ex.id);
    refresh();
  };

  const handleExportAll = () => {
    const list = exportAllExampleScenes();
    setStatus(
      list.length
        ? `Exported ${list.length} example(s). On the server open Example → Import and choose that file.`
        : 'Nothing to export.'
    );
  };

  const handleImportClick = () => fileInputRef.current?.click();

  const handleImportFile = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setBusyId('import');
    try {
      const text = await file.text();
      const json = JSON.parse(text);
      const imported = importExampleScenesFromJson(json);
      refresh();
      setStatus(
        imported.length
          ? `Imported ${imported.length} example(s) into this browser.`
          : 'No valid examples found in that file.'
      );
    } catch (err) {
      window.alert(`Import failed: ${err?.message || err}`);
    } finally {
      setBusyId(null);
    }
  };

  const formatWhen = (iso) => {
    if (!iso) return '';
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  const btnGhost = {
    padding: '7px 12px',
    backgroundColor: 'transparent',
    color: colors.text || '#fff',
    border: `1px solid ${colors.borderStrong || '#666'}`,
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '12px'
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
          maxWidth: '560px',
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
        <p style={{ margin: '0 0 14px 0', fontSize: '13px', opacity: 0.8, lineHeight: 1.45 }}>
          Saves stay in <strong>this browser</strong> only. To use them on the Docker server,
          Export here → open the server site → Import.
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <button type="button" style={btnGhost} onClick={handleImportClick} disabled={busyId === 'import'}>
            {busyId === 'import' ? 'Importing…' : 'Import JSON'}
          </button>
          <button type="button" style={btnGhost} onClick={handleExportAll}>
            Export all
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            style={{ display: 'none' }}
            onChange={handleImportFile}
          />
        </div>

        {status ? (
          <div
            style={{
              marginBottom: '14px',
              padding: '8px 10px',
              borderRadius: '4px',
              backgroundColor: 'rgba(76, 175, 80, 0.12)',
              border: '1px solid rgba(76, 175, 80, 0.35)',
              fontSize: '12px',
              lineHeight: 1.4
            }}
          >
            {status}
          </div>
        ) : null}

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
          Available examples ({examples.length})
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
            No examples here yet. Save one, or Import a JSON exported from your local browser.
          </div>
        ) : (
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {examples.map((ex) => (
              <li
                key={ex.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
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
                    {ex.builtin ? (
                      <span style={{ marginLeft: 6, fontSize: 10, opacity: 0.7, fontWeight: 600 }}>
                        (built-in)
                      </span>
                    ) : null}
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
                  onClick={() => exportExampleScene(ex)}
                  title="Download this example as JSON"
                  style={{
                    ...btnGhost,
                    padding: '6px 8px',
                    flexShrink: 0
                  }}
                >
                  Export
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(ex)}
                  title={ex.builtin ? 'Hide built-in example' : 'Delete this example'}
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
                  {ex.builtin ? 'Hide' : 'Delete'}
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
