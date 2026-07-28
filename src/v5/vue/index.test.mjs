import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import TrackAndTrace from "./index.vue";
import {
  emitUnrelatedThirdPartyError,
  fireScriptError,
  fireScriptLoad,
  flushPromises,
  getInjectedScript,
  getInjectedStylesheet,
  makeV5Global,
  publishPluginGlobal,
  resetDom,
} from "../../test-helpers.mjs";

const JS_URL = "https://cdn.parcellab.com/js/v5/main.min.js";
const CSS_URL = "https://cdn.parcellab.com/css/v5/main.min.css";
const GLOBAL_NAME = "parcelLabTrackAndTrace";

describe("v5/vue TrackAndTrace", () => {
  beforeEach(() => {
    resetDom();
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("REQ-6294: unrelated third-party errors must not block init", () => {
    it("still initialises when another script on the page throws while ours loads", async () => {
      const plugin = makeV5Global();
      mount(TrackAndTrace, { props: { options: { userId: "1620093" } } });

      emitUnrelatedThirdPartyError();

      publishPluginGlobal(GLOBAL_NAME, plugin);
      fireScriptLoad(JS_URL);
      await flushPromises();

      expect(plugin.initialize).toHaveBeenCalledTimes(1);
      expect(plugin.initialize).toHaveBeenCalledWith({ userId: "1620093" });
    });

    it("registers no global error listener at all", () => {
      const addEventListener = vi.spyOn(window, "addEventListener");
      mount(TrackAndTrace, { props: { options: {} } });

      const errorListeners = addEventListener.mock.calls.filter(
        ([type]) => type === "error"
      );
      expect(errorListeners).toHaveLength(0);
    });
  });

  describe("genuine parcelLab failures are still reported", () => {
    it("does not initialise when our bundle loaded but never published its global", async () => {
      mount(TrackAndTrace, { props: { options: {} } });

      fireScriptLoad(JS_URL);
      await flushPromises();

      expect(console.error).toHaveBeenCalled();
      expect(window[GLOBAL_NAME]).toBeUndefined();
    });

    it("does not initialise when the script fails to load", async () => {
      const plugin = makeV5Global();
      publishPluginGlobal(GLOBAL_NAME, plugin);
      mount(TrackAndTrace, { props: { options: {} } });

      fireScriptError(JS_URL);
      await flushPromises();

      expect(plugin.initialize).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe("assets", () => {
    it("injects the script and the default stylesheet", () => {
      mount(TrackAndTrace, { props: { options: {} } });
      expect(getInjectedScript(JS_URL)).toBeTruthy();
      expect(getInjectedStylesheet(CSS_URL)).toBeTruthy();
    });

    it("skips the stylesheet when disableDefaultStyles is set", () => {
      mount(TrackAndTrace, {
        props: { options: {}, disableDefaultStyles: true },
      });
      expect(getInjectedScript(JS_URL)).toBeTruthy();
      expect(getInjectedStylesheet(CSS_URL)).toBeNull();
    });

    it("renders the mount point the plugin looks for", () => {
      const wrapper = mount(TrackAndTrace, { props: { options: {} } });
      expect(wrapper.find("#parcellab-track-and-trace").exists()).toBe(true);
    });
  });
});
