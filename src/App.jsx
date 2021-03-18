import React from 'react';

import { useSelector } from 'react-redux';

import CheckInContainer from './Components/CheckInContainer';

import WorkoutContainer from './Components/WorkoutContainer';

import CheckOutContainer from './Components/CheckOutContainer';

export default function App() {
  const mode = useSelector((state) => state.mode);

  if (mode === 'check-in') {
    return (
      <CheckInContainer />
    );
  }

  if (mode === 'workout') {
    return (
      <WorkoutContainer />
    );
  }

  if (mode === 'check-out') {
    return (
      <CheckOutContainer />
    );
  }

  return (
    <p>Something went wrong...</p>
  );
}
