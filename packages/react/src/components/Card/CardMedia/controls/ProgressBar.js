import styled from 'styled-components'

const BASE_HEIGHT = 5

const sizeScales = { normal: 0.8, small: 0.7 }

export const getProgressBarSize = ({ cardSize }) => BASE_HEIGHT * (sizeScales[cardSize] || 1)

const ProgressBar = styled('div').attrs(({ progress, visible }) => ({
  style: {
    width: `${progress}%` || 0,
    opacity: visible ? 0.8 : 0
  }
}))`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #e1e8ed;
  height: ${props => getProgressBarSize(props)}px;
  transition: opacity 0.3s ease-in-out;
  transition: height 100ms ease-in-out;
`

export default ProgressBar
