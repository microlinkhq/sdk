'use strict'

import demoLinks from '@microlink/demo-links'
import filter from 'lodash/filter'
import take from 'lodash/take'

export const urls = take(
  filter(demoLinks, link => !link.audio && !link.video).map(link => link.url),
  3
)
export const urlsVideo = take(
  filter(demoLinks, link => link.video).map(link => link.url),
  3
)
export const urlsAudio = take(
  filter(demoLinks, link => link.audio).map(link => link.url),
  3
)
