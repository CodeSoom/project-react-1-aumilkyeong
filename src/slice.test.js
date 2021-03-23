import steps from './data/steps';
import reducer, {
  setStep,
} from './slice';

describe('slice', () => {
  describe('setStep', () => {
    it('changes step by path', () => {
      const state = reducer({
        step: {},
        steps: [
          {
            path: '/',
            prevPath: '',
            nextPath: '',
            buttonText: '',
          },
          {
            path: '/foo',
            prevPath: '',
            nextPath: '',
            buttonText: '',
          },
        ],
      }, setStep('/foo'));

      expect(state.step.path).toBe('/foo');
    });
  });
});
