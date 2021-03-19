import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setCheckOutMode } from '../slice';

export default function WorkoutContainer() {
  const mode = useSelector((state) => state.mode);

  const dispatch = useDispatch();

  return (
    <section>
      <h1>{ mode }</h1>
      <button type="button" onClick={() => dispatch(setCheckOutMode())}>Check Out</button>
    </section>
  );
}
