import React, { forwardRef } from 'react'
import styled from '@emotion/styled'

import { font, transition } from '../../../../../theme'

const BASE_FONT_SIZE = 11

const sizeScales = { normal: 0.8 }
const getMarkerFontSize = size => BASE_FONT_SIZE * (sizeScales[size] || 1)

const TooltipBase = styled('span')`
  position: absolute;
  background: rgba(24, 25, 25, 0.75);
  color: #fff;
  text-shadow: 0 1px 2px rgba(24, 25, 25, 0.15);
  padding: 2px 3px;
  border-radius: 4px;
  font-family: ${font.mono};
  font-size: ${({ cardSize }) => getMarkerFontSize(cardSize)}px;
  line-height: 1;
  transition: ${transition.medium('opacity', 'visibility', 'transform')},
    ${transition.long('top')};
  will-change: top, left, visibility, opacity, transform;
  backface-visibility: hidden;
`

const Tooltip = forwardRef(
  ({ isDragging, isVisible, label, positionX, size, ...props }, ref) => (
    <>
      <TooltipBase
        cardSize={size}
        ref={ref}
        style={{
          left: `${positionX}px`,
          top: isVisible ? '-4px' : '0px',
          visibility: isVisible ? 'visible' : 'hidden',
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, ${!isDragging ? -100 : -110}%)`
        }}
        {...props}
      >
        {label}
      </TooltipBase>
    </>
  )
)

Tooltip.displayName = 'Tooltip'

export default Tooltip
