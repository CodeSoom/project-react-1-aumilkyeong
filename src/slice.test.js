import reducer, { toggleWarmup } from './slice';

test('toggleWarmup', () => {
  const initialState = {
    setting: {
      warmup: {
        foo: false,
        bar: false,
      },
    },
  };

  const state = reducer(initialState, toggleWarmup({ exercise: 'foo' }));

  expect(state.setting.warmup.foo).toBe(true);
  expect(state.setting.warmup.bar).toBe(false);
});
