import React, { Fragment } from 'react'
import styled from 'styled-components/primitives'

import { emptyStateAnimation, emptyStateImageAnimation } from './CardAnimation'
import CardImage from './CardMedia/image'
import { Content } from './CardContent'
import { media } from '../../utils'

const EmptyImage = CardImage.extend`
  ${emptyStateImageAnimation}
`

const EmptyTitle = styled.View`
  height: 16px;
  width: 60%;
  display: block;
  background: #e1e8ed;
  margin: 2px 0 8px;
  opacity: 0.8;
  ${emptyStateAnimation}
`

const EmptyDescription = styled.View`
  width: 95%;
  display: block;
  background: #e1e8ed;
  margin-bottom: 12px;
  opacity: 0.8;
  position: relative;
  ${emptyStateAnimation}
  animation-delay: .125s;

  height: 33px;

  &::before {
    content: '';
    position: absolute;
    left: -1px;
    right: -1px;
    height: 6px;
    background: #fff;
  }

  &::before {
    top: 14px;
  }

  &::after {
    bottom: 14px;
  }

  ${({cardSize}) => cardSize !== 'large' && media.mobile`
    height: 14px;
  `}
`

const EmptyLink = styled.View`
  height: 10px;
  width: 30%;
  display: block;
  background: #e1e8ed;
  opacity: 0.8;
  ${emptyStateAnimation}
  animation-delay: .25s;
`

const CardEmptyState = ({cardSize}) => (
  <Fragment>
    <EmptyImage cardSize={cardSize} />
    <Content cardSize={cardSize}>
      <EmptyTitle />
      <EmptyDescription cardSize={cardSize} />
      <EmptyLink />
    </Content>
  </Fragment>
)

export default CardEmptyState
