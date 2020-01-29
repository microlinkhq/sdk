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
  return typeof selector === 'string'
    ? document.querySelectorAll(selector)
    : [].concat(selector).filter(Boolean)
}

function forEach (list, fn) {
  for (let i = 0; i < list.length; i++) fn(list[i])
}

function microlink (selector, opts) {
  return forEach(getDOMSelector(selector), function (el) {
    var wrap = document.createElement('div')
    el.parentNode.insertBefore(wrap, el)

    ReactDOM.render(
      React.createElement(
        Microlink,
        Object.assign(
          {
            url: el.getAttribute('href')
          },
          opts,
          parseObject(el.dataset)
        )
      ),
      wrap
    )

    el.remove()
  })
}

microlink.version = '__VERSION__'

export default microlink
