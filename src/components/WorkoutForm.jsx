import React from 'react';

import WarmupInputGroupContainer from './WarmupInputGroupContainer';

export default function WorkoutForm() {
  return (
    <form id="form-workout">
      <WarmupInputGroupContainer />
      <fieldset id="fieldset-strengthwork">
        <legend>
          <h2 id="heading-strengthwork">근력운동</h2>
        </legend>
      </fieldset>
    </form>
  );
}
