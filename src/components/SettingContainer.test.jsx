import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SettingContainer from './SettingContainer';

jest.mock('react-redux');

describe('SettingContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      setting: {
        warmup: {
          yuri: false,
          squatSkyReach: false,
          gmbWristPrep: false,
          deadbug: false,
          negativeDip: false,
          supportHold: false,
          easierSquat: false,
          easierHinge: false,
        },
        strengthwork: {
          pullup: '',
          squat: '',
          verticalPushup: '',
          hinge: '',
          row: '',
          pushup: '',
          antiExtension: '',
          antiRotation: '',
          extension: '',
        },
      },
    }));
  });

  it('renders without crash', () => {
    render(<SettingContainer />);
  });

  it('dispatches the selected warmup', () => {
    const { container } = render(
      <SettingContainer />,
    );

    const yuri = container.querySelector('#yuri');

    fireEvent.click(yuri);
    expect(dispatch).toBeCalledTimes(1);
  });

  it('dispatches the selected strength work', () => {
    const { getByLabelText } = render(
      <SettingContainer />,
    );

    const verticalPushup = getByLabelText('Vertical Pushup');

    fireEvent.click(verticalPushup);
    expect(dispatch).toBeCalledTimes(1);
  });
});
