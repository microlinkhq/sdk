import 'unfetch/polyfill'
import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'

import withMicrolinkHover from '../src'

const setData = () => ({
  title: 'Browser as API',
  description:
    'Turns websites into data: Enter a URL, receive information. Make any URL embeddable. Capture any website as a snapshot. Generate PDF from any website. Automate web performance.',
  lang: 'en',
  author: null,
  publisher: 'Microlink',
  image: {
    url: 'https://cdn.microlink.io/www/home.png',
    type: 'png',
    size: 97629,
    height: 882,
    width: 1686,
    size_pretty: '97.6 kB'
  },
  url: 'https://microlink.io',
  date: '2020-05-07T15:10:41.692Z',
  logo: {
    url: 'https://cdn.microlink.io/logo/logo.png',
    type: 'png',
    size: 5050,
    height: 500,
    width: 500,
    size_pretty: '5.05 kB'
  }
})

const Paraph = styled.div`
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  color: rgb(6, 125, 247);
`

const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  background: rgb(6, 125, 247);
  color: white;
  border: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
`

storiesOf('decorator', module)
  .add('as link', () => {
    const MicrolinkHoverLink = withMicrolinkHover(Link)

    return (
      <Center>
        <Paraph>
          Check my{' '}
          <MicrolinkHoverLink href='https://microlink.io' setData={setData}>
            link
          </MicrolinkHoverLink>
        </Paraph>
      </Center>
    )
  })
  .add('as button', () => {
    const MicrolinkHoverButton = withMicrolinkHover(Button)

    return (
      <Center>
        <Paraph>
          Check my{' '}
          <MicrolinkHoverButton href='https://microlink.io' setData={setData}>
            button
          </MicrolinkHoverButton>
        </Paraph>
      </Center>
    )
  })
  .add('as element', () => {
    const MicrolinkHoverText = withMicrolinkHover(
      styled(Paraph)`
        color: gray;
      `
    )

    return (
      <Center>
        <Paraph>
          Check my{' '}
          <MicrolinkHoverText url='https://microlink.io' setData={setData}>
            word
          </MicrolinkHoverText>
        </Paraph>
      </Center>
    )
  })
  .add('custom style', () => {
    const MicrolinkHoverLink = withMicrolinkHover(Link)

    const CustomCenter = styled(Center)`
      --microlink-border-color: #666;
      --microlink-hover-border-color: #999;
      color: white;
      background: #1a1a1a;
    `

    return (
      <CustomCenter>
        <Paraph>
          Check my{' '}
          <MicrolinkHoverLink
            style={{
              background: '#1A1A1A',
              color: 'white',
              fontWeight: 'bold'
            }}
            href='https://microlink.io'
            setData={setData}
          >
            link
          </MicrolinkHoverLink>
        </Paraph>
      </CustomCenter>
    )
  })
