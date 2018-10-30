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
        "asset-map": this.assets
      }
    }
  },

  postBuild: function(build) {
    const fs = this.project.require('fs-extra');
    const path = this.project.require('path');

    let assetPath = path.join(build.directory, 'assets');
    let assetsJson = JSON.parse(fs.readFileSync(`${assetPath}/assetMap.json`, { encoding: 'utf-8' }));

    this.assets = assetsJson.assets;

    console.log({ assetsJson });
  }
};
