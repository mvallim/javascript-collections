function LinkedListIterator(linkedList) {
  BaseCollection.call(this, {
    _list : linkedList,
    _index : 0,
    _curr : linkedList.first()
  });
}

LinkedListIterator.prototype = Object.create(BaseCollection.prototype, {

  constructor : LinkedListIterator,

  _list : {
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

  _curr : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  hasNext : {
    value : function () {
      return !(this._index == this._list.length) && (this._curr != undefined);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  next : {
    value : function () {
      var current = this._curr;

      this._curr = this._curr.next;
      
      this._index++;

      return current;
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
