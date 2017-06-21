function LinkedList() {
  BaseObject.call(this, {
    _size : 0
  });
}

LinkedList.prototype = Object.create(BaseObject.prototype, {

  constructor : LinkedList,

  _head : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  _tail : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  iterator : {
    value : function () {
      return new LinkedListIterator(this);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  forEach : {
    value : function (callback) {
      var iterator = this.iterator();
      
      while (iterator.hasNext()) {
        var index = iterator.nextIndex();
        var node = iterator.next();
        if (typeof callback === 'function')
          callback(index, node, this);
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },
  
  first : {
    value : function () {
      return this._head;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  last : {
    value : function () {
      return this._tail;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  add : {
    value : function (value) {
      var node = new LinkedListNode(value);

      if (this._head == undefined) {
        this._head = node;
        this._tail = node;
      } else {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }

      this._size++;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  addAt : {
    value : function (index, value) {
      var node = new LinkedListNode(value);

      if (index < 0 || index > this._size) {
        throw "IndexOutOfBoundsException";
      } else if (index == 0) {
        node.next = this._head;
        this._head.prev = node;
        this._head = node;
      } else if (index == this._size - 1) {
        node.prev = this._tail;
        this._tail.next = node;
        this._tail = node;
      } else {
        var current = this._head;

        var i = index;

        while (i > 0) {
          current = current.next;
          i--;
        }

        var prev = current.prev;
        prev.next = node;
        node.prev = prev;
        node.next = current;
        current.prev = node;
      }

      this._size++;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  remove : {
    value : function (value) {
      var current = this._head;

      while (current != undefined) {
        if (current.value == value) {
          var prev = current.prev;
          var next = current.next;

          if (prev != undefined) {
            prev.next = current.next;
          }

          if (next != undefined) {
            next.prev = current.prev;
          }

          this._size--;

          break;
        }
        current = current.next;
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  removeAt : {
    value : function (index) {
      if (index < 0 || index >= this._size) {
        throw "IndexOutOfBoundsException";
      } else if (index == 0) {
        this._head = this._head.next;

        if (this._head != undefined) {
          this._head.prev = undefined;
        }
      } else if (index == this._size - 1) {
        this._tail = this._tail.prev;

        if (this._tail != undefined) {
          this._tail.next = undefined;
        }
      } else {
        var current = this._head;

        var i = index;

        while (i > 0) {
          current = current.next;
          i--;
        }

        var prev = current.prev;
        var next = current.next;

        prev.next = current.next;
        next.prev = current.prev;
      }

      this._size--;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  get : {
    value : function (index) {
      if (index < 0 || index >= this._size) {
        throw "IndexOutOfBoundsException";
      } else if (index == 0) {
        return this._head;
      } else if (index == this._size - 1) {
        return this._tail;
      } else {
        var current = this._head;

        var i = index;

        while (i > 0) {
          current = current.next;
          i--;
        }

        return current;
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  set : {
    value : function (index, value) {
      if (index < 0 || index >= this._size) {
        throw "IndexOutOfBoundsException";
      } else if (index == 0) {
        this._head.value = value;
      } else if (index == this._size - 1) {
        this._tail.value = value;
      } else {
        var current = this._head;

        var i = index;

        while (i > 0) {
          current = current.next;
          i--;
        }

        current.value = value;
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  length : {
    get : function () {
      return this._size;
    },
    configurable : false
  },

  empty : {
    get : function () {
      return this._size == 0;
    },
    configurable : false
  },

  clear : {
    value : function () {
      this._head = undefined;
      this._tail = undefined;
      this._size = 0;
    },
    configurable : false
  }
});