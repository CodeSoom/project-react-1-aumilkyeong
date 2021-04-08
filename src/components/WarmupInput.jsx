import React from 'react';

export default function WarmupInput({
  exercise, handleRepsChange, handleLockClick, handleDemoClick,
}) {
  const {
    name, label, range, reps, demos,
  } = exercise;
  return (
    <section key={name}>
      <label
        htmlFor={name}
      >
        {label}
        <span>{range}</span>
        <button
          type="button"
          id={`demo-${name}`}
          onClick={() => handleDemoClick({ demos })}
        >
          Demo
        </button>
        <input
          type="number"
          id={name}
          name={name}
          value={reps}
          onChange={handleRepsChange}
        />
        <button
          type="button"
          id={`toggle-${name}`}
          onClick={() => handleLockClick({ id: name })}
        >
          완료
        </button>
      </label>
    </section>
  );
}
