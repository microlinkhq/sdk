import { createElement, forwardRef, useContext } from 'react'
import styled, { css } from 'styled-components'

import { GlobalContext } from '../../context/GlobalState'
import { font, animation, speed } from '../../theme'
import { media, isLarge } from '../../utils'

const HEIGHT = '382px'

const contrastStyle = ({ backgroundColor, color }) => css`
  background-color: ${backgroundColor};
  border-color: ${color};
  transition-property: filter;
  will-change: filter;

  &&& {
    color: ${color};
  }

  &:hover {
    filter: brightness(90%);
  }
`

const largeStyle = css`
  flex-direction: column;
  height: ${HEIGHT};
  ${media.mobile`
    height: calc(${HEIGHT} * 7/9);
  `};
`

const hoverStyle = css`
  transition-property: background, border-color;
  will-change: background, border-color;
  &:hover {
    background-color: var(--microlink-hover-background-color, #f5f8fa);
    border-color: var(--microlink-hover-border-color, #8899A680);
  }
`

const rtlStyle = ({ cardSize }) => css`
  flex-direction: ${isLarge(cardSize) ? 'column-reverse' : 'row-reverse'};
`

const baseStyle = css(
  () => `
  max-width: var(--microlink-max-width, 500px);
  background-color: var(--microlink-background-color, #fff);
  border-width: var(--microlink-border-width, 1px);
  border-style: var(--microlink-border-style, solid);
  border-color: var(--microlink-border-color, #e1e8ed);
  color: var(--microlink-color, #181919);
  overflow: hidden;
  font-family: ${font.sans};
  display: flex;
  text-decoration: none;
  opacity: 1;
  position: relative;
  transition-duration: ${speed.medium};
  transition-timing-function: ${animation.medium};

  &:active,
  &:hover {
    outline: 0;
  }
`
)

const Element = styled('a')(
  baseStyle,
  ({ isLoading, contrast }) => !isLoading && !contrast && hoverStyle,
  ({ cardSize }) => isLarge(cardSize) && largeStyle,
  ({ direction }) => direction === 'rtl' && rtlStyle,
  ({ backgroundColor, color, contrast }) =>
    contrast && color && backgroundColor && contrastStyle,
  ({ backgroundColor, color, contrast }) =>
    contrast && (!color || !backgroundColor) && hoverStyle
)

const CardWrap = forwardRef(({ href, rel, target, ...restProps }, ref) => {
  const {
    state: { backgroundColor, color, title },
    props: { size: cardSize }
  } = useContext(GlobalContext)

  return createElement(Element, {
    ...(restProps.as === 'a' ? { href, rel, target } : undefined),
    ...restProps,
    backgroundColor,
    cardSize,
    color,
    ref,
    title
  })
})

CardWrap.defaultProps = {
  as: 'a',
  rel: 'noopener noreferrer',
  target: '_blank'
}

export default CardWrap
