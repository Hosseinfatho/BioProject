/**
 * Examples shipped with the Docker/GitHub build (visible on every machine).
 *
 * Quick path (no rebuild):
 *   Local → Example → Export all → on server Example → Import JSON
 *
 * Permanent path (everyone gets them after deploy):
 *   1) Export an example JSON
 *   2) Save as src/presets/examples/myScene.json
 *   3) Uncomment import below, commit, pull, docker compose up --build
 */
// import myScene from './examples/myScene.json';

function asBundled(entry, fallbackId) {
  if (!entry || entry.enabled === false) return null;
  return {
    ...entry,
    id: entry.id || fallbackId,
    name: entry.name || 'Bundled example',
    createdAt: entry.createdAt || '2026-01-01T00:00:00.000Z',
    enabled: true,
    builtin: true
  };
}

/** @type {object[]} */
export const BUNDLED_EXAMPLES = [
  // asBundled(myScene, 'bundled-my-scene'),
].filter(Boolean);

export { asBundled };
