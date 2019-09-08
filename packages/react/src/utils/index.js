/* global fetch */

import { css } from 'styled-components'

const REGEX_HTTPS = /^https/
const REGEX_LOCALHOST = /http:\/\/localhost/

const isSSR = typeof window === 'undefined'

export const isFunction = fn => typeof fn === 'function'

export const isObject = obj => typeof obj === 'object'

export const isNil = value => value == null

export const getUrlPath = data => (isObject(data) ? data.url : data)

export const someProp = (data, props) =>
  data[props.find(prop => !isNil(data[prop]))]

export const media = {
  mobile: (...args) => css`
    @media (max-width: 48em) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 48em) {
      ${css(...args)};
    }
  `
}

const apiValue = (key, value) => (value === true ? `${key}` : `${key}=${value}`)

export const defaultApiParameters = {
  contrast: false,
  prerender: 'auto',
  screenshot: false,
  video: false
}

export const createApiUrl = props => {
  const { apiKey, url: targetUrl, prerender, contrast, media } = props
  const takeScreenshot = media.includes('screenshot')
  const hasVideo = media.includes('video')

  const alias = apiKey ? 'pro' : 'api'
  let url = `https://${alias}.microlink.io/?url=${encodeURIComponent(
    targetUrl
  )}`

  if (hasVideo) {
    url = `${url}&${apiValue('video', hasVideo)}`
  }

  if (!isNil(contrast) && contrast !== defaultApiParameters.contrast) {
    url = `${url}&${apiValue('palette', contrast)}`
  }

  if (!isNil(prerender) && prerender !== defaultApiParameters.prerender) {
    url = `${url}&${apiValue('prerender', prerender)}`
  }

  if (takeScreenshot) {
    url = `${url}&${apiValue('screenshot', takeScreenshot)}`
  }

  return url
}

export const fetchFromApiUrl = (apiUrl, { apiKey }) => {
  const headers = apiKey ? { 'x-api-key': apiKey } : {}
  return fetch(apiUrl, { headers }).then(res => res.json())
}

export const isLarge = cardSize => cardSize === 'large'

export const isMini = cardSize => cardSize === 'mini'

export const imageProxy = url => {
  if (!url || REGEX_LOCALHOST.test(url) || REGEX_HTTPS.test(url)) return url
  return `https://images.weserv.nl/?url=${encodeURIComponent(url).replace(
    'http://',
    ''
  )}`
}

export const isLazySupported = !isSSR && 'IntersectionObserver' in window
