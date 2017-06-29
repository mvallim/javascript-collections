var BaseCollection = require('./commons/basecollection');

/**
 * @classdesc Queue
 *
 * @constructor
 * @augments BaseCollection
 */
var Queue = function Queue() {
  BaseCollection.call(this, {
    _dataStore: [],
  });
};

Queue.prototype = Object.create(BaseCollection.prototype, {

  constructor: Queue,

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
   * @memberof Queue.prototype
   */
  enqueue: {
    value: function(element) {
      this._dataStore.push(element);
    },
    configurable: false,
  },

  /**
   *
   * @method
   * @memberof Queue.prototype
   * @return {value}
   */
  dequeue: {
    value: function() {
      return this._dataStore.shift();
    },
    configurable: false,
  },

  /**
   *
   * @method
   * @memberof Queue.prototype
   * @return {value}
   */
  front: {
    value: function() {
      return this._dataStore[0];
    },
    configurable: false,
  },

  /**
   *
   * @method
   * @memberof Queue.prototype
   * @return {value}
   */
  back: {
    value: function() {
      return this._dataStore[this._dataStore.length - 1];
    },
    configurable: false,
  },

  /**
   * @inheritdoc
   * @memberof Queue.prototype
   */
  length: {
    get: function() {
      return this._dataStore.length;
    },
    configurable: false,
  },

  /**
   * @inheritdoc
   * @memberof Queue.prototype
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
   * @memberof Queue.prototype
   */
  clear: {
    value: function() {
      this._dataStore = [];
    },
    configurable: false,
  },
});

module.exports = Queue;
