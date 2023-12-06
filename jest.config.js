// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFiles: ['<rootDir>/src/__tests__/acceptance/users.tests.ts'],
    testMatch: ['<rootDir>/src/__tests__/acceptance/users.tests.ts'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };
  