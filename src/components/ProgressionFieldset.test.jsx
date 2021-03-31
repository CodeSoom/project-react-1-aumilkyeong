import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ProgressionFieldset from './ProgressionFieldset';

describe('ProgressionFieldset', () => {
  const handleChange = jest.fn();

  const legend = 'Select your exercise';
  const category = 'foo';
  const progression = [
    {
      level: 0,
      name: 'foo',
      label: 'Foo',
    },
    {
      level: 1,
      name: 'bar',
      label: 'Bar',
    },
  ];

  function renderProgressionFieldset() {
    return render(
      <ProgressionFieldset
        legend={legend}
        category={category}
        selected="foo"
        progression={progression}
        handleChange={handleChange}
      />,
    );
  }

  it('renders without crash', () => {
    const { container, getByLabelText } = renderProgressionFieldset();

    expect(container).toHaveTextContent(legend);

    const foo = getByLabelText('Foo');
    expect(foo).toBeChecked();

    const bar = getByLabelText('Bar');
    expect(bar).not.toBeChecked();
  });

  it('calls the strength work select event handler', () => {
    const { getByLabelText } = renderProgressionFieldset();

    const bar = getByLabelText('Bar');

    fireEvent.click(bar);

    expect(handleChange).toBeCalledTimes(1);
  });
});
