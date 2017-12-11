var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 16px;\n  width: 80%;\n  display: block;\n  background: #e1e8ed;\n  margin: 2px 0 8px;\n  opacity: 0.8;\n  ', '\n'], ['\n  height: 16px;\n  width: 80%;\n  display: block;\n  background: #e1e8ed;\n  margin: 2px 0 8px;\n  opacity: 0.8;\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 54px;\n  width: 100%;\n  display: block;\n  background: #e1e8ed;\n  margin-bottom: 12px;\n  opacity: 0.8;\n  position: relative;\n  ', '\n  animation-delay: .125s;\n\n  &:before, &:after {\n    content: \'\';\n    position: absolute;\n    left: -1px;\n    right: -1px;\n    height: 6px;\n    background: #fff;\n  }\n\n  &:before {\n    top: 14px;\n  }\n\n  &:after {\n    bottom: 14px;\n  }\n'], ['\n  height: 54px;\n  width: 100%;\n  display: block;\n  background: #e1e8ed;\n  margin-bottom: 12px;\n  opacity: 0.8;\n  position: relative;\n  ', '\n  animation-delay: .125s;\n\n  &:before, &:after {\n    content: \'\';\n    position: absolute;\n    left: -1px;\n    right: -1px;\n    height: 6px;\n    background: #fff;\n  }\n\n  &:before {\n    top: 14px;\n  }\n\n  &:after {\n    bottom: 14px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 10px;\n  width: 60%;\n  display: block;\n  background: #e1e8ed;\n  opacity: 0.8;\n  ', '\n  animation-delay: .25s;\n'], ['\n  height: 10px;\n  width: 60%;\n  display: block;\n  background: #e1e8ed;\n  opacity: 0.8;\n  ', '\n  animation-delay: .25s;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Fragment } from 'react';
import styled from 'styled-components';

import CardImage from './CardImage';
import { Content } from './CardContent';
import { emptyStateAnimation, emptyStateImageAnimation } from './CardAnimations';

var EmptyImage = CardImage.extend(_templateObject, emptyStateImageAnimation);

var EmptyTitle = styled.span(_templateObject2, emptyStateAnimation);

var EmptyDescription = styled.span(_templateObject3, emptyStateAnimation);

var EmptyLink = styled.span(_templateObject4, emptyStateAnimation);

var _ref2 = _jsx(EmptyTitle, {});

var _ref3 = _jsx(EmptyDescription, {});

var _ref4 = _jsx(EmptyLink, {});

var CardEmptyState = function CardEmptyState(_ref) {
  var cardSize = _ref.cardSize;
  return _jsx(Fragment, {}, void 0, _jsx(EmptyImage, {
    cardSize: cardSize
  }), _jsx(Content, {
    cardSize: cardSize
  }, void 0, _ref2, _ref3, _ref4));
};

export default CardEmptyState;