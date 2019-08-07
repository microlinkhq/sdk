import { configure, addParameters } from '@storybook/react'

function loadStories () {
  require('../stories')
}

addParameters({
  options: {
    theme: {
      brandTitle: 'Microlink SDK',
      brandUrl: 'https://github.com/microlinkhq/sdk'
    },
    enableShortcuts: false
  }
})

configure(loadStories, module)
