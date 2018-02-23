'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  flex: 0 0 125px;\n'], ['\n  flex: 0 0 125px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    > p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  '], ['\n    > p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', ';\n'], ['\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  flex-grow: 1.2;\n'], ['\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  flex-grow: 1.2;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  flex-grow: 2;\n  margin: auto 0;\n  line-height: 18px;\n  ', ';\n'], ['\n  font-size: 14px;\n  flex-grow: 2;\n  margin: auto 0;\n  line-height: 18px;\n  ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  margin: 0;\n  flex-grow: 0;\n'], ['\n  font-size: 12px;\n  margin: 0;\n  flex-grow: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _extractDomain = require('extract-domain');

var _extractDomain2 = _interopRequireDefault(_extractDomain);

var _CardText = require('./CardText');

var _CardText2 = _interopRequireDefault(_CardText);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isLarge = function isLarge(cardSize) {
  return cardSize === 'large';
};

var largeContentStyle = (0, _styledComponents.css)(_templateObject);

var mobileDescriptionStyle = (0, _styledComponents.css)(_templateObject2, _utils.media.mobile(_templateObject3));

var Content = exports.Content = _styledComponents2.default.div(_templateObject4, function (_ref) {
  var cardSize = _ref.cardSize;
  return isLarge(cardSize) && largeContentStyle;
});

var Title = _styledComponents2.default.header(_templateObject5);

var Description = _styledComponents2.default.div(_templateObject6, function (_ref2) {
  var cardSize = _ref2.cardSize;
  return !isLarge(cardSize) && mobileDescriptionStyle;
});

var Url = _styledComponents2.default.footer(_templateObject7);

exports.default = function (_ref3) {
  var title = _ref3.title,
      description = _ref3.description,
      url = _ref3.url,
      cardSize = _ref3.cardSize,
      className = _ref3.className;
  return _jsx(Content, {
    className: className,
    cardSize: cardSize
  }, void 0, _jsx(Title, {
    className: 'microlink_card__content_title'
  }, void 0, _jsx(_CardText2.default, {
    lines: 1
  }, void 0, title)), _jsx(Description, {
    className: 'microlink_card__content_description',
    cardSize: cardSize
  }, void 0, _jsx(_CardText2.default, {
    lines: 2
  }, void 0, description)), _jsx(Url, {
    className: 'microlink_card__content_url'
  }, void 0, _jsx(_CardText2.default, {
    lines: 1
  }, void 0, (0, _extractDomain2.default)(url))));
};