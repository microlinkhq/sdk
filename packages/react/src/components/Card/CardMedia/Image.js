import styled from 'styled-components'
import MediaWrap from './wrap'
import { imageProxy } from '../../../utils'

const Image = styled(MediaWrap)`
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url('${imageProxy(imageUrl)}')` : ''};
`

Image.defaultProps = {
  className: 'microlink_card__media microlink_card__media_image'
}

export default Image
