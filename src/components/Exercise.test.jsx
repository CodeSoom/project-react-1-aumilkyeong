import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Exercise from './Exercise';

describe('Exercise', () => {
  const exercise = {
    level: 0,
    category: 'some category',
    name: 'foo',
    label: 'foo',
    range: '0-999',
    record: {
      set1: undefined,
      set2: undefined,
      set3: undefined,
    },
  };

  it('renders exercise information with inputs', () => {
    const { container } = render(
      <Exercise
        exercise={exercise}
      />,
    );

    expect(container).toHaveTextContent('some category'.toUpperCase());
    expect(container).toHaveTextContent('foo');
    expect(container).toHaveTextContent('0-999');
  });

  it('inputs reps of the exercise', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <Exercise
        exercise={exercise}
        onChange={handleChange}
      />,
    );

    const input = container.querySelector('#foo-set-1');

    fireEvent.change(input, { target: { value: 99 } });

    expect(input.valueAsNumber).toBe(99);
  });
});
