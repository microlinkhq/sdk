import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { GlobalContext } from '../../../context/GlobalState'
import { media } from '../../../utils'
import { loadingOverlay } from './loader'

const mediaSizeStyles = {
  small: css`
    flex: 0 0 48px;
  `,
  normal: css`
    flex: 0 0 125px;

    ${media.mobile`
      flex: 0 0 92px;
    `}
  `,
  large: css`
    flex: 1;

    &::before {
      padding-bottom: 0;
    }
  `
}

const StyledWrap = styled('div')`
  background: transparent no-repeat center center / cover;
  display: block;
  overflow: hidden;
  height: auto;
  position: relative;

  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  ${({ cardSize }) => mediaSizeStyles[cardSize]};

  ${loadingOverlay};
`

const Wrap = props => {
  const {
    props: { size }
  } = useContext(GlobalContext)

  return <StyledWrap cardSize={size} {...props} />
}

export default Wrap
