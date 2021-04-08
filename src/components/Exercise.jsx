import React from 'react';

export default function Exercise({
  exercise, handleRepsChange, handleLockClick, handleDemoClick,
}) {
  const {
    category, name, label, level, range, record, demos,
  } = exercise;

  const converter = {
    antiExtension: 'anti-extension',
    antiRotation: 'anti-rotation',
  };

  const categoryLabel = converter[category] ? converter[category] : category;

  return (
    <section key={name}>
      <span>{categoryLabel.toUpperCase()}</span>
      <span>{label}</span>
      <span>{level}</span>
      <span>{range}</span>
      <button
        type="button"
        id={`demo-${name}`}
        onClick={() => handleDemoClick({ demos })}
      >
        Demo
      </button>
      {[1, 2, 3].map((set) => (
        <label
          key={set}
          htmlFor={`${name}-set-${set}`}
        >
          <input
            type="number"
            id={`${name}-set-${set}`}
            name={`${name}-set-${set}`}
            value={record[`set${set}`]}
            onChange={(event) => handleRepsChange({ category, name, set }, event)}
          />
          <button
            type="button"
            id={`toggle-${name}-set-${set}`}
            onClick={() => handleLockClick({ id: `${name}-set-${set}` })}
          >
            완료
          </button>
        </label>
      ))}
    </section>
  );
}
