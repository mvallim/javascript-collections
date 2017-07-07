var BaseObject = require('./commons/baseobject');

/**
 * @classdesc A bit array is a mapping from some domain (almost always a range
 *            of integers) to values in the set {0, 1}. The values can be
 *            interpreted as dark/light, absent/present, locked/unlocked,
 *            valid/invalid, etcetera. The point is that there are only two
 *            possible values, so they can be stored in one bit. As with other
 *            arrays, the access to a single bit can be managed by applying an
 *            index to the array. Assuming its size (or length) to be n bits,
 *            the array can be used to specify a subset of the domain (e.g. {0,
 *            1, 2, ..., n−1}), where a 1-bit indicates the presence and a 0-bit
 *            the absence of a number in the set. This set data structure uses
 *            about n/w words of space, where w is the number of bits in each
 *            machine word. Whether the least significant bit (of the word) or
 *            the most significant bit indicates the smallest-index number is
 *            largely irrelevant, but the former tends to be preferred (on
 *            little-endian machines).
 * 
 * @see {@link https://en.wikipedia.org/wiki/Bit_array|Wikipedia}
 * 
 * @constructor
 * 
 * @augments BaseObject
 * 
 * @param {Number}
 *          size
 */
var BitArray = function BitArray(size) {
  BaseObject.call(this, {
    _size : size,
    _dataStore : []
  });

  this.initDataStore();
};

BitArray.prototype = Object.create(BaseObject.prototype, {

  constructor : BitArray,

  /**
   * @private
   */
  _dataStore : {
    value : undefined,
    enumerable : false,
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
  _ONES : {
    get : function () {
      return (Math.pow(2, this._WORD) - 1) >>> 0;
    },
    configurable : false
  },

  /**
   * @private
   */
  _ZERO : {
    get : function () {
      return 0 >>> 0;
    },
    configurable : false
  },

  /**
   * @private
   */
  _ONE : {
    get : function () {
      return 1 >>> 0;
    },
    configurable : false
  },

  /**
   * @private
   */
  _WORD : {
    get : function () {
      return 32 >>> 0;
    },
    configurable : false
  },

  /**
   * @method
   * @private
   * @memberof BitArray.prototype
   */
  initDataStore : {
    value : function () {
      for (var i = 0; i < this.chunks; i++) {
        this._dataStore.push(this._ZERO);
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   * @param {Number}
   *          index
   */
  set : {
    value : function (index) {
      var chunk = (index / this._WORD) >>> 0;

      var position = (index % this._WORD) >>> 0;

      var mask = this._ONE << position;

      this._dataStore[chunk] = this._dataStore[chunk] | mask;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   * @param {Number}
   *          index
   */
  unset : {
    value : function (index) {
      var chunk = (index / this._WORD) >>> 0;

      var position = (index % this._WORD) >>> 0;

      var mask = this._ONE << position;

      mask = ~mask;

      this._dataStore[chunk] = this._dataStore[chunk] & mask;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   * @param {Boolean}
   *          bool
   */
  setAll : {
    value : function (bool) {
      for (var i = 0; i < this.chunks; i++) {
        this._dataStore[i] = bool ? this._ONES : this._ZERO;
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   * @param {Number}
   *          index
   * @return {Boolean}
   */
  get : {
    value : function (index) {
      var chunk = (index / this._WORD) >>> 0;

      var position = (index % this._WORD) >>> 0;

      var mask = this._ONE << position;

      if (this._dataStore[chunk] & mask) {
        return true;
      } else {
        return false;
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   */
  not : {
    value : function () {
      for (var i = 0; i < this.chunks; i++) {
        this._dataStore[i] = ~this._dataStore[i];
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   * @param {BitArray}
   *          bitarray
   * @return {BitArray}
   */
  or : {
    value : function (bitarray) {
      var high = this;
      var low = bitarray;

      if (bitarray.length > this.length) {
        low = this;
        high = bitarray;
      }

      var result = new BitArray(high.length);

      for (var i = low.length - 1; i >= 0; i--) {
        if (low.get(i)) {
          result.set(high.length - 1 - (low.length - 1 - i));
        }
      }

      for (var i = 0; i < high.chunks; i++) {
        result._dataStore[i] = (result._dataStore[i] | high._dataStore[i]) >>> 0;
      }

      return result;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   * @param {BitArray}
   *          bitarray
   * @return {BitArray}
   */
  and : {
    value : function (bitarray) {
      var high = this;
      var low = bitarray;

      if (bitarray.length > this.length) {
        low = this;
        high = bitarray;
      }

      var result = new BitArray(high.length);

      for (var i = low.length - 1; i >= 0; i--) {
        if (low.get(i)) {
          result.set(high.length - 1 - (low.length - 1 - i));
        }
      }

      for (var i = 0; i < high.chunks; i++) {
        result._dataStore[i] = (result._dataStore[i] & high._dataStore[i]) >>> 0;
      }

      return result;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   * @param {BitArray}
   *          bitarray
   * @return {BitArray}
   */
  xor : {
    value : function (bitarray) {
      var high = this;
      var low = bitarray;

      if (bitarray.length > this.length) {
        low = this;
        high = bitarray;
      }

      var result = new BitArray(high.length);

      for (var i = low.length - 1; i >= 0; i--) {
        if (low.get(i)) {
          result.set(high.length - 1 - (low.length - 1 - i));
        }
      }

      for (var i = 0; i < high.chunks; i++) {
        result._dataStore[i] = (result._dataStore[i] ^ high._dataStore[i]) >>> 0;
      }

      return result;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * @method
   * @memberof BitArray.prototype
   * @return {Number}
   */
  chunks : {
    get : function () {
      if (this.length % this._WORD == 0) {
        return ((this.length / this._WORD) >>> 0);
      } else {
        return ((this.length / this._WORD) >>> 0) + 1;
      }
    },
    configurable : false
  },

  /**
   * @inheritdoc
   * @memberof BitArray.prototype
   */
  length : {
    get : function () {
      return this._size;
    },
    configurable : false
  }

});

module.exports = BitArray;
