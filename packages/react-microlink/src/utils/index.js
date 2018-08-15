import { css } from 'styled-components'

export const getUrlPath = data =>
  data && typeof data === 'object' ? data.url : data

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

export const createApiUrl = props => {
  const { apiKey, url: targetUrl, screenshot, prerender, contrast, video } = props
  const alias = apiKey ? 'pro' : 'api'

  let url = `https://${alias}.microlink.io/?url=${targetUrl}&video=${video}`
  if (contrast) url = `${url}&palette`
  if (prerender !== 'auto') url = `${url}&prerender=${prerender}`
  if (screenshot) url = `${url}&screenshot=${screenshot}`

  return url
}

export const fetchFromApiUrl = ({apiKey, apiUrl}) => {
  const headers = apiKey ? {'x-api-key': apiKey} : {}
  return fetch(apiUrl, {headers}).then(res => res.json())
}

export const fetchFromApi = props => {
  const apiUrl = createApiUrl(props)
  return fetchFromApiUrl({apiUrl, ...props})
}

export const isLarge = cardSize => cardSize === 'large'
