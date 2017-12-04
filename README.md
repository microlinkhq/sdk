# MicrolinkJS

> Embed links from any website.

![Last version](https://img.shields.io/github/tag/microlinkhq/react-microlink.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/microlinkhq/react-microlink/master.svg?style=flat-square)](https://travis-ci.org/microlinkhq/react-microlink)
[![Dependency status](https://img.shields.io/david/microlinkhq/react-microlink.svg?style=flat-square)](https://david-dm.org/microlinkhq/react-microlink)
[![Dev Dependencies Status](https://img.shields.io/david/dev/microlinkhq/react-microlink.svg?style=flat-square)](https://david-dm.org/microlinkhq/react-microlink#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/react-microlink.svg?style=flat-square)](https://www.npmjs.org/package/react-microlink)

## Overview

MicrolinkJS lets you create beautiful links previews from any website.

It is a perfect complement for improve the engagement of your articles or blog publications, bringing your user to see what is behind any link.

It uses default styles by default, but you can customize the display via options and CSS styling. The [examples](/examples) demonstrate a few customization ideas. Also we provided different ways to integrate it in your site.

Finally, MicrolinkJS is powered by [Microlink API](https://docs.microlink.io).

## Integration

### React

#### Installation

```sh
$ npm install react-microlink
```

#### Usage

```jsx
import MicrolinkCard from 'react-microlink'

// Just provide an URL to create a card
<MicrolinkCard url='https://microlink.io' />

// Customizing the card
<MicrolinkCard url='https://microlink.io' contast />

// You can pass extra props
<MicrolinkCard url='https://microlink.io' target='_blank' />
```

### Vanilla/UMD

#### Installation

```sh
$ npm install microlinkjs
```

You could also include it via a CDN:

````html
// normal
<script type="text/javascript" src="https://unpkg.com/microlinkjs@latest/umd/microlink.js"></script>
// minify
<script type="text/javascript" src="https://unpkg.com/microlinkjs@latest/umd/microlink.min.js"></script>
````

#### Usage

```js
// Replace all links for Microlink cards
microlink('a')

// Provide options for customize the cards (See API section)
microlink('a', { rounded: true })

// Replace links after DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
  microlink('a', { rounded: true })
})
```

## API

Even we provided different ways to integrate MicrolinkJS with your site and your code, our API is isomorphic.

The same parameters are available for all of our official integrations.

### url

*Required*<br>
Type: `string`

The URL for getting information based on the content.

### endpoint

Type: `string`<br>
Default: `'https://api.microlink.io'`

The API endpoint for make the request

### contrast

Type: `boolean`
Default: `false`

When it is enabled, it will generate a high contrast card based on predominant colors detected in the feature image detected from the url.

### is

Type: `string`
Default: `'a'`

Determinate the type of the root node element for rendering the card.

### rounded

Type: `boolean|string`
Default: `false`

Determinate if the card preview has or not rounded borders.

If you provided a `string` value, it will be provided as `border-radius` value.

### size

Type: `string`
Default: `'normal'`

It determinates the card layout. Currently we have two layouts supported:

- `'normal'`
- `'large'`

## License

**microlink** © [Microlink](https://microlink.io), Released under the [MIT](https://github.com/Kikobeats/free-email-domains/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/free-email-domains/contributors).

> [microlink.io](https://microlink.io) · GitHub [@MicrolinkHQ](https://github.com/microlinkhq) · Twitter [@microlinkio](https://twitter.com/microlinkio)
