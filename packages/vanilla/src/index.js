import React from 'react'
import ReactDOM from 'react-dom'
import Microlink from '@microlink/react'

const DEFAULT_OPTS = {
  as: 'div'
}

const parse = value => {
  try {
    return JSON.parse(value)
  } catch (err) {
    return value
  }
}

const parseObj = obj =>
  Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, [key]: parse(obj[key]) }),
    {}
  )

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
        ...parseObj(el.dataset)
      }),
      el
    )
  )

microlink.version = '__VERSION__'

export default microlink
