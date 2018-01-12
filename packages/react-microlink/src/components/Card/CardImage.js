import styled from 'styled-components'

import { CardImageLarge } from './CardLarge'
import { media } from '../../utils'

export default styled.div`
  display: block;
  flex: 0 0 125px;
  background: #e1e8ed no-repeat center center / cover;

  ${media.mobile`
    flex: 0 0 92px;
  `}

  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  ${({image}) => image && `background-image: url(${image});`}
  ${({cardSize}) => cardSize === 'large' && CardImageLarge}
`
