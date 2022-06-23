
import browser from 'webextension-polyfill';

const contentScript = {
  init() {
      this.inject();
  },

  inject() {
      const injectionSite = (document.head || document.documentElement);
      const container = document.createElement('script');

      container.src = browser.runtime.getURL('dist/hack.js');
      container.onload = function() {
          this.parentNode.removeChild(this);
      };

      injectionSite.insertBefore(
          container,
          injectionSite.children[ 0 ]
      );
  }
};

contentScript.init();
