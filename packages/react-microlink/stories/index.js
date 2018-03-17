import 'unfetch/polyfill'

import React from 'react'
import { storiesOf } from '@storybook/react'

import MicrolinkCard from '../src'
import { urls, urlsVideo, getRandomSize } from './data'

storiesOf('Normal', module)
  .addWithJSX('default', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard key={url} url={url} style={{ marginBottom: '20px' }} />
      ))}
    </div>
  ))
  .addWithJSX('with round prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          round
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom round prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          round={getRandomSize([6, 10, 20, 30, 50, 9999])}
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom width', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{
            marginBottom: '20px',
            width: getRandomSize([300, 400, 500, 600, 700, 800])
          }}
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom height', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{
            marginBottom: '20px',
            height: getRandomSize([75, 125, 150, 175, 200, 250])
          }}
        />
      ))}
    </div>
  ))
  .addWithJSX('with contrast prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          contrast
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom style', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{
            marginBottom: '20px',
            fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
            boxShadow: '0 1px 4px 0 hsla(0, 0%, 0%, 0.2)'
          }}
          round
        />
      ))}
    </div>
  ))
  .addWithJSX('with image prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          image={'logo'}
          round
        />
      ))}
    </div>
  ))
  .addWithJSX('with video media', () => (
    <div>
      {urlsVideo.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          round
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom data', () => (
    <MicrolinkCard
      url='https://microlink.io'
      data={{
        title: 'My Custom Title',
        image: 'https://microlink.io/logo-trim.png',
        description: 'My Custom Description',
        url: 'https://microlink.io'
      }}
    />
  ))
  .addWithJSX('with reverse prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          reverse
        />
      ))}
    </div>
  ))
  .addWithJSX('with empty state', () => (
    <MicrolinkCard url='somesitethatwontresolve.com' />
  ))

storiesOf('Large', module)
  .addWithJSX('default', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          size='large'
        />
      ))}
    </div>
  ))
  .addWithJSX('with round prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          size='large'
          round
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom round prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          size='large'
          round={getRandomSize([6, 10, 20, 30])}
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom width', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{
            marginBottom: '20px',
            width: getRandomSize([300, 400, 500, 600, 700, 800])
          }}
          size='large'
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom height', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{
            marginBottom: '20px',
            height: getRandomSize([300, 400, 500, 600, 700, 800])
          }}
          size='large'
        />
      ))}
    </div>
  ))
  .addWithJSX('with contrast prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          size='large'
          contrast
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom style', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{
            marginBottom: '20px',
            fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
            boxShadow: '0 1px 4px 0 hsla(0, 0%, 0%, 0.2)'
          }}
          round
          size='large'
        />
      ))}
    </div>
  ))
  .addWithJSX('with image prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          image={'logo'}
          round
          size='large'
        />
      ))}
    </div>
  ))
  .addWithJSX('with video media', () => (
    <div>
      {urlsVideo.map(url => (
        <MicrolinkCard
          size='large'
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          round
        />
      ))}
    </div>
  ))
  .addWithJSX('with custom data', () => (
    <MicrolinkCard
      url='https://microlink.io'
      size='large'
      data={{
        title: 'My Custom Title',
        image: 'https://microlink.io/logo-trim.png',
        description: 'My Custom Description',
        url: 'https://microlink.io'
      }}
    />
  ))
  .addWithJSX('with reverse prop', () => (
    <div>
      {urls.map(url => (
        <MicrolinkCard
          size='large'
          key={url}
          url={url}
          style={{ marginBottom: '20px' }}
          reverse
        />
      ))}
    </div>
  ))
  .addWithJSX('with empty state', () => (
    <MicrolinkCard size='large' url='somesitethatwontresolve.com' />
  ))
