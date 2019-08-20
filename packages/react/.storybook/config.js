import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

function loadStories () {
  require('../stories')
}

addDecorator(withA11y)

addParameters({
  options: {
    theme: {
      brandTitle: 'Microlink SDK',
      brandUrl: 'https://github.com/microlinkhq/sdk',
      brandImage: 'https://cdn.microlink.io/logo/large.png'
    },
    enableShortcuts: false
  },
  a11y: {
    options: {
      restoreScroll: true
    }
  }
})

configure(loadStories, module)
