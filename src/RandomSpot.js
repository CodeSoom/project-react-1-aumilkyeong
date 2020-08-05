const coordinates = {
  korea: {
    MIN_LATITUDE: 33.10000000,
    MAX_LATUTUDE: 38.45000000,
    MIN_LONGITUDE: 125.06666667,
    MAX_LONGITUDE: 131.87222222,
  },
};

export function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomLatitude(country) {
  const min = coordinates[country].MIN_LATITUDE;
  const max = coordinates[country].MAX_LATUTUDE;
  return getRandomBetween(min, max);
}

export function getRandomLongitude(country) {
  const min = coordinates[country].MIN_LONGITUDE;
  const max = coordinates[country].MAX_LONGITUDE;
  return getRandomBetween(min, max);
}

export function getRandomSpot(country) {
  return {
    latitude: getRandomLatitude(country),
    longitude: getRandomLongitude(country),
  };
}

export default coordinates;
