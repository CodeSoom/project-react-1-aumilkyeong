import reducer, {
  setCheckInMode,
  setWorkoutMode,
  setCheckOutMode,
} from './slice';

describe('slice', () => {
  describe('setCheckInMode', () => {
    it('changes mode to check-in', () => {
      const state = reducer({
        mode: 'initial',
      }, setCheckInMode());

      expect(state.mode).toBe('check-in');
    });
  });

  describe('setWorkoutMode', () => {
    it('changes mode to workout', () => {
      const state = reducer({
        mode: 'initial',
      }, setWorkoutMode());

      expect(state.mode).toBe('workout');
    });
  });

  describe('setCheckOutMode', () => {
    it('changes mode to check-out', () => {
      const state = reducer({
        mode: 'initial',
      }, setCheckOutMode());

      expect(state.mode).toBe('check-out');
    });
  });
});
