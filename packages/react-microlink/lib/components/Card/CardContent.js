'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  flex: 0 0 125px;\n'], ['\n  flex: 0 0 125px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', ';\n'], ['\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  flex: 1;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  flex-grow: 1.2;\n'], ['\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  flex-grow: 1.2;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  flex-grow: 2;\n  margin: auto 0;\n  line-height: 18px;\n\n  ', ';\n'], ['\n  font-size: 14px;\n  flex-grow: 2;\n  margin: auto 0;\n  line-height: 18px;\n\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    > div {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  '], ['\n    > div {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  margin: 0;\n  flex-grow: 0;\n'], ['\n  font-size: 12px;\n  margin: 0;\n  flex-grow: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _extractDomain = require('extract-domain');

var _extractDomain2 = _interopRequireDefault(_extractDomain);

var _nanoclamp = require('nanoclamp');

var _nanoclamp2 = _interopRequireDefault(_nanoclamp);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isLarge = function isLarge(cardSize) {
  return cardSize === 'large';
};

var largeStyle = (0, _styledComponents.css)(_templateObject);

var StyledClamp = function StyledClamp(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(_nanoclamp2.default, props);
};

var Content = exports.Content = _styledComponents2.default.div(_templateObject2, function (_ref2) {
  var cardSize = _ref2.cardSize;
  return isLarge(cardSize) && largeStyle;
});

var Title = (0, _styledComponents2.default)(StyledClamp)(_templateObject3);

var Description = (0, _styledComponents2.default)(StyledClamp)(_templateObject4, function (_ref3) {
  var cardSize = _ref3.cardSize;
  return !isLarge(cardSize) && _utils.media.mobile(_templateObject5);
});

var Url = (0, _styledComponents2.default)(StyledClamp)(_templateObject6);

exports.default = function (_ref4) {
  var title = _ref4.title,
      description = _ref4.description,
      url = _ref4.url,
      cardSize = _ref4.cardSize,
      className = _ref4.className;
  return _jsx(Content, {
    className: className,
    cardSize: cardSize
  }, void 0, _jsx(Title, {
    className: 'microlink_card__content_title',
    lines: 1,
    text: title
  }), _jsx(Description, {
    lines: 2,
    className: 'microlink_card__content_description',
    text: description,
    cardSize: cardSize
  }), _jsx(Url, {
    lines: 1,
    className: 'microlink_card__content_url',
    text: (0, _extractDomain2.default)(url)
  }));
};