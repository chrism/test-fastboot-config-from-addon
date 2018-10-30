/* eslint-env node */
'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  postBuild: function(build) {
    const fs = this.project.require('fs-extra');
    const path = this.project.require('path');

    let assetPath = path.join(build.directory, 'assets');
    let assetsJson = JSON.parse(fs.readFileSync(`${assetPath}/assetMap.json`, { encoding: 'utf-8' }));

    this.assets = assetsJson.assets;

    console.log({ assetsJson });
  },

  fastbootConfigTree() {
    if (!this.assets) {
      throw new Error('asset-map: The asset map has not been generated from the file yet');
    }
    
    console.log("fastboot config tree");
    return {
      [this.app.name]: {
        "asset-map": {
          "lol": "yeh",
          "lil": "nah"
        }
      }
    }
  }
};
