/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/pages/**/*.{js,jsx,ts,tsx}',
    '!src/types/**',
    '!src/config/**',
    '!src/styles/**',
    '!src/components/**/index.ts',
    '!src/components/Icons/**',
    '!**/*.d.ts'
  ],
  coverageThreshold: {
    global: {
      branchs: 89,
      functions: 100,
      lines: 98,
      statements: 98
    }
  },
  moduleNameMapper: {
    '^components/(.+)': '<rootDir>/src/components/$1',
    '^hooks/(.+)': '<rootDir>/src/hooks/$1',
    '^utils/(.+)': '<rootDir>/src/utils/$1',
    '^services/(.+)': '<rootDir>/src/services/$1',
    '^config/(.+)': '<rootDir>/src/config/$1',
    '^styles/(.+)': '<rootDir>/src/styles/$1',
    '^styles': '<rootDir>/src/styles',
    '^types/(.+)': '<rootDir>/src/types/$1',
    '^types': '<rootDir>/src/types'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};

module.exports = createJestConfig(customJestConfig);
