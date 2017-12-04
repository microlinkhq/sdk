// @flow
import React, { Component } from 'react'
import type { Key } from 'react'

import { CardWrap, CardImage, CardContent, CardEmptyState } from './components/Card'
import { getUrlPath } from './utils'

export type CardSizes = 'large' | 'small'

type CardProps = {
  className?: string,
  contrast?: boolean,
  endpoint: string,
  is?: any,
  key?: Key,
  rel?: string,
  rounded?: boolean | string,
  size?: CardSizes,
  style?: {[string]: mixed},
  target?: string,
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
    endpoint: 'https://api.microlink.io'
  }

  state: State = { loading: true }

  componentWillMount () {
    const { url: targetUrl, contrast, endpoint: api } = this.props

    if (targetUrl) {
      let url = `${api}/?url=${targetUrl}`
      if (contrast) url = `${url}&palette`

      this.setState({ loading: true }, () =>
        fetch(url)
          .then(res => res.json())
          .then((res: Object) => {
            const {status = '', data}: {status: string, data: Object} = res
            if (status === 'success') {
              const { title, description, url, image }: {
                title?: string,
                description?: string,
                url?: string,
                image?: string | Object
              } = data

              if (image) {
                if (typeof image === 'object') {
                  const {color, background_color: backgroundColor}: {color: string, background_color: string} = image
                  this.setState({color, backgroundColor})
                }
                const imagePath = getUrlPath(image)
                this.setState({image: imagePath})
              }

              this.setState({ title, description, url, loading: false })
            }
          })
      )
    }
  }

  render () {
    const { title, description, color, backgroundColor, url, image, loading } = this.state
    const { size, className, rounded, style, contrast, is } = this.props
    let loadedView = []

    if (!loading) {
      if (image) {
        loadedView.push(
          <CardImage
            className='microlink_card__image'
            image={image}
            cardSize={size}
          />
        )
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
        className={className ? `microlink_card ${className}` : className}
        href={url}
        title={title}
        cardSize={size}
        contrast={contrast}
        color={color}
        backgroundColor={backgroundColor}
        rounded={rounded}
        style={style}
        is={is}
      >
        {!loading ? loadedView : <CardEmptyState cardSize={size} />}
      </CardWrap>
    )
  }
}
