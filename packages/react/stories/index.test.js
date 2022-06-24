/* global jest */

import initStoryshots from '@storybook/addon-storyshots'
import { Headers, Request, Response } from 'node-fetch'

import 'jest-styled-components'

jest.mock('@microlink/mql', () =>
  require('@microlink/mql/' + require('@microlink/mql/package.json').browser)
)

if (!globalThis.Headers) {
  globalThis.Headers = Headers
}

if (!globalThis.Request) {
  globalThis.Request = Request
}

if (!globalThis.Response) {
  globalThis.Response = Response
}

initStoryshots()
