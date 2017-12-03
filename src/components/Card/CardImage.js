// @flow
import React from 'react'
import styled from 'styled-components'

type CardImageProps = {
  className?: string,
  image?: string
}

const ImageSquare = styled.div`
  display: block;
  flex: 0 0 125px;
  background: ${props => (props.image ? `url(${props.image})` : ``)} no-repeat
    center center / cover;

  &:before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  .-MicrolinkCard-large > & {
    &:before {
      padding-bottom: calc(80% - 125px);
    }
  }
`

const CardImage = ({ className, image }: CardImageProps) => (
  <ImageSquare className={className} image={image} />
)

export default CardImage
