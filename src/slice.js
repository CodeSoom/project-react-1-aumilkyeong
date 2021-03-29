import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    setting: {
      warmup: {
        yuri: true,
        squatSkyReach: true,
        gmbWristPrep: true,
        deadbug: true,
        archHang: false,
        supportHold: false,
        easierSquat: false,
        easierHinge: false,
      },
    },
  },
  reducers: {
    toggleWarmup(state, { payload: { exercise } }) {
      return {
        ...state,
        setting: {
          ...state.setting,
          warmup: {
            ...state.setting.warmup,
            [exercise]: !state.setting.warmup[exercise],
          },
        },
      };
    },
  },
});

export const {
  toggleWarmup,
} = actions;

export default reducer;
