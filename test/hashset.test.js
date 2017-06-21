describe('A test suite HashSet', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('should be add values success', function () {
    var hashSet = new HashSet();

    hashSet.add({
      p0 : null,
      p1 : "p1",
      p2 : 1,
      p3 : true,
      p4 : {
        pp1 : "pp1"
      }
    });
    hashSet.add(null);
    hashSet.add("string");
    hashSet.add(100);
    hashSet.add(100.12);
    hashSet.add(true);
    hashSet.add(false);

    assert.equal(7, hashSet.length);
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

    hashSet.add(obj1);
    hashSet.add(obj2);

    assert.equal(2, hashSet.length);

    hashSet.remove(obj1);
    hashSet.remove(obj2);

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

    hashSet.add(obj1);
    hashSet.add(obj2);

    assert.equal(true, hashSet.contains(obj1));
    assert.equal(true, hashSet.contains(obj2));
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

    hashSet.add(obj1);
    hashSet.add(obj2);

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

    hashSet.add(obj1);
    hashSet.add(obj2);

    hashSet.remove(obj1);
    hashSet.remove(obj2);

    assert.equal(true, hashSet.empty);
  });
  
  it('should be add values and iterate success', function () {
    var hashSet = new HashSet();

    hashSet.add(0);
    hashSet.add(1);
    hashSet.add(2);
    hashSet.add(3);
    hashSet.add(4);
    hashSet.add(5);

    var iterator = hashSet.iterator();

    while (iterator.hasNext()) {
      var current = iterator.next();
      assert.equal(iterator.nextIndex() - 1, current.value);
    }
  });

  it('should be add values and forEach success', function () {
    var hashSet = new HashSet();

    hashSet.add(0);
    hashSet.add(1);
    hashSet.add(2);
    hashSet.add(3);
    hashSet.add(4);
    hashSet.add(5);

    hashSet.forEach(function (index, node) {
      assert.equal(index, node.value);
    });
  });

})
