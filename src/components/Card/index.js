// @flow
import React from 'react'

import CardWrap from './CardWrap'
import CardImage from './CardImage'
import CardContent from './CardContent'

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

export default class Card extends React.Component<CardProps, State> {
  state = {
    loaded: false,
    description: '',
    image: '',
    url: '',
    title: ''
  }

  constructor(props: CardProps) {
    super()
  }

  componentWillMount() {
    const requestURL = `https://api.microlink.io/?url=${this.props.url}`
    fetch(requestURL)
      .then(microlinkResponse => microlinkResponse.json())
      .then(response => {
        console.log(response.data)
        const { title, description, url, logo: image } = response.data
        this.setState({
          title,
          description,
          url,
          image,
          loaded: true
        })
      })
  }

  render() {
    const { title, description, image, url, loaded } = this.state
    const imagePath = typeof image === 'object' ? image.url : image
    return loaded === true ? (
      <CardWrap href={url} title={title}>
        {image && <CardImage image={imagePath} />}
        <CardContent title={title} description={description} url={url} />
      </CardWrap>
    ) : null
  }
}
