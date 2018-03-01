'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLarge = exports.createApiUrl = exports.media = exports.someProp = exports.getUrlPath = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: 48em) {\n      ', ';\n    }\n  '], ['\n    @media (max-width: 48em) {\n      ', ';\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    @media (min-width: 48em) {\n      ', ';\n    }\n  '], ['\n    @media (min-width: 48em) {\n      ', ';\n    }\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getUrlPath = exports.getUrlPath = function getUrlPath(data) {
  return data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data.url : data;
};

var someProp = exports.someProp = function someProp(data, props) {
  return data[props.find(function (prop) {
    return data[prop] !== null && data[prop] !== undefined;
  })];
};

var media = exports.media = {
  mobile: function mobile() {
    return (0, _styledComponents.css)(_templateObject, _styledComponents.css.apply(undefined, arguments));
  },
  desktop: function desktop() {
    return (0, _styledComponents.css)(_templateObject2, _styledComponents.css.apply(undefined, arguments));
  }
};

var createApiUrl = exports.createApiUrl = function createApiUrl(props) {
  var apiKey = props.apiKey,
      targetUrl = props.url,
      screenshot = props.screenshot,
      prerender = props.prerender,
      contrast = props.contrast;

  var alias = apiKey ? 'pro' : 'api';

  var url = 'https://' + alias + '.microlink.io/?url=' + targetUrl;
  if (contrast) url = url + '&palette';
  if (prerender !== 'auto') url = url + '&prerender=' + prerender;
  if (screenshot) url = url + '&screenshot=' + screenshot;

  return url;
};

var isLarge = exports.isLarge = function isLarge(cardSize) {
  return cardSize === 'large';
};