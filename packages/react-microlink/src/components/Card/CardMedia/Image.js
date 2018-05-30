import MediaWrap from './wrap'

const proxyImage = url => `https://d1r1anxoiubeog.cloudfront.net/${encodeURIComponent(url)}`

const defaultProps = {
  className: 'microlink_card__media microlink_card__media_image'
}

export default MediaWrap.extend.attrs(defaultProps)`
  background-image: ${({image}) => (image ? `url('${proxyImage(image)}')` : '')};
`
