import React from 'react';

import WarmupFormContainer from '../components/WarmupFormContainer';

export default function SettingPage() {
  return (
    <main>
      <h1>운동 설정하기</h1>
      <WarmupFormContainer />
      <section id="setting-strengthwork">
        <h2>근력운동</h2>
      </section>
    </main>
  );
}
