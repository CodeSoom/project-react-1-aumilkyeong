import React from 'react';

import { render } from '@testing-library/react';

import StrengthworkSetting from './StrengthworkSetting';

jest.mock('react-redux');

describe('StrengthworkSetting', () => {
  const setting = {
    pullup: '',
    squat: '',
    dip: '',
    hinge: '',
    row: '',
    pushup: '',
    antiExtension: '',
    antiRotation: '',
    extension: '',
  };

  const progressions = {
    pullup: [],
    squat: [],
    dip: [],
    hinge: [],
    row: [],
    pushup: [],
    antiExtension: [],
    antiRotation: [],
    extension: [],
  };

  const handleChange = jest.fn();

  it('renders without crash', () => {
    render(
      <StrengthworkSetting
        setting={setting}
        progressions={progressions}
        handleChange={handleChange}
      />,
    );
  });
});
