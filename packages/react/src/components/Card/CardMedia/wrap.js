import styled, { css } from 'styled-components'

import { media, isLarge } from '../../../utils'
import { loadingOverlay } from './loader'

const largeStyle = css`
  flex: 1;

  &::before {
    padding-bottom: 0;
  }
`

const mobileStyle = media.mobile`
  flex: 0 0 92px;
`

export default styled('div')`
  background: #e1e8ed no-repeat center center / cover;
  display: block;
  flex: 0 0 125px;
  overflow: hidden;
  height: auto;
  position: relative;
  transition: flex-basis 0.25s ease-in-out;

  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  ${loadingOverlay} ${({ cardSize }) =>
  isLarge(cardSize) ? largeStyle : mobileStyle};
`
