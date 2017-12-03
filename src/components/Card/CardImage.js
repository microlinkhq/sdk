import styled, { css } from 'styled-components'
import { CardImageLarge } from './CardLarge'

export default styled.div`
  display: block;
  flex: 0 0 125px;
  background: no-repeat center center / cover;

  ${({ image }) => image && css`
    background-image: url(${image});
  `};

  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  ${props => props.cardSize === 'large' && CardImageLarge}
`
