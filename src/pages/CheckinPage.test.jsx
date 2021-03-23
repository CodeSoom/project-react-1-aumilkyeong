import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CheckinPage from './CheckinPage';

jest.mock('react-redux');

describe('CheckinPage', () => {
  it('renders home page without crash', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/checkin']}>
        <CheckinPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('Overview');
    expect(container).toHaveTextContent('Scheduling');
    expect(container).toHaveTextContent('Progression');
  });
});
