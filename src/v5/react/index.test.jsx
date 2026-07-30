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
  makeV5Global,
  publishPluginGlobal,
  resetDom,
} from "../../test-helpers.mjs";

const JS_URL = "https://cdn.parcellab.com/js/v5/main.min.js";
const CSS_URL = "https://cdn.parcellab.com/css/v5/main.min.css";
const GLOBAL_NAME = "parcelLabTrackAndTrace";

describe("v5/react TrackAndTrace", () => {
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
      const plugin = makeV5Global();
      render(<TrackAndTrace options={{ userId: "1620093" }} />);

      // Bazaarvoice blows up mid-download. This is the exact production
      // sequence from unisport.pl.
      emitUnrelatedThirdPartyError();

      // Our bundle then loads perfectly well.
      publishPluginGlobal(GLOBAL_NAME, plugin);
      await act(async () => {
        fireScriptLoad(JS_URL);
        await flushPromises();
      });

      expect(plugin.initialize).toHaveBeenCalledTimes(1);
      expect(plugin.initialize).toHaveBeenCalledWith({ userId: "1620093" });
    });

    it("survives repeated third-party errors", async () => {
      const plugin = makeV5Global();
      render(<TrackAndTrace options={{}} />);

      for (let i = 0; i < 5; i += 1) emitUnrelatedThirdPartyError(`boom ${i}`);

      publishPluginGlobal(GLOBAL_NAME, plugin);
      await act(async () => {
        fireScriptLoad(JS_URL);
        await flushPromises();
      });

      expect(plugin.initialize).toHaveBeenCalledTimes(1);
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
    it("does not initialise when our bundle loaded but never published its global", async () => {
      render(<TrackAndTrace options={{}} />);

      // Script executes but throws before publishing the global.
      await act(async () => {
        fireScriptLoad(JS_URL);
        await flushPromises();
      });

      expect(console.error).toHaveBeenCalled();
      expect(window[GLOBAL_NAME]).toBeUndefined();
    });

    it("does not initialise when the script fails to load", async () => {
      const plugin = makeV5Global();
      publishPluginGlobal(GLOBAL_NAME, plugin);
      render(<TrackAndTrace options={{}} />);

      await act(async () => {
        fireScriptError(JS_URL);
        await flushPromises();
      });

      expect(plugin.initialize).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalled();
    });

    it("rejects rather than hanging when the load times out", async () => {
      vi.useFakeTimers();
      try {
        render(<TrackAndTrace options={{}} />);
        // Neither load nor error ever fires.
        await act(async () => {
          vi.advanceTimersByTime(15000);
        });
        expect(console.error).toHaveBeenCalled();
      } finally {
        vi.useRealTimers();
      }
    });

    it("still initialises if the global appears by the time the timeout fires", async () => {
      vi.useFakeTimers();
      try {
        const plugin = makeV5Global();
        render(<TrackAndTrace options={{}} />);
        publishPluginGlobal(GLOBAL_NAME, plugin);

        await act(async () => {
          vi.advanceTimersByTime(15000);
        });

        expect(plugin.initialize).toHaveBeenCalledTimes(1);
      } finally {
        vi.useRealTimers();
      }
    });
  });

  describe("bootstrap happens exactly once", () => {
    it("does not inject a second script or double-initialise on re-render", async () => {
      const plugin = makeV5Global();
      const { rerender } = render(<TrackAndTrace options={{ a: 1 }} />);

      rerender(<TrackAndTrace options={{ a: 1 }} />);
      rerender(<TrackAndTrace options={{ a: 2 }} />);

      expect(countInjectedScripts(JS_URL)).toBe(1);

      publishPluginGlobal(GLOBAL_NAME, plugin);
      await act(async () => {
        fireScriptLoad(JS_URL);
        await flushPromises();
      });

      expect(plugin.initialize).toHaveBeenCalledTimes(1);
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
      expect(getInjectedScript(JS_URL)).toBeTruthy();
      expect(getInjectedStylesheet(CSS_URL)).toBeNull();
    });

    it("renders the mount point the plugin looks for", () => {
      const { container } = render(<TrackAndTrace options={{}} />);
      expect(container.querySelector("#parcellab-track-and-trace")).toBeTruthy();
    });

    it("defaults options to an empty object", async () => {
      const plugin = makeV5Global();
      render(<TrackAndTrace />);
      publishPluginGlobal(GLOBAL_NAME, plugin);

      await act(async () => {
        fireScriptLoad(JS_URL);
        await flushPromises();
      });

      expect(plugin.initialize).toHaveBeenCalledWith({});
    });
  });
});
