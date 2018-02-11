'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 16px;\n  width: 60%;\n  display: block;\n  background: #e1e8ed;\n  margin: 2px 0 8px;\n  opacity: 0.8;\n  ', '\n'], ['\n  height: 16px;\n  width: 60%;\n  display: block;\n  background: #e1e8ed;\n  margin: 2px 0 8px;\n  opacity: 0.8;\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 95%;\n  display: block;\n  background: #e1e8ed;\n  margin-bottom: 12px;\n  opacity: 0.8;\n  position: relative;\n  ', '\n  animation-delay: .125s;\n\n  height: 33px;\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    left: -1px;\n    right: -1px;\n    height: 6px;\n    background: #fff;\n  }\n\n  &:before {\n    top: 14px;\n  }\n\n  &:after {\n    bottom: 14px;\n  }\n\n  ', '\n'], ['\n  width: 95%;\n  display: block;\n  background: #e1e8ed;\n  margin-bottom: 12px;\n  opacity: 0.8;\n  position: relative;\n  ', '\n  animation-delay: .125s;\n\n  height: 33px;\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    left: -1px;\n    right: -1px;\n    height: 6px;\n    background: #fff;\n  }\n\n  &:before {\n    top: 14px;\n  }\n\n  &:after {\n    bottom: 14px;\n  }\n\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    height: 14px;\n  '], ['\n    height: 14px;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  height: 10px;\n  width: 30%;\n  display: block;\n  background: #e1e8ed;\n  opacity: 0.8;\n  ', '\n  animation-delay: .25s;\n'], ['\n  height: 10px;\n  width: 30%;\n  display: block;\n  background: #e1e8ed;\n  opacity: 0.8;\n  ', '\n  animation-delay: .25s;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CardAnimations = require('./CardAnimations');

var _image = require('./CardMedia/image');

var _image2 = _interopRequireDefault(_image);

var _CardContent = require('./CardContent');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EmptyImage = _image2.default.extend(_templateObject, _CardAnimations.emptyStateImageAnimation);

var EmptyTitle = _styledComponents2.default.span(_templateObject2, _CardAnimations.emptyStateAnimation);

var EmptyDescription = _styledComponents2.default.span(_templateObject3, _CardAnimations.emptyStateAnimation, function (_ref) {
  var cardSize = _ref.cardSize;
  return cardSize !== 'large' && _utils.media.mobile(_templateObject4);
});

var EmptyLink = _styledComponents2.default.span(_templateObject5, _CardAnimations.emptyStateAnimation);

var CardEmptyState = function CardEmptyState(_ref2) {
  var cardSize = _ref2.cardSize;
  return _jsx(_react.Fragment, {}, void 0, _jsx(EmptyImage, {
    cardSize: cardSize
  }), _jsx(_CardContent.Content, {
    cardSize: cardSize
  }, void 0, _jsx(EmptyTitle, {}), _jsx(EmptyDescription, {
    cardSize: cardSize
  }), _jsx(EmptyLink, {})));
};

exports.default = CardEmptyState;