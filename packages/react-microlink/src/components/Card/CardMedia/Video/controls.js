import styled from 'styled-components'

export const PlayButton = styled.div`
  position: absolute;
  background: #fff;
  transform: rotate(30deg) skewX(-30deg) scale(1,.866);
  top: calc(50% - 11px);
  left: calc(50% - 11px);
  z-index: 2;
  opacity: ${({visible}) => visible ? 1 : 0};
  transition: opacity .25s ease-in-out;

  &:before,
  &:after {
  	content: '';
  	position: absolute;
  	background: inherit;
  }

  &,
  &:before,
  &:after {
  	width:  22px;
  	height: 22px;
  	border-top-right-radius: 30%;
  }

  &:before {
  	transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
  }
  &:after {
  	transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
  }
`
