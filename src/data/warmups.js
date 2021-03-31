import squatProgression from './squat-progression';
import hingeProgression from './hinge-progression';

const yuri = {
  name: 'yuri',
  label: 'Yuri\'s Shoulder Band Warmup',
};

const squatSkyReach = {
  name: 'squatSkyReach',
  label: 'Squat Sky Reach',
};

const gmbWristPrep = {
  name: 'gmbWristPrep',
  label: 'GMB Wrist Prep',
};

const deadbug = {
  name: 'deadbug',
  label: 'Deadbug',
};

const archHang = {
  name: 'archHang',
  label: 'Arch Hang',
};

const supportHold = {
  name: 'supportHold',
  label: 'Support Hold',
};

const easierSquat = (name) => {
  const current = squatProgression
    .find((exercise) => exercise.name === name);

  const easier = squatProgression
    .find((exercise) => exercise.level === current.level - 1 || exercise);

  return easier;
};

const easierHinge = (name) => {
  const current = hingeProgression
    .find((exercise) => exercise.name === name);

  const easier = hingeProgression
    .find((exercise) => exercise.level === current.level - 1 || exercise);

  return easier;
};

const warmups = [
  yuri,
  squatSkyReach,
  gmbWristPrep,
  deadbug,
  archHang,
  supportHold,
  easierSquat,
  easierHinge,
];

export {
  yuri,
  squatSkyReach,
  gmbWristPrep,
  deadbug,
  archHang,
  supportHold,
  easierSquat,
  easierHinge,
};

export default warmups;
