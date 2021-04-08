const plank = {
  category: 'antiExtension',
  level: 1,
  name: 'plank',
  label: 'Plank',
  range: '30s',
  demos: ['https://www.youtube.com/embed/44ScXWFaVBs?start=10'],
  tips: [
    '3세트 모두 30초를 버틸 수 있다면 다음 단계로',
    '시범 비디오의 여러 동작 중 플랭크만 하면 됨',
  ],
};

const ringAbRollout = {
  category: 'antiExtension',
  level: 2,
  name: 'ringAbRollout',
  label: 'Ring Ab Rollout',
  range: '8-12',
  demos: ['https://www.youtube.com/embed/LBUfnmugKLw'],
  tips: [
    '팔꿈치 곧게 유지',
    '할로우 바디 자세 유지(갈비뼈 내리고 엉덩이 집어넣기)',
    '가능한 손 간격을 가까이 두기',
    '링이 높이가 낮을수록 난이도 증가',
    '발 높이가 높을수록 난이도 증가',
  ],
};

const antiExtensionProgression = [
  plank,
  ringAbRollout,
];

export {
  plank,
  ringAbRollout,
};

export default antiExtensionProgression;
