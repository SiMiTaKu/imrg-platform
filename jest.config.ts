module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^\\$model/(.*)$': '<rootDir>/src/model/$1',
    '^\\$images/(.*)$': '<rootDir>/src/images/$1',
    '^\\$lib/(.*)$': '<rootDir>/src/lib/$1',
    '^\\$views/(.*)$': '<rootDir>/src/views/$1',
    '^\\$amplify/(.*)$': '<rootDir>/src/amplify/$1',
    '^\\$shared/(.*)$': '<rootDir>/src/shared/$1'
  }
};