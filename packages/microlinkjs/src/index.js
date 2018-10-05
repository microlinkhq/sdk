'use strict'

const qa = require('dom101/query-selector-all')
const ReactDOM = require('react-dom')
const each = require('dom101/each')
const React = require('react')

const pkg = require('../package.json')

const { default: MicrolinkCard } = require('react-microlink')

const BOOLEAN_STRINGS = ['true', 'false']

const DEFAULT_OPTS = {
  is: 'div'
}

const getBoolean = str => str === 'true'
const isStringBoolean = str => BOOLEAN_STRINGS.includes(str)

const getDataAttributes = el =>
  Object.keys(el.dataset).reduce((acc, key) => {
    const value = el.dataset[key]
    acc[key] = isStringBoolean(value) ? getBoolean(value) : value
    return acc
  }, {})

const getDOMSelector = selector =>
  typeof selector === 'string' ? qa(selector) : [].concat(selector)

module.exports = (selector, opts) => {
  opts = Object.assign({}, DEFAULT_OPTS, opts)

  return each(getDOMSelector(selector), el => {
    const url = el.getAttribute('href')
    const params = Object.assign({ url }, opts, getDataAttributes(el))
    const card = React.createElement(MicrolinkCard, params)
    ReactDOM.render(card, el)
  })
}

module.exports.version = pkg.version
