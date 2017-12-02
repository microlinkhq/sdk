import styled from 'styled-components'

import createGet from '../../helpers/get'

const DEFAULT = {
  rounded: '.42857em',
  width: '500px',
  height: '125px',
  background: '#fff',
  color: '#181919'
}

const get = createGet(DEFAULT)

const getBoolean = (props, name, defaultName) => {
  const value = get(props, name)
  return value === true ? '.42857em' : value
}

const CardWrap = styled.a`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${props => get(props, 'image.color', 'color')};;
  background-color: ${props => get(props, 'image.background_color', 'background')};
  max-width: ${props => get(props, 'width')};
  border-radius: ${props => props.rounded && getBoolean(props, 'rounded')};
  border: 1px solid #E1E8ED;
  overflow: hidden;
  display: flex;
  height: ${props => get(props, 'height')};
  text-decoration: none;
  opacity:1;
  transition:opacity .15s ease-in;

  &:hover {
    opacity:.5;
    transition:opacity .15s ease-in;
  }

  &:active {
    opacity:.8
    transition:opacity .15s ease-out;
  }
`

export default CardWrap
