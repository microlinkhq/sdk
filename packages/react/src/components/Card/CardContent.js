/* global URL */

import React from 'react'
import styled, { css } from 'styled-components'
import CardText from './CardText'

import { media, isLarge, isMini } from '../../utils'

const REGEX_STRIP_WWW = /^www\./

const getHostname = href => {
  const { hostname } = new URL(href)
  return hostname.replace(REGEX_STRIP_WWW, '')
}

const mobileDescriptionStyle = css`
  ${media.mobile`
    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `};
`

export const Content = styled('div')`
  display: flex;
  padding: 10px 15px;
  min-width: 0;
  box-sizing: border-box;
  ${({ cardSize }) => css`
    flex: ${!isLarge(cardSize) ? 1 : '0 0 125px'};
    justify-content: ${!isMini(cardSize) ? 'space-around' : 'space-between'};
    flex-direction: ${!isMini(cardSize) ? 'column' : 'row'};
    align-items: ${!isMini(cardSize) ? 'flex-start' : 'center'};
  `};
`

const Header = styled('header')`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  ${({ cardSize }) => css`
    flex-grow: ${!isMini(cardSize) ? 1.2 : 0.8};

    ${isMini(cardSize) && css`
      min-width: 0;
      padding-right: 20px;
    `}
  `}
`

const TitleText = styled(CardText)`
  ${({ cardSize }) => isMini(cardSize) && css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`

const Description = styled('div')`
  text-align: left;
  font-size: 14px;
  flex-grow: 2;
  margin: auto 0;
  line-height: 18px;
  ${({ cardSize }) => !isLarge(cardSize) && mobileDescriptionStyle};
`

const Footer = styled('footer')`
  text-align: left;
  font-size: 12px;
  margin: 0;
  flex-grow: 0;
`

export default ({ title, description, url, cardSize, className }) => {
  const isMiniCard = isMini(cardSize)

  const titleProps = !isMiniCard ? { lines: 1 } : { as: 'p' }

  return (
    <Content className={className} cardSize={cardSize}>
      <Header className='microlink_card__content_title' cardSize={cardSize}>
        <TitleText cardSize={cardSize} {...titleProps}>
          {title}
        </TitleText>
      </Header>
      {!isMiniCard && (
        <Description
          className='microlink_card__content_description'
          cardSize={cardSize}
        >
          <CardText lines={2}>{description}</CardText>
        </Description>
      )}
      <Footer className='microlink_card__content_url'>
        <CardText lines={1}>{url && getHostname(url)}</CardText>
      </Footer>
    </Content>
  )
}
