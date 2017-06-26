describe('A test suite BaseCollection', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('should be throw in unimplemented methods success', function () {
    var baseIterator = new BaseIterator();
    
    expect(function() {
      baseIterator.hasNext();
    }).throw();

    expect(function() {
      baseIterator.next();
    }).throw();

    expect(function() {
      baseIterator.nextIndex();
    }).throw();

  });
})
