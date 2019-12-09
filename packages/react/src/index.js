import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext
} from 'react'
import PropTypes from 'prop-types'

import { CardWrap, CardMedia, CardContent, CardEmpty } from './components/Card'
import GlobalState, { GlobalContext } from './context/GlobalState'
import {
  classNames,
  isNil,
  getApiUrl,
  fetchFromApi,
  getUrlPath,
  imageProxy,
  someProp,
  isFunction,
  isLazySupported,
  isObject
} from './utils'
import { useIntersectionObserver } from './utils/hooks'

const Card = props => {
  const {
    className = '',
    lazy,
    loading,
    media: mediaProp,
    setData,
    url,
    ...restProps
  } = props
  const { updateState } = useContext(GlobalContext)
  const [loadingState, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const isLoadingUndefined = useMemo(() => loading === undefined, [loading])
  const [apiUrl, apiUrlProps] = useMemo(() => getApiUrl(props), [props])

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
        : fetchFromApi(url, apiUrl, apiUrlProps)

      fetch
        .then(({ data }) => mergeData(data))
        .catch(error => {
          setLoading(false)
          setIsError(true)
          console.warn('[Microlink SDK]', error)
        })
    }
  }, [apiUrl, canFetchData, setData, apiUrlProps.headers['x-api-key'], url])

  const mergeData = useCallback(
    fetchedData => {
      const payload = isFunction(setData)
        ? setData()
        : { ...fetchedData, ...setData }

      const { title, description, url, video, audio, image, logo } = payload

      const mediaFallback = image || logo || {}
      let media = mediaFallback
      let videoUrl
      let audioUrl
      let isVideo = false
      let isAudio = false

      if (!isNil(audio)) {
        isAudio = true
        audioUrl = getUrlPath(audio)
      } else if (!isNil(video)) {
        isVideo = true
        videoUrl = getUrlPath(video)
      } else {
        media = someProp(payload, [].concat(mediaProp)) || mediaFallback
      }

      const imageUrl = getUrlPath(media)
      const { color, background_color: backgroundColor } = media

      updateState({
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
    [mediaProp, setData]
  )

  useEffect(fetchData, [url, setData, hasIntersected])

  const isLoading = isLoadingUndefined ? loadingState : loading

  if (isError) {
    return null
  }

  return (
    <CardWrap
      className={`${classNames.main} ${className}`}
      href={url}
      isLoading={isLoading}
      ref={cardRef}
      {...restProps}
    >
      {isLoading ? (
        <CardEmpty />
      ) : (
        <>
          <CardMedia />
          <CardContent />
        </>
      )}
    </CardWrap>
  )
}

const Microlink = props => (
  <GlobalState {...props}>{otherProps => <Card {...otherProps} />}</GlobalState>
)

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
  url: PropTypes.string
}

export { imageProxy, getApiUrl, fetchFromApi }

export default Microlink
