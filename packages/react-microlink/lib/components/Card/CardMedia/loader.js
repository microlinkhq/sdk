'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingOverlay = exports.ImageLoadCatcher = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  height: 1px;\n  width: 1px;\n  position: absolute;\n  z-index: -1;\n'], ['\n  height: 1px;\n  width: 1px;\n  position: absolute;\n  z-index: -1;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &::after {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: #e1e8ed;\n    transition: opacity .3s ease-out;\n    opacity: ', ';\n  }\n'], ['\n  &::after {\n    content: \'\';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: #e1e8ed;\n    transition: opacity .3s ease-out;\n    opacity: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageLoadCatcher = exports.ImageLoadCatcher = _styledComponents2.default.img(_templateObject);

var loadingOverlay = exports.loadingOverlay = function loadingOverlay(_ref) {
  var loading = _ref.loading;
  return (0, _styledComponents.css)(_templateObject2, function (_ref2) {
    var loading = _ref2.loading;
    return loading ? 1 : 0;
  });
};