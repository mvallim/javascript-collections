var HashSetIterator = function HashSetIterator(hashset) {
  BaseCollection.call(this, {
    _hashset : hashset,
    _keys : hashset.keys(),
    _entries : hashset.entries(),
    _index : 0
  });
}

HashSetIterator.prototype = Object.create(BaseCollection.prototype, {

  constructor : HashSetIterator,

  _hashset : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  _keys : {
    value : undefined,
    enumerable : true,
    configurable : false,
    writable : true
  },

  _entries : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  _index : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  hasNext : {
    value : function () {
      return !(this._index == this._keys.length);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  next : {
    value : function () {
      var next = this._entries[this._keys[this._index]];
      this._index++;
      return next;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  nextIndex : {
    value : function () {
      return this._index;
    },
    enumerable : false,
    configurable : false,
    writable : false
  }
});
