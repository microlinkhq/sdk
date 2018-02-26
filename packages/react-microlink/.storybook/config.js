import { setAddon, configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx'

function loadStories() {
  require('../stories')
}

setOptions({
  name: 'microlinkjs',
  url: 'https://github.com/microlinkhq/microlinkjs',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  sortStoriesByKind: false
})

setAddon(JSXAddon)

configure(loadStories, module)
