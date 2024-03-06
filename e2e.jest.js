
module.exports = {

  verbose:true,
  testEnvironment:'jest-environment-puppeteer',
  setupFiles:['./tests/setup.js'],
  testMatch:['**/e2e/**/*.(spec|test).(js|ts|jsx|tsx)'],
  preset:'jest-puppeteer'
}