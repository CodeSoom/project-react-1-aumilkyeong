import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setStrengthwork } from '../slice';

import StrengthworkForm from './StrengthworkForm';

export default function StrengthworkFormContainer() {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.setting.strengthwork);
  const progressions = useSelector((state) => state.progressions);

  function handleChange(event) {
    const { name, value } = event.target;

    dispatch(setStrengthwork({
      category: name,
      exercise: value,
    }));
  }

  return (
    <section id="setting-strengthwork">
      <h2>근력운동</h2>
      <StrengthworkForm
        config={config}
        progressions={progressions}
        handleChange={handleChange}
      />
    </section>
  );
}
