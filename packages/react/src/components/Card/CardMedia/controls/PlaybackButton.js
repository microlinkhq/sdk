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
  const PlaybackComponent = useMemo(
    () => (isPlaying ? PauseCircle : PlayCircle),
    [isPlaying]
  )

  return (
    <PlaybackButtonWrap {...props}>
      <PlaybackIcon as={PlaybackComponent} />
    </PlaybackButtonWrap>
  )
}

export default PlaybackButton
