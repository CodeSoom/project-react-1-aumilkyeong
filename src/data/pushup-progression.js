const verticalPushup = {
  level: 1,
  name: 'verticalPushup',
  label: 'Vertical Pushup',
  range: '5-8',
  demos: [
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/23/2010/04/06/wall-push-up_300.jpg',
  ],
  tips: [
    '벽을 마주보고 서서 벽을 향해 푸쉬업',
  ],
};

const inclinePushup = {
  level: 2,
  name: 'inclinePushup',
  label: 'Incline Pushup',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=4dF1DOWzf20&t=236s'],
  tips: [
    '암석, 벤치, 박스 등 땅에 고정된 물체를 찾아 손을 대고 푸쉬업',
    '물체의 높이가 낮을 수록 난이도 증가',
  ],
};

const pushup = {
  level: 3,
  name: 'pushup',
  label: 'Pushup',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=IODxDxX7oi4'],
  tips: [
    '몸을 머리부터 발끝까지 곧게 핀 자세 유지: 엉덩이 내밀지 않도록 주의',
    '최고점에서 팔 락아웃 및 날개뼈 전인',
    '가슴이 거의 땅에 닿을 정도로 내려가기',
    '팔꿈치를 몸 바깥 방향으로 펼치지 않게 주의',
    '어깨를 귀쪽으로 움츠리지 않게 주의: 견갑골 하강에 집중',
  ],
};

const diamondPushup = {
  level: 4,
  name: 'diamondPushup',
  label: 'Diamond Pushup',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=_4EGPVJuqfA'],
  tips: [
    '엄지와 검지끼리 맞닿도록 손을 가까이 대고 푸쉬업',
    '어렵거나 불편한 경우, 일반 푸쉬업에서 조금만 손 사이 간격 좁게 조정',
    '다이아몬드 푸쉬업 자세가 될 때까지 점차 손의 간격 좁게 조정',
  ],
};

const pseudoPlanchePushup = {
  level: 5,
  name: 'pseudoPlanchePushup',
  label: 'Pseudo Planche Pushup',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=Cdmg0CfMZeo'],
  tips: [
    '손가락이 몸 바깥 방향을 향하게 짚고, 어깨가 손 위치보다 앞으로 향하게 몸을 앞으로 기울인 뒤, 어깨뼈 전인 상태의 곧은 자세로 푸쉬업',
    '몸을 앞으로 기울일수록 난이도 증가',
  ],
};

const pushupProgression = [
  verticalPushup,
  inclinePushup,
  pushup,
  diamondPushup,
  pseudoPlanchePushup,
];

export {
  verticalPushup,
  inclinePushup,
  pushup,
  diamondPushup,
  pseudoPlanchePushup,
};

export default pushupProgression;
