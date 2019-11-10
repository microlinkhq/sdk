import styled from 'styled-components'
import Wrap from './Wrap'
import { imageProxy } from '../../../utils'

const Image = styled(Wrap)`
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url('${imageProxy(imageUrl)}')` : ''};
`

Image.defaultProps = {
  className: 'microlink_card__media microlink_card__media_image'
}

export default Image
