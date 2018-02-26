import MediaWrap from './wrap'

export default MediaWrap.extend.attrs({
  className: 'microlink_card__media_image'
})`
  background: no-repeat center center / cover;
  background-image: ${({image}) => `url('${image}')` || ''};
`
