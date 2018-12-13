import React, { Fragment } from 'react'
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
  someProp
} from './utils'

const Card = ({
  image,
  video,
  url,
  size,
  autoPlay,
  controls,
  muted,
  loop,
  playsInline,
  title,
  description
}) => (
  <Fragment>
    <CardMedia
      image={image}
      video={video}
      url={url}
      cardSize={size}
      autoPlay={autoPlay}
      controls={controls}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
    />
    <CardContent
      className='microlink_card__content'
      title={title}
      description={description}
      url={url}
      cardSize={size}
    />
  </Fragment>
)

function parseData (data, props) {
  const imagesProps = [].concat(props.image)
  const image = someProp(data, imagesProps)
  const imageUrl = getUrlPath(image)
  const { title, description, url, video } = data
  const { color, background_color: backgroundColor } = image || {}
  return {
    color,
    backgroundColor,
    title,
    description,
    url,
    video,
    image: imageUrl
  }
}

function Microlink (props) {
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    const { noFetch, url } = props
    if (!noFetch && url) {
      fetchFromApi(props).then(({ data }) => {
        const payload =
          typeof props.setData === 'function'
            ? props.setData(data)
            : { ...data, ...props.setData }
        setData(parseData(payload, props))
        setLoading(false)
      })
    }
  }, [])

  React.useEffect(
    () => {
      if (props.setData) {
        const payload =
          typeof props.setData === 'function'
            ? props.setData()
            : { ...props.setData }
        setData(parseData(payload, props))
        setLoading(false)
      }
    },
    [props.setData]
  )

  const { title, color, backgroundColor, url, description, image, video } = data

  const {
    autoPlay,
    controls,
    loop,
    muted,
    playsInline,
    className,
    size,
    loading: loadingProp,
    ...restProps
  } = props
  const computedLoading = isNil(loadingProp) ? loading : loadingProp

  return (
    <CardWrap
      className={className ? `microlink_card ${className}` : 'microlink_card'}
      href={url}
      title={title}
      cardSize={size}
      color={color}
      backgroundColor={backgroundColor}
      loading={computedLoading}
      {...restProps}
    >
      {computedLoading ? (
        <CardEmpty cardSize={size} />
      ) : (
        <Card
          title={title}
          description={description}
          url={url}
          image={image}
          video={video}
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
  image: ['screenshot', 'image', 'logo'],
  loop: true,
  muted: true,
  playsInline: true,
  reverse: false,
  size: 'normal',
  ...defaultApiParameters
}

Microlink.propTypes = {
  apiKey: PropTypes.string,
  autoPlay: PropTypes.bool,
  video: PropTypes.bool,
  contrast: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  controls: PropTypes.bool,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  reverse: PropTypes.bool,
  playsInline: PropTypes.bool,
  prerender: PropTypes.oneOf(['auto', true, false]),
  screenshot: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  size: PropTypes.oneOf(['normal', 'large']),
  url: PropTypes.string
}

export { imageProxy, createApiUrl, fetchFromApiUrl, fetchFromApi }

export default Microlink
