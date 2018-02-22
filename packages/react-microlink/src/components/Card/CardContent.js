import React from 'react'
import styled, {css} from 'styled-components'
import extractDomain from 'extract-domain'
import NanoClamp from 'nanoclamp'

import {media} from '../../utils'

const isLarge = cardSize => cardSize === 'large'

const largeStyle = css`
  flex: 0 0 125px;
`

const StyledClamp = ({...props}) => <NanoClamp {...props} />

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

const Title = styled(StyledClamp)`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  flex-grow: 1.2;
`

const Description = styled(StyledClamp)`
  font-size: 14px;
  flex-grow: 2;
  margin: auto 0;
  line-height: 18px;

  ${({cardSize}) => !isLarge(cardSize) && media.mobile`
    > div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `};
`

const Url = styled(StyledClamp)`
  font-size: 12px;
  margin: 0;
  flex-grow: 0;
`

export default ({title, description, url, cardSize, className}) => (
  <Content className={className} cardSize={cardSize}>
    <Title
      className='microlink_card__content_title'
      lines={1}
      text={title}
    />
    <Description
      lines={2}
      className='microlink_card__content_description'
      text={description}
      cardSize={cardSize}
     />
    <Url
      lines={1}
      className='microlink_card__content_url'
      text={extractDomain(url)}
    />
  </Content>
)
