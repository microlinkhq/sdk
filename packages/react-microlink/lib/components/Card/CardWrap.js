'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  border-color: ', ';\n  transition-property: filter;\n\n  &&& {\n    color: ', ';\n  }\n\n  &:hover {\n    filter: brightness(90%);\n  }\n'], ['\n  background-color: ', ';\n  border-color: ', ';\n  transition-property: filter;\n\n  &&& {\n    color: ', ';\n  }\n\n  &:hover {\n    filter: brightness(90%);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex-direction: column;\n  height: ', ';\n  transition-property: background, border-color, height;\n\n  ', '\n'], ['\n  flex-direction: column;\n  height: ', ';\n  transition-property: background, border-color, height;\n\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: calc(', ' * 7/9);\n  '], ['\n    height: calc(', ' * 7/9);\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  transition-property: background, border-color;\n  &:hover {\n    background: #F5F8FA;\n    border-color: rgba(136,153,166,.5);\n  }\n'], ['\n  transition-property: background, border-color;\n  &:hover {\n    background: #F5F8FA;\n    border-color: rgba(136,153,166,.5);\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  flex-direction: ', '\n'], ['\n  flex-direction: ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  border-radius: ', ';\n'], ['\n  border-radius: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  max-width: 500px;\n  background-color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E1E8ED;\n  overflow: hidden;\n  color: #181919;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  display: flex;\n  text-decoration: none;\n  opacity:1;\n  position: relative;\n\n  transition-duration: .15s;\n  transition-timing-function: ease-in-out;\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  max-width: 500px;\n  background-color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E1E8ED;\n  overflow: hidden;\n  color: #181919;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  display: flex;\n  text-decoration: none;\n  opacity:1;\n  position: relative;\n\n  transition-duration: .15s;\n  transition-timing-function: ease-in-out;\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject8 = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HEIGHT = '382px';

var contrastStyle = function contrastStyle(_ref) {
  var backgroundColor = _ref.backgroundColor,
      color = _ref.color;
  return (0, _styledComponents.css)(_templateObject, backgroundColor, color, color);
};

var largeStyle = (0, _styledComponents.css)(_templateObject2, HEIGHT, _utils.media.mobile(_templateObject3, HEIGHT));

var hoverStyle = (0, _styledComponents.css)(_templateObject4);

var reverseStyle = function reverseStyle(_ref2) {
  var cardSize = _ref2.cardSize;
  return (0, _styledComponents.css)(_templateObject5, (0, _utils.isLarge)(cardSize) ? 'column-reverse' : 'row-reverse');
};

var roundStyle = function roundStyle(_ref3) {
  var round = _ref3.round;
  return (0, _styledComponents.css)(_templateObject6, round === true ? '.42857em' : round);
};

var style = (0, _styledComponents.css)(_templateObject7, function (_ref4) {
  var loading = _ref4.loading,
      contrast = _ref4.contrast;
  return !loading && !contrast && hoverStyle;
}, function (_ref5) {
  var round = _ref5.round;
  return round && roundStyle;
}, function (_ref6) {
  var cardSize = _ref6.cardSize;
  return (0, _utils.isLarge)(cardSize) && largeStyle;
}, function (_ref7) {
  var reverse = _ref7.reverse;
  return reverse && reverseStyle;
}, function (_ref8) {
  var backgroundColor = _ref8.backgroundColor,
      color = _ref8.color,
      contrast = _ref8.contrast;
  return contrast && color && backgroundColor && contrastStyle;
}, function (_ref9) {
  var backgroundColor = _ref9.backgroundColor,
      color = _ref9.color,
      contrast = _ref9.contrast;
  return contrast && (!color || !backgroundColor) && hoverStyle;
});

var CardWrap = function CardWrap(_ref10) {
  var is = _ref10.is,
      rel = _ref10.rel,
      href = _ref10.href,
      target = _ref10.target,
      props = _objectWithoutProperties(_ref10, ['is', 'rel', 'href', 'target']);

  var el = _styledComponents2.default[is](_templateObject8, style);
  var opts = is === 'a' ? _extends({}, props, { href: href, rel: rel, target: target }) : props;
  return (0, _react.createElement)(el, opts);
};

CardWrap.defaultProps = {
  is: 'a',
  rel: 'noopener noreferrer',
  target: '_blank'
};

exports.default = CardWrap;