/* global jest */

import initStoryshots from '@storybook/addon-storyshots'
import 'jest-styled-components'

jest.mock('@microlink/mql', () =>
  require('@microlink/mql/' + require('@microlink/mql/package.json').browser)
)

initStoryshots()
