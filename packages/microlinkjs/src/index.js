'use strict'

const qa = require('dom101/query-selector-all')
const ReactDOM = require('react-dom')
const each = require('dom101/each')
const React = require('react')

const {default: MicrolinkCard} = require('react-microlink')

const BOOLEAN_STRINGS = ['true', 'false']

const getBoolean = str => str === 'true'
const isStringBoolean = str => BOOLEAN_STRINGS.includes(str)

const getDataAttributes = el => Object.keys(el.dataset).reduce((acc, key) => {
  const value = el.dataset[key]
  acc[key] = isStringBoolean(value) ? getBoolean(value) : value
  return acc
}, {})

module.exports = (selector, {is = 'div', ...opts} = {}) => (
  each(qa(selector), el => {
    const url = el.getAttribute('href')
    const params = { url, is, ...opts, ...getDataAttributes(el) }
    const card = React.createElement(MicrolinkCard, params)
    ReactDOM.render(card, el)
  })
)
