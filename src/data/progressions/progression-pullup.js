const scapularPulls = {
  name: 'Scapular Pulls',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=FgYoc4O-cio&t=81s'],
  tips: [
    'Elbows should stay straight',
    'Your back will arch more as you get stronger',
    'These should be performed with a pause at the "top". Squeeze your shoulders, hold it for 3-5s then release into a dead hang under control',
    'If you can\'t pull out of the dead hang at all, consider using bands or your feet to assist you until the gain the necessary strength.',
  ],
};

const archHangs = {
  name: 'Arch Hangs',
  reps: '5-8',
  demos: [
    'https://www.youtube.com/watch?v=HoE-C85ZlCE',
    'https://i.ytimg.com/vi/JusddCep6PA/hqdefault.jpg',
    'https://www.youtube.com/watch?v=C995b3KLXS4&t=7s',
  ],
  tips: [
    'Elbows should stay straight',
    'Hold it for time/reps',
  ],
};

const negativePullups = {
  name: 'Negative Pullups',
  reps: '5-8',
  demos: [
    'https://vimeo.com/76666801',
  ],
  tips: [
    'Jump to the top of the pull-up position, then slowly (as slowly as you can), lower yourself until your arms are straight. Build up to 10sec negatives!',
  ],
};

const pullups = {
  name: 'Pullups',
  reps: '5-8',
  demos: [
    'https://www.youtube.com/watch?v=eGo4IYlbE5g',
  ],
  tips: [
    'Body slightly hollow with straight legs throughout the whole exercise. Don\'t cross your legs.',
    'If you cannot get straight legs, it\'s preferable to keep the feet in front of the body rather than behind.',
    'Arms straight at the bottom. Don\'t think about anything else, just straight arms. The rest will happen automatically.',
    'Strive for chest to bar at the top. For this the forearms have to deviate from vertical, which may be a bit hard on the elbows, so build up to it slowly.',
    'Keep the neck in a neutral position: avoid craning it to get your chin over the bar',
    'It\'s natural for your legs to come forward: this keeps your centre of mass under the bar. Just make sure you\'re not violently swinging them upwards.',
  ],
};

const weightedPullups = {
  name: 'Weighted Pullups',
  reps: '5-8',
  demos: [
    'https://healthyforbetter.com/how-to-add-weight-to-pull-ups/',
  ],
  tips: [],
};

const pullupProgressions = {
  level1: scapularPulls,
  level2: archHangs,
  level3: negativePullups,
  level4: pullups,
  levelMax: weightedPullups,
};

export {
  scapularPulls,
  archHangs,
  negativePullups,
  pullups,
  weightedPullups,
};

export default pullupProgressions;
