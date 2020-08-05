import {
  getRandomBetween,
  getRandomLongitude,
  getRandomLatitude,
  getRandomSpot,
} from './RandomSpot';

test('getRandomBetween', () => {
  const min = 0.1;
  const max = 0.2;
  const result = getRandomBetween(min, max);

  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThan(max);
});

test('getRandomLongitude', () => {
  const result = getRandomLongitude('korea');

  // TODO: coordinates 객체 export 문제 해결
  expect(result).toBeGreaterThanOrEqual(125.06666667);
  expect(result).toBeLessThan(131.87222222);
});

test('getRandomLatitude', () => {
  const result = getRandomLatitude('korea');

  // TODO: coordinates 객체 export 문제 해결
  expect(result).toBeGreaterThanOrEqual(33.10000000);
  expect(result).toBeLessThan(38.45000000);
});

test('getRandomSpot', () => {
  const { latitude, longitude } = getRandomSpot('korea');

  // TODO: coordinates 객체 export 문제 해결
  expect(latitude).toBeGreaterThanOrEqual(33.10000000);
  expect(latitude).toBeLessThan(38.45000000);
  expect(longitude).toBeGreaterThanOrEqual(125.06666667);
  expect(longitude).toBeLessThan(131.87222222);
});
