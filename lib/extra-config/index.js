/* eslint-env node */
'use strict';

module.exports = {
  name: require('./package').name,

  // isDevelopingAddon() {
  //   return true;
  // },

  // init(parent, project) {
  //   this._super.init && this._super.init.apply(this, arguments);
  //
  //   console.log('init', parent.config());
  //
  //   // const fs = this.project.require('fs-extra');
  //   // const path = this.project.require('path');
  //   //
  //   // let assetPath = path.join(build.directory, 'assets');
  //   // let assetsJson = JSON.parse(fs.readFileSync(`${assetPath}/assetMap.json`, { encoding: 'utf-8' }));
  //
  //   // console.log({ assetsJson });
  // },

  config(env, baseConfig) {
    console.log("config — this gets called when?", baseConfig);
    console.log("config — this gets called when?", env);

    if (!!this.assets) {
      console.log('has assets', this.assets);
      return { someAddonDefault: "bar" };
    }

    console.log("no assets yet");
    return { someAddonDefault: "foo" };
  },

  postBuild(build) {
    const fs = this.project.require('fs-extra');
    const path = this.project.require('path');

    let assetPath = path.join(build.directory, 'assets');
    let assetsJson = JSON.parse(fs.readFileSync(`${assetPath}/assetMap.json`, { encoding: 'utf-8' }));

    this.assets = assetsJson.assets;
    //
    // console.log({ assetsJson });
    console.log("post build");
  },


  outputReady() {
    console.log("output ready");
  },

  // fastbootConfigTree() {
  //   console.log('waiting for promise');
  //   const delayPromise = new Promise(resolve => setTimeout(resolve, 2000));
  //
  //   return delayPromise.then(() => {
  //     if (!this.assets) {
  //       // throw new Error('asset-map: The asset map has not been generated from the file yet');
  //       console.log('assets now exist');
  //     }
  //
  //     console.log("fastboot config tree");
  //     return {
  //       [this.app.name]: {
  //         "asset-map": {
  //           "lol": "yeh",
  //           "lil": "nah"
  //         }
  //       }
  //     }
  //   });
  // }

  // fastbootConfigTree() {
  //   console.log('inserting config tree hook');
  //
  //   return {
  //     [this.app.name]: {
  //       "asset-map": {
  //         "lol": "yeh",
  //         "lil": "nah"
  //       }
  //     }
  //   }
  // }
};
