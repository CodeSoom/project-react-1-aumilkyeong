import squatProgression from './squat-progression';
import hingeProgression from './hinge-progression';

const yuri = {
  category: 'warmup',
  name: 'yuri',
  label: 'Yuri\'s Shoulder Band Warmup',
  range: '5-10',
  demos: ['https://www.youtube.com/embed/Vwn5hSf3WEg'],
  tips: ['T셔츠 이용 가능'],
};

const squatSkyReach = {
  category: 'warmup',
  name: 'squatSkyReach',
  label: 'Squat Sky Reach',
  range: '5-10',
  demos: ['https://www.youtube.com/embed/lbozu0DPcYI?start=42'],
  tips: [],
};

const gmbWristPrep = {
  category: 'warmup',
  name: 'gmbWristPrep',
  label: 'GMB Wrist Prep',
  range: '10+',
  demos: ['https://www.youtube.com/embed/mSZWSQSSEjE?start=48'],
  tips: ['충분히 풀릴때까지 반복'],
};

const deadbug = {
  category: 'warmup',
  name: 'deadbug',
  label: 'Deadbug',
  range: '30s',
  demos: [
    'https://www.nick-e.com/wp-content/uploads/2018/01/Diaphragm-Breathing_resized.mp4',
    'https://www.nick-e.com/wp-content/uploads/2021/01/BlandReliableElkhound-mobile.mp4',
    'https://www.nick-e.com/wp-content/uploads/2021/01/photo6033108082604749544.jpg',
    'https://www.nick-e.com/wp-content/uploads/2021/01/photo6033108082604749543-1200x1200.jpg',
  ],
  tips: [],
};

const archHang = {
  category: 'warmup',
  name: 'archHang',
  label: 'Arch Hang',
  range: '10',
  demos: ['https://www.youtube.com/embed/C995b3KLXS4?start=7'],
  tips: [],
};

const supportHold = {
  category: 'warmup',
  name: 'supportHold',
  label: 'Support Hold',
  range: '30s',
  demos: ['https://antranik.org/wp-content/uploads/2014/01/antranik-holding-support-hold-on-parallel-bars.jpg'],
  tips: [
    '팔 곧게 펴기',
    '몸 곧게 펴기 또는 얕은 할로우 자세',
    '견갑골 하강 상태 유지',
  ],
};

const easierSquat = {
  category: 'warmup',
  name: 'easierSquat',
  label: 'Easier Squat',
  range: '10',
  getEasierSquat: (name) => {
    const current = squatProgression
      .find((exercise) => exercise.name === name);

    const easier = squatProgression
      .find((exercise) => (exercise.level === current.level - 1)) || squatProgression[0];

    return easier;
  },
};

const easierHinge = {
  category: 'warmup',
  name: 'easierHinge',
  label: 'Easier Hinge',
  range: '10',
  getEasierHinge: (name) => {
    const current = hingeProgression
      .find((exercise) => exercise.name === name);

    const easier = hingeProgression
      .find((exercise) => exercise.level === current.level - 1) || hingeProgression[0];

    return easier;
  },
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
