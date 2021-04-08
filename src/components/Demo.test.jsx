import React from 'react';

import { render } from '@testing-library/react';

import Demo from './Demo';

describe('Demo', () => {
  const source = [
    'https://www.youtube.com/watch?v=A9uFQa3Fv6c',
    'https://unsplash.com/photos/7Z03R1wOdmI',
  ];

  it('renders without crash', () => {
    render(
      <Demo
        source={source}
      />,
    );
    // 각 요소 불러와서 주소 체크?
  });
});
