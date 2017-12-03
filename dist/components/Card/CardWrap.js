var _templateObject = _taggedTemplateLiteral(['\n  height: 123px;\n  width: 558px;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  background-color: #fff;\n  color: #181919;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E1E8ED;\n  overflow: hidden;\n  display: flex;\n  text-decoration: none;\n  opacity:1;\n  transition: opacity .15s ease-in;\n\n  ', '\n\n  ', '\n\n\n  ', '\n\n  &:hover {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n\n  &:active {\n    opacity: .8;\n    transition: opacity .15s ease-out;\n  }\n'], ['\n  height: 123px;\n  width: 558px;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  background-color: #fff;\n  color: #181919;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #E1E8ED;\n  overflow: hidden;\n  display: flex;\n  text-decoration: none;\n  opacity:1;\n  transition: opacity .15s ease-in;\n\n  ', '\n\n  ', '\n\n\n  ', '\n\n  &:hover {\n    opacity: .5;\n    transition: opacity .15s ease-in;\n  }\n\n  &:active {\n    opacity: .8;\n    transition: opacity .15s ease-out;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border-radius: ', ';\n  '], ['\n    border-radius: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      background-color: ', ';\n      color: ', ';\n      border-color: ', ';\n    '], ['\n      background-color: ', ';\n      color: ', ';\n      border-color: ', ';\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';
import { CardWrapLarge } from './CardLarge';

export default styled.a(_templateObject, function (_ref) {
  var rounded = _ref.rounded;
  return rounded && css(_templateObject2, typeof rounded === 'boolean' ? '.42857em' : rounded);
}, function (_ref2) {
  var contrast = _ref2.contrast,
      color = _ref2.color,
      backgroundColor = _ref2.backgroundColor;

  return contrast && color && backgroundColor && css(_templateObject3, backgroundColor, color, color);
}, function (_ref3) {
  var cardSize = _ref3.cardSize;
  return cardSize === 'large' && CardWrapLarge;
});