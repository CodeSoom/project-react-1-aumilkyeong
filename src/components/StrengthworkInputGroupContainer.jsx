import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import progressions from '../data/progressions';

import {
  setStrengthworkRecord,
  setDemo,
} from '../slice';

import StrengthworkInputGroup from './StrengthworkInputGroup';

import Demo from './Demo';

export default function StrengthworkInputGroupContainer() {
  const setting = useSelector((state) => state.setting.strengthwork);
  const record = useSelector((state) => state.record.strengthwork);
  const { isDemoMode, source } = useSelector((state) => state.demo);

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

  const dispatch = useDispatch();

  function toggleInputActivation({ id }) {
    document.querySelector(`#${id}`).disabled = !document.querySelector(`#${id}`).disabled;
  }

  function handleRepsChange(exercise, event) {
    const { category, name, set } = exercise;
    const { valueAsNumber } = event.target;

    dispatch(setStrengthworkRecord({
      category,
      name,
      set,
      reps: valueAsNumber,
    }));
  }

  function toggleDemoSection({ demos }) {
    dispatch(setDemo({
      isDemoMode: !isDemoMode,
      source: demos,
    }));
  }

  if (isDemoMode) {
    <>
      <Demo
        source={source}
      />
      <StrengthworkInputGroup
        workout={workout}
        handleRepsChange={handleRepsChange}
        handleLockClick={toggleInputActivation}
        handleDemoClick={toggleDemoSection}
      />
    </>;
  }

  return (
    <StrengthworkInputGroup
      workout={workout}
      handleRepsChange={handleRepsChange}
      handleLockClick={toggleInputActivation}
      handleDemoClick={toggleDemoSection}
    />
  );
}
