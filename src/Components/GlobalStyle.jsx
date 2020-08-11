import React from 'react';

import { Global } from '@emotion/core';

const base = {
  '& body': {
    margin: 0,
    fontFamily: 'Source Sans Pro',
  },
};

export default function GlobalStyle() {
  return <Global styles={base} />;
}
