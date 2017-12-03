// @flow
import React, { Component } from 'react'
import type { Key } from 'react'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'

import { getUrlPath } from '../utils'

export type CardSizes = 'large' | 'small'

type CardProps = {
  className?: string,
  contrast?: boolean,
  endpoint: string,
  key?: Key,
  rel?: string,
  rounded?: boolean | string,
  size?: CardSizes,
  style?: {[string]: mixed},
  target?: string,
  url: string
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
    endpoint: 'https://api.microlink.io',
    rel: 'noopener noreferrer',
    target: '_blank'
  }

  state: State = { loaded: false }

  componentWillMount () {
    const { url: targetUrl, contrast, endpoint: api } = this.props

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
    const { size, className, rounded, style } = this.props
    const cardClassName = `microlink_card ${typeof className === 'string' ? className : ``}`
    const imagePath = getUrlPath(image)

    return (
      loaded && (
        <CardWrap
          className={cardClassName}
          href={url}
          title={title}
          cardSize={size}
          rounded={rounded}
          style={style}
        >
          {image && (
            <CardImage
              className='microlink_card__image'
              image={imagePath}
              cardSize={size}
            />
          )}
          <CardContent
            className='microlink_card__content'
            title={title}
            description={description}
            url={url}
            cardSize={size}
          />
        </CardWrap>
      )
    )
  }
}
