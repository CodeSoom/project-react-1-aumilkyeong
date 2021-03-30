import pullupProgression from './pullup-progression';
import squatProgression from './squat-progression';
import dipProgression from './dip-progression';
import hingeProgression from './hinge-progression';
import rowProgression from './row-progression';
import pushupProgression from './pushup-progression';
import antiExtensionProgression from './anti-extension-progression';
import antiRotationProgression from './anti-rotation-progression';
import extensionProgression from './extension-progression';

const progressions = {
  pullup: pullupProgression,
  squat: squatProgression,
  dip: dipProgression,
  hinge: hingeProgression,
  row: rowProgression,
  pushup: pushupProgression,
  antiExtension: antiExtensionProgression,
  antiRotation: antiRotationProgression,
  extension: extensionProgression,
};

export default progressions;
