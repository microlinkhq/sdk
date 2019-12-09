import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useContext
} from 'react'
import styled from 'styled-components'

import FooterControls from './FooterControls'
import PlaybackButton from './PlaybackButton'
import ProgressBar from './ProgressBar'
import SeekButton from './SeekButton'
import { transition } from '../../../../theme'
import { classNames, isSmall } from '../../../../utils'
import { GlobalContext } from '../../../../context/GlobalState'

const OuterWrap = styled('div').attrs({ className: classNames.mediaControls })`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: background ${transition.long};

  .${classNames.main}:hover & {
    background: rgba(0, 0, 0, 0.35);
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
  transition: opacity ${transition.medium};

  .${classNames.main}:not(:hover) & {
    opacity: ${({ opacity = 0 }) => opacity};
  }
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

const Controls = ({ MediaComponent, mediaProps }) => {
  const {
    props: { autoPlay, controls, muted, loop, size }
  } = useContext(GlobalContext)
  const mediaRef = useRef()
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [hasInteracted, setHasInteracted] = useState(autoPlay)

  const isNotSmall = useMemo(() => !isSmall(size), [size])

  const setInitialDuration = useCallback(() => {
    if (mediaRef && mediaRef.current) {
      setDuration(mediaRef.current.duration || 0)
    }
  }, [mediaRef.current])

  const onPlaybackToggle = useCallback(
    event => {
      event.preventDefault()

      if (mediaRef && mediaRef.current) {
        if (mediaRef.current.paused) {
          if (!hasInteracted) {
            setHasInteracted(true)
          }

          mediaRef.current.play()
        } else {
          mediaRef.current.pause()
        }
      }
    },
    [mediaRef.current]
  )

  const onSeekClick = useCallback(
    (event, type) => {
      event.preventDefault()
      event.stopPropagation()

      if (type === 'rewind') {
        mediaRef.current.currentTime -= 10
      } else {
        mediaRef.current.currentTime += 30
      }
    },
    [mediaRef.current]
  )

  const onTimeUpdate = useCallback(
    event => {
      if (mediaRef && mediaRef.current) {
        setProgress(mediaRef.current.currentTime)
      }
    },
    [mediaRef.current]
  )

  const onMuteClick = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()

      if (mediaRef && mediaRef.current) {
        mediaRef.current.muted = !isMuted
        setIsMuted(prevState => !prevState)
      }
    },
    [mediaRef.current, isMuted]
  )

  const onPlaybackRateClick = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()

      if (mediaRef && mediaRef.current) {
        const nextRate = getNextPlaybackRate(playbackRate)
        mediaRef.current.playbackRate = nextRate
        setPlaybackRate(nextRate)
      }
    },
    [mediaRef.current, playbackRate]
  )

  const currentTime = useMemo(() => formatSeconds(progress || 0), [progress])
  const endTime = useMemo(() => formatSeconds(duration || 0), [duration])

  const progressBarWidth = useMemo(() => (progress / duration) * 100, [
    progress,
    duration
  ])

  return (
    <>
      <MediaComponent
        {...mediaProps}
        ref={mediaRef}
        autoPlay={autoPlay}
        loop={loop}
        onTimeUpdate={onTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={setInitialDuration}
        muted={muted}
      />

      {controls && (
        <OuterWrap>
          {!hasInteracted ? (
            <InnerWrap opacity={1}>
              <PlaybackButton cardSize={size} onClick={onPlaybackToggle} />
            </InnerWrap>
          ) : (
            <>
              <InnerWrap>
                {isNotSmall && (
                  <SeekButton
                    className={classNames.rwControl}
                    type='rewind'
                    cardSize={size}
                    onClick={event => onSeekClick(event, 'rewind')}
                  />
                )}

                <PlaybackButton
                  cardSize={size}
                  isPlaying={isPlaying}
                  onClick={onPlaybackToggle}
                />

                {isNotSmall && (
                  <SeekButton
                    className={classNames.ffwControl}
                    type='fastforward'
                    cardSize={size}
                    onClick={event => onSeekClick(event, 'fastforward')}
                  />
                )}
              </InnerWrap>

              {isNotSmall && (
                <FooterControls
                  cardSize={size}
                  currentTime={currentTime}
                  endTime={endTime}
                  isMuted={isMuted}
                  onMuteClick={onMuteClick}
                  onPlaybackRateClick={onPlaybackRateClick}
                  playbackRate={playbackRate}
                />
              )}
            </>
          )}

          <ProgressBar cardSize={size} progress={progressBarWidth} />
        </OuterWrap>
      )}
    </>
  )
}

export default Controls
