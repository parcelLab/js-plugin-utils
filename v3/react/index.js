import React, { useEffect, useRef } from "react";

var LOAD_TIMEOUT_MS = 15000;
var GLOBAL_NAME = "ParcelLab";
var JS_URL = "https://cdn.parcellab.com/js/v3/parcelLab.min.js";
var CSS_URL = "https://cdn.parcellab.com/css/v3/parcelLab.min.css";

/**
 * Loads the parcelLab plugin bundle and resolves once it is ready to use.
 *
 * `globalName` is the property the bundle publishes on `window`. A script that
 * throws while executing still fires `load`, so the absence of that global is a
 * precise signal that *our* script failed -- without reacting to anything else
 * happening on the host page.
 *
 * Deliberately does NOT register a `window.addEventListener("error", ...)`
 * listener. That fired for every uncaught error anywhere on the page, so an
 * unrelated third-party script throwing while our bundle was downloading was
 * treated as a parcelLab load failure and initialisation was skipped
 * entirely (REQ-6294).
 */
function loadScript(src, globalName, container) {
  if ( container === void 0 ) container = document.head;

  return new Promise(function (resolve, reject) {
    var scriptEl = document.createElement("script");
    scriptEl.src = src;
    var timeout = 0;

    function cleanup() {
      scriptEl.onerror = null;
      scriptEl.onload = null;
      clearTimeout(timeout);
    }

    function onLoadComplete() {
      cleanup();
      if (!window[globalName]) {
        reject(new Error(("Loaded " + src + " but window." + globalName + " is undefined")));
        return;
      }
      resolve(null);
    }

    function onLoadError() {
      cleanup();
      reject(new Error(("Loading script error for " + src)));
    }

    scriptEl.onload = onLoadComplete;
    scriptEl.onerror = onLoadError;
    container.appendChild(scriptEl);

    timeout = setTimeout(function () {
      cleanup();
      // The bundle may have executed even if `load` has not been dispatched.
      if (window[globalName]) {
        resolve(null);
        return;
      }
      reject(new Error(("Loading script timed out after " + LOAD_TIMEOUT_MS + "ms for " + src)));
    }, LOAD_TIMEOUT_MS);
  });
}

function loadCssFile(cssFileUrl, container) {
  if ( container === void 0 ) container = document.head;

  var styleSheet = document.createElement("link");
  styleSheet.rel = "stylesheet";
  styleSheet.type = "text/css";
  styleSheet.href = cssFileUrl;

  container.appendChild(styleSheet);
}

export default function TrackAndTrace(ref) {
  var options = ref.options;
  var disableDefaultStyles = ref.disableDefaultStyles; if ( disableDefaultStyles === void 0 ) disableDefaultStyles = false;

  var tntRef = useRef();
  var bootstrapped = useRef(false);
  useEffect(function () {
    if (typeof document !== "object" || !tntRef.current) { return; }
    // Bootstrap exactly once per mount. The previous `[tntRef.current]`
    // dependency changed from `undefined` to the element after the first
    // render, so any re-render appended a second <script> and initialised
    // twice. StrictMode's double effect invocation in development hits the
    // same guard.
    if (bootstrapped.current) { return; }
    bootstrapped.current = true;

    if (!disableDefaultStyles) { loadCssFile(CSS_URL); }
    loadScript(JS_URL, GLOBAL_NAME).then(
      function () {
        window._prcl = new window[GLOBAL_NAME]("#parcellab-track-and-trace", options || {});
        window._prcl.initialize();
      },
      function (err) {
        console.error("Could not load parcelLab script dynamically...");
        console.error(err);
      }
    );
  }, []);
  return React.createElement( 'div', { id: "parcellab-track-and-trace", ref: tntRef });
}

