import React from 'react';

import Exercise from './Exercise';

export default function WorkoutGroup({
  legend, workout, handleRepsChange, handleLockClick, handleDemoClick,
}) {
  const sections = ['계열', '운동', '난이도', '범위', '1세트', '2세트', '3세트'];

  return (
    <fieldset>
      <legend>
        {legend}
      </legend>
      <div>
        {sections.map((item) => (<span key={item}>{item}</span>))}
      </div>
      {workout.map((exercise) => (
        <Exercise
          key={exercise.name}
          exercise={exercise}
          handleRepsChange={handleRepsChange}
          handleLockClick={handleLockClick}
          handleDemoClick={handleDemoClick}
        />
      ))}
    </fieldset>
  );
}
