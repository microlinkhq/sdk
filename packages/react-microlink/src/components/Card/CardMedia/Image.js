import MediaWrap from './wrap'

export default MediaWrap.extend`
  background: no-repeat center center / cover;
  ${({image}) => image && `background-image: url(${image});`}
`
