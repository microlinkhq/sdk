import React from 'react'
import styled from 'styled-components'
import NanoClamp from 'nanoclamp'

const Clamp = ({children, className, lines}) => (
  <NanoClamp className={`${className} microlink_card__text`} lines={lines} text={children} is="p" />
)

const CardText = styled(Clamp)`
  &&& {
    font-family: inherit;
    color: #181919;
    margin: 0;
  }
`

export default CardText
