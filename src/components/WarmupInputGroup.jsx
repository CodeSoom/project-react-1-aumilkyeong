import React from 'react';

import WarmupInput from './WarmupInput';

export default function WarmupInputGroup({
  workout, handleRepsChange, handleLockClick, handleDemoClick,
}) {
  return (
    <fieldset id="fieldset-warmup">
      <legend>
        <h2 id="heading-warmup">준비운동</h2>
      </legend>
      <div id="header-input-warmup">
        <span>범위</span>
        <span>횟수</span>
      </div>
      <div id="group-input-warmup">
        {workout.map((exercise) => (
          <WarmupInput
            key={exercise.name}
            exercise={exercise}
            handleRepsChange={handleRepsChange}
            handleLockClick={handleLockClick}
            handleDemoClick={handleDemoClick}
          />
        ))}
      </div>
    </fieldset>
  );
}
