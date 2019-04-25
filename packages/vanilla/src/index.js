import React from 'react'
import ReactDOM from 'react-dom'
import Microlink from '@microlink/react'

const BOOLEAN_STRINGS = ['true', 'false']

const DEFAULT_OPTS = {
  as: 'div'
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
  typeof selector === 'string'
    ? document.querySelectorAll(selector)
    : [].concat(selector)

const microlink = (selector, opts) => {
  opts = { ...DEFAULT_OPTS, ...opts }
  const selectors = getDOMSelector(selector)

  for (let index = 0; index < selectors.length; index++) {
    const el = selectors[index]
    const url = el.getAttribute('href')

    return ReactDOM.render(
      React.createElement(Microlink, {
        url,
        ...opts,
        ...getDataAttributes(el)
      }),
      el
    )
  }
}

microlink.version = '__VERSION__'

export default microlink
