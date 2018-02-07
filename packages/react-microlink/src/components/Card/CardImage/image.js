import styled, {css} from 'styled-components'

import { media, isLarge } from '../../../utils'

const largeStyle = css`
flex: 1;

&::before {
  padding-bottom: 0;
}
`

export default styled.div`
  display: block;
  flex: 0 0 125px;
  background: #e1e8ed no-repeat center center / cover;

  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  ${({image}) => image && `background-image: url(${image});`}

  ${({cardSize}) => isLarge(cardSize) ? largeStyle : media.mobile`
    flex: 0 0 92px;
  `}
`
