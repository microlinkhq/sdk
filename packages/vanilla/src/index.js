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
    return Object.assign(acc, { [key]: parseJSON(obj[key]) })
  }, {})
}

function getDOMSelector (selector) {
  return Array.prototype.slice.call(
    typeof selector === 'string'
      ? document.querySelectorAll(selector)
      : selector
  )
}

function forEach (list, fn) {
  for (let i = 0; i < list.length; i++) fn(list[i])
}

function microlink (selector, opts, rootNode) {
  return forEach(getDOMSelector(selector), function (el) {
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
