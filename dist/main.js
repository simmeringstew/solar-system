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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/meyer-reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/meyer-reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://solar-system/./src/meyer-reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* page setup\\n--------------------------------\\n*/\\n\\n:root {\\n    -webkit-tap-highlight-color: transparent;\\n    font-family: 'Inter', sans-serif;\\n    --black: #121212;\\n    --light-black: #383f45;\\n    --white: #FFFFFF;\\n    --purple: #8b5cf6;\\n    --light-purple: #c4b5fd;\\n    --high: 87%;\\n    --medium: 60%;\\n    --low: 38%;\\n    background-color: var(--black);\\n}\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 30px;\\n}\\n\\n/* header\\n--------------------------------\\n*/\\n\\n.header {\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n    margin-top: 30px;\\n}\\n\\n.logo {\\n    width: 6rem;\\n    height: 6rem;\\n    opacity: var(--high);\\n}\\n\\n/* navigation\\n--------------------------------\\n*/\\n\\n.text, .material-symbols-outlined {\\n    color: var(--white);\\n    opacity: var(--high);\\n}\\n\\n.navigation {\\n    position: relative;\\n    background-color: var(--light-black);\\n    border-radius: 10px;\\n    padding-left: 15px;\\n    height: 70px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.navigation ul {\\n    display: flex;\\n    width: 300px;\\n    align-items: center;\\n}\\n\\n.navigation ul li {\\n    position: relative;\\n    width: 70px;\\n    height: 70px;\\n    z-index: 1;\\n}\\n\\n.navigation ul li .element {\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    width: 100%;\\n    text-align: center;\\n}\\n\\n.navigation ul li .element .icon {\\n    position: relative;\\n    display: block;\\n    line-height: 75px;\\n    font-size: 1rem;\\n    margin-left: 2px;\\n    margin-top: 2px;\\n    text-align: center;\\n    transition: .5s;\\n    color: var(--black);\\n}\\n\\n.navigation ul li.active .element .icon {\\n    transform: translateY(-32px);\\n}\\n\\n.navigation ul li .element .text {\\n    position: absolute;\\n    font-size: 1rem;\\n    letter-spacing: .05rem;\\n    transition: .5s;\\n    opacity: 0;\\n    transform: translateY(20px);\\n}\\n\\n.navigation ul li.active .element .text {\\n    opacity: 1;\\n    transform: translateY(10px);\\n}\\n\\n.indicator {\\n    position: absolute;\\n    width: 60px;\\n    height: 60px;\\n    background-color: var(--purple);\\n    top: -50%;\\n    border-radius: 50%;\\n    border: 6px solid var(--black);\\n    transition: .5s;\\n}\\n\\n.indicator::before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 50%;\\n    left: -22px;\\n    width: 20px;\\n    height: 20px;\\n    background-color: tomato;\\n    background: transparent;\\n    border-top-right-radius: 20px;\\n    box-shadow: 1px -10px 0 0 var(--black);\\n}\\n\\n.indicator::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 50%;\\n    right: -22px;\\n    width: 20px;\\n    height: 20px;\\n    background-color: tomato;\\n    background: transparent;\\n    border-top-left-radius: 20px;\\n    box-shadow: -1px -10px 0 0 var(--black);\\n}\\n\\n.navigation ul li:nth-child(1).active ~ .indicator{\\n    transform: translateX(calc(70px * 0));\\n}\\n\\n.navigation ul li:nth-child(2).active ~ .indicator{\\n    transform: translateX(calc(70px * 1));\\n}\\n\\n.navigation ul li:nth-child(3).active ~ .indicator{\\n    transform: translateX(calc(70px * 2));\\n}\\n\\n.navigation ul li:nth-child(4).active ~ .indicator{\\n    transform: translateX(calc(70px * 3));\\n}\\n\\n/* content\\n--------------------------------\\n*/\\n\\n.content {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n}\\n\\n/* home\\n--------------------------------\\n*/\\n\\n.home {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 30px;\\n    margin-top: 200px;\\n}\\n\\n.title {\\n    color: var(--white);\\n    opacity: var(--high);\\n    font-size: 5rem;\\n    font-weight: 800;\\n    text-align: center;\\n}\\n\\n.call {\\n    color: var(--white);\\n    opacity: var(--medium);\\n    font-size: 2rem;\\n    text-align: center;\\n}\\n\\n/* planets page carousel\\n--------------------------------\\n*/\\n\\n.carousel {\\n    position: relative;\\n    width: 40%;\\n    height: 700px;\\n}\\n\\n.carousel-image {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: fit;\\n    border-radius: 10%;\\n}\\n\\n.carousel-track-container {\\n    height: 100%;\\n    position: relative;\\n    overflow: hidden;\\n}\\n\\n.carousel-track {\\n    margin: 0;\\n    position: relative;\\n    height: 100%;\\n    transition: transform .25s ease-in;\\n}\\n\\n.carousel-slide {\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    width: 100%;\\n}\\n\\n.carousel-button {\\n    position: absolute;\\n    top: 50%;\\n    transform: translateY(-50%);\\n    background-color: var(--light-black);\\n    border: none;\\n    border-radius: 50%;\\n    cursor: pointer;\\n    width: 50px;\\n    height: 50px;\\n}\\n\\n.carousel-button:active {\\n    transform: translateY(-40%);\\n}\\n\\n.left {\\n    left: -60px;\\n}\\n\\n.right {\\n    right: -60px;\\n}\\n\\n.carousel-navigation {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 20px 0;\\n    gap: 10px;\\n}\\n\\n.carousel-indicator {\\n    border: none;\\n    border-radius: 50%;\\n    width: 20px;\\n    height: 20px;\\n    background-color: rgba(56, 63, 69, .3);\\n}\\n\\n.carousel-indicator.current-indicator {\\n    background-color: rgba(56, 63, 69);\\n}\\n\\n/* planets page info\\n--------------------------------\\n*/\\n\\n.planet-data-area {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: flex-start;\\n    gap: 10px;\\n    margin-top: 200px;\\n    margin-bottom: 20px;\\n    background-color: var(--light-black);\\n    width: 40%;\\n    border-radius: 16px;\\n    padding: 15px;\\n}\\n\\n.planet-name {\\n    color: var(--white);\\n    opacity: var(--high);\\n    align-self: center;\\n    text-decoration: underline;\\n    font-size: 2rem;\\n    margin-bottom: 20px;\\n}\\n\\n.planet-info {\\n    color: var(--white);\\n    opacity: var(--medium);\\n    font-size: 1.1rem;\\n}\\n\\n/* contact us\\n--------------------------------\\n*/\\n\\n.form {\\n    background-color: var(--light-black);\\n    padding: 20px;\\n    border-radius: 16px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 16px;\\n    margin-top: 50px;\\n    width: 40%;\\n}\\n\\n.contact-heading {\\n    color: var(--white);\\n    opacity: var(--high);\\n    font-size: 2rem;\\n}\\n\\n.contact-extra {\\n    color: var(--white);\\n    opacity: var(--medium);\\n    font-size: 1.1rem;\\n}\\n\\n.text-area, .email {\\n    background-color: var(--white);\\n    opacity: var(--high);\\n    font-size: 1.1rem;\\n    border-radius: 8px;\\n}\\n\\n.text-area {\\n    border: var(--light-black) 2px solid;\\n}\\n\\n.text-area:focus, #email:focus {\\n    outline-color: var(--black);\\n}\\n\\n.email {\\n    width: 50%;\\n    border: none;\\n}\\n\\n.email-label {\\n    color: var(--white);\\n    opacity: var(--medium);\\n    font-size: 1.1rem;\\n}\\n\\n.bottom-row-form {\\n    display: flex;\\n    align-items: center;\\n    gap: 10px;\\n    position: relative;\\n}\\n\\n.submit-button {\\n    margin-left: auto;\\n    font-size: 1.1rem;\\n    border: none;\\n    border-radius: 16px;\\n    color: var(--white);\\n    opacity: var(--high);\\n    background-color: var(--purple);\\n    padding: 10px;\\n}\\n\\n.email-message {\\n    position: absolute;\\n    top: 35px;\\n    left: 60px;\\n    font-size: 0.8rem;\\n    visibility: hidden;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://solar-system/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://solar-system/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://solar-system/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/meyer-reset.css":
/*!*****************************!*\
  !*** ./src/meyer-reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./meyer-reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/meyer-reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://solar-system/./src/meyer-reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://solar-system/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://solar-system/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://solar-system/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://solar-system/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://solar-system/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://solar-system/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://solar-system/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/carouselNavigation.js":
/*!***********************************!*\
  !*** ./src/carouselNavigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveCarousel\": () => (/* binding */ moveCarousel),\n/* harmony export */   \"setSlidePosition\": () => (/* binding */ setSlidePosition)\n/* harmony export */ });\n// function that handle the navigation of the carousel\n\nclass CarouselItems {\n    constructor() {\n        this.track = document.querySelector(\".carousel-track\");\n        this.slides = [...document.querySelectorAll(\".carousel-slide\")];\n        this.currentSlide = document.querySelector(\".current-slide\");\n    }\n    get slidesWidth() {\n        return this.calculateSlideWidth();\n    }\n    calculateSlideWidth() {\n        return this.slides[0].getBoundingClientRect().width;\n    }\n}\n\nfunction moveCarousel(direction) {\n    const carousel = new CarouselItems();\n    let nextSlide = undefined;\n    if (isNaN(direction) === false) {\n        nextSlide = document.querySelector(`[data-target=\"${direction}\"]`);\n    }\n    else if (direction === \"left\") {\n        nextSlide = carousel.currentSlide.previousElementSibling;\n        if (nextSlide === null) {\n            nextSlide = carousel.slides[carousel.slides.length - 1];\n        }\n    }\n    else {\n        nextSlide = carousel.currentSlide.nextElementSibling;\n        if (nextSlide === null) {\n            nextSlide = carousel.slides[0];\n        }\n    }\n    const amountToMove = nextSlide.style.left;\n    carousel.track.style.transform = `translateX(-${amountToMove})`;\n    carousel.currentSlide.classList.remove(\"current-slide\");\n    nextSlide.classList.add(\"current-slide\");\n    setIndicator(nextSlide);\n}\n\nfunction setIndicator(currentSlide) {\n    const currentIndicator = document.querySelector(\".current-indicator\");\n    const index = parseInt(currentSlide.getAttribute(\"data-target\"));\n    const nextIndicator = document.querySelector(`[data-indicator=\"${index}\"]`);\n    currentIndicator.classList.remove(\"current-indicator\");\n    nextIndicator.classList.add(\"current-indicator\");\n\n}\n\nfunction setSlidePosition() {\n    const carousel = new CarouselItems();\n    for (let i = 0; i < carousel.slides.length; i++) {\n        carousel.slides[i].style.left = carousel.slidesWidth * i + \"px\";\n    }\n}\n\n//# sourceURL=webpack://solar-system/./src/carouselNavigation.js?");

/***/ }),

/***/ "./src/displayPlanetInformation.js":
/*!*****************************************!*\
  !*** ./src/displayPlanetInformation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayPlanetInformation)\n/* harmony export */ });\n/* harmony import */ var _planet_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planet-data.json */ \"./src/planet-data.json\");\n// function to display planet information when the user click on a planet\n\n\n\nfunction displayPlanetInformation(index) {\n    const planet = _planet_data_json__WEBPACK_IMPORTED_MODULE_0__[index];\n    const content = document.querySelector(\".content\");\n    let planetDataArea = document.querySelector(\".planet-data-area\");\n    if (planetDataArea !== null) {\n        planetDataArea.remove();\n    }\n    planetDataArea = document.createElement(\"div\");\n    planetDataArea.classList.add(\"planet-data-area\");\n\n    const name = document.createElement(\"h2\");\n    name.classList.add(\"planet-name\");\n    name.textContent = planet.name;\n    \n    const distanceFromSun = document.createElement(\"p\");\n    distanceFromSun.textContent = `Distance From Sun: ${planet.distanceFromSun}`;\n\n    const diameter = document.createElement(\"p\");\n    diameter.textContent = `Diameter: ${planet.diameter}`;\n\n    const moons = document.createElement(\"p\");\n    moons.textContent = `Moons: ${planet.moons}`;\n\n    const rockOrGas = document.createElement(\"p\");\n    rockOrGas.textContent = `Type: ${planet.rockOrGas}`;\n\n    const averageTemperature = document.createElement(\"p\");\n    averageTemperature.textContent = `Average Temperature: ${planet.averageTemperature}`;\n\n    const habitable = document.createElement(\"p\");\n    habitable.textContent = `Habitable: ${planet.habitable}`;\n\n    const lengthOfYear = document.createElement(\"p\");\n    lengthOfYear.textContent = `Length of Year: ${planet.lengthYear}`;\n\n    const lengthOfDay = document.createElement(\"p\");\n    lengthOfDay.textContent = `Length of Day: ${planet.lengthDay}`;\n\n    planetDataArea.appendChild(name);\n    const planetDataArray = [distanceFromSun, diameter, moons, rockOrGas, averageTemperature, habitable, lengthOfYear, lengthOfDay];\n    for (let i = 0; i < planetDataArray.length; i++) {\n        planetDataArray[i].classList.add(\"planet-info\");\n        planetDataArea.appendChild(planetDataArray[i]);\n    }\n    content.appendChild(planetDataArea);\n\n    planetDataArea.scrollIntoView({behavior: \"smooth\"});\n}\n\n//# sourceURL=webpack://solar-system/./src/displayPlanetInformation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _meyer_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meyer-reset.css */ \"./src/meyer-reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _makeHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeHomePage */ \"./src/makeHomePage.js\");\n/* harmony import */ var _makePlanetsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makePlanetsPage */ \"./src/makePlanetsPage.js\");\n/* harmony import */ var _makeContactPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeContactPage */ \"./src/makeContactPage.js\");\n\n\n\n\n\n\n// global variable for the currently active page set to 0 which is home\nlet currentPage = 0;\n\n// selector for main page content\nconst content = document.querySelector(\".content\");\n\n// on page load load up the home page\nwindow.onload = () => {\n    currentPage = 0;\n    (0,_makeHomePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n// selector for the list items\nconst list = document.querySelectorAll(\".list\");\nlist.forEach(item => {\n    item.addEventListener(\"click\", changePage);\n});\n\n// function for changing the page\nfunction changePage() {\n    list.forEach(item => {\n        item.classList.remove(\"active\");\n        this.classList.add(\"active\");\n        const page = parseInt(this.getAttribute(\"data-key\"));\n        if (page === currentPage) {\n            return;\n        }\n        else {\n            currentPage = page;\n            content.innerHTML = \"\";\n            switch(page) {\n                case 0:\n                    (0,_makeHomePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                    break;\n                case 1:\n                    (0,_makePlanetsPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                    break;\n                case 2:\n                    (0,_makeContactPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                    break;\n            }\n        }\n    });\n}\n\n//# sourceURL=webpack://solar-system/./src/index.js?");

/***/ }),

/***/ "./src/makeContactPage.js":
/*!********************************!*\
  !*** ./src/makeContactPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeContactPage)\n/* harmony export */ });\n// function for creating the contact page when the user clicks that\n\nfunction makeContactPage() {\n    const content = document.querySelector(\".content\");\n\n    const form = document.createElement(\"form\");\n    form.action = \"/\";\n    form.method = \"post\";\n    form.classList.add(\"form\");\n\n    const contactHeading = document.createElement(\"h2\");\n    contactHeading.classList.add(\"contact-heading\");\n    contactHeading.textContent = \"Contact Us.\";\n\n    const contactExtra = document.createElement(\"h3\");\n    contactExtra.classList.add(\"contact-extra\");\n    contactExtra.textContent = \"Let us know what you think and we'll get back to you soon.\"\n\n    const textArea = document.createElement(\"textarea\");\n    textArea.classList.add(\"text-area\");\n    textArea.id = \"user-input\";\n    textArea.rows = 5;\n    textArea.cols = 50;\n\n    const bottomRowForm = document.createElement(\"div\");\n    bottomRowForm.classList.add(\"bottom-row-form\");\n\n    const emailLabel = document.createElement(\"label\");\n    emailLabel.classList.add(\"email-label\");\n    emailLabel.setAttribute(\"for\", \"email\");\n    emailLabel.textContent = \"email:\";\n\n    const emailInput = document.createElement(\"input\");\n    emailInput.type = \"text\";\n    emailInput.maxLength = 50;\n    emailInput.placeholder = \"email\";\n    emailInput.id = \"email\";\n    emailInput.name = \"email\";\n    emailInput.classList.add(\"email\");\n    emailInput.addEventListener(\"keydown\", (e) => {\n        if (e.key === \"Enter\") {\n            validateForm();\n        }\n        else {\n            validateEmailInput();\n        }\n    });\n\n    const submitButton = document.createElement(\"button\");\n    submitButton.classList.add(\"submit-button\");\n    submitButton.textContent = \"Submit\";\n    submitButton.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        validateForm();\n    });\n\n    const emailMessage = document.createElement(\"small\");\n    emailMessage.classList.add(\"email-message\");\n\n    const lastRowElements = [emailLabel, emailInput, submitButton, emailMessage];\n    for (let i = 0; i <lastRowElements.length; i++) {\n        bottomRowForm.appendChild(lastRowElements[i]);\n    }\n\n    const formElements = [contactHeading, contactExtra, textArea, bottomRowForm];\n    for (let i = 0; i < formElements.length; i++) {\n        form.appendChild(formElements[i]);\n    }\n\n    content.appendChild(form);\n}\n\nfunction validateEmailInput() {\n    const email = document.querySelector(\"#email\").value;\n    const emailMessage = document.querySelector(\".email-message\");\n    const re = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    if (re.test(String(email).toLowerCase()) === false) {\n        emailMessage.textContent = \"*Enter a valid email\";\n        emailMessage.style.color = \"#dc2626\";\n        emailMessage.style.visibility = \"visible\";\n    }\n    else {\n        emailMessage.textContent = \"*Valid email\";\n        emailMessage.style.color = \"#16a34a\";\n        emailMessage.style.visibility = \"visible\";\n    }\n}\n\nfunction validateForm() {\n    validateEmailInput();\n    const textArea = document.querySelector(\".text-area\");\n    if (textArea.value === \"\") {\n        textArea.style.border = \"2px solid #dc2626\";\n    }\n    else {\n        textArea.style.border = \"2px solid #16a34a\";\n    }\n}\n\n//# sourceURL=webpack://solar-system/./src/makeContactPage.js?");

/***/ }),

/***/ "./src/makeHomePage.js":
/*!*****************************!*\
  !*** ./src/makeHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeHomePage)\n/* harmony export */ });\n// function for dynamically creating the home page\n\nfunction makeHomePage() {\n    const content = document.querySelector(\".content\");\n    const home = document.createElement(\"div\");\n    home.classList.add(\"home\");\n    const title = document.createElement(\"h1\");\n    title.classList.add(\"title\");\n    title.textContent = \"Explore our solar system.\";\n    const call = document.createElement(\"h2\");\n    call.classList.add(\"call\");\n    call.textContent = \"Click the planet icon to get started.\";\n\n    home.appendChild(title);\n    home.appendChild(call);\n    content.appendChild(home);\n}\n\n//# sourceURL=webpack://solar-system/./src/makeHomePage.js?");

/***/ }),

/***/ "./src/makePlanetsPage.js":
/*!********************************!*\
  !*** ./src/makePlanetsPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makePlanetsPage)\n/* harmony export */ });\n/* harmony import */ var _planet_images_mercury_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planet-images/mercury.png */ \"./src/planet-images/mercury.png\");\n/* harmony import */ var _planet_images_venus_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planet-images/venus.jpeg */ \"./src/planet-images/venus.jpeg\");\n/* harmony import */ var _planet_images_earth_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planet-images/earth.jpeg */ \"./src/planet-images/earth.jpeg\");\n/* harmony import */ var _planet_images_mars_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planet-images/mars.jpeg */ \"./src/planet-images/mars.jpeg\");\n/* harmony import */ var _planet_images_jupiter_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planet-images/jupiter.jpeg */ \"./src/planet-images/jupiter.jpeg\");\n/* harmony import */ var _planet_images_saturn_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planet-images/saturn.jpeg */ \"./src/planet-images/saturn.jpeg\");\n/* harmony import */ var _planet_images_uranus_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planet-images/uranus.jpeg */ \"./src/planet-images/uranus.jpeg\");\n/* harmony import */ var _planet_images_neptune_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./planet-images/neptune.jpeg */ \"./src/planet-images/neptune.jpeg\");\n/* harmony import */ var _carouselNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carouselNavigation */ \"./src/carouselNavigation.js\");\n/* harmony import */ var _displayPlanetInformation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./displayPlanetInformation */ \"./src/displayPlanetInformation.js\");\n// function to create the planets page\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction makePlanetsPage() {\n    const content = document.querySelector(\".content\");\n\n    const carousel = document.createElement(\"div\");\n    carousel.classList.add(\"carousel\");\n\n    const left = document.createElement(\"button\");\n    left.classList.add(\"material-symbols-outlined\");\n    left.textContent = \"chevron_left\";\n    left.classList.add(\"carousel-button\");\n    left.classList.add(\"left\");\n    left.addEventListener(\"click\", () => {\n        (0,_carouselNavigation__WEBPACK_IMPORTED_MODULE_8__.moveCarousel)(\"left\");\n    });\n\n    const carouselContainer = document.createElement(\"div\");\n    carouselContainer.classList.add(\"carousel-track-container\");\n\n    const carouselTrack = document.createElement(\"ul\");\n    carouselTrack.classList.add(\"carousel-track\");\n\n    const mercury = new Image();\n    mercury.src = _planet_images_mercury_png__WEBPACK_IMPORTED_MODULE_0__;\n    const venus = new Image();\n    venus.src = _planet_images_venus_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    const earth = new Image();\n    earth.src = _planet_images_earth_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n    const mars = new Image();\n    mars.src = _planet_images_mars_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n    const jupiter = new Image();\n    jupiter.src = _planet_images_jupiter_jpeg__WEBPACK_IMPORTED_MODULE_4__;\n    const saturn = new Image();\n    saturn.src = _planet_images_saturn_jpeg__WEBPACK_IMPORTED_MODULE_5__;\n    const uranus = new Image();\n    uranus.src = _planet_images_uranus_jpeg__WEBPACK_IMPORTED_MODULE_6__;\n    const neptune = new Image();\n    neptune.src = _planet_images_neptune_jpeg__WEBPACK_IMPORTED_MODULE_7__;\n\n    const planetArray = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];\n    const carouselNavigation = document.createElement(\"div\");\n    carouselNavigation.classList.add(\"carousel-navigation\");\n    for (let i = 0; i < planetArray.length; i++) {\n        planetArray[i].classList.add(\"carousel-image\");\n        const carouselSlide = document.createElement(\"li\");\n        carouselSlide.classList.add(\"carousel-slide\");\n        carouselSlide.setAttribute(\"data-target\", `${i}`);\n        if (i === 0) {\n            carouselSlide.classList.add(\"current-slide\");\n        }\n        carouselSlide.appendChild(planetArray[i]);\n        carouselSlide.addEventListener(\"click\", () => {\n            (0,_displayPlanetInformation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(parseInt(carouselSlide.getAttribute(\"data-target\")));\n        });\n        carouselTrack.appendChild(carouselSlide);\n        const carouselIndicator = document.createElement(\"button\");\n        carouselIndicator.classList.add(\"carousel-indicator\");\n        if (i === 0) {\n            carouselIndicator.classList.add(\"current-indicator\");\n        }\n        carouselIndicator.setAttribute(\"data-indicator\", `${i}`);\n        carouselIndicator.addEventListener(\"click\", () => {\n            (0,_carouselNavigation__WEBPACK_IMPORTED_MODULE_8__.moveCarousel)(parseInt(carouselIndicator.getAttribute(\"data-indicator\")));\n        });\n        carouselNavigation.appendChild(carouselIndicator);\n    }\n\n    const right = document.createElement(\"button\");\n    right.classList.add(\"material-symbols-outlined\");\n    right.textContent = \"chevron_right\";\n    right.classList.add(\"carousel-button\");\n    right.classList.add(\"right\");\n    right.addEventListener(\"click\", () => {\n        (0,_carouselNavigation__WEBPACK_IMPORTED_MODULE_8__.moveCarousel)(\"right\");\n    });\n\n    carouselContainer.appendChild(carouselTrack);\n\n    carousel.appendChild(left);\n    carousel.appendChild(carouselContainer);\n    carousel.appendChild(right);\n    carousel.appendChild(carouselNavigation);\n    content.appendChild(carousel);\n\n    (0,_carouselNavigation__WEBPACK_IMPORTED_MODULE_8__.setSlidePosition)();\n}\n\n//# sourceURL=webpack://solar-system/./src/makePlanetsPage.js?");

/***/ }),

/***/ "./src/planet-images/earth.jpeg":
/*!**************************************!*\
  !*** ./src/planet-images/earth.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f505cef1f11c6785c88.jpeg\";\n\n//# sourceURL=webpack://solar-system/./src/planet-images/earth.jpeg?");

/***/ }),

/***/ "./src/planet-images/jupiter.jpeg":
/*!****************************************!*\
  !*** ./src/planet-images/jupiter.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1231abf5b9e6139b6b1.jpeg\";\n\n//# sourceURL=webpack://solar-system/./src/planet-images/jupiter.jpeg?");

/***/ }),

/***/ "./src/planet-images/mars.jpeg":
/*!*************************************!*\
  !*** ./src/planet-images/mars.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d8500ba73a4290cd714.jpeg\";\n\n//# sourceURL=webpack://solar-system/./src/planet-images/mars.jpeg?");

/***/ }),

/***/ "./src/planet-images/mercury.png":
/*!***************************************!*\
  !*** ./src/planet-images/mercury.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a42fb31515607cbdd6fb.png\";\n\n//# sourceURL=webpack://solar-system/./src/planet-images/mercury.png?");

/***/ }),

/***/ "./src/planet-images/neptune.jpeg":
/*!****************************************!*\
  !*** ./src/planet-images/neptune.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"654cd3358b91013bdc41.jpeg\";\n\n//# sourceURL=webpack://solar-system/./src/planet-images/neptune.jpeg?");

/***/ }),

/***/ "./src/planet-images/saturn.jpeg":
/*!***************************************!*\
  !*** ./src/planet-images/saturn.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75f9ff733705acec575b.jpeg\";\n\n//# sourceURL=webpack://solar-system/./src/planet-images/saturn.jpeg?");

/***/ }),

/***/ "./src/planet-images/uranus.jpeg":
/*!***************************************!*\
  !*** ./src/planet-images/uranus.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"926d603ed6674ff6c83c.jpeg\";\n\n//# sourceURL=webpack://solar-system/./src/planet-images/uranus.jpeg?");

/***/ }),

/***/ "./src/planet-images/venus.jpeg":
/*!**************************************!*\
  !*** ./src/planet-images/venus.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77b8f4880f085e7ffffb.jpeg\";\n\n//# sourceURL=webpack://solar-system/./src/planet-images/venus.jpeg?");

/***/ }),

/***/ "./src/planet-data.json":
/*!******************************!*\
  !*** ./src/planet-data.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"Mercury\",\"distanceFromSun\":\"57,909,050 km\",\"diameter\":\"4880 km\",\"moons\":\"0\",\"rockOrGas\":\"Rock\",\"averageTemperature\":\"67c\",\"habitable\":\"No\",\"lengthYear\":\"87.9 Earth Days\",\"lengthDay\":\"1,408 Hours\"},{\"name\":\"Venus\",\"distanceFromSun\":\"108,208,000 km\",\"diameter\":\"12,103.6 km\",\"moons\":\"0\",\"rockOrGas\":\"Rock\",\"averageTemperature\":\"464c\",\"habitable\":\"No\",\"lengthYear\":\"224.65 Earth Days\",\"lengthDay\":\"5,832 Hours\"},{\"name\":\"Earth\",\"distanceFromSun\":\"149,598,023 km\",\"diameter\":\"12,742 km\",\"moons\":\"1\",\"rockOrGas\":\"Rock\",\"averageTemperature\":\"14c\",\"habitable\":\"Yes\",\"lengthYear\":\"365.25 Earth Days\",\"lengthDay\":\"1 Earth Day\"},{\"name\":\"Mars\",\"distanceFromSun\":\"227,939,366 km\",\"diameter\":\"6,791.43 km\",\"moons\":\"2\",\"rockOrGas\":\"Rock\",\"averageTemperature\":\"-60c\",\"habitable\":\"Maybe one day\",\"lengthYear\":\"686.98 Earth Days\",\"lengthDay\":\"25 Hours\"},{\"name\":\"Jupiter\",\"distanceFromSun\":\"778 million km\",\"diameter\":\"142,984 km\",\"moons\":\"80\",\"rockOrGas\":\"Gas\",\"averageTemperature\":\"-108c\",\"habitable\":\"No\",\"lengthYear\":\"4,333 Earth Days\",\"lengthDay\":\"10 Hours\"},{\"name\":\"Saturn\",\"distanceFromSun\":\"1.433 billion km\",\"diameter\":\"25,000 km\",\"moons\":\"83 and Rings\",\"rockOrGas\":\"Gas\",\"averageTemperature\":\"-139c\",\"habitable\":\"No\",\"lengthYear\":\"10,759 Earth Days\",\"lengthDay\":\"11 Hours\"},{\"name\":\"Uranus\",\"distanceFromSun\":\"2.87 billion km\",\"diameter\":\"51,118 km\",\"moons\":\"27\",\"rockOrGas\":\"Gas\",\"averageTemperature\":\"-197c\",\"habitable\":\"No\",\"lengthYear\":\"30,687 Earth Days\",\"lengthDay\":\"17 Hours\"},{\"name\":\"Neptune\",\"distanceFromSun\":\"4.5 billion km\",\"diameter\":\"49,528 km\",\"moons\":\"14\",\"rockOrGas\":\"Gas\",\"averageTemperature\":\"-201c\",\"habitable\":\"No\",\"lengthYear\":\"60,190 Earth Days\",\"lengthDay\":\"16 Hours\"}]');\n\n//# sourceURL=webpack://solar-system/./src/planet-data.json?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;