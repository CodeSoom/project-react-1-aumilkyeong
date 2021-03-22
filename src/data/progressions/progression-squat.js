const assistedSquat = {
  name: 'Assisted Squat',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=OuR_Fp7AB0c'],
  tips: [
    'Grab something in front of you and use your hands to assist in the squat. Reduce assistance over time.',
  ],
};

const squat = {
  name: 'Squat',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=zJBLDJMJiDE'],
  tips: [
    'Stand up straight at the top.',
    'Go as low as you can, preferably until the hips are below the knees.',
    'Dig your big toe and heel into the ground.',
    'Keep your knee in-line with your toes.',
    'Don\'t let the knees come inward on either the descend or the ascend; think about pushing the knees out.',
  ],
};

const splitSquat = {
  name: 'Split Squat',
  reps: '5-8',
  demos: ['https://www.getstrong.fit/images/GobletSplitSquat.jpg'],
  tips: [
    'Pretend the dumbbell doesn\'t exist.',
    'Remain in the split stance throughout the set. Unlike a lunge, you don\'t return to a "feet together" stance.',
  ],
};

const bulgarianSplitSquat = {
  name: 'Bulgarian Split Squat',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=kkdmHTASZg8&t=82s'],
  tips: [
    'Pretend the barbell doesn\'t exist.',
    'You can progress this further by elevating both your legs.',
  ],
};

const shrimpSquat = {
  name: 'shrimp Squat',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=TKt0-c83GSc&t=189s'],
  tips: [
    'Beginner: make sure your knee and toes leave the floor at the same time.',
    'Intermediate: the knee touches the ground but the toes do not.',
    'Advanced: you hold your heel as you descend. only the knee touches the floor.',
  ],
};

export {
  assistedSquat,
  squat,
  splitSquat,
  bulgarianSplitSquat,
  shrimpSquat,
};

const squatProgression = {
  level1: assistedSquat,
  level2: squat,
  level3: splitSquat,
  level4: bulgarianSplitSquat,
  levelMax: shrimpSquat,
};

export default squatProgression;
