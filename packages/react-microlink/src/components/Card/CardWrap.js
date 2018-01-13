import { createElement } from 'react'
import styled, { css } from 'styled-components'

import { CardWrapLarge } from './CardLarge'

const style = css`
  max-width: 500px;
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

  &:active,
  &:hover {
    outline: 0;
  }

  ${({loading, contrast}) => !loading && !contrast && css`
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out;
    &:hover {
      background: #F5F8FA;
      border-color: rgba(136,153,166,.5);
    }
  `}

  ${({round}) => round && css`
    border-radius: ${typeof round === 'boolean' ? `.42857em` : round};
  `}

  ${({cardSize}) => cardSize === 'large' && CardWrapLarge}

  ${({backgroundColor, color, contrast}) => contrast && color && backgroundColor && css`
    background-color: ${backgroundColor};
    color: ${color};
    border-color: ${color};
    transition: filter .15s ease-in-out;

    &:hover {
      filter: brightness(90%);
    }
  `}
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
