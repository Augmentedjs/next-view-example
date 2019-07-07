/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/application/app.js":
/*!********************************!*\
  !*** ./src/application/app.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! augmentedjs-next-presentation */ "./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js");
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.js */ "./src/router.js");
/* harmony import */ var _controllers_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/main.js */ "./src/controllers/main.js");




const Application = new augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.Application("next-view-example"),
      createApp = app => {
  return new Promise((resolve, reject) => {
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error creating app!"));
    }
  });
},
      createRouter = app => {
  return new Promise((resolve, reject) => {
    app.router = new _router_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

    if (app.router) {
      resolve(app);
    } else {
      reject(new Error("Error creating router!"));
    }
  });
},
      startApp = app => {
  return new Promise((resolve, reject) => {
    app.start();

    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error starting app!"));
    }
  });
},
      initializeApp = app => {
  createApp(app).then(app => {
    return new Promise((resolve, reject) => {
      app.mainController = new _controllers_main_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      app.mainController.initialize();

      if (app) {
        resolve(app);
      } else {
        reject(new Error("Error creating main controller!"));
      }
    });
  }).then(app => {
    return new Promise((resolve, reject) => {
      app.mainController.render();

      if (app) {
        resolve(app);
      } else {
        reject(new Error("Error rendering main controller!"));
      }
    });
  }).then(createRouter).then(startApp).catch(e => {
    console.error(e);
    throw e;
  });
};

initializeApp(Application);
/* harmony default export */ __webpack_exports__["default"] = (Application);

/***/ }),

/***/ "./src/components/article.js":
/*!***********************************!*\
  !*** ./src/components/article.js ***!
  \***********************************/
/*! exports provided: createMainArticle, addSectionsToMainArticle, renderMainArticle, cleanupMainArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainArticle", function() { return createMainArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSectionsToMainArticle", function() { return addSectionsToMainArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMainArticle", function() { return renderMainArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupMainArticle", function() { return cleanupMainArticle; });
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! augmentedjs-next-presentation */ "./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js");
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__);

const createMainArticle = controller => {
  return new Promise((resolve, reject) => {
    controller.article = new augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.Component.Article({
      "id": "views",
      "style": "article",
      "header": "<i></i>",
      "headerStyle": "header",
      "headerEl": "header",
      "body": `
        <h1>Links for views</h1>
        <ul>
          <li><a href="#">Index</a></li>
          <li><a href="#simple">Simple</a></li>
          <li><a href="#decorator">Decorator</a></li>
          <li><a href="#table">Table</a></li>
          <li><a href="#form">Form</a></li>
        </ul>
        `,
      "footer": `<p>Built from Augmented <i>Next</i> Presentation - Version ${augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.VERSION}</p>`,
      "footerStyle": "footer",
      "footerEl": "footer"
    });

    if (controller.article) {
      resolve(controller);
    } else {
      reject(new Error("Error creating article!"));
    }
  });
};
const addSectionsToMainArticle = controller => {
  return new Promise((resolve, reject) => {
    controller.article.addSection({
      "id": "view1"
    });
    controller.article.addSection({
      "id": "view2"
    });
    controller.article.addSection({
      "id": "decorator"
    });
    controller.article.addSection({
      "id": "table"
    });
    controller.article.addSection({
      "id": "form"
    });

    if (controller.article) {
      resolve(controller);
    } else {
      reject(new Error("Error creating sections!"));
    }
  });
};
const renderMainArticle = controller => {
  return new Promise((resolve, reject) => {
    const t = controller.article.render();

    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error rendering article!"));
    }
  });
};
const cleanupMainArticle = controller => {
  return new Promise((resolve, reject) => {
    const t = controller.article.remove();

    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error removing article!"));
    }
  });
};

/***/ }),

/***/ "./src/components/hamburger.js":
/*!*************************************!*\
  !*** ./src/components/hamburger.js ***!
  \*************************************/
/*! exports provided: createHamburger, renderHamburger, cleanupHamburger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHamburger", function() { return createHamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHamburger", function() { return renderHamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupHamburger", function() { return cleanupHamburger; });
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! augmentedjs-next-presentation */ "./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js");
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _application_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../application/app.js */ "./src/application/app.js");



class HamburgerMenu extends augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.Component.HamburgerMenu {
  constructor() {
    super({
      "el": "#hamburger",
      "name": "next-view-example",
      "title": "Augmented.js Next"
    });
  }

  table() {
    console.log("I got here");
    _application_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].router.navigate("table", true);
    this.toggle();
  }

  simple() {
    _application_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].router.navigate("simple", true);
    this.toggle();
  }

  decorator() {
    _application_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].router.navigate("decorator", true);
    this.toggle();
  }

  form() {
    _application_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].router.navigate("form", true);
    this.toggle();
  }

}

;
const createHamburger = controller => {
  return new Promise((resolve, reject) => {
    controller.hamburger = new HamburgerMenu();
    controller.hamburger.addItem("menuSimple", "simple", "web", "Simple Views", false);
    controller.hamburger.addItem("menuDecorator", "decorator", "web", "Decorator View", false);
    controller.hamburger.addItem("menuAutotable", "table", "grid_on", "Automatic Table", false);
    controller.hamburger.addItem("menuAutoform", "form", "format_align_left", "Automatic Form", false);

    if (controller.hamburger) {
      resolve(controller);
    } else {
      reject(new Error("Error creating hamburger!"));
    }
  });
};
const renderHamburger = controller => {
  return new Promise((resolve, reject) => {
    const t = controller.hamburger.render();

    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error rendering hamburger!"));
    }
  });
};
const cleanupHamburger = controller => {
  return new Promise((resolve, reject) => {
    const t = controller.hamburger.remove();

    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error removing hamburger!"));
    }
  });
};

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: createHeader, renderHeader, cleanupHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeader", function() { return createHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHeader", function() { return renderHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupHeader", function() { return cleanupHeader; });
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! augmentedjs-next-presentation */ "./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js");
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__);

const createHeader = controller => {
  return new Promise((resolve, reject) => {
    controller.header = new augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.Component.Header({
      "el": "#header",
      "style": "header",
      "template": `
        <div id='hamburger'></div>
        <h1>Augmented <i>Next</i> Presentation View Examples</h1>
      `
    });

    if (controller.header) {
      resolve(controller);
    } else {
      reject(new Error("Error creating header!"));
    }
  });
};
const renderHeader = controller => {
  return new Promise((resolve, reject) => {
    const t = controller.header.render();

    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error rendering header!"));
    }
  });
};
const cleanupHeader = controller => {
  return new Promise((resolve, reject) => {
    const t = controller.header.remove();

    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error removing header!"));
    }
  });
};

/***/ }),

/***/ "./src/controllers/main.js":
/*!*********************************!*\
  !*** ./src/controllers/main.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! augmentedjs-next-presentation */ "./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js");
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_article_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/article.js */ "./src/components/article.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.js */ "./src/components/header.js");
/* harmony import */ var _components_hamburger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hamburger.js */ "./src/components/hamburger.js");




console.debug("Augmented", augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation);

class MainController extends augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.ViewController {
  constructor(options) {
    super(options);
  }

  initialize() {
    const controller = this;
    Object(_components_article_js__WEBPACK_IMPORTED_MODULE_1__["createMainArticle"])(controller).then(_components_article_js__WEBPACK_IMPORTED_MODULE_1__["addSectionsToMainArticle"]).then(_components_header_js__WEBPACK_IMPORTED_MODULE_2__["createHeader"]).then(_components_hamburger_js__WEBPACK_IMPORTED_MODULE_3__["createHamburger"]).catch(e => {
      console.error(e);
      console.error(e.stack);
    });
    return true;
  }

  render() {
    const controller = this;
    Object(_components_article_js__WEBPACK_IMPORTED_MODULE_1__["renderMainArticle"])(controller).then(_components_header_js__WEBPACK_IMPORTED_MODULE_2__["renderHeader"]).then(_components_hamburger_js__WEBPACK_IMPORTED_MODULE_3__["renderHamburger"]).catch(e => {
      console.error(e);
      console.error(e.stack);
    });
    return true;
  }

  remove() {
    const controller = this;
    Object(_components_header_js__WEBPACK_IMPORTED_MODULE_2__["cleanupHeader"])(controller).then(_components_hamburger_js__WEBPACK_IMPORTED_MODULE_3__["cleanupHamburger"]).then(_components_article_js__WEBPACK_IMPORTED_MODULE_1__["cleanupMainArticle"]).then(controller => {
      return new Promise((resolve, reject) => {
        controller.article = null;

        if (!controller.article) {
          resolve(controller);
        } else {
          reject(new Error("Error nulling article!"));
        }
      });
    }).catch(e => {
      console.error(e);
      console.error(e.stack);
    });
    return true;
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (MainController);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application/app.js */ "./src/application/app.js");

/*
const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

console.log(`Is Mobile ${isMobile()}`);
*/

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! augmentedjs-next-presentation */ "./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js");
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/table.js */ "./src/views/table.js");
/* harmony import */ var _views_simple_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/simple.js */ "./src/views/simple.js");




class Router extends augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.Router {
  constructor() {
    super({
      "routes": {
        "": () => {},
        "simple": () => {
          this.loadView(new _views_simple_js__WEBPACK_IMPORTED_MODULE_2__["YetAnotherView"]({
            "el": "#view2",
            "name": "YetAnotherView",
            "style": "view",
            "template": `
              <h1>This is a simple view.</h1>
              <h2>My view name is YetAnotherView.</h2>
              <p>This vew is declared by passing options.</p>
              <button id="bump2">Click Me</button>
            `,
            "events": {
              "click #bump2": "bump"
            }
          }));
        },
        "decorator": () => {
          this.loadView(new _views_simple_js__WEBPACK_IMPORTED_MODULE_2__["MyDecoratorView"]());
        },
        "table": () => {
          const table = new augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.Component.AutomaticTable({
            "el": "#table",
            "name": "table",
            "schema": _views_table_js__WEBPACK_IMPORTED_MODULE_1__["SCHEMA"],
            "data": _views_table_js__WEBPACK_IMPORTED_MODULE_1__["DATA"],
            "style": "view"
          });
          this.loadView(table);
        },
        "form": () => {
          const form = new augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.Component.AutomaticForm({
            "el": "#form",
            "name": "form",
            "schema": _views_table_js__WEBPACK_IMPORTED_MODULE_1__["SCHEMA"],
            "data": _views_table_js__WEBPACK_IMPORTED_MODULE_1__["DATA"],
            "style": "view"
          });
          this.loadView(form);
        }
      }
    });
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/views/simple.js":
/*!*****************************!*\
  !*** ./src/views/simple.js ***!
  \*****************************/
/*! exports provided: MyView, YetAnotherView, MyDecoratorView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyView", function() { return MyView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YetAnotherView", function() { return YetAnotherView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDecoratorView", function() { return MyDecoratorView; });
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! augmentedjs-next-presentation */ "./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js");
/* harmony import */ var augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0__);

class MyView extends augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.View {
  constructor() {
    super({
      "name": "ChildView",
      "style": "view"
    });

    if (!this.template) {
      this.template = `<h1>This is a simple view also.</h1><h2>My view name is ${this.name}.</h2><p>This is a simple view extends <em>Presentation.View</em></p><button id="bump">Click Me</button>`;
    }

    this.events = {
      "click #bump": "bump"
    };
  }

  bump(e) {
    alert("I was clicked!");
  }

}
;
class YetAnotherView extends augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.View {
  constructor(options) {
    console.log("options", options);

    if (!options) {
      options = {};
    }

    options.style = "view";
    super(options);
    console.log("im here", this.name);

    if (!this.template) {
      console.log("oops no template");
      this.template = `oops`;
    }

    if (!this.events) {
      console.log("oops no events");
      this.events = {
        "click #bump2": "bump"
      };
    }
  }

  bump(e) {
    alert("I was clicked!");
  }

}
;
class MyDecoratorView extends augmentedjs_next_presentation__WEBPACK_IMPORTED_MODULE_0___default.a.Presentation.DecoratorView {
  constructor() {
    super({
      "name": "beeper",
      "el": "#decorator",
      "style": "view"
    });

    if (!this.template) {
      this.template = `<h1>This is a decorator view</h1><h2>My view name is ${this.name}.</h2><input type="text" data-${this.name}="in" data-function="setOut"/><p data-${this.name}="out"></p><button id="beep" data-${this.name}="beep" data-click="beep">Beep!</button><button id="boop" data-${this.name}="boop" data-click="boop">Boop!</button>`;
    }

    console.log("temp", this.template);
    console.log("it", this.injectTemplate);
    this.injectTemplate(this.template);
    this.syncBoundElement("in");
    this.syncModelChange("out");
    this.delegateEvents();
  }

  beep(e) {
    alert("Beep Beep!");
    console.log("Beep Beep!");
  }

  boop(e) {
    alert("Boop Boop!");
    console.log("Boop Boop!");
  }

  setOut(e) {
    this.model.set("out", this.model.get("in"));
  }

}
;

/***/ }),

/***/ "./src/views/table.js":
/*!****************************!*\
  !*** ./src/views/table.js ***!
  \****************************/
/*! exports provided: SCHEMA, DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA", function() { return SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
const SCHEMA = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "User",
  "description": "A list of users",
  "type": "object",
  "properties": {
    "Name": {
      "description": "Name of the user",
      "type": "string"
    },
    "ID": {
      "description": "The unique identifier for a user",
      "type": "integer"
    },
    "Email": {
      "description": "The email of the user",
      "type": "string"
    }
  },
  "required": ["ID", "Name"]
};
const DATA = [{
  "Name": "Bob",
  "ID": 123,
  "Email": "bob@augmentedjs.org"
}, {
  "Name": "Jonathan",
  "ID": 234,
  "Email": "jonathon@augmentedjs.org"
}, {
  "Name": "Corey",
  "ID": 345,
  "Email": "corey@augmentedjs.org"
}, {
  "Name": "Seema",
  "ID": 456,
  "Email": "seema@augmentedjs.org"
}, {
  "Name": "Jasmine",
  "ID": 567,
  "Email": "jasmine@augmentedjs.org"
}];

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map