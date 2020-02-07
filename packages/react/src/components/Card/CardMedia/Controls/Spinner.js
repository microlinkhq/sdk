import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import { transition } from '../../../../theme'
import { classNames } from '../../../../utils'

import MediaButton from './MediaButton'

const BASE_SIZE = 12
const BASE_OFFSET = 6

const offsetScales = { normal: 0.8, small: 0.6 }
const sizeScales = { normal: 0.9, small: 0.8 }

const getSpinnerOffset = size =>
  Math.floor(BASE_OFFSET * (offsetScales[size] || 1))

const getSpinnerSize = size => Math.floor(BASE_SIZE * (sizeScales[size] || 1))

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

const Wrap = styled(MediaButton).attrs(({ isVisible }) => ({
  style: {
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden'
  }
}))(({ cardSize }) => {
  const size = `${getSpinnerSize(cardSize)}px`
  const offset = `${getSpinnerOffset(cardSize)}px`

  return css`
    position: absolute;
    width: ${size};
    right: ${offset};
    top: ${offset};
    transition: ${transition.medium('opacity', 'visibility')};
    will-change: opacity, visibility;
    pointer-events: none;
  `
})

const Svg = styled('svg')`
  width: 100%;
  animation: ${rotate} 2s linear infinite;
  will-change: transform;
`

const Circle = styled('circle')`
  stroke: #fff;
  stroke-linecap: round;
  stroke-width: 7;
  fill: none;
  animation: ${dash} 1.5s ease-in-out infinite;
  will-change: stroke-dasharray, stroke-dashoffset;
`

const Spinner = ({ size, isVisible }) => (
  <Wrap cardSize={size} className={classNames.spinner} isVisible={isVisible}>
    <Svg viewBox='0 0 50 50'>
      <Circle cx='25' cy='25' r='20' />
    </Svg>
  </Wrap>
)

export default Spinner
