import { loadScript, loadCssFile} from 'common-dom-utils'
import { useEffect, useRef } from 'react'

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
