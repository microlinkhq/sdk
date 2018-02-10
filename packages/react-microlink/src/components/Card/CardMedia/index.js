import { createElement } from 'react'

import {getUrlPath} from '../../../utils'

import Image from './image'
import Video from './video'

const isVideo = ({video}) => getUrlPath(video) !== null

export default props => {
  if (!isVideo(props)) {
    return createElement(Image, {
      className: 'microlink_card__media_image',
      ...props
    })
  }

  return createElement(Video, props)
}
