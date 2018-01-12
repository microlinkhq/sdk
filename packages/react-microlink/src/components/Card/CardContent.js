import React from 'react'
import styled from 'styled-components'
import extractDomain from 'extract-domain'

import { CardContentLarge } from './CardLarge'
import { media } from '../../utils'

export const Content = styled.div`
  flex: 1;
  padding: 10px 15px;
  min-width: 0;
  box-sizing: border-box;
  ${({cardSize}) => cardSize === 'large' && CardContentLarge}
`

const Title = styled.h2`
  font-size: 16px;
  margin: 0 0 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 95%;

  ${media.mobile`
    white-space: nowrap;
  `}
`

const Description = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${({cardSize}) => cardSize !== 'large' && media.mobile`
    white-space: nowrap;
  `}

  ${media.desktop`
    height: 54px;
  `}
`

const Url = styled.span`
  font-size: 12px;
  margin-top: 10px;
  display: inline-block;
`

export default ({ title, description, url, cardSize, className }) => (
  <Content className={className} cardSize={cardSize}>
    <Title className='microlink_card__content_title' title={title}>{title}</Title>
    <Description
      className='microlink_card__content_description'
      cardSize={cardSize}
    >{description}</Description>
    <Url className='microlink_card__content_url'>{extractDomain(url)}</Url>
  </Content>
)
