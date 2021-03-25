import React from 'react';

export default function HomePage() {
  return (
    <main>
      <h1>Reddit Bodyweight Recommended Routine</h1>
      <section id="instruction-scheduling">
        <h2>스케쥴 정하기</h2>
        <ul>
          <li>
            주당 3회만 운동합니다. 운동하는 날 사이에 적어도 하루의 휴식일(또는
            <a href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/skillday"> skill day</a>
            )가 필요합니다.
          </li>
          <li>
            월수금, 화목토, 수금일 처럼 원하는 시간을 정합니다.
          </li>
          <li>
            이 루틴은 전신운동을 목표로 합니다. 하루치 운동을 다른 날로 분할하지 마십시오.(
            <a href="https://www.reddit.com/r/bodyweightfitness/comments/6talge/split_routines_tend_to_be_suboptimal_for_beginners/">이유</a>
            )
          </li>
        </ul>
      </section>
      <section id="instruction-progression">
        <h2>난이도 조절하기</h2>
        <ul>
          <li>
            맨몸운동은 변형 동작으로 난이도를 조절합니다.
            푸쉬업을 예로 들면 인클라인, 일반, 디클라인, 다이아몬드, 링, pseudo planche 순서로 난이도를 조절할 수 있습니다.
            너무 쉽지도 어렵지도 않게 근력에 적당한 동작을 선택하면 됩니다.
          </li>
          <li>
            Setting 페이지에서 지금 자신에게 적절한 난이도의 운동을 선택합니다.
            선택한 운동을 처음 하는 날에는 3세트 5회를 목표로 수행합니다.
            다음 운동하는 날에는 세트당 횟수를 1회 늘립니다.
            좋은 자세로 3세트 8회를 수행할 수 있다면, 난이도를 올리면 됩니다.
            난이도를 올리고 나면 마찬가지로 3세트 5회부터 시작합니다.
          </li>
          <li>
            운동 중에는 버티기 운동도 있습니다.
            rowing 계열의 support holds나 tuck front lever 같은 운동입니다.
            이런 운동들은 횟수 대신 10 ~ 30초간 자세를 유지하는 것을 기준으로 수행하면 됩니다.
            3세트 모두 30초간 좋은 자세로 버틸수 있다면, 난이도를 올리면 됩니다.
          </li>
          <li>
            필요한 장비가 없거나 기타 사유로 운동이 어렵다면 대체운동을 택하면 됩니다.
          </li>
        </ul>
      </section>
    </main>
  );
}
