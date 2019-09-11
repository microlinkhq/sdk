import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { CardWrap, CardMedia, CardContent, CardEmpty } from './components/Card'

import {
  defaultApiParameters,
  isNil,
  createApiUrl,
  fetchFromApiUrl,
  getUrlPath,
  imageProxy,
  someProp,
  isFunction,
  isLazySupported,
  isObject
} from './utils'
import { useIntersectionObserver } from './utils/hooks'

const Card = ({ url, size, title, description, ...props }) => (
  <>
    <CardMedia key={`${url}__${size}`} url={url} cardSize={size} {...props} />
    <CardContent
      className='microlink_card__content'
      title={title}
      description={description}
      url={url}
      cardSize={size}
    />
  </>
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
    lazy,
    ...restProps
  } = props
  const isLoadingUndefined = loadingProp === undefined
  const [loadingState, setLoading] = useState(
    isLoadingUndefined ? true : loadingProp
  )
  const [cardData, setCardData] = useState({})
  const apiUrl = createApiUrl(props)

  const isLazyEnabled = isLazySupported && (lazy === true || isObject(lazy))
  const lazyOptions = isObject(lazy) ? lazy : undefined
  const [hasIntersected, cardRef] = useIntersectionObserver(isLazyEnabled, lazyOptions)

  const canFetchData = !isLazyEnabled || (isLazyEnabled && hasIntersected)

  const fetchData = () => {
    if (canFetchData) {
      const fetch = isFunction(setData)
        ? Promise.resolve({})
        : fetchFromApiUrl(apiUrl, props)
      fetch.then(({ data }) => mergeData(data))
    }
  }

  const mergeData = fetchData => {
    const payload = isFunction(setData)
      ? setData(fetchData)
      : { ...fetchData, ...setData }

    const { title, description, url, video, image, logo } = payload

    let imageUrl
    let videoUrl
    const mediaFallback = image || logo || {}
    let media = mediaFallback
    let isVideo = false

    if (isNil(video)) {
      media = someProp(payload, [].concat(props.media)) || mediaFallback
      imageUrl = getUrlPath(media)
    } else {
      videoUrl = getUrlPath(video)
      imageUrl = getUrlPath(media)
      isVideo = true
    }

    const { color, background_color: backgroundColor } = media

    setCardData({
      url,
      color,
      title,
      description,
      imageUrl,
      videoUrl,
      isVideo,
      backgroundColor
    })

    setLoading(false)
  }

  useEffect(fetchData, [props.url, setData, hasIntersected])

  const {
    title,
    color,
    backgroundColor,
    url,
    description,
    imageUrl,
    videoUrl,
    isVideo
  } = cardData

  const isLoading = isLoadingUndefined ? loadingState : loadingProp

  return (
    <CardWrap
      className={className ? `microlink_card ${className}` : 'microlink_card'}
      href={url}
      title={title}
      cardSize={size}
      color={color}
      backgroundColor={backgroundColor}
      isLoading={isLoading}
      ref={cardRef}
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
  direction: 'ltr',
  lazy: true,
  loop: true,
  media: ['image', 'logo'],
  muted: true,
  playsInline: true,
  size: 'normal',
  ...defaultApiParameters
}

Microlink.propTypes = {
  apiKey: PropTypes.string,
  autoPlay: PropTypes.bool,
  contrast: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  controls: PropTypes.bool,
  direction: PropTypes.string,
  lazy: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  loop: PropTypes.bool,
  media: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  prerender: PropTypes.oneOf(['auto', true, false]),
  size: PropTypes.oneOf(['normal', 'large', 'mini']),
  url: PropTypes.string
}

export { imageProxy, createApiUrl, fetchFromApiUrl }

export default Microlink
