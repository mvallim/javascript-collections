/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite Queue', function() {
  const Queue = require('../main/index').Queue;
  beforeEach(function() {
  });
  afterEach(function() {
  });

  test('should be enqueue values and dequeue success', function() {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    var dequeue = queue.dequeue();

    expect(dequeue).toEqual(1);
  });

  test('should be enqueue values and empty queue success', function() {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    while (!queue.empty) {
      queue.dequeue();
    }

    expect(queue.empty).toBe(true);
  });

  test('should be enqueue values and get front success', function() {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    var front = queue.front();

    expect(front).toEqual(1);
  });

  test('should be enqueue values and get back success', function() {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    var back = queue.back();

    expect(back).toEqual(6);
  });

  test('should be push values and clear stack success', function() {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    queue.clear();

    expect(queue.empty).toBe(true);
  });

  test('should be push values and length stack success', function() {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.length).toEqual(3);
  });
});
