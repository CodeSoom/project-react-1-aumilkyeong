import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

jest.mock('react-redux');

describe('Footer', () => {
  const buttonText = 'Test';
  const navigation = '/nextpage';

  it('renders the next button', () => {
    const handleNext = jest.fn();

    const { getByText } = render(
      <MemoryRouter>
        <Footer
          buttonText={buttonText}
          navigation={navigation}
          handleNext={handleNext}
        />
      </MemoryRouter>,
    );

    const button = getByText('Test');

    expect(button).toHaveTextContent(buttonText);
  });
});
