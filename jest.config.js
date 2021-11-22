/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  roots: ['./src'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(ts|js)x?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  moduleFileExtensions: ['vue', 'js', 'ts'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: '../../coverage',
}
