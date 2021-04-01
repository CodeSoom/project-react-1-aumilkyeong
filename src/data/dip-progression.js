const supportHold = {
  level: 1,
  name: 'supportHold',
  label: 'Parallel Bar Support Hold',
  range: '60s',
  demos: [
    'https://antranik.org/wp-content/uploads/2014/01/antranik-holding-support-hold-on-parallel-bars.jpg',
  ],
  tips: [
    '3세트 모두 1분간 버틸 수 있으면 다음 단계로',
    '전혀 버틸수가 없다면, 밴드로 보조해서 필요한 근력 기르기',
  ],
};

const negativeDip = {
  level: 2,
  name: 'negativeDip',
  label: 'Negative Dip',
  range: '5-8',
  demos: [
    'https://www.youtube.com/watch?v=T3Scqw1BbCc',
  ],
  tips: [
    '점프, 박스 등 원하는 방식으로 시작 자세를 잡기',
    '자세를 제어하면서 최대한 천천히 내려가기',
    '1회 10초간 수행을 목표로 도전',
  ],
};

const dip = {
  level: 3,
  name: 'dip',
  label: 'Parallel Bar Dip',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=2z8JmcrW-As'],
  tips: [
    '곧은 자세 또는 얕은 할로우 바디 자세',
    '엉덩이 굽히지 않기',
    '최고점에서 팔꿈치 락아웃, 날개뼈 하강 상태 유지',
    '최대한 낮게 내려가기',
    '팔꿈치는 몸통쪽으로 붙이기',
  ],
};

const weightedDip = {
  level: 4,
  name: 'weightedDip',
  label: 'Weighted Dip',
  range: '5-8',
  demos: [],
  tips: [
    '또 다른 대안: ring dip',
    '그러나 ring dip을 시도하기 전에 weighted dip을 먼저 해보는 것을 권장',
  ],
};

const dipProgression = [
  supportHold,
  negativeDip,
  dip,
  weightedDip,
];

export {
  supportHold,
  negativeDip,
  dip,
  weightedDip,
};

export default dipProgression;
