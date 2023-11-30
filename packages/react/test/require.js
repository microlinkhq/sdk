import { expect, test } from 'vitest'

test('require', () => {
  const sdk = require('..')
  expect(typeof sdk.fetchFromApi).toBe('function')
  expect(typeof sdk.getApiUrl).toBe('function')
  expect(typeof sdk.imageProxy).toBe('function')
  expect(typeof sdk.default).toBe('function')
})
