import React from 'react';

import { Link } from 'react-router-dom';

import SettingContainer from '../components/SettingContainer';

export default function SettingPage() {
  return (
    <main>
      <h1>Setting</h1>
      <SettingContainer />
      <Link to="/">To the Introduction</Link>
      <Link to="/workout">To the Workout of the day</Link>
    </main>
  );
}
