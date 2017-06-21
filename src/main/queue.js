function Queue () {
  BaseObject.call(this, {
    _dataStore: []
  })
}

Queue.prototype = Object.create(BaseObject.prototype, {

  constructor: Queue,

  _dataStore: {
    value: undefined,
    enumerable: true,
    configurable: false,
    writable: true
  },

  enqueue: {
    value: function (element) {
      this._dataStore.push(element)
    },
    configurable: false
  },

  dequeue: {
    value: function () {
      return this._dataStore.shift()
    },
    configurable: false
  },

  front: {
    value: function () {
      return this._dataStore[0]
    },
    configurable: false
  },

  back: {
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
