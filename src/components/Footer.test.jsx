import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

jest.mock('react-redux');

describe('Footer', () => {
  const buttonText = 'Test';
  const navigation = '/';

  it('renders next button', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer
          buttonText={buttonText}
          navigation={navigation}
        />
      </MemoryRouter>,
    );

    const button = getByTestId('button-next');

    expect(button).toHaveTextContent(buttonText);
  });
});
