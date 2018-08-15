import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'

import {CardWrap, CardMedia, CardContent, CardEmptyState} from './components/Card'
import {createApiUrl, fetchFromApiUrl, fetchFromApi, getUrlPath, someProp} from './utils'

class Microlink extends Component {
  state = { loading: true }

  componentDidMount () {
    const { data: customData, noFetch, url } = this.props
    const promise = noFetch || !url ? Promise.resolve({}) : fetchFromApi(this.props)
    promise.then(({ data }) => this.setData({ ...data, ...customData }))
  }

  setData = data => {
    const imagesProps = [].concat(this.props.image)
    const image = someProp(data, imagesProps)
    const imageUrl = getUrlPath(image)
    const {title, description, url, video} = data
    const {color, background_color: backgroundColor} = image || {}

    this.setState({
      color,
      backgroundColor,
      title,
      description,
      url,
      loading: false,
      video,
      image: imageUrl
    })
  }

  renderContent () {
    const {title, description, url, image, video} = this.state
    const {autoPlay, controls, loop, muted, playsInline, size} = this.props

    return (
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
  }

  render () {
    const {title, color, backgroundColor, url, loading: loadingState} = this.state
    const {className, size, loading: loadingProp, ...props} = this.props
    const loading = loadingProp == null ? loadingState : loadingProp

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
        {!loading ? this.renderContent() : <CardEmptyState cardSize={size} />}
      </CardWrap>
    )
  }
}

Microlink.defaultProps = {
  apiKey: undefined,
  autoPlay: true,
  contrast: false,
  controls: true,
  image: ['screenshot', 'image', 'logo'],
  loop: true,
  muted: true,
  video: true,
  playsInline: true,
  prerender: 'auto',
  reverse: false,
  screenshot: false,
  size: 'normal'
}

Microlink.propTypes = {
  apiKey: PropTypes.string,
  autoPlay: PropTypes.bool,
  video: PropTypes.bool,
  contrast: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  controls: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  reverse: PropTypes.bool,
  playsInline: PropTypes.bool,
  prerender: PropTypes.oneOf(['auto', true, false]),
  screenshot: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  size: PropTypes.oneOf(['normal', 'large']),
  url: PropTypes.string
}

export { createApiUrl, fetchFromApiUrl, fetchFromApi }

export default Microlink
