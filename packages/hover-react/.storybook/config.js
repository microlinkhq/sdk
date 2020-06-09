import { configure, addParameters } from '@storybook/react'

function loadStories () {
  require('../stories')
}

addParameters({
  options: {
    theme: {
      brandTitle: 'Microlink SDK',
      brandUrl: 'https://github.com/microlinkhq/sdk',
      brandImage: 'https://cdn.microlink.io/logo/large.png'
    },
    enableShortcuts: false
  }
})

configure(loadStories, module)
