// @flow
import React, { Component } from 'react'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'

const API_ENDPOINT = 'https://api.microlink.io'

const getUrlPath = data => typeof data === 'object' ? data.url : data

type CardProps = {
  url: string
}

type State = {
  loaded: boolean,
  title?: string,
  description?: string,
  image?: string,
  url?: string
}

const MicrolinkCard = class extends Component <CardProps, State> {
  state = { loaded: false }

  constructor (props: CardProps) {
    super()
  }

  componentWillMount () {
    const {url} = this.props
    const endpoint = `${API_ENDPOINT}/?url=${url}`

    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        const { title, description, url, image, logo } = res.data
        this.setState({ title, description, url, image, logo, loaded: true })
      })
  }

  render () {
    const { title, description, image, url, logo, loaded } = this.state
    const imagePath = getUrlPath(image)
    const logoPath = getUrlPath(logo)

    return loaded && (
      <CardWrap href={url} title={title} {...this.props}>
        {image && <CardImage image={imagePath} />}
        <CardContent title={title} description={description} url={url} logo={logoPath} />
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
