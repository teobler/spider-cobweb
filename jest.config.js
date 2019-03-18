// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ['default'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'd.ts'],
  moduleDirectories: ['node_modules', 'include'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/file-mock.js',
    '\\.svg$': 'jest-transform-stub',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.spec.(js|jsx|ts|tsx)'],
  transform: {
    '^.spec+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': '<rootDir>test/transform.ts',
  },
  setupFilesAfterEnv: ['<rootDir>test/setupTests.ts'],
};
