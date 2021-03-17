import React from 'react';

import { Global } from '@emotion/core';

import { useSelector } from 'react-redux';

import { get } from '../utils';

import NavBarContainer from './NavBarContainer';
import MapContainer from './MapContainer';

const base = {
  '& body': {
    margin: 0,
    fontFamily: 'Source Sans Pro',
  },
};

export default function App() {
  const randomSpot = useSelector(get('randomSpot'));

  return (
    <>
      <Global styles={base} />
      <NavBarContainer />
      <MapContainer randomSpot={randomSpot} />
    </>
  );
}
