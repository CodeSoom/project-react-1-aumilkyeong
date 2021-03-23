const romanianDeadlift = {
  name: 'Romanian Deadlift',
  reps: '5-8',
  demos: ['https://thumbs.gfycat.com/BlueUltimateBaiji-mobile.mp4'],
  tips: [
    'Stand up straight. Brace and squeeze your butt to flatten your low back (neutral spine to maybe slightly arched).',
    'Send your butt back and lean your torso forward to avoid falling over',
    'You can place the hands on your chest and abdomen for feedback or let them hang by your sides.',
  ],
};

const singleLeggedDeadlift = {
  name: 'Single Legged Deadlift',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=iDV8r5u6En0&t=6s'],
  tips: [
    'Please ignore the barbell.',
    'If you lack the balance to perform these with a leg in the air, you can use an arm to brace yourself against a surface or you can straddle your legs to help with balance.',
  ],
};

const bandedNordicCurl = {
  name: 'Banded Nordic Curl',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=HUXS3S2xSX4'],
  tips: [
    'Anchor your feet under something sturdy. You want to be anchored about a fist\'s distance away from your ankle.',
    'Squeeze your butt to keep your hips extended.',
    'Slowly lower your torso, avoiding piking at the hips.',
    'Repeat with weaker bands until you can move on.',
  ],
};

const nordicCurl = {
  name: 'Nordic Curl',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=d8AAPcYxPo8'],
  tips: [
    'Anchor your feet under something sturdy. You want to be anchored about a fist\'s distance away from your ankle.',
    'Squeeze your butt to keep your hips extended.',
    'Slowly lower your torso, avoiding piking at the hips.',
  ],
};

export {
  romanianDeadlift,
  singleLeggedDeadlift,
  bandedNordicCurl,
  nordicCurl,
};

const hingeProgression = {
  level1: romanianDeadlift,
  level2: singleLeggedDeadlift,
  level3: bandedNordicCurl,
  levelMax: nordicCurl,
};

export default hingeProgression;
