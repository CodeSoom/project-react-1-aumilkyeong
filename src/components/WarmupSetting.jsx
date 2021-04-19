import React from 'react';

export default function WarmupSetting({ setting, labels, onChange }) {
  return (
    <fieldset id="setting-warmup">
      <legend>
        <h2>Warmup</h2>
      </legend>
      {Object.entries(setting).map(([exercise, isChecked]) => {
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
    </fieldset>
  );
}
