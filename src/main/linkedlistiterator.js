var BaseIterator = require('./commons/baseiterator');

/**
 * @classdesc An iterator over a LinkedList collection.
 * @constructor
 * @augments BaseIterator
 * @param {LinkedList}
 *          linkedList
 */
var LinkedListIterator = function LinkedListIterator(linkedList) {
  BaseIterator.call(this, {
    _list: linkedList,
    _index: 0,
    _curr: linkedList.first(),
  });
};

LinkedListIterator.prototype = Object.create(BaseIterator.prototype, {

  constructor: LinkedListIterator,

  /**
   * @private
   */
  _list: {
    value: undefined,
    enumerable: false,
    configurable: false,
    writable: true,
  },

  /**
   * @private
   */
  _index: {
    value: undefined,
    enumerable: false,
    configurable: false,
    writable: true,
  },

  /**
   * @private
   */
  _curr: {
    value: undefined,
    enumerable: false,
    configurable: false,
    writable: true,
  },

  /**
   *
   * @method
   * @inheritdoc
   * @memberof LinkedListIterator.prototype
   * @return {bool}
   */
  hasNext: {
    value: function() {
      return !(this._index == this._list.length) && (this._curr != undefined);
    },
    enumerable: false,
    configurable: false,
    writable: false,
  },

  /**
   *
   * @method
   * @inheritdoc
   * @memberof LinkedListIterator.prototype
   * @return {LinkedListNode}
   */
  next: {
    value: function() {
      var current = this._curr;

      this._curr = this._curr.next;

      this._index++;

      return current;
    },
    enumerable: false,
    configurable: false,
    writable: false,
  },

  /**
   *
   * @method
   * @inheritdoc
   * @memberof LinkedListIterator.prototype
   * @return {Number}
   */
  nextIndex: {
    value: function() {
      return this._index;
    },
    enumerable: false,
    configurable: false,
    writable: false,
  },
});

module.exports = LinkedListIterator;
