'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardImageLarge = exports.CardContentLarge = exports.CardWrapLarge = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  flex-direction: column;\n  height: 382px;\n'], ['\n  flex-direction: column;\n  height: 382px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex: 0 0 125px;\n'], ['\n  flex: 0 0 125px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: 1;\n\n  &::before {\n    padding-bottom: 0;\n  }\n'], ['\n  flex: 1;\n\n  &::before {\n    padding-bottom: 0;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardWrapLarge = exports.CardWrapLarge = (0, _styledComponents.css)(_templateObject);

var CardContentLarge = exports.CardContentLarge = (0, _styledComponents.css)(_templateObject2);

var CardImageLarge = exports.CardImageLarge = (0, _styledComponents.css)(_templateObject3);