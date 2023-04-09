import React from 'react'
import ReactDOM from 'react-dom'
import Microlink from '@microlink/react'

function parseJSON (value) {
  try {
    return JSON.parse(value)
  } catch (err) {
    return value
  }
}

function parseObject (obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    acc[key] = parseJSON(obj[key])
    return acc
  }, {})
}

function toArray (input) {
  return (
    typeof input === 'string'
      ? Array.from(document.querySelectorAll(input))
      : [].concat(input)
  ).filter(Boolean)
}

function microlink (selector, opts, rootNode) {
  return toArray(selector).forEach(function (el) {
    el.classList.add('microlink_vanilla')

    ReactDOM.render(
      React.createElement(
        Microlink,
        Object.assign(
          {
            as: 'div',
            url: el.getAttribute('href')
          },
          opts,
          parseObject(el.dataset)
        )
      ),
      rootNode || el
    )
  })
}

microlink.version = '__VERSION__'

export default microlink
