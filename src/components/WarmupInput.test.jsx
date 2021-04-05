import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import WarmupInput from './WarmupInput';

import {
  deadbug,
  easierSquat,
  easierHinge,
} from '../data/warmups';

describe('WarmupInput', () => {
  function renderWarmupInput({ exercise }) {
    return render(
      <WarmupInput
        exercise={exercise}
      />,
    );
  }

  function checkInput(input) {
    fireEvent.change(input, { target: { value: 99 } });
    expect(input.valueAsNumber).toBe(99);
  }

  it('provides input of the warmup reps', () => {
    const { container } = renderWarmupInput({ exercise: deadbug });

    expect(container).toHaveTextContent('Deadbug');
    expect(container).toHaveTextContent('30s');

    const input = container.querySelector('#deadbug');
    checkInput(input);
  });

  context('with easier squat', () => {
    it('renders easier squat input', () => {
      const { container } = renderWarmupInput({ exercise: easierSquat });

      const input = container.querySelector('#easierSquat');

      checkInput(input);
    });
  });

  context('with easier hinge', () => {
    it('renders easier hinge input', () => {
      const { container } = renderWarmupInput({ exercise: easierHinge });

      const input = container.querySelector('#easierHinge');

      checkInput(input);
    });
  });
});
