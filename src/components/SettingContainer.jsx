import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setWarmup,
  setStrengthwork,
} from '../slice';

import WarmupSetting from './WarmupSetting';
import StrengthworkSetting from './StrengthworkSetting';

import warmups from '../data/warmups';
import progressions from '../data/progressions';

export default function SettingContainer() {
  const dispatch = useDispatch();

  const setting = useSelector((state) => state.setting);

  const labels = Object.fromEntries(warmups.map((exercise) => ([exercise.name, exercise.label])));

  function handleChangeWarmup(event) {
    const exercise = event.target.name;

    dispatch(setWarmup({ exercise }));
  }

  function handleChangeStrengthwork(event) {
    const { name, value } = event.target;

    dispatch(setStrengthwork({
      category: name,
      exercise: value,
    }));
  }

  return (
    <form>
      <WarmupSetting
        setting={setting.warmup}
        labels={labels}
        onChange={handleChangeWarmup}
      />
      <StrengthworkSetting
        setting={setting.strengthwork}
        progressions={progressions}
        handleChange={handleChangeStrengthwork}
      />
    </form>
  );
}
