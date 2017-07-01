var BaseCollection = require('./commons/basecollection');

/**
 * @classdesc Stack
 *
 * @constructor
 * @augments BaseCollection
 */
var Stack = function Stack() {
  BaseCollection.call(this, {
    _dataStore: [],
  });
};

Stack.prototype = Object.create(BaseCollection.prototype, {

  constructor: Stack,

  /**
   * @private
   */
  _dataStore: {
    value: undefined,
    enumerable: true,
    configurable: false,
    writable: true,
  },

  /**
   *
   * @method
   * @memberof Stack.prototype
   * @param {value}
   *          element
   */
  push: {
    value: function(element) {
      this._dataStore.push(element);
    },
    configurable: false,
  },

  /**
   *
   * @method
   * @memberof Stack.prototype
   * @return {value}
   */
  pop: {
    value: function() {
      return this._dataStore.pop();
    },
    configurable: false,
  },

  /**
   *
   * @method
   * @memberof Stack.prototype
   * @return {value}
   */
  peek: {
    value: function() {
      return this._dataStore[this._dataStore.length - 1];
    },
    configurable: false,
  },

  /**
   * @inheritdoc
   * @memberof Stack.prototype
   */
  length: {
    get: function() {
      return this._dataStore.length;
    },
    configurable: false,
  },

  /**
   * @inheritdoc
   * @memberof Stack.prototype
   */
  empty: {
    get: function() {
      return this._dataStore.length == 0;
    },
    configurable: false,
  },

  /**
   * @inheritdoc
   * @method
   * @memberof Stack.prototype
   */
  clear: {
    value: function() {
      this._dataStore = [];
    },
    configurable: false,
  },
});
module.exports = Stack;
