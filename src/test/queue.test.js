describe('A test suite Queue', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('should be enqueue values and dequeue success', function () {
    var queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.enqueue(6)

    var dequeue = queue.dequeue()

    assert.equal(1, dequeue)
  })

  it('should be enqueue values and empty queue success', function () {
    var queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.enqueue(6)

    while (!queue.empty) {
      queue.dequeue()
    }

    assert.equal(true, queue.empty)
  })

  it('should be enqueue values and get front success', function () {
    var queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.enqueue(6)

    var front = queue.front()

    assert.equal(1, front)
  })

  it('should be enqueue values and get back success', function () {
    var queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.enqueue(6)

    var back = queue.back()

    assert.equal(6, back)
  })

  it('should be push values and clear stack success', function () {
    var queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.enqueue(6)

    queue.clear()

    assert.equal(true, queue.empty)
  })

  it('should be push values and length stack success', function () {
    var queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    assert.equal(3, queue.length)
  })
})
