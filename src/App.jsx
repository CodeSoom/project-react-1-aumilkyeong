import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/Home';
import SettingPage from './pages/Setting';
import WorkoutPage from './pages/Workout';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/setting" component={SettingPage} />
      <Route path="/workout" component={WorkoutPage} />
    </Switch>
  );
}
