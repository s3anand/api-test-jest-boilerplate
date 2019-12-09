const { defaults } = require('jest-config')

module.exports = {
  verbose: false,
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  reporters: [
    'default',
    [
      'jest-stare',
      {
        resultDir: 'results/jest-stare',
        reportTitle: 'jest-stare!',
        additionalResultsProcessors: ['jest-html-reporter'],
        coverageLink: '../../coverage/lcov-report/index.html',
        jestStareConfigJson: 'jest-stare.json',
        jestGlobalConfigJson: 'globalStuff.json',
        log: true,
      },
    ],
    [
      './node_modules/jest-html-reporter',
      {
        outputPath: 'results/jest-html-reporter/report.html',
        pageTitle: 'Std Specs Test Report',
        includeConsoleLog: true,
        includeFailureMsg: true,
        // theme: 'darkTheme',
      },
    ],
  ],
  // testResultsProcessor: './node_modules/jest-stare',
  setupFilesAfterEnv: ['<rootDir>/setupFile.ts'],
}
