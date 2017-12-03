var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  flex: 0 0 125px;\n  background: no-repeat center center / cover;\n\n  ', ';\n\n  &::before {\n    content: \'\';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ', '\n'], ['\n  display: block;\n  flex: 0 0 125px;\n  background: no-repeat center center / cover;\n\n  ', ';\n\n  &::before {\n    content: \'\';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-image: url(', ');\n  '], ['\n    background-image: url(', ');\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';
import { CardImageLarge } from './CardLarge';

export default styled.div(_templateObject, function (_ref) {
  var image = _ref.image;
  return image && css(_templateObject2, image);
}, function (props) {
  return props.cardSize === 'large' && CardImageLarge;
});