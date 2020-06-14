import React, { useContext } from 'react'
import styled from 'styled-components'

import { emptyStateAnimation, emptyStateImageAnimation } from './CardAnimation'
import CardImage from './CardMedia/Image'
import { Content } from './CardContent'
import { GlobalContext } from '../../context/GlobalState'
import { isLarge, isSmall } from '../../utils'

const MediaEmpty = styled(CardImage)`
  ${emptyStateImageAnimation};
`

const HeaderEmpty = styled('span')`
  opacity: 0.8;
  height: 16px;
  width: ${({ cardSize }) => (!isSmall(cardSize) ? '60%' : '75%')};
  display: block;
  background: #e1e8ed;
  margin: ${({ cardSize }) =>
    !isSmall(cardSize) ? '2px 0 8px' : '0 20px 0 0'};
  ${emptyStateAnimation};

  ${({ cardSize }) =>
    !isLarge(cardSize) &&
    `
    height: 15px;
  `};
`

const DescriptionEmpty = styled('span')`
  opacity: 0.8;
  height: 14px;
  width: 95%;
  display: block;
  position: relative;
  ${emptyStateAnimation};
  animation-delay: 0.125s;
`

const FooterEmpty = styled('span')`
  opacity: 0.8;
  height: 12px;
  width: 30%;
  display: block;
  ${emptyStateAnimation} animation-delay: .25s;

  ${({ cardSize }) =>
    !isLarge(cardSize) &&
    `
    height: 10px;
  `};
`

const CardEmptyState = () => {
  const {
    props: { size }
  } = useContext(GlobalContext)
  const isSmallCard = isSmall(size)

  return (
    <>
      <MediaEmpty cardSize={size} />
      <Content cardSize={size}>
        <HeaderEmpty cardSize={size} />
        {!isSmallCard ? (
          <>
            <DescriptionEmpty cardSize={size} />
            <DescriptionEmpty
              cardSize={size}
              style={{ marginBottom: '12px' }}
            />
          </>
        ) : null}
        <FooterEmpty />
      </Content>
    </>
  )
}

export default CardEmptyState
