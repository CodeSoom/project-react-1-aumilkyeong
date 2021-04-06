const assistedSquat = {
  category: 'squat',
  level: 1,
  name: 'assistedSquat',
  label: 'Assisted Squat',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=OuR_Fp7AB0c'],
  tips: [
    '손으로 뭔가 잡은 상태에서 스쿼트',
    '점차 손으로 지지하는 힘을 줄여나감',
  ],
};

const squat = {
  category: 'squat',
  level: 2,
  name: 'squat',
  label: 'Squat',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=zJBLDJMJiDE'],
  tips: [
    '최고점에서 곧게 서기',
    '가능한 낮게 내려갈 것, 엉덩이가 무릎보다 낮게 하는 것이 바람직',
    '엄지발가락과 뒤꿈치를 땅에 박는다는 생각으로 고정',
    '무릎은 발끝 방향으로 정렬된 상태를 유지',
    '오르내릴 때, 무릎이 안쪽으로 무너지지 않도록 주의: 바깥방향으로 무릎을 밀어낸다고 생각하기',
  ],
};

const splitSquat = {
  category: 'squat',
  level: 3,
  name: 'splitSquat',
  label: 'Split Squat',
  range: '5-8',
  demos: ['https://www.getstrong.fit/images/GobletSplitSquat.jpg'],
  tips: [
    '중량 도구 없이 맨몸으로 수행',
    '런지와는 다르게 발을 모은 자세 없이, 다리를 앞뒤로 나눈 자세를 유지',
  ],
};

const bulgarianSplitSquat = {
  category: 'squat',
  level: 4,
  name: 'bulgarianSplitSquat',
  label: 'Bulgarian Split Squat',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=kkdmHTASZg8&t=75s'],
  tips: [
    '중량 도구 없이 맨몸으로 수행',
    '다리 위치를 높일수록 난이도 어려워짐',
  ],
};

const shrimpSquat = {
  category: 'squat',
  level: 5,
  name: 'shrimpSquat',
  label: 'Shrimp Squat',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=TKt0-c83GSc&t=189s'],
  tips: [
    '초급: 무릎과 발가락을 바닥에서 동시에 떼기',
    '중급: 무릎만 바닥에 닫게 하기',
    '고급: 발꿈치 잡은채로 내려가고 무릎만 바닥에 닫게 하기',
  ],
};

const squatProgression = [
  assistedSquat,
  squat,
  splitSquat,
  bulgarianSplitSquat,
  shrimpSquat,
];

export {
  assistedSquat,
  squat,
  splitSquat,
  bulgarianSplitSquat,
  shrimpSquat,
};

export default squatProgression;
