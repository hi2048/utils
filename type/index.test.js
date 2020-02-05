const assert = require('assert');
const { isNumber, isString, isBoolean, isObject, isArray, isFunction, isDate, isRegExp, isSymbol, isNull, isNaN, isUndefined } = require('.');

assert.equal(isNumber(1), true);
assert.equal(isNumber('a'), false);
assert.equal(isNumber(NaN), false);

assert.equal(isString('a'), true);
assert.equal(isString({'a': 1}), false);

assert.equal(isBoolean(true), true);
assert.equal(isBoolean('true'), false);

assert.equal(isObject({'a': 1}), true);
assert.equal(isObject([1,2]), false);

assert.equal(isArray([1,2]), true);
assert.equal(isArray({'a': 1}), false);

assert.equal(isFunction(console.log), true);
assert.equal(isFunction('a'), false);

assert.equal(isDate(new Date()), true);
assert.equal(isDate('a'), false);

assert.equal(isRegExp(/.*/g), true);
assert.equal(isRegExp('a'), false);

assert.equal(isSymbol(Symbol()), true);
assert.equal(isSymbol('a'),false);

assert.equal(isNull(null), true);
assert.equal(isNull('null'), false);

assert.equal(isNaN(NaN), true);
assert.equal(isNaN('NaN'), true);
assert.equal(isNaN(1), false);

assert.equal(isUndefined(undefined), true);
assert.equal(isUndefined('undefined'), false);
