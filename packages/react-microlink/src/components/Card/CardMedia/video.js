import React from 'react'
import styled from 'styled-components'

import {getUrlPath} from '../../../utils'

import MediaWrap from './wrap'

const VideoWrapper = MediaWrap.extend`
  &::after {
    z-index: 101;
  }
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  ${({autoPlay}) => autoPlay && `
    &::media-controls-start-playback-button {
      display: none;
      appearance: none;
    }
  `}
`

const CardVideo = ({
  cardSize,
  video,
  image,
  muted,
  autoPlay,
  loading,
  loop
}) => {
  return (
    <VideoWrapper
      className='microlink_card__media_video_wrapper'
      cardSize={cardSize}
      loading={loading}>
      <Video
        className='microlink_card__media_video'
        src={getUrlPath(video)}
        poster={image}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
        playsinline
      />
    </VideoWrapper>
  )
}

CardVideo.defaultProps = {
  controls: true,
  muted: true,
  loop: true,
  autoPlay: true
}
export default CardVideo
