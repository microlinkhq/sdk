import styled from 'styled-components'

export const PlayButton = styled.div`
  position: absolute;
  background: #fff;
  transform: rotate(30deg) skewX(-30deg) scale(1, 0.866);
  top: calc(50% - 11px);
  left: calc(50% - 11px);
  z-index: 2;
  opacity: ${({visible}) => (visible ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: inherit;
  }

  &,
  &:before,
  &:after {
    width: 22px;
    height: 22px;
    border-top-right-radius: 30%;
  }

  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
  }
  &:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`

export const ProgressBar = styled.div.attrs({
  style: ({playing, progress}) => ({
    width: `${progress}%` || 0,
    opacity: playing ? 0.7 : 0
  })
})`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #e1e8ed;
  height: 2px;
  border-top-right-radius: 2px;
  transition: opacity 0.3s ease;

  .microlink_card:not(:hover) & {
    opacity: 0 !important;
    transition-delay: 0.5s;
  }
`
