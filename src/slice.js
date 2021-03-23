import { createSlice } from '@reduxjs/toolkit';

import { getStepByPath } from './utils';

import steps from './data/steps';

const time = new Date();
const date = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    date,
    step: getStepByPath('/')(steps),
    steps,
  },
  reducers: {
    setStep: (state, { payload: nextPath }) => ({
      ...state,
      step: getStepByPath(nextPath)(state.steps),
    }),
  },
});

export const { setStep } = actions;

export default reducer;
