# microlinkjs

> Convert your links into beautiful previews.

###### [Storybook](https://microlink-storybook.netlify.com)

## Overview

**microlinkjs** lets you create beautiful link previews from any website.

It is a perfect complement to improve the engagement of your articles or blog publications, bringing your user to see what is behind any link.

It has some *out-of-the-box* default styles, but you can customize the display via options and CSS styling. The [examples](/examples) demonstrate a few customization ideas. We also provided multiple ways to integrate it in your site.

Finally, **microlinkjs** is powered by [Microlink API](https://docs.microlink.io).

## Integration

?> Can't find your connector? Let's [open an issue](https://github.com/microlinkhq/microlinkjs/issues) to create it.

In order to make integrating **microlinkjs** your website as simple as possible, we provide you a set of official connectors implemented using different web technologies.

Just use the right connector for your stack. All the connectors follow the same API and default style.

All of the connectors use [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) to make asynchronous HTTP calls.

Each connector is developed to be as tiny possible, so we don't ship any polyfills with the library.

If you want to support older browsers versions, you need to attach your own polyfill first. If you're looking for a tiny `fetch` polyfill, we suggest using [unfetch](https://github.com/developit/unfetch).

### Vanilla

#### Installation

##### From NPM

```sh
$ npm install microlinkjs
```

##### From CDN

###### UMD

```html
// from unpkg.com
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest/umd/microlink.min.js"></script>

// from jsdelivr.com
<script src="https://cdn.jsdelivr.net/npm/microlinkjs@1/umd/microlink.min.js"></script>
```

###### AMD

```html
// from unpkg.com
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest/amd/microlink.min.js"></script>

// from jsdelivr.com
<script src="https://cdn.jsdelivr.net/npm/microlinkjs@1/amd/microlink.min.js"></script>
```

###### CommonJS

```html
// from unpkg.com
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest/commonjs/microlink.min.js"></script>

// from jsdelivr.com
<script src="https://cdn.jsdelivr.net/npm/microlinkjs@1/commonjs/microlink.min.js"></script>
```

#### Usage

```html
<script>
  // Replace all `a` for microlink cards
  microlink('a')

  // Provide options to customize the cards (See API section)
  microlink('a', { round: true })

  // Replace links after DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function (event) {
    microlink('a', { round: true })
  })
</script>
```

Also, you can declare inline options in the HTML markup as `data` attributes:

```html
<a class="link" data-round="true" href="http://microlink.js.org">microlink.js.org</a>
```

See [API](#API) for know what option you can pass.

### Jekyll

#### Installation

The Jekyll integration is pretty similar to [Vanilla/UMD](#vanillaumd) approach.

Just you need to be sure to load the script. You can do it, for example, at the end of `_layouts/default.html`:

```html
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest"></script>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    microlink('.card-preview', {round: true})
    anchors.add();
  });
</script>
```

#### Usage

In the code above, we are associating microlink cards with the class `card-preview`, so now, when we write a new markdown post, we are going to use the `card-preview` class to associate the link:

```md
[](https://blog.codinghorror.com/computers-are-lousy-random-number-generators){:.card-preview}
```

You can pass custom option as well:

```md
[](https://www.random.org/randomness){:.card-preview data-image="logo"}
```

See [API](#API) for know what option you can pass.

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

## API

We even provided different ways to integrate microlink with your site and your code, our API is isomorphic.

The same parameters are available for all of our official integrations.

### url

*Required*<br>
Type: `string`

The URL for which to retrieve Microlink data.

### apiEndpoint

Type: `string`<br>
Default: `'https://api.microlink.io'`

The API endpoint where the request is made.

### apiKey

Type: `string`<br>
Default: `undefined`

The API Key used for authenticating your requests as `x-api-key` header. 

See more at [docs.microlink.io#authentication](https://docs.microlink.io/#authentication).

The API endpoint where the request is made.

### contrast

Type: `boolean`<br>
Default: `false`

When enabled, it will generate a high contrast card based on predominant colors detected in the feature image from the provided `url`.

### image

Type: `string|array`<br>
Default: `'image'`

Setup the image to use for the card.

The value will be determined the property to get from the [API response](https://docs.microlink.io). If you set up the value as an `array` of values, then they will be applied as fallback values until finding the first value that resolves.

### is

Type: `string`<br>
Default: `'a'`

Determine the type of the root node element for rendering the card.

### round

Type: `boolean|string`<br>
Default: `false`

Determine if the card preview should have round corners or not.

If you provided a `string` value, it will be passed as the `border-radius`.

### size

Type: `string`<br>
Default: `''`

It determines the card layout. Currently we have two layouts supported:

- `'normal'` (default, no parameter required).
- `'large'`

### prerender

Type: `boolean`<br>
Default: `false`

Perform an API call using [prerender](https://docs.microlink.io/#prerender) feature.

### screenshot

Type: `boolean|string`<br>
Default: `false`

Take a [screenshot](https://docs.microlink.io/#screenshot) of the target url and use it as card image.

## Styling

We do not inject any CSS in your application.

**microlinkjs** is shipped with default minimal inline styles.

If you need to adapt the *look and feel*, each component of the card has been assigned a [BEM](http://getbem.com/introduction) class name.

The available class names are:

- `microlink_card`
- `microlink_card__image`
- `microlink_card__content`
- `microlink_card__content_title`
- `microlink_card__content_description`
- `microlink_card__content_url`

## License

**microlink** © [Microlink](https://microlink.io), Released under the [MIT](https://github.com/microlinkhq/microlinkjs/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/microlinkhq/microlinkjs/contributors).

> [microlink.io](https://microlink.io) · GitHub [@MicrolinkHQ](https://github.com/microlinkhq) · Twitter [@microlinkio](https://twitter.com/microlinkio)
