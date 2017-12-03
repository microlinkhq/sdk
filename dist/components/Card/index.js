var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';


import CardWrap from './CardWrap';
import CardImage from './CardImage';
import CardContent from './CardContent';

import { getUrlPath } from '../utils';

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loaded: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          targetUrl = _props.url,
          contrast = _props.contrast,
          api = _props.endpoint;


      var url = api + '/?url=' + targetUrl;
      if (contrast) url = url + '&palette';

      fetch(url).then(function (res) {
        return res.json();
      }).then(function (res) {
        var _res$data = res.data,
            title = _res$data.title,
            description = _res$data.description,
            url = _res$data.url,
            image = _res$data.image;

        if (image) {
          if ((typeof image === 'undefined' ? 'undefined' : _typeof(image)) === 'object') {
            var _color = image.color,
                _backgroundColor = image.background_color;

            _this2.setState({ color: _color, backgroundColor: _backgroundColor });
          }
          var imagePath = getUrlPath(image);
          _this2.setState({ image: imagePath });
        }
        _this2.setState({ title: title, description: description, url: url, loaded: true });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          title = _state.title,
          description = _state.description,
          color = _state.color,
          backgroundColor = _state.backgroundColor,
          url = _state.url,
          image = _state.image,
          loaded = _state.loaded;
      var _props2 = this.props,
          size = _props2.size,
          className = _props2.className,
          rounded = _props2.rounded,
          style = _props2.style,
          contrast = _props2.contrast;

      var cardClassName = 'microlink_card ' + (typeof className === 'string' ? className : '');

      return loaded && _jsx(CardWrap, {
        className: cardClassName,
        href: url,
        title: title,
        cardSize: size,
        contrast: contrast,
        color: color,
        backgroundColor: backgroundColor,
        rounded: rounded,
        style: style
      }, void 0, image && _jsx(CardImage, {
        className: 'microlink_card__image',
        image: image,
        cardSize: size
      }), _jsx(CardContent, {
        className: 'microlink_card__content',
        title: title,
        description: description,
        url: url,
        cardSize: size
      }));
    }
  }]);

  return _class;
}(Component);

_class.defaultProps = {
  endpoint: 'https://api.microlink.io',
  rel: 'noopener noreferrer',
  target: '_blank'
};
export default _class;