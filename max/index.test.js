const assert = require('assert');
const max = require('.');

assert.equal(max(5, 2, 10), 10);
assert.equal(max(5, 2, [10, 7]), 10);