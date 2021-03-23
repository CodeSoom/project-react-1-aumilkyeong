import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      date: '',
    }));
  });

  context('with path /', () => {
    it('renders home page', () => {
      const { getByTestId } = renderApp({ path: '/' });

      const greeting = getByTestId('paragraph-greeting');
      expect(greeting).toHaveTextContent('Welcome to Reddit Bodyweight Recommended Routine');
    });
  });

  // context('with path /checkin', () => {
  //   it('renders checkin page', () => {
  //     const { getByTestId } = render({ path: '/checkin' });

  //     const greeting = getByTestId('table-warmup');

  //     expect(greeting).toHaveTextContent('Warmup');
  //   });
  // });
});
