import { configure, addParameters } from '@storybook/react'

function loadStories () {
  require('../stories')
}

addParameters({
  options: {
    name: 'Microlink SDK',
    url: 'https://github.com/microlinkhq/sdk',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    sortStoriesByKind: false
  }
})

configure(loadStories, module)
