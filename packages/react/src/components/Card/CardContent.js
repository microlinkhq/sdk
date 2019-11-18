/* global URL */

import React, { useCallback, useMemo } from 'react'
import styled, { css } from 'styled-components'
import CardText from './CardText'

import { transition } from '../../theme'
import { classNames, media, isLarge, isSmall, isNil } from '../../utils'

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

export const Content = styled('div').attrs({ className: classNames.content })`
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

const Header = styled('header').attrs({ className: classNames.title })`
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

const Description = styled('div').attrs({ className: classNames.description })`
  text-align: left;
  font-size: 14px;
  flex-grow: 2;
  margin: auto 0;
  line-height: 18px;
  ${({ cardSize }) => !isLarge(cardSize) && mobileDescriptionStyle};
`

const Footer = styled('footer').attrs({ className: classNames.url })`
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

const Author = styled(CardText)`
  opacity: 0.75;
  transition: opacity ${transition.medium};

  .${classNames.main}:hover & {
    opacity: 1;
  }
`

const PoweredBy = styled('span').attrs({ title: 'microlink.io' })`
  background: url('https://cdn.microlink.io/logo/logo.svg') no-repeat center
    center;
  display: block;
  margin-left: 15px;
  transition: filter ${transition.medium}, opacity ${transition.medium};
  &:not(:hover) {
    filter: grayscale(100%);
    opacity: 0.75;
  }

  min-width: ${BADGE_WIDTH};
  width: ${BADGE_WIDTH};
  background-size: ${BADGE_WIDTH};
  height: ${BADGE_HEIGHT};
`

export default ({ title, description, url, cardSize }) => {
  const isSmallCard = isSmall(cardSize)
  const formattedUrl = useMemo(() => getHostname(url), [url])
  const handleOnClick = useCallback(e => {
    e.preventDefault()
    window.open('https://www.microlink.io', '_blank')
  })

  return (
    <Content cardSize={cardSize}>
      <Header cardSize={cardSize}>
        <CardText useNanoClamp={false}>{title}</CardText>
      </Header>
      {!isSmallCard && (
        <Description cardSize={cardSize}>
          <CardText lines={2}>{description}</CardText>
        </Description>
      )}
      <Footer cardSize={cardSize}>
        <Author useNanoClamp={false}>{formattedUrl}</Author>
        <PoweredBy onClick={handleOnClick} />
      </Footer>
    </Content>
  )
}
