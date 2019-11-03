'use strict'

import demoLinks from '@microlink/demo-links'
import chain from 'lodash/chain'

export const urls = chain(demoLinks)
  .filter(link => !link.audio && !link.video)
  .map('url')
  .value()

export const urlsVideo = chain(demoLinks)
  .filter('video')
  .map('url')
  .value()

export const urlsAudio = chain(demoLinks)
  .filter('audio')
  .map('url')
  .value()
