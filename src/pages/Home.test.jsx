import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home';

describe('HomePage', () => {
  it('renders instructions of the routine', () => {
    const { container } = render(
      <Home />,
    );

    expect(container).toHaveTextContent('스케쥴 정하기');
    expect(container).toHaveTextContent('난이도 조절하기');
  });
});
