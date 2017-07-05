/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite Heap', function() {
  const Heap = require('../main/index').Heap;
  beforeEach(function() {
  });
  afterEach(function() {
  });

  test('should be add values and peek is minimum success', function() {
    const heapMin = new Heap(function(a, b) {
      return a - b;
    });

    heapMin.add(10);
    heapMin.add(9);
    heapMin.add(8);
    heapMin.add(7);
    heapMin.add(220020);
    heapMin.add(5);
    heapMin.add(4);
    heapMin.add(3);
    heapMin.add(2);
    heapMin.add(1);
    heapMin.add(0);

    expect(heapMin.peek()).toBe(0);
  });

  test('should be add and remove values and peek is minimum success',
    function() {
      const heapMin = new Heap(function(a, b) {
        return a - b;
      });

      heapMin.add(10);
      heapMin.add(9);
      heapMin.add(8);
      heapMin.add(7);
      heapMin.poll();
      heapMin.poll();
      heapMin.poll();
      heapMin.add(3);
      heapMin.add(2);
      heapMin.poll();
      heapMin.add(0);

      expect(heapMin.peek()).toBe(0);
    });

  test('should be add values and peek is maximum success', function() {
    const heapMax = new Heap(function(a, b) {
      return b - a;
    });

    heapMax.add(10);
    heapMax.add(9);
    heapMax.add(8);
    heapMax.add(7);
    heapMax.add(220020);
    heapMax.add(5);
    heapMax.add(4);
    heapMax.add(3);
    heapMax.add(2);
    heapMax.add(1);
    heapMax.add(0);

    expect(heapMax.peek()).toBe(220020);
  });

  test('should be add and remove values and peek is maximum success',
    function() {
      const heapMax = new Heap(function(a, b) {
        return b - a;
      });

      heapMax.add(9);
      heapMax.add(8);
      heapMax.add(7);
      heapMax.poll();
      heapMax.poll();
      heapMax.add(10);
      heapMax.poll();
      heapMax.add(3);
      heapMax.add(2);
      heapMax.poll();
      heapMax.add(0);

      expect(heapMax.peek()).toBe(3);
    });

  test('should be push values and length heap success', function() {
    const heapMax = new Heap(function(a, b) {
      return b - a;
    });

    heapMax.add(1);
    heapMax.add(2);
    heapMax.add(3);
    heapMax.add(4);
    heapMax.add(5);
    heapMax.add(6);

    expect(heapMax.length).toBe(6);
  });

  test('should be peek empty heap success', function() {
    const heapMax = new Heap(function(a, b) {
      return b - a;
    });

    expect(heapMax.peek()).toBeNull();
  });

  test('should be add values and empty heap success', function() {
    const heapMax = new Heap(function(a, b) {
      return b - a;
    });

    heapMax.add(1);
    heapMax.add(2);
    heapMax.add(3);
    heapMax.add(4);
    heapMax.add(5);
    heapMax.add(6);

    while (!heapMax.empty) {
      console.log(heapMax.poll());
    }

    expect(heapMax.empty).toBe(true);
  });

  test('should be push values and clear heap success', function() {
    const heapMax = new Heap(function(a, b) {
      return b - a;
    });

    heapMax.add(1);
    heapMax.add(2);
    heapMax.add(3);
    heapMax.add(4);
    heapMax.add(5);
    heapMax.add(6);

    heapMax.clear();

    expect(heapMax.length).toBe(0);

    for (const node in heapMax._items) {
      expect(node).toBeUndefined();
    }
  });
});
