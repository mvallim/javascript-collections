function LinkedListIterator(linkedList) {
  BaseObject.call(this, {
    _list : linkedList,
    _index : 0,
    _curr : linkedList.first(),
    _next : linkedList.first().next
  });
}

LinkedListIterator.prototype = Object.create(BaseObject.prototype, {

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

  _next : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  hasNext : {
    value : function () {
      return !this._index == this._list.length;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  next : {
    value : function () {
      this._index++;
      this._curr = this._next;
      this._next = this._curr.next;
      return this.curr;
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