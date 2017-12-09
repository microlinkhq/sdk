var _templateObject = _taggedTemplateLiteral(['\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', '\n'], ['\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  margin: 0 0 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 95%;\n'], ['\n  font-size: 16px;\n  margin: 0 0 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 95%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  margin: 0;\n  line-height: 18px;\n  height: 54px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n'], ['\n  font-size: 14px;\n  margin: 0;\n  line-height: 18px;\n  height: 54px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 10px;\n  display: inline-block;\n'], ['\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 10px;\n  display: inline-block;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import extractDomain from 'extract-domain';

import { CardContentLarge } from './CardLarge';

export var Content = styled.div(_templateObject, function (_ref) {
  var cardSize = _ref.cardSize;
  return cardSize === 'large' && CardContentLarge;
});

var Title = styled.h2(_templateObject2);

var Description = styled.p(_templateObject3);

var Url = styled.span(_templateObject4);

export default (function (_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      url = _ref2.url,
      cardSize = _ref2.cardSize,
      className = _ref2.className;
  return React.createElement(
    Content,
    { className: className, cardSize: cardSize },
    React.createElement(
      Title,
      { className: 'microlink_card__content_title', title: title },
      title
    ),
    React.createElement(
      Description,
      { className: 'microlink_card__content_description' },
      description
    ),
    React.createElement(
      Url,
      { className: 'microlink_card__content_url' },
      extractDomain(url)
    )
  );
});