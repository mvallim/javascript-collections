var BaseCollection = require('./commons/basecollection');
var ValueType = require('./commons/valuetype');
var HashSetIterator = require('./hashsetiterator');

/**
 * @classdesc Data structures of type "Set" are known to accept only single
 *            values, that is, any duplicate value inserted in a "Set" will be
 *            automatically deleted.
 * 
 * HashSet is the fastest of all, this uses HashTable and its elements are not
 * ordered, the complexity of this structure is O (1), in other words, no matter
 * how much you add, remove, remove, the execution time will always be the same.
 * And this is extremely critical in processes where we have a critical
 * situation with millions of data to be inserted into a Set. On the other hand,
 * the guarantee of continuity in the order of the inserted elements is zero,
 * ie, this type of structure is indicated if you You just need to ensure high
 * performance regardless of the order in which the elements are ordered.
 * 
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
  });
};

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
      var prime = 1000000007;
      var hash = 1;
      var calculate = 0;

      switch (typeof (value))
        {
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
   * Return a hashcode of the value
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {Value}
   *          value
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

  /**
   * Returns an iterator over the elements in this list in proper sequence.
   * 
   * @method
   * @memberof HashSet.prototype
   * @return {HashSetIterator}
   */
  iterator : {
    value : function () {
      return new HashSetIterator(this);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * The forEach() method calls a provided function once for each element in an
   * collection.
   * 
   * @method
   * @memberof HashSet.prototype
   */
  forEach : {
    value : function (callback) {
      var iterator = this.iterator();

      while (iterator.hasNext()) {
        var index = iterator.nextIndex();
        var node = iterator.next();
        if (typeof (callback) === ValueType.FUNCTION) {
          callback(index, node, this);
        }
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * Return all keys of this HashSet
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
   * Return all values of this HashSet
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
   * Return a entry table (key:value) of HashSet
   * 
   * @method
   * @memberof HashSet.prototype
   * @return {Object}
   */
  entries : {
    value : function () {
      var sope = this;
      var entries = {};

      this._keys.forEach(function (key) {
        entries[key] = sope._dataStore[key];
      });

      return entries;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * Appends the specified element.
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {Value}
   *          value
   * @return {bool}
   * 
   * @playground 
   * var HashSet = require("javascript-collections").HashSet;
   * 
   * var hashset = new HashSet();
   * 
   * hashset.add(1);
   * hashset.add(2);
   *  
   * hashset.forEach(function(index, item){ 
   *   console.log(item); 
   * }); 
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
   * Removes the specified element from this collection.
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {Value}
   *          value
   * @return {bool}
   * 
   * @playground 
   * var HashSet = require("javascript-collections").HashSet;
   * 
   * var hashset = new HashSet();
   * 
   * hashset.add(1);
   * hashset.add(2);
   * hashset.add(3);
   *  
   * hashset.remove(3);
   *  
   * hashset.forEach(function(index, item){ 
   *   console.log(item); 
   * }); 
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
   * Returns true if this collection contains the specified element.
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {Value}
   *          value
   * @return {bool}
   * 
   * @playground 
   * var HashSet = require("javascript-collections").HashSet;
   * 
   * var hashset = new HashSet();
   * 
   * hashset.add(1);
   * hashset.add(2);
   * hashset.add(3);
   *  
   * console.log(hashset.contains(2));
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
   * Returns true if this collection contains the specified key.
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {string}
   *          key
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
   * The union returns new HashSet with from both tables HashSets without
   * duplicate values.
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {HashSet}
   *          hashset
   * @return {HashSet}
   * 
   * @playground 
   * var HashSet = require("javascript-collections").HashSet;
   * 
   * var hashset01 = new HashSet();
   * var hashset02 = new HashSet();
   * 
   * hashset01.add(1);
   * hashset01.add(2);
   * 
   * hashset02.add(3);
   * hashset02.add(4);
   * 
   * var union = hashset01.union(hashset02);
   *  
   * union.forEach(function(index, item){ 
   *   console.log(item); 
   * });
   */
  union : {
    value : function (hashset) {
      if (hashset instanceof HashSet) {
        var union = new HashSet();

        var entriesA = this.entries();
        var entriesB = hashset.entries();

        this.keys().forEach(function (key) {
          union.add(entriesA[key]);
        });

        hashset.keys().forEach(function (key) {
          if (!union.containsKey(key)) {
            union.add(entriesB[key]);
          }
        });

        return union;
      }

      throw 'IncompatibleObjectException';
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * The intersect returns new HashSet with from both tables HashSets with only
   * values, present in two sets.
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {HashSet}
   *          hashset
   * @return {HashSet}
   * 
   * @playground 
   * var HashSet = require("javascript-collections").HashSet;
   * 
   * var hashset01 = new HashSet();
   * var hashset02 = new HashSet();
   * 
   * hashset01.add(1);
   * hashset01.add(2);
   * 
   * hashset02.add(2);
   * hashset02.add(4);
   * 
   * var intersect = hashset01.intersect(hashset02);
   *  
   * intersect.forEach(function(index, item){ 
   *   console.log(item); 
   * }); 
   */
  intersect : {
    value : function (hashset) {
      if (hashset instanceof HashSet) {
        var scope = this;
        var intersect = new HashSet();

        scope.keys().forEach(function (key) {
          if (hashset.containsKey(key)) {
            intersect.add(scope._dataStore[key]);
          }
        });

        return intersect;
      }

      throw 'IncompatibleObjectException';
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * The except returns new HashSet with from both tables HashSets without
   * values, present in second set.
   * 
   * @method
   * @memberof HashSet.prototype
   * @param {HashSet}
   *          hashset
   * @return {HashSet}
   * 
   * @playground 
   * var HashSet = require("javascript-collections").HashSet
   * 
   * var hashset01 = new HashSet();
   * var hashset02 = new HashSet();
   * 
   * hashset01.add(1);
   * hashset01.add(2);
   * 
   * hashset02.add(2);
   * hashset02.add(4);
   * 
   * var except = hashset01.except(hashset02);
   *  
   * except.forEach(function(index, item){ 
   *   console.log(item); 
   * });  
   */
  except : {
    value : function (hashset) {
      if (hashset instanceof HashSet) {
        var scope = this;
        var except = new HashSet();

        scope.keys().forEach(function (key) {
          if (!hashset.containsKey(key)) {
            except.add(scope._dataStore[key]);
          }
        });

        return except;
      }

      throw 'IncompatibleObjectException';
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
    configurable : false,
  },

  /**
   * @inheritdoc
   * @memberof HashSet.prototype
   */
  empty : {
    get : function () {
      return this._size == 0;
    },
    configurable : false,
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
    configurable : false,
  }
  
});

module.exports = HashSet;
