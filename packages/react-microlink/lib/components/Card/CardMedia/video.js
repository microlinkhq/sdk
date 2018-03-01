'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  &::after {\n    z-index: 101;\n  }\n'], ['\n  &::after {\n    z-index: 101;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n\n  ', '\n'], ['\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../../utils');

var _wrap = require('./wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VideoWrapper = _wrap2.default.extend(_templateObject);

var Video = _styledComponents2.default.video(_templateObject2, function (_ref) {
  var autoPlay = _ref.autoPlay;
  return autoPlay && '\n    &::media-controls-start-playback-button {\n      display: none;\n      appearance: none;\n    }\n  ';
});

var CardVideo = function CardVideo(_ref2) {
  var cardSize = _ref2.cardSize,
      video = _ref2.video,
      image = _ref2.image,
      muted = _ref2.muted,
      autoPlay = _ref2.autoPlay,
      loading = _ref2.loading,
      loop = _ref2.loop;

  return _jsx(VideoWrapper, {
    className: 'microlink_card__media_video_wrapper',
    cardSize: cardSize,
    loading: loading
  }, void 0, _jsx(Video, {
    className: 'microlink_card__media_video',
    src: (0, _utils.getUrlPath)(video),
    poster: image,
    muted: muted,
    autoPlay: autoPlay,
    loop: loop,
    playsinline: true
  }));
};

CardVideo.defaultProps = {
  controls: true,
  muted: true,
  loop: true,
  autoPlay: true
};
exports.default = CardVideo;