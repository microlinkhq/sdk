'use strict'

const qa = require('dom101/query-selector-all')
const each = require('dom101/each')

const React = require('react')
const ReactDOM = require('react-dom')
const MicrolinkCard = require('./index.js').default

module.exports = (selector, opts) => (
  each(qa(selector), el => {
    const url = el.getAttribute('href')

    ReactDOM.render(
      React.createElement(MicrolinkCard, { url }),
      el
    )
  })
)
