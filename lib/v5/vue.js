/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
  // MIT license
  // source: https://github.com/amiller-gh/currentScript-polyfill

  // added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

  (function (root, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
      __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
      (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  }(typeof self !== 'undefined' ? self : this, function () {
    function getCurrentScript () {
      var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
      // for chrome
      if (!descriptor && 'currentScript' in document && document.currentScript) {
        return document.currentScript
      }

      // for other browsers with native support for currentScript
      if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
        return document.currentScript
      }

      // IE 8-10 support script readyState
      // IE 11+ & Firefox support stack trace
      try {
        throw new Error();
      }
      catch (err) {
        // Find the second match for the "at" string to get file src url from stack.
        var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
          ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
          stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
          scriptLocation = (stackDetails && stackDetails[1]) || false,
          line = (stackDetails && stackDetails[2]) || false,
          currentLocation = document.location.href.replace(document.location.hash, ''),
          pageSource,
          inlineScriptSourceRegExp,
          inlineScriptSource,
          scripts = document.getElementsByTagName('script'); // Live NodeList collection

        if (scriptLocation === currentLocation) {
          pageSource = document.documentElement.outerHTML;
          inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
          inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
        }

        for (var i = 0; i < scripts.length; i++) {
          // If ready state is interactive, return the script tag
          if (scripts[i].readyState === 'interactive') {
            return scripts[i];
          }

          // If src matches, return the script tag
          if (scripts[i].src === scriptLocation) {
            return scripts[i];
          }

          // If inline source matches, return the script tag
          if (
            scriptLocation === currentLocation &&
            scripts[i].innerHTML &&
            scripts[i].innerHTML.trim() === inlineScriptSource
          ) {
            return scripts[i];
          }
        }

        // If no match, return null
        return null;
      }
    };

    return getCurrentScript
  }));


  /***/ })

  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/publicPath */
  /******/ 	(() => {
  /******/ 		__webpack_require__.p = "";
  /******/ 	})();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
  "use strict";

  // EXPORTS
  __webpack_require__.d(__webpack_exports__, {
    "default": () => (/* binding */ entry_lib)
  });

  ;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
  /* eslint-disable no-var */
  // This file is imported into lib/wc client bundles.

  if (typeof window !== 'undefined') {
    var currentScript = window.document.currentScript
    if (true) {
      var getCurrentScript = __webpack_require__(679)
      currentScript = getCurrentScript()

      // for backward compatibility, because previously we directly included the polyfill
      if (!('currentScript' in document)) {
        Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
      }
    }

    var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
    if (src) {
      __webpack_require__.p = src[1] // eslint-disable-line
    }
  }

  // Indicate to webpack that this file can be concatenated
  /* harmony default export */ const setPublicPath = (null);

  ;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/index.vue?vue&type=template&id=30ca4fbb&
  var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"parcellab-track-and-trace"}})}
  var staticRenderFns = []


  ;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/index.vue?vue&type=script&lang=js&
  //
  //
  //
  //

  function loadScript(src, container = document.head, attributes = null) {
    return new Promise((resolve, reject) => {
      const scriptEl = document.createElement('script')
      scriptEl.src = src
      if (attributes) {
        Object.keys(attributes).forEach((key) => {
          scriptEl.setAttribute(key, attributes[key])
        })
      }
      let timeout = 0
      let err
      function onScriptError(e) {
        window.removeEventListener('error', onScriptError)
        err = e
      }
      function cleanup() {
        scriptEl.onerror = null
        scriptEl.onload = null
        clearTimeout(timeout)
        window.removeEventListener('error', onScriptError)
      }
      function onLoadComplete() {
        cleanup()
        if (err) {
          reject(err)
        }
        resolve(null)
      }
      function onLoadError(e) {
        cleanup()
        const errorType = e && (e.type === 'load' ? 'js-missing' : e.type)
        const error = new Error(`Loading script error - ${errorType} for ${src}`)
        reject(error)
      }
      scriptEl.onload = onLoadComplete
      scriptEl.onerror = onLoadError
      window.addEventListener('error', onScriptError)
      container.appendChild(scriptEl)
      timeout = setTimeout(() => {
        onScriptError({ type: 'timeout' })
      }, 15000)
    })
  }

  function loadCssFile(cssFileUrl, container = document.head, before = false) {
    const styleSheet = document.createElement('link')
    styleSheet.rel = 'stylesheet'
    styleSheet.type = 'text/css'
    styleSheet.href = cssFileUrl
    if (before) {
      container.insertBefore(styleSheet, container.firstChild)
    } else {
      container.appendChild(styleSheet)
    }
  }

  /* harmony default export */ const vuevue_type_script_lang_js_ = ({
    name: 'ParcelLab',
    props: ['options', 'disableDefaultStyles'],
    async created() {
      const _v = this
      if (typeof document === 'object' && window) {
        if (!_v.disableDefaultStyles) loadCssFile('https://cdn.parcellab.com/css/v5/parcelLab.min.css')
        loadScript('https://cdn.parcellab.com/js/v5/parcelLab.min.js').then(
          function (script) {
            window._prcl = new window.ParcelLab('#parcellab-track-and-trace', _v.options || {})
            window._prcl.initialize()
          },
          function (err) {
            console.log('Could not load parcelLab script dynamically...')
            console.log(err)
          }
        )
      }
    },
  });

  ;// CONCATENATED MODULE: ./src/vue/index.vue?vue&type=script&lang=js&
   /* harmony default export */ const src_vuevue_type_script_lang_js_ = (vuevue_type_script_lang_js_);
  ;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
  /* globals __VUE_SSR_CONTEXT__ */

  // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
  // This module is a runtime utility for cleaner component module output and will
  // be included in the final webpack user bundle.

  function normalizeComponent (
    scriptExports,
    render,
    staticRenderFns,
    functionalTemplate,
    injectStyles,
    scopeId,
    moduleIdentifier, /* server only */
    shadowMode /* vue-cli only */
  ) {
    // Vue.extend constructor export interop
    var options = typeof scriptExports === 'function'
      ? scriptExports.options
      : scriptExports

    // render functions
    if (render) {
      options.render = render
      options.staticRenderFns = staticRenderFns
      options._compiled = true
    }

    // functional template
    if (functionalTemplate) {
      options.functional = true
    }

    // scopedId
    if (scopeId) {
      options._scopeId = 'data-v-' + scopeId
    }

    var hook
    if (moduleIdentifier) { // server build
      hook = function (context) {
        // 2.3 injection
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
        // 2.2 with runInNewContext: true
        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__
        }
        // inject component styles
        if (injectStyles) {
          injectStyles.call(this, context)
        }
        // register component module identifier for async chunk inferrence
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier)
        }
      }
      // used by ssr in case component is cached and beforeCreate
      // never gets called
      options._ssrRegister = hook
    } else if (injectStyles) {
      hook = shadowMode
        ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
        : injectStyles
    }

    if (hook) {
      if (options.functional) {
        // for template-only hot-reload because in that case the render fn doesn't
        // go through the normalizer
        options._injectStyles = hook
        // register for functional component in vue file
        var originalRender = options.render
        options.render = function renderWithStyleInjection (h, context) {
          hook.call(context)
          return originalRender(h, context)
        }
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate
        options.beforeCreate = existing
          ? [].concat(existing, hook)
          : [hook]
      }
    }

    return {
      exports: scriptExports,
      options: options
    }
  }

  ;// CONCATENATED MODULE: ./src/vue/index.vue





  /* normalize component */
  ;
  var component = normalizeComponent(
    src_vuevue_type_script_lang_js_,
    render,
    staticRenderFns,
    false,
    null,
    null,
    null

  )

  /* harmony default export */ const vue = (component.exports);
  ;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


  /* harmony default export */ const entry_lib = (vue);


  })();

  module.exports = __webpack_exports__["default"];
  /******/ })()
  ;
  //# sourceMappingURL=js-plugin-utils.common.js.map