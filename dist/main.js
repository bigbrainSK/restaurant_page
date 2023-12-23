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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n\n    const content = document.getElementById('content');\n\n    const heading = document.createElement('h1');\n    const address = document.createElement('p');\n    const phoneNum = document.createElement('p');\n    \n    heading.textContent = 'Contact Information';\n    address.textContent = '1234 Street street, Middle of Nowhere';\n    phoneNum.textContent = '818-324-5844';\n    \n    content.appendChild(heading);\n    content.appendChild(address);\n    content.appendChild(phoneNum);\n\n    \n  } \n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMain: () => (/* binding */ loadMain)\n/* harmony export */ });\nloadMain();\n\n function loadMain() {\n    const content = document.getElementById('content');\n    const title = document.createElement('h1');\n    const caption = document.createElement('p');\n    const img = document.createElement('img');\n\n    title.textContent = 's-cakes';\n    caption.textContent = 'best pancakes in the city, original recipes created by chef SK';\n    img.src = 'pancakes.jpg';\n\n    content.appendChild(title);\n    content.appendChild(caption);\n    content.appendChild(img);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\n\n\nconst homeButton = document.createElement('button');\nhomeButton.innerText = 'Home';\ndocument.body.appendChild(homeButton);\nhomeButton.addEventListener('click', () => {\n    clearDisplay();\n    (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__.loadMain)();\n});\n\nconst contactButton = document.createElement('button');\ncontactButton.innerText = 'Contact Info';\ndocument.body.appendChild(contactButton);\ncontactButton.addEventListener('click', () => {\n    clearDisplay();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.loadContact)();\n});\n\nconst menuButton = document.createElement('button');\nmenuButton.innerText = 'Menu';\ndocument.body.appendChild(menuButton);\nmenuButton.addEventListener('click', () => {\n    clearDisplay();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n});\n\n\n\nfunction clearDisplay() {\n    while(content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n   \n    const content = document.getElementById('content');\n\n    const heading = document.createElement('h1');\n    const item1 = document.createElement('li'); \n    const item2 = document.createElement('li'); \n    const item3 = document.createElement('li'); \n    const item4 = document.createElement('li'); \n\n    heading.textContent = 'Menu';\n    item1.textContent = 'Chocolate chip';\n    item2.textContent = 'Brown sugar pecan';\n    item3.textContent = 'Salted caramel banana';\n    item4.textContent = 'Oreos with strawberries and matcha mascarpone';\n\n    content.appendChild(heading);\n    content.appendChild(item1);\n    content.appendChild(item2);\n    content.appendChild(item3);\n    content.appendChild(item4);\n\n  \n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;