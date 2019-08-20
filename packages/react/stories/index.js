import 'unfetch/polyfill'

import { storiesOf } from '@storybook/react'

import { urls, urlsVideo } from './data'
import createStoryEntry from './createStoryEntry'

storiesOf('props', module)
  .add('default', () => urls.map(url => createStoryEntry({ url })))
  .add('direction', () =>
    urls.map(url => createStoryEntry({ url, direction: 'rtl' }))
  )
  .add('contrast', () =>
    urls.map(url => createStoryEntry({ url, contrast: true }))
  )
  .add('direction + contrast', () =>
    urls.map(url => createStoryEntry({ url, contrast: true, direction: 'rtl' }))
  )
  .add('autoPlay (disabled)', () =>
    urlsVideo.map(url =>
      createStoryEntry({ url, media: 'video', autoPlay: false })
    )
  )
  .add('loading', () => createStoryEntry({ loading: true }))
  .add('lazy', () => [
    createStoryEntry({ lazy: false }, true),
    createStoryEntry({ lazy: { threshold: 1 } }, true)
  ])

storiesOf('media', module)
  .add('image', () =>
    urls.map(url => createStoryEntry({ url, media: 'image' }))
  )
  .add('logo', () => urls.map(url => createStoryEntry({ url, media: 'logo' })))
  .add('video', () =>
    urlsVideo.map(url => createStoryEntry({ url, media: 'video' }))
  )
  .add('screenshot', () => [
    createStoryEntry({
      url: urls[0],
      media: 'screenshot'
    }),
    createStoryEntry({
      url: urls[0],
      media: ['screenshot']
    })
  ])

storiesOf('setData', module)
  .add('object', () =>
    createStoryEntry({
      setData: {
        image: { url: 'https://microlink.io/banner_mql.png' },
        title: 'Microlink Query Language',
        description: 'Turns any web into data',
        url: 'https://docs.microlink.io'
      }
    })
  )
  .add('function', () =>
    createStoryEntry({
      setData: data => ({ ...data, title: 'My Custom Title' })
    })
  )

storiesOf('style', module)
  .add('width', () =>
    ['300px', '400px', '500px', '600px', '700px', '800px'].map((width, index) =>
      createStoryEntry({
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
        createStoryEntry({
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
      createStoryEntry({
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
      createStoryEntry({
        url,
        style: {
          marginBottom: '20px',
          fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
          boxShadow: '0 1px 4px 0 hsla(0, 0%, 0%, 0.2)'
        }
      })
    )
  )
