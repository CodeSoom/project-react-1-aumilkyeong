import React from 'react';

import { render } from '@testing-library/react';

import StrengthworkInputGroupContainer from './StrengthworkInputGroupContainer';

describe('StrengthworkInputGroupContainer', () => {
  it('renders without crash', () => {
    render(<StrengthworkInputGroupContainer />);
  });
});
