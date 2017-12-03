// @flow
import React from 'react'
import styled from 'styled-components'

import CardImage from './CardImage'
import { ContentWrap } from './CardContent'

const EmptyTitle = styled.span`
  height: 16px;
  width: 80%;
  display: block;
  background: #e1e8ed;
  margin-bottom: 8px;
  opacity: 0.8;
`
const EmptyDescription = styled.span`
  height: 54px;
  width: 100%;
  display: block;
  background: #e1e8ed;
  margin-bottom: 12px;
  opacity: 0.8;
`
const EmptyLink = styled.span`
  height: 12px;
  width: 60%;
  display: block;
  background: #e1e8ed;
  opacity: 0.8;
`

const CardEmptyState = () => {
  return [
    <CardImage />,
    <ContentWrap>
      <EmptyTitle />
      <EmptyDescription />
      <EmptyLink />
    </ContentWrap>
  ]
}

export default CardEmptyState
