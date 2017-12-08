import { createElement } from 'react'
import styled, { css } from 'styled-components'

import { CardWrapLarge } from './CardLarge'

const style = css`
  width: 558px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #fff;
  color: #181919;
  border-width: 1px;
  border-style: solid;
  border-color: #E1E8ED;
  overflow: hidden;
  display: flex;
  text-decoration: none;
  opacity:1;
  transition: opacity .15s ease-in;

  &:hover {
    opacity: .5;
    transition: opacity .15s ease-in;
  }

  &:active {
    opacity: .8;
    transition: opacity .15s ease-out;
  }

  ${({ backgroundColor, color, contrast, cardSize, rounded }) => [
    rounded && css`
      border-radius: ${typeof rounded === 'boolean' ? `.42857em` : rounded};
    `,
    cardSize === 'large' && CardWrapLarge,
    contrast && color && backgroundColor && css`
      background-color: ${backgroundColor};
      color: ${color};
      border-color: ${color};
    `
  ]}
`

const CardWrap = ({ is, rel, href, target, ...props }) => {
  const el = styled[is]`${style}`
  const opts = is === 'a' ? { ...props, href, rel, target } : props
  return createElement(el, opts)
}

CardWrap.defaultProps = {
  is: 'a',
  rel: 'noopener noreferrer',
  target: '_blank'
}

export default CardWrap
