function BaseCollection (cfg) {
  BaseCollection.prototype.init.call(this, cfg || {})
}

BaseCollection.prototype = Object.create(null, {

  constructor: BaseCollection,

  init: {
    value: function (cfg) {
      this.apply(this, cfg);
    },
    enumerable: false,
    configurable: false,
    writable: true
  },

  apply: {
    value: function (obj, properties) {
      for (var property in properties) {
        obj[property] = properties[property];
      }
    },
    enumerable: false,
    configurable: false,
    writable: false
  },
  
  length : {
    get : function () {
      throw "NotImplementedException";
    },
    configurable : false
  },

  empty : {
    get : function () {
      throw "NotImplementedException";      
    },
    configurable : false
  },

  clear : {
    value : function () {
      throw "NotImplementedException";
    },
    configurable : false
  }
})
