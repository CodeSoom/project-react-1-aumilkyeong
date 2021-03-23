import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setStep } from './slice';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CheckinPage from './pages/CheckinPage';

export default function App() {
  const dispatch = useDispatch();

  const date = useSelector((state) => state.date);
  const { buttonText, nextPath } = useSelector((state) => state.step);

  function handleNext() {
    dispatch(setStep(nextPath));
  }

  return (
    <>
      <Header
        date={date}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/checkin" component={CheckinPage} />
      </Switch>
      <Footer
        buttonText={buttonText}
        navigation={nextPath}
        handleNext={handleNext}
      />
    </>
  );
}
