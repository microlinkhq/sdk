import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { transition } from '../../../theme'

export const ImageLoadCatcher = styled('img')`
  height: 1px;
  width: 1px;
  position: absolute;
  z-index: -1;
`

export const loadingOverlay = ({ isLoading }) => css`
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #e1e8ed;
    z-index: 1;
    transition: ${transition.medium('opacity', 'visibility')};
    will-change: opacity;
    opacity: ${(isLoading ? 1 : 0)};
    visibility: ${(isLoading ? 'visible' : 'hidden')};
  }
`
