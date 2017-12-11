var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { CardWrap, CardImage, CardContent, CardEmptyState } from './components/Card';
import { getUrlPath } from './utils';

var Microlink = function (_Component) {
  _inherits(Microlink, _Component);

  function Microlink() {
    _classCallCheck(this, Microlink);

    return _possibleConstructorReturn(this, (Microlink.__proto__ || Object.getPrototypeOf(Microlink)).apply(this, arguments));
  }

  _createClass(Microlink, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          targetUrl = _props.url,
          contrast = _props.contrast,
          api = _props.endpoint;


      if (targetUrl) {
        var url = api + '/?url=' + targetUrl;
        if (contrast) url = url + '&palette';

        this.setState({ loading: true }, function () {
          return fetch(url).then(function (res) {
            return res.json();
          }).then(function (_ref) {
            var status = _ref.status,
                data = _ref.data;
            var title = data.title,
                description = data.description,
                url = data.url,
                image = data.image;
            var color = image.color,
                backgroundColor = image.background_color;

            _this2.setState({
              color: color,
              backgroundColor: backgroundColor,
              title: title,
              description: description,
              url: url,
              loading: false,
              image: getUrlPath(image)
            });
          });
        });
      }
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _state = this.state,
          title = _state.title,
          description = _state.description,
          url = _state.url,
          image = _state.image;
      var size = this.props.size;


      return _jsx(Fragment, {}, void 0, _jsx(CardImage, {
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


      return React.createElement(
        CardWrap,
        _extends({
          className: className ? 'microlink_card ' + className : 'microlink_card',
          href: url,
          title: title,
          cardSize: size,
          color: color,
          backgroundColor: backgroundColor,
          loading: loading
        }, this.props),
        !loading ? this.renderContent() : _jsx(CardEmptyState, {
          cardSize: size
        })
      );
    }
  }]);

  return Microlink;
}(Component);

Microlink.defaultProps = {
  endpoint: 'https://api.microlink.io',
  size: 'normal'
};

export default Microlink;