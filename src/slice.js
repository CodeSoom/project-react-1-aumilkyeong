import { createSlice } from '@reduxjs/toolkit';

import { makeRandomSpot } from './RandomSpot';

const { actions, reducer } = createSlice({
  name: 'map',
  initialState: {
    randomSpot: makeRandomSpot('korea'),
    coordinates: null,
  },
  reducers: {
    setRandomSpot(state, { payload: randomSpot }) {
      return {
        ...state,
        randomSpot,
      };
    },
    setCoordinates(state, { payload: coordinates }) {
      return {
        ...state,
        coordinates,
      };
    },
  },
});

export const {
  setRandomSpot,
  setCoordinates,
} = actions;

export default reducer;
