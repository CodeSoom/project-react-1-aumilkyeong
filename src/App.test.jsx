import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders well', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('Setting Complete');
  });
});
