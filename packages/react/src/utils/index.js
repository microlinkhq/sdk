import { css } from 'styled-components'
import mql from '@microlink/mql'

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

export const getApiUrl = ({
  apiKey,
  url,
  prerender = 'auto',
  contrast = false,
  media,
  ...opts
}) =>
  mql.getApiUrl(url, {
    apiKey,
    video: media.includes('video'),
    screenshot: media.includes('screenshot'),
    palette: contrast,
    prerender,
    ...opts
  })

export const fetchFromApi = mql.fetchFromApi

export const isLarge = cardSize => cardSize === 'large'

export const isSmall = cardSize => cardSize === 'small'

export const imageProxy = url => {
  if (!url || REGEX_LOCALHOST.test(url) || REGEX_HTTPS.test(url)) return url
  return `https://images.weserv.nl/?url=${encodeURI(url).replace(
    'http://',
    ''
  )}`
}

export const isLazySupported = !isSSR && 'IntersectionObserver' in window
