import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import StrengthworkInputGroupContainer from './StrengthworkInputGroupContainer';

jest.mock('react-redux');

const state = {
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
  demo: {
    isDemoMode: false,
    source: [],
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
};

describe('StrengthworkInputGroupContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without demo mode', () => {
    it('renders without crash', () => {
      useSelector.mockImplementation((selector) => (selector(state)));

      render(<StrengthworkInputGroupContainer />);
    });

    it('dispatches setStrengthworkRecord action', () => {
      const { container } = render(<StrengthworkInputGroupContainer />);

      const input = container.querySelector('#pullup-set-1');

      fireEvent.change(input, { target: { value: 99 } });

      expect(dispatch).toBeCalledTimes(1);
    });

    it('dispatches setDemo action', () => {
      const { container } = render(<StrengthworkInputGroupContainer />);

      const demo = container.querySelector('#demo-pullup');

      fireEvent.click(demo);

      expect(dispatch).toBeCalledTimes(1);
    });

    it('toggles strengthwork input by the button', () => {
      const { container } = render(<StrengthworkInputGroupContainer />);

      const button = container.querySelector('#toggle-pullup-set-1');

      fireEvent.click(button);
    });
  });

  context('with demo mode', () => {
    it('renders without crash', () => {
      useSelector.mockImplementation((selector) => (selector({
        ...state,
        demo: {
          ...state.demo,
          isDemoMode: true,
        },
      })));

      render(<StrengthworkInputGroupContainer />);
    });

    it('toggles the demo section by clicking the button', () => {
      const { container } = render(<StrengthworkInputGroupContainer />);

      const button = container.querySelector('#demo-pullup');

      fireEvent.click(button);
    });
  });
});
