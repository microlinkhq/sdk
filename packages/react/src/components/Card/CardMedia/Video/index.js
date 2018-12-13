import React from 'react'
import styled from 'styled-components'

import { PlayButton, ProgressBar } from './controls'
import MediaWrap from '../wrap'
import { getUrlPath, imageProxy } from '../../../../utils'

const Video = styled.video`
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

function CardVideo (props) {
  const videoRef = React.useRef()
  const [playing, setPlaying] = React.useState(props.autoPlay)
  const [progress, setProgress] = React.useState(0)

  function togglePlayback (event) {
    event.preventDefault()
    setPlaying(playing => {
      const nextValue = !playing
      const action = nextValue ? 'play' : 'pause'
      videoRef.current[action]()
      return nextValue
    })
  }

  function onTimeUpdate () {
    const progress =
      videoRef.current.currentTime / videoRef.current.duration * 100
    setProgress(progress)
  }

  const {
    autoPlay,
    cardSize,
    controls,
    image,
    loading,
    loop,
    muted,
    playsInline,
    video,
    ...restProps
  } = props

  return (
    <MediaWrap
      className='microlink_card__media_video_wrapper'
      cardSize={cardSize}
      loading={loading}
      onClick={togglePlayback}
      {...restProps}
    >
      <Video
        className='microlink_card__media microlink_card__media_video'
        src={getUrlPath(video)}
        poster={imageProxy(image)}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
        playsInline={playsInline}
        ref={videoRef}
        {...(controls ? { onTimeUpdate } : {})}
      />
      <PlayButton cardSize={cardSize} visible={controls && !playing} />
      {controls && (
        <ProgressBar
          cardSize={cardSize}
          progress={progress}
          playing={playing}
        />
      )}
    </MediaWrap>
  )
}

export default CardVideo
