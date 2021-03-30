import { createSlice } from '@reduxjs/toolkit';

import progressions from './data/progressions';

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
      strengthwork: {
        pullup: 'pullup',
        squat: 'squat',
        dip: 'dip',
        hinge: 'singleLeggedDeadlift',
        row: 'horizontalRow',
        pushup: 'pushup',
      },
    },
    progressions,
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
    setSelectedStrengthwork(state, { payload: { category, exercise } }) {
      return {
        ...state,
        setting: {
          ...state.setting,
          strengthwork: {
            ...state.setting.strengthwork,
            [category]: exercise,
          },
        },
      };
    },
  },
});

export const {
  toggleWarmup,
  setSelectedStrengthwork,
} = actions;

export default reducer;
