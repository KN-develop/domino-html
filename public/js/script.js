/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/icons.js":
/*!*******************************!*\
  !*** ./assets/icons/icons.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svg_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg/phone.svg */ \"./assets/icons/svg/phone.svg\");\n/* harmony import */ var _svg_telegram_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/telegram.svg */ \"./assets/icons/svg/telegram.svg\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbnMvaWNvbnMuanM/MDdjNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBeUIiLCJmaWxlIjoiLi9hc3NldHMvaWNvbnMvaWNvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N2Zy9waG9uZS5zdmdcIjtcbmltcG9ydCBcIi4vc3ZnL3RlbGVncmFtLnN2Z1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/icons/icons.js\n");

/***/ }),

/***/ "./assets/icons/svg/phone.svg":
/*!************************************!*\
  !*** ./assets/icons/svg/phone.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-phone-usage\",\n      viewBox: \"0 0 24 24\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-phone\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbnMvc3ZnL3Bob25lLnN2Zz82MDBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL2Fzc2V0cy9pY29ucy9zdmcvcGhvbmUuc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1waG9uZS11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1waG9uZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/icons/svg/phone.svg\n");

/***/ }),

/***/ "./assets/icons/svg/telegram.svg":
/*!***************************************!*\
  !*** ./assets/icons/svg/telegram.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-telegram-usage\",\n      viewBox: \"0 0 16 15\",\n      url: __webpack_require__.p + \"./images/icons/sprite.svg#icon-telegram\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbnMvc3ZnL3RlbGVncmFtLnN2Zz8yNjA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxxQkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiIuL2Fzc2V0cy9pY29ucy9zdmcvdGVsZWdyYW0uc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi10ZWxlZ3JhbS11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTYgMTVcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi10ZWxlZ3JhbVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/icons/svg/telegram.svg\n");

/***/ }),

/***/ "./assets/js/modules/burger-menu.js":
/*!******************************************!*\
  !*** ./assets/js/modules/burger-menu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleMenu; });\nvar SELECTORS = {\n  menu: \"[data-menu]\",\n  menuBtn: \"[data-menu-btn]\"\n};\nvar CLASSES = {\n  burgerOpen: \"menu--open\"\n};\nfunction toggleMenu() {\n  document.querySelectorAll(SELECTORS.menuBtn).forEach(function (btn) {\n    btn.addEventListener(\"click\", function () {\n      var menu = btn.closest(SELECTORS.menu);\n      menu.classList.toggle(CLASSES.burgerOpen);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9idXJnZXItbWVudS5qcz8xMGNkIl0sIm5hbWVzIjpbIlNFTEVDVE9SUyIsIm1lbnUiLCJtZW51QnRuIiwiQ0xBU1NFUyIsImJ1cmdlck9wZW4iLCJ0b2dnbGVNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsSUFBTUEsU0FBUyxHQUFHO0VBQ2hCQyxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsT0FBTyxFQUFFO0FBQ1gsQ0FBQztBQUVELElBQU1DLE9BQU8sR0FBRztFQUNkQyxVQUFVLEVBQUU7QUFDZCxDQUFDO0FBRWMsU0FBU0MsVUFBVUEsQ0FBQSxFQUFHO0VBQ25DQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDUCxTQUFTLENBQUNFLE9BQU8sQ0FBQyxDQUFDTSxPQUFPLENBQUMsVUFBQ0MsR0FBRyxFQUFLO0lBQzVEQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ2xDLElBQU1ULElBQUksR0FBR1EsR0FBRyxDQUFDRSxPQUFPLENBQUNYLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDO01BQ3hDQSxJQUFJLENBQUNXLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDVixPQUFPLENBQUNDLFVBQVUsQ0FBQztJQUMzQyxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSiIsImZpbGUiOiIuL2Fzc2V0cy9qcy9tb2R1bGVzL2J1cmdlci1tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU0VMRUNUT1JTID0ge1xuICBtZW51OiBcIltkYXRhLW1lbnVdXCIsXG4gIG1lbnVCdG46IFwiW2RhdGEtbWVudS1idG5dXCIsXG59O1xuXG5jb25zdCBDTEFTU0VTID0ge1xuICBidXJnZXJPcGVuOiBcIm1lbnUtLW9wZW5cIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JTLm1lbnVCdG4pLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgbWVudSA9IGJ0bi5jbG9zZXN0KFNFTEVDVE9SUy5tZW51KTtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU0VTLmJ1cmdlck9wZW4pO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/modules/burger-menu.js\n");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger-menu */ \"./assets/js/modules/burger-menu.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  Object(_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2NyaXB0LmpzPzgyMDUiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1lbnUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBK0M7QUFFL0NBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoREMsb0VBQVUsQ0FBQyxDQUFDO0FBQ2QsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL3NjcmlwdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2dnbGVNZW51IGZyb20gXCIuL21vZHVsZXMvYnVyZ2VyLW1lbnVcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgdG9nZ2xlTWVudSgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/script.js\n");

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzP2QwMTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/scss/style.scss\n");

/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi ./assets/js/script.js ./assets/scss/style.scss ./assets/icons/icons.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/js/script.js */"./assets/js/script.js");
__webpack_require__(/*! ./assets/scss/style.scss */"./assets/scss/style.scss");
module.exports = __webpack_require__(/*! ./assets/icons/icons.js */"./assets/icons/icons.js");


/***/ })

/******/ });