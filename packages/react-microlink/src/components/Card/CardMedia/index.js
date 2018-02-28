import {createElement, Component} from 'react'

import {getUrlPath} from '../../../utils'

import Image from './image'
import Video from './video'
import {ImageLoadCatcher} from './loader'

const isUrl = url => getUrlPath(url) !== null

export default class CardMedia extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loadingImage: isUrl(props.image)
    }
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
    const {image, onLoad} = this.props
    const {loadingImage: loading} = this.state
    return loading && isUrl(image) && createElement(ImageLoadCatcher, {
      key: 'imageLoader',
      src: image,
      onLoad: () => this.setState({loadingImage: false}) && onLoad()
    })
  }

  render () {
    return [this.renderMedia(), this.renderLoadCatcher()]
  }
}
