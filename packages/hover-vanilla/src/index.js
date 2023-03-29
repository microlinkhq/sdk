import MicrolinkHover from '@microlink/hover-react'
import localhostUrl from 'localhost-url-regex'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import React from 'react'

function toArray (selector) {
  const collection = Array.from(
    typeof selector === 'string'
      ? document.querySelectorAll(selector)
      : selector
  )

  return collection
    .map(el => {
      el.href = new URL(el.href).toString()
      return el
    })
    .filter(el => el.href.startsWith('http') && !localhostUrl().test(el.href))
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
    acc[key] = parseJSON(obj[key])
    return acc
  }, {})
}

function microlink (selector, opts, rootNode) {
  return toArray(selector).forEach(function (el) {
    ReactDOM.render(
      React.createElement(
        MicrolinkHover.withHover,
        Object.assign(
          {
            LinkComponent: styled('a')``,
            as: 'div',
            children: el.text,
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
