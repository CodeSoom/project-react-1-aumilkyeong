import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setWorkoutMode, setCheckOutMode } from '../slice';

export default function CheckInContainer() {
  const mode = useSelector((state) => state.mode);

  const dispatch = useDispatch();

  return (
    <section>
      <h1>{ mode }</h1>
      <button type="button" onClick={() => dispatch(setWorkoutMode())}>Workout</button>
      <button type="button" onClick={() => dispatch(setCheckOutMode())}>Check Out</button>
    </section>
  );
}
