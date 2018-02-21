import React from 'react'
import styled, {css} from 'styled-components'
import extractDomain from 'extract-domain'
import ClampLines from 'react-clamp-lines'

import {media} from '../../utils'

const isLarge = cardSize => cardSize === 'large'

const largeStyle = css`
  flex: 0 0 125px;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
  padding: 10px 15px;
  min-width: 0;
  box-sizing: border-box;
  ${({cardSize}) => isLarge(cardSize) && largeStyle};
`

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 95%;
  flex-grow: 1.2;

  ${media.mobile`
    white-space: nowrap;
  `};
`

const Description = styled(ClampLines)`
  font-size: 14px;
  flex-grow: 2;
  margin: auto 0;
  line-height: 18px;

  > div {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({cardSize}) => !isLarge(cardSize) && media.mobile`
    > div {
      white-space: nowrap;
    }
  `};
`

const Url = styled.span`
  font-size: 12px;
  margin: 0px;
  display: inline-block;
  flex-grow: 0;
`

export default ({title, description, url, cardSize, className}) => (
  <Content className={className} cardSize={cardSize}>
    <Title className='microlink_card__content_title' title={title}>
      {title}
    </Title>

    <Description
      lines={2}
      className='microlink_card__content_description'
      text={description}
      cardSize={cardSize}
      buttons={false}
     />
    <Url className='microlink_card__content_url'>{extractDomain(url)}</Url>
  </Content>
)
