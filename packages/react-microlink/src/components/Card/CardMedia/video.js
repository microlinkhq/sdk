import React from 'react'
import styled, {css} from 'styled-components'

import { media, isLarge } from '../../../utils'

const largeStyle = css`
flex: 1;

&::before {
  padding-bottom: 0;
}
`

const VideoWrapper = styled.div`
  display: block;
  flex: 0 0 125px;
  overflow: hidden;
  height: auto;
  position: relative;

  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
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

  ${({autoplay}) => autoplay && `
    &::-webkit-media-controls-start-playback-button {
      display: none!important;
      -webkit-appearance: none;
    }
  `}
`

const CardVideo = ({cardSize, video, image, muted, autoplay, loop}) => {
  return (
    <VideoWrapper cardSize={cardSize}>
      <Video
        src={video}
        poster={image}
        muted={muted}
        autoplay={autoplay}
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
  autoplay: true
}
export default CardVideo
