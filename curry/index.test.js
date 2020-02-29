const assert = require('assert');
const { compose, pipe, curry } = require('.');

assert.equal(compose(Math.abs, a => a + 1, a => Math.pow(a, 2))(10), 101);
assert.equal(pipe(Math.abs, a => a + 1, a => Math.pow(a, 2))(-10), 121);
assert.equal(curry((a, b, c) => a + b - c)(10)(9)(11), 8);