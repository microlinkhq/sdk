'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  flex: 0 0 125px;\n  background: #e1e8ed no-repeat center center / cover;\n\n  &::before {\n    content: \'\';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: block;\n  flex: 0 0 125px;\n  background: #e1e8ed no-repeat center center / cover;\n\n  &::before {\n    content: \'\';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex: 0 0 92px;\n  '], ['\n    flex: 0 0 92px;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CardLarge = require('./CardLarge');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, function (_ref) {
  var image = _ref.image;
  return image && 'background-image: url(' + image + ');';
}, function (_ref2) {
  var cardSize = _ref2.cardSize;
  return cardSize === 'large' && _CardLarge.CardImageLarge;
}, function (_ref3) {
  var cardSize = _ref3.cardSize;
  return cardSize !== 'large' && _utils.media.mobile(_templateObject2);
});