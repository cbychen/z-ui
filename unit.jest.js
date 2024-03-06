
module.exports = {

  verbose:true,
  testEnvironment:'jsdom',
  setupFiles:['./tests/setup.js'],
  testMatch:['**/unit/**/*.(spec|test).(js|ts|jsx|tsx)'],
  collectCoverage:true,
  collectCoverageFrom:[

    'components/**/*.{js|jsx|ts|tsx}',
    '!components/**/*.stories.{js|jsx|ts|tsx}',
    '!components/**/*.spec.{js|jsx|ts|tsx}',
  ]
}