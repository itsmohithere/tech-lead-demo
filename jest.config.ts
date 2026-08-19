import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.jest.json',
      },
    ],
  },

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.tsx'],

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.ts',
  },

  clearMocks: true,

  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/main.tsx',
    '!src/tokens/**',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/index.ts',
    '!src/setupTests.ts',
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
