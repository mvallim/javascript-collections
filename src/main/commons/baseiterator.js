/**
 * @classdesc The base of all classes in the iterators.
 *            
 * @abstract
 * @constructor
 * @augments BaseObject
 * @param {object}
 *          cfg A configuration of you want to set
 */
var BaseIterator = function BaseIterator(cfg) {
  BaseObject.prototype.init.call(this, cfg || {})
}

BaseIterator.prototype = Object.create(BaseObject.prototype, {

  constructor : BaseIterator,

  /**
   * 
   * @method
   * @abstract
   * @memberof BaseIterator.prototype
   * @return {bool}
   */
  hasNext : {
    value : function () {
      throw "NotImplementedException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @abstract
   * @memberof BaseIterator.prototype
   * @return {Value}
   */
  next : {
    value : function () {
      throw "NotImplementedException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

  /**
   * 
   * @method
   * @abstract
   * @memberof BaseIterator.prototype
   * @return {Number}
   */
  nextIndex : {
    value : function () {
      throw "NotImplementedException";
    },
    enumerable : false,
    configurable : false,
    writable : false
  }
})
