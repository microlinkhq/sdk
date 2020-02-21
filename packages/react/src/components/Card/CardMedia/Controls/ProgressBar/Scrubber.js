import styled, { css } from 'styled-components'

import { transition } from '../../../../../theme'

const SCRUBBER_SIZE = 12

const scrubberSizeScales = { normal: 0.8, small: 0.9 }

const getScrubberSize = size =>
  Math.floor(SCRUBBER_SIZE * (scrubberSizeScales[size] || 1))

const Scrubber = styled('div').attrs(({ isVisible, positionX }) => ({
  style: {
    left: positionX,
    transform: `scale(${isVisible ? 1 : 0.5}) translate(-50%, -50%)`,
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden'
  }
}))`
  position: absolute;
  top: 50%;
  background: #ffffff;
  border-radius: 50%;
  transform-origin: center center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: ${transition.short('transform', 'opacity', 'visibility')};
  will-change: left, transform, opacity, visibility;
  backface-visibility: hidden;
  z-index: 3;

  ${({ cardSize }) => {
    const scrubberSize = getScrubberSize(cardSize)

    return css`
      height: ${scrubberSize}px;
      width: ${scrubberSize}px;
    `
  }}
`

export default Scrubber
