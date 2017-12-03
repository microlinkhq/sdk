// @flow
import React, { Component } from 'react'
import getValue from 'get-value'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardEmptyState from './CardEmptyState'

const API_ENDPOINT = 'https://api.microlink.io'

const getUrlPath = data => getValue(data, 'url') || data

type CardProps = {
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

const MicrolinkCard = class extends Component<CardProps, State> {
  static defaultProps = {
    rel: 'noopener noreferrer',
    rounded: false,
    target: '_blank'
  }

  state = { loading: false }

  constructor(props: CardProps) {
    super()
  }

  componentWillMount() {
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

  render() {
    const { title, description, image, url, logo, loading } = this.state
    const imagePath = getUrlPath(image)
    const logoPath = getUrlPath(logo)
    let loadedView = []

    if (!loading) {
      if (imagePath) {
        loadedView.push(<CardImage image={imagePath} />)
      }
      loadedView.push(
        <CardContent
          title={title}
          description={description}
          url={url}
          logo={logoPath}
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

export default MicrolinkCard
