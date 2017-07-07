/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite BitArray', function () {
  const BitArray = require('../main/index').BitArray;

  beforeEach(function () {
  });
  afterEach(function () {
  });

  test('should be set bit and value is setted', function () {
    const bitArray = new BitArray(1000000);

    bitArray.set(0);

    expect(bitArray.get(0)).toBe(true);

    bitArray.set(31);

    expect(bitArray.get(31)).toBe(true);

    bitArray.set(32);

    expect(bitArray.get(32)).toBe(true);
  });

  test('should be unset bit and value is setted', function () {
    const bitArray = new BitArray(1000000);

    bitArray.set(0);
    bitArray.unset(0);

    expect(bitArray.get(0)).toBe(false);

    bitArray.set(31);
    bitArray.unset(31);

    expect(bitArray.get(31)).toBe(false);

    bitArray.set(32);
    bitArray.unset(32);

    expect(bitArray.get(32)).toBe(false);
  });

  test('should be setall bit to true and values are setted', function () {
    const bitArray = new BitArray(100);

    bitArray.setAll(true);

    for (var i = 0; i < bitArray.length; i++) {
      expect(bitArray.get(i)).toBe(true);
    }
  });

  test('should be setall bit to false and values are setted', function () {
    const bitArray = new BitArray(100);

    bitArray.setAll(true);
    bitArray.setAll(false);

    for (var i = 0; i < bitArray.length; i++) {
      expect(bitArray.get(i)).toBe(false);
    }
  });

  test('should be setall values true and inverse all values', function () {
    const bitArray = new BitArray(100);

    bitArray.setAll(false);
    bitArray.not();

    for (var i = 0; i < bitArray.length; i++) {
      expect(bitArray.get(i)).toBe(true);
    }
  });

  test('should be setall values false and inverse all values', function () {
    const bitArray = new BitArray(100);

    bitArray.setAll(true);
    bitArray.not();

    for (var i = 0; i < bitArray.length; i++) {
      expect(bitArray.get(i)).toBe(false);
    }
  });

  test('should be or values wiht other bitarray', function () {
    const bitArray01 = new BitArray(64);
    const bitArray02 = new BitArray(100);

    bitArray01.setAll(true);
    bitArray02.setAll(false);

    var or = bitArray01.or(bitArray02);

    expect(or.length).toBe(Math.max(bitArray01.length, bitArray02.length));

    for (var i = or.length - 1; i >= or.length - (or.length - Math.min(bitArray01.length, bitArray02.length)); i--) {
      expect(or.get(i)).toBe(true);
    }

    bitArray01.setAll(false);

    bitArray01.set(0);
    bitArray01.set(31);
    bitArray01.set(32);
    bitArray01.set(63);

    var or = bitArray02.or(bitArray01);

    expect(or.length).toBe(Math.max(bitArray01.length, bitArray02.length));

    expect(or.get(36)).toBe(true);
    expect(or.get(67)).toBe(true);
    expect(or.get(68)).toBe(true);
    expect(or.get(99)).toBe(true);

    for (var i = 0; i < or.length; i++) {
      if (i != 36 && i != 67 && i != 68 && i != 99) {
        expect(or.get(i)).toBe(false);
      }
    }
  });
  
  test('should be and values wiht other bitarray', function () {
    const bitArray01 = new BitArray(64);
    const bitArray02 = new BitArray(100);

    bitArray01.setAll(true);
    bitArray02.setAll(false);

    var and = bitArray01.and(bitArray02);

    expect(and.length).toBe(Math.max(bitArray01.length, bitArray02.length));

    for (var i = 0; i < and.length; i++) {
      expect(and.get(i)).toBe(false);
    }

    bitArray01.setAll(false);
    bitArray02.setAll(false);

    bitArray01.set(0);
    bitArray01.set(31);
    bitArray01.set(32);
    bitArray01.set(63);
    
    bitArray02.set(36);
    bitArray02.set(67);
    bitArray02.set(68);
    bitArray02.set(99);

    var and = bitArray02.and(bitArray01);

    expect(and.length).toBe(Math.max(bitArray01.length, bitArray02.length));

    expect(and.get(36)).toBe(true);
    expect(and.get(67)).toBe(true);
    expect(and.get(68)).toBe(true);
    expect(and.get(99)).toBe(true);

    for (var i = 0; i < and.length; i++) {
      if (i != 36 && i != 67 && i != 68 && i != 99) {
        expect(and.get(i)).toBe(false);
      }
    }
  });
  
  test('should be xor values wiht other bitarray', function () {
    const bitArray01 = new BitArray(64);
    const bitArray02 = new BitArray(100);

    bitArray01.setAll(true);
    bitArray02.setAll(false);

    var xor = bitArray01.xor(bitArray02);

    expect(xor.length).toBe(Math.max(bitArray01.length, bitArray02.length));

    for (var i = xor.length - 1; i >= xor.length - (xor.length - Math.min(bitArray01.length, bitArray02.length)); i--) {
      expect(xor.get(i)).toBe(true);
    }

    bitArray01.setAll(false);
    bitArray02.setAll(false);

    bitArray01.set(0);
    bitArray01.set(31);
    bitArray01.set(32);
    bitArray01.set(63);

    var xor = bitArray02.xor(bitArray01);

    expect(xor.length).toBe(Math.max(bitArray01.length, bitArray02.length));

    expect(xor.get(36)).toBe(true);
    expect(xor.get(67)).toBe(true);
    expect(xor.get(68)).toBe(true);
    expect(xor.get(99)).toBe(true);

    for (var i = 0; i < xor.length; i++) {
      if (i != 36 && i != 67 && i != 68 && i != 99) {
        expect(xor.get(i)).toBe(false);
      }
    }
  }); 
});
