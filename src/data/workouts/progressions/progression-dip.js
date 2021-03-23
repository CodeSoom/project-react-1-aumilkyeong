const parallelBarSupportHold = {
  name: 'Parallel Bar Support Hold',
  reps: '5-8',
  demos: ['https://antranik.org/wp-content/uploads/2014/01/antranik-holding-support-hold-on-parallel-bars.jpg'],
  tips: [
    'Work up to 3 sets of 1 minute holds for this progression.',
    'If you can\'t hold yourself up at all, consider using bands or your feet to assist you until you gain the necessary strength.',
  ],
};

const negativeDips = {
  name: 'Negative Dips',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=T3Scqw1BbCc'],
  tips: [
    'This exercise is only the descent. To get to the starting position you can jump or use a box or anything.',
    'Lower yourself with control. Work up to 10s descents.',
  ],
};

const parallelBarDips = {
  name: 'Parallel Bar Dips',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=2z8JmcrW-As'],
  tips: [
    'Straight or slightly hollow body. No bending at the hips!',
    'Lock out the arms and depress the shoulderblades at the top.',
    'Go as far down as you can.',
    'Elbows in.',
  ],
};

const weightedDips = {
  name: 'Weighted Dips',
  reps: '5-8',
  demos: [],
  tips: [
    'You can do this progression in place of ring dips.',
    'We recommend to add weight to parallel bar dips first instead of ring dips.',
  ],
};

export {
  parallelBarSupportHold,
  negativeDips,
  parallelBarDips,
  weightedDips,
};

const dipProgression = {
  level1: parallelBarSupportHold,
  level2: negativeDips,
  level3: parallelBarDips,
  levelMax: weightedDips,
};

export default dipProgression;
