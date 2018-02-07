import { createElement } from 'react'

import {getUrlPath} from '../../../utils'

import Image from './image'
import Video from './video'

const getVideoUrl = ({url, video} = {}) => getUrlPath(video)

export default props => {
  const video = getVideoUrl(props)

  return video
    ? createElement(Video, Object.assign({}, props, {video}))
    : createElement(Image, props)
}
