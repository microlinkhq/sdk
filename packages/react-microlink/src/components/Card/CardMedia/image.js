import styled, {css} from 'styled-components'

import { media, isLarge } from '../../../utils'

const largeStyle = css`
  flex: 1;

  &::before {
    padding-bottom: 0;
  }
`

const mobileStyle = media.mobile`
  flex: 0 0 92px;
`

export default styled.div`
  display: block;
  flex: 0 0 125px;
  background: #e1e8ed no-repeat center center / cover;
  transition: flex-basis .25s ease-in-out;
  position: relative;

  &:before, &:after {
    content: '';
  }

  &:before {
    padding-bottom: 100%;
    display: block;
  }

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #e1e8ed;
    transition: opacity .3s ease-out;
    ${({loading}) => loading ? `opacity: 1;` : `opacity: 0;`}
  }

  ${({image}) => image && `background-image: url(${image});`}

  ${({cardSize}) => isLarge(cardSize) ? largeStyle : mobileStyle}

`
