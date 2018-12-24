import { css } from 'styled-components'

const REGEX_HTTPS = /^https/
const REGEX_LOCALHOST = /http:\/\/localhost/

export const isFunction = fn => typeof fn === 'function'

export const isObject = obj => typeof obj === 'object'

export const isNil = value => value == null

export const getUrlPath = data => (data && isObject(data) ? data.url : data)

export const someProp = (data, props) =>
  data[props.find(prop => data[prop] !== null && data[prop] !== undefined)]

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
  video: false,
  contrast: false,
  screenshot: false,
  prerender: 'auto'
}

export const createApiUrl = props => {
  const {
    apiKey,
    url: targetUrl,
    screenshot,
    prerender,
    contrast,
    video
  } = props
  const alias = apiKey ? 'pro' : 'api'
  let url = `https://${alias}.microlink.io/?url=${encodeURIComponent(
    targetUrl
  )}`
  if (!isNil(video)) url = `${url}&${apiValue('video', video)}`
  if (!isNil(contrast) && contrast !== defaultApiParameters.contrast) {
    url = `${url}&${apiValue('palette', contrast)}`
  }
  if (!isNil(prerender) && prerender !== defaultApiParameters.prerender) {
    url = `${url}&${apiValue('prerender', prerender)}`
  }
  if (!isNil(screenshot) && screenshot !== defaultApiParameters.screenshot) {
    url = `${url}&${apiValue('screenshot', screenshot)}`
  }
  return url
}

export const fetchFromApiUrl = ({ apiKey, apiUrl }) => {
  const headers = apiKey ? { 'x-api-key': apiKey } : {}
  return fetch(apiUrl, { headers }).then(res => res.json())
}

export const fetchFromApi = props => {
  const apiUrl = createApiUrl(props)
  return fetchFromApiUrl({ apiUrl, ...props })
}

export const isLarge = cardSize => cardSize === 'large'

export const imageProxy = url => {
  if (!url || REGEX_LOCALHOST.test(url) || REGEX_HTTPS.test(url)) return url
  return `https://images.weserv.nl/?url=${encodeURIComponent(url).replace(
    'http://',
    ''
  )}`
}
