import React from 'react'
import styled from 'styled-components'

import { emptyStateAnimation, emptyStateImageAnimation } from './CardAnimation'
import CardImage from './CardMedia/Image'
import { Content } from './CardContent'
import { media, isLarge, isSmall } from '../../utils'

const MediaEmpty = styled(CardImage)`
  ${emptyStateImageAnimation};
`

const HeaderEmpty = styled('span')`
  height: 16px;
  width: ${({ cardSize }) => (!isSmall(cardSize) ? '60%' : '75%')};
  display: block;
  background: #e1e8ed;
  margin: ${({ cardSize }) =>
    !isSmall(cardSize) ? '2px 0 8px' : '0 20px 0 0'};
  opacity: 0.8;
  ${emptyStateAnimation};
`

const DescriptionEmpty = styled('span')`
  height: 33px;
  width: 95%;
  display: block;
  background: #e1e8ed;
  margin-bottom: 12px;
  opacity: 0.8;
  position: relative;
  ${emptyStateAnimation};
  animation-delay: 0.125s;

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

  ${({ cardSize }) =>
    !isLarge(cardSize) &&
    media.mobile`
    height: 14px;

    &::before {
      display: none;
    }
  `};
`

const FooterEmpty = styled('span')`
  height: 10px;
  width: 30%;
  display: block;
  background: #e1e8ed;
  opacity: 0.8;
  ${emptyStateAnimation} animation-delay: .25s;
`

const CardEmptyState = ({ cardSize }) => {
  const isSmallCard = isSmall(cardSize)

  return (
    <>
      <MediaEmpty cardSize={cardSize} />
      <Content cardSize={cardSize}>
        <HeaderEmpty cardSize={cardSize} />
        {!isSmallCard && <DescriptionEmpty cardSize={cardSize} />}
        <FooterEmpty />
      </Content>
    </>
  )
}

export default CardEmptyState
