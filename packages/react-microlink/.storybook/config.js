/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

function loadStories () {
  require('../stories')
}

setOptions({ showDownPanel: false })

configure(loadStories, module)
