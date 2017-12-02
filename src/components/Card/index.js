// @flow
import React, { Component } from 'react'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardEmptyState from './CardEmptyState'

const API_ENDPOINT = 'https://api.microlink.io'

const getUrlPath = data => (typeof data === 'object' ? data.url : data)

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
  state = { loading: false }

  constructor(props: CardProps) {
    super()
  }

  componentWillMount() {
    const { url } = this.props
    const endpoint = `${API_ENDPOINT}/?url=${url}`
    this.setState({ loading: true }, () =>
      fetch(endpoint)
        .then(res => res.json())
        .then(res => {
          const { title, description, url, image, logo } = res.data
          this.setState({
            title,
            description,
            url,
            image,
            logo,
            loading: false
          })
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
      <CardWrap href={url} title={title} {...this.props}>
        {!loading ? loadedView : <CardEmptyState />}
      </CardWrap>
    )
  }
}

MicrolinkCard.defaultProps = {
  rel: 'noopener noreferrer',
  rounded: false,
  target: '_blank'
}

export default MicrolinkCard
