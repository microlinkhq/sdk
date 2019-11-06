import styled from 'styled-components'

const MediaButton = styled('div')`
  backface-visibility: hidden;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.05s ease;

  > svg {
    display: block;
  }

  &:active:not(:focus) {
    transform: scale(0.9);
  }
`

export default MediaButton
