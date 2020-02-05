const assert = require('assert');
const { isFunction } = require('../type/type');
const download  = require('./download');

assert.equal(isFunction(download), true);