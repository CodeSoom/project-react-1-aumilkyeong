import React from 'react';

import WarmupInputGroupContainer from './WarmupInputGroupContainer';
import StrengthworkInputGroupContainer from './StrengthworkInputGroupContainer';

export default function WorkoutForm() {
  return (
    <form id="form-workout">
      <WarmupInputGroupContainer />
      <StrengthworkInputGroupContainer />
    </form>
  );
}
