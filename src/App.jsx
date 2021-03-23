import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';

export default function App() {
  const date = useSelector((state) => state.date);

  const buttonText = 'Click to start';

  const navigation = '/checkin';

  return (
    <>
      <Header
        date={date}
      />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer
        buttonText={buttonText}
        navigation={navigation}
      />
    </>
  );
}
