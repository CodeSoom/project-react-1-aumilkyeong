const coordinates = {
  korea: {
    MIN_LATITUDE: 35.149347,
    MAX_LATITUDE: 37.722827,
    MIN_LONGITUDE: 126.701291,
    MAX_LONGITUDE: 129.039760,
  },
};

export function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export function makeRandomLatitude(country) {
  const min = coordinates[country].MIN_LATITUDE;
  const max = coordinates[country].MAX_LATITUDE;
  return getRandomBetween(min, max);
}

export function makeRandomLongitude(country) {
  const min = coordinates[country].MIN_LONGITUDE;
  const max = coordinates[country].MAX_LONGITUDE;
  return getRandomBetween(min, max);
}

export function makeRandomSpot(country) {
  return {
    lat: makeRandomLatitude(country),
    lng: makeRandomLongitude(country),
  };
}

export default coordinates;
