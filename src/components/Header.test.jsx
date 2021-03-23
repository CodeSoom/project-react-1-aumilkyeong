import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

jest.mock('react-redux');

describe('Header', () => {
  const date = '9999-99-99';

  it('renders date', () => {
    const { container } = render(
      <Header
        date={date}
      />,
    );

    expect(container).toHaveTextContent(date);
  });
});
