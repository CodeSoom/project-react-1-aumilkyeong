import reducer, {
  setMode,
  setGuidance,
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

  describe('setGuidance', () => {
    it('changes guidance', () => {
      const state = reducer({
        guidance: '',
      }, setGuidance('test guidance'));

      expect(state.guidance).toBe('test guidance');
    });
  });
});
