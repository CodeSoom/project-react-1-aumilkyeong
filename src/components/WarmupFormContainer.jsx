import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toggleWarmup } from '../slice';

import WarmupForm from './WarmupForm';

export default function WarmupFormContainer() {
  const dispatch = useDispatch();

  const config = useSelector((state) => state.setting.warmup);

  function handleChange(event) {
    const exercise = event.target.name;

    dispatch(toggleWarmup({ exercise }));
  }

  return (
    <WarmupForm
      config={config}
      onChange={handleChange}
    />
  );
}
