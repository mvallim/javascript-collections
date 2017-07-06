/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite BitArray', function () {
  const BitArray = require('../main/index').BitArray;

  beforeEach(function () {
  });
  afterEach(function () {
  });

  test('should be test call methods', function () {
    const bitArray = new BitArray(1000);

    bitArray.set(0, true);
    bitArray.setAll(true);
    bitArray.get(0);
    bitArray.not();
    bitArray.or(new BitArray(1000));
    bitArray.and(new BitArray(1000));
    bitArray.xor(new BitArray(1000));
    bitArray.length;
    bitArray.empty;
    bitArray.clear();
    
    expect(bitArray.empty).toBe(true);
  });
});
