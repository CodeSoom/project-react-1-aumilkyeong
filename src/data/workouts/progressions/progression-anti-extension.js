const plank = {
  name: 'Plank',
  reps: '30s',
  demos: ['https://www.youtube.com/watch?v=44ScXWFaVBs&t=10s'],
  tips: [
    'Work up to a 30s hold then move on to your ring rollouts.',
    'You\'re only doing the planks, don\'t do every drill in the video.',
  ],
};

const rollout = {
  name: 'Ring Ab Rollout',
  reps: '8-12',
  demos: ['https://www.youtube.com/watch?v=LBUfnmugKLw'],
  tips: [
    'Elbows should stay straight',
    'Remain in a hollow body position (ribs down, butt tucked)',
    'Keep your hands as close as your overhead mobility will allow.',
    'Higher ring position will make this easier. Elevating the feet will make it harder.',
  ],
};

export {
  plank,
  rollout,
};

const antiExtensionProgression = {
  level1: plank,
  levelMax: rollout,
};

export default antiExtensionProgression;
