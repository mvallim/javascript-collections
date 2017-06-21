function LinkedListNode(value) {
  BaseObject.call(this, {
    _value : value
  });
}

LinkedListNode.prototype = Object.create(BaseObject.prototype, {

  constructor : LinkedListNode,

  _value : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  _next : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  _prev : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  value : {
    get : function () {
      return this._value;
    },
    set : function (value) {
      this._value = value;
    },
    configurable : false
  },

  next : {
    get : function () {
      return this._next;
    },
    set : function (node) {
      this._next = node;
    },    
    configurable : false
  },

  prev : {
    get : function () {
      return this._prev;
    },
    set : function (node) {
      this._prev = node;
    },
    configurable : false
  }
});