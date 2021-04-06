import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import progressions from '../data/progressions';
import { setStrengthworkRecord } from '../slice';

import StrengthworkInputGroup from './StrengthworkInputGroup';

export default function StrengthworkInputGroupContainer() {
  const dispatch = useDispatch();

  const setting = useSelector((state) => state.setting.strengthwork);

  const workout = Object.fromEntries(
    Object.entries(setting)
      .map(([category, exercise]) => [
        category,
        progressions[category].find((item) => (item.name === exercise)),
      ]),
  );

  function toggleInputActivation({ id }) {
    document.querySelector(`#${id}`).disabled = !document.querySelector(`#${id}`).disabled;
  }

  function handleChange(exercise, event) {
    const { category, name, set } = exercise;
    const { valueAsNumber } = event.target;

    dispatch(setStrengthworkRecord({
      category,
      name,
      set,
      reps: valueAsNumber,
    }));
  }

  return (
    <StrengthworkInputGroup
      workout={workout}
      onChange={handleChange}
      onClick={toggleInputActivation}
    />
  );
}
