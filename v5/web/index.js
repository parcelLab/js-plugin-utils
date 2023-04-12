class TrackAndTrace extends HTMLElement {
  constructor() {
    super();
    this._options = window.parcelLabTrackAndTraceOptions || {};
    this._disableDefaultStyles = window.disableDefaultStyles || false;
    this._wrapper = document.createElement("div");
    this._wrapper.setAttribute("id", "parcellab-track-and-trace");
  }

  appendToDom() {
    this.appendChild(this._wrapper);

    if (!this._disableDefaultStyles) {
      var linkTag = document.createElement("link");
      linkTag.rel = "stylesheet";
      linkTag.href = "https://cdn.parcellab.com/css/v5/main.min.css";
      document.getElementsByTagName("head")[0].appendChild(linkTag);
    }

    const script = document.createElement("script");
    script.src = "https://cdn.parcellab.com/js/v5/main.min.js";
    script.async = true;
    script.onload = () => {
      window.parcelLabTrackAndTrace.initialize(this._options);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  connectedCallback() {
    this.appendToDom();
  }
}

customElements.define("track-and-trace", TrackAndTrace);
