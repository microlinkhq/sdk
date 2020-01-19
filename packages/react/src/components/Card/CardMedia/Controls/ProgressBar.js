import styled from 'styled-components'

import { transition } from '../../../../theme'
import { classNames } from '../../../../utils'

const BASE_HEIGHT = 5

const sizeScales = { normal: 0.8, small: 0.7 }

const getProgressBarSize = ({ cardSize }) =>
  BASE_HEIGHT * (sizeScales[cardSize] || 1)

const ProgressBar = styled('div').attrs(({ progress }) => ({
  className: classNames.progressBar,
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
  transition: background ${transition.medium};
  will-change: background;

  .${classNames.main}:hover & {
    background: #fff;
  }
`

export default ProgressBar
