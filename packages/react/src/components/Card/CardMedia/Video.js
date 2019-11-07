import React, { useMemo } from 'react'
import styled from 'styled-components'

import Wrap from './Wrap'
import Controls from './Controls'
import { imageProxy } from '../../../utils'

const VideoDOM = styled('video')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &::media-controls-start-playback-button {
    display: none;
    appearance: none;
  }
`

const Video = ({
  autoPlay,
  controls: hasControls,
  cardSize,
  isLoading,
  loop,
  imageUrl,
  muted,
  playsInline,
  videoUrl,
  ...props
}) => {
  const mediaProps = useMemo(
    () => ({
      className: 'microlink_card__media microlink_card__media_video',
      src: videoUrl,
      poster: imageProxy(imageUrl),
      playsInline
    }),
    [imageUrl, loop, muted, playsInline, videoUrl]
  )

  return (
    <Wrap
      className='microlink_card__media_wrapper microlink_card__media_video_wrapper'
      cardSize={cardSize}
      isLoading={isLoading}
      {...props}
    >
      <Controls
        autoPlay={autoPlay}
        cardSize={cardSize}
        loop={loop}
        MediaComponent={VideoDOM}
        mediaProps={mediaProps}
        muted={muted}
        showControls={hasControls}
      />
    </Wrap>
  )
}

export default Video
