/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite BaseCollection', function() {
  const BaseCollection = require('../main/commons/basecollection');

  beforeEach(function() {
  });
  afterEach(function() {
  });

  test('should be throw in unimplemented methods success', function() {
    const baseCollection = new BaseCollection();

    expect(function() {
      return baseCollection.length;
    }).toThrowError();

    expect(function() {
      return baseCollection.empty;
    }).toThrowError();

    expect(function() {
      baseCollection.clear();
    }).toThrowError();

  });
});
