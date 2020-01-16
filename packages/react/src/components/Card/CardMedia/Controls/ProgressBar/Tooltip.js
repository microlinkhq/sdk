import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { font, transition } from '../../../../../theme'
import { classNames } from '../../../../../utils'

const BASE_FONT_SIZE = 11

const sizeScales = { normal: 0.8 }
const getMarkerFontSize = size => BASE_FONT_SIZE * (sizeScales[size] || 1)

const UIAccessory = styled('span')`
  position: absolute;
  pointer-events: none;
  backface-visibility: hidden;
`

const TimeMarker = styled(UIAccessory).attrs(({ position, visible }) => ({
  className: classNames.progressTooltip,
  style: {
    left: `${position}px`,
    top: visible ? '-3px' : '0px',
    visibility: visible ? 'visible' : 'hidden',
    opacity: visible ? 1 : 0
  }
}))`
  background: rgba(24, 25, 25, 0.75);
  color: #fff;
  text-shadow: 0 1px 2px rgba(24, 25, 25, 0.15);
  padding: 2px 3px;
  border-radius: 4px;
  transform: translateY(-100%);
  font-family: ${font.mono};
  font-size: ${({ cardSize }) => getMarkerFontSize(cardSize)}px;
  line-height: 1;
  transition: opacity ${transition.medium}, visibility ${transition.medium},
    top ${transition.long}, transform ${transition.medium};
  will-change: top, left, visibility, opacity, transform;

  ${({ isDragging }) =>
    isDragging &&
    css`
      transform: translateY(calc(-100% - 1px));
    `}
`

const MarkerLine = styled(UIAccessory).attrs(({ position }) => ({
  className: classNames.progressHandle,
  style: { left: `${position}px` }
}))`
  bottom: 0;
  height: 100%;
  width: 2px;
  background: rgba(24, 25, 25, 0.75);
  transition: transform ${transition.medium};
  will-change: transform;
  transform-origin: center bottom;

  ${({ isDragging }) =>
    isDragging &&
    css`
      transform: scaleY(1.4) scaleX(1.25);
    `}
`

const Tooltip = forwardRef(
  (
    {
      handlePositionX,
      isDragging,
      isVisible,
      label,
      positionX,
      size,
      ...props
    },
    ref
  ) => (
    <>
      <TimeMarker
        visible={isVisible}
        position={positionX}
        cardSize={size}
        ref={ref}
        isDragging={isDragging}
        {...props}
      >
        {label}
      </TimeMarker>

      {isVisible && (
        <MarkerLine isDragging={isDragging} position={handlePositionX} />
      )}
    </>
  )
)

export default Tooltip
