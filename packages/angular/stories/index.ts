import demoLinks from '@microlink/demo-links'

import Microlink from '../src'

export default { title: 'Microlink' }

export const defaultStory = () => ({
  component: Microlink.Component,
  props: {
    url: demoLinks.Nasa.url
  }
})
defaultStory.story = { name: 'Default' }

export const withOptions = () => ({
  component: Microlink.Component,
  props: {
    url: demoLinks.Spotify.url,
    options: {
      size: 'large',
      media: 'audio',
      autoPlay: false
    }
  }
})

export const configurableExample = () => ({
  moduleMetadata: {
    imports: [Microlink.Module]
  },
  props: {
    linkKeys: Object.keys(demoLinks),
    links: demoLinks,
    url: demoLinks.Spotify.url,
    size: 'large',
    media: 'audio'
  },
  template: `
    <div class="story-wrap">
      <microlink [url]="url" [options]="{ size: size, media: media }"></microlink>

      <div style="margin-top: 20px">
        <div style="margin-bottom: 10px">
          <label>URL</label>
          <select [(ngModel)]="url">
            <option
              *ngFor="let key of linkKeys"
              [ngValue]="links[key].url"
            >
              {{key}}
            </option>
          </select>
        </div>

        <div style="margin-bottom: 10px">
          <label>Size</label>
          <select [(ngModel)]="size">
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <label>Media</label>
          <select [(ngModel)]="media">
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
        </div>
      </div>
    </div>
  `
})
