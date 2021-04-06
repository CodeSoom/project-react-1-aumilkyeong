import squatProgression from './squat-progression';
import hingeProgression from './hinge-progression';

const yuri = {
  category: 'warmup',
  name: 'yuri',
  label: 'Yuri\'s Shoulder Band Warmup',
  range: '5-10',
  demos: ['https://www.youtube.com/watch?v=Vwn5hSf3WEg'],
  tips: ['T셔츠 이용 가능'],
};

const squatSkyReach = {
  category: 'warmup',
  name: 'squatSkyReach',
  label: 'Squat Sky Reach',
  range: '5-10',
  demos: ['https://www.youtube.com/watch?v=lbozu0DPcYI&t=42s'],
  tips: [],
};

const gmbWristPrep = {
  category: 'warmup',
  name: 'gmbWristPrep',
  label: 'GMB Wrist Prep',
  range: '10+',
  demos: ['https://www.youtube.com/watch?v=mSZWSQSSEjE&t=48s'],
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
  demos: ['https://www.youtube.com/watch?v=C995b3KLXS4&t=7s'],
  tips: [],
};

const supportHold = {
  category: 'warmup',
  name: 'supportHold',
  label: 'Support Hold',
  range: '30s',
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
