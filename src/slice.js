import { createSlice } from '@reduxjs/toolkit';

import progressions from './data/progressions';
import warmups from './data/warmups';

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
        antiExtension: 'plank',
        antiRotation: 'bandedPallofPress',
        extension: 'reverseHyperextension',
      },
    },
    warmups,
    progressions,
  },
  reducers: {
    setWarmup(state, { payload: { exercise } }) {
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
    setStrengthwork(state, { payload: { category, exercise } }) {
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
  setWarmup,
  setStrengthwork,
} = actions;

export default reducer;
