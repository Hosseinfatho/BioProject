/** Shared helpers for Example scene capture / restore. */

export const EXAMPLE_STORAGE_KEY = 'congat.exampleScene';

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

export function buildSceneSnapshot({ resolution, channels, camera, selections }) {
  return {
    version: 1,
    enabled: true,
    name: 'Example scene',
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

export function saveSceneSnapshotLocal(snapshot) {
  localStorage.setItem(EXAMPLE_STORAGE_KEY, JSON.stringify(snapshot));
}

export function loadSceneSnapshotLocal() {
  try {
    const raw = localStorage.getItem(EXAMPLE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.enabled ? parsed : null;
  } catch {
    return null;
  }
}
