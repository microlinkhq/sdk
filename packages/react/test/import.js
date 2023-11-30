import { expect, test } from 'vitest'

import sdk, { getApiUrl, fetchFromApi, imageProxy } from '../dist/microlink.cjs'

test('import', () => {
  expect(typeof sdk).toBe('function')
  expect(typeof getApiUrl).toBe('function')
  expect(typeof fetchFromApi).toBe('function')
  expect(typeof imageProxy).toBe('function')
})
