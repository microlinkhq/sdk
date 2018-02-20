'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('./components/Card');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Microlink = function (_Component) {
  _inherits(Microlink, _Component);

  function Microlink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Microlink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Microlink.__proto__ || Object.getPrototypeOf(Microlink)).call.apply(_ref, [this].concat(args))), _this), _this.fetchData = function () {
      var url = (0, _utils.createApiUrl)(_this.props);
      var promise = fetch(url, { headers: { 'x-api-key': _this.props.apiKey } });
      return promise.then(function (res) {
        return res.json();
      });
    }, _this.setData = function (_ref2) {
      var data = _ref2.data;

      var imagesProps = [].concat(_this.props.image);
      var image = (0, _utils.someProp)(data, imagesProps);
      var imageUrl = (0, _utils.getUrlPath)(image);
      var title = data.title,
          description = data.description,
          url = data.url,
          video = data.video;

      var _ref3 = image || {},
          color = _ref3.color,
          backgroundColor = _ref3.background_color;

      _this.setState({
        color: color,
        backgroundColor: backgroundColor,
        title: title,
        description: description,
        url: url,
        loading: false,
        video: video,
        image: imageUrl
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Microlink, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.data) return this.setData({ data: this.props.data });
      var promise = this.fetchData();
      return this.setState({ loading: true }, function () {
        return promise.then(_this2.setData);
      });
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _state = this.state,
          title = _state.title,
          description = _state.description,
          url = _state.url,
          image = _state.image,
          video = _state.video;
      var _props = this.props,
          size = _props.size,
          autoPlay = _props.autoPlay,
          muted = _props.muted,
          loop = _props.loop;


      return _jsx(_react.Fragment, {}, void 0, _jsx(_Card.CardMedia, {
        image: image,
        video: video,
        url: url,
        cardSize: size,
        autoPlay: autoPlay,
        muted: muted,
        loop: loop
      }), _jsx(_Card.CardContent, {
        className: 'microlink_card__content',
        title: title,
        description: description,
        url: url,
        cardSize: size
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          title = _state2.title,
          color = _state2.color,
          backgroundColor = _state2.backgroundColor,
          url = _state2.url,
          loading = _state2.loading;
      var _props2 = this.props,
          size = _props2.size,
          className = _props2.className;


      return _react2.default.createElement(
        _Card.CardWrap,
        _extends({
          className: className ? 'microlink_card ' + className : 'microlink_card',
          href: url,
          title: title,
          cardSize: size,
          color: color,
          backgroundColor: backgroundColor,
          loading: loading
        }, this.props),
        !loading ? this.renderContent() : _jsx(_Card.CardEmptyState, {
          cardSize: size
        })
      );
    }
  }]);

  return Microlink;
}(_react.Component);

Microlink.defaultProps = {
  apiKey: undefined,
  contrast: false,
  image: ['screenshot', 'image', 'logo'],
  prerender: 'auto',
  screenshot: false,
  size: 'normal',
  autoPlay: true,
  muted: true,
  loop: true
};

exports.default = Microlink;