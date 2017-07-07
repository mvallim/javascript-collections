var BaseCollection = require('./commons/basecollection');

/**
 * @classdesc UNDERDEVELOPMENT
 * 
 * @constructor
 * @augments BaseCollection
 * @param {Number}
 *          size
 */
var BitArray = function BitArray(size) {
  BaseCollection.call(this, {
    _size : size,
    _dataStore : []
  });

  this.initDataStore();
};

BitArray.prototype = Object.create(BaseCollection.prototype, {

  constructor : BitArray,

  /**
   * @method
   * @private
   * @memberof BaseObject.prototype
   */
  initDataStore : {
    value : function () {
      for (var i = 0; i < this.chunks; i++) {
        this._dataStore.push(this._ZERO);
      }
    },
    enumerable : false,
    configurable : false,
    writable : false,
  },

  /**
   * @private
   */
  _dataStore : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true,
  },

  /**
   * @private
   */
  _size : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true,
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
    writable : false,
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
    writable : false,
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
    writable : false,
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
    writable : false,
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
    writable : false,
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
    writable : false,
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
    writable : false,
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
    writable : false,
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
    configurable : false,
  },

  /**
   * @inheritdoc
   * @memberof BitArray.prototype
   */
  empty : {
    get : function () {
      return true;
    },
    configurable : false,
  },

  /**
   * @inheritdoc
   * @method
   * @memberof BitArray.prototype
   */
  clear : {
    value : function () {
      this._size = 0;
    },
    configurable : false,
  }

});

module.exports = BitArray;