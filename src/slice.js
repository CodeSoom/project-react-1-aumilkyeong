import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    mode: 'check-in',
  },
  reducers: {
    setCheckInMode: (state) => ({
      ...state,
      mode: 'check-in',
    }),
    setWorkoutMode: (state) => ({
      ...state,
      mode: 'workout',
    }),
    setCheckOutMode: (state) => ({
      ...state,
      mode: 'check-out',
    }),
  },
});

export const { setCheckInMode, setWorkoutMode, setCheckOutMode } = actions;

export default reducer;
