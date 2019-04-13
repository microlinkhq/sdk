import 'unfetch/polyfill'

import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import React from 'react'

import { urls, urlsVideo } from './data'
import Microlink from '../src'

addDecorator(withA11y)

const createMicrolink = props => (
  <div
    key={JSON.stringify(props)}
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
  .add('default', () => urls.map(url => createMicrolink({ url })))
  .add('direction', () =>
    urls.map(url => createMicrolink({ url, direction: 'rtl' }))
  )
  .add('contrast', () =>
    urls.map(url => createMicrolink({ url, contrast: true }))
  )
  .add('direction + contrast', () =>
    urls.map(url => createMicrolink({ url, contrast: true, direction: 'rtl' }))
  )
  .add('autoPlay (disabled)', () =>
    urlsVideo.map(url =>
      createMicrolink({ url, media: 'video', autoPlay: false })
    )
  )
  .add('loading', () =>
    createMicrolink({ url: 'https://microlink.io', loading: true })
  )

storiesOf('media', module)
  .add('image', () => urls.map(url => createMicrolink({ url, media: 'image' })))
  .add('logo', () => urls.map(url => createMicrolink({ url, media: 'logo' })))
  .add('video', () =>
    urlsVideo.map(url => createMicrolink({ url, media: 'video' }))
  )
  .add('screenshot', () => [
    createMicrolink({
      url: urls[0],
      media: 'screenshot'
    }),
    createMicrolink({
      url: urls[0],
      media: ['screenshot']
    })
  ])

storiesOf('setData', module)
  .addDecorator(withA11y)
  .add('object', () =>
    createMicrolink({
      url: 'https://microlink.io',
      setData: {
        image: { url: 'https://microlink.io/banner_mql.png' },
        title: 'Microlink Query Language',
        description: 'Turns any web into data',
        url: 'https://docs.microlink.io'
      }
    })
  )
  .add('function', () =>
    createMicrolink({
      url: 'https://microlink.io',
      setData: data => ({ ...data, title: 'My Custom Title' })
    })
  )

storiesOf('style', module)
  .addDecorator(withA11y)
  .add('width', () =>
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
  .add('height', () =>
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
  .add('border radius', () =>
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
  .add('misc', () =>
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
