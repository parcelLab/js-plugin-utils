class TrackAndTrace extends HTMLElement {
  constructor() {
    super();
    this._options = window.parcelLabTrackAndTraceOptions || {};
    this._disableDefaultStyles = window.disableDefaultStyles || false;

    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "parcellab-track-and-trace");
    this.appendChild(wrapper);

    if (!this._disableDefaultStyles) {
      var linkTag = document.createElement("link");
      linkTag.rel = "stylesheet";
      linkTag.href = "https://cdn.parcellab.com/css/v3/parcelLab.min.css";
      document.getElementsByTagName("head")[0].appendChild(linkTag);
    }

    const script = document.createElement("script");
    script.src = "https://cdn.parcellab.com/js/v3/parcelLab.min.js";
    script.async = true;
    script.onload = () => {
      window._prcl = new window.ParcelLab("#parcellab-track-and-trace", this._options);
      window._prcl.initialize();
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

customElements.define("track-and-trace", TrackAndTrace);
