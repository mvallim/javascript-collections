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
   * Return number of elements in collection
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
   * Return if collection contains any element(s)
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
   * Clear collection, remove all element(s)
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
