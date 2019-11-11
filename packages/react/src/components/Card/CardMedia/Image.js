import styled from 'styled-components'

import Wrap from './Wrap'
import { classNames, imageProxy } from '../../../utils'

const Image = styled(Wrap).attrs({
  className: `${classNames.media} ${classNames.image}`
})`
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url('${imageProxy(imageUrl)}')` : ''};
`

export default Image
