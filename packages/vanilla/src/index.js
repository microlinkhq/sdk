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
    : [].concat(selector).filter(Boolean)

const forEach = (list, fn) => {
  for (let i = 0; i < list.length; i++) fn(list[i])
}

const microlink = (selector, opts) =>
  forEach(getDOMSelector(selector), el =>
    ReactDOM.render(
      React.createElement(Microlink, {
        url: el.getAttribute('href'),
        ...{ ...DEFAULT_OPTS, ...opts },
        ...getDataAttributes(el)
      }),
      el
    )
  )

microlink.version = '__VERSION__'

export default microlink
