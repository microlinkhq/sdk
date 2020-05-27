import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import styled, { css } from 'styled-components'

import FooterControls from './FooterControls'
import PlaybackButton from './PlaybackButton'
import ProgressBar from './ProgressBar'
import SeekButton from './SeekButton'
import Spinner from './Spinner'
import { transition } from '../../../../theme'

import {
  classNames,
  formatSeconds,
  isSmall,
  isFunction,
  clampNumber
} from '../../../../utils'

import { GlobalContext } from '../../../../context/GlobalState'

const SPACE_KEY = 32
const L_ARROW_KEY = 37
const R_ARROW_KEY = 39
const M_KEY = 77

const OuterWrap = styled('div').attrs({ className: classNames.mediaControls })`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: ${transition.long('background')}, ${transition.medium('opacity')};
  will-change: background;
  display: flex;
  flex-direction: column;
  pointer-events: auto;

  ${({ hasInteracted, isDragging, isPlaying }) => {
    const bg = 'rgba(0, 0, 0, 0.35)'
    const dragBg = 'rgba(0, 0, 0, 0.2)'
    const isPaused = hasInteracted && !isPlaying

    return css`
      .${classNames.main}:hover & {
        background: ${!isDragging ? bg : dragBg};
      }

      .${classNames.main}:not(:hover) & {
        opacity: ${!hasInteracted || isPaused ? 1 : 0};
        ${isPaused && `background: ${bg}`};
      }
    `
  }}
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

const ControlsTop = styled('div')`
  flex: 1;

  ${({ isVisible }) =>
    !isVisible &&
    css`
    *[class*="${classNames.mediaControls}"]:not(.${classNames.progressTime}) {
      transition: ${transition.medium('opacity', 'visibility')};
      opacity: 0;
      visibility: hidden;
    }
  `}
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

const Controls = ({ MediaComponent, mediaProps }) => {
  const {
    props: { autoPlay, controls, mediaRef: propRef, muted, loop, size }
  } = useContext(GlobalContext)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [buffered, setBuffered] = useState([])
  const [cursorX, setCursorX] = useState(0)
  const [hoveredTime, setHoveredTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [isBuffering, setIsBuffering] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [hasInteracted, setHasInteracted] = useState(autoPlay)
  const [pausedByDrag, setPausedByDrag] = useState(false)

  const mediaRef = useRef()
  const setRefs = useCallback(
    node => {
      mediaRef.current = node

      if (propRef) {
        if (isFunction(propRef)) {
          propRef(node)
        } else {
          propRef.current = node
        }
      }
    },
    [propRef]
  )

  const isNotSmall = useMemo(() => !isSmall(size), [size])

  const mediaEvents = useMemo(
    () => ({
      onCanPlay: () => setIsBuffering(false),
      onLoadedMetadata: e => setDuration(e.currentTarget.duration),
      onPause: () => setIsPlaying(false),
      onPlay: () => setIsPlaying(true),
      onPlaying: () => setIsBuffering(false),
      onProgress: e => setBuffered(e.currentTarget.buffered),
      onRateChange: e => setPlaybackRate(e.currentTarget.playbackRate),
      onTimeUpdate: e => setProgress(e.currentTarget.currentTime),
      onVolumeChange: e => setIsMuted(e.currentTarget.muted),
      onWaiting: e => setIsBuffering(true)
    }),
    []
  )

  const evaluateCursorPosition = useCallback(event => {
    if (mediaRef.current) {
      const bounds = event.currentTarget.getBoundingClientRect()
      const cursor = clampNumber(
        Math.floor(event.clientX - bounds.left),
        0,
        bounds.width
      )
      const time = (cursor / bounds.width) * mediaRef.current.duration

      return { cursor, time }
    }

    return { cursor: 0, time: 0 }
  }, [])

  const togglePlayback = useCallback(() => {
    if (mediaRef.current) {
      if (mediaRef.current.paused) {
        if (!hasInteracted) {
          setHasInteracted(true)
        }

        mediaRef.current.play()
      } else {
        mediaRef.current.pause()
      }
    }
  }, [hasInteracted])

  const jumpTo = useCallback(time => {
    if (mediaRef.current) {
      const t = clampNumber(time, 0, mediaRef.current.duration)

      mediaRef.current.currentTime = t
      setProgress(t)
    }
  }, [])

  const onSeekClick = useCallback(
    (event, type) => {
      event.preventDefault()
      event.stopPropagation()

      if (mediaRef.current) {
        const { currentTime } = mediaRef.current

        jumpTo(type === 'rewind' ? currentTime - 10 : currentTime + 30)
      }
    },
    [jumpTo]
  )

  const onMuteClick = useCallback(event => {
    event.preventDefault()
    event.stopPropagation()

    if (mediaRef.current) {
      mediaRef.current.muted = !mediaRef.current.muted
    }
  }, [])

  const onPlaybackRateClick = useCallback(event => {
    event.preventDefault()
    event.stopPropagation()

    if (mediaRef.current) {
      mediaRef.current.playbackRate = getNextPlaybackRate(
        mediaRef.current.playbackRate
      )
    }
  }, [])

  const onProgressBarClick = useCallback(event => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(false)
  }, [])

  const onProgressBarMouseDown = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()
      setIsDragging(true)

      const { time } = evaluateCursorPosition(event)
      jumpTo(time)
    },
    [evaluateCursorPosition, jumpTo]
  )

  const onProgressBarMouseOver = useCallback(() => setIsHovering(true), [])

  const onWrapClick = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()

      if (isDragging) {
        setIsDragging(false)
      } else {
        togglePlayback()
      }
    },
    [isDragging, togglePlayback]
  )

  const onWrapMouseMove = useCallback(
    event => {
      if ((isDragging || isHovering) && mediaRef.current) {
        event.preventDefault()
        const { cursor, time } = evaluateCursorPosition(event)

        setHoveredTime(time)
        setCursorX(cursor)

        if (isDragging) {
          if (!mediaRef.current.paused) {
            mediaRef.current.pause()
            setPausedByDrag(true)
          }

          jumpTo(time)
        }
      }
    },
    [evaluateCursorPosition, isDragging, isHovering, jumpTo]
  )

  const onWrapMouseOver = useCallback(
    event => {
      if (isDragging && event.buttons === 0) {
        setIsDragging(false)
      }
    },
    [isDragging]
  )

  const onWrapKeyDown = useCallback(
    event => {
      if (isDragging) {
        return
      }

      const { keyCode } = event

      if (
        [SPACE_KEY, L_ARROW_KEY, R_ARROW_KEY, M_KEY].includes(keyCode) &&
        mediaRef.current
      ) {
        event.preventDefault()

        switch (keyCode) {
          case SPACE_KEY:
            togglePlayback()
            break
          case L_ARROW_KEY:
            jumpTo(mediaRef.current.currentTime - 5)
            break
          case R_ARROW_KEY:
            jumpTo(mediaRef.current.currentTime + 5)
            break
          case M_KEY:
            mediaRef.current.muted = !mediaRef.current.muted
            break
        }
      }
    },
    [duration, isDragging, jumpTo, togglePlayback]
  )

  const outerWrapEvents = useMemo(
    () => ({
      onClick: onWrapClick,
      onKeyDown: onWrapKeyDown,
      onMouseMove: onWrapMouseMove,
      onMouseOut: () => setIsHovering(false),
      onMouseOver: onWrapMouseOver
    }),
    [onWrapClick, onWrapKeyDown, onWrapMouseMove, onWrapMouseOver]
  )

  const outerWrapTitle = useMemo(() => (hasInteracted ? { title: '' } : {}), [
    hasInteracted
  ])

  const bufferedMedia = useMemo(() => {
    if (buffered && buffered.length && mediaRef.current) {
      return [...Array(buffered.length).keys()].map(index => {
        return {
          start: buffered.start(index) / mediaRef.current.duration,
          end: buffered.end(index) / mediaRef.current.duration
        }
      })
    }

    return []
  }, [buffered])

  const currentTime = useMemo(() => formatSeconds(progress || 0), [progress])
  const endTime = useMemo(() => formatSeconds(duration || 0), [duration])

  const footerControlsProps = useMemo(
    () => ({
      cardSize: size,
      currentTime,
      endTime,
      isMuted,
      onMuteClick,
      onPlaybackRateClick,
      playbackRate
    }),
    [
      currentTime,
      endTime,
      isMuted,
      onMuteClick,
      onPlaybackRateClick,
      playbackRate,
      size
    ]
  )

  const progressBarProps = useMemo(
    () => ({
      bufferedMedia,
      cursorX,
      duration,
      hoveredTime,
      isDragging,
      isHovering,
      onClick: onProgressBarClick,
      onMouseDown: onProgressBarMouseDown,
      onMouseOver: onProgressBarMouseOver,
      progress,
      showTooltip: isDragging || isHovering
    }),
    [
      bufferedMedia,
      cursorX,
      duration,
      hoveredTime,
      isDragging,
      isHovering,
      onProgressBarClick,
      onProgressBarMouseDown,
      onProgressBarMouseOver,
      progress
    ]
  )

  useEffect(() => {
    if (
      !isDragging &&
      pausedByDrag &&
      mediaRef.current &&
      mediaRef.current.paused
    ) {
      mediaRef.current.play()
      setPausedByDrag(false)
    }
  }, [pausedByDrag, isDragging])

  return (
    <>
      <MediaComponent
        {...mediaProps}
        {...mediaEvents}
        ref={setRefs}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />

      {controls && (
        <OuterWrap
          {...outerWrapTitle}
          tabIndex={0}
          hasInteracted={hasInteracted}
          isDragging={isDragging}
          isPlaying={isPlaying}
          {...outerWrapEvents}
        >
          <Spinner size={size} isVisible={isBuffering} />

          {!hasInteracted ? (
            <InnerWrap>
              <PlaybackButton cardSize={size} />
            </InnerWrap>
          ) : (
            <>
              <ControlsTop isVisible={!isDragging}>
                <InnerWrap>
                  {isNotSmall && (
                    <SeekButton
                      className={classNames.rwControl}
                      type='rewind'
                      cardSize={size}
                      onClick={event => onSeekClick(event, 'rewind')}
                    />
                  )}

                  <PlaybackButton cardSize={size} isPlaying={isPlaying} />

                  {isNotSmall && (
                    <SeekButton
                      className={classNames.ffwControl}
                      type='fastforward'
                      cardSize={size}
                      onClick={event => onSeekClick(event, 'fastforward')}
                    />
                  )}
                </InnerWrap>

                {isNotSmall && <FooterControls {...footerControlsProps} />}
              </ControlsTop>

              <ProgressBar {...progressBarProps} />
            </>
          )}
        </OuterWrap>
      )}
    </>
  )
}

export default Controls
