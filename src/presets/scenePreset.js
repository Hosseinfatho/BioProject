/** Shared helpers for Example scene capture / restore (named library in localStorage). */

export const EXAMPLE_STORAGE_KEY = 'congat.exampleScene'; // legacy single snapshot
export const EXAMPLE_LIBRARY_KEY = 'congat.exampleScenes';

export function vec3ToPlain(v) {
  if (!v) return null;
  return { x: Number(v.x), y: Number(v.y), z: Number(v.z) };
}

export function serializeWorldBounds(wb) {
  if (!wb) return null;
  return {
    min: vec3ToPlain(wb.min),
    max: vec3ToPlain(wb.max),
    center: vec3ToPlain(wb.center),
    size: vec3ToPlain(wb.size)
  };
}

export function serializeChannel(channel) {
  return {
    id: channel.id,
    channelIndex: channel.channelIndex,
    channelBasePath: channel.channelBasePath || null,
    color: channel.color,
    opacity: channel.opacity ?? 1,
    thresholdMin: channel.thresholdMin,
    thresholdMax: channel.thresholdMax,
    dataRange: channel.dataRange || null,
    visible: channel.visible !== false
  };
}

export function buildSceneSnapshot({ resolution, channels, camera, selections, name }) {
  const trimmed = (name || '').trim();
  return {
    version: 1,
    enabled: true,
    id: `ex-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: trimmed || 'Untitled example',
    createdAt: new Date().toISOString(),
    resolution: resolution || 'low',
    channels: (channels || []).map(serializeChannel),
    camera: camera
      ? {
          rotation: { x: camera.rotation.x, y: camera.rotation.y },
          distance: camera.distance,
          panOffset: {
            x: camera.panOffset.x,
            y: camera.panOffset.y,
            z: camera.panOffset.z
          }
        }
      : null,
    selections: (selections || [])
      .map((sel) => ({
        worldBounds: serializeWorldBounds(sel.worldBounds)
      }))
      .filter((sel) => sel.worldBounds)
  };
}

export function downloadSceneSnapshot(snapshot, filename = 'exampleScene.json') {
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function readLibraryRaw() {
  try {
    const raw = localStorage.getItem(EXAMPLE_LIBRARY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLibrary(list) {
  localStorage.setItem(EXAMPLE_LIBRARY_KEY, JSON.stringify(list));
}

/** Migrate legacy single-key snapshot into the library once. */
function migrateLegacyIfNeeded(list) {
  try {
    const raw = localStorage.getItem(EXAMPLE_STORAGE_KEY);
    if (!raw) return list;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.enabled === false) {
      localStorage.removeItem(EXAMPLE_STORAGE_KEY);
      return list;
    }
    const already = list.some(
      (ex) =>
        ex.name === parsed.name &&
        ex.resolution === parsed.resolution &&
        (ex.channels || []).length === (parsed.channels || []).length
    );
    if (!already) {
      list = [
        {
          ...parsed,
          id: parsed.id || `legacy-${Date.now()}`,
          name: parsed.name || 'Legacy example',
          createdAt: parsed.createdAt || new Date().toISOString(),
          enabled: true
        },
        ...list
      ];
      writeLibrary(list);
    }
    localStorage.removeItem(EXAMPLE_STORAGE_KEY);
  } catch {
    /* ignore */
  }
  return list;
}

export function listExampleScenes() {
  return migrateLegacyIfNeeded(readLibraryRaw())
    .filter((ex) => ex && ex.enabled !== false)
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
}

export function saveExampleScene(snapshot) {
  if (!snapshot) return null;
  const entry = {
    ...snapshot,
    id: snapshot.id || `ex-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: (snapshot.name || 'Untitled example').trim() || 'Untitled example',
    createdAt: snapshot.createdAt || new Date().toISOString(),
    enabled: true
  };
  const list = listExampleScenes().filter((ex) => ex.id !== entry.id);
  list.unshift(entry);
  writeLibrary(list);
  return entry;
}

export function deleteExampleScene(id) {
  if (!id) return listExampleScenes();
  const next = readLibraryRaw().filter((ex) => ex?.id !== id);
  writeLibrary(next);
  return listExampleScenes();
}

export function getExampleScene(id) {
  return listExampleScenes().find((ex) => ex.id === id) || null;
}

/** @deprecated Prefer listExampleScenes / saveExampleScene */
export function saveSceneSnapshotLocal(snapshot) {
  return saveExampleScene(snapshot);
}

/** @deprecated Prefer listExampleScenes */
export function loadSceneSnapshotLocal() {
  const list = listExampleScenes();
  return list[0] || null;
}
