import 'unfetch/polyfill'

import React from 'react'
import { setAddon, storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx'

import MicrolinkCard from '../src'
import { urls, urlsVideo, getRandomSize } from './data'

setOptions({
  name: 'microlinkjsg',
  url: 'https://github.com/microlinkhq/microlinkjs',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false
})

setAddon(JSXAddon)

storiesOf('Normal', module)
  .addWithJSX('default', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
        />
      )}
    </div>
  ))
  .addWithJSX('with round prop', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          round
        />
      )}
    </div>
  ))
  .addWithJSX('with custom round prop', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          round={getRandomSize([6, 10, 20, 30, 50, 9999])}
        />
      )}
    </div>
  ))
  .addWithJSX('with custom width', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px', width: getRandomSize([300, 400, 500, 600, 700, 800])}}
        />
      )}
    </div>
  ))
  .addWithJSX('with custom height', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px', height: getRandomSize([75, 125, 150, 175, 200, 250])}}
        />
      )}
    </div>
  ))
  .addWithJSX('with contrast prop', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          contrast
        />
      )}
    </div>
  ))
  .addWithJSX('with custom style', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px', fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace'}}
          round
        />
      )}
    </div>
  ))
  .addWithJSX('with custom image', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          image={'logo'}
          round
        />
      )}
    </div>
  ))
  .addWithJSX('with video prop', () => (
    <div>
      {urlsVideo.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          round
        />
      )}
    </div>
  ))
  .addWithJSX('with custom data', () => (
    <MicrolinkCard
      url='https://microlink.io'
      data={{
        'title': 'My Custom Title',
        'image': 'https://microlink.io/logo-trim.png',
        'description': 'My Custom Description',
        'url': 'https://microlink.io'
      }}
    />
  ))
  .addWithJSX('with empty state', () => (
    <MicrolinkCard
      url='somesitethatwontresolve.com'
    />
  ))

storiesOf('Large', module)
  .addWithJSX('default', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          size='large'
        />
      )}
    </div>
  ))
  .addWithJSX('with round prop', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          size='large'
          round
        />
      )}
    </div>
  ))
  .addWithJSX('with custom round prop', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          size='large'
          round={getRandomSize([6, 10, 20, 30])}
        />
      )}
    </div>
  ))
  .addWithJSX('with custom width', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px', width: getRandomSize([300, 400, 500, 600, 700, 800])}}
          size='large'
        />
      )}
    </div>
  ))
  .addWithJSX('with custom height', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px', height: getRandomSize([300, 400, 500, 600, 700, 800])}}
          size='large'
        />
      )}
    </div>
  ))
  .addWithJSX('with contrast prop', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          size='large'
          contrast
        />
      )}
    </div>
  ))
  .addWithJSX('with custom style', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px', fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace'}}
          round
          size='large'
        />
      )}
    </div>
  ))
  .addWithJSX('with custom image', () => (
    <div>
      {urls.map(url =>
        <MicrolinkCard
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          image={'logo'}
          round
          size='large'
        />
      )}
    </div>
  ))
  .addWithJSX('with video prop', () => (
    <div>
      {urlsVideo.map(url =>
        <MicrolinkCard
          size='large'
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          round
        />
      )}
    </div>
  ))
  .addWithJSX('with custom data', () => (
    <MicrolinkCard
      url='https://microlink.io'
      size='large'
      data={{
        'title': 'My Custom Title',
        'image': 'https://microlink.io/logo-trim.png',
        'description': 'My Custom Description',
        'url': 'https://microlink.io'
      }}
    />
  ))
  .addWithJSX('with empty state', () => (
    <MicrolinkCard
      size='large'
      url='somesitethatwontresolve.com'
    />
  ))
