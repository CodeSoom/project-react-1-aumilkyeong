import pullupProgression from './pullup-progression';
import squatProgression from './squat-progression';
import dipProgression from './dip-progression';
import hingeProgression from './hinge-progression';
import rowProgression from './row-progression';
import pushupProgression from './pushup-progression';

const progressions = {
  pullup: pullupProgression,
  squat: squatProgression,
  dip: dipProgression,
  hinge: hingeProgression,
  row: rowProgression,
  pushup: pushupProgression,
};

export default progressions;
