//TODO: Change this implementation to a meaning BaseCollection
function BaseCollection (cfg) {
  BaseCollection.prototype.init.call(this, cfg || {})
}

BaseCollection.prototype = Object.create(null, {

  constructor: BaseCollection,

  init: {
    value: function (cfg) {
      this.apply(this, cfg)
      this.addListeners()
    },
    enumerable: false,
    configurable: false,
    writable: true
  },

  apply: {
    value: function (obj, properties) {
      for (var property in properties) {
        obj[property] = properties[property]
      }
    },
    enumerable: false,
    configurable: false,
    writable: false
  },

  addListeners: {
    value: function () {
    },
    enumerable: false,
    configurable: false,
    writable: false
  }
})
