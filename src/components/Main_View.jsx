import React, { useCallback, useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';
import { loadChannelData } from '../hooks/useChannelData';
import { useTheme } from '../theme.jsx';
import { createVtkVolumeView } from '../vtk/vtkVolumeView';

const CAMERA_INITIAL_STATE = {
  rotation: { x: 0, y: Math.PI },
  distance: 0.75,
  panOffset: { x: 0, y: 0, z: 0 }
};

const cloneCameraState = (state = CAMERA_INITIAL_STATE) => ({
  rotation: { x: state.rotation.x, y: state.rotation.y },
  distance: state.distance,
  panOffset: { x: state.panOffset.x, y: state.panOffset.y, z: state.panOffset.z }
});

const MOVE_SPEED = 0.05;
const FAST_MOVE_SPEED = 0.15;
const LOD_COOLDOWN_MS = 200;
/** Soft total GPU budget for ALL Main volume textures combined (prevents CONTEXT_LOST). */
const MAIN_VTK_TOTAL_VOXEL_BUDGET = 220_000_000;
const MAIN_VTK_MIN_VOXELS_PER_CHANNEL = 10_000_000;

const getMainVtkMaxVoxels = (channelCount) => {
  const n = Math.max(1, Number(channelCount) || 1);
  return Math.max(
    MAIN_VTK_MIN_VOXELS_PER_CHANNEL,
    Math.floor(MAIN_VTK_TOTAL_VOXEL_BUDGET / n)
  );
};

// Color map for selection boxes
const BOX_COLOR_MAP = [
  '#ca0020', // First box - Red
  '#f4a582', // Second box - Light orange
  '#f7f7f7', // Third box - Light gray
  '#92c5de', // Fourth box - Light blue
  '#0571b0'  // Fifth box - Dark blue
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const disposeMesh = (mesh) => {
  if (!mesh) return;
  if (mesh.geometry) mesh.geometry.dispose();
  if (mesh.material) mesh.material.dispose();
};

const removeMeshFromCollection = (mesh, collection) => {
  const index = collection.indexOf(mesh);
  if (index !== -1) {
    collection.splice(index, 1);
  }
};

const buildLoadPaths = (channelIndex) => [
  {
    data: `./visualization_data/channel_${channelIndex}_napari_data.raw`,
    metadata: `./visualization_data/channel_${channelIndex}_napari_metadata.json`
  },
  {
    data: `visualization_data/channel_${channelIndex}_napari_data.raw`,
    metadata: `visualization_data/channel_${channelIndex}_napari_metadata.json`
  },
  {
    data: `./visualization_data/channel_${channelIndex}_data.raw`,
    metadata: `./visualization_data/channel_${channelIndex}_data.json`
  },
  {
    data: `visualization_data/channel_${channelIndex}_data.raw`,
    metadata: `visualization_data/channel_${channelIndex}_data.json`
  },
  {
    data: `./visualization_data/channel_${channelIndex}_data.raw`,
    metadata: `./visualization_data/channel_${channelIndex}_metadata.json`
  },
  {
    data: `visualization_data/channel_${channelIndex}_data.raw`,
    metadata: `visualization_data/channel_${channelIndex}_metadata.json`
  }
];

const getConfigSignature = (config) =>
  [
    config.thresholdMin ?? '',
    config.thresholdMax ?? '',
    config.color ?? '',
    config.opacity ?? '',
    config.channelBasePath ?? '',
    config.channelIndex ?? ''
  ].join('|');

/** Identity of the volume payload (ignore thresholds so slow Very High loads aren't discarded). */
const getDataIdentity = (config) =>
  `${config.id ?? config.channelIndex}|${config.channelIndex}|${config.channelBasePath ?? ''}`;

/** Unique key per channel instance + resolution path (Low/High Res). */
const getChannelCacheKey = (config) => {
  if (!config) return '';
  const id = config.id ?? config.channelIndex;
  return `${id}@@${config.channelBasePath || ''}`;
};

// Position space in ROI JSON uses grid index × 16; same as 60_model.py coord_scale
const ROI_POSITION_SCALE = 16;

const Main_View = forwardRef(({ channels = [], activeRegions = [], onSelectionChange, initialSelectionBounds, selectedRegionsData = [], roiBoxes = null, onRoiHover = null, highlightedRoiIndex = null }, ref) => {
  const { colors, theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;
  const mountRef = useRef(null);
  const vtkMountRef = useRef(null);
  const vtkViewRef = useRef(null);
  const vtkReadyRef = useRef(false);
  const cameraFramedRef = useRef(false);
  const [vtkReady, setVtkReady] = useState(false);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const aaPassRef = useRef(null);
  const msaaRenderTargetRef = useRef(null);
  const animationRef = useRef(null);

  const pointCloudsRef = useRef([]);
  const loadedChannelsRef = useRef(new Map());
  const lastGpuBudgetCountRef = useRef(0);
  const channelDataCacheRef = useRef(new Map());
  const channelConfigsRef = useRef(new Map());
  const channelsPropRef = useRef(channels);
  const onSelectionChangeRef = useRef(onSelectionChange);
  const handleSelectionCompleteRef = useRef(null);
  const lodStateRef = useRef({ lastSampling: null, lastUpdate: 0 });
  const keysRef = useRef({});
  const selectionModeRef = useRef(false);
  const cuboidRef = useRef(null);
  const cuboidWireframeRef = useRef(null);
  const cuboidWireframesRef = useRef([]); // Array to store multiple selection boxes
  const roiWireframesRef = useRef([]); // ROI cubes from positions JSON (not selection)
  const wireframeRegionMapRef = useRef(new Map()); // Map wireframe to regionId
  const isSelectingRef = useRef(false);
  const selectionEndRef = useRef(null);
  const isTogglingRef = useRef(false);
  const currentSelectionBoundsRef = useRef(initialSelectionBounds || null); // Store current selection bounds for refreshing on channel change
  const [dataLoadVersion, setDataLoadVersion] = useState(0); // Track data loading updates

  // 3D Cuboid selection state
  const [selectionMode, setSelectionMode] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);
  const [cuboidDepth, setCuboidDepth] = useState(0.1); // Z-depth in normalized coordinates
  const [cuboidCenter, setCuboidCenter] = useState(null);
  const [cuboidSize, setCuboidSize] = useState(null);

  useEffect(() => {
    channelsPropRef.current = channels || [];
  }, [channels]);

  useEffect(() => {
    onSelectionChangeRef.current = onSelectionChange;
  }, [onSelectionChange]);

  // Sync refs with state
  useEffect(() => {
    selectionModeRef.current = selectionMode;
    // Freeze VTK trackball while drawing a selection so mouse drag selects, not rotates.
    vtkViewRef.current?.setInteractive?.(!selectionMode);
  }, [selectionMode]);

  useEffect(() => {
    isSelectingRef.current = isSelecting;
  }, [isSelecting]);

  useEffect(() => {
    selectionEndRef.current = selectionEnd;
  }, [selectionEnd]);

  const cameraStateRef = useRef(cloneCameraState());
  const pendingPresetSelectionsRef = useRef(null);

  // Always prefer full voxel resolution on server (sampling=1).
  // Distance-based thinning disabled so 1–2 channels stay at highest quality.
  const getDesiredSampling = useCallback((_distance = 3) => 1, []);

  const upsertVtkChannel = useCallback((cacheKey, channelData, channelConfig, channelCount = 1) => {
    const vtk = vtkViewRef.current;
    if (!vtk || !channelData || !channelConfig) return false;
    const maxVoxels = getMainVtkMaxVoxels(channelCount);
    const many = channelCount >= 4;
    const ok = vtk.upsertChannel(cacheKey, channelData, channelConfig, {
      lightMode: themeRef.current === 'light',
      quality: many ? 'medium' : 'high',
      maxVoxels
    });
    if (ok) {
      vtk.setChannelVisible(cacheKey, channelConfig.visible !== false);
      if (!cameraFramedRef.current) {
        vtk.resetCamera();
        cameraFramedRef.current = true;
        console.log('Main_View VTK: resetCamera (Local-style framing)');
      }
      vtk.render();
    }
    return ok;
  }, []);

  const renderScene = useCallback(() => {
    const vtk = vtkViewRef.current;
    if (!vtk) return;
    const canvas = vtk.getCanvas?.();
    if (canvas?.isContextLost?.()) return;
    try {
      vtk.render();
    } catch (_) { /* context may be lost mid-frame */ }
  }, []);

  const syncThreeCameraFromVtk = useCallback(() => {
    const vtk = vtkViewRef.current;
    const camera = cameraRef.current;
    if (!vtk || !camera) return;
    try {
      const vcam = vtk.getRenderer().getActiveCamera();
      const pos = vcam.getPosition();
      const fp = vcam.getFocalPoint();
      const up = vcam.getViewUp();
      const canvas = vtk.getCanvas?.();
      if (canvas) {
        const w = Math.max(1, canvas.clientWidth || canvas.width || 1);
        const h = Math.max(1, canvas.clientHeight || canvas.height || 1);
        camera.aspect = w / h;
      }
      camera.position.set(pos[0], pos[1], pos[2]);
      camera.up.set(up[0], up[1], up[2]);
      camera.lookAt(fp[0], fp[1], fp[2]);
      camera.fov = vcam.getViewAngle?.() || camera.fov;
      const cr = vcam.getClippingRange?.();
      if (cr && cr.length >= 2) {
        camera.near = Math.max(0.001, cr[0]);
        camera.far = Math.max(camera.near + 1, cr[1]);
      }
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld(true);
    } catch (_) { /* */ }
  }, []);

    const updateCameraPosition = useCallback(() => {
    const camera = cameraRef.current;
    if (!camera) return;

    const state = cameraStateRef.current;
    const lookAtPoint = new THREE.Vector3(
      state.panOffset.x || 0,
      state.panOffset.y || 0,
      state.panOffset.z || 0
    );

    const radius = state.distance;
    const theta = state.rotation.y;
    const phi = state.rotation.x;

    camera.position.x = lookAtPoint.x + radius * Math.sin(theta) * Math.cos(phi);
    camera.position.y = lookAtPoint.y + radius * Math.sin(phi);
    camera.position.z = lookAtPoint.z + radius * Math.cos(theta) * Math.cos(phi);
    camera.up.set(0, 1, 0);
    camera.lookAt(lookAtPoint);
  }, []);

  const updateChannelLOD = useCallback(() => {}, []);

    const resetCameraView = useCallback(() => {
    // Deep-clone so mutated rotation/panOffset never corrupt CAMERA_INITIAL_STATE
    cameraStateRef.current = cloneCameraState();

    if (cameraRef.current) {
      updateCameraPosition();
      lodStateRef.current.lastUpdate = 0;
      updateChannelLOD();
    }
    
    // Clear all selection boxes
    const scene = sceneRef.current;
    if (scene) {
      // Remove all wireframes from scene
      cuboidWireframesRef.current.forEach((wireframe) => {
        if (wireframe && scene.children.includes(wireframe)) {
          try {
            scene.remove(wireframe);
            if (wireframe.geometry) wireframe.geometry.dispose();
            if (wireframe.material) wireframe.material.dispose();
          } catch (err) {
            console.error('Main_View: Error removing wireframe:', err);
          }
        }
      });
      
      // Remove temporary wireframe if exists
      if (cuboidWireframeRef.current && scene.children.includes(cuboidWireframeRef.current)) {
        try {
          scene.remove(cuboidWireframeRef.current);
          if (cuboidWireframeRef.current.geometry) cuboidWireframeRef.current.geometry.dispose();
          if (cuboidWireframeRef.current.material) cuboidWireframeRef.current.material.dispose();
        } catch (err) {
          console.error('Main_View: Error removing temporary wireframe:', err);
        }
      }
      // Remove ROI / selection wireframes from VTK
      const vtkClear = vtkViewRef.current;
      roiWireframesRef.current.forEach((entry) => {
        const id = typeof entry === 'string' ? entry : entry?.vtkId;
        if (id && vtkClear) {
          try { vtkClear.removeWireframeBox(id); } catch (_) { /* */ }
        }
      });
      cuboidWireframesRef.current.forEach((entry) => {
        const id = entry?.userData?.vtkId;
        if (id && vtkClear) {
          try { vtkClear.removeWireframeBox(id); } catch (_) { /* */ }
        }
      });
      if (cuboidWireframeRef.current?.userData?.vtkId && vtkClear) {
        try { vtkClear.removeWireframeBox(cuboidWireframeRef.current.userData.vtkId); } catch (_) { /* */ }
      }
      vtkClear?.render?.();
    }
    
    // Clear all references
    cuboidWireframesRef.current = [];
    roiWireframesRef.current = [];
    cuboidWireframeRef.current = null;
    cuboidRef.current = null;
    wireframeRegionMapRef.current.clear();
    currentSelectionBoundsRef.current = null;
    
    // Reset state
    setCuboidCenter(null);
    setCuboidSize(null);
    setSelectionStart(null);
    setSelectionEnd(null);
    
    // Notify parent to clear selections
    if (onSelectionChange) {
      onSelectionChange(null);
    }
    
    // Force multiple renders to ensure default view is displayed
    renderScene();
    
    // Additional render after a short delay to ensure view is updated
    requestAnimationFrame(() => {
      updateCameraPosition();
      updateChannelLOD();
      renderScene();
    });
    
    console.log('Main_View: Camera reset to default view and all boxes cleared');
  }, [updateCameraPosition, updateChannelLOD, onSelectionChange, renderScene]);

  const handleMovement = useCallback(() => {
    const camera = cameraRef.current;
    if (!camera) return;

    const keys = keysRef.current;
    const isFast =
      keys.shift ||
      keys.shiftleft ||
      keys.shiftright ||
      keys['shiftleft'] ||
      keys['shiftright'];
    const speed = isFast ? FAST_MOVE_SPEED : MOVE_SPEED;
    const state = cameraStateRef.current;
    let moved = false;

    const forward = new THREE.Vector3();
    const offset = new THREE.Vector3();

    const applyOffset = (vector) => {
      state.panOffset.x += vector.x;
      state.panOffset.y += vector.y;
      state.panOffset.z += vector.z;
    };

    if (keys.w || keys.arrowup) {
      camera.getWorldDirection(forward);
      applyOffset(forward.multiplyScalar(speed));
      moved = true;
    }
    if (keys.s || keys.arrowdown) {
      camera.getWorldDirection(forward);
      applyOffset(forward.multiplyScalar(-speed));
      moved = true;
    }
    if (keys.a || keys.arrowleft) {
      camera.getWorldDirection(forward);
      offset.crossVectors(camera.up, forward).normalize().multiplyScalar(speed);
      applyOffset(offset);
      moved = true;
    }
    if (keys.d || keys.arrowright) {
      camera.getWorldDirection(forward);
      offset.crossVectors(camera.up, forward).normalize().multiplyScalar(-speed);
      applyOffset(offset);
      moved = true;
    }
    if (keys.q) {
      offset.copy(camera.up).normalize().multiplyScalar(speed);
      applyOffset(offset);
      moved = true;
    }
    if (keys.e) {
      offset.copy(camera.up).normalize().multiplyScalar(-speed);
      applyOffset(offset);
      moved = true;
    }

    if (moved) {
      updateCameraPosition();
      updateChannelLOD();
    }
  }, [updateCameraPosition, updateChannelLOD]);

  // Convert screen coordinates to normalized device coordinates (-1 to 1)
  const screenToNDC = (x, y, width, height) => {
    return {
      x: (x / width) * 2 - 1,
      y: -(y / height) * 2 + 1
    };
  };

  // Get 3D world bounds from screen selection box (for XY plane)
  const getWorldBoundsFromSelection = (startX, startY, endX, endY, zDepth = 0) => {
    syncThreeCameraFromVtk();
    if (!cameraRef.current) return null;
    const canvas = vtkViewRef.current?.getCanvas?.() || rendererRef.current?.domElement;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (width < 2 || height < 2) return null;

    // Convert to NDC
    const startNDC = screenToNDC(startX - rect.left, startY - rect.top, width, height);
    const endNDC = screenToNDC(endX - rect.left, endY - rect.top, width, height);

    // Create raycaster to get world positions
    const raycaster = new THREE.Raycaster();
    const camera = cameraRef.current;

    // Intersect with z=0 plane (volume mid-slab); depth sets Z thickness.
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const corners = [
      new THREE.Vector2(startNDC.x, startNDC.y),
      new THREE.Vector2(endNDC.x, startNDC.y),
      new THREE.Vector2(endNDC.x, endNDC.y),
      new THREE.Vector2(startNDC.x, endNDC.y)
    ];

    const worldPositions = [];
    corners.forEach((ndc) => {
      raycaster.setFromCamera(ndc, camera);
      const intersection = new THREE.Vector3();
      const hit = raycaster.ray.intersectPlane(plane, intersection);
      if (hit) worldPositions.push(intersection.clone());
    });

    if (worldPositions.length < 2) return null;

    const minX = Math.min(...worldPositions.map((p) => p.x));
    const maxX = Math.max(...worldPositions.map((p) => p.x));
    const minY = Math.min(...worldPositions.map((p) => p.y));
    const maxY = Math.max(...worldPositions.map((p) => p.y));
    if (!(Number.isFinite(minX) && Number.isFinite(maxX) && Number.isFinite(minY) && Number.isFinite(maxY))) {
      return null;
    }
    if (Math.abs(maxX - minX) < 1e-6 && Math.abs(maxY - minY) < 1e-6) return null;

    const zHalfDepth = Math.max(0.005, Math.abs(zDepth) / 2);
    const minZ = -zHalfDepth;
    const maxZ = zHalfDepth;

    return {
      min: new THREE.Vector3(minX, minY, minZ),
      max: new THREE.Vector3(maxX, maxY, maxZ),
      center: new THREE.Vector3((minX + maxX) / 2, (minY + maxY) / 2, 0),
      size: new THREE.Vector3(Math.max(1e-4, maxX - minX), Math.max(1e-4, maxY - minY), Math.max(1e-4, maxZ - minZ))
    };
  };

  // Convert ROI box (center in position space, size, volumeShape [C,Z,Y,X]) to world bounds
  // Uses same scaling as scene: volumeShape [C,Z,Y,X] -> xSize=X, ySize=Y, zSize=Z
  const roiBoxToWorldBounds = useCallback((roiBox) => {
    if (!roiBox?.center || roiBox.size == null || !Array.isArray(roiBox.volumeShape) || roiBox.volumeShape.length < 4) return null;
    const [c, zSize, ySize, xSize] = roiBox.volumeShape;
    const maxDim = Math.max(xSize, ySize, zSize);
    const scaleX = xSize / maxDim;
    const scaleY = ySize / maxDim;
    const scaleZ = (zSize / maxDim) / 4;
    const half = (roiBox.size || 200) / 2;
    const pos = roiBox.center;
    const vx = pos.x / ROI_POSITION_SCALE;
    const vy = pos.y / ROI_POSITION_SCALE;
    const vz = pos.z / ROI_POSITION_SCALE;
    const halfV = half / ROI_POSITION_SCALE;
    const vMinX = Math.max(0, vx - halfV);
    const vMaxX = Math.min(xSize - 1, vx + halfV);
    const vMinY = Math.max(0, vy - halfV);
    const vMaxY = Math.min(ySize - 1, vy + halfV);
    const vMinZ = Math.max(0, vz - halfV);
    const vMaxZ = Math.min(zSize - 1, vz + halfV);
    const toWorld = (v, size, scale) => ((v / size) * 2 - 1) * scale;
    const minX = toWorld(vMinX, xSize, scaleX);
    const maxX = toWorld(vMaxX, xSize, scaleX);
    const minY = toWorld(vMinY, ySize, scaleY);
    const maxY = toWorld(vMaxY, ySize, scaleY);
    const minZ = toWorld(vMinZ, zSize, scaleZ);
    const maxZ = toWorld(vMaxZ, zSize, scaleZ);
    return {
      min: new THREE.Vector3(minX, minY, minZ),
      max: new THREE.Vector3(maxX, maxY, maxZ),
      center: new THREE.Vector3((minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2),
      size: new THREE.Vector3(maxX - minX, maxY - minY, maxZ - minZ)
    };
  }, []);

  // Create or update 3D cuboid wireframe in scene - adds new box to array
  const updateCuboidWireframe = (worldBounds, isTemporary = false) => {
    try {
      const vtk = vtkViewRef.current;
      if (!vtk || !worldBounds) return;
      let size, center;
      if (worldBounds.center && worldBounds.size) {
        size = worldBounds.size;
        center = worldBounds.center;
      } else if (worldBounds.min && worldBounds.max) {
        const min = worldBounds.min;
        const max = worldBounds.max;
        size = { x: Math.abs(max.x - min.x), y: Math.abs(max.y - min.y), z: Math.abs(max.z - min.z) };
        center = { x: (min.x + max.x) / 2, y: (min.y + max.y) / 2, z: (min.z + max.z) / 2 };
      } else return;

      const boxIndex = isTemporary ? -1 : cuboidWireframesRef.current.length;
      const colorHex = isTemporary ? '#ffff00' : BOX_COLOR_MAP[Math.min(Math.max(boxIndex, 0), BOX_COLOR_MAP.length - 1)];
      const id = isTemporary ? '__temp_selection__' : `sel-${Date.now()}-${boxIndex}`;
      vtk.setWireframeBox(id, center, size, colorHex);
      vtk.render();
      if (isTemporary) {
        cuboidWireframeRef.current = { userData: { isTemporary: true, vtkId: id, worldBounds } };
      } else {
        if (cuboidWireframeRef.current?.userData?.isTemporary) {
          vtk.removeWireframeBox('__temp_selection__');
        }
        const entry = { userData: { isTemporary: false, vtkId: id, worldBounds } };
        cuboidWireframesRef.current.push(entry);
        cuboidWireframeRef.current = entry;
        setCuboidCenter(center);
        setCuboidSize(size);
      }
    } catch (err) {
      console.error('Main_View: updateCuboidWireframe', err);
    }
  };

    // Create a sprite with ROI number label (canvas texture); position below the box
  const createRoiLabelSprite = useCallback((roiIndex, center, boxSize) => {
    const canvas = document.createElement('canvas');
    const size = 64;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#00ff88';
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, size - 2, size - 2);
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#00ff88';
    ctx.fillText(String(roiIndex), size / 2, size / 2);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(material);
    const labelSize = 0.04;
    sprite.scale.set(labelSize, labelSize, 1);
    sprite.position.copy(center);
    sprite.position.y -= (boxSize.y / 2) + labelSize * 0.6;
    sprite.renderOrder = 101;
    return sprite;
  }, []);

  // Add a single ROI rectangle (flat in XY plane) from positions JSON; stored in roiWireframesRef. Optionally add label with roiIndex.
  const addRoiWireframe = useCallback((worldBounds, roiIndex) => {
    if (!sceneRef.current || !worldBounds?.center || !worldBounds?.size) return;
    const size = worldBounds.size;
    const center = worldBounds.center;
    const minSize = 0.001;
    const safeSizeX = Math.max(minSize, Math.abs(size.x));
    const safeSizeY = Math.max(minSize, Math.abs(size.y));
    const planeGeometry = new THREE.PlaneGeometry(safeSizeX, safeSizeY);
    const rectEdges = new THREE.EdgesGeometry(planeGeometry);
    const roiColorHex = '#00ff88';
    const lineColor = parseInt(roiColorHex.replace('#', ''), 16);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      linewidth: 6,
      transparent: true,
      opacity: 0.96
    });
    const wireframe = new THREE.LineSegments(rectEdges, lineMaterial);
    wireframe.renderOrder = 100;
    wireframe.position.copy(center);
    wireframe.userData.isRoiBox = true;
    wireframe.userData.worldBounds = worldBounds;
    sceneRef.current.add(wireframe);
    wireframe.userData.roiIndex = roiIndex;
    let sprite = null;
    if (roiIndex != null && roiIndex > 0) {
      sprite = createRoiLabelSprite(roiIndex, center.clone(), size);
      sprite.userData.roiIndex = roiIndex;
      sceneRef.current.add(sprite);
    }
    roiWireframesRef.current.push({ wireframe, sprite });
    planeGeometry.dispose();
  }, [createRoiLabelSprite]);

  // Sync ConGAT model ROI boxes onto VTK Main scene (Three scene is not rendered anymore).
  useEffect(() => {
    const vtk = vtkViewRef.current;
    if (!vtk || !vtkReady) return;

    const prevIds = roiWireframesRef.current || [];
    prevIds.forEach((id) => {
      try {
        vtk.removeWireframeBox(typeof id === 'string' ? id : id?.vtkId);
      } catch (_) { /* */ }
    });
    roiWireframesRef.current = [];

    const list = Array.isArray(roiBoxes) ? roiBoxes : roiBoxes ? [roiBoxes] : [];
    if (!list.length) {
      vtk.render();
      return;
    }

    list.forEach((roiBox, idx) => {
      const worldBounds = roiBoxToWorldBounds(roiBox);
      if (!worldBounds?.center || !worldBounds?.size) return;
      const roiIndex = roiBox.roiIndex ?? roiBox.roiId ?? idx + 1;
      const id = `roi-${roiIndex}`;
      const highlighted = highlightedRoiIndex != null && Number(highlightedRoiIndex) === Number(roiIndex);
      const colorHex = highlighted ? '#ffff66' : '#00ff88';
      const center = {
        x: worldBounds.center.x,
        y: worldBounds.center.y,
        z: worldBounds.center.z
      };
      const size = {
        x: worldBounds.size.x,
        y: worldBounds.size.y,
        z: Math.max(worldBounds.size.z, 1e-3)
      };
      vtk.setWireframeBox(id, center, size, colorHex);
      roiWireframesRef.current.push(id);
    });

    console.log(`Main_View VTK: ROI overlay boxes = ${roiWireframesRef.current.length}`);
    vtk.render();
  }, [roiBoxes, highlightedRoiIndex, roiBoxToWorldBounds, vtkReady]);

  // Extract selected region data from all visible channels using 3D cuboid bounds
  const extractSelectedRegion = useCallback(async (worldBounds) => {
    if (!worldBounds || !worldBounds.min || !worldBounds.max) {
      console.warn('Main_View: extractSelectedRegion - Invalid world bounds:', worldBounds);
      return null;
    }

    const selectedData = {
      channels: [],
      bounds: null,
      worldBounds: {
        min: { x: worldBounds.min.x, y: worldBounds.min.y, z: worldBounds.min.z },
        max: { x: worldBounds.max.x, y: worldBounds.max.y, z: worldBounds.max.z },
        center: worldBounds.center
          ? { x: worldBounds.center.x, y: worldBounds.center.y, z: worldBounds.center.z }
          : null,
        size: worldBounds.size
          ? { x: worldBounds.size.x, y: worldBounds.size.y, z: worldBounds.size.z }
          : null
      }
    };

    // Prefer live props; fall back to configs map used by VTK load path.
    const liveChannels = (channelsPropRef.current?.length
      ? channelsPropRef.current
      : Array.from(channelConfigsRef.current.values()));
    const visibleChannels = liveChannels.filter((c) => c.visible !== false);
    if (visibleChannels.length === 0) {
      console.warn('Main_View: extractSelectedRegion - No visible channels');
      return null;
    }

    // Find a reference channel with loaded data to calculate bounds
    let referenceChannel = null;
    let referenceData = null;

    for (const channel of visibleChannels) {
      const cacheKey = getChannelCacheKey(channel);
      let data = channelDataCacheRef.current.get(cacheKey);

      // If not in cache, try to fetch
      if (!data) {
        console.log(`Main_View: extractSelectedRegion - Data missing for channel ${channel.channelIndex}, fetching...`);
        try {
          data = await loadChannelData(channel.channelIndex, { basePath: channel.channelBasePath });
          if (data) {
            channelDataCacheRef.current.set(cacheKey, data);
          }
        } catch (err) {
          console.warn(`Main_View: extractSelectedRegion - Failed to fetch channel ${channel.channelIndex}`, err);
        }
      }

      if (data) {
        referenceChannel = channel;
        referenceData = data;
        break; // Found a valid reference
      }
    }

    if (!referenceData) {
      console.warn('Main_View: extractSelectedRegion - Failed to obtain data for ANY visible channel');
      return null;
    }

    const { metadata } = referenceData;
    const shape = metadata.shape;
    const [zSize, ySize, xSize] = shape;
    const maxDim = Math.max(zSize, ySize, xSize);
    const scaleX = xSize / maxDim;
    const scaleY = ySize / maxDim;
    const scaleZ = (zSize / maxDim) / 4; // Z compression factor

    // Convert world bounds to voxel coordinates
    // World coordinates are in normalized [-1, 1] space
    let voxelMinX = Math.max(0, Math.floor(((worldBounds.min.x / scaleX + 1) / 2) * xSize));
    let voxelMaxX = Math.min(xSize - 1, Math.ceil(((worldBounds.max.x / scaleX + 1) / 2) * xSize));
    let voxelMinY = Math.max(0, Math.floor(((worldBounds.min.y / scaleY + 1) / 2) * ySize));
    let voxelMaxY = Math.min(ySize - 1, Math.ceil(((worldBounds.max.y / scaleY + 1) / 2) * ySize));
    let voxelMinZ = Math.max(0, Math.floor(((worldBounds.min.z / scaleZ + 1) / 2) * zSize));
    let voxelMaxZ = Math.min(zSize - 1, Math.ceil(((worldBounds.max.z / scaleZ + 1) / 2) * zSize));

    // Ensure min <= max (swap if needed)
    if (voxelMinX > voxelMaxX) [voxelMinX, voxelMaxX] = [voxelMaxX, voxelMinX];
    if (voxelMinY > voxelMaxY) [voxelMinY, voxelMaxY] = [voxelMaxY, voxelMinY];
    if (voxelMinZ > voxelMaxZ) [voxelMinZ, voxelMaxZ] = [voxelMaxZ, voxelMinZ];

    // Ensure minimum size (at least 1 voxel in each dimension)
    if (voxelMaxX === voxelMinX) voxelMaxX = Math.min(xSize - 1, voxelMinX + 1);
    if (voxelMaxY === voxelMinY) voxelMaxY = Math.min(ySize - 1, voxelMinY + 1);
    if (voxelMaxZ === voxelMinZ) voxelMaxZ = Math.min(zSize - 1, voxelMinZ + 1);

    selectedData.bounds = {
      min: { x: voxelMinX, y: voxelMinY, z: voxelMinZ },
      max: { x: voxelMaxX, y: voxelMaxY, z: voxelMaxZ }
    };

    // Store scaling factors for Local_View to maintain 3D positions
    selectedData.scaling = {
      scaleX,
      scaleY,
      scaleZ,
      xSize,
      ySize,
      zSize
    };

    console.log(`Main_View: Calculated voxel bounds: X[${voxelMinX}, ${voxelMaxX}], Y[${voxelMinY}, ${voxelMaxY}], Z[${voxelMinZ}, ${voxelMaxZ}]`);
    console.log(`Main_View: Bounds size: ${voxelMaxX - voxelMinX + 1} x ${voxelMaxY - voxelMinY + 1} x ${voxelMaxZ - voxelMinZ + 1} voxels`);

    // Add all visible channels
    visibleChannels.forEach(channelConfig => {
      selectedData.channels.push({
        channelIndex: channelConfig.channelIndex,
        color: channelConfig.color,
        thresholdMin: channelConfig.thresholdMin,
        thresholdMax: channelConfig.thresholdMax,
        opacity: channelConfig.opacity
      });
    });

    console.log(`Main_View: Added ${selectedData.channels.length} channels to selection`);

    return selectedData;
  }, []);

  // Handle selection completion with 3D cuboid bounds
  const handleSelectionComplete = useCallback(async (worldBounds) => {
    if (!worldBounds) {
      console.warn('Main_View: Invalid world bounds');
      return;
    }

    // Store bounds for refreshing selection when channels change
    currentSelectionBoundsRef.current = worldBounds;

    const liveChannels = channelsPropRef.current || [];
    console.log('Main_View: ===== SELECTION COMPLETED =====');
    console.log('Main_View: 3D Cuboid selection completed');
    console.log('Main_View: World bounds:', worldBounds);
    console.log('Main_View: Cuboid center:', worldBounds.center);
    console.log('Main_View: Cuboid size:', worldBounds.size);
    console.log('Main_View: Current channels:', liveChannels);
    console.log('Main_View: onSelectionChange callback exists:', !!onSelectionChangeRef.current);

    try {
      const selectedData = await extractSelectedRegion(worldBounds);
      if (selectedData) {
        console.log('Main_View: ✓ Extracted selected region data:', selectedData);
        console.log('Main_View: Voxel bounds:', selectedData.bounds);
        console.log('Main_View: Channels count:', selectedData.channels.length);
        console.log('Main_View: Channels:', selectedData.channels);
        console.log('Main_View: Scaling factors:', selectedData.scaling);

        if (onSelectionChangeRef.current) {
          onSelectionChangeRef.current(selectedData);
        } else {
          console.warn('Main_View: onSelectionChange prop is missing');
        }
      } else {
        console.error('Main_View: ✗ Failed to extract selected region data');
        console.error('Main_View: World bounds were:', worldBounds);
        console.error(
          'Main_View: Visible channels:',
          liveChannels.filter((c) => c.visible !== false)
        );
      }
    } catch (error) {
      console.error('Main_View: Error in handleSelectionComplete:', error);
      console.error('Main_View: Error stack:', error.stack);
    }
  }, [extractSelectedRegion]);

  useEffect(() => {
    handleSelectionCompleteRef.current = handleSelectionComplete;
  }, [handleSelectionComplete]);

  useImperativeHandle(ref, () => ({
    getCameraState: () => cloneCameraState(cameraStateRef.current),
    applyCameraState: (camera) => {
      if (!camera) return;
      cameraStateRef.current = cloneCameraState(camera);
      updateCameraPosition();
      updateChannelLOD(true);
      renderScene();
    },
    applyPresetSelections: async (worldBoundsList = []) => {
      pendingPresetSelectionsRef.current = worldBoundsList;
      if (!worldBoundsList.length) return;

      const toVec3 = (p) => {
        if (!p) return new THREE.Vector3();
        if (p.isVector3) return p.clone();
        return new THREE.Vector3(p.x, p.y, p.z);
      };

      for (const raw of worldBoundsList) {
        if (!raw) continue;
        const worldBounds = {
          min: toVec3(raw.min),
          max: toVec3(raw.max),
          center: toVec3(raw.center),
          size: toVec3(raw.size)
        };
        currentSelectionBoundsRef.current = worldBounds;
        updateCuboidWireframe(worldBounds);
        setCuboidCenter(worldBounds.center);
        setCuboidSize(worldBounds.size);
        await handleSelectionComplete(worldBounds);
        await new Promise((r) => setTimeout(r, 150));
      }
      pendingPresetSelectionsRef.current = null;
      renderScene();
    }
  }), [updateCameraPosition, updateChannelLOD, renderScene, handleSelectionComplete]);

  // Refresh selection when channels change or data loads
  useEffect(() => {
    if (currentSelectionBoundsRef.current) {
      // Trigger selection refresh
      // We no longer need to wait for isDataLoaded here because extractSelectedRegion
      // will now fetch data if needed.
      console.log('Main_View: Channels changed, triggering selection refresh...');

      // Debounce to avoid rapid updates
      const timer = setTimeout(() => {
        handleSelectionComplete(currentSelectionBoundsRef.current);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      console.log('Main_View: No currentSelectionBoundsRef to refresh');
    }
  }, [channels, handleSelectionComplete]);

  // Restore selection from initial bounds if provided
  useEffect(() => {
    if (initialSelectionBounds && !currentSelectionBoundsRef.current) {
      console.log('Main_View: Restoring selection from initial bounds:', initialSelectionBounds);
      currentSelectionBoundsRef.current = initialSelectionBounds;
      setSelectionMode(true);

      // Restore wireframe
      if (sceneRef.current) {
        updateCuboidWireframe(initialSelectionBounds);
        setCuboidCenter(initialSelectionBounds.center);
        setCuboidSize(initialSelectionBounds.size);
      }

      // Trigger data extraction
      handleSelectionComplete(initialSelectionBounds);
    }
  }, [initialSelectionBounds, handleSelectionComplete]);

  // Manage wireframes based on selectedRegionsData - remove boxes when regions are deleted
  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = sceneRef.current;
    const wireframes = cuboidWireframesRef.current;
    const regionMap = wireframeRegionMapRef.current;

    // Helper function to compare worldBounds (with tolerance for floating point)
    const worldBoundsMatch = (wb1, wb2) => {
      if (!wb1 || !wb2) return false;
      const tolerance = 0.0001;
      const centerMatch = wb1.center && wb2.center &&
        Math.abs(wb1.center.x - wb2.center.x) < tolerance &&
        Math.abs(wb1.center.y - wb2.center.y) < tolerance &&
        Math.abs(wb1.center.z - wb2.center.z) < tolerance;
      const sizeMatch = wb1.size && wb2.size &&
        Math.abs(wb1.size.x - wb2.size.x) < tolerance &&
        Math.abs(wb1.size.y - wb2.size.y) < tolerance &&
        Math.abs(wb1.size.z - wb2.size.z) < tolerance;
      return centerMatch && sizeMatch;
    };

    // Get array of worldBounds from selectedRegionsData
    const activeWorldBounds = selectedRegionsData
      .filter(region => region.worldBounds)
      .map(region => region.worldBounds);

    // Remove wireframes that don't match any active region
    const wireframesToRemove = [];
    wireframes.forEach((wireframe, index) => {
      if (!wireframe || wireframe.userData.isTemporary) return;
      
      const wireframeWorldBounds = wireframe.userData.worldBounds;
      if (!wireframeWorldBounds) return;

      // Check if this wireframe's worldBounds matches any active region
      const isActive = activeWorldBounds.some(activeWB => 
        worldBoundsMatch(wireframeWorldBounds, activeWB)
      );

      if (!isActive) {
        wireframesToRemove.push({ wireframe, index });
      }
    });

    // Remove wireframes that are no longer in selectedRegionsData
    wireframesToRemove.forEach(({ wireframe, index }) => {
      try {
        if (scene.children.includes(wireframe)) {
          scene.remove(wireframe);
        }
        if (wireframe.geometry) wireframe.geometry.dispose();
        if (wireframe.material) wireframe.material.dispose();
        wireframes.splice(index, 1);
        regionMap.delete(wireframe);
        console.log('Main_View: Removed wireframe for deleted region');
      } catch (err) {
        console.error('Main_View: Error removing wireframe:', err);
      }
    });

    if (wireframesToRemove.length > 0) {
      renderScene();
    }
  }, [selectedRegionsData, renderScene]);

  useEffect(() => {
    const vtk = vtkViewRef.current;
    if (!vtk) return;
    // Only refresh background + transfer functions — do NOT rebuild volume textures
    // (full upsert on theme toggle was causing WebGL context loss).
    vtk.setBackground(colors.canvasBg || '#000000');
    if (typeof vtk.updateAllAppearances === 'function') {
      vtk.updateAllAppearances({ lightMode: theme === 'light' });
    } else {
      vtk.render();
    }
  }, [theme, colors.canvasBg]);


  // Local-style VTK Main scene (smooth multi-volume ray casting)
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const host = vtkMountRef.current || container;
    const rect = container.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width || container.clientWidth || 800));
    const height = Math.max(1, Math.floor(rect.height || container.clientHeight || 600));

    // Same recipe as Local_View: interactive VTK + resetCamera framing
    const vtkView = createVtkVolumeView(host, {
      interactive: true,
      maxVoxels: getMainVtkMaxVoxels(1),
      sampleDistance: 0.35,
      worldSpace: true
    });
    vtkView.setBackground(colors.canvasBg || '#000000');
    vtkView.resize();
    vtkViewRef.current = vtkView;
    vtkReadyRef.current = true;
    setVtkReady(true);
    cameraFramedRef.current = false;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);
    cameraRef.current = camera;

    const canvas = vtkView.getCanvas() || host;
    rendererRef.current = { domElement: canvas, setSize() {}, dispose() {} };
    composerRef.current = null;
    aaPassRef.current = null;
    msaaRenderTargetRef.current = null;

    let contextLost = false;
    const onContextLost = (e) => {
      e.preventDefault();
      contextLost = true;
      console.warn(
        'Main_View: WebGL context lost (GPU memory). Reduce visible channels or resolution, then refresh.'
      );
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
    const onContextRestored = () => {
      console.warn('Main_View: WebGL context restored — reload the page to rebuild volumes.');
      contextLost = false;
    };
    if (canvas?.addEventListener) {
      canvas.addEventListener('webglcontextlost', onContextLost, false);
      canvas.addEventListener('webglcontextrestored', onContextRestored, false);
    }

    console.log('Main_View: Local-style VTK ready', width, 'x', height);

    let selectionStartPos = null;
    let currentCuboidDepth = 0.1;

    const handleMouseDown = (e) => {
      if (!(selectionModeRef.current && e.button === 0)) return;
      e.preventDefault();
      e.stopPropagation();
      selectionStartPos = { x: e.clientX, y: e.clientY };
      setIsSelecting(true);
      setSelectionStart(selectionStartPos);
      setSelectionEnd(selectionStartPos);
      currentCuboidDepth = cuboidDepth;
      if (cuboidWireframeRef.current?.userData?.isTemporary) {
        vtkView.removeWireframeBox(cuboidWireframeRef.current.userData.vtkId || '__temp_selection__');
        cuboidWireframeRef.current = null;
      }
    };

    const handleMouseUp = (e) => {
      if (!(selectionModeRef.current && selectionStartPos)) return;
      e.preventDefault?.();
      const worldBounds = getWorldBoundsFromSelection(
        selectionStartPos.x, selectionStartPos.y, e.clientX, e.clientY, currentCuboidDepth
      );
      if (worldBounds) {
        updateCuboidWireframe(worldBounds, false);
        handleSelectionCompleteRef.current?.(worldBounds)?.catch?.(console.error);
        setSelectionMode(false);
      } else {
        console.warn('Main_View: selection mouseup produced no worldBounds');
      }
      setIsSelecting(false);
      setSelectionStart(null);
      setSelectionEnd(null);
      selectionStartPos = null;
    };

    const handleMouseMove = (e) => {
      if (!(selectionModeRef.current && selectionStartPos)) return;
      setSelectionEnd({ x: e.clientX, y: e.clientY });
      const worldBounds = getWorldBoundsFromSelection(
        selectionStartPos.x, selectionStartPos.y, e.clientX, e.clientY, currentCuboidDepth
      );
      if (worldBounds) {
        updateCuboidWireframe(worldBounds, true);
        setCuboidCenter(worldBounds.center);
        setCuboidSize(worldBounds.size);
      }
    };

    const handleWheel = (e) => {
      if (!(selectionModeRef.current && isSelectingRef.current && selectionStartPos)) return;
      e.preventDefault();
      currentCuboidDepth = Math.max(0.01, Math.min(1, currentCuboidDepth + e.deltaY * 0.0001));
      setCuboidDepth(currentCuboidDepth);
      const endPos = selectionEndRef.current || selectionStartPos;
      const worldBounds = getWorldBoundsFromSelection(
        selectionStartPos.x, selectionStartPos.y, endPos.x, endPos.y, currentCuboidDepth
      );
      if (worldBounds) updateCuboidWireframe(worldBounds, true);
    };

    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => { keysRef.current[e.key.toLowerCase()] = true; };
    const handleKeyUp = (e) => { keysRef.current[e.key.toLowerCase()] = false; };

    canvas.addEventListener('mousedown', handleMouseDown, true);
    window.addEventListener('mouseup', handleMouseUp, true);
    window.addEventListener('mousemove', handleMouseMove, true);
    canvas.addEventListener('wheel', handleWheel, { passive: false });
    canvas.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const animate = () => {
      if (contextLost) return;
      renderScene();
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      const r = container.getBoundingClientRect();
      const w = Math.max(1, Math.floor(r.width || 1));
      const h = Math.max(1, Math.floor(r.height || 1));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      vtkView.resize();
      const c = vtkView.getCanvas();
      if (c) rendererRef.current = { domElement: c, setSize() {}, dispose() {} };
      renderScene();
    };
    window.addEventListener('resize', handleResize);
    requestAnimationFrame(handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', handleMouseUp, true);
      window.removeEventListener('mousemove', handleMouseMove, true);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousedown', handleMouseDown, true);
      canvas.removeEventListener('wheel', handleWheel);
      canvas.removeEventListener('contextmenu', handleContextMenu);
      if (canvas?.removeEventListener) {
        canvas.removeEventListener('webglcontextlost', onContextLost, false);
        canvas.removeEventListener('webglcontextrestored', onContextRestored, false);
      }
      loadedChannelsRef.current.clear();
      channelDataCacheRef.current.clear();
      vtkView.delete();
      vtkViewRef.current = null;
      vtkReadyRef.current = false;
      setVtkReady(false);
      cameraFramedRef.current = false;
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
    };
  }, []); // Local-style: init VTK once; handlers close over refs

  useEffect(() => {
    const vtk = vtkViewRef.current;
    if (!vtk || !vtkReady) return;

    if (channels.length === 0) {
      const loadedChannels = loadedChannelsRef.current;
      loadedChannels.forEach((_e, key) => vtk.removeChannel(key));
      loadedChannels.clear();
      channelDataCacheRef.current.clear();
      channelConfigsRef.current.clear();
      pointCloudsRef.current = [];
      cameraFramedRef.current = false;
      renderScene();
      return;
    }

    const loadedChannels = loadedChannelsRef.current;
    const channelDataCache = channelDataCacheRef.current;

    // Map from cache key to config for lookup by loadedChannels key
    const channelConfigByKey = new Map();
    channels.forEach((cfg) => {
      channelConfigByKey.set(getChannelCacheKey(cfg), cfg);
    });

    // First pass: Remove channels that are no longer in the list or are not visible
    let needsRender = false;
    loadedChannels.forEach((entry, key) => {
      const channelConfig = channelConfigByKey.get(key);

      if (!channelConfig) {
        vtk.removeChannel(key);
        loadedChannels.delete(key);
        channelDataCache.delete(key);
        needsRender = true;
      } else {
        vtk.setChannelVisible(key, channelConfig.visible !== false);
      }
    });

    if (needsRender) {
      renderScene();
    }

    channelConfigsRef.current.clear();

    // Second pass: Update channel configs and handle visibility changes
    channels.forEach((channelConfig) => {
      const channelIndex = channelConfig.channelIndex;
      const key = getChannelCacheKey(channelConfig);
      channelConfigsRef.current.set(key, channelConfig);
      const entry = loadedChannels.get(key);
      const channelData = channelDataCache.get(key);
      let mesh = entry?.mesh ?? null;

      const newSignature = getConfigSignature(channelConfig);
      const configChanged = entry?.configSignature !== newSignature;

      if (entry && configChanged) {
        // Threshold / color / opacity → refresh TF only (keep GPU volume).
        if (vtk.hasChannel(key) && channelDataCache.has(key)) {
          vtk.updateChannelAppearance(key, channelConfig, {
            lightMode: theme === 'light'
          });
          entry.configSignature = newSignature;
          needsRender = true;
        } else {
          vtk.removeChannel(key);
          loadedChannels.delete(key);
          mesh = null;
        }
      }
      if (vtk.hasChannel(key)) {
        vtk.setChannelVisible(key, channelConfig.visible !== false);
      }
    });

    if (needsRender) {
      renderScene();
    }

    // Re-balance GPU texture size when visible channel count changes (avoids CONTEXT_LOST).
    const visibleCountNow = Math.max(
      1,
      channels.filter((c) => c.visible !== false).length
    );
    if (lastGpuBudgetCountRef.current !== visibleCountNow) {
      lastGpuBudgetCountRef.current = visibleCountNow;
      loadedChannels.forEach((_entry, key) => {
        const data = channelDataCache.get(key);
        const cfg = channelConfigsRef.current.get(key);
        if (data && cfg && vtk.hasChannel(key)) {
          upsertVtkChannel(key, data, cfg, visibleCountNow);
        }
      });
    }

    const loadChannels = async () => {
      const visibleChannels = channels.filter((cfg) => cfg.visible !== false);
      const visibleCount = Math.max(1, visibleChannels.length);
      const toLoad = visibleChannels.filter((cfg) => {
        const key = getChannelCacheKey(cfg);
        return !loadedChannels.has(key) || !vtk.hasChannel(key);
      });
      if (toLoad.length === 0) {
        renderScene();
        return;
      }
      console.log(
        `Main_View VTK: Loading ${toLoad.length} channel(s); ` +
        `GPU budget ~${(getMainVtkMaxVoxels(visibleCount) / 1e6).toFixed(0)}M voxels/channel ` +
        `(${visibleCount} visible)`
      );

      for (const channelConfig of toLoad) {
        if (channelConfig.visible === false) continue;

        try {
          const cacheKey = getChannelCacheKey(channelConfig);
          const currentConfig = channelConfigsRef.current.get(cacheKey);
          if (!currentConfig || getDataIdentity(currentConfig) !== getDataIdentity(channelConfig)) {
            console.log(`Main_View:  Skipping stale load for channel ${channelConfig.channelIndex}`);
            continue;
          }

          let channelData = channelDataCache.get(cacheKey);
          if (!channelData) {
            console.log(
              `Main_View: Fetching channel ${channelConfig.channelIndex} from ${channelConfig.channelBasePath || 'default'}`
            );
            channelData = await loadChannelData(channelConfig.channelIndex, { basePath: channelConfig.channelBasePath });
            if (channelData) {
              channelDataCache.set(cacheKey, channelData);
            } else {
              console.warn(
                `Main_View: Failed to load channel ${channelConfig.channelIndex} (${channelConfig.channelBasePath || 'default'})`
              );
            }
          }

          const latestConfig = channelConfigsRef.current.get(cacheKey);
          if (!latestConfig || getDataIdentity(latestConfig) !== getDataIdentity(channelConfig)) {
            console.log(`Main_View:  Loaded data discarded for channel ${channelConfig.channelIndex} (stale)`);
            continue;
          }

          const renderConfig = latestConfig || channelConfig;
          if (!channelData) continue;

          const ok = upsertVtkChannel(cacheKey, channelData, renderConfig, visibleCount);
          if (ok) {
            loadedChannels.set(cacheKey, {
              mesh: null,
              sampling: 1,
              lastRequestedSampling: 1,
              configSignature: getConfigSignature(renderConfig)
            });
            console.log(`Main_View VTK: channel ${renderConfig.channelIndex} ready`);
            renderScene();
          } else {
            console.warn(`Main_View VTK: channel ${channelConfig.channelIndex} failed`);
          }
        } catch (error) {
          console.error(`Main_View:  Error loading channel ${channelConfig.channelIndex}:`, error);
        }

        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      const readyCount = visibleChannels.filter((cfg) => vtk.hasChannel(getChannelCacheKey(cfg))).length;
      console.log(`Main_View VTK: Visible ${readyCount}/${visibleChannels.length}`);
      renderScene();
      // Signal that data loading/processing has occurred
      setDataLoadVersion(v => v + 1);
    };

    loadChannels();
  }, [channels, upsertVtkChannel, renderScene, vtkReady, theme]);

  // Calculate dimensions in micrometers (assuming 1 voxel = 1 μm, adjust as needed)
  const getCuboidDimensions = () => {
    try {
      if (!cuboidSize || !cuboidRef.current) return null;

      // Get first channel metadata for voxel-to-μm conversion
      const visibleChannels = channels.filter(c => c.visible !== false);
      if (visibleChannels.length === 0) return null;

      const firstChannel = visibleChannels[0];
      const channelData = channelDataCacheRef.current.get(getChannelCacheKey(firstChannel));
      if (!channelData) return null;

      const { metadata } = channelData;
      const [zSize, ySize, xSize] = metadata.shape;

      // Calculate voxel dimensions from world bounds
      // Convert world bounds back to voxel coordinates
      const maxDim = Math.max(zSize, ySize, xSize);
      const scaleX = xSize / maxDim;
      const scaleY = ySize / maxDim;
      const scaleZ = (zSize / maxDim) / 4;

      // Convert world bounds to voxel coordinates
      const worldMin = cuboidRef.current.min;
      const worldMax = cuboidRef.current.max;

      if (!worldMin || !worldMax) return null;

      let voxelMinX = Math.max(0, Math.floor(((worldMin.x / scaleX + 1) / 2) * xSize));
      let voxelMaxX = Math.min(xSize - 1, Math.ceil(((worldMax.x / scaleX + 1) / 2) * xSize));
      let voxelMinY = Math.max(0, Math.floor(((worldMin.y / scaleY + 1) / 2) * ySize));
      let voxelMaxY = Math.min(ySize - 1, Math.ceil(((worldMax.y / scaleY + 1) / 2) * ySize));
      let voxelMinZ = Math.max(0, Math.floor(((worldMin.z / scaleZ + 1) / 2) * zSize));
      let voxelMaxZ = Math.min(zSize - 1, Math.ceil(((worldMax.z / scaleZ + 1) / 2) * zSize));

      // Ensure min <= max
      if (voxelMinX > voxelMaxX) [voxelMinX, voxelMaxX] = [voxelMaxX, voxelMinX];
      if (voxelMinY > voxelMaxY) [voxelMinY, voxelMaxY] = [voxelMaxY, voxelMinY];
      if (voxelMinZ > voxelMaxZ) [voxelMinZ, voxelMaxZ] = [voxelMaxZ, voxelMinZ];

      const voxelWidth = voxelMaxX - voxelMinX + 1;
      const voxelHeight = voxelMaxY - voxelMinY + 1;
      const voxelDepth = voxelMaxZ - voxelMinZ + 1;

      // Convert to micrometers (assuming 1 voxel = 1 μm, adjust if needed)
      const voxelSize = 1; // μm per voxel
      return {
        width: (voxelWidth * voxelSize).toFixed(1),
        height: (voxelHeight * voxelSize).toFixed(1),
        depth: (voxelDepth * voxelSize).toFixed(1),
        volume: ((voxelWidth * voxelHeight * voxelDepth) * voxelSize * voxelSize * voxelSize).toFixed(1)
      };
    } catch (err) {
      console.error('Main_View: Error calculating cuboid dimensions:', err);
      return null;
    }
  };

  const cuboidDimensions = getCuboidDimensions();

  return (
    <div style={{
      height: '100%',
      width: '100%',
      position: 'relative',
      backgroundColor: colors.canvasBg,
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      <div ref={mountRef} style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden'
      }}>
        <div ref={vtkMountRef} style={{ position: 'absolute', inset: 0 }} />
      </div>

      {/* Selection Mode Toggle Button - Top Right */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          // Prevent rapid clicking
          if (isTogglingRef.current) {
            console.log('Main_View: Toggle already in progress, ignoring click');
            return;
          }

          try {
            isTogglingRef.current = true;
            const newMode = !selectionMode;
            console.log('Main_View: Selection mode toggled:', newMode);

            // Update state immediately
            setSelectionMode(newMode);

            // Clear cuboid when disabling selection (defer to avoid render issues)
            if (!newMode && cuboidWireframeRef.current) {
              requestAnimationFrame(() => {
                try {
                  const vtk = vtkViewRef.current;
                  const id = cuboidWireframeRef.current?.userData?.vtkId || '__temp_selection__';
                  vtk?.removeWireframeBox?.(id);
                  cuboidWireframeRef.current = null;
                  cuboidRef.current = null;
                  setCuboidCenter(null);
                  setCuboidSize(null);
                  currentSelectionBoundsRef.current = null;
                  vtk?.render?.();
                } catch (err) {
                  console.error('Main_View: Error clearing cuboid:', err);
                } finally {
                  isTogglingRef.current = false;
                }
              });
            } else {
              isTogglingRef.current = false;
            }
          } catch (err) {
            console.error('Main_View: Error toggling selection mode:', err);
            isTogglingRef.current = false;
            // Still update state even if cleanup fails
            try {
              setSelectionMode(!selectionMode);
            } catch (stateErr) {
              console.error('Main_View: Failed to update state:', stateErr);
            }
          }
        }}
        style={{
          position: 'absolute',
          top: '52px',
          right: '10px',
          zIndex: 1000,
          padding: '8px 16px',
          backgroundColor: selectionMode ? 'rgba(76, 175, 80, 0.88)' : 'rgba(70, 70, 70, 0.75)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          transition: 'background-color 0.2s',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
        title={selectionMode ? 'Click to disable 3D selection' : 'Click to enable 3D selection'}
      >
        {selectionMode ? '✓ 3D Selection' : '3D Selection'}
      </button>

      {/* Reset View Button - next to selection */}
      <button
        onClick={resetCameraView}
        style={{
          position: 'absolute',
          top: '52px',
          right: '140px',
          zIndex: 1000,
          padding: '8px 14px',
          backgroundColor: 'rgba(70, 70, 70, 0.75)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: '500',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          transition: 'background-color 0.2s',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(90, 90, 90, 0.85)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(70, 70, 70, 0.75)'; }}
        title="Reset camera to initial view"
      >
        ↺ Reset View
      </button>

      {/* Selection Box Help Tooltip - shown when selection mode is active */}
      {selectionMode && !isSelecting && !cuboidDimensions && (
        <div style={{
          position: 'absolute',
          top: '100px',
          right: '10px',
          zIndex: 1000,
          backgroundColor: 'rgba(45, 127, 249, 0.82)',
          color: 'white',
          padding: '10px 14px',
          borderRadius: '6px',
          fontSize: '14px',
          maxWidth: '220px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          lineHeight: '1.5',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '6px' }}> How to Select:</div>
          <div>• <strong>Click & drag</strong> to draw selection box</div>
          <div>• <strong>Scroll</strong> while drawing to adjust Z-depth</div>
          <div>• Release to confirm selection</div>
        </div>
      )}

      {/* Cuboid Dimensions Display */}
      {selectionMode && cuboidDimensions && (
        <div style={{
          position: 'absolute',
          top: '100px',
          right: '10px',
          zIndex: 1000,
          backgroundColor: 'var(--legend-bg, rgba(0, 0, 0, 0.8))',
          color: 'var(--text-color, white)',
          padding: '10px',
          borderRadius: '4px',
          fontSize: '12px',
          fontFamily: 'monospace',
          minWidth: '200px',
          border: '1px solid var(--border-color, #555)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '5px', borderBottom: '1px solid var(--border-color, #555)', paddingBottom: '5px' }}>
            3D Cuboid Selection
          </div>
          <div>Width: {cuboidDimensions.width} μm</div>
          <div>Height: {cuboidDimensions.height} μm</div>
          <div>Depth: {cuboidDimensions.depth} μm</div>
          <div style={{ marginTop: '5px', borderTop: '1px solid var(--border-color, #555)', paddingTop: '5px' }}>
            Volume: {cuboidDimensions.volume} μm³
          </div>
          {isSelecting && (
            <div style={{ marginTop: '5px', color: '#00ff00', fontSize: '11px' }}>
              Scroll to adjust Z-depth
            </div>
          )}
        </div>
      )}

      {/* Active Regions HUD */}
      {activeRegions.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '52px',
            left: '16px',
            background: 'rgba(0, 0, 0, 0.55)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: '8px',
            padding: '12px 14px',
            color: '#FFFFFF',
            pointerEvents: 'none',
            backdropFilter: 'blur(6px)',
            maxWidth: '260px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {activeRegions.map((region) => (
            <div key={`hud-${region.id}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>
                {region.title}
              </div>
              {region.topMarkers.map((marker) => (
                <div
                  key={`${region.id}-${marker.name}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    lineHeight: 1.4
                  }}
                >
                  <span
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '3px',
                      backgroundColor: marker.color,
                      border: '1px solid rgba(255,255,255,0.25)',
                      flexShrink: 0
                    }}
                  />
                  <span>{marker.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

Main_View.displayName = 'Main_View';

export default Main_View;

