import React, { useCallback, useRef, useMemo, useState } from 'react'
import styled from 'styled-components'

import PlaybackButton from '../controls/PlaybackButton'
import FooterControls from './FooterControls'
import ProgressBar from '../controls/ProgressBar'
import SeekButton from '../controls/SeekButton'
import { transition } from '../../../../theme'
import { isSmall } from '../../../../utils'
import Image from '../Image'

const OuterWrap = styled('div')`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: background ${transition.medium};

  .microlink_card:hover & {
    background: rgba(0, 0, 0, 0.3);
  }
`

const InnerWrap = styled('div')`
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

const getNextPlaybackRate = rate => {
  switch (rate) {
    case 1:
      return 1.25
    case 1.25:
      return 1.5
    case 1.5:
      return 2
    default:
      return 1
  }
}

const formatSeconds = secs => {
  const secsToNum = parseInt(secs, 10)
  const hours = Math.floor(secsToNum / 3600)
  const minutes = Math.floor(secsToNum / 60) % 60
  const seconds = secsToNum % 60

  return [hours, minutes, seconds]
    .filter((v, i) => v > 0 || i > 0)
    .map(v => (v >= 10 ? v : `0${v}`))
    .join(':')
}

const Audio = ({ audioUrl, autoplay, cardSize, imageUrl }) => {
  const audioRef = useRef()
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)

  const isNotSmall = useMemo(() => !isSmall(cardSize), [cardSize])

  const setInitialDuration = useCallback(() => {
    if (audioRef && audioRef.current) {
      setDuration(audioRef.current.duration || 0)
    }
  }, [audioRef.current])

  const onPlaybackToggle = useCallback(
    event => {
      event.preventDefault()

      if (audioRef && audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play()
        } else {
          audioRef.current.pause()
        }
      }
    },
    [audioRef.current]
  )

  const onSeekClick = useCallback(
    (event, type) => {
      event.preventDefault()
      event.stopPropagation()

      if (type === 'rewind') {
        audioRef.current.currentTime -= 10
      } else {
        audioRef.current.currentTime += 30
      }
    },
    [audioRef.current]
  )

  const onTimeUpdate = useCallback(
    event => {
      if (audioRef && audioRef.current) {
        setProgress(audioRef.current.currentTime)
      }
    },
    [audioRef.current]
  )

  const onMuteClick = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()

      if (audioRef && audioRef.current) {
        audioRef.current.muted = !isMuted
        setIsMuted(prevState => !prevState)
      }
    },
    [audioRef.current, isMuted]
  )

  const onPlaybackRateClick = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()

      if (audioRef && audioRef.current) {
        const nextRate = getNextPlaybackRate(playbackRate)
        audioRef.current.playbackRate = nextRate
        setPlaybackRate(nextRate)
      }
    },
    [audioRef.current, playbackRate]
  )

  const currentTime = useMemo(() => formatSeconds(progress || 0), [progress])
  const endTime = useMemo(() => formatSeconds(duration || 0), [duration])

  const progressBarWidth = useMemo(() => (progress / duration) * 100, [
    progress,
    duration
  ])

  return (
    <Image
      imageUrl={imageUrl}
      cardSize={cardSize}
      className='microlink_card__media microlink_card__media_audio'
    >
      <audio
        ref={audioRef}
        src={audioUrl}
        autoPlay={autoplay}
        onTimeUpdate={onTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={setInitialDuration}
      />

      <OuterWrap>
        <InnerWrap>
          {isNotSmall && (
            <SeekButton
              type='rewind'
              cardSize={cardSize}
              onClick={event => onSeekClick(event, 'rewind')}
            />
          )}

          <PlaybackButton
            cardSize={cardSize}
            isPlaying={isPlaying}
            onClick={onPlaybackToggle}
          />

          {isNotSmall && (
            <SeekButton
              type='fastforward'
              cardSize={cardSize}
              onClick={event => onSeekClick(event, 'fastforward')}
            />
          )}
        </InnerWrap>

        {isNotSmall && (
          <FooterControls
            cardSize={cardSize}
            currentTime={currentTime}
            endTime={endTime}
            isMuted={isMuted}
            onMuteClick={onMuteClick}
            onPlaybackRateClick={onPlaybackRateClick}
            playbackRate={playbackRate}
          />
        )}

        <ProgressBar cardSize={cardSize} progress={progressBarWidth} />
      </OuterWrap>
    </Image>
  )
}

export default Audio
