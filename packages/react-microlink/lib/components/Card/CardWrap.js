var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  width: 558px;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  background-color: #fff;\n  color: #181919;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E1E8ED;\n  overflow: hidden;\n  display: flex;\n  text-decoration: none;\n  opacity:1;\n  transition: opacity .15s ease-in;\n\n  ', '\n\n  ', '\n'], ['\n  width: 558px;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  background-color: #fff;\n  color: #181919;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E1E8ED;\n  overflow: hidden;\n  display: flex;\n  text-decoration: none;\n  opacity:1;\n  transition: opacity .15s ease-in;\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    &:hover {\n      opacity: .5;\n      transition: opacity .15s ease-in;\n    }\n\n    &:active {\n      opacity: .8;\n      transition: opacity .15s ease-out;\n    }\n  '], ['\n    &:hover {\n      opacity: .5;\n      transition: opacity .15s ease-in;\n    }\n\n    &:active {\n      opacity: .8;\n      transition: opacity .15s ease-out;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      border-radius: ', ';\n    '], ['\n      border-radius: ', ';\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      background-color: ', ';\n      color: ', ';\n      border-color: ', ';\n    '], ['\n      background-color: ', ';\n      color: ', ';\n      border-color: ', ';\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['', ''], ['', '']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { createElement } from 'react';
import styled, { css } from 'styled-components';

import { CardWrapLarge } from './CardLarge';

var style = css(_templateObject, function (_ref) {
  var loading = _ref.loading;
  return !loading && css(_templateObject2);
}, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor,
      color = _ref2.color,
      contrast = _ref2.contrast,
      cardSize = _ref2.cardSize,
      rounded = _ref2.rounded;
  return [rounded && css(_templateObject3, typeof rounded === 'boolean' ? '.42857em' : rounded), cardSize === 'large' && CardWrapLarge, contrast && color && backgroundColor && css(_templateObject4, backgroundColor, color, color)];
});

var CardWrap = function CardWrap(_ref3) {
  var is = _ref3.is,
      rel = _ref3.rel,
      href = _ref3.href,
      target = _ref3.target,
      props = _objectWithoutProperties(_ref3, ['is', 'rel', 'href', 'target']);

  var el = styled[is](_templateObject5, style);
  var opts = is === 'a' ? _extends({}, props, { href: href, rel: rel, target: target }) : props;
  return createElement(el, opts);
};

CardWrap.defaultProps = {
  is: 'a',
  rel: 'noopener noreferrer',
  target: '_blank'
};

export default CardWrap;