import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import PlaybackButton from './controls/PlaybackButton'
import ProgressBar, { getProgressBarSize } from './controls/ProgressBar'
import Wrap from './Wrap'
import { imageProxy } from '../../../utils'

const Video = styled('video')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${({ autoPlay }) =>
    autoPlay &&
    `
    &::media-controls-start-playback-button {
      display: none;
      appearance: none;
    }
  `};
`

const VideoPlaybackButton = styled(PlaybackButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.15s ease-in-out;
`

const VideoProgressBar = styled(ProgressBar)(
  props => `
  .microlink_card:hover & {
    height: ${getProgressBarSize(props)}px;
  }
`
)

function CardVideo (props) {
  const {
    controls: hasControls,
    autoPlay,
    cardSize,
    controls,
    imageUrl,
    videoUrl,
    isLoading,
    loop,
    muted,
    playsInline,
    ...restProps
  } = props
  const [playing, setPlaying] = useState(autoPlay)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef()

  const togglePlayback = event => {
    event.preventDefault()
    setPlaying(playing => {
      const nextValue = !playing
      const action = nextValue ? 'play' : 'pause'
      videoRef.current[action]()
      return nextValue
    })
  }

  const onTimeUpdate = () => {
    if (videoRef && videoRef.current) {
      const { currentTime, duration } = videoRef.current
      setProgress((currentTime / duration) * 100)
    }
  }

  return (
    <Wrap
      className='microlink_card__media_video_wrapper'
      cardSize={cardSize}
      isLoading={isLoading}
      onClick={togglePlayback}
      {...restProps}
    >
      <Video
        className='microlink_card__media microlink_card__media_video'
        src={videoUrl}
        poster={imageProxy(imageUrl)}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
        playsInline={playsInline}
        ref={videoRef}
        {...(controls ? { onTimeUpdate } : {})}
      />
      <VideoPlaybackButton cardSize={cardSize} visible={controls && !playing} />
      {controls && (
        <VideoProgressBar cardSize={cardSize} progress={progress} visible />
      )}
    </Wrap>
  )
}

export default CardVideo
