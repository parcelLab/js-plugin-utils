var TrackAndTrace = /*@__PURE__*/(function (HTMLElement) {
  function TrackAndTrace() {
    var this$1 = this;

    HTMLElement.call(this);
    this._options = window.parcelLabTrackAndTraceOptions || {};
    this._disableDefaultStyles = window.disableDefaultStyles || false;

    var wrapper = document.createElement("div");
    wrapper.setAttribute("id", "parcellab-track-and-trace");
    this.appendChild(wrapper);

    if (!this._disableDefaultStyles) {
      var linkTag = document.createElement("link");
      linkTag.rel = "stylesheet";
      linkTag.href = "https://cdn.parcellab.com/css/v5/main.min.css";
      document.getElementsByTagName("head")[0].appendChild(linkTag);
    }

    var script = document.createElement("script");
    script.src = "https://cdn.parcellab.com/js/v5/main.min.js";
    script.async = true;
    script.onload = function () {
      window.parcelLabTrackAndTrace.initialize(this$1._options);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  if ( HTMLElement ) TrackAndTrace.__proto__ = HTMLElement;
  TrackAndTrace.prototype = Object.create( HTMLElement && HTMLElement.prototype );
  TrackAndTrace.prototype.constructor = TrackAndTrace;

  return TrackAndTrace;
}(HTMLElement));

customElements.define("track-and-trace", TrackAndTrace);

