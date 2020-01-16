import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import styled, { css } from 'styled-components'

import { transition } from '../../../../../theme'
import { classNames, formatSeconds, isSmall } from '../../../../../utils'
import { GlobalContext } from '../../../../../context/GlobalState'

import Tooltip from './Tooltip'

const BASE_HEIGHT = 4

const sizeScales = { normal: 0.8, small: 0.7 }

const getProgressBarSize = size => BASE_HEIGHT * (sizeScales[size] || 1)

const OuterWrap = styled('div').attrs(() => ({
  className: classNames.progress
}))`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background: transparent;
  transition: background ${transition.medium}, height ${transition.short};
  will-change: background, height;
  transform-origin: bottom center;

  ${({ cardSize }) => {
    const height = getProgressBarSize(cardSize)

    return css`
      height: ${height}px;

      ${!isSmall(cardSize) &&
        css`
          &:hover {
            background: rgba(225, 232, 237, 0.35);
            height: ${height * 1.6}px;
          }
        `}
    `
  }}
`

const DragBar = styled('div').attrs(({ barWidth }) => ({
  className: classNames.progressBarDrag,
  style: { width: barWidth || 0 }
}))`
  background: rgba(225, 232, 237, 0.5);
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  will-change: width;
`

const Bar = styled('div').attrs(({ barWidth }) => ({
  className: classNames.progressBar,
  style: { width: barWidth || 0 }
}))`
  z-index: 2;
  opacity: 0.8;
  background: #e1e8ed;
  pointer-events: none;
  height: 100%;
  transition: opacity ${transition.medium}, background ${transition.medium},
    transform ${transition.short};
  will-change: width, opacity, background, transform;

  .${classNames.main}:hover & {
    background: #fff;
  }
`

const clampNumber = (num, min, max) => {
  switch (true) {
    case num <= min:
      return min
    case num >= max:
      return max
    default:
      return num
  }
}

const ProgressBar = ({ duration, onClick, progress }) => {
  const {
    props: { size }
  } = useContext(GlobalContext)
  const markerRef = useRef()
  const [isHover, setIsHover] = useState(false)
  const [tooltipLabel, setTooltipLabel] = useState('')
  const [tooltipPosition, setTooltipPosition] = useState(0)
  const [hoveredTime, setHoveredTime] = useState(0)
  const [cursorPosition, setCursorPosition] = useState(0)
  const [isDrag, setIsDrag] = useState(false)

  const width = useMemo(() => `${(progress / duration) * 100}%`, [
    duration,
    progress
  ])

  const isSmallCard = useMemo(() => isSmall(size), [size])

  const onBarClick = useCallback(
    e => {
      if (isSmallCard) {
        return
      }

      e.preventDefault()
      onClick(hoveredTime)
    },
    [hoveredTime, isSmallCard, onClick]
  )

  const onMouseOver = useCallback(e => setIsHover(true), [])

  const onMouseOut = useCallback(e => setIsHover(false), [])

  const onMouseUp = useCallback(event => {
    event.preventDefault()
    setIsDrag(false)
  }, [])

  const onMouseDown = useCallback(event => {
    event.preventDefault()
    setIsDrag(true)
  }, [])

  const onMouseMove = useCallback(
    event => {
      const bounds = event.target.getBoundingClientRect()
      const trackWidth = bounds.width
      const cursorX = Math.floor(event.clientX - bounds.left)
      const time = (cursorX / trackWidth) * duration

      const markerWidth =
        markerRef && markerRef.current
          ? markerRef.current.getBoundingClientRect().width
          : 0

      const clampedDiff = clampNumber(
        Math.floor(cursorX - markerWidth / 2),
        3,
        trackWidth - markerWidth - 3
      )

      setCursorPosition(cursorX)
      setHoveredTime(time)
      setTooltipPosition(clampedDiff)
      setTooltipLabel(formatSeconds(time))

      if (isDrag) {
        onClick(time)
      }
    },
    [isDrag, markerRef, onClick, duration]
  )

  const mouseEvents = useMemo(() => {
    if (isSmallCard) {
      return {}
    }

    return {
      onClick: onBarClick,
      onMouseDown,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp
    }
  }, [
    isSmallCard,
    onBarClick,
    onMouseDown,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp
  ])

  useEffect(() => {
    if (!isHover) {
      setHoveredTime(0)
      setIsDrag(false)
    }
  }, [isHover])

  return (
    <OuterWrap cardSize={size} {...mouseEvents}>
      <Bar cardSize={size} barWidth={width} />

      {!isSmallCard && isDrag && <DragBar barWidth={cursorPosition} />}

      {!isSmallCard && (
        <Tooltip
          handlePositionX={cursorPosition}
          isDragging={isDrag}
          isVisible={isHover}
          label={tooltipLabel}
          positionX={tooltipPosition}
          ref={markerRef}
          size={size}
        />
      )}
    </OuterWrap>
  )
}

export default ProgressBar
