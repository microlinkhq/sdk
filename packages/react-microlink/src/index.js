import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'

import {CardWrap, CardImage, CardContent, CardEmptyState} from './components/Card'
import {getUrlPath, uniqArray, someProp} from './utils'

const IMAGE_PROPS = ['screenshot', 'image', 'logo']

const createApiUrl = props => {
  const {url: targetUrl, apiEndpoint, apiKey, prerender, contrast} = props
  let url = `${apiEndpoint}/?url=${targetUrl}`
  if (contrast) url = `${url}&palette`
  if (prerender) url = `${url}&prerender`
  if (apiKey) url = `${url}&key=${apiKey}`
  return url
}

class Microlink extends Component {
  componentWillMount () {
    const {image} = this.props
    const imagesProps = uniqArray([].concat(image).concat(IMAGE_PROPS))
    const url = createApiUrl(this.props)

    this.setState({loading: true}, () =>
      fetch(url)
        .then(res => res.json())
        .then(({status, data}) => {
          const image = getUrlPath(someProp(data, imagesProps))
          const {title, description, url} = data
          const {color, background_color: backgroundColor} = image || {}
          this.setState({
            color,
            backgroundColor,
            title,
            description,
            url,
            loading: false,
            image
          })
        })
    )
  }

  renderContent () {
    const {title, description, url, image} = this.state
    const {size} = this.props

    return (
      <Fragment>
        <CardImage className='microlink_card__image' image={image} cardSize={size} />
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
  image: 'image',
  size: 'normal',
  prerender: false,
  apiKey: null
}

Microlink.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.string,
  apiEndpoint: PropTypes.string,
  apiKey: PropTypes.string,
  prerender: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  contrast: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default Microlink
