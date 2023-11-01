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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./libs/prismadb.js":
/*!**************************!*\
  !*** ./libs/prismadb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsZUFBZSxHQUFHQyxNQUF4QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0YsZUFBZSxDQUFDRSxNQUFoQixJQUEwQixJQUFJSCx3REFBSixFQUF6QztBQUVBLElBQUksTUFBdUNDLGVBQWUsQ0FBQ0UsTUFBaEIsR0FBeUJBLE1BQXpCO0FBRTNDLGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VsbGVybi1yZWFjdC8uL2xpYnMvcHJpc21hZGIuanM/YmQyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsO1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/prismadb */ \"(api)/./libs/prismadb.js\");\n\n\n\n\n\nconst authOptions = {\n  adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_libs_prismadb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n  providers: [next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n    name: \"credentials\",\n    credentials: {\n      email: {\n        label: \"email\",\n        type: \"text\"\n      },\n      password: {\n        label: \"password\",\n        type: \"password\"\n      }\n    },\n\n    async authorize(credentials) {\n      if (!credentials?.email || !credentials?.password) {\n        throw new Error(\"Invalid credentials\");\n      }\n\n      const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_4__[\"default\"].user.findUnique({\n        where: {\n          email: credentials.email\n        }\n      });\n\n      if (!user || !user?.hashedPassword) {\n        throw new Error(\"Invalid credentials\");\n      }\n\n      const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.hashedPassword);\n\n      if (!isCorrectPassword) {\n        throw new Error(\"Invalid credentials\");\n      }\n\n      return user;\n    }\n\n  })],\n  pages: {\n    signIn: \"/\"\n  },\n  debug: true,\n  session: {\n    strategy: \"jwt\"\n  },\n  secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLE1BQU1LLFdBQVcsR0FBRztFQUN6QkMsT0FBTyxFQUFFSCx3RUFBYSxDQUFDQyxzREFBRCxDQURHO0VBRXpCRyxTQUFTLEVBQUUsQ0FDVEwsc0VBQW1CLENBQUM7SUFDbEJNLElBQUksRUFBRSxhQURZO0lBRWxCQyxXQUFXLEVBQUU7TUFDWEMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRSxPQUFUO1FBQWtCQyxJQUFJLEVBQUU7TUFBeEIsQ0FESTtNQUVYQyxRQUFRLEVBQUU7UUFBRUYsS0FBSyxFQUFFLFVBQVQ7UUFBcUJDLElBQUksRUFBRTtNQUEzQjtJQUZDLENBRks7O0lBTWxCLE1BQU1FLFNBQU4sQ0FBZ0JMLFdBQWhCLEVBQTZCO01BQzNCLElBQUksQ0FBQ0EsV0FBVyxFQUFFQyxLQUFkLElBQXVCLENBQUNELFdBQVcsRUFBRUksUUFBekMsRUFBbUQ7UUFDakQsTUFBTSxJQUFJRSxLQUFKLENBQVUscUJBQVYsQ0FBTjtNQUNEOztNQUVELE1BQU1DLElBQUksR0FBRyxNQUFNWixzRUFBQSxDQUF1QjtRQUN4Q2MsS0FBSyxFQUFFO1VBQ0xSLEtBQUssRUFBRUQsV0FBVyxDQUFDQztRQURkO01BRGlDLENBQXZCLENBQW5COztNQU1BLElBQUksQ0FBQ00sSUFBRCxJQUFTLENBQUNBLElBQUksRUFBRUcsY0FBcEIsRUFBb0M7UUFDbEMsTUFBTSxJQUFJSixLQUFKLENBQVUscUJBQVYsQ0FBTjtNQUNEOztNQUVELE1BQU1LLGlCQUFpQixHQUFHLE1BQU1wQixxREFBQSxDQUM5QlMsV0FBVyxDQUFDSSxRQURrQixFQUU5QkcsSUFBSSxDQUFDRyxjQUZ5QixDQUFoQzs7TUFLQSxJQUFJLENBQUNDLGlCQUFMLEVBQXdCO1FBQ3RCLE1BQU0sSUFBSUwsS0FBSixDQUFVLHFCQUFWLENBQU47TUFDRDs7TUFFRCxPQUFPQyxJQUFQO0lBQ0Q7O0VBL0JpQixDQUFELENBRFYsQ0FGYztFQXFDekJNLEtBQUssRUFBRTtJQUNMQyxNQUFNLEVBQUU7RUFESCxDQXJDa0I7RUF3Q3pCQyxLQUFLLE1BeENvQjtFQXlDekJDLE9BQU8sRUFBRTtJQUNQQyxRQUFRLEVBQUU7RUFESCxDQXpDZ0I7RUE0Q3pCQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQTVDSyxDQUFwQjtBQStDUCxpRUFBZTdCLGdEQUFRLENBQUNJLFdBQUQsQ0FBdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWxsZXJuLXJlYWN0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiL2xpYnMvcHJpc21hZGJcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiZW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwicGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyPy5oYXNoZWRQYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIuaGFzaGVkUGFzc3dvcmRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL1wiLFxuICB9LFxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiaXNDb3JyZWN0UGFzc3dvcmQiLCJjb21wYXJlIiwicGFnZXMiLCJzaWduSW4iLCJkZWJ1ZyIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();