function LinkedListNode (dataStore, value, index) {
  BaseObject.call(this, {
    _dataStore: dataStore,
    _value: value,
    _index: index
  })
}

LinkedListNode.prototype = Object.create(BaseObject.prototype, {

  constructor: LinkedListNode,

  _index: {
    value: undefined,
    enumerable: false,
    configurable: false,
    writable: true
  },

  _value: {
    value: undefined,
    enumerable: false,
    configurable: false,
    writable: true
  },

  _dataStore: {
    value: undefined,
    enumerable: true,
    configurable: false,
    writable: true
  },

  value: {
    get: function () {
      return this._value
    },
    set: function (value) {
      this._value = value
    },
    configurable: false
  },

  index: {
    get: function () {
      return this._index
    }
  },

  next: {
    get: function () {
      return this._dataStore[this._index + 1]
    },
    configurable: false
  },

  prev: {
    get: function () {
      return this._dataStore[this._index - 1]
    },
    configurable: false
  }
})
