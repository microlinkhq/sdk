/* global test, expect */

'use strict'

test('require resolve sucesfully', () => {
  const sdk = require('..')
  expect(typeof sdk.fetchFromApi).toBe('function')
  expect(typeof sdk.getApiUrl).toBe('function')
  expect(typeof sdk.imageProxy).toBe('function')
  expect(typeof sdk.default).toBe('function')
})
