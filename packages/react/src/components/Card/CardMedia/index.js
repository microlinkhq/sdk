import { createElement, Component } from 'react'

import { getUrlPath } from '../../../utils'

import Image from './Image'
import Video from './Video'
import { ImageLoadCatcher } from './loader'

const isUrl = url => getUrlPath(url) !== null

export default class CardMedia extends Component {
  state = { loading: isUrl(this.props.image) }

  renderMedia () {
    const { loading } = this.state
    const { image, video } = this.props
    const el = !isUrl(video) && isUrl(image) ? Image : Video
    return createElement(el, {
      ...this.props,
      key: 'media',
      loading
    })
  }

  renderLoadCatcher () {
    const { image } = this.props
    const { loading } = this.state

    return loading && isUrl(image) && createElement(ImageLoadCatcher, {
      key: 'imageLoader',
      src: image,
      onLoad: () => this.setState({ loading: false })
    })
  }

  render () {
    return [this.renderMedia(), this.renderLoadCatcher()]
  }
}
