var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    background: #e1e8ed;\n  }\n  70% {\n    background: #cdd4d8;\n  }\n  100% {\n    background: #e1e8ed;\n  }\n'], ['\n  0% {\n    background: #e1e8ed;\n  }\n  70% {\n    background: #cdd4d8;\n  }\n  100% {\n    background: #e1e8ed;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    background: #e1e8ed;\n  }\n  70% {\n    background: #dce3e8;\n  }\n  100% {\n    background: #e1e8ed;\n  }\n'], ['\n  0% {\n    background: #e1e8ed;\n  }\n  70% {\n    background: #dce3e8;\n  }\n  100% {\n    background: #e1e8ed;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  animation: ', ' .75s linear infinite;\n'], ['\n  animation: ', ' .75s linear infinite;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  animation: ', ' 1.25s linear infinite;\n'], ['\n  animation: ', ' 1.25s linear infinite;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css, keyframes } from 'styled-components';

var emptyStatePulse = keyframes(_templateObject);
var emptyStateImagePulse = keyframes(_templateObject2);

export var emptyStateAnimation = css(_templateObject3, emptyStatePulse);

export var emptyStateImageAnimation = css(_templateObject4, emptyStateImagePulse);