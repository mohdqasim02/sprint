const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual} = require('assert');

const {load, assign, add, sub, display} = require('../src/sprint.js');

describe('sprint', function() {

  describe('load', function() {
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

  describe('assign', function() {
    it('should assign value at given memory location', function() {
      strictEqual(assign(2, 100), 2);
    })

    it('should assign value at given memory location', function() {
      strictEqual(assign(1, 101), 1);
    })
  });

  describe('add', function() {
    it('should add values at given memory location', function() {
      strictEqual(add(100, 101, 102), 3);
    })
  });

  describe('sub', function() {
    it('should subtract values at given memory location', function() {
      strictEqual(sub(100, 101, 103), 1);
    })
  });
});
