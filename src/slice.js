import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    mode: 'check-in',
    guidance: 'Initial Message',
  },
  reducers: {
    setMode: (state, { payload: mode }) => ({
      ...state,
      mode,
    }),
    setGuidance: (state, { payload: guidance }) => ({
      ...state,
      guidance,
    }),
  },
});

export const { setMode, setGuidance } = actions;

export default reducer;
