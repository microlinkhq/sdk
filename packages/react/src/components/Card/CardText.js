import React from 'react'
import styled, { css } from 'styled-components'
import NanoClamp from 'nanoclamp'

import { isNil } from '../../utils'

const Clamp = ({ children, className, lines }) =>
  isNil(children) ? null : (
    <NanoClamp className={className} lines={lines} text={children} is='p' />
  )

const StyledClamp = styled(Clamp)`
  &&& {
    text-align: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    margin: 0;

    ${({ useNanoClamp }) => !useNanoClamp && css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
  }
`

const CardText = ({ useNanoClamp = true, children, ...props }) => {
  const textProps = useNanoClamp ? props : { ...props, as: 'p', title: children }

  return (
    <StyledClamp useNanoClamp={useNanoClamp} {...textProps}>{children}</StyledClamp>
  )
}

export default CardText
