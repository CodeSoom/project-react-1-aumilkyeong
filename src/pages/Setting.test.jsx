import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import SettingPage from './Setting';

jest.mock('react-redux');

describe('SettingPage', () => {
  useSelector.mockImplementation((selector) => selector({
    setting: {
      warmup: {
        yuri: false,
        squatSkyReach: false,
        gmbWristPrep: false,
        deadbug: false,
        archHang: false,
        supportHold: false,
        easierSquat: false,
        easierHinge: false,
      },
      strengthwork: {
        pullup: '',
        squat: '',
        dip: '',
        hinge: '',
        row: '',
        pushup: '',
        antiExtension: '',
        antiRotation: '',
        extension: '',
      },
    },
    warmups: [],
    progressions: {
      pullup: [],
      squat: [],
      dip: [],
      hinge: [],
      row: [],
      pushup: [],
      antiExtension: [],
      antiRotation: [],
      extension: [],
    },
  }));

  it('renders without crash', () => {
    render(
      <MemoryRouter>
        <SettingPage />
      </MemoryRouter>,
    );
  });
});
