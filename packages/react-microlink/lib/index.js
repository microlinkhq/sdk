var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Fragment, Component } from 'react';


import { CardWrap, CardImage, CardContent, CardEmptyState } from './components/Card';
import { getUrlPath } from './utils';

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: true }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          targetUrl = _props.url,
          contrast = _props.contrast,
          api = _props.endpoint;


      if (targetUrl) {
        var _url = api + '/?url=' + targetUrl;
        if (contrast) _url = _url + '&palette';

        this.setState({ loading: true }, function () {
          return fetch(_url).then(function (res) {
            return res.json();
          }).then(function (res) {
            var _res$status = res.status,
                status = _res$status === undefined ? '' : _res$status,
                data = res.data;

            if (status === 'success') {
              var _title = data.title,
                  _description = data.description,
                  _url2 = data.url,
                  _image = data.image;


              if (_image) {
                if ((typeof _image === 'undefined' ? 'undefined' : _typeof(_image)) === 'object') {
                  var _color = _image.color,
                      _backgroundColor = _image.background_color;

                  _this2.setState({ color: _color, backgroundColor: _backgroundColor });
                }
                var imagePath = getUrlPath(_image);
                _this2.setState({ image: imagePath });
              }

              _this2.setState({ title: _title, description: _description, url: _url2, loading: false });
            }
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


      return React.createElement(
        Fragment,
        null,
        React.createElement(CardImage, {
          className: 'microlink_card__image',
          image: image,
          cardSize: size
        }),
        React.createElement(CardContent, {
          className: 'microlink_card__content',
          title: title,
          description: description,
          url: url,
          cardSize: size
        })
      );
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
          className: className ? 'microlink_card ' + className : className,
          href: url,
          title: title,
          cardSize: size,
          color: color,
          backgroundColor: backgroundColor,
          loading: loading
        }, this.props),
        !loading ? this.renderContent() : React.createElement(CardEmptyState, { cardSize: size })
      );
    }
  }]);

  return _class;
}(Component);

_class.defaultProps = {
  endpoint: 'https://api.microlink.io'
};
export default _class;