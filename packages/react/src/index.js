import React, { Fragment, Component } from 'react'
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

const Card = ({
  imageUrl,
  videoUrl,
  isVideo,
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
      isVideo={isVideo}
      imageUrl={imageUrl}
      videoUrl={videoUrl}
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

class Microlink extends Component {
  state = { loading: true }

  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.url !== this.props.url) this.fetchData()
  }

  fetchData = () => {
    const { setData } = this.props
    const fetch = isFunction(setData)
      ? Promise.resolve({})
      : fetchFromApi(this.props)
    fetch.then(({ data }) => this.mergeData(data))
  }

  mergeData = fetchData => {
    const { setData } = this.props

    const payload = isFunction(setData)
      ? setData(fetchData)
      : { ...fetchData, ...setData }

    const { title, description, url, video, image, logo } = payload

    let imageUrl
    let videoUrl
    let media = {}
    let isVideo = false

    if (isNil(video)) {
      media = someProp(payload, [].concat(this.props.media))
      imageUrl = getUrlPath(media)
    } else {
      media = image || logo
      videoUrl = getUrlPath(video)
      imageUrl = getUrlPath(media)
      isVideo = true
    }

    const { color, background_color: backgroundColor } = media

    this.setState({
      url,
      color,
      title,
      description,
      loading: false,
      imageUrl,
      videoUrl,
      isVideo,
      backgroundColor
    })
  }

  render () {
    const {
      title,
      color,
      backgroundColor,
      url,
      loading: loadingState,
      description,
      imageUrl,
      videoUrl,
      isVideo
    } = this.state

    const {
      autoPlay,
      controls,
      loop,
      muted,
      playsInline,
      className,
      size,
      loading: loadingProp,
      ...props
    } = this.props

    const loading = isNil(loadingProp) ? loadingState : loadingProp

    return (
      <CardWrap
        className={className ? `microlink_card ${className}` : 'microlink_card'}
        href={url}
        title={title}
        cardSize={size}
        color={color}
        backgroundColor={backgroundColor}
        loading={loading}
        {...props}
      >
        {loading ? (
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
  muted: PropTypes.string,
  direction: PropTypes.string,
  playsInline: PropTypes.bool,
  prerender: PropTypes.oneOf(['auto', true, false]),
  size: PropTypes.oneOf(['normal', 'large']),
  url: PropTypes.string
}

export { imageProxy, createApiUrl, fetchFromApiUrl, fetchFromApi }

export default Microlink
