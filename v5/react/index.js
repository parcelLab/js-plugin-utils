import "./main.min";
import "./main.min.css";
import React, { useEffect } from "react";

export default function TrackAndTrace(ref) {
  var options = ref.options;
  var disableDefaultStyles = ref.disableDefaultStyles; if ( disableDefaultStyles === void 0 ) disableDefaultStyles = false;

  useEffect(function () {
    if (window.parcelLabTrackAndTrace) {
      window.parcelLabTrackAndTrace.initialize(options || {});
    }
  }, [options]);
  return React.createElement( 'div', { id: "parcellab-track-and-trace" });
}

