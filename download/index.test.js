const assert = require('assert');
const { isFunction } = require('../type');
const download  = require('.');

assert.equal(isFunction(download), true);