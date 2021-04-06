import React from 'react';

import { render } from '@testing-library/react';

import WorkoutGroup from './WorkoutGroup';

describe('WorkoutGroup', () => {
  const workout = [
    {
      category: 'foo',
      name: 'foo',
    },
    {
      category: 'bar',
      name: 'bar',
    },
  ];

  it('renders group label', () => {
    const { container } = render(
      <WorkoutGroup
        legend="그룹 1"
        workout={workout}
      />,
    );

    expect(container).toHaveTextContent(/그룹 1/);
  });
});
