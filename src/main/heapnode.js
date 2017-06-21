function HeapNode (items, value, index) {
  BaseCollection.call(this, {
    _value: value,
    _index: index,
    _dataStore: items
  })
}

HeapNode.prototype = Object.create(BaseCollection.prototype, {

  constructor: HeapNode,

  _dataStore: {
    value: undefined,
    enumerable: true,
    configurable: false,
    writable: true
  },

  _value: {
    value: undefined,
    enumerable: false,
    configurable: false,
    writable: true
  },

  _index: {
    value: undefined,
    enumerable: false,
    configurable: false,
    writable: true
  },

  index: {
    get: function () {
      return this._index
    },
    configurable: false
  },

  parent: {
    get: function () {
      return this._dataStore[(this._index - 1) / 2 >> 0]
    },
    configurable: false
  },

  left: {
    get: function () {
      return this._dataStore[(this._index * 2) + 1]
    },
    configurable: false
  },

  right: {
    get: function () {
      return this._dataStore[(this._index * 2) + 2]
    },
    configurable: false
  },

  hasParent: {
    get: function () {
      return this._index != 0 && this.parent != undefined
    },
    configurable: false
  },

  hasLeft: {
    get: function () {
      return this.left != undefined
    },
    configurable: false
  },

  hasRight: {
    get: function () {
      return this.right != undefined
    },
    configurable: false
  },

  value: {
    get: function () {
      return this._value
    },
    set: function (value) {
      this._value = value
    },
    configurable: false
  }
})
