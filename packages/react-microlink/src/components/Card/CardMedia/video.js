import React from 'react'
import styled, {css} from 'styled-components'

import { media, isLarge } from '../../../utils'

const largeStyle = css`
flex: 1;

&::before {
  padding-bottom: 0;
}

${media.mobile`
  flex: 0 0 92px;
`}
`

const VideoWrapper = styled.div`
display: block;
flex: 0 0 125px;
overflow: hidden;

// aspect ratio 1x1
// http://tachyons.io/components/layout/aspect-ratio-1x1/index.html
height: 0;
position: relative;
padding-bottom: 125px;
`

const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;

// aspect ratio 1x1
// http://tachyons.io/components/layout/aspect-ratio-1x1/index.html
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 100;
`

const CardVideo = ({video, image, muted, autoPlay, loop, ...props}) => {
  return (
    <VideoWrapper>
      <Video
        src={video}
        poster={image}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
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
