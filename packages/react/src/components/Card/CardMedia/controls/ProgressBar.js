import styled from 'styled-components'
import { transition } from '../../../../theme'

const BASE_HEIGHT = 5

const sizeScales = { normal: 0.8, small: 0.7 }

export const getProgressBarSize = ({ cardSize }) => BASE_HEIGHT * (sizeScales[cardSize] || 1)

const ProgressBar = styled('div').attrs(({ progress }) => ({
  style: {
    width: `${progress}%` || 0,
    opacity: 0.8
  }
}))`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #e1e8ed;
  height: ${props => getProgressBarSize(props)}px;
  transition: opacity ${transition.medium}, background ${transition.medium};
  .microlink_card:hover & {
    background: #fff;
  }

`

export default ProgressBar
