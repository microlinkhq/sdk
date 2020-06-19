import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import MicrolinkHover from '@microlink/hover-react'
import isLocalhostUrl from 'is-localhost-url'

function getDOMSelector (selector) {
  return Array.prototype.slice
    .call(
      typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : selector
    )
    .map(el => {
      el.href = new URL(el.href).toString()
      return el
    })
    .filter(el => !isLocalhostUrl(el.href))
}

function forEach (list, fn) {
  for (let i = 0; i < list.length; i++) fn(list[i])
}

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

function microlink (selector, opts, rootNode) {
  return forEach(getDOMSelector(selector), function (el) {
    ReactDOM.render(
      React.createElement(
        MicrolinkHover.withHover,
        Object.assign(
          {
            LinkComponent: styled('a')``,
            as: 'div',
            children: el.text,
            url: el.getAttribute('href'),
            media: ['iframe', 'video', 'audio', 'image', 'logo']
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
