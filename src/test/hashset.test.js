/* global test, require, expect, describe, beforeEach afterEach */

describe('A test suite HashSet', function() {
  const HashSet = require('../main/index').HashSet;
  beforeEach(function() {
  });
  afterEach(function() {
  });

  test('should be union set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = new HashSet();

    hashSet02.add(4);
    hashSet02.add(5);
    hashSet02.add(6);

    const hashSet = hashSet01.union(hashSet02);

    expect(hashSet.length).toBe(6);

    hashSet.forEach(function(index, value) {
      expect(hashSet01.contains(value) ||
        hashSet02.contains(value)).toBe(true);
    });
  });

  test('should be union same value set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = new HashSet();

    hashSet02.add(3);
    hashSet02.add(4);
    hashSet02.add(5);

    const hashSet = hashSet01.union(hashSet02);

    expect(hashSet.length).toBe(5);

    hashSet01.forEach(function(index, value) {
      expect(hashSet.contains(value)).toBe(true);
    });

    hashSet02.forEach(function(index, value) {
      expect(hashSet.contains(value)).toBe(true);
    });
  });

  test('should be union incompatible object set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = [];

    hashSet02.push(3);
    hashSet02.push(4);
    hashSet02.push(5);

    expect(function() {
      hashSet01.union(hashSet02);
    })
      .toThrowError();
  });

  test('should be intersect set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = new HashSet();

    hashSet02.add(1);
    hashSet02.add(5);
    hashSet02.add(3);

    const hashSet = hashSet01.intersect(hashSet02);

    expect(hashSet.length).toBe(2);

    hashSet.forEach(function(index, value) {
      expect(hashSet01.contains(value) ||
        hashSet02.contains(value)).toBe(true);
    });
  });

  test('should be intersect diferent values set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = new HashSet();

    hashSet02.add(4);
    hashSet02.add(5);
    hashSet02.add(6);

    const hashSet = hashSet01.intersect(hashSet02);

    expect(hashSet.length).toBe(0);

    hashSet01.forEach(function(index, value) {
      expect(hashSet.contains(value)).toBe(false);
    });

    hashSet02.forEach(function(index, value) {
      expect(hashSet.contains(value)).toBe(false);
    });
  });

  test('should be intersect incompatible object set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = [];

    hashSet02.push(3);
    hashSet02.push(4);
    hashSet02.push(5);

    expect(function() {
      hashSet01.intersect(hashSet02);
    })
      .toThrowError();
  });

  test('should be except set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = new HashSet();

    hashSet02.add(1);
    hashSet02.add(5);
    hashSet02.add(3);

    const hashSet = hashSet01.except(hashSet02);

    expect(hashSet.length).toBe(1);

    hashSet.forEach(function(index, value) {
      expect(hashSet01.contains(value) ||
        hashSet02.contains(value)).toBe(true);
    });
  });

  test('should be except diferent values set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = new HashSet();

    hashSet02.add(4);
    hashSet02.add(5);
    hashSet02.add(6);

    const hashSet = hashSet01.except(hashSet02);

    expect(hashSet.length).toBe(3);

    hashSet01.forEach(function(index, value) {
      expect(hashSet.contains(value)).toBe(true);
    });

    hashSet02.forEach(function(index, value) {
      expect(hashSet.contains(value)).toBe(false);
    });
  });

  test('should be except incompatible object set success', function() {
    const hashSet01 = new HashSet();

    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);

    const hashSet02 = [];

    hashSet02.push(3);
    hashSet02.push(4);
    hashSet02.push(5);

    expect(function() {
      hashSet01.except(hashSet02);
    })
      .toThrowError();
  });

  test('should be use custom hash code function success', function() {
    var count = 0;

    const hashSet = new HashSet(function() {
      return count++;
    });

    expect(hashSet.add({
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        pp1: 'pp1',
      },
    })).toBe(true);

    expect(hashSet.add(null)).toBe(true);
    expect(hashSet.add('string')).toBe(true);
    expect(hashSet.add(100)).toBe(true);
    expect(hashSet.add(100.12)).toBe(true);
    expect(hashSet.add(true)).toBe(true);
    expect(hashSet.add(false)).toBe(true);

    expect(hashSet.length).toBe(7);

    var keys = [0, 1, 2, 3, 4, 5, 6];

    keys.forEach(function(key) {
      expect(hashSet.containsKey(key)).toBe(true);
    });
  });

  test('should be use custom null hash code function success', function() {
    const hashSet = new HashSet(null);

    expect(hashSet.add({
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        pp1: 'pp1',
      },
    })).toBe(true);

    expect(hashSet.add(null)).toBe(true);
    expect(hashSet.add('string')).toBe(true);
    expect(hashSet.add(100)).toBe(true);
    expect(hashSet.add(100.12)).toBe(true);
    expect(hashSet.add(true)).toBe(true);
    expect(hashSet.add(false)).toBe(true);

    expect(hashSet.length).toBe(7);
  });

  test('should be add values success', function() {
    const hashSet = new HashSet();

    expect(hashSet.add({
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        pp1: 'pp1',
      },
    })).toBe(true);
    expect(hashSet.add(null)).toBe(true);
    expect(hashSet.add('string')).toBe(true);
    expect(hashSet.add(100)).toBe(true);
    expect(hashSet.add(100.12)).toBe(true);
    expect(hashSet.add(true)).toBe(true);
    expect(hashSet.add(false)).toBe(true);

    expect(hashSet.length).toBe(7);
  });

  test('should be add duplicate value success', function() {
    const hashSet = new HashSet();

    expect(hashSet.add('string')).toBe(true);
    expect(hashSet.add('string')).toBe(false);
  });

  test('should be add value and remove unset value success', function() {
    const hashSet = new HashSet();

    expect(hashSet.add('string')).toBe(true);
    expect(hashSet.remove('string')).toBe(true);
    expect(hashSet.remove('string')).toBe(false);
  });

  test('should be add values and remove values success', function() {
    const hashSet = new HashSet();

    var obj1 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '1',
      },
    };
    var obj2 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '2',
      },
    };

    expect(hashSet.add(obj1)).toBe(true);
    expect(hashSet.add(obj2)).toBe(true);

    expect(hashSet.length).toBe(2);

    expect(hashSet.remove(obj1)).toBe(true);
    expect(hashSet.remove(obj2)).toBe(true);

    expect(hashSet.length).toBe(0);
  });

  test('should be add values and check contains values success', function() {
    const hashSet = new HashSet();

    var obj1 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '1',
      },
    };
    var obj2 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '2',
      },
    };

    expect(hashSet.add(obj1)).toBe(true);
    expect(hashSet.add(obj2)).toBe(true);

    expect(hashSet.contains(obj1)).toBe(true);
    expect(hashSet.contains(obj2)).toBe(true);
  });

  test('should be add values and check contains key success', function() {
    const hashSet = new HashSet();

    var obj1 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '1',
      },
    };
    var obj2 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '2',
      },
    };

    var key1 = hashSet.hashCode(obj1);
    var key2 = hashSet.hashCode(obj2);

    expect(hashSet.add(obj1)).toBe(true);
    expect(hashSet.add(obj2)).toBe(true);

    expect(hashSet.containsKey(key1)).toBe(true);
    expect(hashSet.containsKey(key2)).toBe(true);
  });

  test('should be add values and check keys success', function() {
    const hashSet = new HashSet();

    var obj1 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '1',
      },
    };
    var obj2 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '2',
      },
    };

    var map = {};
    map[hashSet.hashCode(obj1)] = true;
    map[hashSet.hashCode(obj2)] = true;

    expect(hashSet.add(obj1)).toBe(true);
    expect(hashSet.add(obj2)).toBe(true);

    hashSet.keys().forEach(function(key) {
      expect(map[key]).toBe(true);
    });
  });

  test('should be add values and check values success', function() {
    const hashSet = new HashSet();

    var obj1 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '1',
      },
    };
    var obj2 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '2',
      },
    };

    var map = {};
    map[hashSet.hashCode(obj1)] = obj1;
    map[hashSet.hashCode(obj2)] = obj2;

    expect(hashSet.add(obj1)).toBe(true);
    expect(hashSet.add(obj2)).toBe(true);

    hashSet.values().forEach(function(value) {
      var key = hashSet.hashCode(value);
      expect(map[key]).toBe(value);
    });
  });

  test('should be add values and check entries success', function() {
    const hashSet = new HashSet();

    var obj1 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '1',
      },
    };
    var obj2 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '2',
      },
    };

    var map = {};
    map[hashSet.hashCode(obj1)] = obj1;
    map[hashSet.hashCode(obj2)] = obj2;

    expect(hashSet.add(obj1)).toBe(true);
    expect(hashSet.add(obj2)).toBe(true);

    var entries = hashSet.entries();

    for (var property in entries) {
      expect(map[property]).toBe(entries[property]);
    }
  });

  test('should be add values and clear success', function() {
    const hashSet = new HashSet();

    var obj1 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '1',
      },
    };
    var obj2 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '2',
      },
    };

    expect(hashSet.add(obj1)).toBe(true);
    expect(hashSet.add(obj2)).toBe(true);

    hashSet.clear();

    expect(hashSet.length).toBe(0);
  });

  test('should be add values and remove all success', function() {
    const hashSet = new HashSet();

    var obj1 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '1',
      },
    };
    var obj2 = {
      p0: null,
      p1: 'p1',
      p2: 1,
      p3: true,
      p4: {
        obj: '2',
      },
    };

    expect(hashSet.add(obj1)).toBe(true);
    expect(hashSet.add(obj2)).toBe(true);

    expect(hashSet.remove(obj1)).toBe(true);
    expect(hashSet.remove(obj2)).toBe(true);

    expect(hashSet.empty).toBe(true);
  });

  test('should be add values and iterate success', function() {
    const hashSet = new HashSet();

    expect(hashSet.add(0)).toBe(true);
    expect(hashSet.add(1)).toBe(true);
    expect(hashSet.add(2)).toBe(true);
    expect(hashSet.add(3)).toBe(true);
    expect(hashSet.add(4)).toBe(true);
    expect(hashSet.add(5)).toBe(true);

    var iterator = hashSet.iterator();

    while (iterator.hasNext()) {
      var index = iterator.nextIndex();
      var current = iterator.next();
      expect(index).toBe(current);
    }
  });

  test('should be add values and forEach success', function() {
    const hashSet = new HashSet();

    expect(hashSet.add(0)).toBe(true);
    expect(hashSet.add(1)).toBe(true);
    expect(hashSet.add(2)).toBe(true);
    expect(hashSet.add(3)).toBe(true);
    expect(hashSet.add(4)).toBe(true);
    expect(hashSet.add(5)).toBe(true);

    hashSet.forEach(function(index, node) {
      expect(index).toBe(node);
    });
  });

  test('should be add values and forEach invalid predicate success',
    //TODO: Review this test.
    function() {
      const hashSet = new HashSet();

      expect(hashSet.add(0)).toBe(true);
      expect(hashSet.add(1)).toBe(true);
      expect(hashSet.add(2)).toBe(true);
      expect(hashSet.add(3)).toBe(true);
      expect(hashSet.add(4)).toBe(true);
      expect(hashSet.add(5)).toBe(true);

      hashSet.forEach({});
    });
});
