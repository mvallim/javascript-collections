/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite BaseCollection', function() {
  const BaseObject = require('../main/commons/baseobject');
  beforeEach(function() {
  });
  afterEach(function() {
  });

  test('should be throw in unimplemented methods success', function() {
    const baseObject = new BaseObject();
    expect(baseObject).not.toBeNull();
  });
});
