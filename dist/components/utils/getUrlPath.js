var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export default (function (data) {
  return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data.url : data;
});