import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Workout from './Workout';

jest.mock('react-redux');

describe('WorkoutPage', () => {
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

    const { container } = render(
      <Workout />,
    );

    expect(container).toHaveTextContent('Workout');
  });
});
