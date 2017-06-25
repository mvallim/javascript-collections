describe('A test suite BaseCollection', function () {
  beforeEach(function () {
  })
  afterEach(function () {
  })

  it('should be throw in unimplemented methods success', function () {
    var baseCollection = new BaseCollection();
    
    expect(function() {
      baseCollection.length;
    }).throw();

    expect(function() {
      baseCollection.empty;
    }).throw();

    expect(function() {
      baseCollection.clear();
    }).throw();

  });
})
