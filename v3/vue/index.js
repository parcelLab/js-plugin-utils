/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPublicPath */ \"./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js\");\n/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~entry */ \"./src/v3/vue/index.vue\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_entry__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://@parcellab/js-plugin-utils/./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-var */\n// This file is imported into lib/wc client bundles.\n\nif (typeof window !== 'undefined') {\n  var currentScript = window.document.currentScript\n  if (false) { var getCurrentScript; }\n\n  var src = currentScript && currentScript.src.match(/(.+\\/)[^/]+\\.js(\\?.*)?$/)\n  if (src) {\n    __webpack_require__.p = src[1] // eslint-disable-line\n  }\n}\n\n// Indicate to webpack that this file can be concatenated\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);\n\n\n//# sourceURL=webpack://@parcellab/js-plugin-utils/./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js?");

/***/ }),

/***/ "./src/v3/vue/index.vue":
/*!******************************!*\
  !*** ./src/v3/vue/index.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_vue_vue_type_template_id_3fdf72d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3fdf72d0& */ \"./src/v3/vue/index.vue?vue&type=template&id=3fdf72d0&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/v3/vue/index.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ \"./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_3fdf72d0___WEBPACK_IMPORTED_MODULE_0__.render,\n  _index_vue_vue_type_template_id_3fdf72d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/v3/vue/index.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://@parcellab/js-plugin-utils/./src/v3/vue/index.vue?");

/***/ }),

/***/ "./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/v3/vue/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/v3/vue/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//\n//\n//\n//\n\nfunction loadScript(src, container = document.head, attributes = null) {\n  return new Promise((resolve, reject) => {\n    const scriptEl = document.createElement('script')\n    scriptEl.src = src\n    if (attributes) {\n      Object.keys(attributes).forEach((key) => {\n        scriptEl.setAttribute(key, attributes[key])\n      })\n    }\n    let timeout = 0\n    let err\n    function onScriptError(e) {\n      window.removeEventListener('error', onScriptError)\n      err = e\n    }\n    function cleanup() {\n      scriptEl.onerror = null\n      scriptEl.onload = null\n      clearTimeout(timeout)\n      window.removeEventListener('error', onScriptError)\n    }\n    function onLoadComplete() {\n      cleanup()\n      if (err) {\n        reject(err)\n      }\n      resolve(null)\n    }\n    function onLoadError(e) {\n      cleanup()\n      const errorType = e && (e.type === 'load' ? 'js-missing' : e.type)\n      const error = new Error(`Loading script error - ${errorType} for ${src}`)\n      reject(error)\n    }\n    scriptEl.onload = onLoadComplete\n    scriptEl.onerror = onLoadError\n    window.addEventListener('error', onScriptError)\n    container.appendChild(scriptEl)\n    timeout = setTimeout(() => {\n      onScriptError({ type: 'timeout' })\n    }, 15000)\n  })\n}\n\nfunction loadCssFile(cssFileUrl, container = document.head, before = false) {\n  const styleSheet = document.createElement('link')\n  styleSheet.rel = 'stylesheet'\n  styleSheet.type = 'text/css'\n  styleSheet.href = cssFileUrl\n  if (before) {\n    container.insertBefore(styleSheet, container.firstChild)\n  } else {\n    container.appendChild(styleSheet)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'ParcelLab',\n  props: ['options', 'disableDefaultStyles'],\n  async created() {\n    const _v = this\n    if (typeof document === 'object' && window) {\n      if (!_v.disableDefaultStyles) loadCssFile('https://cdn.parcellab.com/css/v3/parcelLab.min.css')\n      loadScript('https://cdn.parcellab.com/js/v3/parcelLab.min.js').then(\n        function () {\n          window._prcl = new window.ParcelLab('#parcellab-track-and-trace', _v.options || {})\n          window._prcl.initialize()\n        },\n        function (err) {\n          console.log('Could not load parcelLab script dynamically...')\n          console.log(err)\n        }\n      )\n    }\n  },\n});\n\n\n//# sourceURL=webpack://@parcellab/js-plugin-utils/./src/v3/vue/index.vue?./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/v3/vue/index.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/v3/vue/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/v3/vue/index.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://@parcellab/js-plugin-utils/./src/v3/vue/index.vue?");

/***/ }),

/***/ "./src/v3/vue/index.vue?vue&type=template&id=3fdf72d0&":
/*!*************************************************************!*\
  !*** ./src/v3/vue/index.vue?vue&type=template&id=3fdf72d0& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3fdf72d0___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3fdf72d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3fdf72d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3fdf72d0& */ \"./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/v3/vue/index.vue?vue&type=template&id=3fdf72d0&\");\n\n\n//# sourceURL=webpack://@parcellab/js-plugin-utils/./src/v3/vue/index.vue?");

/***/ }),

/***/ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/v3/vue/index.vue?vue&type=template&id=3fdf72d0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/v3/vue/index.vue?vue&type=template&id=3fdf72d0& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"parcellab-track-and-trace\" } })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://@parcellab/js-plugin-utils/./src/v3/vue/index.vue?./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ normalizeComponent)\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://@parcellab/js-plugin-utils/./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js");
/******/ 	module.exports = __webpack_exports__["default"];
/******/ 	
/******/ })()
;