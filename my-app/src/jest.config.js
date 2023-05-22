module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/fileMock.js',
  },
  testEnvironment: 'jsdom',
};
