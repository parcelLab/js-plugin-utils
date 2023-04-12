import React, { useEffect, useRef } from "react";

function loadScript(src, container = document.head) {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement("script");
    scriptEl.src = src;
    let timeout = 0;
    let err;
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
      resolve(null);
    }
    function onLoadError(e) {
      cleanup();
      const errorType = e && (e.type === "load" ? "js-missing" : e.type);
      const error = new Error(`Loading script error - ${errorType} for ${src}`);
      reject(error);
    }
    scriptEl.onload = onLoadComplete;
    scriptEl.onerror = onLoadError;
    window.addEventListener("error", onScriptError);
    container.appendChild(scriptEl);
    timeout = setTimeout(() => {
      onScriptError({ type: "timeout" });
    }, 15000);
  });
}

function loadCssFile(cssFileUrl, container = document.head) {
  const styleSheet = document.createElement("link");
  styleSheet.rel = "stylesheet";
  styleSheet.type = "text/css";
  styleSheet.href = cssFileUrl;

  container.appendChild(styleSheet);
}

export default function TrackAndTrace({ options, disableDefaultStyles = false }) {
  const tntRef = useRef();
  useEffect(() => {
    if (typeof document === "object" && tntRef.current) {
      if (!disableDefaultStyles) loadCssFile("https://cdn.parcellab.com/css/v3/parcelLab.min.css");
      loadScript("https://cdn.parcellab.com/js/v3/parcelLab.min.js").then(
        function (script) {
          window._prcl = new window.ParcelLab("#parcellab-track-and-trace", options || {});
          window._prcl.initialize();
        },
        function (err) {
          console.log("Could not load parcelLab script dynamically...");
          console.log(err);
        }
      );
    }
  }, [tntRef.current]);
  return <div id="parcellab-track-and-trace" ref={tntRef}></div>;
}
