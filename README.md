# microlinkjs

> Convert your links into beautiful previews.

###### [Storybook](https://microlink-storybook.netlify.com)

## Overview

microlink lets you create beautiful links previews from any website.

It is a perfect complement to improve the engagement of your articles or blog publications, bringing your user to see what is behind any link.

It has some *out-of-the-box* default styles, but you can customize the display via options and CSS styling. The [examples](/examples) demonstrate a few customization ideas. We also provided multiple ways to integrate it in your site.

Finally, microlink is powered by [Microlink API](https://docs.microlink.io).

## Integration

?> Did not find your connector? let's [open an issue](https://github.com/microlinkhq/microlinkjs/issues) for create it.

In order to make easy integrate microlink with the less friction with your website, we provide you a set of official connectors implemented using different web technologies.

Just use the right connector for your stack. All the connectors follow the same API and default style.

All of the connectors use [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) to make asynchronous HTTP calls.

The connector should be tiny as possible, so we don't ship polyfill with the library.

If you want to support old browsers versions, you need to attach your polyfill first. If you want a tiny fetch polyfill, we recommend you use [unfetch](https://github.com/developit/unfetch).

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
$ npm install microlink
```

You could also include it via a CDN:

**Normal version**

```html
<script type="text/javascript" src="//unpkg.com/microlink@latest/umd/microlink.js"></script>
```

**Minify version**

```html
<script type="text/javascript" src="//unpkg.com/microlink@latest/umd/microlink.min.js"></script>
```

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

We even provided different ways to integrate microlink with your site and your code, our API is isomorphic.

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

- `'normal'` (default, no parameter required).
- `'large'`

## License

**microlink** © [Microlink](https://microlink.io), Released under the [MIT](https://github.com/Kikobeats/free-email-domains/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/free-email-domains/contributors).

> [microlink.io](https://microlink.io) · GitHub [@MicrolinkHQ](https://github.com/microlinkhq) · Twitter [@microlinkio](https://twitter.com/microlinkio)
