// @flow
import React from 'react'
import styled from 'styled-components'
import extractDomain from 'extract-domain'

type ContentProps = {
  title?: string,
  description?: string,
  url?: string,
  empty?: boolean
}

const ContentWrap = styled.div`
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

const EmptyContent = styled.div`
  opacity: 0.5;
`

const EmptyTitle = styled.span`
  height: 16px;
  width: 80%;
  display: block;
  background: #e1e8ed;
  margin-bottom: 8px;
`
const EmptyDescription = styled.span`
  height: 54px;
  width: 100%;
  display: block;
  background: #e1e8ed;
  margin-bottom: 12px;
`
const EmptyLink = styled.span`
  height: 12px;
  width: 60%;
  display: block;
  background: #e1e8ed;
`

const CardContent = ({
  title,
  description,
  url,
  logo,
  empty = false
}: ContentProps) => (
  <ContentWrap>
    {empty && (
      <EmptyContent>
        <EmptyTitle />
        <EmptyDescription />
        <EmptyLink />
      </EmptyContent>
    )}
    {title && <Title title={title}>{title}</Title>}
    {description && <Text>{description}</Text>}
    {url && <Url>{extractDomain(url)}</Url>}
  </ContentWrap>
)

export default CardContent
