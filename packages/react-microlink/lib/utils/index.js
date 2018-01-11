'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getUrlPath = exports.getUrlPath = function getUrlPath(data) {
  return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data.url : data;
};

var uniqArray = exports.uniqArray = function uniqArray(array) {
  return Array.from(new Set(array));
};

var someProp = exports.someProp = function someProp(data, props) {
  return data[props.find(function (prop) {
    return data[prop] !== null && data[prop] !== undefined;
  })];
};