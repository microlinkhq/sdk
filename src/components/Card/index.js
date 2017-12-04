// @flow
import React, { Component } from 'react'
import type { Key } from 'react'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardEmptyState from './CardEmptyState'

import { getUrlPath } from '../utils'

export type CardSizes = 'large' | 'small'

type CardProps = {
  className?: string,
  contrast?: boolean,
  endpoint: string,
  key?: Key,
  rel: string,
  rounded?: boolean | string,
  size?: CardSizes,
  style?: {[string]: mixed},
  target: string,
  url: string
}

type State = {
  backgroundColor?: string,
  color?: string,
  description?: string,
  image?: string,
  loading: boolean,
  title?: string,
  url?: string
}

export default class extends Component<CardProps, State> {
  static defaultProps = {
    endpoint: 'https://api.microlink.io',
    rel: 'noopener noreferrer',
    target: '_blank'
  }

  state: State = { loading: false }

  componentWillMount () {
    const { url: targetUrl, contrast, endpoint: api } = this.props

    let url = `${api}/?url=${targetUrl}`
    if (contrast) url = `${url}&palette`

    this.setState({ loading: true }, () =>
      fetch(url)
        .then(res => res.json())
        .then(res => {
          const { title, description, url, image } = res.data
          const {color, background_color: backgroundColor} = image
          const imagePath: string = getUrlPath(image)
          this.setState({ title, description, url, color, backgroundColor, image: imagePath, loading: false })
        })
    )
  }

  render () {
    const { title, description, color, backgroundColor, url, image, loading } = this.state
    const { size, className, rounded, style, contrast } = this.props
    const cardClassName = `microlink_card ${typeof className === 'string' ? className : ``}`
    let loadedView = []

    if (!loading) {
      if (image) {
        loadedView.push(<CardImage
          className='microlink_card__image'
          image={image}
          cardSize={size}
        />)
      }
      loadedView.push(
        <CardContent
          className='microlink_card__content'
          title={title}
          description={description}
          url={url}
          cardSize={size}
        />
      )
    }

    return (
      <CardWrap
        className={cardClassName}
        href={url}
        title={title}
        cardSize={size}
        contrast={contrast}
        color={color}
        backgroundColor={backgroundColor}
        rounded={rounded}
        style={style}
      >
        {!loading ? loadedView : <CardEmptyState cardSize={size} />}
      </CardWrap>
    )
  }
}
