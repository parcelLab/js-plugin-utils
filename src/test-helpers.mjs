import { expect, vi } from "vitest";

/**
 * Shared harness for the loader regression tests.
 *
 * jsdom never actually fetches the CDN bundle, so these helpers drive the
 * <script> element's lifecycle by hand: find the tag the component appended,
 * then fire `load` / `error` on it the way a browser would.
 */

/** The <script> tag the component appended to <head>, or null. */
export function getInjectedScript(src) {
  return document.head.querySelector(`script[src="${src}"]`);
}

export function countInjectedScripts(src) {
  return document.head.querySelectorAll(`script[src="${src}"]`).length;
}

export function getInjectedStylesheet(href) {
  return document.head.querySelector(`link[href="${href}"]`);
}

/**
 * Simulate an unrelated third-party script blowing up on the host page, the
 * way Bazaarvoice did on unisport.pl (REQ-6294).
 *
 * Dispatched on `window` as a real ErrorEvent so that any global "error"
 * listener the loader might register would genuinely receive it.
 */
export function emitUnrelatedThirdPartyError(
  message = "Uncaught Bazaarvoice is not configured for the domain www.unisport.pl"
) {
  window.dispatchEvent(
    new ErrorEvent("error", {
      message,
      filename: "https://apps.bazaarvoice.com/deployments/bv.js",
    })
  );
}

/** Pretend the bundle executed successfully and published its global. */
export function publishPluginGlobal(globalName, value) {
  window[globalName] = value;
}

/** Fire `load` on the injected script, as the browser does once it executes. */
export function fireScriptLoad(src) {
  const scriptEl = getInjectedScript(src);
  expect(scriptEl, `expected a <script src="${src}"> to have been injected`).toBeTruthy();
  scriptEl.onload?.();
  return scriptEl;
}

/** Fire `error` on the injected script (404, blocked, offline). */
export function fireScriptError(src) {
  const scriptEl = getInjectedScript(src);
  expect(scriptEl, `expected a <script src="${src}"> to have been injected`).toBeTruthy();
  scriptEl.onerror?.(new Event("error"));
  return scriptEl;
}

/** Let queued promise callbacks run. */
export function flushPromises() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

/** A stub for the v5 plugin global: `{ initialize }`. */
export function makeV5Global() {
  return { initialize: vi.fn() };
}

/**
 * A stub for the v3 plugin global: a constructor whose instances expose
 * `initialize`. Returns the constructor plus the shared instance spy.
 */
export function makeV3Global() {
  const initialize = vi.fn();
  const ParcelLab = vi.fn(function ParcelLabStub() {
    this.initialize = initialize;
  });
  return { ParcelLab, initialize };
}

/** Reset all global/DOM state between tests. */
export function resetDom() {
  document.head.innerHTML = "";
  document.body.innerHTML = "";
  delete window.parcelLabTrackAndTrace;
  delete window.ParcelLab;
  delete window._prcl;
}
