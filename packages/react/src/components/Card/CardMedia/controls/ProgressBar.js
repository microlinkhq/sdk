import styled from 'styled-components'

const PROGRESS_BAR_HEIGHT = 3

const sizeScales = {
  large: 1.75,
  small: 0.55
}

const getSize = (base, size) => base * (sizeScales[size] || 1)

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
  height: ${({ cardSize }) => getSize(PROGRESS_BAR_HEIGHT, cardSize)}px;
  transition: opacity 0.3s ease-in-out;
`

export default ProgressBar
