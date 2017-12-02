// @flow
import React, { Component } from 'react'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'

const API_ENDPOINT = 'https://api.microlink.io'

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

  constructor(props: CardProps) {
    super()
  }

  componentWillMount() {
    const {url} = this.props
    const endpoint = `${API_ENDPOINT}/?url=${url}`
    
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        const { title, description, url, logo: image } = res.data
        this.setState({ title, description, url, image, loaded: true })
      })
  }

  render() {
    const { title, description, image, url, loaded } = this.state
    const { target, rel, ...props } = this.props
    const imagePath = typeof image === 'object' ? image.url : image
    
    return loaded && (
      <CardWrap href={url} title={title} target={target} rel={rel} {...props}>
        {image && <CardImage image={imagePath} />}
        <CardContent title={title} description={description} url={url} />
      </CardWrap>
    )
  }
}

MicrolinkCard.defaultProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
  description: '',
  image: '',
  url: '',
  title: '',
};

export default MicrolinkCard