const scapularPull = {
  level: 1,
  name: 'scapularPull',
  label: 'Scapular Pull',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=FgYoc4O-cio&t=81s'],
  tips: [
    '팔꿈치 곧게 뻗어 유지',
    '최대 수축 지점에서 3~5초 간 어깨를 수축시키고 자세를 제어하면서 데드행으로 돌아오기',
    '데드행에서 전혀 등을 당길 수 없다면, 근력이 생길 때까지 밴드를 이용해서 수행',
    '강해질수록 등의 아치 형태 선명',
  ],
};

const archHang = {
  level: 2,
  name: 'archHang',
  label: 'Arch Hang',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=C995b3KLXS4&t=7s'],
  tips: [
    '팔꿈치 곧게 뻗어 유지',
    '시간, 횟수로 난이도 조절',
    '숙련될수록 어깨와 몸통 각도가 수직에 근접',
  ],
};

const negativePullup = {
  level: 3,
  name: 'negativePullup',
  label: 'Negative Pullup',
  range: '5-8',
  demos: ['https://vimeo.com/76666801'],
  tips: [
    '점프해서 풀업 최고점으로 올라간 뒤, 최대한 천천히 팔을 곧게 핀 자세로 내려가기',
    '10초에 걸쳐 네거티브 풀업을 하는 것을 목표로 잡기',
  ],
};

const pullup = {
  level: 4,
  name: 'pullup',
  label: 'Pullup',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=eGo4IYlbE5g'],
  tips: [
    '운동하는 동안 몸은 얕은 할로우 자세, 다리는 곧게 편 상태 유지',
    '만약 다리를 펴기 어렵다면, 다리를 앞쪽으로 두기',
    '최저점에서는 팔을 곧게 펴는 것만 신경쓰기',
    '최고점에서 가슴을 봉으로 다가가기 위해 전완이 수직을 벗어나는데 팔꿈치에 부담이 갈 수 있으니 천천히 발달시키기',
    '목은 중립 자세를 유지: 턱을 봉으로 가져가기 위해 굽히지 않음',
    '다리가 앞쪽으로 오는 건 무게 중심을 위한 자연스러운 현상: 의도적으로 들어올리지만 않으면 됨',
  ],
};

const weightedPullup = {
  level: 5,
  name: 'weightedPullup',
  label: 'Weighted Pullup',
  range: '5-8',
  demos: [],
  tips: [],
};

const pullupProgression = [
  scapularPull,
  archHang,
  negativePullup,
  pullup,
  weightedPullup,
];

export {
  scapularPull,
  archHang,
  negativePullup,
  pullup,
  weightedPullup,
};

export default pullupProgression;
