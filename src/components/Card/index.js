// @flow
import React, { Component } from 'react'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardEmptyState from './CardEmptyState'

const API_ENDPOINT = 'https://api.microlink.io'

const getUrlPath = (data: Object | string): string => {
  return typeof data === 'object' ? data.url : data
}

type CardProps = {
  contrast?: boolean,
  endpoint?: string,
  url: string
}

type State = {
  loading: boolean,
  title?: string,
  description?: string,
  image?: Object | string,
  logo?: Object | string,
  url?: string
}

export default class extends Component<CardProps, State> {
  static defaultProps = {
    rel: 'noopener noreferrer',
    rounded: false,
    target: '_blank'
  }

  state: State = { loading: false }

  componentWillMount () {
    const {
      url: targetUrl,
      contrast,
      endpoint: api = API_ENDPOINT
    } = this.props

    let url = `${api}/?url=${targetUrl}`
    if (contrast) url = `${url}&palette`

    this.setState({ loading: true }, () =>
      fetch(url)
        .then(res => res.json())
        .then(res => {
          const { title, description, url, image } = res.data
          this.setState({ title, description, url, image, loading: false })
        })
    )
  }

  render () {
    const { title, description, image, url, loading } = this.state
    let loadedView = []

    if (!loading) {
      if (image) {
        const imagePath: string = getUrlPath(image)
        loadedView.push(<CardImage image={imagePath} />)
      }
      loadedView.push(
        <CardContent
          title={title}
          description={description}
          url={url}
        />
      )
    }

    return (
      <CardWrap href={url} title={title} {...this.props} {...this.state}>
        {!loading ? loadedView : <CardEmptyState />}
      </CardWrap>
    )
  }
}
