import { css } from 'styled-components'

export const CardWrapLarge = css`
  flex-direction: column;
  height: 382px;
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
