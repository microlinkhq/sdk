import styled, {css} from 'styled-components'

export default styled.div`
  display: block;
  flex: 0 0 125px;
  background: ${props => (props.image ? `url(${props.image})` : ``)} no-repeat
    center center / cover;

  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  ${props => props.large && css`
    flex: 1;
    &::before {
      padding-bottom: 0;
    }
  `}
`
