import React from 'react';

export default function ProgressionFieldset({
  legend, category, selected, progression, handleChange,
}) {
  return (
    <fieldset data-testid="pullup-progression">
      <legend>
        {legend}
      </legend>
      {progression.map((exercise) => {
        const isChecked = selected === exercise.name;

        return (
          <label key={exercise.name} htmlFor={exercise.name}>
            <input
              type="radio"
              name={category}
              id={exercise.name}
              value={exercise.name}
              checked={isChecked}
              onChange={handleChange}
            />
            {exercise.label}
          </label>
        );
      })}
    </fieldset>
  );
}
