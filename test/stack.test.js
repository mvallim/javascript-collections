describe('A test suite Stack', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('should be push values and pop last element success', function () {
    var stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    stack.push(6)

    var pop = stack.pop()

    assert.equal(6, pop)
  })

  it('should be push values and empty stack success', function () {
    var stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    stack.push(6)

    while (!stack.empty) {
      stack.pop()
    }

    assert.equal(true, stack.empty)
  })

  it('should be push values and peek stack success', function () {
    var stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    stack.push(6)

    assert.equal(6, stack.peek())
  })

  it('should be push values and clear stack success', function () {
    var stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    stack.push(6)

    stack.clear()

    assert.equal(true, stack.empty)
  })

  it('should be push values and length stack success', function () {
    var stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)

    assert.equal(3, stack.length)
  })
})
