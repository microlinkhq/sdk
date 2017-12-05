'use strict'

const qa = require('dom101/query-selector-all')
const ReactDOM = require('react-dom')
const each = require('dom101/each')
const React = require('react')

const {default: MicrolinkCard} = require('./index.js')

module.exports = (selector, {is = 'div', ...opts} = {}) => (
  each(qa(selector), el => {
    const url = el.getAttribute('href')
    const params = { url, is, ...opts }
    const card = React.createElement(MicrolinkCard, params)
    ReactDOM.render(card, el)
  })
)
