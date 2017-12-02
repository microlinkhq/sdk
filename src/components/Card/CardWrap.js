// @flow
import styled from 'styled-components'

const DEFAULT = {
  rounded: '.42857em',
  width: '500px',
  height: '125px'
}

const getValue = (props, name) => typeof props[name] === 'string'
  ? props[name]
  : DEFAULT[name]

const CardWrap = styled.a`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #fff;
  color: #181919;
  max-width: ${props => getValue(props, 'width')};
  border-radius: ${props => props.rounded ? getValue(props, 'rounded') : '0px'};
  border: 1px solid #E1E8ED;
  overflow: hidden;
  display: flex;
  height: ${props => getValue(props, 'height')};
  text-decoration: none;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out;

  &:hover {
    background: #F5F8FA;
  }
`

export default CardWrap
