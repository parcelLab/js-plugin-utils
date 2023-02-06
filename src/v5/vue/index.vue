<template>
  <div id="parcellab-track-and-trace"></div>
</template>

<script>
function loadScript(src, container = document.head) {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script')
    scriptEl.src = src
    let timeout = 0
    let err
    function onScriptError(e) {
      window.removeEventListener('error', onScriptError)
      err = e
    }
    function cleanup() {
      scriptEl.onerror = null
      scriptEl.onload = null
      clearTimeout(timeout)
      window.removeEventListener('error', onScriptError)
    }
    function onLoadComplete() {
      cleanup()
      if (err) {
        reject(err)
      }
      if (!window.parcelLabTrackAndTrace) {
        reject(new Error("window.parcelLabTrackAndTrace is undefined"));
      }
      resolve(null)
    }
    function onLoadError(e) {
      cleanup()
      const errorType = e && (e.type === 'load' ? 'js-missing' : e.type)
      const error = new Error(`Loading script error - ${errorType} for ${src}`)
      reject(error)
    }
    scriptEl.onload = onLoadComplete
    scriptEl.onerror = onLoadError
    window.addEventListener('error', onScriptError)
    container.appendChild(scriptEl)
    timeout = setTimeout(() => {
      onScriptError({ type: 'timeout' })
    }, 15000)
  })
}

function loadCssFile(cssFileUrl, container = document.head) {
  const styleSheet = document.createElement('link')
  styleSheet.rel = 'stylesheet'
  styleSheet.type = 'text/css'
  styleSheet.href = cssFileUrl
  container.insertBefore(styleSheet, container.firstChild)
}

export default {
  name: 'ParcelLab',
  props: ['options', 'disableDefaultStyles'],
  async created() {
    const _v = this
    if (typeof document === 'object' && window) {
      if (!_v.disableDefaultStyles) loadCssFile('https://cdn.parcellab.com/css/v5/main.min.css')
      loadScript('https://cdn.parcellab.com/js/v5/main.min.js').then(
        function () {
          window.parcelLabTrackAndTrace.initialize(_v.options || {})
        },
        function (err) {
          console.log('Could not load parcelLab script dynamically...')
          console.log(err)
        }
      )
    }
  },
}
</script>>