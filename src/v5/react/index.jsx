import "./main.min";
import "./main.min.css";
import React, { useEffect } from "react";

export default function TrackAndTrace({ options, disableDefaultStyles = false }) {
  useEffect(() => {
    if (window.parcelLabTrackAndTrace) {
      window.parcelLabTrackAndTrace.initialize(options || {});
    }
  }, [options]);
  return <div id="parcellab-track-and-trace"></div>;
}
