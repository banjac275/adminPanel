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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let isClicked = 0;\ndocument.querySelector(\".nav_top--menu_btn\").addEventListener(\"click\", e => {\n  let btn = document.querySelector(\".nav_top--menu_btn\");\n  let side = document.querySelector(\".nav_sidebar--wrapper\");\n  let main = document.querySelector(\".main\");\n\n  if (!isClicked) {\n    btn.classList.add(\"animNormal\");\n    btn.classList.remove(\"animReverse\");\n    side.classList.add(\"nav_sidebar--animated-left\");\n    side.classList.remove(\"nav_sidebar--animated-right\");\n    main.classList.add(\"divStretch\");\n    main.classList.remove(\"divShrink\");\n    isClicked = true;\n  } else {\n    btn.classList.add(\"animReverse\");\n    btn.classList.remove(\"animNormal\");\n    side.classList.add(\"nav_sidebar--animated-right\");\n    side.classList.remove(\"nav_sidebar--animated-left\");\n    main.classList.add(\"divShrink\");\n    main.classList.remove(\"divStretch\");\n    isClicked = false;\n  }\n});\n\nfunction listenerSetter(list) {\n  list.forEach((element, ind) => {\n    let query = document.querySelectorAll(element);\n\n    query.forEach(el => {\n      let check = 0;\n\n      el.children[0].addEventListener(\"click\", e => {\n        check = downsize(query, el.children[0], ind);\n      });\n    });\n  });\n}\n\nfunction animateHelper(elementList, check) {\n  if (!check) {\n    for (let i = 0; i < elementList.length; i++) {\n      let child;\n      elementList[i].parentNode.parentNode.children[0].children[1] === undefined ? child = elementList[i].parentNode.parentNode.children[0].children[0] : child = elementList[i].parentNode.parentNode.children[0].children[1];\n      elementList[i].classList.add(\"height-expand\");\n      elementList[i].parentNode.classList.remove(\"no-border\");\n      elementList[i].classList.remove(\"height-shrink\");\n      setTimeout(() => {\n        elementList[i].style.display = \"block\";\n        child.classList.remove(\"fa-rotate-90\");\n      }, 200);\n    }\n    return check = true;\n  } else {\n    for (let i = 0; i < elementList.length; i++) {\n      let child;\n      elementList[i].parentNode.parentNode.children[0].children[1] === undefined ? child = elementList[i].parentNode.parentNode.children[0].children[0] : child = elementList[i].parentNode.parentNode.children[0].children[1];\n      elementList[i].classList.add(\"height-shrink\");\n      elementList[i].parentNode.classList.add(\"no-border\");\n      elementList[i].classList.remove(\"height-expand\");\n      setTimeout(() => {\n        elementList[i].style.display = \"none\";\n        child.classList.add(\"fa-rotate-90\");\n      }, 200);\n    }\n    return check = false;\n  }\n}\n\nfunction user(type) {\n  let userLoc = document.querySelector(\".user--name\");\n  let sidebarUsers = document.querySelector(\".sidebar_users\");\n  let sidebarEvents = document.querySelector(\".sidebar_events\");\n  let sidebarCompanies = document.querySelector(\".sidebar_companies\");\n  let sidebarWrapper = document.querySelector(\".nav_sidebar--wrapper\");\n  switch (type) {\n    case 'Banji':\n      userLoc.innerHTML = \"Nikola Stevanović\";\n      sidebarUsers.style.display = \"block\";\n      sidebarEvents.style.display = \"block\";\n      sidebarCompanies.style.display = \"block\";\n      sidebarWrapper.style.backgroundColor = \"#1b1b1b\";\n      break;\n    case 'moderator':\n      userLoc.innerHTML = \"Moderator\";\n      sidebarUsers.style.display = \"none\";\n      sidebarEvents.style.display = \"block\";\n      sidebarCompanies.style.display = \"none\";\n      sidebarWrapper.style.backgroundColor = \"#ce9504\";\n      break;\n    case 'super':\n      userLoc.innerHTML = \"Super Admin (Aćim)\";\n      sidebarUsers.style.display = \"block\";\n      sidebarEvents.style.display = \"block\";\n      sidebarCompanies.style.display = \"block\";\n      sidebarWrapper.style.backgroundColor = \"#f36a5a\";\n      break;\n    default:\n      userLoc.innerHTML = \"Random korisnik\";\n      sidebarUsers.style.display = \"block\";\n      sidebarEvents.style.display = \"none\";\n      sidebarCompanies.style.display = \"block\";\n      sidebarWrapper.style.backgroundColor = \"#2b333e\";\n      break;\n  }\n}\n\nfunction clearDisplay() {\n  let dropElements = document.querySelectorAll(\".dropdown\");\n  (document.body || document.documentElement).addEventListener(\"click\", e => {\n    dropElements.forEach(el => {\n      if (!el.contains(event.target)) if (el.children[1].children[0].classList.contains(\"height-expand\")) animateHelper(el.children[1].children, true);\n    });\n  }, false);\n}\n\nfunction downsize(parent, element, index) {\n  let navRight = document.querySelectorAll(\".dropdown\");\n  if (index !== 0) parent = navRight;\n  parent.forEach(el => {\n    if (el.children[0] !== element) {\n      if (el.children[1].children[0].classList.contains(\"height-expand\")) animateHelper(el.children[1].children, true);\n    } else {\n      if (el.children[1].children[0].classList.contains(\"height-shrink\")) return animateHelper(el.children[1].children, false);else return animateHelper(el.children[1].children, true);\n    }\n  });\n}\n\n//pozivi fja\n\nuser(\"\");\n\nclearDisplay();\n\nlet selList = [\".sidebar\", \".btn--user\", \".btn--notification\", \".btn--task\", \".btn--mail\"];\n\nlistenerSetter(selList);\n\nlet infoMessage = document.querySelectorAll(\".info--message\");\n\ninfoMessage.forEach(el => {\n  let temp = el.innerHTML;\n  el.innerHTML = temp.slice(0, 20);\n  el.innerHTML += \"...\";\n});\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style/main.scss?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/script.js ./src/style/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/script.js */\"./src/script.js\");\nmodule.exports = __webpack_require__(/*! ./src/style/main.scss */\"./src/style/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/script.js_./src/style/main.scss?");

/***/ })

/******/ });