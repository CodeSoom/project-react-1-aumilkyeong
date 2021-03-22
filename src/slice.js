import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    mode: 'check-in',
  },
  reducers: {
    setMode: (state, { payload: mode }) => ({
      ...state,
      mode,
    }),
  },
});

export const { setMode } = actions;

export default reducer;
