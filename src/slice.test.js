import reducer, {
  setRandomSpot,
  setCoordinates,
} from './slice';

describe('reducer', () => {
  describe('setRandomSpot', () => {
    it('changes RandomSpot', () => {
      const initialState = {
        randomSpot: null,
      };
      const randomSpot = [
        { latitude: 0, longitude: 0 },
      ];
      const state = reducer(initialState, setRandomSpot(randomSpot));

      expect(state.randomSpot).toBe(randomSpot);
    });
  });

  describe('setCoordinates', () => {
    it('changes coordinates', () => {
      const initialState = {
        coordinates: null,
      };
      const coordinates = [
        { lat: 0, lng: 0 },
      ];
      const state = reducer(initialState, setCoordinates(coordinates));

      expect(state.coordinates).toBe(coordinates);
    });
  });
});
