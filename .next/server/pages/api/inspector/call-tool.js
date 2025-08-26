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
exports.id = "pages/api/inspector/call-tool";
exports.ids = ["pages/api/inspector/call-tool"];
exports.modules = {

/***/ "(api)/./tools lazy recursive ^\\.\\/.*$":
/*!******************************************************!*\
  !*** ./tools/ lazy ^\.\/.*$ strict namespace object ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./paths": [
		"(api)/./tools/paths.js"
	],
	"./paths.js": [
		"(api)/./tools/paths.js"
	],
	"./paytal/company": [
		"(api)/./tools/paytal/company.js",
		"_api_tools_paytal_company_js"
	],
	"./paytal/company-details": [
		"(api)/./tools/paytal/company-details.js",
		"_api_tools_paytal_company-details_js"
	],
	"./paytal/company-details.js": [
		"(api)/./tools/paytal/company-details.js",
		"_api_tools_paytal_company-details_js"
	],
	"./paytal/company.js": [
		"(api)/./tools/paytal/company.js",
		"_api_tools_paytal_company_js"
	],
	"./paytal/login-using-otp": [
		"(api)/./tools/paytal/login-using-otp.js",
		"_api_tools_paytal_login-using-otp_js"
	],
	"./paytal/login-using-otp.js": [
		"(api)/./tools/paytal/login-using-otp.js",
		"_api_tools_paytal_login-using-otp_js"
	],
	"./paytal/request-otp-for-login": [
		"(api)/./tools/paytal/request-otp-for-login.js",
		"_api_tools_paytal_request-otp-for-login_js"
	],
	"./paytal/request-otp-for-login.js": [
		"(api)/./tools/paytal/request-otp-for-login.js",
		"_api_tools_paytal_request-otp-for-login_js"
	],
	"./paytal/upload": [
		"(api)/./tools/paytal/upload.js",
		"_api_tools_paytal_upload_js"
	],
	"./paytal/upload.js": [
		"(api)/./tools/paytal/upload.js",
		"_api_tools_paytal_upload_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(api)/./tools lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("form-data");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Finspector%2Fcall-tool&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Finspector%2Fcall-tool.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Finspector%2Fcall-tool&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Finspector%2Fcall-tool.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_inspector_call_tool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/inspector/call-tool.js */ \"(api)/./pages/api/inspector/call-tool.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_inspector_call_tool_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_inspector_call_tool_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/inspector/call-tool\",\n        pathname: \"/api/inspector/call-tool\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_inspector_call_tool_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmluc3BlY3RvciUyRmNhbGwtdG9vbCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGaW5zcGVjdG9yJTJGY2FsbC10b29sLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQytEO0FBQy9EO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw4REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsOERBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9zdG1hbi1tY3AtZ2VuZXJhdG9yLW1jcC8/ODRjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL2luc3BlY3Rvci9jYWxsLXRvb2wuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9pbnNwZWN0b3IvY2FsbC10b29sXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvaW5zcGVjdG9yL2NhbGwtdG9vbFwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Finspector%2Fcall-tool&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Finspector%2Fcall-tool.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/tools.js":
/*!**********************!*\
  !*** ./lib/tools.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   discoverTools: () => (/* binding */ discoverTools)\n/* harmony export */ });\n/* harmony import */ var _tools_paths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/paths.js */ \"(api)/./tools/paths.js\");\n\n/**\n * Discovers and loads available tools from the tools directory\n * @returns {Promise<Array>} Array of tool objects\n */ async function discoverTools() {\n    const toolPromises = _tools_paths_js__WEBPACK_IMPORTED_MODULE_0__.toolPaths.map(async (file)=>{\n        const module = await __webpack_require__(\"(api)/./tools lazy recursive ^\\\\.\\\\/.*$\")(`./${file}`);\n        return {\n            ...module.apiTool,\n            path: file\n        };\n    });\n    return Promise.all(toolPromises);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdG9vbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFFOUM7OztDQUdDLEdBQ00sZUFBZUM7SUFDcEIsTUFBTUMsZUFBZUYsc0RBQVNBLENBQUNHLEdBQUcsQ0FBQyxPQUFPQztRQUN4QyxNQUFNQyxTQUFTLE1BQU0sK0RBQU8sR0FBVSxFQUFFRCxLQUFLLENBQUMsQ0FBQztRQUMvQyxPQUFPO1lBQ0wsR0FBR0MsT0FBT0MsT0FBTztZQUNqQkMsTUFBTUg7UUFDUjtJQUNGO0lBQ0EsT0FBT0ksUUFBUUMsR0FBRyxDQUFDUDtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvc3RtYW4tbWNwLWdlbmVyYXRvci1tY3AvLi9saWIvdG9vbHMuanM/ZWNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b29sUGF0aHMgfSBmcm9tIFwiLi4vdG9vbHMvcGF0aHMuanNcIjtcblxuLyoqXG4gKiBEaXNjb3ZlcnMgYW5kIGxvYWRzIGF2YWlsYWJsZSB0b29scyBmcm9tIHRoZSB0b29scyBkaXJlY3RvcnlcbiAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5Pn0gQXJyYXkgb2YgdG9vbCBvYmplY3RzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNjb3ZlclRvb2xzKCkge1xuICBjb25zdCB0b29sUHJvbWlzZXMgPSB0b29sUGF0aHMubWFwKGFzeW5jIChmaWxlKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KGAuLi90b29scy8ke2ZpbGV9YCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm1vZHVsZS5hcGlUb29sLFxuICAgICAgcGF0aDogZmlsZSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHRvb2xQcm9taXNlcyk7XG59XG4iXSwibmFtZXMiOlsidG9vbFBhdGhzIiwiZGlzY292ZXJUb29scyIsInRvb2xQcm9taXNlcyIsIm1hcCIsImZpbGUiLCJtb2R1bGUiLCJhcGlUb29sIiwicGF0aCIsIlByb21pc2UiLCJhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/tools.js\n");

/***/ }),

/***/ "(api)/./pages/api/inspector/call-tool.js":
/*!******************************************!*\
  !*** ./pages/api/inspector/call-tool.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/tools.js */ \"(api)/./lib/tools.js\");\n// pages/api/inspector/call-tool.js\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n    const { name, args = {} } = req.body || {};\n    if (!name) return res.status(400).json({\n        error: \"Missing tool name\"\n    });\n    try {\n        const tools = await (0,_lib_tools_js__WEBPACK_IMPORTED_MODULE_0__.discoverTools)();\n        const tool = tools.find((t)=>t?.definition?.function?.name === name);\n        if (!tool) return res.status(404).json({\n            error: `Unknown tool: ${name}`\n        });\n        // Validate required params (lightweight)\n        const required = tool.definition?.function?.parameters?.required || [];\n        for (const r of required){\n            if (!(r in args)) {\n                return res.status(400).json({\n                    error: `Missing required parameter: ${r}`\n                });\n            }\n        }\n        const result = await tool.function(args);\n        res.status(200).json({\n            ok: true,\n            result\n        });\n    } catch (err) {\n        res.status(500).json({\n            ok: false,\n            error: String(err?.message || err)\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW5zcGVjdG9yL2NhbGwtdG9vbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFtQztBQUNtQjtBQUV2QyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVEsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQXFCO0lBQ3JGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUdQLElBQUlRLElBQUksSUFBSSxDQUFDO0lBQ3pDLElBQUksQ0FBQ0YsTUFBTSxPQUFPTCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBb0I7SUFFcEUsSUFBSTtRQUNGLE1BQU1JLFFBQVEsTUFBTVgsNERBQWFBO1FBQ2pDLE1BQU1ZLE9BQU9ELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxHQUFHQyxZQUFZQyxVQUFVUixTQUFTQTtRQUNqRSxJQUFJLENBQUNJLE1BQU0sT0FBT1QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPLENBQUMsY0FBYyxFQUFFQyxLQUFLLENBQUM7UUFBQztRQUV4RSx5Q0FBeUM7UUFDekMsTUFBTVMsV0FBV0wsS0FBS0csVUFBVSxFQUFFQyxVQUFVRSxZQUFZRCxZQUFZLEVBQUU7UUFDdEUsS0FBSyxNQUFNRSxLQUFLRixTQUFVO1lBQ3hCLElBQUksQ0FBRUUsQ0FBQUEsS0FBS1YsSUFBRyxHQUFJO2dCQUNoQixPQUFPTixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPLENBQUMsNEJBQTRCLEVBQUVZLEVBQUUsQ0FBQztnQkFBQztZQUMxRTtRQUNGO1FBRUEsTUFBTUMsU0FBUyxNQUFNUixLQUFLSSxRQUFRLENBQUNQO1FBQ25DTixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVlLElBQUk7WUFBTUQ7UUFBTztJQUMxQyxFQUFFLE9BQU9FLEtBQUs7UUFDWm5CLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRWUsSUFBSTtZQUFPZCxPQUFPZ0IsT0FBT0QsS0FBS0UsV0FBV0Y7UUFBSztJQUN2RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9zdG1hbi1tY3AtZ2VuZXJhdG9yLW1jcC8uL3BhZ2VzL2FwaS9pbnNwZWN0b3IvY2FsbC10b29sLmpzP2Y4ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL2luc3BlY3Rvci9jYWxsLXRvb2wuanNcbmltcG9ydCB7IGRpc2NvdmVyVG9vbHMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Rvb2xzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgY29uc3QgeyBuYW1lLCBhcmdzID0ge30gfSA9IHJlcS5ib2R5IHx8IHt9O1xuICBpZiAoIW5hbWUpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgdG9vbCBuYW1lXCIgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB0b29scyA9IGF3YWl0IGRpc2NvdmVyVG9vbHMoKTtcbiAgICBjb25zdCB0b29sID0gdG9vbHMuZmluZCgodCkgPT4gdD8uZGVmaW5pdGlvbj8uZnVuY3Rpb24/Lm5hbWUgPT09IG5hbWUpO1xuICAgIGlmICghdG9vbCkgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IGBVbmtub3duIHRvb2w6ICR7bmFtZX1gIH0pO1xuXG4gICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgcGFyYW1zIChsaWdodHdlaWdodClcbiAgICBjb25zdCByZXF1aXJlZCA9IHRvb2wuZGVmaW5pdGlvbj8uZnVuY3Rpb24/LnBhcmFtZXRlcnM/LnJlcXVpcmVkIHx8IFtdO1xuICAgIGZvciAoY29uc3QgciBvZiByZXF1aXJlZCkge1xuICAgICAgaWYgKCEociBpbiBhcmdzKSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogYE1pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyOiAke3J9YCB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0b29sLmZ1bmN0aW9uKGFyZ3MpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb2s6IHRydWUsIHJlc3VsdCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBvazogZmFsc2UsIGVycm9yOiBTdHJpbmcoZXJyPy5tZXNzYWdlIHx8IGVycikgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkaXNjb3ZlclRvb2xzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm5hbWUiLCJhcmdzIiwiYm9keSIsInRvb2xzIiwidG9vbCIsImZpbmQiLCJ0IiwiZGVmaW5pdGlvbiIsImZ1bmN0aW9uIiwicmVxdWlyZWQiLCJwYXJhbWV0ZXJzIiwiciIsInJlc3VsdCIsIm9rIiwiZXJyIiwiU3RyaW5nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/inspector/call-tool.js\n");

/***/ }),

/***/ "(api)/./tools/paths.js":
/*!************************!*\
  !*** ./tools/paths.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toolPaths: () => (/* binding */ toolPaths)\n/* harmony export */ });\nconst toolPaths = [\n    \"paytal/request-otp-for-login.js\",\n    \"paytal/company.js\",\n    \"paytal/upload.js\",\n    \"paytal/login-using-otp.js\",\n    \"paytal/company-details.js\"\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi90b29scy9wYXRocy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsWUFBWTtJQUN2QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvc3RtYW4tbWNwLWdlbmVyYXRvci1tY3AvLi90b29scy9wYXRocy5qcz9iZTE3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0b29sUGF0aHMgPSBbXG4gICdwYXl0YWwvcmVxdWVzdC1vdHAtZm9yLWxvZ2luLmpzJyxcbiAgJ3BheXRhbC9jb21wYW55LmpzJyxcbiAgJ3BheXRhbC91cGxvYWQuanMnLFxuICAncGF5dGFsL2xvZ2luLXVzaW5nLW90cC5qcycsXG4gICdwYXl0YWwvY29tcGFueS1kZXRhaWxzLmpzJ1xuXTsiXSwibmFtZXMiOlsidG9vbFBhdGhzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./tools/paths.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Finspector%2Fcall-tool&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Finspector%2Fcall-tool.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();