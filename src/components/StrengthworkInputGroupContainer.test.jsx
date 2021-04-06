import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import StrengthworkInputGroupContainer from './StrengthworkInputGroupContainer';

jest.mock('react-redux');

describe('StrengthworkInputGroupContainer', () => {
  it('renders without crash', () => {
    useSelector.mockImplementation((selector) => (selector({
      setting: {
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
      record: {
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
    })));

    render(<StrengthworkInputGroupContainer />);
  });

  it('dispatches setStrengthworkRecord action', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { container } = render(<StrengthworkInputGroupContainer />);

    const input = container.querySelector('#pullup-set-1');

    fireEvent.change(input, { target: { value: 99 } });

    expect(dispatch).toBeCalledTimes(1);
  });

  it('toggles strengthwork input by the button', () => {
    const { container } = render(<StrengthworkInputGroupContainer />);

    const button = container.querySelector('#toggle-pullup-set-1');

    fireEvent.click(button);
  });
});
