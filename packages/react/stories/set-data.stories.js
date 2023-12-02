import React from 'react'
import { Story } from './util/story'

export default { title: 'setData' }

export const object = {
  name: 'object',
  render: () =>
    Story({
      setData: {
        image: {
          url: 'https://media.tenor.com/images/5d4791abbfa98823cdbcd82b7ece2ced/tenor.gif'
        },
        title: 'Microlink Query Language',
        description: 'Turns any web into data',
        url: 'https://docs.microlink.io'
      }
    })
}

export const _function = {
  name: 'function',
  render: () =>
    Story({
      setData: () => ({ title: 'My Custom Title' })
    })
}

export const preferMedia = {
  name: 'prefer media',
  render: () => (
    <>
      {Story({
        url: 'https://youtube.com',
        sizes: ['normal'],
        media: ['iframe', 'video', 'audio'],
        fetchData: false,
        setData: () => ({
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
            url: 'https://cdn.microlink.io/data/assets/youtube.com!watch!v=9P6rdqiybaw/r3---sn-ab5l6nzl.googlevideo.com!videoplayback!c=WEB&dur=552.054&ei=-fbwXa7LFq2Khwaf6JnoDg&expire=15.mp4',
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
      {Story({
        url: 'https://example.com',
        sizes: ['normal'],
        media: ['iframe', 'video', 'audio'],
        fetchData: false,
        setData: () => ({
          iframe: {
            html: "<marquee>welcome to microlink.io! You're the visitor number 12242! CONGRATS!! You win an API key, just send 1$ to hello@microlink.io for receiving it into your inbox</marquee>",
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
            url: 'https://cdn.microlink.io/data/assets/youtube.com!watch!v=9P6rdqiybaw/r3---sn-ab5l6nzl.googlevideo.com!videoplayback!c=WEB&dur=552.054&ei=-fbwXa7LFq2Khwaf6JnoDg&expire=15.mp4',
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
  )
}
