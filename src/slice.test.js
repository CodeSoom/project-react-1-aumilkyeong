import reducer, {
  setWarmup,
  setStrengthwork,
  setWarmupRecord,
  setStrengthworkRecord,
} from './slice';

test('setWarmup', () => {
  const initialState = {
    setting: {
      warmup: {
        foo: false,
        bar: false,
      },
    },
  };

  const state = reducer(initialState, setWarmup({ exercise: 'foo' }));

  expect(state.setting.warmup.foo).toBe(true);
  expect(state.setting.warmup.bar).toBe(false);
});

test('setStrengthwork', () => {
  const initialState = {
    setting: {
      strengthwork: {
        foo: 'foo',
        bar: 'bar',
      },
    },
  };

  const state = reducer(initialState, setStrengthwork({
    category: 'foo',
    exercise: 'some exercise',
  }));

  expect(state.setting.strengthwork.foo).toBe('some exercise');
  expect(state.setting.strengthwork.bar).toBe('bar');
});

test('setWarmupRecord', () => {
  const initialState = {
    record: {
      warmup: {
        bar: 0,
      },
    },
  };

  const state = reducer(initialState, setWarmupRecord({
    exercise: 'foo',
    reps: 99,
  }));

  expect(state.record.warmup.foo).toBe(99);
  expect(state.record.warmup.bar).toBe(0);
});

test('setStrengthworkRecord', () => {
  const initialState = {
    record: {
      strengthwork: {
        pullup: {
          level: 0,
          exercise: 'foo',
          reps: [],
        },
        squat: {
          level: 0,
          exercise: 'bar',
          reps: [],
        },
      },
    },
  };

  const state = reducer(initialState, setStrengthworkRecord({
    category: 'pullup',
    reps: [8, 8, 8],
  }));

  expect(state.record.strengthwork.pullup.reps).toStrictEqual([8, 8, 8]);
  expect(state.record.strengthwork.squat).toStrictEqual(initialState.record.strengthwork.squat);
});
