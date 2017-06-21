//TODO: Change this implementation to BaseCollection
function BaseObject (cfg) {
  BaseObject.prototype.init.call(this, cfg || {})
}

BaseObject.prototype = Object.create(null, {

  constructor: BaseObject,

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
