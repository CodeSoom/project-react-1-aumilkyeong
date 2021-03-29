import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/Home';
import SettingPage from './pages/Setting';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/setting" component={SettingPage} />
    </Switch>
  );
}
