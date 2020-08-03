import React from 'react';

import { render } from '@testing-library/react';

import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders Service Title', () => {
    const { container } = render((
      <NavBar />
    ));

    expect(container).toHaveTextContent(/Sanchack/);
  });
  it('renders menu list', () => {
    const { queryByText } = render((
      <NavBar />
    ));

    expect(queryByText(/Home/)).not.toBeNull();
    expect(queryByText(/History/)).not.toBeNull();
    expect(queryByText(/Gallery/)).not.toBeNull();
    expect(queryByText(/FAQ/)).not.toBeNull();
  });
});
