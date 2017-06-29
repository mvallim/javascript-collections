/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite BaseCollection', function() {
  const BaseIterator = require('../main/commons/baseiterator');
  beforeEach(function() {
  });
  afterEach(function() {
  });

  test('should be throw in unimplemented methods success', function() {
    const baseIterator = new BaseIterator();

    expect(function() {
      baseIterator.hasNext();
    }).toThrowError();

    expect(function() {
      baseIterator.next();
    }).toThrowError();

    expect(function() {
      baseIterator.nextIndex();
    }).toThrowError();

  });
});
