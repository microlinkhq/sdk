import {createElement, Component} from 'react'

import {getUrlPath} from '../../../utils'

import Image from './image'
import Video from './video'
import {ImageLoadCatcher} from './loader'

const isVideo = ({video}) => getUrlPath(video) !== null

export default class CardMedia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingImage: props.image ? true : false
    }
  }

  imageLoaded() {
    this.setState({loadingImage: false})
  }

  renderMedia() {
    const {loadingImage} = this.state
    const el = !isVideo(this.props) ? Image : Video
    return createElement(el, {
      ...this.props,
      key: 'media',
      loading: loadingImage
    })
  }

  renderLoadCatcher() {
    const {image} = this.props
    return image && createElement(ImageLoadCatcher, {
      key: 'imageLoader',
      src: image,
      onLoad: () => this.imageLoaded()
    })
  }

  render() {
    return [this.renderMedia(), this.renderLoadCatcher()]
  }
}
