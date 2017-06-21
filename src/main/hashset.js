function HashSet(compare) {
  BaseCollection.call(this, {
    _dataStore : {},
    _size : 0,
    _keys : [],
    _values : []
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

  _values : {
    value : undefined,
    enumerable : true,
    configurable : false,
    writable : true
  },

  hashCode : {
    value : function (value) {
      const types = {
        OBJECT : "object",
        BOOLEAN : "boolean",
        NUMBER : "number",
        STRING : "string"
      }

      const prime = 1000000007;
      var hash = 1;
      var calculate = 0;

      switch (typeof (value))
        {
        case types.OBJECT:
          if (value == null) {
            calculate = 0;
          } else {
            for ( var property in value) {
              calculate = this.hashCode(value[property]);
            }
          }
          break;
        case types.BOOLEAN:
          calculate = this.hashCode(JSON.stringify(value));
          break;
        case types.NUMBER:
          calculate = this.hashCode(JSON.stringify(value));
          break;
        case types.STRING:
          for (var i = 0; i < value.length; i++) {
            calculate += value.charCodeAt(i);
          }
          break;
        }
      
      return (hash * prime) + (calculate ^ (calculate >>> 52));
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

  values : {
    value : function () {
      return this._values;
    },
    enumerable : true,
    configurable : false,
    writable : false
  },

  entries : {
    value : function () {
      var sope = this;
      var entries = {};

      this._keys.forEach(function (key, index) {
        entries[key] = sope._dataStore[key];
      });
      
      return entries;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  add : {
    value : function (value) {
      var key = this.hashCode(value);

      if (this.containsKey(key)) {
        return false;
      }

      this._dataStore[key] = value;
      this._keys.push(key);
      this._values.push(value);
      this._size++;

      return this.containsKey(key);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  remove : {
    value : function (value) {
      var key = this.hashCode(value);

      if (!this.containsKey(key)) {
        return false;
      }

      var index = this._keys.indexOf(key);

      if (index >= 0) {
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this._dataStore[key];
        this._size--;
      }

      return !this.containsKey(key);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  contains : {
    value : function (value) {
      var key = this.hashCode(value);
      return key in this._dataStore;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  containsKey : {
    value : function (key) {
      return key in this._dataStore;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  union : {
    value : function (hashset) {
      throw "NotImplementedException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  intersect : {
    value : function (hashset) {
      throw "NotImplementedException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  except : {
    value : function (hashset) {
      throw "NotImplementedException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  compare : {
    value : function (a, b) {
      throw "NotImplementedException";
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
      this._values = [];
    },
    configurable : false
  }
});