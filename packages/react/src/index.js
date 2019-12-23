import React, { useState, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { CardWrap, CardMedia, CardContent, CardEmpty } from './components/Card'

import {
  classNames,
  fetchFromApi,
  getApiUrl,
  getUrlPath,
  imageProxy,
  isFunction,
  isLazySupported,
  isObject,
  getPreferredMedia,
  someProp,
  castArray
} from './utils'

import { useIntersectionObserver } from './utils/hooks'

const Card = ({ url, size, title, description, ...props }) => (
  <>
    <CardMedia key={`${url}__${size}`} url={url} cardSize={size} {...props} />
    <CardContent
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
    className = '',
    size,
    lazy,
    media: mediaProp,
    ...restProps
  } = props

  const mediaProps = castArray(mediaProp)

  const isLoadingUndefined = useMemo(() => loadingProp === undefined, [
    loadingProp
  ])
  const [loadingState, setLoading] = useState(
    isLoadingUndefined ? true : loadingProp
  )
  const [cardData, setCardData] = useState({})
  const [apiUrl, apiUrlProps] = useMemo(
    () => getApiUrl({ ...props, media: mediaProps }),
    [props]
  )
  const [iframeMedia, setIframeMedia] = useState(null)

  const isLazyEnabled = useMemo(
    () => isLazySupported && (lazy === true || isObject(lazy)),
    [lazy]
  )
  const lazyOptions = useMemo(() => (isObject(lazy) ? lazy : undefined), [lazy])
  const [hasIntersected, cardRef] = useIntersectionObserver(
    isLazyEnabled,
    lazyOptions
  )

  const canFetchData = useMemo(
    () => !isLazyEnabled || (isLazyEnabled && hasIntersected),
    [isLazyEnabled, hasIntersected]
  )

  const fetchData = useCallback(() => {
    if (canFetchData) {
      setLoading(true)
      const fetch = isFunction(setData)
        ? Promise.resolve({})
        : fetchFromApi(props.url, apiUrl, apiUrlProps)

      fetch.then(({ data }) => mergeData(data))
    }
  }, [apiUrl, canFetchData, setData, apiUrlProps.headers['x-api-key']])

  const mergeData = useCallback(
    fetchData => {
      const payload = isFunction(setData)
        ? setData(fetchData)
        : { ...fetchData, ...setData }

      const {
        title,
        description,
        url,
        video,
        audio,
        image,
        logo,
        iframe
      } = payload

      const mediaFallback = image || logo || {}
      let media = mediaFallback
      let videoUrl
      let audioUrl
      let isVideo = false
      let isAudio = false

      const preferredMedia = getPreferredMedia(payload, mediaProps)

      switch (preferredMedia) {
        case 'audio':
          isAudio = true
          audioUrl = getUrlPath(audio)
          break
        case 'video':
          isVideo = true
          videoUrl = getUrlPath(video)
          break
        case 'iframe':
          setIframeMedia(iframe)
          break
        default:
          media = someProp(payload, mediaProps) || mediaFallback
          break
      }

      const imageUrl = getUrlPath(media)
      const { color, background_color: backgroundColor } = media

      setCardData({
        url,
        color,
        title,
        description,
        imageUrl,
        videoUrl,
        audioUrl,
        isVideo,
        isAudio,
        backgroundColor
      })

      setLoading(false)
    },
    [setData]
  )

  useEffect(fetchData, [props.url, setData, hasIntersected])

  const {
    title,
    color,
    backgroundColor,
    url,
    description,
    imageUrl,
    videoUrl,
    audioUrl,
    isVideo,
    isAudio
  } = cardData

  const isLoading = isLoadingUndefined ? loadingState : loadingProp

  if (iframeMedia) {
    return (
      <div
        className={classNames.iframe}
        dangerouslySetInnerHTML={{ __html: iframeMedia }}
      />
    )
  }

  return (
    <CardWrap
      className={`${classNames.main} ${className}`}
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
          isAudio={isAudio}
          imageUrl={imageUrl}
          videoUrl={videoUrl}
          audioUrl={audioUrl}
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
  size: 'normal'
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
  size: PropTypes.oneOf(['normal', 'large', 'small']),
  url: PropTypes.string.isRequired
}

export { imageProxy, getApiUrl, fetchFromApi }

export default Microlink
