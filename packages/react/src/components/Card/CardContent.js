/* global URL */

import React, { useCallback, useMemo } from 'react'
import styled, { css } from 'styled-components'
import CardText from './CardText'

import { media, isLarge, isSmall, isNil } from '../../utils'

const REGEX_STRIP_WWW = /^www\./
const BADGE_WIDTH = '16px'
const BADGE_HEIGHT = '12px'

const getHostname = href => {
  if (isNil(href)) return ''
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
    justify-content: ${!isSmall(cardSize) ? 'space-around' : 'space-between'};
    flex-direction: ${!isSmall(cardSize) ? 'column' : 'row'};
    align-items: ${!isSmall(cardSize) ? 'stretch' : 'center'};
  `};
`

const Header = styled('header')`
  text-align: left;
  font-weight: bold;
  margin: 0;
  width: 100%;
  ${({ cardSize }) => css`
    flex-grow: ${!isSmall(cardSize) ? 1.2 : 0.8};
    font-size: ${!isSmall(cardSize) ? '16px' : '15px'};

    ${isSmall(cardSize) &&
      css`
        min-width: 0;
        padding-right: 14px;
      `}
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  margin: 0;
  flex-grow: 0;
  ${({ cardSize }) => css`
    font-size: ${!isSmall(cardSize) ? '12px' : '10px'};
    ${!isSmall(cardSize) && 'width: 100%;'}
  `};
`

const PoweredBy = styled('span').attrs({ title: 'microlink.io' })`
  background: url('https://cdn.microlink.io/logo/logo.svg') no-repeat center
    center;
  display: block;
  margin-left: 15px;
  transition: filter 0.15s ease, opacity 0.15s ease;

  &:not(:hover) {
    filter: grayscale(100%);
    opacity: 0.75;
  }

  min-width: ${BADGE_WIDTH};
  width: ${BADGE_WIDTH};
  background-size: ${BADGE_WIDTH};
  height: ${BADGE_HEIGHT};
`

export default ({ title, description, url, cardSize, className }) => {
  const isSmallCard = isSmall(cardSize)
  const formattedUrl = useMemo(() => getHostname(url), [url])
  const handleOnClick = useCallback(e => {
    e.preventDefault()
    window.open('https://www.microlink.io', '_blank')
  })

  return (
    <Content className={className} cardSize={cardSize}>
      <Header className='microlink_card__content_title' cardSize={cardSize}>
        <CardText useNanoClamp={false}>{title}</CardText>
      </Header>
      {!isSmallCard && (
        <Description
          className='microlink_card__content_description'
          cardSize={cardSize}
        >
          <CardText lines={2}>{description}</CardText>
        </Description>
      )}
      <Footer cardSize={cardSize} className='microlink_card__content_url'>
        <CardText useNanoClamp={false}>{formattedUrl}</CardText>
        <PoweredBy onClick={handleOnClick} />
      </Footer>
    </Content>
  )
}
