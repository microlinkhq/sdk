import MediaWrap from './wrap'

const defaultProps = {className: 'microlink_card__media_image'}
export default MediaWrap.extend.attrs(defaultProps)`
  background-image: ${({image}) => (image ? `url('${image}')` : '')};
`
