import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import MapContainer from './MapContainer';

jest.mock('react-redux');

describe('MapContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      randomSpot: {
        latitude: 0,
        longitude: 0,
      },
    }));
  });

  it('renders without crash', () => {
    // TODO: 맵 컨테이너에서 테스트하고 싶은 사항이 뭐가 있을까?
    render((
      <MapContainer />
    ));
  });
});
