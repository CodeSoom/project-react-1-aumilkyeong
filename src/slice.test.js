import reducer, {
  setWarmup,
  setStrengthwork,
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
