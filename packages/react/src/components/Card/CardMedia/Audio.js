import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {
  PauseCircle,
  PlayCircle,
  Rewind,
  FastForward,
  Volume,
  Volume2
} from 'react-feather'

import Image from './Image'
import { ProgressBar } from './controls'

const PlaybackToggleWrap = styled('div')`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const PlaybackToggle = styled(PlayCircle)`
  margin: 0 8px;
`

const ShadowButton = styled('div')`
  backface-visibility: hidden;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.15s ease;

  > svg {
    display: block;
  }

  &:active:not(:focus) {
    transform: scale(1.075);
  }
`

const BottomControls = styled('div')`
  z-index: 2;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PlaybackRateButton = styled(ShadowButton)`
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 9999px;
  padding: 1px 5px;
  min-width: 26px;
  text-align: center;
  color: #fff;
  margin-left: 10px;
`

const getNextPlaybackRate = rate => {
  if (rate === 1) {
    return 1.5
  }

  if (rate === 1.5) {
    return 2
  }

  return 1
}

const Audio = ({ audioUrl, autoplay, cardSize, imageUrl }) => {
  const audioRef = useRef()
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)

  const onPlaybackToggle = event => {
    event.preventDefault()

    if (audioRef.current.paused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  const onTimeJumpClick = (event, type) => {
    event.preventDefault()
    event.stopPropagation()

    if (type === 'rewind') {
      audioRef.current.currentTime -= 10
    } else {
      audioRef.current.currentTime += 30
    }
  }

  const onTimeUpdate = event => {
    if (audioRef && audioRef.current) {
      const { currentTime, duration } = audioRef.current
      setProgress((currentTime / duration) * 100)
    }
  }

  const onMuteClick = event => {
    event.preventDefault()
    event.stopPropagation()

    audioRef.current.muted = !isMuted
    setIsMuted(prevState => !prevState)
  }

  const onPlaybackRateClick = event => {
    event.preventDefault()
    event.stopPropagation()

    const nextRate = getNextPlaybackRate(playbackRate)

    setPlaybackRate(nextRate)

    audioRef.current.playbackRate = nextRate
  }

  return (
    <Image imageUrl={imageUrl} cardSize={cardSize}>
      <audio
        ref={audioRef}
        src={audioUrl}
        autoPlay={autoplay}
        onTimeUpdate={onTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <PlaybackToggleWrap onClick={onPlaybackToggle}>
        <ShadowButton onClick={event => onTimeJumpClick(event, 'rewind')}>
          <Rewind color='white' size={22} />
        </ShadowButton>

        <ShadowButton>
          <PlaybackToggle
            as={isPlaying ? PauseCircle : PlayCircle}
            color='white'
            size={48}
          />
        </ShadowButton>

        <ShadowButton onClick={event => onTimeJumpClick(event, 'fastforward')}>
          <FastForward color='white' size={22} />
        </ShadowButton>
      </PlaybackToggleWrap>

      <BottomControls>
        <ShadowButton onClick={onMuteClick}>
          {!isMuted ? (
            <Volume2 size={20} color='white' />
          ) : (
            <Volume size={20} color='white' />
          )}
        </ShadowButton>

        <PlaybackRateButton onClick={onPlaybackRateClick}>
          {playbackRate}x
        </PlaybackRateButton>
      </BottomControls>

      <ProgressBar visible cardSize={cardSize} progress={progress} />
    </Image>
  )
}

export default Audio
