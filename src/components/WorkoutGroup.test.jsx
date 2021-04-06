import React from 'react';

import { render } from '@testing-library/react';

import WorkoutGroup from './WorkoutGroup';

describe('WorkoutGroup', () => {
  const workout = [
    {
      category: 'foo',
      name: 'foo',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    {
      category: 'bar',
      name: 'bar',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
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
