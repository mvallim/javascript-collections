describe('A test suite HashSet', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('should be union set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new HashSet();
    
    hashSet02.add(4);
    hashSet02.add(5);
    hashSet02.add(6);    

    var hashSet = hashSet01.union(hashSet02);

    assert.equal(6, hashSet.length);
    
    hashSet.forEach(function(index, value){
      assert.equal(true, hashSet01.contains(value) || hashSet02.contains(value));
    });
  });
  
  it('should be union same value set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new HashSet();
    
    hashSet02.add(3);
    hashSet02.add(4);
    hashSet02.add(5);    

    var hashSet = hashSet01.union(hashSet02);
    
    assert.equal(5, hashSet.length);
    
    hashSet01.forEach(function(index, value){
      assert.equal(true, hashSet.contains(value));
    });
    
    hashSet02.forEach(function(index, value){
      assert.equal(true, hashSet.contains(value));
    });
  });
  
  it('should be union incompatible object set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new Array();
    
    hashSet02.push(3);
    hashSet02.push(4);
    hashSet02.push(5);    

    expect(function() {
      hashSet01.union(hashSet02);
    }).throw();
  });
  
  it('should be intersect set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new HashSet();
    
    hashSet02.add(1);
    hashSet02.add(5);
    hashSet02.add(3);    

    var hashSet = hashSet01.intersect(hashSet02);

    assert.equal(2, hashSet.length);
    
    hashSet.forEach(function(index, value){
      assert.equal(true, hashSet01.contains(value) || hashSet02.contains(value));
    });
  });
  
  it('should be intersect diferent values set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new HashSet();
    
    hashSet02.add(4);
    hashSet02.add(5);
    hashSet02.add(6);    

    var hashSet = hashSet01.intersect(hashSet02);
    
    assert.equal(0, hashSet.length);
    
    hashSet01.forEach(function(index, value){
      assert.equal(false, hashSet.contains(value));
    });
    
    hashSet02.forEach(function(index, value){
      assert.equal(false, hashSet.contains(value));
    });
  });
  
  it('should be intersect incompatible object set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new Array();
    
    hashSet02.push(3);
    hashSet02.push(4);
    hashSet02.push(5);    

    expect(function() {
      hashSet01.intersect(hashSet02);
    }).throw();
  });
  
  it('should be except set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new HashSet();
    
    hashSet02.add(1);
    hashSet02.add(5);
    hashSet02.add(3);    

    var hashSet = hashSet01.except(hashSet02);

    assert.equal(1, hashSet.length);
    
    hashSet.forEach(function(index, value){
      assert.equal(true, hashSet01.contains(value) || hashSet02.contains(value));
    });
  });
  
  it('should be except diferent values set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new HashSet();
    
    hashSet02.add(4);
    hashSet02.add(5);
    hashSet02.add(6);    

    var hashSet = hashSet01.except(hashSet02);
    
    assert.equal(3, hashSet.length);
    
    hashSet01.forEach(function(index, value){
      assert.equal(true, hashSet.contains(value));
    });
    
    hashSet02.forEach(function(index, value){
      assert.equal(false, hashSet.contains(value));
    });
  });
  
  it('should be except incompatible object set success', function () {
    var hashSet01 = new HashSet();
    
    hashSet01.add(1);
    hashSet01.add(2);
    hashSet01.add(3);
    
    var hashSet02 = new Array();
    
    hashSet02.push(3);
    hashSet02.push(4);
    hashSet02.push(5);    

    expect(function() {
      hashSet01.except(hashSet02);
    }).throw();
  });
  
  it('should be use custom hash code function success', function () {
    var count = 0;
    
    var hashSet = new HashSet(function(value){
      return count++;
    });

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
  
  it('should be use custom null hash code function success', function () {
    var count = 0;
    
    var hashSet = new HashSet(null);

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
