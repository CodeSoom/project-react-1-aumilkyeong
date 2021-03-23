const verticalPushup = {
  name: 'Vertical Pushup',
  reps: '5-8',
  demos: ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/23/2010/04/06/wall-push-up_300.jpg'],
  tips: [
    'Standing next to a wall, put your hands on the wall and perform a pushup.',
  ],
};

const inclinePushup = {
  name: 'Vertical Pushup',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=4dF1DOWzf20&t=236s'],
  tips: [
    'Finding some raised object, put your hands on said object and perform a pushup. Lower the height to increase the difficulty.',
  ],
};

const pushup = {
  name: 'Pushup',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=IODxDxX7oi4'],
  tips: [
    'Body in a straight line from head to toe: don\'t let the hips sag!',
    'Lock out arms and protract the shoulderblades at the top',
    'Go down until chest nearly touches the ground',
    'Keep the elbows in, don\'t let them flare out',
    'Don\'t shrug up your shoulders to your ears, focus on depressing the shoulderblades.',
  ],
};

const diamondPushup = {
  name: 'Diamond Pushup',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=_4EGPVJuqfA'],
  tips: [
    'Put your hands close together so the thumbs and index fingers touch, then perform a pushup.',
    'If this is too difficult or feels uncomfortable, put your hands just a bit closer than in a normal pushup. Work on moving the hands closer together over time until you reach diamond pushups.',
  ],
};

const pseudoPlachePushup = {
  name: 'Pseudo Planche Pushup',
  reps: '5-8',
  demos: ['https://www.youtube.com/watch?v=Cdmg0CfMZeo'],
  tips: [
    'Putting your hands sideways, lean forward with a straight body until your shoulders are in front of your hands. Perform a pushup while maintaining forward lean. Protract the shoulderblades at the top.',
    'Increase forward lean to make more difficult. Decrease forward lean to make easier. You won\'t run out of resistance anytime soon if you keep increasing your forward lean.',
  ],
};

export {
  verticalPushup,
  inclinePushup,
  pushup,
  diamondPushup,
  pseudoPlachePushup,
};

const pushupProgression = {
  level1: verticalPushup,
  level2: inclinePushup,
  level3: pushup,
  level4: diamondPushup,
  levelMax: pseudoPlachePushup,
};

export default pushupProgression;
