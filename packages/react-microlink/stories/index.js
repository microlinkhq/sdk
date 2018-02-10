import React from 'react'
import { storiesOf } from '@storybook/react'
import 'unfetch/polyfill'

import MicrolinkCard from '../src'
import { urls, urlsVideo, getRandomSize } from './data'

storiesOf('Normal', module)
  .add('default', () => (
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
  .add('with round prop', () => (
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
  .add('with custom round prop', () => (
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
  .add('with custom width', () => (
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
  .add('with custom height', () => (
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
  .add('with contrast prop', () => (
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
  .add('with custom style', () => (
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
  .add('with custom image', () => (
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
  .add('with video prop', () => (
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
  .add('with empty state', () => (
    <MicrolinkCard
      url='somesitethatwontresolve.com'
    />
  ))

storiesOf('Large', module)
  .add('default', () => (
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
  .add('with round prop', () => (
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
  .add('with custom round prop', () => (
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
  .add('with custom width', () => (
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
  .add('with custom height', () => (
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
  .add('with contrast prop', () => (
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
  .add('with custom style', () => (
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
  .add('with custom image', () => (
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
  .add('with video prop', () => (
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
  .add('with empty state', () => (
    <MicrolinkCard
      size='large'
      url='somesitethatwontresolve.com'
    />
  ))
