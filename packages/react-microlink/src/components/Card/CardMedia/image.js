import styled, {css} from 'styled-components'

import { media, isLarge } from '../../../utils'
import {loadingOverlay} from './loader'

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

  &:before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  ${loadingOverlay}

  ${({image}) => image && `background-image: url(${image});`}

  ${({cardSize}) => isLarge(cardSize) ? largeStyle : mobileStyle}

`
