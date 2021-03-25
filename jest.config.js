module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
