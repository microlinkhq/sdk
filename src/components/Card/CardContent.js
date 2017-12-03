// @flow
import React from 'react'
import styled, {css} from 'styled-components'
import extractDomain from 'extract-domain'

type ContentProps = {
  title?: string,
  description?: string,
  url?: string,
  large?: boolean,
  className?: string
}

const CardContent = styled.div`
  flex: 1;
  padding: 10px 15px;
  min-width: 0;
  box-sizing: border-box;

  ${props => props.large && css`
    flex: 0 0 125px;
  `}
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

export default ({ title, description, url, logo, large, className }: ContentProps) => (
  <CardContent className={className} large={large}>
    <Title className='microlink_card__content_title' title={title}>{title}</Title>
    <Description className='microlink_card__content_description'>{description}</Description>
    <Url className='microlink_card__content_url'>{extractDomain(url)}</Url>
  </CardContent>
)
