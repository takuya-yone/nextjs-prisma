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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _prisma_client__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\",\n        \"error\",\n        \"info\",\n        \"warn\"\n    ]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUU3QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNELHdEQUFZLENBQUMsQ0FBQztJQUMvQkUsR0FBRyxFQUFFLENBQUM7UUFBQSxDQUFPO1FBQUUsQ0FBTztRQUFFLENBQU07UUFBRSxDQUFNO0lBQUEsQ0FBQztBQUN6QyxDQUFDO0FBQ0QsaUVBQWVELE1BQU0sRUFBQztBQUNRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XG4gIGxvZzogW1wicXVlcnlcIiwgXCJlcnJvclwiLCBcImluZm9cIiwgXCJ3YXJuXCJdLFxufSlcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbmV4cG9ydCAqIGZyb20gXCJAcHJpc21hL2NsaWVudFwiOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/hello.ts":
/*!****************************!*\
  !*** ./pages/api/hello.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function handler(req, res) {\n    const count = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requestHistory.count();\n    console.log(count);\n    res.status(200).json({\n        name: 'John Doe',\n        count: Number(count)\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGVsbG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFcUM7QUFPdEIsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCLENBQUM7SUFDRCxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNKLHdFQUEyQjtJQUMvQ00sT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7SUFDakJELEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0MsSUFBSSxFQUFFLENBQVU7UUFBQ04sS0FBSyxFQUFDTyxNQUFNLENBQUNQLEtBQUs7SUFBRSxDQUFDO0FBQy9ELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLy4vcGFnZXMvYXBpL2hlbGxvLnRzPzY1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5yZXF1ZXN0SGlzdG9yeS5jb3VudCgpO1xuICBjb25zb2xlLmxvZyhjb3VudCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyxjb3VudDpOdW1iZXIoY291bnQpIH0pXG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvdW50IiwicmVxdWVzdEhpc3RvcnkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/hello.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();