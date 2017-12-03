import styled, {css} from 'styled-components'
import { style } from 'styled-system'

const fontFamily = style({
  prop: 'fontFamily',
  cssProperty: 'fontFamily'
})

const height = style({
  prop: 'height',
  cssProperty: 'height'
})

const width = style({
  prop: 'width',
  cssProperty: 'maxWidth'
})

const borderRadius = style({
  prop: 'borderRadius',
  cssProperty: 'borderRadius'
})

const backgroundColor = style({
  prop: 'backgroundColor',
  cssProperty: 'backgroundColor'
})

const borderColor = style({
  prop: 'borderColor',
  cssProperty: 'borderColor'
})

const color = style({
  prop: 'color',
  cssProperty: 'color'
})

const CardWrap = styled.a`
  ${fontFamily}
  ${height}
  ${borderRadius}
  ${backgroundColor}
  ${color}
  ${width}
  ${borderColor}
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
  display: flex;
  text-decoration: none;
  opacity:1;
  transition: opacity .15s ease-in;

  ${props => props.rounded && css`
    border-radius: .42857em;
  `}

  ${props => props.contrast && css`
    background-color: ${props => props.image.background_color};
    color: ${props => props.image.color};
    border-color: ${props => props.image.color};
  `}

  ${props => props.large && css`
    flex-direction: column;
  `}

  &:hover {
    opacity:.5;
    transition:opacity .15s ease-in;
  }

  &:active {
    opacity:.8;
    transition:opacity .15s ease-out;
  }
`

export default CardWrap
