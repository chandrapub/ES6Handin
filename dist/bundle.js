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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _person = __webpack_require__(/*! ./person */ \"./src/person.js\");\n\nvar _person2 = _interopRequireDefault(_person);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//Let and Const using\n\nvar a = 10;\nif (true) {\n    var _a = 20;\n    console.log(_a);\n}\nconsole.log(a);\n\nfunction demo() {\n    {\n        var x = 10;\n        {\n            var _x = 15;\n            console.log(_x);\n        }\n        x = 20;\n        console.log(x);\n    }\n}\ndocument.getElementById('myid').innerHTML = demo();\n\n//Template String\n\nvar name = 'Chandra';\nvar dept = 'Web development';\nvar email = 'chandrapub@gmail.com';\n\nvar details = 'Name: ' + name + ', Dept: ' + dept + ', and Email: ' + email;\n\n// document.getElementById('myid').innerHTML = details;\nconsole.log(details);\n\n//Using class improt from person file\n\nvar p1 = new _person2.default('Chandra Shekhar Mondal', 'chandrapub@gmail.com');\n\n// document.getElementById('myid').innerHTML = `Name: ${p1.name}, and Email: ${p1.email}`;\n\nconsole.log(p1.name);\n// const a = 10;\n// const b = 20;\n// const sum = (a, b) => a+b;\n\n// console.log(sum(a,b));\n\nfetch('https://jsonplaceholder.typicode.com/users').then(function (response) {\n    return response.json();\n}).then(function (body) {\n    var lis = body.map(function (data) {\n        var li = document.createElement('li');\n        var text = 'Name: ' + data.name + ', Email: ' + data.email;\n        var textNode = document.createTextNode(text);\n\n        li.appendChild(textNode);\n        return li;\n    });\n\n    lis.forEach(function (li) {\n        // document.getElementById('myid').appendChild(li);\n\n    });\n}).catch(function (err) {\n    return console.log(err);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Person = function () {\n    function Person(name, email) {\n        _classCallCheck(this, Person);\n\n        this.name = name;\n        this.email = email;\n    }\n\n    _createClass(Person, [{\n        key: \"print\",\n        value: function print() {\n            console.log(\"Name: \" + this.name + \", Email: \" + this.email);\n        }\n    }]);\n\n    return Person;\n}();\n\nexports.default = Person;\n\n//# sourceURL=webpack:///./src/person.js?");

/***/ })

/******/ });