'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', ';\n'], ['\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 95%;\n  flex-grow: 1.2;\n\n  ', ';\n'], ['\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 95%;\n  flex-grow: 1.2;\n\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    white-space: nowrap;\n  '], ['\n    white-space: nowrap;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  text-overflow: ellipsis;\n  font-size: 14px;\n  flex-grow: 2;\n  margin: auto 0;\n  line-height: 18px;\n  overflow: hidden;\n\n  ', ';\n'], ['\n  text-overflow: ellipsis;\n  font-size: 14px;\n  flex-grow: 2;\n  margin: auto 0;\n  line-height: 18px;\n  overflow: hidden;\n\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  margin: 0px;\n  display: inline-block;\n  flex-grow: 0;\n'], ['\n  font-size: 12px;\n  margin: 0px;\n  display: inline-block;\n  flex-grow: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _extractDomain = require('extract-domain');

var _extractDomain2 = _interopRequireDefault(_extractDomain);

var _reactClampLines = require('react-clamp-lines');

var _reactClampLines2 = _interopRequireDefault(_reactClampLines);

var _CardLarge = require('./CardLarge');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = exports.Content = _styledComponents2.default.div(_templateObject, function (_ref) {
  var cardSize = _ref.cardSize;
  return cardSize === 'large' && _CardLarge.CardContentLarge;
});

var Title = _styledComponents2.default.p(_templateObject2, _utils.media.mobile(_templateObject3));

var Description = (0, _styledComponents2.default)(_reactClampLines2.default)(_templateObject4, function (_ref2) {
  var cardSize = _ref2.cardSize;
  return cardSize !== 'large' && _utils.media.mobile(_templateObject3);
});

var Url = _styledComponents2.default.span(_templateObject5);

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
    className: 'microlink_card__content_title',
    title: title
  }, void 0, title), _jsx(Description, {
    lines: 3,
    tag: 'p',
    className: 'microlink_card__content_description',
    text: description,
    cardSize: cardSize,
    buttons: false
  }), _jsx(Url, {
    className: 'microlink_card__content_url'
  }, void 0, (0, _extractDomain2.default)(url)));
};