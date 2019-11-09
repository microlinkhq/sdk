'use strict'

import demoLinks from '@microlink/demo-links'
import filter from 'lodash/filter'

export const urls = filter(demoLinks, link => !link.audio && !link.video).map(
  link => link.url
)
export const urlsVideo = filter(demoLinks, link => link.video).map(
  link => link.url
)
export const urlsAudio = filter(demoLinks, link => link.audio).map(
  link => link.url
)
