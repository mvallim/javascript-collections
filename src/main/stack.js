function Stack () {
  BaseObject.call(this, {
    _dataStore: []
  })
}

Stack.prototype = Object.create(BaseObject.prototype, {

  constructor: Stack,

  _dataStore: {
    value: undefined,
    enumerable: true,
    configurable: false,
    writable: true
  },

  push: {
    value: function (element) {
      this._dataStore.push(element)
    },
    configurable: false
  },

  pop: {
    value: function () {
      return this._dataStore.pop()
    },
    configurable: false
  },

  peek: {
    value: function () {
      return this._dataStore[this._dataStore.length - 1]
    },
    configurable: false
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
