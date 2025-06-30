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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portofolio/./src/css/style.css?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n// Import CSS\r\n\r\n\r\n// Dark Toogle\r\nconst darkToggle = document.getElementById('dark-toggle');\r\nconst html = document.querySelector('html');\r\nconst buttonDarkToggle = darkToggle.firstElementChild;\r\nconst toTop = document.getElementById('to-top');\r\n\r\ndarkToggle.addEventListener('click', function () {\r\n    if (html.classList.contains('dark')){\r\n        html.classList.remove('dark');\r\n        buttonDarkToggle.classList.remove('translate-x-4');\r\n        localStorage.theme = \"light\";\r\n    } else {\r\n        html.classList.add('dark');\r\n        buttonDarkToggle.classList.add('translate-x-4');\r\n        localStorage.theme = \"dark\";\r\n    }\r\n});\r\n\r\nif (html.classList.contains('dark')){\r\n    buttonDarkToggle.classList.add('translate-x-4');\r\n}\r\n\r\n\r\nlet isScrollingToTop = false;\r\n\r\n// Navbar Fixed\r\nwindow.onscroll = function () {\r\n    const header = document.querySelector('header');\r\n    const fixedNav = header.offsetTop;\r\n\r\n    if (isScrollingToTop) return;\r\n\r\n    if (window.pageYOffset > fixedNav) {\r\n        header.classList.add('navbar-fixed');\r\n        toTop.classList.add('flex');\r\n        toTop.classList.remove('hidden');\r\n    } else {\r\n        header.classList.remove('navbar-fixed');\r\n        toTop.classList.remove('flex');\r\n        toTop.classList.add('hidden');\r\n    }\r\n}\r\n\r\n// Hidden toTop after clicking\r\ntoTop.addEventListener('click', function () {\r\n    isScrollingToTop = true;\r\n    toTop.classList.add('hidden');\r\n    toTop.classList.remove('flex');\r\n\r\n    // Tunggu hingga scroll selesai\r\n    const checkIfAtTop = setInterval(() => {\r\n        if (window.pageYOffset === 0) {\r\n            isScrollingToTop = false;\r\n            clearInterval(checkIfAtTop);\r\n        }\r\n    }, 100);\r\n});\r\n\r\n// Hamburger Menu\r\nconst hamburger = document.getElementById('hamburger');\r\nconst navMenu = document.getElementById('nav-menu');\r\n\r\nhamburger.addEventListener('click', function () {\r\n    hamburger.classList.toggle('hamburger-active');\r\n    navMenu.classList.toggle('hidden');\r\n    console.log('ok');\r\n})\r\n\r\n// Klik di luar hamburger\r\nwindow.addEventListener('click', function (e) {\r\n    if (e.target != hamburger && e.target != navMenu) {\r\n        hamburger.classList.remove('hamburger-active');\r\n        navMenu.classList.add('hidden');\r\n    }\r\n});\n\n//# sourceURL=webpack://my-portofolio/./src/js/script.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;