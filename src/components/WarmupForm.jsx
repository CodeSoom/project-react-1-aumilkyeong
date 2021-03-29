import React from 'react';

export default function WarmupForm({ config, onChange }) {
  const labels = {
    yuri: 'Yuri\'s Shoulder Band Warmup',
    squatSkyReach: 'Squat Sky Reach',
    gmbWristPrep: 'GMB Wrist Prep',
    deadbug: 'Deadbug',
    archHang: 'Arch Hang',
    supportHold: 'Support Hold',
    easierSquat: 'Easier Squat Progression',
    easierHinge: 'Easier Hinge Progression',
  };

  return (
    <section id="setting-warmup">
      <h2>준비운동</h2>
      <form data-testid="form-warmup">
        {Object.entries(config).map(([exercise, isChecked]) => (
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
        ))}
      </form>
    </section>
  );
}
