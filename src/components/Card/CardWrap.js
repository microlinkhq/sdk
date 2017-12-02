// @flow
import styled from 'styled-components'

const DEFAULT = {
  rounded: '.42857em'
}

const getValue = (props, name) => typeof props[name] === 'string'
  ? props[name]
  : DEFAULT[name]

const CardWrap = styled.a`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #fff;
  color: #181919;
  max-width: 500px;
  border-radius: ${props => props.rounded ? getValue(props, 'rounded') : '0px'};
  border: 1px solid #E1E8ED;
  overflow: hidden;
  display: flex;
  height: 132px;
  text-decoration: none;
`

export default CardWrap
