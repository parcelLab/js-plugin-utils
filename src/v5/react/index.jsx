import "../../../assets/v5/main.min";
import React, { useEffect } from "react";

const style = React.lazy(() => import("../../../assets/v5/main.min.css"));

export default function TrackAndTrace({ options, disableDefaultStyles = false }) {
  useEffect(() => {
    if (window.parcelLabTrackAndTrace) {
      window.parcelLabTrackAndTrace.initialize(options || {});
    }
  }, [options]);
  return <div style={disableDefaultStyles ? "" : style} id="parcellab-track-and-trace"></div>;
}
