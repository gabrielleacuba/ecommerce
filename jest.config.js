module.exports = {
  testEnvironment: 'jsdom', //Fala nosso ambiente de teste, como usarei o browser, ele vai tentar simular
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //pastas que ele deve ignorar
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
