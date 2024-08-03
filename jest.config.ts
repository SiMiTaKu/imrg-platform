module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@model/(.*)$': '<rootDir>/src/model/$1',
    '^@images/(.*)$': '<rootDir>/src/images/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1'
  }
};