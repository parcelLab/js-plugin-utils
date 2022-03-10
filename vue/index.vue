<template>
  <div id='parcellab-track-and-trace'></div>
</template>

<script>
  import { loadScript, loadCssFile} from 'common-dom-utils'
  export default {
    name: 'ParcelLab',
    props: ['options'],
    async created() {
      const _v = this
      if (typeof document === 'object' && window) {
        loadCssFile('https://cdn.parcellab.com/css/v3/parcelLab.min.css')
        loadScript('https://cdn.parcellab.com/js/v3/parcelLab.min.js').then(function (script) {
          window._prcl = new window.ParcelLab('#parcellab-track-and-trace', _v.options || {})
          window._prcl.initialize()
        },
        function (err) {
          console.log('Could not load parcelLab script dynamically...')
          console.log(err)
        }
        )
      }
    }
  }
</script>
