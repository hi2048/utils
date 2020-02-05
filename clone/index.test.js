const assert = require('assert');
const { equals, clone } = require('.');

const obj1 = { 'a': 1 };
const obj2 = { 'a': 1 };
const obj3 = { 'a': 2 };
const a = 1;
const b = 1;
assert.equal(equals(a, b), true);
assert.equal(equals(obj1, obj2), true);
assert.equal(equals(obj1, obj3), false);

const targetObj = {};
assert.equal(clone(targetObj, obj1), targetObj);
assert.equal(JSON.stringify(clone({}, obj1)), JSON.stringify(obj1));