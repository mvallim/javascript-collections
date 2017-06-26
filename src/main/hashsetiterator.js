/**
 * @classdesc An iterator over a HashSet collection.
 * @constructor
 * @augments BaseIterator
 * @param {HashSet}
 *          hashset
 */
var HashSetIterator = function HashSetIterator(hashset) {
  BaseIterator.call(this, {
    _hashset : hashset,
    _keys : hashset.keys(),
    _entries : hashset.entries(),
    _index : 0
  });
}

HashSetIterator.prototype = Object.create(BaseIterator.prototype, {

  constructor : HashSetIterator,

  /**
   * @private
   */
  _hashset : {
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
  _entries : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  /**
   * @private
   */
  _index : {
    value : undefined,
    enumerable : false,
    configurable : false,
    writable : true
  },

  /**
   * 
   * @method
   * @inheritdoc
   * @memberof HashSetIterator.prototype
   * @return {bool}
   */
  hasNext : {
    value : function () {
      return !(this._index == this._keys.length);
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @inheritdoc
   * @memberof HashSetIterator.prototype
   * @return {Value}
   */
  next : {
    value : function () {
      var next = this._entries[this._keys[this._index]];
      this._index++;
      return next;
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @inheritdoc
   * @memberof HashSetIterator.prototype
   * @return {Number}
   */
  nextIndex : {
    value : function () {
      return this._index;
    },
    enumerable : false,
    configurable : false,
    writable : false
  }
});
