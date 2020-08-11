import React from 'react';

import { Global } from '@emotion/core';

import NavBar from './NavBar';
import MapContainer from './MapContainer';

const global = {
  '& body': {
    margin: 0,
    fontFamily: 'Source Sans Pro',
  },
};

export default function App() {
  return (
    <>
      <Global styles={global} />
      <NavBar />
      <MapContainer />
    </>
  );
}
