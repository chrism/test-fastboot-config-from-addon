import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  fastboot: service(),

  init() {
    this._super(...arguments);

    let configHash;

    if (this.get('fastboot.isFastBoot')) {
      configHash = FastBoot.config().default;
    } else {
      let rawConfig = document.querySelector("meta[name='asset-map']").content;
      configHash = JSON.parse(decodeURIComponent(rawConfig));
    }

    console.log({ configHash });

    this.config = configHash['asset-map'];
  },

  fingerPrintedPath: computed(function() {
    return "assets/tomster-" + "under-" + "construction.png";
  })
});
