var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export var getUrlPath = function getUrlPath(data) {
  return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data.url : data;
};

export var uniqArray = function uniqArray(array) {
  return Array.from(new Set(array));
};

export var someProp = function someProp(data, props) {
  return data[props.find(function (prop) {
    return data[prop] !== null && data[prop] !== undefined;
  })];
};