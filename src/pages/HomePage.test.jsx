import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('react-redux');

describe('HomePage', () => {
  it('renders home page without crash', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
  });
});
