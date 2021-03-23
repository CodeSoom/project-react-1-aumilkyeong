import reducer, {
  setMode,
} from './slice';

describe('slice', () => {
  describe('setMode', () => {
    it('changes mode', () => {
      const state = reducer({
        mode: 'initial',
      }, setMode('test mode'));

      expect(state.mode).toBe('test mode');
    });
  });
});
