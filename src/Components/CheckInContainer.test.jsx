import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CheckInContainer from './CheckInContainer';

jest.mock('react-redux');

describe('CheckInContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      mode: 'check-in',
    }));
  });

  it('renders check-in mode', () => {
    const { container } = render(<CheckInContainer />);

    expect(container).toHaveTextContent('check-in');
  });

  it('triggers workout mode', () => {
    const { getByText } = render(<CheckInContainer />);

    fireEvent.click(getByText('Workout'));

    expect(dispatch).toBeCalled();
  });
});
