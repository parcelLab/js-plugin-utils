import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render } from "@testing-library/react";
import TrackAndTrace from "./index.jsx";
import {
  countInjectedScripts,
  emitUnrelatedThirdPartyError,
  fireScriptError,
  fireScriptLoad,
  flushPromises,
  getInjectedScript,
  getInjectedStylesheet,
  makeV3Global,
  publishPluginGlobal,
  resetDom,
} from "../../test-helpers.mjs";

const JS_URL = "https://cdn.parcellab.com/js/v3/parcelLab.min.js";
const CSS_URL = "https://cdn.parcellab.com/css/v3/parcelLab.min.css";
const GLOBAL_NAME = "ParcelLab";

describe("v3/react TrackAndTrace", () => {
  beforeEach(() => {
    resetDom();
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  describe("REQ-6294: unrelated third-party errors must not block init", () => {
    it("still initialises when another script on the page throws while ours loads", async () => {
      const { ParcelLab, initialize } = makeV3Global();
      render(<TrackAndTrace options={{ userId: "1620093" }} />);

      emitUnrelatedThirdPartyError();

      publishPluginGlobal(GLOBAL_NAME, ParcelLab);
      await act(async () => {
        fireScriptLoad(JS_URL);
        await flushPromises();
      });

      expect(ParcelLab).toHaveBeenCalledWith("#parcellab-track-and-trace", {
        userId: "1620093",
      });
      expect(initialize).toHaveBeenCalledTimes(1);
    });

    it("registers no global error listener at all", () => {
      const addEventListener = vi.spyOn(window, "addEventListener");
      render(<TrackAndTrace options={{}} />);

      const errorListeners = addEventListener.mock.calls.filter(
        ([type]) => type === "error"
      );
      expect(errorListeners).toHaveLength(0);
    });
  });

  describe("genuine parcelLab failures are still reported", () => {
    it("does not construct the plugin when the global is missing after load", async () => {
      render(<TrackAndTrace options={{}} />);

      await act(async () => {
        fireScriptLoad(JS_URL);
        await flushPromises();
      });

      expect(console.error).toHaveBeenCalled();
      expect(window._prcl).toBeUndefined();
    });

    it("does not construct the plugin when the script fails to load", async () => {
      const { ParcelLab } = makeV3Global();
      publishPluginGlobal(GLOBAL_NAME, ParcelLab);
      render(<TrackAndTrace options={{}} />);

      await act(async () => {
        fireScriptError(JS_URL);
        await flushPromises();
      });

      expect(ParcelLab).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe("bootstrap happens exactly once", () => {
    it("does not inject a second script on re-render", () => {
      const { rerender } = render(<TrackAndTrace options={{}} />);
      rerender(<TrackAndTrace options={{}} />);
      expect(countInjectedScripts(JS_URL)).toBe(1);
    });
  });

  describe("assets", () => {
    it("injects the script and the default stylesheet", () => {
      render(<TrackAndTrace options={{}} />);
      expect(getInjectedScript(JS_URL)).toBeTruthy();
      expect(getInjectedStylesheet(CSS_URL)).toBeTruthy();
    });

    it("skips the stylesheet when disableDefaultStyles is set", () => {
      render(<TrackAndTrace options={{}} disableDefaultStyles />);
      expect(getInjectedStylesheet(CSS_URL)).toBeNull();
    });
  });
});
