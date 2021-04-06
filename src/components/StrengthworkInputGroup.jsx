import React from 'react';

import WorkoutGroup from './WorkoutGroup';

export default function StrengthworkInputGroup({ workout, onChange, onClick }) {
  const {
    pullup, squat, dip, hinge, row, pushup, antiExtension, antiRotation, extension,
  } = workout;

  const firstPair = [pullup, squat];
  const secondPair = [dip, hinge];
  const thirdPair = [row, pushup];
  const coreTriplet = [antiExtension, antiRotation, extension];

  return (
    <fieldset id="fieldset-strengthwork">
      <legend>
        <h2 id="heading-strengthwork">근력운동</h2>
      </legend>
      <WorkoutGroup
        legend="Group 1"
        workout={firstPair}
        onChange={onChange}
        onClick={onClick}
      />
      <WorkoutGroup
        legend="Group 2"
        workout={secondPair}
        onChange={onChange}
        onClick={onClick}
      />
      <WorkoutGroup
        legend="Group 3"
        workout={thirdPair}
        onChange={onChange}
        onClick={onClick}
      />
      <WorkoutGroup
        legend="Group 4"
        workout={coreTriplet}
        onChange={onChange}
        onClick={onClick}
      />
    </fieldset>
  );
}
