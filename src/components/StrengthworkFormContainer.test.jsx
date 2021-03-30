import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import StrengthworkFormContainer from './StrengthworkFormContainer';

jest.mock('react-redux');

describe('StrengthworkFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      setting: {
        strengthwork: {
          pullup: 'scapularPull',
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
      progressions: {
        pullup: [
          {
            level: 0,
            name: 'scapularPull',
            label: 'Scapular Pull',
          },
          {
            level: 1,
            name: 'archHang',
            label: 'Arch Hang',
          },
        ],
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
  });

  it('renders without crash', () => {
    render(<StrengthworkFormContainer />);
  });

  it('dispatches the selected strength work', () => {
    const { getByLabelText } = render(
      <StrengthworkFormContainer />,
    );

    const archHang = getByLabelText('Arch Hang');

    fireEvent.click(archHang);

    expect(dispatch).toBeCalledTimes(1);
  });
});
