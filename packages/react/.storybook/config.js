import { setAddon, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx'

function loadStories() {
  require('../stories')
}

withOptions({
  name: 'Microlink SDK',
  url: 'https://github.com/microlinkhq/sdk',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  sortStoriesByKind: false
})

setAddon(JSXAddon)

configure(loadStories, module)
