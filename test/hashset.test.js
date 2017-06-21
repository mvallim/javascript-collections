describe('A test suite HashSet', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('should be add values success', function () {
    var hashSet = new HashSet();

    assert.equal(true, hashSet.add({
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        pp1 : "pp1"
      }
    }));
    assert.equal(true, hashSet.add(null));
    assert.equal(true, hashSet.add("string"));
    assert.equal(true, hashSet.add(100));
    assert.equal(true, hashSet.add(100.12));
    assert.equal(true, hashSet.add(true));
    assert.equal(true, hashSet.add(false));

    assert.equal(7, hashSet.length);
  });

  it('should be add duplicate value success', function () {
    var hashSet = new HashSet();

    assert.equal(true, hashSet.add("string"));
    assert.equal(false, hashSet.add("string"));
  });

  it('should be add value and remove unset value success', function () {
    var hashSet = new HashSet();

    assert.equal(true, hashSet.add("string"));
    assert.equal(true, hashSet.remove("string"));
    assert.equal(false, hashSet.remove("string"));
  });

  it('should be add values and remove values success', function () {
    var hashSet = new HashSet();

    var obj1 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "1"
      }
    };
    var obj2 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "2"
      }
    };

    assert.equal(true, hashSet.add(obj1));
    assert.equal(true, hashSet.add(obj2));

    assert.equal(2, hashSet.length);

    assert.equal(true, hashSet.remove(obj1));
    assert.equal(true, hashSet.remove(obj2));

    assert.equal(0, hashSet.length);
  });

  it('should be add values and check contains values success', function () {
    var hashSet = new HashSet();

    var obj1 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "1"
      }
    };
    var obj2 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "2"
      }
    };

    assert.equal(true, hashSet.add(obj1));
    assert.equal(true, hashSet.add(obj2));

    assert.equal(true, hashSet.contains(obj1));
    assert.equal(true, hashSet.contains(obj2));
  });

  it('should be add values and check contains key success', function () {
    var hashSet = new HashSet();

    var obj1 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "1"
      }
    };
    var obj2 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "2"
      }
    };

    var key1 = hashSet.hashCode(obj1);
    var key2 = hashSet.hashCode(obj2);

    assert.equal(true, hashSet.add(obj1));
    assert.equal(true, hashSet.add(obj2));

    assert.equal(true, hashSet.containsKey(key1));
    assert.equal(true, hashSet.containsKey(key2));
  });

  it('should be add values and check keys success', function () {
    var hashSet = new HashSet();

    var obj1 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "1"
      }
    };
    var obj2 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "2"
      }
    };

    var map = {};
    map[hashSet.hashCode(obj1)] = true;
    map[hashSet.hashCode(obj2)] = true;

    assert.equal(true, hashSet.add(obj1));
    assert.equal(true, hashSet.add(obj2));

    hashSet.keys().forEach(function (key) {
      assert.equal(true, map[key]);
    });
  });

  it('should be add values and check values success', function () {
    var hashSet = new HashSet();

    var obj1 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "1"
      }
    };
    var obj2 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "2"
      }
    };

    var map = {};
    map[hashSet.hashCode(obj1)] = obj1;
    map[hashSet.hashCode(obj2)] = obj2;

    assert.equal(true, hashSet.add(obj1));
    assert.equal(true, hashSet.add(obj2));

    hashSet.values().forEach(function (value) {
      var key = hashSet.hashCode(value);
      assert.equal(value, map[key]);
    });
  });

  it('should be add values and check entries success', function () {
    var hashSet = new HashSet();

    var obj1 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "1"
      }
    };
    var obj2 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "2"
      }
    };

    var map = {};
    map[hashSet.hashCode(obj1)] = obj1;
    map[hashSet.hashCode(obj2)] = obj2;

    assert.equal(true, hashSet.add(obj1));
    assert.equal(true, hashSet.add(obj2));

    var entries = hashSet.entries();

    for ( var property in entries) {
      assert.equal(map[property], entries[property]);
    }
  });

  it('should be add values and clear success', function () {
    var hashSet = new HashSet();

    var obj1 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "1"
      }
    };
    var obj2 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "2"
      }
    };

    assert.equal(true, hashSet.add(obj1));
    assert.equal(true, hashSet.add(obj2));

    hashSet.clear();

    assert.equal(0, hashSet.length);
  });

  it('should be add values and remove all success', function () {
    var hashSet = new HashSet();

    var obj1 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "1"
      }
    };
    var obj2 = {
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        obj : "2"
      }
    };

    assert.equal(true, hashSet.add(obj1));
    assert.equal(true, hashSet.add(obj2));

    assert.equal(true, hashSet.remove(obj1));
    assert.equal(true, hashSet.remove(obj2));

    assert.equal(true, hashSet.empty);
  });

  it('should be add values and iterate success', function () {
    var hashSet = new HashSet();

    assert.equal(true, hashSet.add(0));
    assert.equal(true, hashSet.add(1));
    assert.equal(true, hashSet.add(2));
    assert.equal(true, hashSet.add(3));
    assert.equal(true, hashSet.add(4));
    assert.equal(true, hashSet.add(5));

    var iterator = hashSet.iterator();

    while (iterator.hasNext()) {
      var index = iterator.nextIndex();
      var current = iterator.next();
      assert.equal(index, current);
    }
  });

  it('should be add values and forEach success', function () {
    var hashSet = new HashSet();

    assert.equal(true, hashSet.add(0));
    assert.equal(true, hashSet.add(1));
    assert.equal(true, hashSet.add(2));
    assert.equal(true, hashSet.add(3));
    assert.equal(true, hashSet.add(4));
    assert.equal(true, hashSet.add(5));

    hashSet.forEach(function (index, node) {
      assert.equal(index, node);
    });
  });

  it('should be add values and forEach invalid predicate success', function () {
    var hashSet = new HashSet();

    assert.equal(true, hashSet.add(0));
    assert.equal(true, hashSet.add(1));
    assert.equal(true, hashSet.add(2));
    assert.equal(true, hashSet.add(3));
    assert.equal(true, hashSet.add(4));
    assert.equal(true, hashSet.add(5));

    hashSet.forEach({});
  });
})
