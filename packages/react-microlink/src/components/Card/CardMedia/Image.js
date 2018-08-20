import MediaWrap from './wrap'
import { imageProxy } from '../../../utils'

const defaultProps = {
  className: 'microlink_card__media microlink_card__media_image'
}

export default MediaWrap.extend.attrs(defaultProps)`
  background-image: ${({image}) => (image ? `url('${imageProxy(image)}')` : '')};
`
