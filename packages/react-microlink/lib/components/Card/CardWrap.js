var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  width: 558px;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  background-color: #fff;\n  color: #181919;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E1E8ED;\n  overflow: hidden;\n  display: flex;\n  text-decoration: none;\n  opacity:1;\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  width: 558px;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  background-color: #fff;\n  color: #181919;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E1E8ED;\n  overflow: hidden;\n  display: flex;\n  text-decoration: none;\n  opacity:1;\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    transition: background-color .15s ease-in-out, border-color .15s ease-in-out;\n    &:hover {\n      background: #F5F8FA;\n      border-color: rgba(136,153,166,.5);\n    }\n  '], ['\n    transition: background-color .15s ease-in-out, border-color .15s ease-in-out;\n    &:hover {\n      background: #F5F8FA;\n      border-color: rgba(136,153,166,.5);\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    border-radius: ', ';\n  '], ['\n    border-radius: ', ';\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    background-color: ', ';\n    color: ', ';\n    border-color: ', ';\n    transition: filter .15s ease-in-out;\n\n    &:hover {\n      filter: brightness(90%);\n    }\n  '], ['\n    background-color: ', ';\n    color: ', ';\n    border-color: ', ';\n    transition: filter .15s ease-in-out;\n\n    &:hover {\n      filter: brightness(90%);\n    }\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['', ''], ['', '']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { createElement } from 'react';
import styled, { css } from 'styled-components';

import { CardWrapLarge } from './CardLarge';

var style = css(_templateObject, function (_ref) {
  var loading = _ref.loading,
      contrast = _ref.contrast;
  return !loading && !contrast && css(_templateObject2);
}, function (_ref2) {
  var round = _ref2.round;
  return round && css(_templateObject3, typeof round === 'boolean' ? '.42857em' : round);
}, function (_ref3) {
  var cardSize = _ref3.cardSize;
  return cardSize === 'large' && CardWrapLarge;
}, function (_ref4) {
  var backgroundColor = _ref4.backgroundColor,
      color = _ref4.color,
      contrast = _ref4.contrast;
  return contrast && color && backgroundColor && css(_templateObject4, backgroundColor, color, color);
});

var CardWrap = function CardWrap(_ref5) {
  var is = _ref5.is,
      rel = _ref5.rel,
      href = _ref5.href,
      target = _ref5.target,
      props = _objectWithoutProperties(_ref5, ['is', 'rel', 'href', 'target']);

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