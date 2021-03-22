import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setMode } from '../slice';

export default function CheckInContainer() {
  const mode = useSelector((state) => state.mode);

  const time = new Date();
  const dateString = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;

  const dispatch = useDispatch();

  return (
    <>
      <header>
        <p>
          Welcome to
          {' '}
          {dateString}
          {' '}
          workout!
        </p>
      </header>
      <section>
        <h1>{ mode }</h1>
        <button type="button" onClick={() => dispatch(setMode('workout'))}>Workout</button>
      </section>
    </>
  );
}
