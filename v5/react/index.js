import React, { useEffect, useRef } from "react";

function loadScript(src, container, attributes) {
  if ( container === void 0 ) container = document.head;
  if ( attributes === void 0 ) attributes = null;

  return new Promise(function (resolve, reject) {
    var scriptEl = document.createElement("script");
    scriptEl.src = src;
    if (attributes) {
      Object.keys(attributes).forEach(function (key) {
        scriptEl.setAttribute(key, attributes[key]);
      });
    }
    var timeout = 0;
    var err;
    function onScriptError(e) {
      window.removeEventListener("error", onScriptError);
      err = e;
    }
    function cleanup() {
      scriptEl.onerror = null;
      scriptEl.onload = null;
      clearTimeout(timeout);
      window.removeEventListener("error", onScriptError);
    }
    function onLoadComplete() {
      cleanup();
      if (err) {
        reject(err);
      }
      if (!window.parcelLabTrackAndTrace) {
        reject(new Error("window.parcelLabTrackAndTrace is undefined"));
      }
      resolve(null);
    }
    function onLoadError(e) {
      cleanup();
      var errorType = e && (e.type === "load" ? "js-missing" : e.type);
      var error = new Error(("Loading script error - " + errorType + " for " + src));
      reject(error);
    }
    scriptEl.onload = onLoadComplete;
    scriptEl.onerror = onLoadError;
    window.addEventListener("error", onScriptError);
    container.appendChild(scriptEl);
    timeout = setTimeout(function () {
      onScriptError({ type: "timeout" });
    }, 15000);
  });
}

function loadCssFile(cssFileUrl, container, before) {
  if ( container === void 0 ) container = document.head;
  if ( before === void 0 ) before = false;

  var styleSheet = document.createElement("link");
  styleSheet.rel = "stylesheet";
  styleSheet.type = "text/css";
  styleSheet.href = cssFileUrl;
  if (before) {
    container.insertBefore(styleSheet, container.firstChild);
  } else {
    container.appendChild(styleSheet);
  }
}

export default function TrackAndTrace(ref) {
  var options = ref.options;
  var disableDefaultStyles = ref.disableDefaultStyles; if ( disableDefaultStyles === void 0 ) disableDefaultStyles = false;

  var tntRef = useRef();
  useEffect(function () {
    if (typeof document === "object" && tntRef.current) {
      if (!disableDefaultStyles) { loadCssFile("https://cdn.parcellab.com/css/v5/main.min.css"); }
      loadScript("https://cdn.parcellab.com/js/v5/main.min.js").then(
        function () {
          window.parcelLabTrackAndTrace.initialize(options || {});
        },
        function (err) {
          console.error("Could not load parcelLab script dynamically...");
          console.error(err);
        }
      );
    }
  }, [tntRef.current]);
  return React.createElement( 'div', { id: "parcellab-track-and-trace", ref: tntRef });
}

