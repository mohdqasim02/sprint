const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');

const {load} = require('../src/sprint.js');

describe('sprint', function() {
  it('should give an object contaning key as memory location', function() {
    deepStrictEqual(load([0, 2, 100, 0, 1, 101, 9]), {
      0: 0,
      1: 2,
      2: 100,
      3: 0,
      4: 1,
      5: 101,
      6: 9
    });
  });

});
