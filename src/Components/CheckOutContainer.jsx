import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setCheckInMode } from '../slice';

export default function CheckOutContainer() {
  const mode = useSelector((state) => state.mode);

  const dispatch = useDispatch();

  return (
    <section>
      <h1>{ mode }</h1>
      <button type="button" onClick={() => dispatch(setCheckInMode())}>Check In</button>
    </section>
  );
}
