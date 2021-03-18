import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  context('with initial mode', () => {
    it('renders check-in mode', () => {
      useSelector.mockImplementation((selector) => selector({
        mode: 'check-in',
      }));

      const { container } = render(<App />);

      expect(container).toHaveTextContent('check-in');
    });
  });

  context('with unmatched mode', () => {
    it('renders something went wrong', () => {
      useSelector.mockImplementation((selector) => selector({
        mode: 'nothing',
      }));

      const { container } = render(<App />);

      expect(container).toHaveTextContent('Something went wrong...');
    });
  });

  context('with check-in mode clicked', () => {
    it('renders check-in mode', () => {
      useSelector.mockImplementation((selector) => selector({
        mode: 'check-in',
      }));

      const { container } = render(<App />);

      expect(container).toHaveTextContent('check-in');
    });
  });

  context('with workout mode clicked', () => {
    it('renders workout mode', () => {
      useSelector.mockImplementation((selector) => selector({
        mode: 'workout',
      }));

      const { container } = render(<App />);

      expect(container).toHaveTextContent('workout');
    });
  });

  context('with check-out mode clicked', () => {
    it('renders check-out mode', () => {
      useSelector.mockImplementation((selector) => selector({
        mode: 'check-out',
      }));
      const { container } = render(<App />);

      expect(container).toHaveTextContent('check-out');
    });
  });
});
