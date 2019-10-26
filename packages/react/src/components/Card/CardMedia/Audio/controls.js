import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { PauseCircle, PlayCircle, Rewind, FastForward } from 'react-feather'

import { isLarge, isSmall, media } from '../../../../utils'

export const MediaButton = styled('div')`
  backface-visibility: hidden;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.15s ease;

  > svg {
    display: block;
  }

  &:active:not(:focus) {
    transform: scale(1.075);
  }
`

const PlaybackIcon = styled('svg')`
  stroke: #fff;

  ${({ cardSize }) => css`
    width: ${!isSmall(cardSize) ? '48px' : '34px'};
    height: ${!isSmall(cardSize) ? '48px' : '34px'};

    ${!isLarge(cardSize) &&
      media.mobile`
      width: 34px;
      height: 34px;
    `}

    ${isLarge(cardSize) &&
      `
      width: 60px;
      height: 60px;
    `}
  `}
`

export const PlaybackButton = ({ cardSize, isPlaying, ...props }) => {
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

const SeekButtonWrap = styled(MediaButton)`
  ${({ cardSize }) => css`
    margin: 0 auto;
    ${isSmall(cardSize) && `display: none;`};
  `}
`

const SeekIcon = styled('svg')`
  stroke: #fff;

  ${({ cardSize }) => css`
    width: ${!isLarge(cardSize) ? '22px' : '32px'};
    height: ${!isLarge(cardSize) ? '22px' : '32px'};

    ${!isLarge(cardSize) &&
      media.mobile`
      width: 16px;
      height: 16px;
    `}
  `}
`

export const SeekButton = ({ cardSize, type = 'rewind', ...props }) => {
  const IconComponent = useMemo(() =>
    type === 'rewind' ? Rewind : FastForward
  )

  return (
    <SeekButtonWrap cardSize={cardSize} {...props}>
      <SeekIcon as={IconComponent} cardSize={cardSize} />
    </SeekButtonWrap>
  )
}
