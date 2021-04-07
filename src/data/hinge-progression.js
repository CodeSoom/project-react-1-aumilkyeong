const romanianDeadlift = {
  category: 'hinge',
  level: 1,
  name: 'romanianDeadlift',
  label: 'Romanian Deadlift',
  range: '5-8',
  demos: ['https://thumbs.gfycat.com/BlueUltimateBaiji-mobile.mp4'],
  tips: [
    '곧게 선 자세로 시작, 브레이싱한 상태에서 엉덩이를 수축하고 척추를 중립 상태로 만들기',
    '엉덩이를 뒤로 보내는 동시에 상체를 앞으로 기울이기',
    '자세 점검을 위해 가슴이나 복부에 손을 둬도 좋고, 그냥 늘어뜨려도 됨',
    '시범 자세는 보여주기 위해 로봇처럼 움직이지만, 운동할 때는 부드럽게 동작을 연결',
  ],
};

const singleLeggedDeadlift = {
  category: 'hinge',
  level: 2,
  name: 'singleLeggedDeadlift',
  label: 'Single Legged Deadlift',
  range: '5-8',
  demos: ['https://www.youtube.com/embed/iDV8r5u6En0'],
  tips: [
    '중량 도구 없이 맨몸으로 수행',
    '중심 잡기가 어렵다면 팔이나 다리를 늘어뜨려 조정',
  ],
};

const negativeBandedNordicCurl = {
  category: 'hinge',
  level: 3,
  name: 'negativeBandedNordicCurl',
  label: 'Negative Banded Nordic Curl',
  range: '5-8',
  demos: ['https://www.youtube.com/embed/HUXS3S2xSX4'],
  tips: [
    '무게를 충분히 지탱할 수 있는 곳에 발을 고정',
    '엉덩이가 길게 늘어난 상태를 유지하기 위해 근육 수축',
    '엉덩이를 굽히지 않고 상체를 천천히 내리기',
  ],
};

const bandedNordicCurl = {
  category: 'hinge',
  level: 4,
  name: 'bandedNordicCurl',
  label: 'Banded Nordic Curl',
  range: '5-8',
  demos: ['https://www.youtube.com/embed/HUXS3S2xSX4'],
  tips: [
    '무게를 충분히 지탱할 수 있는 곳에 발을 고정',
    '엉덩이가 길게 늘어난 상태를 유지하기 위해 근육 수축',
    '엉덩이를 굽히지 않고 상체를 천천히 내리기',
  ],
};

const nordicCurl = {
  category: 'hinge',
  level: 5,
  name: 'nordicCurl',
  label: 'Nordic Curl',
  range: '5-8',
  demos: ['https://www.youtube.com/embed/d8AAPcYxPo8'],
  tips: [
    '무게를 충분히 지탱할 수 있는 곳에 발을 고정',
    '엉덩이가 길게 늘어난 상태를 유지하기 위해 근육 수축',
    '엉덩이를 굽히지 않고 상체를 천천히 내리기',
  ],
};

const hingeProgression = [
  romanianDeadlift,
  singleLeggedDeadlift,
  negativeBandedNordicCurl,
  bandedNordicCurl,
  nordicCurl,
];

export {
  romanianDeadlift,
  singleLeggedDeadlift,
  negativeBandedNordicCurl,
  bandedNordicCurl,
  nordicCurl,
};

export default hingeProgression;
