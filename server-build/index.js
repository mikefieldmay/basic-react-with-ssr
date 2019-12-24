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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/loadData.tsx":
/*!******************************!*\
  !*** ./helpers/loadData.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\nexports.loadData = resourceType => {\n    return fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)\n        .then(res => {\n        return res.json();\n    })\n        .then(data => {\n        // only keep 10 first results\n        return data.filter((_, idx) => idx < 10);\n    });\n};\n\n\n//# sourceURL=webpack:///./helpers/loadData.tsx?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/routes */ \"./src/routes.tsx\");\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_routes__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/App */ \"./src/App.tsx\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_App__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a[\"static\"](\"./dist\"));\napp.get(\"/*\", function (req, res) {\n  var currentRoute = _src_routes__WEBPACK_IMPORTED_MODULE_6___default.a.find(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"matchPath\"])(req.url, route);\n  }) || {};\n  var promise = currentRoute.loadData ? currentRoute.loadData() : Promise.resolve(null);\n  promise.then(function (data) {\n    var context = {\n      data: data\n    };\n    var reactApp = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_8__[\"App\"], null)));\n    var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./dist/index.html\");\n    fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", function (err, data) {\n      if (context.status === 404) {\n        res.status(404).send(\"Oops, 404 Not Found!\");\n      }\n\n      if (err) {\n        console.error(\"Something went wrong:\", err);\n        return res.status(500).send(\"Oops, better luck next time!\");\n      } // not sure what this does....\n      // if (context.url) {\n      //   return res.redirect(301, context.url);\n      // }\n\n\n      return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(reactApp, \"</div>\")).replace(\"</body>\", \"<script>window.__ROUTE_DATA__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(data), \"</script></body>\")));\n    });\n  });\n});\napp.listen(PORT, function () {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst Posts_1 = __webpack_require__(/*! ./Posts */ \"./src/Posts.tsx\");\nconst Todos_1 = __webpack_require__(/*! ./Todos */ \"./src/Todos.tsx\");\nconst Home_1 = __webpack_require__(/*! ./Home */ \"./src/Home.tsx\");\nconst NotFound_1 = __webpack_require__(/*! ./NotFound */ \"./src/NotFound.tsx\");\nexports.App = props => {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"ul\", null,\n            react_1.default.createElement(\"li\", null,\n                react_1.default.createElement(react_router_dom_1.NavLink, { to: \"/\" }, \"Home\")),\n            react_1.default.createElement(\"li\", null,\n                react_1.default.createElement(react_router_dom_1.NavLink, { to: \"/todos\" }, \"Todos\")),\n            react_1.default.createElement(\"li\", null,\n                react_1.default.createElement(react_router_dom_1.NavLink, { to: \"/posts\" }, \"Posts\"))),\n        react_1.default.createElement(react_router_dom_1.Switch, null,\n            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/\", render: props => react_1.default.createElement(Home_1.Home, Object.assign({ name: \"Alligator.io\" }, props)) }),\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/todos\", component: Todos_1.Todos }),\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts\", component: Posts_1.Posts }),\n            react_1.default.createElement(react_router_dom_1.Route, { component: NotFound_1.NotFound }))));\n};\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/Home.tsx":
/*!**********************!*\
  !*** ./src/Home.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.Home = () => react_1.default.createElement(\"div\", null, \"This is Home\");\n\n\n//# sourceURL=webpack:///./src/Home.tsx?");

/***/ }),

/***/ "./src/NotFound.tsx":
/*!**************************!*\
  !*** ./src/NotFound.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.NotFound = ({ staticContext = { status: NaN } }) => {\n    staticContext.status = 404;\n    return react_1.default.createElement(\"h1\", null, \"Oops, nothing here!\");\n};\n\n\n//# sourceURL=webpack:///./src/NotFound.tsx?");

/***/ }),

/***/ "./src/Posts.tsx":
/*!***********************!*\
  !*** ./src/Posts.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst loadData_1 = __webpack_require__(/*! ../helpers/loadData */ \"./helpers/loadData.tsx\");\nconst globalAny = global;\nexports.Posts = props => {\n    const contextData = props.staticContext && props.staticContext.data\n        ? props.staticContext.data\n        : [];\n    const [data, setData] = react_1.useState(contextData);\n    react_1.useEffect(() => {\n        setTimeout(() => {\n            if (globalAny.window.__ROUTE_DATA__) {\n                setData(globalAny.window.__ROUTE_DATA__);\n                delete globalAny.window.__ROUTE_DATA__;\n            }\n            else {\n                loadData_1.loadData(\"posts\").then(data => {\n                    setData(data);\n                });\n            }\n        }, 0);\n    }, []);\n    return (react_1.default.createElement(\"ul\", null, data.map(posts => (react_1.default.createElement(\"li\", { key: posts.id }, posts.title)))));\n};\n\n\n//# sourceURL=webpack:///./src/Posts.tsx?");

/***/ }),

/***/ "./src/Todos.tsx":
/*!***********************!*\
  !*** ./src/Todos.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst loadData_1 = __webpack_require__(/*! ../helpers/loadData */ \"./helpers/loadData.tsx\");\nconst globalAny = global;\nexports.Todos = props => {\n    const contextData = props.staticContext && props.staticContext.data\n        ? props.staticContext.data\n        : [];\n    const [data, setData] = react_1.useState(contextData);\n    react_1.useEffect(() => {\n        setTimeout(() => {\n            if (globalAny.window.__ROUTE_DATA__) {\n                setData(globalAny.window.__ROUTE_DATA__);\n                delete globalAny.window.__ROUTE_DATA__;\n            }\n            else {\n                loadData_1.loadData(\"todos\").then(data => {\n                    setData(data);\n                });\n            }\n        }, 0);\n    }, []);\n    return (react_1.default.createElement(\"ul\", null, data.map(todo => (react_1.default.createElement(\"li\", { key: todo.id }, todo.title)))));\n};\n\n\n//# sourceURL=webpack:///./src/Todos.tsx?");

/***/ }),

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Home_1 = __webpack_require__(/*! ./Home */ \"./src/Home.tsx\");\nconst Posts_1 = __webpack_require__(/*! ./Posts */ \"./src/Posts.tsx\");\nconst Todos_1 = __webpack_require__(/*! ./Todos */ \"./src/Todos.tsx\");\nconst NotFound_1 = __webpack_require__(/*! ./NotFound */ \"./src/NotFound.tsx\");\nconst loadData_1 = __webpack_require__(/*! ../helpers/loadData */ \"./helpers/loadData.tsx\");\nconst Routes = [\n    {\n        path: \"/\",\n        exact: true,\n        component: Home_1.Home\n    },\n    {\n        path: \"/posts\",\n        component: Posts_1.Posts,\n        loadData: () => loadData_1.loadData(\"posts\")\n    },\n    {\n        path: \"/todos\",\n        component: Todos_1.Todos,\n        loadData: () => loadData_1.loadData(\"todos\")\n    },\n    {\n        component: NotFound_1.NotFound\n    }\n];\nexports.default = Routes;\n\n\n//# sourceURL=webpack:///./src/routes.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });