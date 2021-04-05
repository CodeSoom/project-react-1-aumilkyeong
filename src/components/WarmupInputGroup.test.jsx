import React from 'react';

import { render } from '@testing-library/react';

import WarmupInputGroup from './WarmupInputGroup';

describe('WarmupInputGroup', () => {
  const workout = [
    {
      level: 0,
      name: 'foo',
      label: 'Foo',
    },
  ];

  it('renders warmup header', () => {
    const { container } = render(
      <WarmupInputGroup
        workout={workout}
      />,
    );

    expect(container).toHaveTextContent('준비운동');
    expect(container).toHaveTextContent('범위');
    expect(container).toHaveTextContent('횟수');
  });
});
