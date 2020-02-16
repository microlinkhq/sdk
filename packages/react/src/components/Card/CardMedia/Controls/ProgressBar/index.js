import React, { useCallback, useContext, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { transition } from '../../../../../theme'
import {
  clampNumber,
  classNames,
  formatSeconds,
  isSmall
} from '../../../../../utils'
import { GlobalContext } from '../../../../../context/GlobalState'

import Scrubber from './Scrubber'
import Tooltip from './Tooltip'

const HEIGHT = 6
const PADDING = 6

const heightScales = { normal: 0.7, small: 0.6 }
const activeHeightScales = { small: 0.9, large: 1.4 }

const getProgressBarHeight = size =>
  Math.floor(HEIGHT * (heightScales[size] || 1))

const getProgressBarActiveHeight = size =>
  Math.floor(HEIGHT * (activeHeightScales[size] || 1))

const OuterWrap = styled('div').attrs(() => ({
  className: classNames.progressBar
}))`
  position: relative;
  padding: ${PADDING}px ${PADDING / 2}px ${PADDING / 2}px;
  z-index: 2;
  backface-visibility: hidden;
`

const BarsWrap = styled('div').attrs(({ cardSize, isDragging }) => {
  if (isDragging) {
    const activeHeight = getProgressBarActiveHeight(cardSize)

    return {
      style: {
        height: `${activeHeight}px`
      }
    }
  }

  return {}
})`
  background: transparent;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.15);
  transition: ${transition.short('height')};
  will-change: height;
  pointer-events: none;
  position: relative;

  ${({ cardSize }) => {
    const height = getProgressBarHeight(cardSize)
    const activeHeight = getProgressBarActiveHeight(cardSize)

    return css`
      height: ${height}px;

      ${OuterWrap}:hover & {
        height: ${activeHeight}px;
      }
    `
  }}
`

const ProgressLine = styled('div')`
  border-radius: inherit;
  height: 100%;
  position: relative;
  overflow: hidden;
`

const ProgressMask = styled('div').attrs(({ maskScale }) => ({
  style: {
    transform: `scaleX(${maskScale})`
  }
}))`
  position: absolute;
  left: 0;
  top: -50%;
  height: 200%;
  width: 100%;
  background: #ffffff;
  transform-origin: left center;
  will-change: transform;
`

const ProgressHover = styled('div').attrs(
  ({ cursorRatio, isHovering, progressPercent }) => ({
    style: {
      left: progressPercent,
      transform: `scaleX(${cursorRatio})`,
      opacity: isHovering ? 1 : 0,
      visibility: isHovering ? 'visible' : 'hidden'
    }
  })
)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  transform-origin: left center;
  transition: ${transition.short('opacity', 'visibility')};
  will-change: left, transform, opacity, visible;
`

const BufferedChunk = styled('div').attrs(({ start, end }) => ({
  style: {
    left: `${start}px`,
    right: `${end}px`
  }
}))`
  background: rgba(255, 255, 255, 0.35);
  position: absolute;
  top: 0;
  bottom: 0;
`

const ProgressBar = ({
  bufferedMedia,
  cursorX,
  duration,
  hoveredTime,
  isDragging,
  isHovering,
  onClick,
  onMouseDown,
  onMouseOver,
  progress,
  showTooltip
}) => {
  const {
    props: { size }
  } = useContext(GlobalContext)
  const wrapRef = useRef()
  const tooltipRef = useRef()

  const isSmallCard = useMemo(() => isSmall(size), [size])

  const getWrapWidth = useCallback(() => {
    if (wrapRef.current) {
      return wrapRef.current.getBoundingClientRect().width - PADDING
    }

    return 0
  }, [])

  const progressRatio = useMemo(() => clampNumber(progress / duration, 0, 1), [
    duration,
    progress
  ])

  const progressPercent = useMemo(
    () => `${clampNumber(progressRatio * 100, 1, 99)}%`,
    [progressRatio]
  )

  const cursorRatio = useMemo(() => {
    if (wrapRef.current) {
      const wrapWidth = getWrapWidth()
      const startPoint = progressRatio * wrapWidth
      const cursorPosition = cursorX - startPoint
      const width = wrapWidth - startPoint

      if (cursorPosition > 0) {
        return clampNumber((cursorPosition / width).toFixed(3), 0, 0.99)
      }
    }

    return 0
  }, [cursorX, getWrapWidth, progressRatio])

  const bufferedMediaChunks = useMemo(() => {
    const wrapWidth = getWrapWidth()

    return bufferedMedia.map((chunk, key) => {
      const start = chunk.start * wrapWidth
      const end = wrapWidth - chunk.end * wrapWidth

      return { key, start, end }
    })
  }, [bufferedMedia, getWrapWidth])

  const tooltipLabel = useMemo(() => formatSeconds(hoveredTime), [hoveredTime])

  const tooltipPositionX = useMemo(() => {
    if (wrapRef.current && tooltipRef.current) {
      const wrapWidth = getWrapWidth()
      const tooltipWidth = tooltipRef.current.getBoundingClientRect().width
      const tooltipHalf = tooltipWidth / 2

      return clampNumber(cursorX, tooltipHalf, wrapWidth - tooltipHalf)
    }

    return 0
  }, [cursorX, getWrapWidth])

  const mouseEvents = useMemo(
    () => ({
      onClick,
      onMouseDown,
      onMouseOver
    }),
    [onClick, onMouseDown, onMouseOver]
  )

  const showAccessories = useMemo(() => isDragging || isHovering, [
    isDragging,
    isHovering
  ])

  return (
    <OuterWrap cardSize={size} ref={wrapRef} {...mouseEvents}>
      <BarsWrap cardSize={size} isDragging={isDragging}>
        <ProgressLine>
          <ProgressHover
            cursorRatio={cursorRatio}
            isHovering={isHovering}
            progressPercent={progressPercent}
          />

          {bufferedMediaChunks.map(({ key, ...chunk }) => (
            <BufferedChunk key={key} {...chunk} />
          ))}

          <ProgressMask maskScale={progressRatio} />
        </ProgressLine>

        <Scrubber
          cardSize={size}
          isVisible={showAccessories}
          positionX={progressPercent}
        />

        {!isSmallCard && (
          <Tooltip
            isDragging={isDragging}
            isVisible={showAccessories}
            label={tooltipLabel}
            positionX={tooltipPositionX}
            ref={tooltipRef}
            size={size}
          />
        )}
      </BarsWrap>
    </OuterWrap>
  )
}

export default ProgressBar
