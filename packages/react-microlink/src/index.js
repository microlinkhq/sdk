import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import { CardWrap, CardImage, CardContent, CardEmptyState } from './components/Card'
import { getUrlPath } from './utils'

class Microlink extends Component {
  componentWillMount () {
    const { url: targetUrl, contrast, endpoint: api } = this.props

    if (targetUrl) {
      let url = `${api}/?url=${targetUrl}`
      if (contrast) url = `${url}&palette`

      this.setState({ loading: true }, () =>
        fetch(url)
          .then(res => res.json())
          .then(({status, data}) => {
            const { title, description, url, image } = data
            const {color, background_color: backgroundColor} = image
            this.setState({
              color,
              backgroundColor,
              title,
              description,
              url,
              loading: false,
              image: getUrlPath(image)
            })
          })
      )
    }
  }

  renderContent () {
    const { title, description, url, image } = this.state
    const { size } = this.props

    return (
      <Fragment>
        <CardImage
          className='microlink_card__image'
          image={image}
          cardSize={size}
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
    const { title, color, backgroundColor, url, loading } = this.state
    const { size, className } = this.props

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
  endpoint: 'https://api.microlink.io',
  size: 'normal'
}

Microlink.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.string,
  endpoint: PropTypes.string,
  contrast: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

export default Microlink
