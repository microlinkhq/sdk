import { urls, urlsVideo } from './util/data'
import { Story } from './util/story'

export default { title: 'props' }

export const main = {
  name: 'default',
  render: () => urls.map(url => Story({ url }))
}

export const direction = {
  name: 'direction',
  render: () => urls.map(url => Story({ url, direction: 'rtl' }))
}

export const contrast = {
  name: 'contrast',
  render: () => urls.map(url => Story({ url, contrast: true }))
}

export const directionAndContrast = {
  name: 'direction + contrast',
  render: () =>
    urls.map(url => Story({ url, direction: 'rtl', contrast: true }))
}

export const autoplayDisabled = {
  name: 'autoPlay (disabled)',
  render: () => urls.map(url => Story({ url, media: 'video', autoPlay: false }))
}

export const constrolsDisabled = {
  name: 'controls (disabled)',
  render: () => urls.map(url => Story({ url, media: 'video', controls: false }))
}

export const loading = {
  name: 'loading',
  render: () => Story({ loading: true })
}

export const lazy = {
  name: 'lazy',
  render: () => Story({ lazy: false }, true)
}

export const lazyTreshold = {
  name: 'lazy (with threshold)',
  render: () => Story({ lazy: { threshold: 1 } }, true)
}

export const mediaRef = {
  name: 'mediaRef',
  render: () =>
    Story({
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
}
