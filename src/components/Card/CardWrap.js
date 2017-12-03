// @flow
import styled from 'styled-components'

import createGet from '../../helpers/get'

const DEFAULT = {
  rounded: '.42857em',
  width: '500px',
  height: '125px',
  background: '#fff',
  color: '#181919',
  borderColor: '#E1E8ED'
}

const DEFAULT_LARGE = {
  height: 'auto'
}

const get = createGet(DEFAULT)
const getLarge = createGet(DEFAULT_LARGE)

const getBorderRadius = (props, name, defaultName) => {
  const value = get(props, name)
  return value === true ? DEFAULT.rounded : value
}

const CardWrap = styled.a`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${props => get(props, 'image.color', 'color')};;
  background-color: ${props => get(props, 'image.background_color', 'background')};
  max-width: ${props => get(props, 'width')};
  border-radius: ${props => props.rounded && getBorderRadius(props, 'rounded')};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => get(props, 'image.color', 'borderColor')};
  overflow: hidden;
  display: flex;
  height: ${props => get(props, 'height', 'height')};
  text-decoration: none;
  opacity:1;
  transition:opacity .15s ease-in;

  &.-MicrolinkCard-large {
    flex-direction: column;
    height: ${props => getLarge(props, 'height', 'height')};
  }

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
