import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import WarmupFormContainer from './WarmupFormContainer';

jest.mock('react-redux');

describe('WarmupFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
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
      },
    }));
  });

  it('renders without crash', () => {
    render(<WarmupFormContainer />);
  });

  it('dispatches the selected warmup', () => {
    const { getByLabelText } = render(
      <WarmupFormContainer />,
    );

    const yuri = getByLabelText('Yuri\'s Shoulder Band Warmup');
    fireEvent.click(yuri);
    expect(dispatch).toBeCalledTimes(1);
  });
});
