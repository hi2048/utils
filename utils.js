const min = require('./min/min');
const max = require('./max/max');
const { isNumber, isString, isBoolean, isObject, isArray, isFunction, isDate, isRegExp, isSymbol, isNull, isNaN, isUndefined } = require('./type/type');
const { download } = require('./download/download');

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