import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import WorkoutForm from './WorkoutForm';

jest.mock('react-redux');

describe('WorkoutForm', () => {
  it('renders without crash', () => {
    useSelector.mockImplementation((selector) => selector({
      setting: {
        warmup: {},
        strengthwork: {},
      },
      warmups: [],
      record: {
        warmup: {},
      },
    }));

    render(<WorkoutForm />);
  });
});
