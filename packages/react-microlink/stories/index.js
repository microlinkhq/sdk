import 'unfetch/polyfill'

import React from 'react'
import { storiesOf } from '@storybook/react'

import Microlink from '../src'
import { urls, urlsVideo, getRandomSize } from './data'

const createMicrolink = props => (
  <div
    key={props.url}
    style={{ display: 'flex', flexDirection: 'column', paddingBottom: '64px' }}
  >
    <a href={props.url} style={{ color: '#0366d6', marginBottom: '2rem' }}>
      {props.url}
    </a>
    <Microlink size='normal' style={{ marginBottom: '2rem' }} {...props} />
    <Microlink size='large' {...props} />
  </div>
)

storiesOf('props', module)
  .addWithJSX('default', () => urls.map(url => createMicrolink({ url })))
  .addWithJSX('contrast', () =>
    urls.map(url => createMicrolink({ url, contrast: true }))
  )
  .addWithJSX('reverse', () =>
    urls.map(url => createMicrolink({ url, reverse: true }))
  )
  .addWithJSX('autoPlay', () =>
    urlsVideo.map(url => createMicrolink({ url, autoPlay: false }))
  )
  .addWithJSX('loading', () =>
    createMicrolink({ url: 'somesitethatwontresolve.com' })
  )

storiesOf('media', module)
  .addWithJSX('image', () =>
    urls.map(url => createMicrolink({ url, image: 'image' }))
  )
  .addWithJSX('logo', () =>
    urls.map(url => createMicrolink({ url, image: 'logo' }))
  )
  .addWithJSX('video', () => urlsVideo.map(url => createMicrolink({ url })))
  .addWithJSX('screenshot', () =>
    urls.map(url =>
      createMicrolink({
        url,
        image: 'screenshot',
        screenshot: true
      })
    )
  )

storiesOf('custom', module)
  .addWithJSX('data', () =>
    createMicrolink({
      url: 'https://microlink.io',
      data: {
        title: 'My Custom Title',
        image: 'https://microlink.io/logo-trim.png',
        description: 'My Custom Description',
        url: 'https://microlink.io'
      }
    })
  )
  .addWithJSX('round', () =>
    urls.map(url =>
      createMicrolink({
        url,
        round: getRandomSize([6, 10, 20, 30, 50, 9999])
      })
    )
  )

storiesOf('custom/style', module)
  .addWithJSX('width', () =>
    urls.map(url =>
      createMicrolink({
        url,
        style: {
          marginBottom: '20px',
          width: getRandomSize([300, 400, 500, 600, 700, 800])
        }
      })
    )
  )
  .addWithJSX('height', () =>
    urls.map(url =>
      createMicrolink({
        url,
        style: {
          marginBottom: '20px',
          height: getRandomSize([150, 175, 200, 250, 300, 350])
        }
      })
    )
  )
  .addWithJSX('misc', () =>
    urls.map(url =>
      createMicrolink({
        url,
        style: {
          marginBottom: '20px',
          fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
          boxShadow: '0 1px 4px 0 hsla(0, 0%, 0%, 0.2)'
        }
      })
    )
  )
