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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nconst _excluded = [\"session\"];\nvar _jsxFileName = \"/Users/felipecorredor/Documents/UManizales/profile-connect/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  let {\n    Component,\n    pageProps: {\n      session\n    }\n  } = _ref,\n      pageProps = _objectWithoutProperties(_ref.pageProps, _excluded);\n\n  const {\n    0: loading,\n    1: setLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setTimeout(() => {\n      setLoading(false);\n    }, 1000);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n    session: session,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n          children: \"Universidad de Manizales - Educaci\\xF3n & Oportunidad || Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"shortcut icon\",\n          href: \"assets/images/favicon.png\",\n          type: \"image/x-icon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/flaticon.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/font-awesome-5.9.0.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/bootstrap-4.5.3.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/magnific-popup.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/nice-select.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/jquery-ui.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/animate.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/slick.min.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"assets/css/style.css\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"preloader\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSyxLQUFULE9BQW9FO0VBQUEsSUFBckQ7SUFBRUMsU0FBRjtJQUFhQyxTQUFTLEVBQUU7TUFBRUM7SUFBRjtFQUF4QixDQUFxRDtFQUFBLElBQWZELFNBQWUsaUNBQXhDQSxTQUF3Qzs7RUFDbEUsTUFBTTtJQUFBLEdBQUNFLE9BQUQ7SUFBQSxHQUFVQztFQUFWLElBQXdCUCwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7RUFDQUQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RTLFVBQVUsQ0FBQyxNQUFNO01BQ2ZELFVBQVUsQ0FBQyxLQUFELENBQVY7SUFDRCxDQUZTLEVBRVAsSUFGTyxDQUFWO0VBR0QsQ0FKUSxFQUlOLEVBSk0sQ0FBVDtFQU1BLG9CQUNFLDhEQUFDLDREQUFEO0lBQWlCLE9BQU8sRUFBRUYsT0FBMUI7SUFBQSx1QkFDRSw4REFBQywyQ0FBRDtNQUFBLHdCQUNFLDhEQUFDLGtEQUFEO1FBQUEsd0JBQ0U7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFERixlQUtFO1VBQ0UsR0FBRyxFQUFDLGVBRE47VUFFRSxJQUFJLEVBQUMsMkJBRlA7VUFHRSxJQUFJLEVBQUM7UUFIUDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBTEYsZUFXRTtVQUNFLElBQUksRUFBQywwSEFEUDtVQUVFLEdBQUcsRUFBQztRQUZOO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFYRixlQWdCRTtVQUFNLEdBQUcsRUFBQyxZQUFWO1VBQXVCLElBQUksRUFBQztRQUE1QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBaEJGLGVBa0JFO1VBQU0sR0FBRyxFQUFDLFlBQVY7VUFBdUIsSUFBSSxFQUFDO1FBQTVCO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFsQkYsZUFvQkU7VUFBTSxHQUFHLEVBQUMsWUFBVjtVQUF1QixJQUFJLEVBQUM7UUFBNUI7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQXBCRixlQXNCRTtVQUFNLEdBQUcsRUFBQyxZQUFWO1VBQXVCLElBQUksRUFBQztRQUE1QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBdEJGLGVBd0JFO1VBQU0sR0FBRyxFQUFDLFlBQVY7VUFBdUIsSUFBSSxFQUFDO1FBQTVCO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUF4QkYsZUEwQkU7VUFBTSxHQUFHLEVBQUMsWUFBVjtVQUF1QixJQUFJLEVBQUM7UUFBNUI7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQTFCRixlQTRCRTtVQUFNLEdBQUcsRUFBQyxZQUFWO1VBQXVCLElBQUksRUFBQztRQUE1QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBNUJGLGVBOEJFO1VBQU0sR0FBRyxFQUFDLFlBQVY7VUFBdUIsSUFBSSxFQUFDO1FBQTVCO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUE5QkYsZUFnQ0U7VUFBTSxHQUFHLEVBQUMsWUFBVjtVQUF1QixJQUFJLEVBQUM7UUFBNUI7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQWhDRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixFQW1DR0MsT0FBTyxpQkFBSTtRQUFLLFNBQVMsRUFBQztNQUFmO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFuQ2QsZUFvQ0UsOERBQUMsU0FBRCxvQkFBZUYsU0FBZjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBcENGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQTBDRDs7QUFFRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlbGxlcm4tcmVhY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgVW5pdmVyc2lkYWQgZGUgTWFuaXphbGVzIC0gRWR1Y2FjacOzbiAmYW1wOyBPcG9ydHVuaWRhZCB8fCBIb21lXHJcbiAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgey8qPT09PT09IEZhdmljb24gSWNvbiA9PT09PT0qL31cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxyXG4gICAgICAgICAgICBocmVmPVwiYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKj09PT09PSBHb29nbGUgRm9udHMgPT09PT09Ki99XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6d2dodEA0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PU9zd2FsZDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qPT09PT09IEZsYXRpY29uID09PT09PSovfVxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJhc3NldHMvY3NzL2ZsYXRpY29uLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgey8qPT09PT09IEZvbnQgQXdlc29tZSA9PT09PT0qL31cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiYXNzZXRzL2Nzcy9mb250LWF3ZXNvbWUtNS45LjAubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICB7Lyo9PT09PT0gQm9vdHN0cmFwID09PT09PSovfVxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJhc3NldHMvY3NzL2Jvb3RzdHJhcC00LjUuMy5taW4uY3NzXCIgLz5cclxuICAgICAgICAgIHsvKj09PT09PSBNYWduaWZpYyBQb3B1cCA9PT09PT0qL31cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiYXNzZXRzL2Nzcy9tYWduaWZpYy1wb3B1cC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgIHsvKj09PT09PSBOaWNlIFNlbGVjdCA9PT09PT0qL31cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiYXNzZXRzL2Nzcy9uaWNlLXNlbGVjdC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgIHsvKj09PT09PSBqUXVlcnkgVUkgPT09PT09Ki99XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImFzc2V0cy9jc3MvanF1ZXJ5LXVpLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgey8qPT09PT09IEFuaW1hdGUgPT09PT09Ki99XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImFzc2V0cy9jc3MvYW5pbWF0ZS5taW4uY3NzXCIgLz5cclxuICAgICAgICAgIHsvKj09PT09PSBTbGljayA9PT09PT0qL31cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiYXNzZXRzL2Nzcy9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICAgIHsvKj09PT09PSBNYWluIFN0eWxlID09PT09PSovfVxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJhc3NldHMvY3NzL3N0eWxlLmNzc1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIHtsb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyXCIgLz59XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlc3Npb25Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();