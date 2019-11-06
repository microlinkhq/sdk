import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import MediaButton from './MediaButton'
import { isLarge, media } from '../../../../utils'

const Pause = props => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 20' {...props}>
    <path
      fill='#FFF'
      fillRule='evenodd'
      stroke='none'
      strokeWidth='1'
      d='M12 6h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2zm10 0h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2z'
      transform='translate(-8 -6)'
    />
  </svg>
)

const Play = props => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 24' {...props}>
    <path
      fill='#FFF'
      fillRule='evenodd'
      stroke='none'
      strokeWidth='1'
      d='M7 28a1 1 0 01-1-1V5a1 1 0 011.501-.865l19 11a1 1 0 010 1.73l-19 11A.998.998 0 017 28z'
      transform='translate(-6 -4)'
    />
  </svg>
)

const iconSizes = {
  large: '60px',
  normal: '48px',
  small: '34px'
}

const PlaybackIcon = styled('svg')`
  stroke: #fff;
`

const PlaybackButtonWrap = styled(MediaButton)`
  ${PlaybackIcon} {
    ${({ cardSize }) => css`
      width: ${iconSizes[cardSize]};
      height: ${iconSizes[cardSize]};

      ${!isLarge(cardSize) &&
        media.mobile`
        width: ${iconSizes.small};
        height: ${iconSizes.small};
      `}
    `}
  }
`

const PlaybackButton = ({ isPlaying, ...props }) => {
  const PlaybackComponent = useMemo(() => (isPlaying ? Pause : Play), [
    isPlaying
  ])

  return (
    <PlaybackButtonWrap {...props}>
      <PlaybackIcon as={PlaybackComponent} />
    </PlaybackButtonWrap>
  )
}

export default PlaybackButton
