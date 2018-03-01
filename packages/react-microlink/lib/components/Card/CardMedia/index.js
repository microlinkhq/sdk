'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _utils = require('../../../utils');

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _video = require('./video');

var _video2 = _interopRequireDefault(_video);

var _loader = require('./loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isUrl = function isUrl(url) {
  return (0, _utils.getUrlPath)(url) !== null;
};

var CardMedia = function (_Component) {
  _inherits(CardMedia, _Component);

  function CardMedia(props) {
    _classCallCheck(this, CardMedia);

    var _this = _possibleConstructorReturn(this, (CardMedia.__proto__ || Object.getPrototypeOf(CardMedia)).call(this, props));

    _this.state = {
      loading: isUrl(props.image)
    };
    return _this;
  }

  _createClass(CardMedia, [{
    key: 'renderMedia',
    value: function renderMedia() {
      var loading = this.state.loading;
      var _props = this.props,
          image = _props.image,
          video = _props.video;

      var el = !isUrl(video) && isUrl(image) ? _image2.default : _video2.default;
      return (0, _react.createElement)(el, _extends({}, this.props, {
        key: 'media',
        loading: loading
      }));
    }
  }, {
    key: 'renderLoadCatcher',
    value: function renderLoadCatcher() {
      var _this2 = this;

      var image = this.props.image;
      var loading = this.state.loading;

      return loading && isUrl(image) && (0, _react.createElement)(_loader.ImageLoadCatcher, {
        key: 'imageLoader',
        src: image,
        onLoad: function onLoad() {
          return _this2.setState({ loading: false });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return [this.renderMedia(), this.renderLoadCatcher()];
    }
  }]);

  return CardMedia;
}(_react.Component);

exports.default = CardMedia;