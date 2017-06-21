function HashSet(compare) {
  BaseCollection.call(this, {
    _dataStore : {},
    _size : 0,
    _keys : []
  })
}

HashSet.prototype = Object.create(BaseCollection.prototype, {

  constructor : HashSet,

  _dataStore : {
    value : undefined,
    enumerable : true,
    configurable : false,
    writable : true
  },

  _size : {
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

  _hashCode : {
    value : function (value) {
      var hash = 1;

      switch (typeof (value)) {
      case "object":
        if (value == null) {
          hash ^= 13;
        } else {
          for ( var property in value) {
            hash ^= 17 + this._hashCode(value[property]);
          }
        }
        break;
      case "boolean":
        hash ^= 19 + this._hashCode(JSON.stringify(value));
        break;
      case "number":
        hash ^= 23 + this._hashCode(JSON.stringify(value));
        break;
      case "string":
        for (var i = 0; i < value.length; i++) {
          hash ^= 29 + value.charCodeAt(i);
        }
        break;
      }

      return JSON.stringify(hash >> 0);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },
  
  iterator : {
    value : function () {
      return new HashSetIterator(this);
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

  keys : {
    value : function () {
      return this._keys;
    },
    enumerable : true,
    configurable : false,
    writable : false
  },
  
  map : {
    value : function () {
      var sope = this;
      var map = {};
      
      this._keys.forEach(function(key, index){
        map[key] = sope._dataStore[key]; 
      })
      
      return map;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },
  
  add : {
    value : function (value) {     
      if (!this.contains(value)) {
        var key = this._hashCode(value);
        this._dataStore[key] = value;
        this._keys.push(key);
        this._size++;
      } else {
        throw "KeyAlredyExistsException";
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  remove : {
    value : function (value) {
      if (this.contains(value)) {
        var key = this._hashCode(value);
        
        var index = this._keys.indexOf(key);
        
        if(index != -1) {
          this._keys.splice(index, 1);
        }
        
        delete this._dataStore[key];
        
        this._size--;
      } else {
        throw "KeyOutOfBoundsException";
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  contains : {
    value : function (value) {
      var key = this._hashCode(value);
      return key in this._dataStore;
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
      this._dataStore = {};
      this._size = 0;
      this._keys = [];
    },
    configurable : false
  }
});