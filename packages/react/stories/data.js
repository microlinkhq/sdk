'use strict'

const demoLinks = require('@microlink/demo-links')
const { chain } = require('lodash')

const getData = (fn) => chain(demoLinks)
  .toPairs()
  .filter(fn)
  .sortBy(([name, link]) => name)
  .take(3)
  .fromPairs()
  .map('url')
  .value()

exports.urls = getData(([name, link]) => !link.audio && !link.video)
exports.urlsVideo = getData(([name, link]) => link.video)
exports.urlsAudio = getData(([name, link]) => link.audio)
