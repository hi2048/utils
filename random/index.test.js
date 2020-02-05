const assert = require('assert');
const { isNumber, isArray, isString } = require('../type');
const { random, getNRandomNumbers, prefixZero } = require('.');

assert.ok(isNumber(random(1, 100)));
assert.ok(isArray(getNRandomNumbers(10, {min: 1, max: 100})));
assert.ok(isString(prefixZero(10, 5)));