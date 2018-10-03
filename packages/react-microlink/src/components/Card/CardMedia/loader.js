import styled, { css } from 'styled-components'

export const ImageLoadCatcher = styled.img`
  height: 1px;
  width: 1px;
  position: absolute;
  z-index: -1;
`

export const loadingOverlay = ({ loading }) => css`
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #e1e8ed;
    transition: opacity .3s ease-out;
    opacity: ${({ loading }) => loading ? 1 : 0};
    z-index: 1;
  }
`
