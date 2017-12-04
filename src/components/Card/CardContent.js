// @flow
import React from 'react'
import styled from 'styled-components'
import extractDomain from 'extract-domain'

import type { CardSizes } from './index'
import { CardContentLarge } from './CardLarge'

type ContentProps = {
  cardSize?: CardSizes,
  title?: string,
  description?: string,
  url?: string,
  className?: string
}

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 95%;
`

const Description = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 18px;
  height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const Url = styled.span`
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  display: inline-block;
`

export default ({ title, description, url, cardSize, className }: ContentProps) => {
  const prettyUrl: string = extractDomain(url)
  return (
    <Content className={className} cardSize={cardSize}>
      <Title className='microlink_card__content_title' title={title}>{title}</Title>
      <Description className='microlink_card__content_description'>{description}</Description>
      <Url className='microlink_card__content_url'>{prettyUrl}</Url>
    </Content>
  )
}
