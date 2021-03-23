import { createSlice } from '@reduxjs/toolkit';

const time = new Date();
const date = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    date,
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
