import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'

import {CardWrap, CardMedia, CardContent, CardEmptyState} from './components/Card'
import {getUrlPath, someProp, createApiUrl} from './utils'

class Microlink extends Component {
  componentWillMount () {
    const {image, apiKey} = this.props
    const imagesProps = [].concat(image)
    const url = createApiUrl(this.props)

    this.setState({loading: true}, () =>
      fetch(url, {headers: {'x-api-key': apiKey}})
        .then(res => res.json())
        .then(({status, data}) => {
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
        })
    )
  }

  renderContent () {
    const {title, description, url, image, video} = this.state
    const {size, videoAutoplay, videoMuted, videoLoop} = this.props

    return (
      <Fragment>
        <CardMedia
          className='microlink_card__image'
          image={image}
          video={video}
          url={url}
          cardSize={size}
          videoAutoplay={videoAutoplay}
          videoMuted={videoMuted}
          videoLoop={videoLoop}
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
    const {title, color, backgroundColor, url, loading} = this.state
    const {size, className} = this.props

    return (
      <CardWrap
        className={className ? `microlink_card ${className}` : 'microlink_card'}
        href={url}
        title={title}
        cardSize={size}
        color={color}
        backgroundColor={backgroundColor}
        loading={loading}
        {...this.props}
      >
        {!loading ? this.renderContent() : <CardEmptyState cardSize={size} />}
      </CardWrap>
    )
  }
}

Microlink.defaultProps = {
  apiEndpoint: 'https://api.microlink.io',
  apiKey: undefined,
  contrast: false,
  image: ['screenshot', 'image', 'logo'],
  prerender: false,
  screenshot: false,
  size: 'normal',
  videoAutoplay: true,
  videoMuted: true,
  videoLoop: true
}

Microlink.propTypes = {
  apiEndpoint: PropTypes.string,
  apiKey: PropTypes.string,
  contrast: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  prerender: PropTypes.bool,
  screenshot: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  size: PropTypes.oneOf(['normal', 'large']),
  url: PropTypes.string.isRequired,
  videoAutoplay: PropTypes.bool,
  videoMuted: PropTypes.bool,
  videoLoop: PropTypes.bool
}

export default Microlink
