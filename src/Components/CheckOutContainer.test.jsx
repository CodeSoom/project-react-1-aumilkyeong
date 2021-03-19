import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CheckOutContainer from './CheckOutContainer';

jest.mock('react-redux');

describe('CheckOutContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      mode: 'check-out',
    }));
  });

  it('renders check-out mode', () => {
    const { container } = render(<CheckOutContainer />);

    expect(container).toHaveTextContent('check-out');
  });

  it('triggers check-in mode', () => {
    const { getByText } = render(<CheckOutContainer />);

    fireEvent.click(getByText('Check In'));

    expect(dispatch).toBeCalled();
  });
});
