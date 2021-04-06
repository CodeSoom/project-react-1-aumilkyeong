import React from 'react';

export default function WarmupInput({ exercise, onChange, onClick }) {
  const {
    name, label, range, reps,
  } = exercise;
  return (
    <section key={name}>
      <label
        htmlFor={name}
      >
        {label}
        <span>{range}</span>
        <input
          type="number"
          id={name}
          name={name}
          value={reps}
          onChange={onChange}
        />
        <button
          type="button"
          id={`toggle-${name}`}
          onClick={() => onClick({ id: name })}
        >
          완료
        </button>
      </label>
    </section>
  );
}
