var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  flex: 0 0 125px;\n  background: #e1e8ed no-repeat center center / cover;\n\n  &::before {\n    content: \'\';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ', '\n  ', '\n'], ['\n  display: block;\n  flex: 0 0 125px;\n  background: #e1e8ed no-repeat center center / cover;\n\n  &::before {\n    content: \'\';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ', '\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import { CardImageLarge } from './CardLarge';

export default styled.div(_templateObject, function (_ref) {
  var image = _ref.image;
  return image && 'background-image: url(' + image + ');';
}, function (_ref2) {
  var cardSize = _ref2.cardSize;
  return cardSize === 'large' && CardImageLarge;
});