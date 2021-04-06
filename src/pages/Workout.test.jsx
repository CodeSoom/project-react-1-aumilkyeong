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
        strengthwork: {
          pullup: 'pullup',
          squat: 'squat',
          dip: 'dip',
          hinge: 'singleLeggedDeadlift',
          row: 'horizontalRow',
          pushup: 'pushup',
          antiExtension: 'plank',
          antiRotation: 'bandedPallofPress',
          extension: 'reverseHyperextension',
        },
      },
      warmups: [],
      record: {
        warmup: {},
        strengthwork: {
          pullup: {
            set1: '',
            set2: '',
            set3: '',
          },
          squat: {
            set1: '',
            set2: '',
            set3: '',
          },
          dip: {
            set1: '',
            set2: '',
            set3: '',
          },
          hinge: {
            set1: '',
            set2: '',
            set3: '',
          },
          row: {
            set1: '',
            set2: '',
            set3: '',
          },
          pushup: {
            set1: '',
            set2: '',
            set3: '',
          },
          antiExtension: {
            set1: '',
            set2: '',
            set3: '',
          },
          antiRotation: {
            set1: '',
            set2: '',
            set3: '',
          },
          extension: {
            set1: '',
            set2: '',
            set3: '',
          },
        },
      },
    }));

    const { container } = render(
      <Workout />,
    );

    expect(container).toHaveTextContent('Workout');
  });
});
