const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/helpers/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/'
  ],
  coverageThreshold: {global: {
    branches: 85,
    functions: 85,
    lines: 85,
    statements: 85
  }},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/svg/svg-mock.js',
    '\\.module.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '^.+\\.(css|less|scss)$': '<rootDir>/node_modules/jest-css-modules',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {'^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }]},
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/react',
    '<rootDir>/node_modules/contentful',
    '<rootDir>/node_modules/next/document'
  ]
};
