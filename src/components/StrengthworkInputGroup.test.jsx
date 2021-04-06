import React from 'react';

import { render } from '@testing-library/react';

import StrengthworkInputGroup from './StrengthworkInputGroup';

describe('StrengthworkInputGroup', () => {
  const workout = {
    pullup: {
      category: 'pullup',
      level: 0,
      name: 'pullup',
      label: 'pullup',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    squat: {
      category: 'squat',
      level: 0,
      name: 'squat',
      label: 'squat',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    dip: {
      category: 'dip',
      level: 0,
      name: 'dip',
      label: 'dip',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    hinge: {
      category: 'hinge',
      level: 0,
      name: 'hinge',
      label: 'hinge',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    row: {
      category: 'row',
      level: 0,
      name: 'row',
      label: 'row',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    pushup: {
      category: 'pushup',
      level: 0,
      name: 'pushup',
      label: 'pushup',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    antiExtension: {
      category: 'anti-extension',
      level: 0,
      name: 'anti-extension',
      label: 'Anti-Extension',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    antiRotation: {
      category: 'anti-rotation',
      level: 0,
      name: 'anti-rotation',
      label: 'Anti-Rotation',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
    extension: {
      category: 'extension',
      level: 0,
      name: 'extension',
      label: 'Extension',
      range: '5-8',
      record: {
        set1: '',
        set2: '',
        set3: '',
      },
    },
  };

  it('renders label - category, exercise, level, and reps for 3 sets', () => {
    const { container } = render(
      <StrengthworkInputGroup
        workout={workout}
      />,
    );

    expect(container).toHaveTextContent(/계열/);
    expect(container).toHaveTextContent(/운동/);
    expect(container).toHaveTextContent(/난이도/);
    expect(container).toHaveTextContent(/범위/);
    expect(container).toHaveTextContent(/1세트/);
    expect(container).toHaveTextContent(/2세트/);
    expect(container).toHaveTextContent(/3세트/);
  });
});
