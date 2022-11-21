class TrackAndTrace extends HTMLElement {
  constructor() {
    super();
    this._options = window.parcelLabTrackAndTraceOptions || {};

    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "parcellab-track-and-trace");
    this.appendChild(wrapper);

    var linkTag = document.createElement("link");
    linkTag.rel = "stylesheet";
    linkTag.href = "https://cdn.parcellab.com/css/v5/main.min.css";
    document.getElementsByTagName("head")[0].appendChild(linkTag);

    const script = document.createElement("script");
    script.src = "https://cdn.parcellab.com/js/v5/main.min.js";
    script.async = true;
    script.onload = () => {
      window.parcelLabTrackAndTrace.initialize(this._options);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

customElements.define("track-and-trace", TrackAndTrace);
