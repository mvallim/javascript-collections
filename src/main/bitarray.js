var BaseCollection = require('./commons/basecollection');

/**
 * @classdesc UNDERDEVELOPMENT
 * 
 * @constructor
 * @requires HashSetIterator
 * @augments BaseCollection
 * @param {Number}
 *          size
 */
var BitArray = function BitArray(size) {
  BaseCollection.call(this, {
    _size : size
  });
};

BitArray.prototype = Object.create(BaseCollection.prototype, {

  constructor : BitArray,

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
   * @method
   * @memberof BitArray.prototype
   * @param {Number}
   *          index
   * @param {Boolean}
   *          bool
   * @return {string}
   */
  set : {
    value : function (index, bool) {
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
  get : {
    value : function (index) {
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
    },
    enumerable : false,
    configurable : false,
    writable : false,
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