import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import WorkoutContainer from './WorkoutContainer';

jest.mock('react-redux');

describe('WorkoutContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      mode: 'workout',
    }));
  });

  it('renders workout mode', () => {
    const { container } = render(<WorkoutContainer />);

    expect(container).toHaveTextContent('workout');
  });

  it('triggers check-out mode', () => {
    const { getByText } = render(<WorkoutContainer />);

    fireEvent.click(getByText('Check Out'));

    expect(dispatch).toBeCalled();
  });
});
