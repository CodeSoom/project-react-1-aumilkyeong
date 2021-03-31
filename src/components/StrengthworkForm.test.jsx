import React from 'react';

import { render } from '@testing-library/react';

import StrengthworkForm from './StrengthworkForm';

jest.mock('react-redux');

describe('StrengthworkForm', () => {
  const config = {
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
      <StrengthworkForm
        config={config}
        progressions={progressions}
        handleChange={handleChange}
      />,
    );
  });
});
