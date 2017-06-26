/**
 * @classdesc The base of all classes in the collections.
 *            
 * @abstract
 * @constructor
 * @augments BaseObject
 * @param {object}
 *          cfg A configuration of you want to set
 */
var BaseCollection = function BaseCollection(cfg) {
  BaseObject.prototype.init.call(this, cfg || {})
}

BaseCollection.prototype = Object.create(BaseObject.prototype, {

  constructor : BaseCollection,

  /**
   * Returns the number of elements in this collection.
   * 
   * @abstract
   * @memberof BaseCollection.prototype
   * @return Number
   */
  length : {
    get : function () {
      throw "NotImplementedException";
    },
    configurable : false
  },

  /**
   * Returns true if this collection contains no elements
   * 
   * @abstract
   * @memberof BaseCollection.prototype
   * @return bool
   */
  empty : {
    get : function () {
      throw "NotImplementedException";
    },
    configurable : false
  },

  /**
   * Removes all of the elements from this collection.
   * 
   * @method
   * @abstract
   * @memberof BaseCollection.prototype
   */
  clear : {
    value : function () {
      throw "NotImplementedException";
    },
    configurable : false
  }
})
