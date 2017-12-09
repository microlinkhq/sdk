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

var CardEmptyState = function CardEmptyState(_ref) {
  var cardSize = _ref.cardSize;
  return React.createElement(
    Fragment,
    null,
    React.createElement(EmptyImage, { cardSize: cardSize }),
    React.createElement(
      Content,
      { cardSize: cardSize },
      React.createElement(EmptyTitle, null),
      React.createElement(EmptyDescription, null),
      React.createElement(EmptyLink, null)
    )
  );
};

export default CardEmptyState;