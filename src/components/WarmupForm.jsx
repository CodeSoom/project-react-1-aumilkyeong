import React from 'react';

export default function WarmupForm({ config, labels, onChange }) {
  return (
    <section id="setting-warmup">
      <h2>준비운동</h2>
      <form data-testid="form-warmup">
        {Object.entries(config).map(([exercise, isChecked]) => {
          if (exercise === 'archHang') {
            const prefixed = `warmup-${exercise}`;
            return (
              <label
                key={exercise}
                htmlFor={prefixed}
              >
                <input
                  type="checkbox"
                  id={prefixed}
                  name={exercise}
                  checked={isChecked}
                  onChange={onChange}
                />
                {labels[exercise]}
              </label>
            );
          }
          return (
            <label
              key={exercise}
              htmlFor={exercise}
            >
              <input
                type="checkbox"
                id={exercise}
                name={exercise}
                checked={isChecked}
                onChange={onChange}
              />
              {labels[exercise]}
            </label>
          );
        })}
      </form>
    </section>
  );
}
