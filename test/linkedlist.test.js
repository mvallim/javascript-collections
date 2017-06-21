describe("A test suite LinkedList", function () {
  beforeEach(function () {
  });
  afterEach(function () {
  });

  it('should be add values and get first element success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    var first = linkedList.first();

    assert.equal(1, first.value);
  });

  it('should be add values and get last element success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    var last = linkedList.last();

    assert.equal(6, last.value);
  });

  it('should be add values and get first element and iterate success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    var current = linkedList.first();
    var count = 1;

    while (current != undefined) {
      assert.equal(count, current.value);
      current = current.next;
      count++;
    }
  });

  it('should be addAt values and get element success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    assert.equal(4, linkedList.get(3).value);

    linkedList.addAt(3, 10);

    assert.equal(10, linkedList.get(3).value);

    assert.equal(4, linkedList.get(4).value);
  });

  it('should be remove value and get element success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    var node = linkedList.get(3);

    assert.equal(4, node.value);

    linkedList.remove(4);

    var node = linkedList.get(3);

    assert.equal(5, node.value);
  });

  it('should be remove values and get element success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    var node = linkedList.get(3);

    assert.equal(4, node.value);

    linkedList.remove(4);

    var node = linkedList.get(3);

    assert.equal(5, node.value);
  });

  it('should be remove values and update index element success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    var node01 = linkedList.get(0);
    var node02 = linkedList.get(2);
    var node03 = linkedList.get(4);

    assert.equal(1, node01.value);

    assert.equal(3, node02.value);

    assert.equal(4, node03.value);

    linkedList.remove(2);

    assert.equal(1, node01.value);

    assert.equal(3, node02.value);

    assert.equal(4, node03.value);
  });

  it('should be removeAt value and update index element success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    var node = linkedList.get(2);

    assert.equal(3, node.value);

    linkedList.removeAt(2);

    var node = linkedList.get(2);

    assert.equal(2, node.value);
  });

  it('should be add values and length success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    assert.equal(6, linkedList.length);
  });

  it('should be add values and removeAt one by one using head success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    while (!linkedList.empty) {
      linkedList.removeAt(0);
    }

    assert.equal(true, linkedList.empty);
  });

  it('should be add values and removeAt one by one using tail success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    while (!linkedList.empty) {
      linkedList.removeAt(linkedList.length - 1);
    }

    assert.equal(true, linkedList.empty);
  });

  it('should be add values and remove value one by one success', function () {
    var linkedList = new LinkedList();

    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(2);
    linkedList.add(2);

    while (!linkedList.empty) {
      linkedList.remove(2);
    }

    assert.equal(true, linkedList.empty);
  });

  it('should be add values and clear success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    linkedList.clear();

    assert.equal(0, linkedList.length);
  });

  it('should be add values and set success', function () {
    var linkedList = new LinkedList();

    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(2);

    linkedList.set(0, 2);
    linkedList.set(2, 2);
    linkedList.set(4, 2);

    var current = linkedList.first();

    while (current != null) {
      assert.equal(2, current.value);
      current = current.next;
    }
  });

  it('should be add values and iterate success', function () {
    var linkedList = new LinkedList();

    linkedList.add(0);
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    var iterator = linkedList.iterator();

    while (iterator.hasNext()) {
      var current = iterator.next();
      assert.equal(iterator.nextIndex() - 1, current.value);
    }
  });

  it('should be add values and forEach success', function () {
    var linkedList = new LinkedList();

    linkedList.add(0);
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    linkedList.forEach(function (index, node) {
      assert.equal(index, node.value);
    });
  });
});