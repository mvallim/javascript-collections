describe('A test suite LinkedList', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('should be add values and get first element success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    linkedList.add(5)
    linkedList.add(6)

    var first = linkedList.first()

    assert.equal(1, first.value)
    assert.equal(0, first.index)
  })

  it('should be add values and get last element success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    linkedList.add(5)
    linkedList.add(6)

    var last = linkedList.last()

    assert.equal(6, last.value)
    assert.equal(5, last.index)
  })

  it('should be add values and get first element and iterate success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    linkedList.add(5)
    linkedList.add(6)

    var current = linkedList.first()
    var count = 0

    while (current != undefined) {
      assert.equal(count, current.index)
      current = current.next
      count++
    }
  })

  it('should be addAt values and get element success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    linkedList.add(5)
    linkedList.add(6)

    var node01 = linkedList.get(3)

    assert.equal(3, node01.index)
    assert.equal(4, node01.value)

    linkedList.addAt(3, 10)

    var node02 = linkedList.get(3)

    assert.equal(3, node02.index)
    assert.equal(10, node02.value)

    assert.equal(4, node01.index)
    assert.equal(4, node01.value)
  })

  it('should be remove value and get element success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    linkedList.add(5)
    linkedList.add(6)

    var node = linkedList.get(3)

    assert.equal(3, node.index)
    assert.equal(4, node.value)

    linkedList.remove(4)

    var node = linkedList.get(3)

    assert.equal(3, node.index)
    assert.equal(5, node.value)
  })

  it('should be remove values and get element success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(2)
    linkedList.add(2)
    linkedList.add(2)
    linkedList.add(2)

    var node = linkedList.get(3)

    assert.equal(3, node.index)
    assert.equal(2, node.value)

    linkedList.remove(2)

    var node = linkedList.get(3)

    assert.equal(undefined, node)
  })

  it('should be remove values and update index element success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(2)
    linkedList.add(4)
    linkedList.add(2)

    var node01 = linkedList.get(0)
    var node02 = linkedList.get(2)
    var node03 = linkedList.get(4)

    assert.equal(0, node01.index)
    assert.equal(1, node01.value)

    assert.equal(2, node02.index)
    assert.equal(3, node02.value)

    assert.equal(4, node03.index)
    assert.equal(4, node03.value)

    linkedList.remove(2)

    assert.equal(0, node01.index)
    assert.equal(1, node01.value)

    assert.equal(1, node02.index)
    assert.equal(3, node02.value)

    assert.equal(2, node03.index)
    assert.equal(4, node03.value)
  })

  it('should be removeAt value and update index element success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(2)
    linkedList.add(4)
    linkedList.add(2)

    var node = linkedList.get(2)

    assert.equal(2, node.index)
    assert.equal(3, node.value)

    linkedList.removeAt(2)

    var node = linkedList.get(2)

    assert.equal(2, node.index)
    assert.equal(2, node.value)
  })

  it('should be add values and length success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(2)
    linkedList.add(4)
    linkedList.add(2)

    assert.equal(6, linkedList.length)
  })

  it('should be add values and empty success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(2)
    linkedList.add(4)
    linkedList.add(2)

    while (!linkedList.empty) {
      linkedList.removeAt(0)
    }

    assert.equal(true, linkedList.empty)
  })

  it('should be add values and clear success', function () {
    var linkedList = new LinkedList()

    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(2)
    linkedList.add(4)
    linkedList.add(2)

    linkedList.clear()

    assert.equal(0, linkedList.length)
  })
})
