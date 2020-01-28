import { addParameters } from '@storybook/vue'
import Vue from 'vue'

import Microlink from '../src'

Vue.use(Microlink)

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
