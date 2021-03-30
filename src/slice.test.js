import reducer, {
  toggleWarmup,
  setSelectedStrengthwork,
} from './slice';

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

test('setSelectedStrengthwork', () => {
  const initialState = {
    setting: {
      strengthwork: {
        foo: 'foo',
        bar: 'bar',
      },
    },
  };

  const state = reducer(initialState, setSelectedStrengthwork({
    category: 'foo',
    exercise: 'some exercise',
  }));

  expect(state.setting.strengthwork.foo).toBe('some exercise');
  expect(state.setting.strengthwork.bar).toBe('bar');
});
