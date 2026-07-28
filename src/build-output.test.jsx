import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render } from "@testing-library/react";
import BuiltV5React from "../v5/react/index.js";
import BuiltV3React from "../v3/react/index.js";
import {
  emitUnrelatedThirdPartyError,
  fireScriptLoad,
  flushPromises,
  makeV3Global,
  makeV5Global,
  publishPluginGlobal,
  resetDom,
} from "./test-helpers.mjs";

/**
 * The files under v3/ and v5/ are committed build artifacts -- they are what
 * npm actually publishes, and the build is run by hand. Fixing src/ without
 * rebuilding ships nothing, so these tests assert against the built output
 * rather than the sources.
 */

const readArtifact = (relativePath) =>
  readFileSync(fileURLToPath(new URL(relativePath, import.meta.url)), "utf8");

const ARTIFACTS = [
  ["v3/react", "../v3/react/index.js"],
  ["v3/vue", "../v3/vue/index.js"],
  ["v5/react", "../v5/react/index.js"],
  ["v5/vue", "../v5/vue/index.js"],
];

describe("published build artifacts", () => {
  describe.each(ARTIFACTS)("%s", (_name, relativePath) => {
    const source = readArtifact(relativePath);

    it("is rebuilt from the fixed source (no global error handler survives)", () => {
      expect(source).not.toContain("onScriptError");
    });

    it("carries the precise global check instead", () => {
      expect(source).toContain("is undefined");
    });
  });

  describe.each([
    ["v3/vue", "../v3/vue/index.js"],
    ["v5/vue", "../v5/vue/index.js"],
  ])("%s", (_name, relativePath) => {
    it("is a production bundle, not an eval-based dev build", () => {
      // A dev-mode webpack build wraps every module in eval(), which is
      // blocked outright by a host page with a strict CSP (no unsafe-eval).
      expect(readArtifact(relativePath)).not.toContain("eval(");
    });
  });
});

describe("REQ-6294 regression, against the built React artifacts", () => {
  beforeEach(() => {
    resetDom();
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("v5: built output still initialises despite an unrelated page error", async () => {
    const plugin = makeV5Global();
    render(<BuiltV5React options={{ userId: "1620093" }} />);

    emitUnrelatedThirdPartyError();

    publishPluginGlobal("parcelLabTrackAndTrace", plugin);
    await act(async () => {
      fireScriptLoad("https://cdn.parcellab.com/js/v5/main.min.js");
      await flushPromises();
    });

    expect(plugin.initialize).toHaveBeenCalledWith({ userId: "1620093" });
  });

  it("v3: built output still initialises despite an unrelated page error", async () => {
    const { ParcelLab, initialize } = makeV3Global();
    render(<BuiltV3React options={{}} />);

    emitUnrelatedThirdPartyError();

    publishPluginGlobal("ParcelLab", ParcelLab);
    await act(async () => {
      fireScriptLoad("https://cdn.parcellab.com/js/v3/parcelLab.min.js");
      await flushPromises();
    });

    expect(initialize).toHaveBeenCalledTimes(1);
  });
});
