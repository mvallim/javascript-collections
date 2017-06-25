/**
 * @classdesc The base of all classes in the collections, this is one of the few
 *            pure "classes" in core the of the collections. Options are handled
 *            at the instance rather than the prototype level so that multiple
 *            instances don't compete for default values.
 *            
 * @abstract
 * @constructor
 * @param {object}
 *          cfg A configuration of you want to set
 */
var BaseCollection = function BaseCollection(cfg) {
  BaseCollection.prototype.init.call(this, cfg || {})
}

BaseCollection.prototype = Object.create(null, {

  constructor : BaseCollection,

  /**
   * @method
   * @memberof BaseCollection.prototype
   * @param {object}
   *          cfg A configuration of you want to set
   */
  init : {
    value : function (cfg) {
      this.apply(cfg);
    },
    enumerable : false,
    configurable : false,
    writable : true
  },

  /**
   * @method
   * @memberof BaseCollection.prototype
   * @param {object}
   *          properties A configuration of you want to set
   */
  apply : {
    value : function (properties) {
      var scope = this;
      for ( var property in properties) {
        scope[property] = properties[property];
      }
    },
    enumerable : false,
    configurable : false,
    writable : false
  },

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
