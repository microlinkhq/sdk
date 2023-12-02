import { urls, urlsVideo, urlsAudio, urlsIframe } from './util/data'
import { Story } from './util/story'

export default { title: 'media' }

export const image = {
  name: 'image',
  render: () => urls.map(url => Story({ url, media: 'image' }))
}

export const logo = {
  name: 'logo',
  render: () => urls.map(url => Story({ url, media: 'logo' }))
}

export const video = {
  name: 'video',
  render: () => urlsVideo.map(url => Story({ url, media: 'video' }))
}

export const audio = {
  name: 'audio',
  render: () => urlsAudio.map(url => Story({ url, media: 'audio' }))
}

export const screenshot = {
  name: 'screenshot',
  render: () =>
    Story({
      url: urls[0],
      media: 'screenshot'
    })
}

export const ifrmae = {
  name: 'iframe',
  render: () =>
    urlsIframe.map(url =>
      Story({
        url,
        sizes: ['normal'],
        media: 'iframe'
      })
    )
}
