import coordinates, {
  getRandomBetween,
  makeRandomLongitude,
  makeRandomLatitude,
  makeRandomSpot,
} from './RandomSpot';

test('getRandomBetween', () => {
  const min = 0.1;
  const max = 0.2;
  const result = getRandomBetween(min, max);

  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThan(max);
});

test('makeRandomLongitude', () => {
  const result = makeRandomLongitude('korea');

  expect(result).toBeGreaterThanOrEqual(coordinates.korea.MIN_LONGITUDE);
  expect(result).toBeLessThan(coordinates.korea.MAX_LONGITUDE);
});

test('makeRandomLatitude', () => {
  const result = makeRandomLatitude('korea');

  expect(result).toBeGreaterThanOrEqual(coordinates.korea.MIN_LATITUDE);
  expect(result).toBeLessThan(coordinates.korea.MAX_LATITUDE);
});

test('makeRandomSpot', () => {
  const { latitude, longitude } = makeRandomSpot('korea');

  expect(latitude).toBeGreaterThanOrEqual(coordinates.korea.MIN_LATITUDE);
  expect(latitude).toBeLessThan(coordinates.korea.MAX_LATITUDE);
  expect(longitude).toBeGreaterThanOrEqual(coordinates.korea.MIN_LONGITUDE);
  expect(longitude).toBeLessThan(coordinates.korea.MAX_LONGITUDE);
});
