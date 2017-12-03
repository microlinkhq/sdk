// @flow
import React from 'react'
import styled from 'styled-components'
import extractDomain from 'extract-domain'

type ContentProps = {
  title?: string,
  description?: string,
  url?: string
}

export const ContentWrap = styled.div`
  flex: 1;
  padding: 15px;
  min-width: 0;
`

const Title = styled.h2`
  font-size: 16px;
  margin: 0 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 95%;
`

const Text = styled.p`
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
  color: #b3b6bc;
  margin-top: 10px;
  display: inline-block;
`

const CardContent = ({ title, description, url }: ContentProps) => (
  <ContentWrap>
    {title && <Title title={title}>{title}</Title>}
    {description && <Text>{description}</Text>}
    {url && <Url>{extractDomain(url)}</Url>}
  </ContentWrap>
)

export default CardContent
