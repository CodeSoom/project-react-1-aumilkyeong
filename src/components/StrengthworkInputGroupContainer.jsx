import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import progressions from '../data/progressions';
import { setStrengthworkRecord } from '../slice';

import StrengthworkInputGroup from './StrengthworkInputGroup';

export default function StrengthworkInputGroupContainer() {
  const dispatch = useDispatch();

  const setting = useSelector((state) => state.setting.strengthwork);
  const record = useSelector((state) => state.record.strengthwork);

  const workout = Object.fromEntries(
    Object.entries(setting)
      .map(([category, exercise]) => {
        const target = progressions[category].find((item) => (item.name === exercise));
        const targetWithRecord = {
          ...target,
          record: {
            set1: record[category].set1,
            set2: record[category].set2,
            set3: record[category].set3,
          },
        };

        return [
          category,
          targetWithRecord,
        ];
      }),
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
