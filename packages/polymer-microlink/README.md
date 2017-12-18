# \<polymer-microlink\>

Polymer wrapper for https://microlink.io

## Usage

```HTML
<import href="/bower_components/microlink-card/microlink-card.html" rel="import">

...

<microlink-card url="https://microlink.io/"></microlink-card>
```
## Documentation

### Public properties

| Property         | Description                         | Notifies | Default |
| ---------------- | ----------------------------------- | -------- | ------- |
| `endpoint`       | The API endpoint where the request is made | false     | 'https://api.microlink.io' |
| `key`            | API-KEY from microlinks             | false    | (none)  |
| `image`        | Custom image        | true     | false   |
| `loading`        | Loading state of the AJAX request      | true     | false   |
| `round`        | Determine if the card preview should have rounded corners or not. If you provided a string value, it will be passed as the border-radius.      | false     | false   |
| `url`            | The URL for which to retrieve Microlink data    | false    | (none)  |
| `size`            |It determines the card layout. Currently we have two layouts supported: normal / large    | false    | 'normal'  |

### Styles

| Custom property                  | Description               | Default                                                                                            |
| -------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------- |
| `--microlink-card`      | Border radius of the card | 5px
| `--microlink-card-content`  | Mixins applied to the card content  | (none) |
| `--microlink-card-content-description`  | Mixins applied to the card content description  | (none) |
| `--microlink-card-content-url`  | Mixins applied to the card link url  | (none) |
| `--microlink-large-image-min-height`  | Min height of the image on large layout  | 250px |

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ npm i -g polymer
$ bower install
$ polymer serve
```

And navigate to http://127.0.0.1:8081/components/microlink-card/demo/
## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
