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
        selected: {
          foo: 'foo',
          bar: 'bar',
        },
      },
    },
  };

  const state = reducer(initialState, setSelectedStrengthwork({
    progression: 'foo',
    exercise: 'some exercise',
  }));

  expect(state.setting.strengthwork.selected.foo).toBe('some exercise');
  expect(state.setting.strengthwork.selected.bar).toBe('bar');
});
