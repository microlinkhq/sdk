// @flow
import styled, { css } from 'styled-components'
import { CardWrapLarge } from './CardLarge'

const CardWrap = styled.a`
  height: 123px;
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

  ${props => props.rounded && css`
    border-radius: ${typeof props.rounded === 'boolean'
    ? `.42857em`
    : props.rounded};
  `}

  ${props => props.contrast && css`
    background-color: ${props => props.image.background_color};
    color: ${props => props.image.color};
    border-color: ${props => props.image.color};
  `}

  ${props => props.cardSize === 'large' && CardWrapLarge}

  &:hover {
    opacity: .5;
    transition: opacity .15s ease-in;
  }

  &:active {
    opacity: .8;
    transition: opacity .15s ease-out;
  }
`

export default CardWrap
