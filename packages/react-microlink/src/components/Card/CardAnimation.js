import { css, keyframes } from 'styled-components'

const emptyStatePulse = keyframes`
  0% {
    background: #e1e8ed;
  }
  70% {
    background: #cdd4d8;
  }
  100% {
    background: #e1e8ed;
  }
`
const emptyStateImagePulse = keyframes`
  0% {
    background: #e1e8ed;
  }
  70% {
    background: #dce3e8;
  }
  100% {
    background: #e1e8ed;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const emptyStateAnimation = css`
  animation: ${emptyStatePulse} .75s linear infinite;
`

export const emptyStateImageAnimation = css`
  animation: ${emptyStateImagePulse} 1.25s linear infinite;
`

export const fadeInAnimation = css`
  animation: ${fadeIn} .3s ease-out;
`
