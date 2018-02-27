import MediaWrap from './wrap'

export default MediaWrap.extend.attrs({
  className: 'microlink_card__media_image'
})`
  background: ${({image}) => (image ? `url('${image}') ` : '')}no-repeat center center / cover;
`
