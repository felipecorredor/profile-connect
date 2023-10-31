"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/students/getAll";
exports.ids = ["pages/api/students/getAll"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./libs/prismadb.js":
/*!**************************!*\
  !*** ./libs/prismadb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxVQUFVLENBQUNDLE1BQVgsSUFBcUIsSUFBSUgsd0RBQUosRUFBcEM7QUFFQSxJQUFJLE1BQXVDRSxVQUFVLENBQUNDLE1BQVgsR0FBb0JGLE1BQXBCO0FBRTNDLGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VsbGVybi1yZWFjdC8uL2xpYnMvcHJpc21hZGIuanM/YmQyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgY2xpZW50ID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxUaGlzLnByaXNtYSA9IGNsaWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbFRoaXMiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.js\n");

/***/ }),

/***/ "(api)/./pages/api/students/getAll.js":
/*!**************************************!*\
  !*** ./pages/api/students/getAll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/prismadb */ \"(api)/./libs/prismadb.js\");\n\nasync function handler(_, res) {\n  try {\n    const students = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].student.findMany();\n    res.status(200).json({\n      students\n    });\n  } catch (error) {\n    res.status(500).send({\n      error\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3R1ZGVudHMvZ2V0QWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxDQUF2QixFQUEwQkMsR0FBMUIsRUFBK0I7RUFDNUMsSUFBSTtJQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNSix1RUFBQSxFQUF2QjtJQUVBRyxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFSjtJQUFGLENBQXJCO0VBQ0QsQ0FKRCxDQUlFLE9BQU9LLEtBQVAsRUFBYztJQUNkTixHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCRyxJQUFoQixDQUFxQjtNQUFFRDtJQUFGLENBQXJCO0VBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlbGxlcm4tcmVhY3QvLi9wYWdlcy9hcGkvc3R1ZGVudHMvZ2V0QWxsLmpzPzAyNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGlicy9wcmlzbWFkYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKF8sIHJlcykge1xuICB0cnkge1xuICAgIGNvbnN0IHN0dWRlbnRzID0gYXdhaXQgcHJpc21hLnN0dWRlbnQuZmluZE1hbnkoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3R1ZGVudHMgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBlcnJvciB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJfIiwicmVzIiwic3R1ZGVudHMiLCJzdHVkZW50IiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/students/getAll.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/students/getAll.js"));
module.exports = __webpack_exports__;

})();