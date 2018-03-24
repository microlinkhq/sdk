import React from 'react'
import styled from 'styled-components'
import NanoClamp from 'nanoclamp'

import { backgroundColorReset, sizeReset } from '../../utils/styleResets'

const Clamp = ({ children, className, lines }) => (
  <NanoClamp className={className} lines={lines} text={children} is='p' />
)

const CardText = styled(Clamp)`
  &&& {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    text-align: inherit;
    direction: inherit;
    ${backgroundColorReset};
    ${sizeReset};
  }
`

export default CardText
