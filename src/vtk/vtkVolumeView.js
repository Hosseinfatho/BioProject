/**
 * Shared VTK.js volume view for Local + Main.
 * One VolumeMapper + Volume per channel (stable multi-volume overlay).
 */
import '@kitware/vtk.js/Rendering/Profiles/Volume';
import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkGenericRenderWindow from '@kitware/vtk.js/Rendering/Misc/GenericRenderWindow';
import vtkImageData from '@kitware/vtk.js/Common/DataModel/ImageData';
import vtkDataArray from '@kitware/vtk.js/Common/Core/DataArray';
import vtkVolume from '@kitware/vtk.js/Rendering/Core/Volume';
import vtkVolumeMapper from '@kitware/vtk.js/Rendering/Core/VolumeMapper';
import vtkVolumeProperty from '@kitware/vtk.js/Rendering/Core/VolumeProperty';
import vtkColorTransferFunction from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction';
import vtkPiecewiseFunction from '@kitware/vtk.js/Common/DataModel/PiecewiseFunction';
import vtkInteractorStyleTrackballCamera from '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera';
import vtkCubeSource from '@kitware/vtk.js/Filters/Sources/CubeSource';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';

const DEFAULT_MAX_VOXELS = 40_000_000;

/**
 * Trackball with easy scene move:
 * - Left-drag = pan (move volume)
 * - Shift+Left = rotate
 * - Ctrl/Alt+Left = spin
 * - Middle/Right-drag = pan
 * - Wheel = zoom
 *
 * VTK freezes handler methods on the style instance, so we wrap with a Proxy
 * instead of assigning to handleLeftButtonPress.
 */
function createTrackballStyle() {
  const style = vtkInteractorStyleTrackballCamera.newInstance();

  const leftPress = (...args) => style.handleLeftButtonPress(...args);
  const leftRelease = (...args) => style.handleLeftButtonRelease(...args);

  const panAwareLeftPress = (callData) => {
    if (!callData.shiftKey && !callData.controlKey && !callData.altKey) {
      // Default left-drag moves the scene (pan)
      return leftPress({ ...callData, shiftKey: true });
    }
    if (callData.shiftKey && !callData.controlKey && !callData.altKey) {
      // Shift+left rotates
      return leftPress({ ...callData, shiftKey: false, controlKey: false, altKey: false });
    }
    return leftPress(callData);
  };

  const startPanPress = (callData) =>
    leftPress({ ...callData, shiftKey: true, controlKey: false, altKey: false });

  return new Proxy(style, {
    get(target, prop, receiver) {
      if (prop === 'handleLeftButtonPress') return panAwareLeftPress;
      if (prop === 'handleMiddleButtonPress' || prop === 'handleRightButtonPress') {
        return startPanPress;
      }
      if (prop === 'handleMiddleButtonRelease' || prop === 'handleRightButtonRelease') {
        return leftRelease;
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}

const hexToRgb = (hex) => {
  const h = String(hex || '#ffffff').replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255
  };
};

const thresholdToUint8 = (threshold, dataMin, dataMax) => {
  const span = Math.max(1e-6, dataMax - dataMin);
  return Math.max(0, Math.min(255, ((threshold - dataMin) / span) * 255));
};

const parseBgColor = (hex) => {
  const h = String(hex || '#000000').replace('#', '');
  const n = parseInt(h, 16);
  return [
    ((n >> 16) & 255) / 255,
    ((n >> 8) & 255) / 255,
    (n & 255) / 255
  ];
};

/** Downsample Uint8 [z][y][x] → { values, dims:[x,y,z], stride }.
 * Uses max-pooling so bright structures survive when stride > 1.
 * When under the cap, returns the original buffer (no copy / no loss).
 */
export function prepareVolumeScalars(data, shapeZYX, maxVoxels = DEFAULT_MAX_VOXELS) {
  const [zSize, ySize, xSize] = shapeZYX.map(Number);
  const total = zSize * ySize * xSize;
  let stride = 1;
  if (Number.isFinite(maxVoxels) && maxVoxels > 0 && total > maxVoxels) {
    stride = Math.max(1, Math.ceil(Math.cbrt(total / maxVoxels)));
  }

  if (stride === 1) {
    return { values: data, dims: [xSize, ySize, zSize], stride: 1 };
  }

  const dz = Math.ceil(zSize / stride);
  const dy = Math.ceil(ySize / stride);
  const dx = Math.ceil(xSize / stride);
  const out = new Uint8Array(dx * dy * dz);
  const plane = ySize * xSize;

  let o = 0;
  for (let z = 0; z < zSize; z += stride) {
    const zEnd = Math.min(zSize, z + stride);
    for (let y = 0; y < ySize; y += stride) {
      const yEnd = Math.min(ySize, y + stride);
      for (let x = 0; x < xSize; x += stride) {
        const xEnd = Math.min(xSize, x + stride);
        let peak = 0;
        for (let zz = z; zz < zEnd; zz++) {
          const zOff = zz * plane;
          for (let yy = y; yy < yEnd; yy++) {
            const row = zOff + yy * xSize;
            for (let xx = x; xx < xEnd; xx++) {
              const v = data[row + xx];
              if (v > peak) peak = v;
            }
          }
        }
        out[o++] = peak;
      }
    }
  }

  return { values: out, dims: [dx, dy, dz], stride };
}

/**
 * Local-style ImageData: origin 0, spacing [1,1,0.25].
 */
export function createImageDataLocal(values, dimsXYZ, spacing = [1, 1, 0.25]) {
  const [dx, dy, dz] = dimsXYZ;
  if (!dx || !dy || !dz || !values?.length) {
    throw new Error(`Invalid volume dims/values: ${dx}×${dy}×${dz}`);
  }

  const imageData = vtkImageData.newInstance();
  imageData.setExtent(0, dx - 1, 0, dy - 1, 0, dz - 1);
  imageData.setSpacing(spacing[0], spacing[1], spacing[2]);
  imageData.setOrigin(0, 0, 0);
  imageData.getPointData().setScalars(
    vtkDataArray.newInstance({
      name: 'scalars',
      numberOfComponents: 1,
      values,
      dataType: 'Uint8Array'
    })
  );
  imageData.modified();
  return imageData;
}

/**
 * Main-scene ImageData placed in the same world box as Three.js voxels:
 * X/Y/Z ∈ [-scale, +scale] with scaleZ compressed by 4.
 * shapeZYX = loaded buffer shape (used for aspect).
 */
export function createImageDataWorld(values, dimsXYZ, shapeZYX) {
  const [zSize, ySize, xSize] = shapeZYX.map(Number);
  const [dx, dy, dz] = dimsXYZ;
  const maxDim = Math.max(zSize, ySize, xSize);
  const scaleX = xSize / maxDim;
  const scaleY = ySize / maxDim;
  const scaleZ = (zSize / maxDim) / 4;

  const spacing = [(2 * scaleX) / dx, (2 * scaleY) / dy, (2 * scaleZ) / dz];
  const origin = [-scaleX, -scaleY, -scaleZ];

  const imageData = vtkImageData.newInstance();
  imageData.setExtent(0, dx - 1, 0, dy - 1, 0, dz - 1);
  imageData.setSpacing(spacing[0], spacing[1], spacing[2]);
  imageData.setOrigin(origin[0], origin[1], origin[2]);
  imageData.getPointData().setScalars(
    vtkDataArray.newInstance({
      name: 'scalars',
      numberOfComponents: 1,
      values,
      dataType: 'Uint8Array'
    })
  );
  imageData.modified();
  return imageData;
}

export function buildVolumeProperty(channelConfig, metadata, lightMode = false, opacityUnitDistance = 1) {
  const dataRange = metadata?.dataRange || [0, 65535];
  const dataMin = dataRange[0];
  const dataMax = dataRange[1];
  const rangeSpan = Math.max(1, dataMax - dataMin);
  const autoMin = dataMin + rangeSpan * 0.03;
  const autoMax = dataMin + rangeSpan * 0.9;

  let tMin = channelConfig.thresholdMin !== undefined ? channelConfig.thresholdMin : autoMin;
  let tMax = channelConfig.thresholdMax !== undefined ? channelConfig.thresholdMax : autoMax;
  if (tMin > tMax) [tMin, tMax] = [tMax, tMin];
  tMin = Math.max(dataMin, Math.min(dataMax, tMin));
  tMax = Math.max(dataMin, Math.min(dataMax, tMax));

  const uMin = thresholdToUint8(tMin, dataMin, dataMax);
  const uMax = Math.max(uMin + 1, thresholdToUint8(tMax, dataMin, dataMax));
  const span = Math.max(1, uMax - uMin);
  const { r, g, b } = hexToRgb(channelConfig.color);
  // Channel opacity (0–1) scales the whole opacity TF → glassy / see-through control
  const opacityScale = Math.max(0, Math.min(1, Number(channelConfig.opacity ?? 1)));

  const ctf = vtkColorTransferFunction.newInstance();
  // Bright channel color with a soft highlight (avoid dark midtones)
  const lift = (c, m, add = 0) => Math.min(1, c * m + add);
  ctf.addRGBPoint(0, 0, 0, 0);
  ctf.addRGBPoint(Math.max(0, uMin - 0.5), 0, 0, 0);
  ctf.addRGBPoint(uMin, lift(r, 0.85), lift(g, 0.85), lift(b, 0.85));
  ctf.addRGBPoint(uMin + span * 0.25, lift(r, 1.05), lift(g, 1.05), lift(b, 1.05));
  ctf.addRGBPoint(uMax, lift(r, 1.15, 0.1), lift(g, 1.15, 0.1), lift(b, 1.15, 0.1));
  ctf.addRGBPoint(255, lift(r, 1.2, 0.15), lift(g, 1.2, 0.15), lift(b, 1.2, 0.15));

  const otf = vtkPiecewiseFunction.newInstance();
  // Faster opacity ramp so volumes read brighter while staying glassy
  const peak = lightMode ? 0.88 : 0.95;
  otf.addPoint(0, 0);
  otf.addPoint(Math.max(0, uMin - 0.5), 0);
  otf.addPoint(uMin, 0);
  otf.addPoint(uMin + span * 0.04, 0.12 * opacityScale);
  otf.addPoint(uMin + span * 0.15, 0.4 * opacityScale);
  otf.addPoint(uMin + span * 0.4, 0.72 * opacityScale);
  otf.addPoint(uMax, peak * opacityScale);
  otf.addPoint(255, Math.min(1, peak * 1.05) * opacityScale);

  const prop = vtkVolumeProperty.newInstance();
  prop.setIndependentComponents(false);
  prop.setRGBTransferFunction(0, ctf);
  prop.setScalarOpacity(0, otf);
  // Slightly tighter unit distance → more visible accumulation (brighter)
  const unit = Math.max(opacityUnitDistance * (0.65 + (1 - opacityScale) * 0.45), 1e-4);
  prop.setScalarOpacityUnitDistance(0, unit);
  prop.setInterpolationTypeToLinear();
  if (typeof prop.setPreferSizeOverAccuracy === 'function') {
    prop.setPreferSizeOverAccuracy(false);
  }

  // High ambient keeps shaded volumes bright; soft specular for shine
  prop.setShade(true);
  prop.setAmbient(lightMode ? 0.62 : 0.55);
  prop.setDiffuse(lightMode ? 0.55 : 0.6);
  prop.setSpecular(0.45);
  if (typeof prop.setSpecularPower === 'function') {
    prop.setSpecularPower(22);
  }
  return prop;
}

export function estimateActiveVoxels(data, shapeZYX, channelConfig, metadata) {
  const [zSize, ySize, xSize] = shapeZYX.map(Number);
  const dataRange = metadata?.dataRange || [0, 65535];
  const dataMin = dataRange[0];
  const dataMax = dataRange[1];
  let tMin = channelConfig.thresholdMin !== undefined ? channelConfig.thresholdMin : dataMin;
  let tMax = channelConfig.thresholdMax !== undefined ? channelConfig.thresholdMax : dataMax;
  if (tMin > tMax) [tMin, tMax] = [tMax, tMin];

  const step = Math.max(1, Math.floor(Math.cbrt((zSize * ySize * xSize) / 250000)));
  let hit = 0;
  for (let z = 0; z < zSize; z += step) {
    for (let y = 0; y < ySize; y += step) {
      for (let x = 0; x < xSize; x += step) {
        const v = data[z * ySize * xSize + y * xSize + x];
        const actual = (v / 255) * (dataMax - dataMin) + dataMin;
        if (actual >= tMin && actual <= tMax) hit++;
      }
    }
  }
  return Math.round(hit * step * step * step);
}

const disposeBundle = (bundle, renderer) => {
  if (!bundle) return;
  try {
    renderer.removeVolume(bundle.volume);
  } catch (_) { /* */ }
  try {
    bundle.volume?.delete?.();
  } catch (_) { /* */ }
  try {
    bundle.mapper?.delete?.();
  } catch (_) { /* */ }
  try {
    bundle.prop?.getRGBTransferFunction(0)?.delete?.();
    bundle.prop?.getScalarOpacity(0)?.delete?.();
    bundle.prop?.delete?.();
  } catch (_) { /* */ }
  try {
    bundle.imageData?.delete?.();
  } catch (_) { /* */ }
};

/**
 * @param {HTMLElement} container
 * @param {{
 *   interactive?: boolean,
 *   maxVoxels?: number,
 *   sampleDistance?: number,
 *   worldSpace?: boolean
 * }} options
 */
export function createVtkVolumeView(container, options = {}) {
  const {
    interactive = true,
    maxVoxels = DEFAULT_MAX_VOXELS,
    sampleDistance = 0.7,
    worldSpace = false
  } = options;

  const grw = vtkGenericRenderWindow.newInstance({ background: [0, 0, 0] });
  // Ensure the host fills the panel — zero-size canvas renders nothing.
  if (container && container.style) {
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.position = container.style.position || 'absolute';
  }
  grw.setContainer(container);
  grw.resize();

  const renderer = grw.getRenderer();
  const renderWindow = grw.getRenderWindow();
  const interactor = grw.getInteractor();

  if (interactive) {
    interactor.setInteractorStyle(createTrackballStyle());
    // Target ~20 FPS while dragging; full quality when still.
    if (typeof interactor.setDesiredUpdateRate === 'function') {
      interactor.setDesiredUpdateRate(22);
    }
    if (typeof interactor.setStillUpdateRate === 'function') {
      interactor.setStillUpdateRate(0.0001);
    }
  } else {
    // Main View drives camera from Three.js mouse handlers.
    try {
      interactor.unbindEvents();
    } catch (_) { /* */ }
  }

  /** Coarser rays while orbiting; restore on mouse-up. Agility > still quality during drag. */
  const setInteractionLod = (active) => {
    volumesByKey.forEach((bundle) => {
      const mapper = bundle?.mapper;
      const prop = bundle?.prop || bundle?.volume?.getProperty?.();
      if (!mapper) return;
      if (active) {
        if (bundle._stillSampleDistance == null) {
          bundle._stillSampleDistance = mapper.getSampleDistance?.() ?? 0.5;
        }
        if (bundle._stillImageSampleDistance == null && typeof mapper.getImageSampleDistance === 'function') {
          bundle._stillImageSampleDistance = mapper.getImageSampleDistance();
        }
        if (bundle._stillShade == null && prop?.getShade) {
          bundle._stillShade = prop.getShade();
        }
        const still = bundle._stillSampleDistance || 0.5;
        mapper.setSampleDistance(still * 3.5);
        if (typeof mapper.setImageSampleDistance === 'function') {
          mapper.setImageSampleDistance(Math.max(3, (bundle._stillImageSampleDistance || 1) * 3));
        }
        // Shading is expensive per ray sample — disable only while dragging
        if (prop?.setShade) prop.setShade(false);
      } else {
        if (bundle._stillSampleDistance != null) {
          mapper.setSampleDistance(bundle._stillSampleDistance);
          bundle._stillSampleDistance = null;
        }
        if (typeof mapper.setImageSampleDistance === 'function' && bundle._stillImageSampleDistance != null) {
          mapper.setImageSampleDistance(bundle._stillImageSampleDistance);
          bundle._stillImageSampleDistance = null;
        }
        if (prop?.setShade && bundle._stillShade != null) {
          prop.setShade(bundle._stillShade);
          bundle._stillShade = null;
        }
      }
    });
  };

  try {
    interactor.onStartInteractionEvent?.(() => {
      setInteractionLod(true);
    });
    interactor.onEndInteractionEvent?.(() => {
      setInteractionLod(false);
      renderWindow.render();
    });
  } catch (_) { /* */ }

  // Style VTK canvas under the Three overlay
  try {
    const canvas = container.querySelector('canvas');
    if (canvas) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.display = 'block';
      canvas.style.touchAction = 'none';
      canvas.style.cursor = 'grab';
    }
  } catch (_) { /* */ }

  /** @type {Map<string, any>} */
  const volumesByKey = new Map();
  /** @type {Map<string, any>} */
  const boxesByKey = new Map();

  const getCanvas = () => container?.querySelector?.('canvas') || null;

  // Re-bind pointer events on the canvas so left-drag pan works reliably.
  if (interactive) {
    try {
      const target = getCanvas() || container;
      interactor.unbindEvents?.();
      interactor.bindEvents?.(target);
    } catch (_) { /* */ }
  }

  const setInteractive = (enabled) => {
    try {
      if (enabled) {
        if (typeof interactor.enable === 'function') interactor.enable();
        interactor.setInteractorStyle(createTrackballStyle());
        const target = getCanvas() || container;
        if (typeof interactor.bindEvents === 'function' && target) {
          try {
            interactor.unbindEvents?.();
          } catch (_) { /* */ }
          interactor.bindEvents(target);
        }
        const canvas = getCanvas();
        if (canvas?.style) canvas.style.cursor = 'grab';
      } else {
        // Freeze camera while user draws a 3D selection box.
        if (typeof interactor.disable === 'function') interactor.disable();
        else if (typeof interactor.unbindEvents === 'function') interactor.unbindEvents();
        const canvas = getCanvas();
        if (canvas?.style) canvas.style.cursor = 'crosshair';
      }
    } catch (err) {
      console.warn('VTK setInteractive failed:', err);
    }
  };

  const removeWireframeBox = (id) => {
    const box = boxesByKey.get(id);
    if (!box) return;
    try {
      renderer.removeActor(box.actor);
    } catch (_) { /* */ }
    try {
      box.actor?.delete?.();
      box.mapper?.delete?.();
      box.source?.delete?.();
    } catch (_) { /* */ }
    boxesByKey.delete(id);
  };

  const clearWireframeBoxes = () => {
    Array.from(boxesByKey.keys()).forEach(removeWireframeBox);
  };

  /**
   * World-space wireframe box (selection / ROI) in the same VTK scene as volumes.
   * @param {string} id
   * @param {{ x:number, y:number, z:number }} center
   * @param {{ x:number, y:number, z:number }} size
   * @param {string} colorHex
   */
  const setWireframeBox = (id, center, size, colorHex = '#ffffff') => {
    if (!center || !size) return;
    removeWireframeBox(id);
    const { r, g, b } = hexToRgb(colorHex);
    const source = vtkCubeSource.newInstance({
      xLength: Math.max(1e-4, Math.abs(size.x)),
      yLength: Math.max(1e-4, Math.abs(size.y)),
      zLength: Math.max(1e-4, Math.abs(size.z)),
      center: [center.x, center.y, center.z]
    });
    const mapper = vtkMapper.newInstance();
    mapper.setInputConnection(source.getOutputPort());
    const actor = vtkActor.newInstance();
    actor.setMapper(mapper);
    const prop = actor.getProperty();
    prop.setRepresentationToWireframe();
    prop.setColor(r, g, b);
    prop.setOpacity(1);
    prop.setLineWidth(3);
    prop.setLighting(false);
    if (typeof actor.setVisibility === 'function') actor.setVisibility(true);
    renderer.addActor(actor);
    boxesByKey.set(id, { actor, mapper, source });
  };

  const render = () => {
    try {
      const canvas = getCanvas();
      if (canvas?.isContextLost?.()) return;
      renderWindow.render();
    } catch (_) { /* ignore lost-context renders */ }
  };

  const removeChannel = (key) => {
    const bundle = volumesByKey.get(key);
    if (!bundle) return;
    disposeBundle(bundle, renderer);
    volumesByKey.delete(key);
  };

  const clearVolumes = () => {
    Array.from(volumesByKey.keys()).forEach(removeChannel);
  };

  /**
   * Add or replace a channel volume.
   * @param {string} key
   * @param {{ data: Uint8Array, metadata: object }} channelData
   * @param {object} channelConfig
   * @param {{ lightMode?: boolean }} opts
   */
  const upsertChannel = (key, channelData, channelConfig, opts = {}) => {
    if (!channelData?.data || !channelData?.metadata?.shape) return false;
    const shape = channelData.metadata.shape.map(Number);
    const { values, dims, stride } = prepareVolumeScalars(
      channelData.data,
      shape,
      opts.maxVoxels != null ? opts.maxVoxels : maxVoxels
    );

    const imageData = worldSpace
      ? createImageDataWorld(values, dims, shape)
      : createImageDataLocal(values, dims);

    removeChannel(key);

    const mapper = vtkVolumeMapper.newInstance();
    mapper.setInputData(imageData);
    // sampleDistance is in WORLD units. Keep steps within maxSamplesPerRay
    // so VTK does not clip rays (and spam console warnings).
    const sp = imageData.getSpacing();
    const voxelStep = Math.min(sp[0], sp[1], sp[2]) || 0.01;
    // Slightly coarser still-quality → snappier orbit; LOD coarsens further while dragging.
    // quality: high | medium | fast (Local View uses fast)
    const qualityScale =
      opts.quality === 'high' ? 0.45 :
      opts.quality === 'medium' ? 0.65 :
      opts.quality === 'fast' ? 1.15 :
      0.85;
    let sd = worldSpace
      ? Math.max(voxelStep * qualityScale, 0.0002)
      : Math.min(sampleDistance, Math.max(voxelStep * qualityScale, 0.05));
    const extentDiag = Math.hypot(sp[0] * dims[0], sp[1] * dims[1], sp[2] * dims[2]);
    // Ray-sample cap: agility first (VRAM is rarely the browser bottleneck).
    const maxSamples =
      opts.quality === 'high' ? 6000 :
      opts.quality === 'fast' ? 2200 :
      4000;
    const minSdForBudget = extentDiag / Math.max(1, maxSamples - 64);
    if (sd < minSdForBudget) sd = minSdForBudget;
    mapper.setSampleDistance(sd);
    if (typeof mapper.setMaximumSamplesPerRay === 'function') {
      mapper.setMaximumSamplesPerRay(maxSamples);
    }
    if (typeof mapper.setAutoAdjustSampleDistances === 'function') {
      mapper.setAutoAdjustSampleDistances(true);
    }
    if (typeof mapper.setImageSampleDistance === 'function') {
      mapper.setImageSampleDistance(
        opts.quality === 'high' ? 1.5 :
        opts.quality === 'fast' ? 2.75 :
        2.25
      );
    }
    if (typeof mapper.setMinimumImageSampleDistance === 'function') {
      mapper.setMinimumImageSampleDistance(1);
    }
    if (typeof mapper.setMaximumImageSampleDistance === 'function') {
      mapper.setMaximumImageSampleDistance(opts.quality === 'fast' ? 12 : 10);
    }
    mapper.setBlendModeToComposite();

    const volume = vtkVolume.newInstance();
    volume.setMapper(mapper);

    // Tighter opacity unit distance keeps thin structures from washing out.
    const prop = buildVolumeProperty(
      channelConfig,
      channelData.metadata,
      Boolean(opts.lightMode),
      voxelStep * (opts.quality === 'high' ? 0.75 : 1.0)
    );
    // Local "fast" path skips per-sample shading for much snappier orbit
    if (opts.quality === 'fast' && typeof prop.setShade === 'function') {
      prop.setShade(false);
    }
    volume.setProperty(prop);

    const visible = channelConfig.visible !== false;
    volume.setVisibility(visible);
    renderer.addVolume(volume);
    renderer.resetCameraClippingRange();

    volumesByKey.set(key, {
      volume,
      mapper,
      prop,
      imageData,
      stride,
      channelConfig: { ...channelConfig },
      metadata: channelData.metadata,
      opacityUnitDistance: voxelStep * (opts.quality === 'high' ? 0.75 : 1.0),
      quality: opts.quality || null,
      configSignature: null
    });

    console.log(
      `VTK: upsert channel key=${key} shape=${shape.join('×')} → dims=${dims.join('×')} ` +
      `stride=${stride} sampleDist=${sd.toFixed(5)} world=${worldSpace}`
    );
    return true;
  };

  /** Update TF / colors without rebuilding GPU volume textures (safe for Day/Night). */
  const updateChannelAppearance = (key, channelConfig, opts = {}) => {
    const bundle = volumesByKey.get(key);
    if (!bundle?.volume) return false;
    const cfg = channelConfig || bundle.channelConfig;
    const meta = bundle.metadata;
    if (!cfg || !meta) return false;
    const nextProp = buildVolumeProperty(
      cfg,
      meta,
      Boolean(opts.lightMode),
      opts.opacityUnitDistance != null ? opts.opacityUnitDistance : (bundle.opacityUnitDistance || 1)
    );
    if ((opts.quality || bundle.quality) === 'fast' && typeof nextProp.setShade === 'function') {
      nextProp.setShade(false);
    }
    try {
      bundle.prop?.delete?.();
    } catch (_) { /* */ }
    bundle.volume.setProperty(nextProp);
    bundle.prop = nextProp;
    bundle.channelConfig = { ...cfg };
    return true;
  };

  const updateAllAppearances = (opts = {}) => {
    volumesByKey.forEach((_bundle, key) => {
      updateChannelAppearance(key, null, opts);
    });
    render();
  };

  const setChannelVisible = (key, visible) => {
    const bundle = volumesByKey.get(key);
    if (!bundle) return;
    bundle.volume.setVisibility(Boolean(visible));
  };

  const hasChannel = (key) => volumesByKey.has(key);

  const setBackground = (hex) => {
    renderer.setBackground(...parseBgColor(hex));
  };

  const resize = () => {
    grw.resize();
  };

  /**
   * Pan camera in the view plane (screen axes).
   * dx > 0 moves scene right; dy > 0 moves scene up.
   */
  const panCameraScreen = (dx, dy) => {
    if (!dx && !dy) return false;
    const cam = renderer.getActiveCamera();
    if (!cam) return false;
    const pos = cam.getPosition();
    const fp = cam.getFocalPoint();
    const up = cam.getViewUp();
    const fx = fp[0] - pos[0];
    const fy = fp[1] - pos[1];
    const fz = fp[2] - pos[2];
    const flen = Math.hypot(fx, fy, fz) || 1;
    const fNx = fx / flen;
    const fNy = fy / flen;
    const fNz = fz / flen;
    // right = forward × up
    let rx = fNy * up[2] - fNz * up[1];
    let ry = fNz * up[0] - fNx * up[2];
    let rz = fNx * up[1] - fNy * up[0];
    const rlen = Math.hypot(rx, ry, rz) || 1;
    rx /= rlen;
    ry /= rlen;
    rz /= rlen;
    // re-orthogonalize up = right × forward
    let ux = ry * fNz - rz * fNy;
    let uy = rz * fNx - rx * fNz;
    let uz = rx * fNy - ry * fNx;
    const ulen = Math.hypot(ux, uy, uz) || 1;
    ux /= ulen;
    uy /= ulen;
    uz /= ulen;

    const dist = flen;
    // Small step so single arrow taps feel smooth (not jumpy)
    const step = Math.max(dist * 0.0045, 0.0004);
    const mx = (rx * dx + ux * dy) * step;
    const my = (ry * dx + uy * dy) * step;
    const mz = (rz * dx + uz * dy) * step;

    cam.setPosition(pos[0] + mx, pos[1] + my, pos[2] + mz);
    cam.setFocalPoint(fp[0] + mx, fp[1] + my, fp[2] + mz);
    cam.setViewUp(ux, uy, uz);
    if (typeof cam.modified === 'function') cam.modified();
    renderer.resetCameraClippingRange();
    return true;
  };

  const syncOrbitCamera = (state, { fov = 75, aspect = 1, near = 0.1, far = 1000 } = {}) => {
    const cam = renderer.getActiveCamera();
    if (!cam || !state) return;

    const lookX = state.panOffset?.x || 0;
    const lookY = state.panOffset?.y || 0;
    const lookZ = state.panOffset?.z || 0;
    const radius = state.distance || 1;
    const theta = state.rotation?.y || 0;
    const phi = state.rotation?.x || 0;

    const px = lookX + radius * Math.sin(theta) * Math.cos(phi);
    const py = lookY + radius * Math.sin(phi);
    const pz = lookZ + radius * Math.cos(theta) * Math.cos(phi);

    cam.setParallelProjection(false);
    cam.setViewAngle(fov);
    // Keep near plane small so close zooms don't clip the volume slab.
    const nearPlane = Math.max(0.001, Math.min(near, radius * 0.01));
    const farPlane = Math.max(far, radius * 20, 10);
    cam.setClippingRange(nearPlane, farPlane);
    cam.setPosition(px, py, pz);
    cam.setFocalPoint(lookX, lookY, lookZ);
    cam.setViewUp(0, 1, 0);
    if (typeof cam.modified === 'function') cam.modified();
    renderer.resetCameraClippingRange();
  };

  const resetCamera = () => {
    renderer.resetCamera();
    renderer.resetCameraClippingRange();
    render();
  };

  /**
   * Local View convenience: replace all volumes at once.
   */
  const setChannelVolumes = (channelVolumes, opts = {}) => {
    clearVolumes();
    (channelVolumes || []).forEach((cv, i) => {
      const key = String(cv.channelConfig?.channelIndex ?? i);
      upsertChannel(
        key,
        { data: cv.data, metadata: cv.metadata },
        cv.channelConfig,
        opts
      );
    });
    if (!worldSpace) {
      renderer.resetCamera();
      const cam = renderer.getActiveCamera();
      cam.elevation(20);
      cam.azimuth(30);
      cam.orthogonalizeViewUp();
      renderer.resetCameraClippingRange();
    }
    render();
  };

  const deleteView = () => {
    clearWireframeBoxes();
    clearVolumes();
    try {
      grw.delete();
    } catch (_) { /* */ }
  };

  return {
    upsertChannel,
    updateChannelAppearance,
    updateAllAppearances,
    removeChannel,
    setChannelVisible,
    hasChannel,
    clearVolumes,
    setChannelVolumes,
    setWireframeBox,
    removeWireframeBox,
    clearWireframeBoxes,
    setBackground,
    resize,
    render,
    syncOrbitCamera,
    panCameraScreen,
    resetCamera,
    getCanvas,
    setInteractive,
    delete: deleteView,
    getRenderWindow: () => renderWindow,
    getRenderer: () => renderer
  };
}

/** Soft GPU budget for Local crops (snappy orbit; still looks detailed in a ROI). */
const LOCAL_MAX_VOXELS = 10_000_000;

/** Back-compat alias used by Local_View. */
export function createLocalVtkView(container) {
  return createVtkVolumeView(container, {
    interactive: true,
    maxVoxels: LOCAL_MAX_VOXELS,
    sampleDistance: 0.9,
    worldSpace: false
  });
}
