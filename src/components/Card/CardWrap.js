// @flow
import styled from 'styled-components'

import createGet from '../../helpers/get'

const get = createGet({
  rounded: '.42857em',
  width: '500px',
  height: '125px',
  background: '#fff',
  color: '#181919'
})

const CardWrap = styled.a`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${props => get(props, 'image.color', 'color')};;
  background: ${props => get(props, 'image.background_color', 'background')};
  max-width: ${props => get(props, 'width')};
  border-radius: ${props => props.rounded && get(props, 'rounded')};
  border: 1px solid #E1E8ED;
  overflow: hidden;
  display: flex;
  height: ${props => get(props, 'height')};
  text-decoration: none;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out;

  &:hover {
    background: #F5F8FA;
  }
`

export default CardWrap
