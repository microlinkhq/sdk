import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import { CardWrap, CardMedia, CardContent, CardEmpty } from './components/Card'

import {
  defaultApiParameters,
  isNil,
  createApiUrl,
  fetchFromApiUrl,
  fetchFromApi,
  getUrlPath,
  imageProxy,
  someProp,
  isFunction
} from './utils'

const Card = ({ url, size, title, description, ...props }) => (
  <Fragment>
    <CardMedia url={url} cardSize={size} {...props} />
    <CardContent
      className='microlink_card__content'
      title={title}
      description={description}
      url={url}
      cardSize={size}
    />
  </Fragment>
)

function Microlink (props) {
  const {
    autoPlay,
    controls,
    loop,
    setData,
    muted,
    loading: loadingProp,
    playsInline,
    className,
    size,
    ...restProps
  } = props

  const [loading, setLoading] = useState(loadingProp)
  const [state, setState] = useState({})

  const fetchData = () => {
    const fetch = isFunction(setData)
      ? Promise.resolve({})
      : fetchFromApi(props)
    fetch.then(({ data }) => mergeData(data))
  }

  const mergeData = fetchData => {
    const payload = isFunction(setData)
      ? setData(fetchData)
      : { ...fetchData, ...setData }

    const { title, description, url, video, image, logo } = payload

    let imageUrl
    let videoUrl
    let media = {}
    let isVideo = false

    if (isNil(video)) {
      media = someProp(payload, [].concat(props.media)) || image || logo
      imageUrl = getUrlPath(media)
    } else {
      media = image || logo
      videoUrl = getUrlPath(video)
      imageUrl = getUrlPath(media)
      isVideo = true
    }

    const { color, background_color: backgroundColor } = media

    setLoading(false)

    setState({
      url,
      color,
      title,
      description,
      imageUrl,
      videoUrl,
      isVideo,
      backgroundColor
    })
  }

  useEffect(fetchData, [props.url, setData])

  const {
    title,
    color,
    backgroundColor,
    url,
    description,
    imageUrl,
    videoUrl,
    isVideo
  } = state

  const isLoading = isNil(loadingProp) ? loading : loadingProp

  return (
    <CardWrap
      className={className ? `microlink_card ${className}` : 'microlink_card'}
      href={url}
      title={title}
      cardSize={size}
      color={color}
      backgroundColor={backgroundColor}
      loading={isLoading}
      {...restProps}
    >
      {isLoading ? (
        <CardEmpty cardSize={size} />
      ) : (
        <Card
          title={title}
          description={description}
          url={url}
          isVideo={isVideo}
          imageUrl={imageUrl}
          videoUrl={videoUrl}
          autoPlay={autoPlay}
          controls={controls}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          size={size}
        />
      )}
    </CardWrap>
  )
}

Microlink.defaultProps = {
  apiKey: undefined,
  autoPlay: true,
  controls: true,
  media: ['image', 'logo'],
  loop: true,
  muted: true,
  playsInline: true,
  direction: 'ltr',
  size: 'normal',
  ...defaultApiParameters
}

Microlink.propTypes = {
  apiKey: PropTypes.string,
  autoPlay: PropTypes.bool,
  contrast: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  controls: PropTypes.bool,
  media: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  direction: PropTypes.string,
  playsInline: PropTypes.bool,
  prerender: PropTypes.oneOf(['auto', true, false]),
  size: PropTypes.oneOf(['normal', 'large']),
  url: PropTypes.string
}

export { imageProxy, createApiUrl, fetchFromApiUrl, fetchFromApi }

export default Microlink
