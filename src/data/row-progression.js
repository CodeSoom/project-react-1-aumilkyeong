const verticalRow = {
  category: 'row',
  level: 1,
  name: 'verticalRow',
  label: 'Vertical Row',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=rloXYB8M3vU'],
  tips: [
    '몸을 수직으로 세운 상태에서 로우',
  ],
};

const inclineRow = {
  category: 'row',
  level: 2,
  name: 'inclineRow',
  label: 'Incline Row',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=LR2EnFWpVao'],
  tips: [
    '몸을 비스듬하게 누운 자세에서 로우',
    '몸을 땅으로 수평에 가깝게 눕힐수록 난이도 증가',
  ],
};

const horizontalRow = {
  category: 'row',
  level: 3,
  name: 'horizontalRow',
  label: 'Horizontal Row',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=dvkIaarnf0g'],
  tips: [
    '척추 중립 자세',
    '팔꿈치 몸쪽으로 붙이기',
    '최저점에서 팔 곧게 펴기',
    '최고점에서 가슴이 링/바에 근접하고 견갑골 후인(족집게처럼 모아줌)',
    '어깨가 움츠러들지 않게 주의',
  ],
};

const wideRow = {
  category: 'row',
  level: 4,
  name: 'wideRow',
  label: 'Wide Row',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=1yMRvsuk9Xg'],
  tips: [
    '팔꿈치 몸에서 떨어져도 괜찮음',
    '어깨너비 1.5배 정도로 와이드 그립',
    '링 사용자: 팔꿈치를 몸에서 90도 각도로 펼친 상태에서 로우',
  ],
};

const weightedInvertedRow = {
  category: 'row',
  level: 5,
  name: 'weightedInvertedRow',
  label: 'Weighted Inverted Row',
  range: '5-8',
  demos: ['https://www.youtube.com/watch?v=3cYR6pis5zc'],
  tips: [
    '원판을 가슴이나 복부에 올리는 방법은 불편하고 불안정',
    '중량 조끼는 간편하지만 무게가 제한적',
    '허리나 가슴에 차는 딥 벨트는 가장 많은 무게를 칠 수 있지만, 중량 플레이트가 바닥에 닫지 않도록 전신을 끌어올려야 함',
    '다른 대안으로는 바벨이나 덤벨 로우를 추천',
  ],
};

const rowProgression = [
  verticalRow,
  inclineRow,
  horizontalRow,
  wideRow,
  weightedInvertedRow,
];

export {
  verticalRow,
  inclineRow,
  horizontalRow,
  wideRow,
  weightedInvertedRow,
};

export default rowProgression;
