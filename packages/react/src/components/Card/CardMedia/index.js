import { createElement, Component } from 'react'

import { getUrlPath } from '../../../utils'
import { ImageLoadCatcher } from './loader'
import Image from './Image'
import Video from './Video'

const isUrl = url => getUrlPath(url) !== null

export default class CardMedia extends Component {
  constructor (props) {
    super(props)

    const mediaUrl = this.props.isVideo
      ? this.props.videoUrl
      : this.props.imageUrl

    this.state = {
      loading: !isUrl(mediaUrl),
      mediaUrl
    }
  }

  renderMedia () {
    const { loading } = this.state

    return createElement(this.props.isVideo ? Video : Image, {
      ...this.props,
      key: 'media',
      loading
    })
  }

  renderLoadCatcher () {
    const { mediaUrl, loading } = this.state

    return (
      loading &&
      createElement(ImageLoadCatcher, {
        key: 'imageLoader',
        src: mediaUrl,
        onLoad: () => this.setState({ loading: false })
      })
    )
  }

  render () {
    return [this.renderMedia()]
  }
}
