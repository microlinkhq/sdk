import { createElement } from 'react'

import Image from './image'
import Video from './video'

export default props => createElement(
  props.video ? Video : Image,
  props
)
