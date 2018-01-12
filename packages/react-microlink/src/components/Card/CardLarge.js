import { css } from 'styled-components'
import { media } from '../../utils'

const HEIGHT = '382px'

export const CardWrapLarge = css`
  flex-direction: column;
  height: ${HEIGHT};

  ${media.mobile`
    height: calc(${HEIGHT} * 7/9);
  `}
`

export const CardContentLarge = css`
  flex: 0 0 125px;
`

export const CardImageLarge = css`
  flex: 1;

  &::before {
    padding-bottom: 0;
  }
`
