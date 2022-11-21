import "../../../assets/v5/main.min";
import React, { useEffect } from "react";

var style = React.lazy(function () { return import("../../../assets/v5/main.min.css"); });

export default function TrackAndTrace(ref) {
  var options = ref.options;
  var disableDefaultStyles = ref.disableDefaultStyles; if ( disableDefaultStyles === void 0 ) disableDefaultStyles = false;

  useEffect(function () {
    if (window.parcelLabTrackAndTrace) {
      window.parcelLabTrackAndTrace.initialize(options || {});
    }
  }, [options]);
  return React.createElement( 'div', { style: disableDefaultStyles ? "" : style, id: "parcellab-track-and-trace" });
}

