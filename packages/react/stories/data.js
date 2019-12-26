'use strict'

import demoLinks from '@microlink/demo-links'
import { pick, chain } from 'lodash'

const { NODE_ENV } = process.env

const isTesting = NODE_ENV === 'test'

const getData = (fn, pickProp) =>
  chain(isTesting ? pick(demoLinks, pickProp) : demoLinks)
    .toPairs()
    .filter(fn)
    .take(NODE_ENV === 'test' ? 1 : Infinity)
    .map('1.url')
    .value()
    .sort()

export const urls = getData(
  ([name, link]) => !link.audio && !link.video,
  'Apple'
)
export const urlsVideo = getData(([name, link]) => link.video, 'Facebook')
export const urlsAudio = getData(([name, link]) => link.audio, 'Spotify')
export const urlsIframe = getData(([name, link]) => link.iframe, 'Twitter')
