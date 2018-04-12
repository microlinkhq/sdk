import styled from 'styled-components'

const PLAY_BUTTON_SIZE = 22
const PROGRESS_BAR_HEIGHT = 2
const EXPAND_ICON_BOTTOM_SPACE = 3
const EXPAND_ICON_RIGHT_SPACE = 2
const EXPAND_ICON_SIZE = 20

const getSize = (base, size) => base * (size === 'normal' ? 1 : 1.75)

export const PlayButton = styled.div`
  position: absolute;
  background: #fff;
  transform: rotate(30deg) skewX(-30deg) scale(1, 0.866);
  top: calc(50% - 11px);
  left: calc(50% - 11px);
  z-index: 2;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.15s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: inherit;
  }

  &,
  &::before,
  &::after {
    width: ${({ cardSize }) => getSize(PLAY_BUTTON_SIZE, cardSize)}px;
    height: ${({ cardSize }) => getSize(PLAY_BUTTON_SIZE, cardSize)}px;
    border-top-right-radius: 30%;
  }

  &::before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &::after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`

export const ProgressBar = styled.div.attrs({
  style: ({ playing, progress }) => ({
    width: `${progress}%` || 0,
    opacity: playing ? 0.8 : 0
  })
})`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #e1e8ed;
  height: ${({ cardSize }) => getSize(PROGRESS_BAR_HEIGHT, cardSize)}px;
  transition: opacity 0.3s ease-in-out;

  .microlink_card:not(:hover) & {
    opacity: 0 !important;
  }
`

export const ExpandButton = styled.button`
  position: absolute;
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 0;
  outline: none;
  z-index: 3;
  cursor: pointer;

  ${({ cardSize }) => `
    right: ${getSize(EXPAND_ICON_RIGHT_SPACE, cardSize)}px;
    bottom: ${getSize(EXPAND_ICON_BOTTOM_SPACE, cardSize)}px;
    width: ${getSize(EXPAND_ICON_SIZE, cardSize)}px;
    height: ${getSize(EXPAND_ICON_SIZE, cardSize)}px;
  `} .microlink_card__media_video__expand_icon {
    width: 100%;

    path {
      fill: #e1e8ed;
      fill-rule: evenodd;
      opacity: 0.75;
      transition: opacity 0.25s ease-in-out;
    }

    .microlink_card:not(:hover) & {
      path {
        opacity: 0;
      }
    }

    &:hover {
      path {
        opacity: 1;
      }
    }
  }
`
