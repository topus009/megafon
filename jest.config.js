module.exports = {
  setupTestFrameworkScriptFile: './tests/setupTests.js',
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/public/',
    '/bundle-report/',
    '/src/',
    '/tests/testHelpers.js',
    '/tests/setupTests.js',
    '/tests/tests-cache/',
  ],
  globals: {
    dev: true,
  },
  cacheDirectory: 'tests/tests-cache',
  testMatch: ['**/tests/**/*.js?(x)'],
};
