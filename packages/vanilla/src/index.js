import Microlink from '@microlink/react'
import { createRoot } from 'react-dom'
import React from 'react'

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
    createRoot(rootNode || el).render(
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
      )
    )
  })
}

microlink.version = '__VERSION__'

export default microlink
