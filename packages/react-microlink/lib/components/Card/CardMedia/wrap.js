'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  flex: 1;\n\n  &::before {\n    padding-bottom: 0;\n  }\n'], ['\n  flex: 1;\n\n  &::before {\n    padding-bottom: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex: 0 0 92px;\n'], ['\n  flex: 0 0 92px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background: #e1e8ed no-repeat center center / cover;\n  display: block;\n  flex: 0 0 125px;\n  overflow: hidden;\n  height: auto;\n  position: relative;\n  transition: flex-basis 0.25s ease-in-out;\n\n  &::before {\n    content: \'\';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ', '\n\n  ', '\n'], ['\n  background: #e1e8ed no-repeat center center / cover;\n  display: block;\n  flex: 0 0 125px;\n  overflow: hidden;\n  height: auto;\n  position: relative;\n  transition: flex-basis 0.25s ease-in-out;\n\n  &::before {\n    content: \'\';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ', '\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../../utils');

var _loader = require('./loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var largeStyle = (0, _styledComponents.css)(_templateObject);

var mobileStyle = _utils.media.mobile(_templateObject2);

exports.default = _styledComponents2.default.div(_templateObject3, _loader.loadingOverlay, function (_ref) {
  var cardSize = _ref.cardSize;
  return (0, _utils.isLarge)(cardSize) ? largeStyle : mobileStyle;
});