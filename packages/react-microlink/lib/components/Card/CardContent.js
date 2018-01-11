'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', '\n'], ['\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  margin: 0 0 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 95%;\n'], ['\n  font-size: 16px;\n  margin: 0 0 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 95%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  margin: 0;\n  line-height: 18px;\n  height: 54px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n'], ['\n  font-size: 14px;\n  margin: 0;\n  line-height: 18px;\n  height: 54px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 10px;\n  display: inline-block;\n'], ['\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 10px;\n  display: inline-block;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _extractDomain = require('extract-domain');

var _extractDomain2 = _interopRequireDefault(_extractDomain);

var _CardLarge = require('./CardLarge');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = exports.Content = _styledComponents2.default.div(_templateObject, function (_ref) {
  var cardSize = _ref.cardSize;
  return cardSize === 'large' && _CardLarge.CardContentLarge;
});

var Title = _styledComponents2.default.h2(_templateObject2);

var Description = _styledComponents2.default.p(_templateObject3);

var Url = _styledComponents2.default.span(_templateObject4);

exports.default = function (_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      url = _ref2.url,
      cardSize = _ref2.cardSize,
      className = _ref2.className;
  return _jsx(Content, {
    className: className,
    cardSize: cardSize
  }, void 0, _jsx(Title, {
    className: 'microlink_card__content_title',
    title: title
  }, void 0, title), _jsx(Description, {
    className: 'microlink_card__content_description'
  }, void 0, description), _jsx(Url, {
    className: 'microlink_card__content_url'
  }, void 0, (0, _extractDomain2.default)(url)));
};