const React = require('react');

function loadScript(src, container, attributes) {
  if ( container === void 0 ) container = document.head;
  if ( attributes === void 0 ) attributes = null;

  return new Promise(function (resolve, reject) {
      var scriptEl = document.createElement('script');
      scriptEl.src = src;
      if (attributes) {
          Object.keys(attributes).forEach(function (key) {
              scriptEl.setAttribute(key, attributes[key]);
          });
      }
      var timeout = 0;
      var err;
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
          var errorType = e && (e.type === 'load' ? 'js-missing' : e.type);
          var error = new Error(("Loading script error - " + errorType + " for " + src));
          reject(error);
      }
      scriptEl.onload = onLoadComplete;
      scriptEl.onerror = onLoadError;
      window.addEventListener('error', onScriptError);
      container.appendChild(scriptEl);
      timeout = setTimeout(function () {
          onScriptError({ type: 'timeout' });
      }, 15000);
  });
}

function loadCssFile(cssFileUrl, container, before) {
  if ( container === void 0 ) container = document.head;
  if ( before === void 0 ) before = false;

  var styleSheet = document.createElement('link');
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

module.exports = function TrackAndTrace(ref) {
  var options = ref.options;
  var disableDefaultStyles = ref.disableDefaultStyles; if ( disableDefaultStyles === void 0 ) disableDefaultStyles = false;

  var tntRef = React.useRef()
  React.useEffect(function () {
    if (typeof document === 'object' && tntRef.current) {
      if (!disableDefaultStyles) { loadCssFile('https://cdn.parcellab.com/css/v3/parcelLab.min.css') }
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
    React.createElement( 'div', { id: 'parcellab-track-and-trace', ref: tntRef })
  )
}

