# MicrolinkJS

> Embed links from any website.

![Last version](https://img.shields.io/github/tag/microlinkhq/react-microlink.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/microlinkhq/react-microlink/master.svg?style=flat-square)](https://travis-ci.org/microlinkhq/react-microlink)
[![Dependency status](https://img.shields.io/david/microlinkhq/react-microlink.svg?style=flat-square)](https://david-dm.org/microlinkhq/react-microlink)
[![Dev Dependencies Status](https://img.shields.io/david/dev/microlinkhq/react-microlink.svg?style=flat-square)](https://david-dm.org/microlinkhq/react-microlink#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/react-microlink.svg?style=flat-square)](https://www.npmjs.org/package/react-microlink)

## Overview

MicrolinkJS lets you create beautiful link previews from any website.

It is a perfect complement to improve the engagement of your articles or blog publications, bringing your user to see what is behind any link.

It has some *out-of-the-box* default styles, but you can customize the display via options and CSS styling. The [examples](/examples) demonstrate a few customization ideas. We also provided multiple ways to integrate it in your site.

Finally, MicrolinkJS is powered by the [Microlink API](https://docs.microlink.io).

## Integration

### React

#### Installation

```sh
$ npm install react-microlink
```

#### Usage

```jsx
import MicrolinkCard from 'react-microlink'

// Just provide a URL to create a card
<MicrolinkCard url='https://github.com' />

// Customizing the card
<MicrolinkCard url='https://reactjs.org' contrast />

// You can pass extra props
<MicrolinkCard url='https://stackoverflow.com' target='_blank' />
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

// Provide options to customize the cards (See API section)
microlink('a', { rounded: true })

// Replace links after DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
  microlink('a', { rounded: true })
})
```

## API

We even provided different ways to integrate MicrolinkJS with your site and your code, our API is isomorphic.

The same parameters are available for all of our official integrations.

### url

*Required*<br>
Type: `string`

The URL for which to retrieve Microlink data.

### endpoint

Type: `string`<br>
Default: `'https://api.microlink.io'`

The API endpoint where the request is made

### contrast

Type: `boolean`
Default: `false`

When enabled, it will generate a high contrast card based on predominant colors detected in the feature image from the provided `url`.

### is

Type: `string`
Default: `'a'`

Determine the type of the root node element for rendering the card.

### rounded

Type: `boolean|string`
Default: `false`

Determine if the card preview should have rounded corners or not.

If you provided a `string` value, it will be passed as the `border-radius`.

### size

Type: `string`
Default: `''`

It determines the card layout. Currently we have two layouts supported:

- `'normal'` (default, no parameter required)
- `'large'`

## Community

- [microlink-card](https://github.com/jroji/microlink-card) – Polymer card wrapper for https://microlink.io/ service.

## License

**microlink** © [Microlink](https://microlink.io), Released under the [MIT](https://github.com/Kikobeats/free-email-domains/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/free-email-domains/contributors).

> [microlink.io](https://microlink.io) · GitHub [@MicrolinkHQ](https://github.com/microlinkhq) · Twitter [@microlinkio](https://twitter.com/microlinkio)
