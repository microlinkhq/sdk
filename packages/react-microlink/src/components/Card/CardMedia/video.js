import React from 'react'
import styled, {css} from 'styled-components'

import {media, isLarge, getUrlPath} from '../../../utils'

const largeStyle = css`
  flex: 1;

  &::before {
    padding-bottom: 0;
  }
`

const VideoWrapper = styled.div`
  background-color: #e1e8ed;
  display: block;
  flex: 0 0 125px;
  overflow: hidden;
  height: auto;
  position: relative;
  transition: flex-basis .25s ease-in-out;

  &:before, &:after {
    content: '';
  }

  &:before {
    padding-bottom: 100%;
    display: block;
  }

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #e1e8ed;
    transition: opacity .3s ease-out;
    z-index: 101;
    ${({loading}) => loading ? `opacity: 1;` : `opacity: 0;`}
  }

  ${({cardSize}) => isLarge(cardSize) ? largeStyle : media.mobile`
    flex: 0 0 92px;
  `}
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
