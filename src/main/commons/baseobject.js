/**
 * @classdesc The base of all classes.
 *
 * @abstract
 * @constructor
 * @param {object}
 *          cfg A configuration of you want to set
 */
var BaseObject = function BaseObject(cfg) {
  BaseObject.prototype.init.call(this, cfg || {});
};

BaseObject.prototype = Object.create(null, {

  constructor: BaseObject,

  /**
   * @method
   * @protected
   * @memberof BaseObject.prototype
   * @param {object}
   *          cfg A configuration of you want to set
   */
  init: {
    value: function(cfg) {
      this.apply(cfg);
    },
    enumerable: false,
    configurable: false,
    writable: true,
  },

  /**
   * @method
   * @protected
   * @memberof BaseObject.prototype
   * @param {object}
   *          properties A configuration of you want to set
   */
  apply: {
    value: function(properties) {
      var scope = this;
      for (var property in properties) {
        scope[property] = properties[property];
      }
    },
    enumerable: false,
    configurable: false,
    writable: false,
  },
});

module.exports = BaseObject;
