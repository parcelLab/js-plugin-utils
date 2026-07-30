<template>
  <div id="parcellab-track-and-trace"></div>
</template>

<script>
const LOAD_TIMEOUT_MS = 15000;
const GLOBAL_NAME = "parcelLabTrackAndTrace";
const JS_URL = "https://cdn.parcellab.com/js/v5/main.min.js";
const CSS_URL = "https://cdn.parcellab.com/css/v5/main.min.css";

/**
 * Loads the parcelLab plugin bundle and resolves once it is ready to use.
 *
 * `globalName` is the property the bundle publishes on `window` as its very
 * last statement. A script that throws while executing still fires `load`, so
 * the absence of that global is a precise signal that *our* script failed --
 * without reacting to anything else happening on the host page.
 *
 * Deliberately does NOT register a `window.addEventListener("error", ...)`
 * listener. That fired for every uncaught error anywhere on the page, so an
 * unrelated third-party script throwing while our bundle was downloading was
 * treated as a parcelLab load failure and initialisation was skipped
 * entirely (REQ-6294).
 */
function loadScript(src, globalName, container = document.head) {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement("script");
    scriptEl.src = src;
    let timeout = 0;

    function cleanup() {
      scriptEl.onerror = null;
      scriptEl.onload = null;
      clearTimeout(timeout);
    }

    function onLoadComplete() {
      cleanup();
      if (!window[globalName]) {
        reject(new Error(`Loaded ${src} but window.${globalName} is undefined`));
        return;
      }
      resolve(null);
    }

    function onLoadError() {
      cleanup();
      reject(new Error(`Loading script error for ${src}`));
    }

    scriptEl.onload = onLoadComplete;
    scriptEl.onerror = onLoadError;
    container.appendChild(scriptEl);

    timeout = setTimeout(() => {
      cleanup();
      // The bundle may have executed even if `load` has not been dispatched.
      if (window[globalName]) {
        resolve(null);
        return;
      }
      reject(new Error(`Loading script timed out after ${LOAD_TIMEOUT_MS}ms for ${src}`));
    }, LOAD_TIMEOUT_MS);
  });
}

function loadCssFile(cssFileUrl, container = document.head) {
  const styleSheet = document.createElement("link");
  styleSheet.rel = "stylesheet";
  styleSheet.type = "text/css";
  styleSheet.href = cssFileUrl;
  container.insertBefore(styleSheet, container.firstChild);
}

export default {
  name: "ParcelLab",
  props: ["options", "disableDefaultStyles"],
  async created() {
    const _v = this;
    if (typeof document === "object" && window) {
      if (!_v.disableDefaultStyles) loadCssFile(CSS_URL);
      loadScript(JS_URL, GLOBAL_NAME).then(
        function () {
          window[GLOBAL_NAME].initialize(_v.options || {});
        },
        function (err) {
          console.error("Could not load parcelLab script dynamically...");
          console.error(err);
        }
      );
    }
  },
};
</script>
