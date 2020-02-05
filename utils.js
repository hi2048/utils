const min = require('./min');
const max = require('./max');
const { isNumber, isString, isBoolean, isObject, isArray, isFunction, isDate, isRegExp, isSymbol, isNull, isNaN, isUndefined } = require('./type');
const { random, getNRandomNumbers, prefixZero } = require('./random');
const { clone, equals } = require('./clone');
const download = require('./download');

module.exports  = {
  min,
  max,
  isNumber,
  isString,
  isBoolean,
  isObject,
  isArray,
  isFunction,
  isDate,
  isRegExp,
  isSymbol,
  isNull,
  isNaN,
  isUndefined,
  download
};