import React, { useMemo } from 'react'
import styled from 'styled-components'

import MediaButton from './MediaButton'
import { media, isLarge } from '../../../../utils'

const Backward = ({ cardSize, ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 29' {...props}>
    <path
      fill='#FFF'
      fillRule='evenodd'
      stroke='none'
      strokeWidth='1'
      d='M4 18c0 6.627 5.373 12 12 12s12-5.373 12-12S22.627 6 16 6h-4V1L6 7l6 6V8h4c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 23.523 6 18H4zm15.63 4.13a2.84 2.84 0 01-1.28-.27 2.44 2.44 0 01-.89-.77 3.57 3.57 0 01-.52-1.25 7.69 7.69 0 01-.17-1.68 7.83 7.83 0 01.17-1.68c.094-.445.27-.87.52-1.25.23-.325.535-.59.89-.77.4-.188.838-.28 1.28-.27a2.44 2.44 0 012.16 1 5.23 5.23 0 01.7 2.93 5.23 5.23 0 01-.7 2.93 2.44 2.44 0 01-2.16 1.08zm0-1.22c.411.025.8-.19 1-.55a3.38 3.38 0 00.37-1.51v-1.38a3.31 3.31 0 00-.29-1.5 1.23 1.23 0 00-2.06 0 3.31 3.31 0 00-.29 1.5v1.38a3.38 3.38 0 00.29 1.51c.195.356.575.57.98.55zm-9 1.09v-1.18h2v-5.19l-1.86 1-.55-1.06 2.32-1.3H14v6.5h1.78V22h-5.15z'
      transform='translate(-4 -1)'
    />
  </svg>
)

const Forward = ({ cardSize, ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 29' {...props}>
    <path
      fill='#FFF'
      fillRule='evenodd'
      stroke='none'
      strokeWidth='1'
      d='M26 18c0 5.523-4.477 10-10 10S6 23.523 6 18 10.477 8 16 8h4v5l6-6-6-6v5h-4C9.373 6 4 11.373 4 18s5.373 12 12 12 12-5.373 12-12h-2zm-6.36 4.13a2.81 2.81 0 01-1.28-.27 2.36 2.36 0 01-.89-.77 3.39 3.39 0 01-.47-1.25 7.12 7.12 0 01-.17-1.68 7.24 7.24 0 01.17-1.68 3.46 3.46 0 01.52-1.25 2.36 2.36 0 01.89-.77c.4-.19.838-.282 1.28-.27a2.44 2.44 0 012.16 1 5.31 5.31 0 01.7 2.93 5.31 5.31 0 01-.7 2.93 2.44 2.44 0 01-2.21 1.08zm0-1.22a1 1 0 001-.55c.22-.472.323-.99.3-1.51v-1.38a3.17 3.17 0 00-.3-1.5 1.22 1.22 0 00-2.05 0 3.18 3.18 0 00-.29 1.5v1.38a3.25 3.25 0 00.29 1.51 1 1 0 001.05.55zm-7.02-3.49c.355.035.71-.06 1-.27a.84.84 0 00.31-.68v-.08a.94.94 0 00-.3-.74 1.2 1.2 0 00-.83-.27 1.65 1.65 0 00-.89.24 2.1 2.1 0 00-.68.68l-.93-.83a5.37 5.37 0 01.44-.51 2.7 2.7 0 01.54-.4 2.55 2.55 0 01.7-.27 3.25 3.25 0 01.87-.1 3.94 3.94 0 011.06.14c.297.078.576.214.82.4.224.168.408.383.54.63.123.26.184.543.18.83a2 2 0 01-.11.67 1.82 1.82 0 01-.32.52 1.79 1.79 0 01-.47.36 2.27 2.27 0 01-.57.2V18c.219.04.431.11.63.21a1.7 1.7 0 01.85.93c.084.234.124.481.12.73a2 2 0 01-.2.92 2 2 0 01-.58.72 2.66 2.66 0 01-.89.45 3.76 3.76 0 01-1.15.16 4.1 4.1 0 01-1-.11 3.1 3.1 0 01-.76-.31 2.76 2.76 0 01-.56-.45 4.22 4.22 0 01-.44-.55l1.07-.81c.082.147.175.288.28.42.105.128.226.243.36.34.137.097.29.171.45.22a2 2 0 00.57.07 1.45 1.45 0 001-.3 1.12 1.12 0 00.34-.85v-.08a1 1 0 00-.37-.8 1.78 1.78 0 00-1.06-.28h-.76v-1.21h.74z'
      transform='translate(-4 -1)'
    />
  </svg>
)

const SeekIcon = styled('svg')`
  stroke: #fff;
  width: ${({ cardSize }) => (isLarge(cardSize) ? 30 : 24)}px;
  height: ${({ cardSize }) => (isLarge(cardSize) ? 30 : 24)}px;

  ${({ cardSize }) =>
    !isLarge(cardSize) &&
    media.mobile`
    width: 0;
    height: 0;
  `}
`

const SeekButtonWrap = styled(MediaButton)`
  margin: 0 ${({ cardSize }) => (isLarge(cardSize) ? '28px' : '3px')};
`

const SeekButton = ({ type = 'rewind', cardSize, ...props }) => {
  const IconComponent = useMemo(
    () => (type === 'rewind' ? Backward : Forward),
    [type]
  )

  return (
    <SeekButtonWrap
      title={type === 'rewind' ? 'Rewind' : 'Forward'}
      cardSize={cardSize}
      {...props}
    >
      <SeekIcon as={IconComponent} cardSize={cardSize} />
    </SeekButtonWrap>
  )
}

export default SeekButton
