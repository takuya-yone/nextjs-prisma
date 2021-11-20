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
exports.id = "pages/api/count";
exports.ids = ["pages/api/count"];
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

/***/ "./pages/api/count.ts":
/*!****************************!*\
  !*** ./pages/api/count.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function handler(req, res) {\n    const count = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requestHistory.count();\n    console.log(count);\n    res.status(200).json({\n        count: Number(count)\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY291bnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFcUM7QUFNdEIsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCLENBQUM7SUFDRCxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNKLHdFQUEyQjtJQUMvQ00sT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUs7SUFDakJELEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNMO1FBQUFBLEtBQUssRUFBQ00sTUFBTSxDQUFDTixLQUFLO0lBQUUsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS8uL3BhZ2VzL2FwaS9jb3VudC50cz8zYzNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG50eXBlIERhdGEgPSB7XG4gIGNvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICBjb25zdCBjb3VudCA9IGF3YWl0IHByaXNtYS5yZXF1ZXN0SGlzdG9yeS5jb3VudCgpO1xuICBjb25zb2xlLmxvZyhjb3VudCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtjb3VudDpOdW1iZXIoY291bnQpIH0pXG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvdW50IiwicmVxdWVzdEhpc3RvcnkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/count.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/count.ts"));
module.exports = __webpack_exports__;

})();