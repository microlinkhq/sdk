import 'unfetch/polyfill'

import React from 'react'
import {storiesOf} from '@storybook/react'

import {Card, HoverCard} from '../src'
import {urls, urlsVideo, getRandomSize} from './data'

import styled from 'styled-components'

const BlogPost = styled.div`
font-size: 20px;
font-family: 'helvetica neue', helvetica, sans-serif;
line-height: 1.8em;
margin: auto 2.5rem;
`

const BlogParaph = styled.div`
margin: 1.8em 0;
`

storiesOf('Card/Normal', module)
  .add('default', () => (
    <div>{urls.map(url => <Card key={url} url={url} style={{marginBottom: '20px'}} />)}</div>
  ))
  .add('with round prop', () => (
    <div>{urls.map(url => <Card key={url} url={url} style={{marginBottom: '20px'}} round />)}</div>
  ))
  .add('with custom round prop', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          round={getRandomSize([6, 10, 20, 30, 50, 9999])}
        />
      ))}
    </div>
  ))
  .add('with custom width', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{marginBottom: '20px', width: getRandomSize([300, 400, 500, 600, 700, 800])}}
        />
      ))}
    </div>
  ))
  .add('with custom height', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{marginBottom: '20px', height: getRandomSize([75, 125, 150, 175, 200, 250])}}
        />
      ))}
    </div>
  ))
  .add('with contrast prop', () => (
    <div>
      {urls.map(url => <Card key={url} url={url} style={{marginBottom: '20px'}} contrast />)}
    </div>
  ))
  .add('with custom style', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{
            marginBottom: '20px',
            fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace'
          }}
          round
        />
      ))}
    </div>
  ))
  .add('with custom image', () => (
    <div>
      {urls.map(url => (
        <Card key={url} url={url} style={{marginBottom: '20px'}} image={'logo'} round />
      ))}
    </div>
  ))
  .add('with video prop', () => (
    <div>
      {urlsVideo.map(url => <Card key={url} url={url} style={{marginBottom: '20px'}} round />)}
    </div>
  ))
  .add('with empty state', () => <Card url='somesitethatwontresolve.com' />)

storiesOf('Card/Large', module)
  .add('default', () => (
    <div>
      {urls.map(url => <Card key={url} url={url} style={{marginBottom: '20px'}} size='large' />)}
    </div>
  ))
  .add('with round prop', () => (
    <div>
      {urls.map(url => (
        <Card key={url} url={url} style={{marginBottom: '20px'}} size='large' round />
      ))}
    </div>
  ))
  .add('with custom round prop', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          size='large'
          round={getRandomSize([6, 10, 20, 30])}
        />
      ))}
    </div>
  ))
  .add('with custom width', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{marginBottom: '20px', width: getRandomSize([300, 400, 500, 600, 700, 800])}}
          size='large'
        />
      ))}
    </div>
  ))
  .add('with custom height', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{marginBottom: '20px', height: getRandomSize([300, 400, 500, 600, 700, 800])}}
          size='large'
        />
      ))}
    </div>
  ))
  .add('with contrast prop', () => (
    <div>
      {urls.map(url => (
        <Card key={url} url={url} style={{marginBottom: '20px'}} size='large' contrast />
      ))}
    </div>
  ))
  .add('with custom style', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{
            marginBottom: '20px',
            fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace'
          }}
          round
          size='large'
        />
      ))}
    </div>
  ))
  .add('with custom image', () => (
    <div>
      {urls.map(url => (
        <Card
          key={url}
          url={url}
          style={{marginBottom: '20px'}}
          image={'logo'}
          round
          size='large'
        />
      ))}
    </div>
  ))
  .add('with video prop', () => (
    <div>
      {urlsVideo.map(url => (
        <Card size='large' key={url} url={url} style={{marginBottom: '20px'}} round />
      ))}
    </div>
  ))
  .add('with empty state', () => <Card size='large' url='somesitethatwontresolve.com' />)

storiesOf('HoverCard/Normal', module).add('default', () => (
  <BlogPost>
    <BlogParaph>
      <strong>random</strong> is a term used to describe the process of generate data with no
      correlation.
    </BlogParaph>
    <BlogParaph>
      As you can see, all these examples use a <em>random</em> factor, but they are different. Also
      computationally they are different so, how to?
    </BlogParaph>
    <BlogParaph>
      The ideal case. True{' '}
      <HoverCard href='https://en.wikipedia.org/wiki/Randomness' target='_blank'>
        randomness
      </HoverCard>, to which no pattern or algorithm applies. It’s debatable whether this really
      exists.
    </BlogParaph>
    <BlogParaph>
      To have any hope of producing truly random data, you must reach outside the computer and{' '}
      <HoverCard href='http://theworld.com/~cme/P1363/ranno.html' target='_blank'>
        sample the analog world
      </HoverCard>. This means use{' '}
      <HoverCard
        href='https://en.wikipedia.org/wiki/Hardware_random_number_generator'
        target='_blank'>
        specific hardware
      </HoverCard>{' '}
      for this purpose as well.
    </BlogParaph>
  </BlogPost>
))
