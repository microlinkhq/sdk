'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _utils = require('../../../utils');

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _video = require('./video');

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isVideo = function isVideo(_ref) {
  var video = _ref.video;
  return (0, _utils.getUrlPath)(video) !== null;
};

exports.default = function (props) {
  if (!isVideo(props)) {
    return (0, _react.createElement)(_image2.default, _extends({
      className: 'microlink_card__media_image'
    }, props));
  }

  return (0, _react.createElement)(_video2.default, props);
};