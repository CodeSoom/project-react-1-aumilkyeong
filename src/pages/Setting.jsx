import React from 'react';

import WarmupFormContainer from '../components/WarmupFormContainer';
import StrengthworkFormContainer from '../components/StrengthworkFormContainer';

export default function SettingPage() {
  return (
    <main>
      <h1>Setting</h1>
      <WarmupFormContainer />
      <StrengthworkFormContainer />
    </main>
  );
}
