import {createElement, Component} from 'react'

import {getUrlPath} from '../../../utils'

import Image from './Image'
import Video from './Video'
import {ImageLoadCatcher} from './loader'

const isUrl = url => getUrlPath(url) !== null

export default class CardMedia extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loadingImage: isUrl(props.image)
    }
  }

  imageLoaded () {
    this.setState({loadingImage: false})
  }

  renderMedia () {
    const {loadingImage} = this.state
    const {image, video} = this.props
    const el = !isUrl(video) && isUrl(image) ? Image : Video
    return createElement(el, {
      ...this.props,
      key: 'media',
      loading: loadingImage
    })
  }

  renderLoadCatcher () {
    const {image} = this.props
    const {loadingImage: loading} = this.state
    return loading && isUrl(image) && createElement(ImageLoadCatcher, {
      key: 'imageLoader',
      src: image,
      onLoad: () => this.imageLoaded()
    })
  }

  render () {
    return [this.renderMedia(), this.renderLoadCatcher()]
  }
}
