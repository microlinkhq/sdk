'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-image: ', ';\n'], ['\n  background-image: ', ';\n']);

var _wrap = require('./wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultProps = {
  className: 'microlink_card__media_image'
};

exports.default = _wrap2.default.extend.attrs(defaultProps)(_templateObject, function (_ref) {
  var image = _ref.image;
  return image ? 'url(\'' + image + '\')' : '';
});