import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { Rewind, FastForward } from 'react-feather'

import MediaButton from './MediaButton'
import { isLarge, isSmall, media } from '../../../../utils'

const iconSizes = {
  large: '32px',
  normal: '22px',
  small: '16px'
}

const SeekButtonWrap = styled(MediaButton)`
  margin: 0 auto;
`

const SeekIcon = styled('svg')`
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

const SeekButton = ({ cardSize, type = 'rewind', ...props }) => {
  const IconComponent = useMemo(
    () => (type === 'rewind' ? Rewind : FastForward),
    [type]
  )

  return (
    <SeekButtonWrap {...props}>
      <SeekIcon as={IconComponent} cardSize={cardSize} />
    </SeekButtonWrap>
  )
}

export default SeekButton
