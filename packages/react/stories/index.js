import 'unfetch/polyfill'

import { storiesOf } from '@storybook/react'

import { urls, urlsVideo, urlsAudio, urlsIframe } from './data'
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
  .add('controls (disabled)', () =>
    urlsVideo.map(url =>
      createStoryEntry({ url, media: 'video', controls: false })
    )
  )
  .add('loading', () => createStoryEntry({ loading: true }))
  .add('lazy', () => [
    createStoryEntry({ lazy: false }, true),
    createStoryEntry({ lazy: { threshold: 1 } }, true)
  ])
  .add('mediaRef', () =>
    createStoryEntry({
      url: urlsVideo[0],
      media: 'video',
      mediaRef: node => {
        if (node) {
          console.log(
            `
┌───────────────┐
│ Microlink SDK │
└───────────────┘
  Media Ref:
`,
            node
          )
        }
      }
    })
  )

storiesOf('media', module)
  .add('image', () =>
    urls.map(url => createStoryEntry({ url, media: 'image' }))
  )
  .add('logo', () => urls.map(url => createStoryEntry({ url, media: 'logo' })))
  .add('video', () =>
    urlsVideo.map(url => createStoryEntry({ url, media: 'video' }))
  )
  .add('audio', () =>
    urlsAudio.map(url => createStoryEntry({ url, media: 'audio' }))
  )
  .add('screenshot', () => [
    createStoryEntry({
      url: urls[0],
      media: 'screenshot'
    })
  ])
  .add('iframe', () =>
    urlsIframe.map(url =>
      createStoryEntry({
        url,
        sizes: ['normal'],
        media: 'iframe'
      })
    )
  )

storiesOf('setData', module)
  .add('object', () =>
    createStoryEntry({
      setData: {
        image: {
          url:
            'https://media.tenor.com/images/5d4791abbfa98823cdbcd82b7ece2ced/tenor.gif'
        },
        title: 'Microlink Query Language',
        description: 'Turns any web into data',
        url: 'https://docs.microlink.io'
      }
    })
  )
  .add('function', () =>
    createStoryEntry({
      setData: () => ({ title: 'My Custom Title' })
    })
  )
  .add('prefer media', () => (
    <>
      {createStoryEntry({
        url: 'https://youtube.com',
        sizes: ['normal'],
        media: ['iframe', 'video', 'audio'],
        setData: data => ({
          iframe: null,
          audio: {
            url: 'https://invalidurl.lol',
            type: 'mp4',
            duration: 552.054422,
            size: 8935291,
            duration_pretty: '9m',
            size_pretty: '8.94 MB'
          },
          video: {
            url:
              'https://cdn.microlink.io/data/assets/youtube.com!watch!v=9P6rdqiybaw/r3---sn-ab5l6nzl.googlevideo.com!videoplayback!c=WEB&dur=552.054&ei=-fbwXa7LFq2Khwaf6JnoDg&expire=15.mp4',
            type: 'mp4',
            duration: 552.007943,
            size: 54633895,
            height: 720,
            width: 1280,
            duration_pretty: '9m',
            size_pretty: '54.6 MB'
          }
        })
      })}
      {createStoryEntry({
        url: 'https://example.com',
        sizes: ['normal'],
        media: ['iframe', 'video', 'audio'],
        setData: data => ({
          iframe: {
            html:
              "<marquee>welcome to microlink.io! You're the visitor number 12242! CONGRATS!! You win an API key, just send 1$ to hello@microlink.io for receiving it into your inbox</marquee>",
            scripts: []
          },
          audio: {
            url: 'https://invalidurl.lol',
            type: 'mp4',
            duration: 552.054422,
            size: 8935291,
            duration_pretty: '9m',
            size_pretty: '8.94 MB'
          },
          video: {
            url:
              'https://cdn.microlink.io/data/assets/youtube.com!watch!v=9P6rdqiybaw/r3---sn-ab5l6nzl.googlevideo.com!videoplayback!c=WEB&dur=552.054&ei=-fbwXa7LFq2Khwaf6JnoDg&expire=15.mp4',
            type: 'mp4',
            duration: 552.007943,
            size: 54633895,
            height: 720,
            width: 1280,
            duration_pretty: '9m',
            size_pretty: '54.6 MB'
          }
        })
      })}
    </>
  ))

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
