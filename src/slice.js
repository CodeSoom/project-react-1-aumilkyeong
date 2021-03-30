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
      strengthwork: {
        selected: {
          pullup: 'pullup',
          squat: 'squat',
          dip: 'dip',
          hinge: 'singleLeggedDeadlift',
          row: 'horizontalRow',
          pushup: 'pushup',
        },
        progressions: {
          pullup: [
            'scapularPull',
            'archHang',
            'negativePullup',
            'pullup',
            'weightedPullup',
          ],
          squat: [
            'assistedSquat',
            'squat',
            'splitSquat',
            'bulgarianSplitSquat',
            'shrimpSquat',
          ],
          dip: [
            'supportHold',
            'negativeDip',
            'dip',
            'weightedDip',
          ],
          hinge: [
            'romanianDeadlift',
            'singleLeggedDeadlift',
            'negativeBandedNordicCurl',
            'bandedNordicCurl',
            'nordicCurl',
          ],
          row: [
            'verticalRow',
            'inclineRow',
            'horizontalRow',
            'wideRow',
            'weightedInvertedRow',
          ],
          pushup: [
            'verticalPushup',
            'inclinePushup',
            'pushup',
            'diamondPushup',
            'pseudoPlanchePushup',
          ],
        },
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
    setSelectedStrengthwork(state, { payload: { progression, exercise } }) {
      return {
        ...state,
        setting: {
          ...state.setting,
          strengthwork: {
            ...state.setting.strengthwork,
            selected: {
              ...state.setting.strengthwork.selected,
              [progression]: exercise,
            },
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
