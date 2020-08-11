import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';

import GlobalStyle from './GlobalStyle';
import NavBarContainer from './NavBarContainer';
import MapContainer from './MapContainer';

export default function App() {
  const randomSpot = useSelector(get('randomSpot'));

  return (
    <>
      <GlobalStyle />
      <NavBarContainer />
      <MapContainer randomSpot={randomSpot} />
    </>
  );
}
