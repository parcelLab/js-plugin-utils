
import React, { useEffect, useRef } from 'react'

function loadScript(src, container = document.head, attributes = null) {
  return new Promise((resolve, reject) => {
      const scriptEl = document.createElement('script');
      scriptEl.src = src;
      if (attributes) {
          Object.keys(attributes).forEach(key => {
              scriptEl.setAttribute(key, attributes[key]);
          });
      }
      let timeout = 0;
      let err;
      function onScriptError(e) {
          window.removeEventListener('error', onScriptError);
          err = e;
      }
      function cleanup() {
          scriptEl.onerror = null;
          scriptEl.onload = null;
          clearTimeout(timeout);
          window.removeEventListener('error', onScriptError);
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
          const errorType = e && (e.type === 'load' ? 'js-missing' : e.type);
          const error = new Error(`Loading script error - ${errorType} for ${src}`);
          reject(error);
      }
      scriptEl.onload = onLoadComplete;
      scriptEl.onerror = onLoadError;
      window.addEventListener('error', onScriptError);
      container.appendChild(scriptEl);
      timeout = setTimeout(() => {
          onScriptError({ type: 'timeout' });
      }, 15000);
  });
}

function loadCssFile(cssFileUrl, container = document.head, before = false) {
  const styleSheet = document.createElement('link');
  styleSheet.rel = 'stylesheet';
  styleSheet.type = 'text/css';
  styleSheet.href = cssFileUrl;
  if (before) {
      container.insertBefore(styleSheet, container.firstChild);
  }
  else {
      container.appendChild(styleSheet);
  }
}

export default function TrackAndTrace({ options }) {
  const tntRef = useRef()
  useEffect(() => {
    if (typeof document === 'object' && tntRef.current) {
      loadCssFile('https://cdn.parcellab.com/css/v3/parcelLab.min.css')
      loadScript('https://cdn.parcellab.com/js/v3/parcelLab.min.js').then(function (script) {
        window._prcl = new window.ParcelLab('#parcellab-track-and-trace', options || {})
        window._prcl.initialize()
      },
      function (err) {
        console.log('Could not load parcelLab script dynamically...')
        console.log(err)
      }
      )
    }
  }, [tntRef])
  return (
    <div id='parcellab-track-and-trace' ref={tntRef}></div>
  )
}
