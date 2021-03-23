import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

jest.mock('react-redux');

describe('Footer', () => {
  const buttonText = 'Test';
  const navigation = '/';

  it('renders next button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer
          buttonText={buttonText}
          navigation={navigation}
        />
      </MemoryRouter>,
    );

    const button = getByText('Test');

    expect(button).toHaveTextContent(buttonText);
  });
});
