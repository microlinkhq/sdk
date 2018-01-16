import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'

import {CardWrap, CardImage, CardContent, CardEmptyState} from './components/Card'
import {getUrlPath, someProp} from './utils'

const createApiUrl = props => {
  const {url: targetUrl, screenshot, apiEndpoint, prerender, contrast} = props
  let url = `${apiEndpoint}/?url=${targetUrl}`
  if (contrast) url = `${url}&palette`
  if (prerender) url = `${url}&prerender`
  if (screenshot) url = `${url}&screenshot=${screenshot}`
  return url
}

class Microlink extends Component {
  componentWillMount () {
    const {image, apiKey} = this.props
    const imagesProps = [].concat(image)
    const url = createApiUrl(this.props)

    this.setState({loading: true}, () =>
      fetch(url, {headers: {'x-api-key': apiKey}})
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
        .catch((err) => console.log('microlink', err))
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
  apiKey: undefined,
  contrast: false,
  image: ['screenshot', 'image', 'logo'],
  prerender: false,
  screenshot: false,
  size: 'normal'
}

Microlink.propTypes = {
  apiEndpoint: PropTypes.string,
  apiKey: PropTypes.string,
  contrast: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  prerender: PropTypes.bool,
  screenshot: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  size: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default Microlink
