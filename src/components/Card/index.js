// @flow
import React, { Component } from 'react'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'

const getUrlPath = data => typeof data === 'object' ? data.url : data

type CardProps = {
  contrast?: boolean,
  endpoint?: string,
  url: string,
  size?: CardSizes
}

type State = {
  loaded: boolean,
  title?: string,
  description?: string,
  image?: string,
  url?: string
}

export default class extends Component<CardProps, State> {
  static defaultProps = {
    background: '#fff',
    borderColor: '#E1E8ED',
    color: '#181919',
    endpoint: 'https://api.microlink.io',
    fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
    rel: 'noopener noreferrer',
    rounded: false,
    target: '_blank',
    transition: 'opacity .15s ease-in',
    width: '558px'
  }

  state: State = { loaded: false }

  componentWillMount () {
    const {
      url: targetUrl,
      contrast,
      endpoint: api
    } = this.props

    let url = `${api}/?url=${targetUrl}`
    if (contrast) url = `${url}&palette`

    fetch(url)
      .then(res => res.json())
      .then(res => {
        const { title, description, url, image } = res.data
        this.setState({ title, description, url, image, loaded: true })
      })
  }

  render () {
    const { title, description, image, url, loaded } = this.state
    const { large } = this.props
    const imagePath = getUrlPath(image)

    const props = Object.assign({}, this.props, {
      height: large ? '382px' : '123px'
    })

    return (
      loaded && (
        <CardWrap href={url} title={title} {...props} {...this.state} className={`microlink_card__wrapper`} large={large}>
          {image &&
            <CardImage
              className='microlink_card__image'
              image={imagePath}
              large={large}
            />
          }
          <CardContent
            className='microlink_card__content'
            title={title}
            description={description}
            url={url}
            large={large}
          />
        </CardWrap>
      )
    )
  }
}
