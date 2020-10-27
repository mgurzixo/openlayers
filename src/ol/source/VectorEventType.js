/**
 * @module ol/source/VectorEventType
 */

/**
 * @enum {string}
 */
export default {
  /**
   * Triggered when a feature is added to the source.
   * @event module:ol/source/Vector.VectorSourceEvent#addfeature
   * @api
   */
  ADDFEATURE: 'addfeature',

  /**
   * Triggered when a feature is updated.
   * @event module:ol/source/Vector.VectorSourceEvent#changefeature
   * @api
   */
  CHANGEFEATURE: 'changefeature',

  /**
   * Triggered when the clear method is called on the source.
   * @event module:ol/source/Vector.VectorSourceEvent#clear
   * @api
   */
  CLEAR: 'clear',

  /**
   * Triggered when a feature is removed from the source.
   * See {@link module:ol/source/Vector#clear source.clear()} for exceptions.
   * @event module:ol/source/Vector.VectorSourceEvent#removefeature
   * @api
   */
  REMOVEFEATURE: 'removefeature',

  /**
   * Triggered when features starts loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featureloadstart
   * @api
   */
  FEATURESLOADSTART: 'featuresloadstart',

  /**
   * Triggered when features finishes loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featureloadend
   * @api
   */
  FEATURESLOADEND: 'featuresloadend',

  /**
   * Triggered if feature loading results in an error.
   * @event module:ol/source/Vector.VectorSourceEvent#featureloaderror
   * @api
   */
  FEATURESLOADERROR: 'featuresloaderror',
};
