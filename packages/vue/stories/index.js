import demoLinks from '@microlink/demo-links'

export default { title: 'Microlink' }

export const defaultStory = () => ({
  data: () => ({ url: demoLinks.Nasa.url }),
  template: '<Microlink :url="url" />'
})
defaultStory.story = {
  name: 'Default'
}

export const withOptions = () => ({
  data: () => ({ url: demoLinks.Spotify.url }),
  template:
    '<Microlink :url="url" size="large" media="audio" :auto-play="false" />'
})

export const configurableExample = () => ({
  data: () => ({
    links: demoLinks,
    url: demoLinks.Nasa.url,
    size: 'normal',
    media: 'image'
  }),
  template: `
    <div class="story-wrap">
      <Microlink :url="url" :size="size" :media="media" />
      
      <div style="margin-top: 20px">
        <div style="margin-bottom: 10px">
          <label>URL</label>
          <select v-model="url">
            <option
              v-for="key in Object.keys(links)"
              :key="key"
              :value="links[key].url"
            >
              {{key}}
            </option>
          </select>
        </div>

        <div style="margin-bottom: 10px">
          <label>Size</label>
          <select v-model="size">
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <label>Media</label>
          <select v-model="media">
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
        </div>
      </div>
    </div>
  `
})
