// @flow
import styled, { css } from 'styled-components'
import { CardImageLarge } from './CardLarge'

export default styled.div`
  display: block;
  flex: 0 0 125px;
  background: #e1e8ed no-repeat center center / cover;

  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  ${({ image, cardSize }) => [
    image && css`
      background-image: url(${image});
    `,
    cardSize === 'large' && CardImageLarge
  ]};
`
