const verticalRow = {
  name: 'Vertical Row',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=rloXYB8M3vU'],
  tips: [
    'Perform a row, but with the body position vertical.',
  ],
};

const inclineRow = {
  name: 'Incline Row',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=LR2EnFWpVao&t=3'],
  tips: [
    'Perform a row, but with the body position somewhere between vertical and horizontal. Go closer to horizontal to make it harder.',
  ],
};

const horizontalRow = {
  name: 'Horizontal Row',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=dvkIaarnf0g'],
  tips: [
    'Straight body',
    'Elbows in',
    'Arms straight at the bottom',
    'Rings/bar to chest and shoulder blades fully retracted (pinched together) at the top',
    'Don\'t let your shoulders shrug up',
  ],
};

const wideRow = {
  name: 'Wide Row',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=1yMRvsuk9Xg'],
  tips: [
    'It\'s okay to flare your elbows on this one.',
    'On a bar: take a wide grip (1.5 times shoulder width) and perform rows like this.',
    'On rings: while performing a row, bring out the elbows to the side up to a 90 degree angle.',
  ],
};

const weightedInvertedRow = {
  name: 'Weighted Inverted Row',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=3cYR6pis5zc'],
  tips: [
    'These can be done with a weight plate on your chest/belly (uncomfortable and unreliable), or with a weight vest (minimal setup, but limited weight), or with a dip belt hanging from your waist or chest (This method can be loaded the most, however you need to elevate your entire body so that the plates don\'t touch the floor at the bottom).',
    'Alternatively, you can do Barbell or Dumbbell rows.',
  ],
};

export {
  verticalRow,
  inclineRow,
  horizontalRow,
  wideRow,
  weightedInvertedRow,
};

const rowProgression = {
  level1: verticalRow,
  level2: inclineRow,
  level3: horizontalRow,
  level4: wideRow,
  levelMax: weightedInvertedRow,
};

export default rowProgression;
