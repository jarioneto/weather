module.exports = {
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/pages/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
  moduleNameMapper: {
    '~/components/(.+)': '<rootDir>/src/components/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};
