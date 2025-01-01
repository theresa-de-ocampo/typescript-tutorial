import type { Config } from 'jest'

export default async (): Promise<Config> => {
  return {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testMatch: ['**/*.test.ts'],
    testTimeout: 15_000
  }
}
