import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { PauseCircle, PlayCircle } from 'react-feather'

import MediaButton from './MediaButton'
import { isLarge, isSmall, media } from '../../../../utils'

const iconSizes = {
  large: '60px',
  normal: '48px',
  small: '34px'
}

const PlaybackIcon = styled('svg')`
  stroke: #fff;

  ${({ cardSize }) => css`
    width: ${iconSizes[cardSize]};
    height: ${iconSizes[cardSize]};

    ${!isLarge(cardSize) &&
      media.mobile`
      width: ${iconSizes.small};
      height: ${iconSizes.small};
    `}
  `}
`

const PlaybackButton = ({ cardSize, isPlaying, ...props }) => {
  const PlaybackComponent = useMemo(
    () => (isPlaying ? PauseCircle : PlayCircle),
    [isPlaying]
  )

  return (
    <MediaButton {...props}>
      <PlaybackIcon as={PlaybackComponent} cardSize={cardSize} />
    </MediaButton>
  )
}

export default PlaybackButton
