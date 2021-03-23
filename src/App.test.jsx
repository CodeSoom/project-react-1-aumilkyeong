import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      date: '',
      step: {
        path: '',
        prevPath: '',
        nextPath: '',
        buttonText: '',
      },
    }));
  });

  context('with path /', () => {
    it('renders home page', () => {
      renderApp({ path: '/' });
    });
  });

  context('with path /checkin', () => {
    it('renders checkin page', () => {
      renderApp({ path: '/checkin' });
    });
  });
});
