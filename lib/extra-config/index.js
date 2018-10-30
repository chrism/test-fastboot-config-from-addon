/* eslint-env node */
'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  fastbootConfigTree() {
    return {
      [this.app.name]: {
        "asset-map": {
          "foo": "bar",
          "something": "different"
        }
      }
    }
  }
};
