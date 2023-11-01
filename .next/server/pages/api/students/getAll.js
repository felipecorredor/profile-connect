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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsZUFBZSxHQUFHQyxNQUF4QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0YsZUFBZSxDQUFDRSxNQUFoQixJQUEwQixJQUFJSCx3REFBSixFQUF6QztBQUVBLElBQUksTUFBdUNDLGVBQWUsQ0FBQ0UsTUFBaEIsR0FBeUJBLE1BQXpCO0FBRTNDLGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VsbGVybi1yZWFjdC8uL2xpYnMvcHJpc21hZGIuanM/YmQyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.js\n");

/***/ }),

/***/ "(api)/./pages/api/students/getAll.js":
/*!**************************************!*\
  !*** ./pages/api/students/getAll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/prismadb */ \"(api)/./libs/prismadb.js\");\n\nasync function handle(req, res) {\n  try {\n    const students = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].student.findMany();\n    res.json(students);\n  } catch (error) {\n    console.error(\"Error getting students::\", error);\n    res.status(500).json({\n      error\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3R1ZGVudHMvZ2V0QWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxlQUFlQyxNQUFmLENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7RUFDN0MsSUFBSTtJQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNSix1RUFBQSxFQUF2QjtJQUVBRyxHQUFHLENBQUNJLElBQUosQ0FBU0gsUUFBVDtFQUNELENBSkQsQ0FJRSxPQUFPSSxLQUFQLEVBQWM7SUFDZEMsT0FBTyxDQUFDRCxLQUFSLENBQWMsMEJBQWQsRUFBMENBLEtBQTFDO0lBQ0FMLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLENBQXFCO01BQUVDO0lBQUYsQ0FBckI7RUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VsbGVybi1yZWFjdC8uL3BhZ2VzL2FwaS9zdHVkZW50cy9nZXRBbGwuanM/MDI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWJzL3ByaXNtYWRiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGNvbnN0IHN0dWRlbnRzID0gYXdhaXQgcHJpc21hLnN0dWRlbnQuZmluZE1hbnkoKTtcblxuICAgIHJlcy5qc29uKHN0dWRlbnRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBzdHVkZW50czo6XCIsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwic3R1ZGVudHMiLCJzdHVkZW50IiwiZmluZE1hbnkiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/students/getAll.js\n");

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