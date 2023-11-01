export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '\\.(jpg|jpeg|png|gif|svg)$': 'jest-file-loader',
    },
  };
  