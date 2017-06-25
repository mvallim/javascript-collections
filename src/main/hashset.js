/**
 * @classdesc HashSet
 * @constructor
 * @requires HashSetIterator
 * @augments BaseCollection
 * @param {function}
 *          hashCode A function to generate hashcode of objects in HashSet
 */
var HashSet = function HashSet(hashCode) {
  BaseCollection.call(this, {
    _dataStore : {},
    _size : 0,
    _keys : [],
    _values : [],
    _hashCode : hashCode
  })
}

HashSet.prototype = Object.create(BaseCollection.prototype, {

  constructor : HashSet,

  /**
   * @private
   */
  _dataStore : {
    value : undefined,
    enumerable : true,
    configurable : false,
    writable : true
  },

  /**
   * @private
   */
  _size : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  /**
   * @private
   */
  _keys : {
    value : undefined,
    enumerable : true,
    configurable : false,
    writable : true
  },

  /**
   * @private
   */
  _values : {
    value : undefined,
    enumerable : true,
    configurable : false,
    writable : true
  },

  /**
   * @private
   */
  _hashCode : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  /**
   * @private
   */
  _defaultHashCode : {
    value : function (value) {
      const prime = 1000000007;
      var hash = 1;
      var calculate = 0;

      switch (typeof (value)) {
        case ValueType.OBJECT:
          if (value == null) {
            calculate = 0;
          } else {
            for ( var property in value) {
              calculate = this.hashCode(value[property]);
            }
          }
          break;
        case ValueType.BOOLEAN:
          calculate = this.hashCode(JSON.stringify(value));
          break;
        case ValueType.NUMBER:
          calculate = this.hashCode(JSON.stringify(value));
          break;
        case ValueType.STRING:
          for (var i = 0; i < value.length; i++) {
            calculate += value.charCodeAt(i);
          }
          break;
      }

      return (hash * prime) + (calculate ^ (calculate >>> 26));
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {Value} value
   * @return {string}
   */ 
  hashCode : {
    value : function (value) {
      var hashCodeFunction = this._hashCode || this._defaultHashCode;
      return hashCodeFunction.call(this, value);
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
        if (typeof (callback) === ValueType.FUNCTION)
          callback(index, node, this);
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @return {Array}
   */ 
  keys : {
    value : function () {
      return this._keys;
    },
    enumerable : true,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @return {Array}
   */ 
  values : {
    value : function () {
      return this._values;
    },
    enumerable : true,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @return {Object}
   */ 
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

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {Value} value
   * @return {bool}
   */ 
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

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {Value} value
   * @return {bool}
   */ 
  remove : {
    value : function (value) {
      var key = this.hashCode(value);

      if (this.containsKey(key)) {
        var index = this._keys.indexOf(key);

        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this._dataStore[key];
        this._size--;

        return true;
      }

      return false;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {Value} value
   * @return {bool}
   */ 
  contains : {
    value : function (value) {
      var key = this.hashCode(value);
      return this.containsKey(key);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {string} key
   * @return {bool}
   */ 
  containsKey : {
    value : function (key) {
      return key in this._dataStore;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {HashSet} hashset
   * @return {HashSet}
   */ 
  union : {
    value : function (hashset) {
      if (hashset instanceof HashSet) {
        var union = new HashSet();

        var entriesA = this.entries();
        var entriesB = hashset.entries();

        this.keys().forEach(function (key, index) {
          union.add(entriesA[key]);
        });

        hashset.keys().forEach(function (key, index) {
          if (!union.containsKey(key)) {
            union.add(entriesB[key]);
          }
        });

        return union;
      }

      throw "IncompatibleObjectException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {HashSet} hashset
   * @return {HashSet}
   */ 
  intersect : {
    value : function (hashset) {
      if (hashset instanceof HashSet) {
        var scope = this;
        var intersect = new HashSet();

        scope.keys().forEach(function (key, index) {
          if (hashset.containsKey(key)) {
            intersect.add(scope._dataStore[key]);
          }
        });

        return intersect;
      }

      throw "IncompatibleObjectException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {HashSet} hashset
   * @return {HashSet}
   */ 
  except : {
    value : function (hashset) {
      if (hashset instanceof HashSet) {
        var scope = this;
        var except = new HashSet();

        scope.keys().forEach(function (key, index) {
          if (!hashset.containsKey(key)) {
            except.add(scope._dataStore[key]);
          }
        });

        return except;
      }

      throw "IncompatibleObjectException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @inheritdoc
   * @memberof HashSet.prototype
   */
  length : {
    get : function () {
      return this._size;
    },
    configurable : false
  },

  /**
   * @inheritdoc
   * @memberof HashSet.prototype
   */
  empty : {
    get : function () {
      return this._size == 0;
    },
    configurable : false
  },

  /**
   * @inheritdoc
   * @method
   * @memberof HashSet.prototype
   */
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