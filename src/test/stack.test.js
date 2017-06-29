/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite Stack', function() {
  const Stack = require('../main/index').Stack;
  beforeEach(function() {
  });
  afterEach(function() {
  });

  test('should be push values and pop last element success', function() {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    const pop = stack.pop();

    expect(pop).toEqual(6, pop);
  });

  test('should be push values and empty stack success', function() {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    while (!stack.empty) {
      stack.pop();
    }

    expect(stack.empty).toBe(true);
  });

  test('should be push values and peek stack success', function() {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    expect(6).toEqual(stack.peek());
  });

  test('should be push values and clear stack success', function() {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    stack.clear();

    expect(stack.empty).toBe(true);
  });

  test('should be push values and length stack success', function() {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(3).toEqual(stack.length);
  });
});
