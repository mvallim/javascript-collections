/* global test, require, expect, describe, beforeEach afterEach */

describe('Isomorphic test on final package', () => {
  beforeEach(() => {
  });
  afterEach(() => {
  });

  test('should work as CommonJS package', () => {
    var jsc = require('../../dist/javascript-collections.min');
    expect(jsc).toBeDefined();
    expect(jsc.Heap).toBeDefined();
    expect(jsc.Stack).toBeDefined();
    expect(jsc.Queue).toBeDefined();
    expect(jsc.LinkedList).toBeDefined();
    expect(jsc.HashSet).toBeDefined();
  });

  test('should have the global variable in the Script', () => {
    const fs = require('fs');
    const path = require('path');
    const resolvedPath = path.resolve('dist/javascript-collections.min.js');
    const jsContent = fs.readFileSync(resolvedPath, 'utf-8');

    //TODO: Make jsdom run and test the window.JsCollections
    expect(jsContent.indexOf('JsCollections') >= 0).toBe(true);
  });

  //TODO: Add Test to AMD;
});
