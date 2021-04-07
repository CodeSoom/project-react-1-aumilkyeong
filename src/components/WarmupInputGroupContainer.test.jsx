import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import WarmupInputGroupContainer from './WarmupInputGroupContainer';

jest.mock('react-redux');

describe('WarmupInputGroupContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      setting: {
        warmup: {
          easierSquat: true,
          easierHinge: true,
        },
        strengthwork: {},
      },
      warmups: [
        {
          name: 'easierSquat',
          getEasierSquat: () => ({
            name: 'foo',
          }),
        },
        {
          name: 'easierHinge',
          getEasierHinge: () => ({
            name: 'bar',
          }),
        },
      ],
      record: {
        warmup: {},
      },
      demo: {
        isDemoMode: false,
        source: [],
      },
    }));
  });

  it('renders without crash', () => {
    render(<WarmupInputGroupContainer />);
  });

  it('dispatches warmup workout input', () => {
    const { container } = render(<WarmupInputGroupContainer />);

    const easierSquat = container.querySelector('#easierSquat');

    fireEvent.change(easierSquat, { target: { value: 99 } });
    expect(dispatch).toBeCalledTimes(1);
  });

  it('toggles warmup workout input by button', () => {
    const { container } = render(<WarmupInputGroupContainer />);

    const button = container.querySelector('#toggle-easierSquat');

    fireEvent.click(button);
  });

  context('with DemoMode', () => {
    it('can click demo button', () => {
      useSelector.mockImplementation((selector) => selector({
        setting: {
          warmup: {
            easierSquat: true,
            easierHinge: true,
          },
          strengthwork: {},
        },
        warmups: [
          {
            name: 'easierSquat',
            getEasierSquat: () => ({
              name: 'foo',
            }),
          },
          {
            name: 'easierHinge',
            getEasierHinge: () => ({
              name: 'bar',
            }),
          },
        ],
        record: {
          warmup: {},
        },
        demo: {
          isDemoMode: true,
          source: ['Demo Section'],
        },
      }));

      const { container } = render(<WarmupInputGroupContainer />);

      const button = container.querySelector('#demo-easierSquat');

      fireEvent.click(button);
    });
  });
});
