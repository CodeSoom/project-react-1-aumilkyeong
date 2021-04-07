import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setDemo, setWarmupRecord } from '../slice';

import WarmupInputGroup from './WarmupInputGroup';

export default function WarmupInputGroupContainer() {
  const setting = useSelector((state) => state.setting.warmup);
  const warmups = useSelector((state) => state.warmups);
  const squat = useSelector((state) => state.setting.strengthwork.squat);
  const hinge = useSelector((state) => state.setting.strengthwork.hinge);
  const record = useSelector((state) => state.record.warmup);
  const { isDemoMode, source } = useSelector((state) => state.demo);

  const checkedList = Object
    .entries(setting)
    .filter(([name, isChecked]) => name && isChecked)
    .map((exercise) => exercise[0]);

  const workout = checkedList.map((name) => {
    const isEasierSquat = name === 'easierSquat';
    const isEasierHinge = name === 'easierHinge';

    if (isEasierSquat) {
      const easierSquat = warmups
        .find((target) => target.name === name)
        .getEasierSquat(squat);

      return {
        ...easierSquat,
        name: 'easierSquat',
        reps: record[name] || '',
      };
    }

    if (isEasierHinge) {
      const easierHinge = warmups
        .find((target) => target.name === name)
        .getEasierHinge(hinge);

      return {
        ...easierHinge,
        name: 'easierHinge',
        reps: record[name] || '',
      };
    }

    const exercise = warmups.find((target) => target.name === name);

    return {
      ...exercise,
      reps: record[name] || '',
    };
  });

  const dispatch = useDispatch();

  function toggleDemoSection({ demos = [] }) {
    dispatch(setDemo({
      isDemoMode: !isDemoMode,
      source: demos,
    }));
  }

  function handleChange(event) {
    const { id, valueAsNumber } = event.target;

    dispatch(setWarmupRecord({
      exercise: id,
      reps: valueAsNumber,
    }));
  }

  function toggleInputActivation({ id }) {
    document.querySelector(`#${id}`).disabled = !document.querySelector(`#${id}`).disabled;
  }

  if (isDemoMode) {
    return (
      <>
        <section>Demo Section</section>
        <WarmupInputGroup
          workout={workout}
          onChange={handleChange}
          onClick={toggleInputActivation}
          handleDemoClick={toggleDemoSection}
        />
      </>
    );
  }

  return (
    <WarmupInputGroup
      workout={workout}
      onChange={handleChange}
      onClick={toggleInputActivation}
      handleDemoClick={toggleDemoSection}
    />
  );
}
