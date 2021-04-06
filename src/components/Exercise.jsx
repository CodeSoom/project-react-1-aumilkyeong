import React from 'react';

export default function Exercise({ exercise, onChange, onClick }) {
  const {
    category, name, label, level, range, record,
  } = exercise;

  return (
    <section key={name}>
      <span>{category.toUpperCase()}</span>
      <span>{label}</span>
      <span>{level}</span>
      <span>{range}</span>
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
            onChange={(event) => onChange({ category, name, set }, event)}
          />
          <button
            type="button"
            id={`toggle-${name}-set-${set}`}
            onClick={() => onClick({ id: `${name}-set-${set}` })}
          >
            완료
          </button>
        </label>
      ))}
    </section>
  );
}
