import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  verbose: true,

  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
}

export default createJestConfig(config)
