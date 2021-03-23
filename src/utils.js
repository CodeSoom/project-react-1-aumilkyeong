export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function getStepByPath(path) {
  return (steps) => steps.find((step) => step.path === path);
}
