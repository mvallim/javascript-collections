function LinkedList () {
  BaseObject.call(this, {
    _dataStore: []
  })
}

LinkedList.prototype = Object.create(BaseObject.prototype, {

  constructor: LinkedList,

  _dataStore: {
    value: undefined,
    enumerable: true,
    configurable: false,
    writable: true
  },

  first: {
    value: function () {
      return this._dataStore[0]
    },
    enumerable: false,
    configurable: false,
    writable: false
  },

  last: {
    value: function () {
      return this._dataStore[this.length - 1]
    },
    enumerable: false,
    configurable: false,
    writable: false
  },

  add: {
    value: function (value) {
      var node = new LinkedListNode(this._dataStore, value, this.length)

      this._dataStore.push(node)
    },
    enumerable: false,
    configurable: false,
    writable: false
  },

  addAt: {
    value: function (index, value) {
      var nodes = this._dataStore.filter(function (node) {
        return node._index >= index
      })

      nodes.forEach(function (node) {
        node._index++
      })

      var node = new LinkedListNode(this._dataStore, value, index)

      this._dataStore.splice(index, 0, node)
    },
    enumerable: false,
    configurable: false,
    writable: false
  },

  remove: {
    value: function (value) {
      this._dataStore = this._dataStore.filter(function (node) {
        return node.value != value
      })

      var idx = 0

      this._dataStore.forEach(function (node) {
        node._index = idx++
      })
    },
    enumerable: false,
    configurable: false,
    writable: false
  },

  removeAt: {
    value: function (index) {
      var nodes = this._dataStore.filter(function (node) {
        return node._index > index
      })

      this._dataStore.splice(index, 1)

      nodes.forEach(function (node) {
        node._index--
      })
    },
    enumerable: false,
    configurable: false,
    writable: false
  },

  get: {
    value: function (index) {
      return this._dataStore[index]
    },
    enumerable: false,
    configurable: false,
    writable: false
  },

  length: {
    get: function () {
      return this._dataStore.length
    },
    configurable: false
  },

  empty: {
    get: function () {
      return this._dataStore.length == 0
    },
    configurable: false
  },

  clear: {
    value: function () {
      this._dataStore = []
    },
    configurable: false
  }
})
