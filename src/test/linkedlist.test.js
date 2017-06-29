/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite LinkedList', function() {
  const LinkedList = require('../main/index').LinkedList;
  beforeEach(function() {
  });
  afterEach(function() {
  });

  test('should be add values and get first element success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    const first = linkedList.first();

    expect(first.value).toBe(1);
  });

  test('should be addAt value out of index success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);

    expect(function() {
      linkedList.addAt(100, 1);
    })
      .toThrowError();

    expect(function() {
      linkedList.addAt(-1, 1);
    })
      .toThrowError();
  });

  test('should be removeAt value out of index success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);

    expect(function() {
      linkedList.removeAt(100);
    })
      .toThrowError();

    expect(function() {
      linkedList.removeAt(-1);
    })
      .toThrowError();
  });

  test('should be get value out of index success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);

    expect(function() {
      linkedList.get(100);
    })
      .toThrowError();

    expect(function() {
      linkedList.get(-1);
    })
      .toThrowError();
  });

  test('should be set value out of index success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);

    expect(function() {
      linkedList.set(100, {});
    })
      .toThrowError();

    expect(function() {
      linkedList.set(-1, {});
    })
      .toThrowError();
  });

  test('should be add values and get last element success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    var last = linkedList.last();

    expect(last.value).toBe(6);
  });

  test('should be add values and get first element and iterate success',
    function() {
      const linkedList = new LinkedList();

      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(4);
      linkedList.add(5);
      linkedList.add(6);

      let current = linkedList.first();
      let count = 1;

      while (current != undefined) {
        expect(count).toBe(current.value);
        current = current.next;
        count++;
      }
    });

  test('should be addAt values and get element success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    expect(linkedList.get(3).value).toBe(4);

    linkedList.addAt(3, 13);

    expect(linkedList.get(3).value).toBe(13);

    linkedList.addAt(0, 14);

    expect(linkedList.get(0).value).toBe(14);

    const index = linkedList.length - 1;

    linkedList.addAt(index, 15);

    expect(linkedList.get(index + 1).value).toBe(15);

    expect(linkedList.get(5).value).toBe(4);

    expect(linkedList.get(index).value).toBe(6);
  });

  test('should be remove value and get element success', function() {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    let node = linkedList.get(3);

    expect(node.value).toBe(4);

    linkedList.remove(4);

    node = linkedList.get(3);

    expect(node.value).toBe(5);
  });

  test('should be remove values and get element success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    let node = linkedList.get(3);

    expect(node.value).toBe(4);

    linkedList.remove(4);

    node = linkedList.get(3);

    expect(node.value).toBe(5);
  });

  test('should be remove values and update index element success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    const node01 = linkedList.get(0);
    const node02 = linkedList.get(2);
    const node03 = linkedList.get(4);

    expect(node01.value).toBe(1);
    expect(node02.value).toBe(3);
    expect(node03.value).toBe(4);

    linkedList.remove(2);

    expect(node01.value).toBe(1);
    expect(node02.value).toBe(3);
    expect(node03.value).toBe(4);
  });

  test('should be removeAt value and update index element success',
    function() {
      const linkedList = new LinkedList();

      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(2);
      linkedList.add(4);
      linkedList.add(2);

      let node = linkedList.get(2);

      expect(node.value).toBe(3);

      linkedList.removeAt(2);

      node = linkedList.get(2);

      expect(node.value).toBe(2);
    });

  test('should be add values and length success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    expect(linkedList.length).toBe(6);
  });

  test('should be add values and removeAt one by one using head success',
    function() {
      let linkedList = new LinkedList();

      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(2);
      linkedList.add(4);
      linkedList.add(2);

      while (!linkedList.empty) {
        linkedList.removeAt(0);
      }

      expect(linkedList.empty).toBe(true);
    });

  test('should be add values and removeAt one by one using tail success',
    function() {
      let linkedList = new LinkedList();

      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(2);
      linkedList.add(4);
      linkedList.add(2);

      while (!linkedList.empty) {
        linkedList.removeAt(linkedList.length - 1);
      }

      expect(linkedList.empty).toBe(true);
    });

  test('should be add values and remove value one by one success', function() {
    const linkedList = new LinkedList();

    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(2);

    while (!linkedList.empty) {
      linkedList.remove(2);
    }

    expect(linkedList.empty).toBe(true);
  });

  test('should be add values and clear success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    linkedList.clear();

    expect(linkedList.length).toBe(0);
  });

  test('should be add values and set success', function() {
    const linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    linkedList.set(0, 2);
    linkedList.set(1, 2);
    linkedList.set(2, 2);
    linkedList.set(3, 2);
    linkedList.set(4, 2);
    linkedList.set(5, 2);

    let current = linkedList.first();

    while (current != null) {
      expect(current.value).toBe(2);
      current = current.next;
    }
  });

  test('should be add values and iterate success', function() {
    const linkedList = new LinkedList();

    linkedList.add(0);
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    const iterator = linkedList.iterator();

    while (iterator.hasNext()) {
      const index = iterator.nextIndex();
      const next = iterator.next();
      expect(index).toBe(next.value);
    }
  });

  test('should be add values and forEach success', function() {
    const linkedList = new LinkedList();

    linkedList.add(0);
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    linkedList.forEach(function(index, node) {
      expect(index).toBe(node.value);
    });
  });

  test('should be add values and forEach invalid predicate success',
    function() {
      const linkedList = new LinkedList();

      linkedList.add(0);
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(4);
      linkedList.add(5);

      linkedList.forEach({});

      //TODO: Check this test
    });
});
