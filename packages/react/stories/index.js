import 'unfetch/polyfill'

import React from 'react'
import { storiesOf } from '@storybook/react'

import { checkA11y } from '@storybook/addon-a11y'

import Microlink from '../src'
import { urls, urlsVideo } from './data'

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
  .addDecorator(checkA11y)
  .addWithJSX('default', () => urls.map(url => createMicrolink({ url })))
  .addWithJSX('reverse', () =>
    urls.map(url => createMicrolink({ url, reverse: true }))
  )
  .addWithJSX('contrast', () =>
    urls.map(url => createMicrolink({ url, contrast: true }))
  )
  .addWithJSX('reverse + contrast', () =>
    urls.map(url => createMicrolink({ url, contrast: true, reverse: true }))
  )
  .addWithJSX('autoPlay (disabled)', () =>
    urlsVideo.map(url => createMicrolink({ url, autoPlay: false }))
  )
  .addWithJSX('loading', () => createMicrolink({ loading: true }))

storiesOf('media', module)
  .addDecorator(checkA11y)
  .addWithJSX('image', () =>
    urls.map(url => createMicrolink({ url, image: 'image' }))
  )
  .addWithJSX('logo', () =>
    urls.map(url => createMicrolink({ url, image: 'logo' }))
  )
  .addWithJSX('video', () =>
    urlsVideo.map(url => createMicrolink({ url, video: true }))
  )
  .addWithJSX('screenshot', () =>
    urls.map(url =>
      createMicrolink({
        url,
        image: 'screenshot',
        screenshot: true
      })
    )
  )

storiesOf('setData', module)
  .addDecorator(checkA11y)
  .addWithJSX('object', () =>
    createMicrolink({
      url: 'https://microlink.io',
      data: {
        title: 'My Custom Title'
      }
    })
  )
  .addWithJSX('object + noFetch', () =>
    createMicrolink({
      url: 'https://microlink.io',
      noFetch: true,
      setData: {
        title: 'My Custom Title'
      }
    })
  )
  .addWithJSX('function', () =>
    createMicrolink({
      url: 'https://microlink.io',
      setData: data => ({ ...data, title: 'My Custom Title' })
    })
  )
  .addWithJSX('function + noFetch', () =>
    createMicrolink({
      url: 'https://microlink.io',
      noFetch: true,
      setData: data => ({ ...data, title: 'My Custom Title' })
    })
  )

storiesOf('custom/style', module)
  .addDecorator(checkA11y)
  .addWithJSX('width', () =>
    ['300px', '400px', '500px', '600px', '700px', '800px'].map((width, index) =>
      createMicrolink({
        url: urls[index],
        style: {
          marginBottom: '20px',
          width
        }
      })
    )
  )
  .addWithJSX('height', () =>
    ['150px', '175px', '200px', '250px', '300px', '350px'].map(
      (height, index) =>
        createMicrolink({
          url: urls[index],
          style: {
            marginBottom: '20px',
            height
          }
        })
    )
  )
  .addWithJSX('border radius', () =>
    ['.42857em', '6px', '10px'].map((borderRadius, index) =>
      createMicrolink({
        url: urls[index],
        style: {
          marginBottom: '20px',
          borderRadius
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
