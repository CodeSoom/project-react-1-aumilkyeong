import React from 'react';

import { useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import { initialize } from '@googlemaps/jest-mocks';

import NavBarContainer from './NavBarContainer';

describe('NavBarContainer', () => {
  beforeEach(() => {
    initialize();
  });

  function renderNavBarContainer() {
    return render((
      <NavBarContainer />
    ));
  }

  it('renders Service Title', () => {
    const { container } = renderNavBarContainer();

    expect(container).toHaveTextContent(/Sanchack/);
  });

  it('renders menu list', () => {
    const { queryByText } = renderNavBarContainer();

    expect(queryByText(/Home/)).not.toBeNull();
    expect(queryByText(/History/)).not.toBeNull();
    expect(queryByText(/Gallery/)).not.toBeNull();
    expect(queryByText(/FAQ/)).not.toBeNull();
  });

  it('calls dispatch with setRandomSpot action', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByTestId } = renderNavBarContainer();

    fireEvent.click(getByTestId('travel-button'));

    expect(dispatch).toBeCalledTimes(1); // TODO: 랜덤 요소 테스트하기가 까다로운데.... 어떤 방식으로 해야할까?
  });
});
