import { urls } from './util/data'
import { Story } from './util/story'

export default { title: 'style' }

export const width = {
  name: 'width',
  render: () =>
    ['300px', '400px', '500px', '600px', '700px', '800px'].map((width, index) =>
      Story({
        url: urls[index],
        style: {
          marginBottom: '20px',
          width
        }
      })
    )
}

export const height = {
  name: 'height',
  render: () =>
    ['150px', '175px', '200px', '250px', '300px', '350px'].map(
      (height, index) =>
        Story({
          url: urls[index],
          style: {
            marginBottom: '20px',
            height
          }
        })
    )
}

export const borderRadius = {
  name: 'border-radius',
  render: () =>
    ['.42857em', '6px', '10px'].map((borderRadius, index) =>
      Story({
        url: urls[index],
        style: {
          marginBottom: '20px',
          borderRadius
        }
      })
    )
}

export const misc = {
  name: 'misc',
  render: () =>
    urls.map(url =>
      Story({
        url,
        style: {
          marginBottom: '20px',
          fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
          boxShadow: '0 1px 4px 0 hsla(0, 0%, 0%, 0.2)'
        }
      })
    )
}
