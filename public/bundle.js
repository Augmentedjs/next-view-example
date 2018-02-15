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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Presentation = t() : e.Presentation = t();
}("undefined" != typeof self ? self : undefined, function () {
  return function (e) {
    var t = {};function n(r) {
      if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/dist/", n(n.s = 26);
  }([function (e, t, n) {
    "use strict";
    (function (e) {
      var n,
          r,
          i,
          o,
          a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      };"undefined" != typeof self && self, o = function o() {
        return function (e) {
          var t = {};function n(r) {
            if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
          }return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
          }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
              return e.default;
            } : function () {
              return e;
            };return n.d(t, "a", t), t;
          }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }, n.p = "/dist/", n(n.s = 23);
        }([function (e, t, n) {
          var r,
              i = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          };r = function () {
            return this;
          }();try {
            r = r || Function("return this")() || (0, eval)("this");
          } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window);
          }e.exports = r;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              i = u(n(2)),
              o = u(n(12)),
              a = n(25);function u(e) {
            return e && e.__esModule ? e : { default: e };
          }var s = n(26),
              l = function () {
            function e(t) {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), t || (t = {}), this._options || (this._options = {}), Object.assign(this._options, t), t && t.events ? this._events = t.events : this._events = {}, this._listeningTo = {}, this._listenId = {}, this._listeners = {};
            }return r(e, [{ key: "initialize", value: function value() {
                return this;
              } }, { key: "trigger", value: function value(e) {
                if (this._events) {
                  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
                    n[r - 1] = arguments[r];
                  }var i = Array.isArray(n) ? n : Array.from(n);(0, a.eventsApi)(a.triggerApi, this._events, e, void 0, i);
                }return this;
              } }, { key: "once", value: function value(e, t, n) {
                var r = (0, a.eventsApi)(this._onceMap, {}, e, t, s(this.off, this));return "string" == typeof e && null == n && (t = void 0), this.on(r, t, n);
              } }, { key: "off", value: function value(e, t, n) {
                return this._events && (this._events = (0, a.eventsApi)(a.offApi, this._events, e, t, { context: n, listeners: this._listeners })), this;
              } }, { key: "stopListening", value: function value(e, t, n) {
                var r = this._listeningTo;if (r) {
                  var i = e ? [e._listenId] : Object.keys(r),
                      o = 0;for (o = 0; o < i.length; o++) {
                    var a = r[i[o]];if (!a) break;a.obj.off(t, n, this);
                  }
                }return this;
              } }, { key: "on", value: function value(e, t, n) {
                return (0, a.internalOn)(this, e, t, n);
              } }, { key: "listenTo", value: function value(e, t, n) {
                if (e) {
                  var r = e._listenId || (e._listenId = (0, i.default)("l")),
                      o = this._listeningTo || (this._listeningTo = {}),
                      u = o[r];if (!u) {
                    var s = this._listenId || (this._listenId = (0, i.default)("l"));u = o[r] = { obj: e, objId: r, id: s, listeningTo: o, count: 0 };
                  }(0, a.internalOn)(e, t, n, this, u);
                }return this;
              } }, { key: "listenToOnce", value: function value(e, t, n) {
                var r = (0, a.eventsApi)(this._onceMap, {}, t, n, s(this.stopListening, this, e));return this.listenTo(e, r);
              } }, { key: "_onceMap", value: function value(e, t, n, r) {
                var i = this,
                    a = arguments;if (n) {
                  var u = e[t] = (0, o.default)(function () {
                    r(t, u), n.apply(i, a);
                  });u._callback = n;
                }return e;
              } }, { key: "options", get: function get() {
                return this._options;
              }, set: function set(e) {
                this._options = e;
              } }, { key: "events", get: function get() {
                return this._events;
              }, set: function set(e) {
                this._events = e;
              } }]), e;
          }();t.default = l;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = 0;t.default = function (e) {
            return "{$prefix}" + ++r;
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
              t[n] = arguments[n];
            }var r = 0,
                i = t.length;for (r = 1; r < i; r++) {
              var o = void 0;for (o in t[r]) {
                t[r].hasOwnProperty(o) && (t[0][o] = t[r][o]);
              }
            }return t[0];
          };
        }, function (e, t, n) {
          e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function get() {
                return e.l;
              } }), Object.defineProperty(e, "id", { enumerable: !0, get: function get() {
                return e.i;
              } }), e.webpackPolyfill = 1), e;
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          };t.default = function (e) {
            var t = void 0 === e ? "undefined" : r(e);return "function" === t || "object" === t && !!e;
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              i = u(n(16)),
              o = u(n(27)),
              a = n(7);function u(e) {
            return e && e.__esModule ? e : { default: e };
          }var s = function () {
            function e() {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this._myValidator = (0, o.default)(), this._myValidator && this._myValidator.addLanguage("en-us", a.ERROR_MESSAGES_DEFAULT);
            }return r(e, [{ key: "supportsValidation", value: function value() {
                return null !== this._myValidator;
              } }, { key: "registerSchema", value: function value(e, t) {
                return this._myValidator.addSchema(e, t);
              } }, { key: "getSchema", value: function value(e) {
                return this._myValidator.getSchema(e);
              } }, { key: "getSchemas", value: function value() {
                return this._myValidator.getSchemaMap();
              } }, { key: "clearSchemas", value: function value() {
                this._myValidator.dropSchemas();
              } }, { key: "validate", value: function value(e, t) {
                return this._myValidator.validateMultiple(e, t);
              } }, { key: "getValidationMessages", value: function value() {
                return this._myValidator.error;
              } }, { key: "generateSchema", value: function value(e) {
                var t = e;return (0, i.default)(t);
              } }]), e;
          }();t.default = s;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              i = { INVALID_TYPE: 0, ENUM_MISMATCH: 1, ANY_OF_MISSING: 10, ONE_OF_MISSING: 11, ONE_OF_MULTIPLE: 12, NOT_PASSED: 13, NUMBER_MULTIPLE_OF: 100, NUMBER_MINIMUM: 101, NUMBER_MINIMUM_EXCLUSIVE: 102, NUMBER_MAXIMUM: 103, NUMBER_MAXIMUM_EXCLUSIVE: 104, NUMBER_NOT_A_NUMBER: 105, STRING_LENGTH_SHORT: 200, STRING_LENGTH_LONG: 201, STRING_PATTERN: 202, OBJECT_PROPERTIES_MINIMUM: 300, OBJECT_PROPERTIES_MAXIMUM: 301, OBJECT_REQUIRED: 302, OBJECT_ADDITIONAL_PROPERTIES: 303, OBJECT_DEPENDENCY_KEY: 304, ARRAY_LENGTH_SHORT: 400, ARRAY_LENGTH_LONG: 401, ARRAY_UNIQUE: 402, ARRAY_ADDITIONAL_ITEMS: 403, FORMAT_CUSTOM: 500, KEYWORD_CUSTOM: 501, CIRCULAR_REFERENCE: 600, UNKNOWN_PROPERTY: 1e3 },
              o = function () {
            function e(t, n, r, i, o, a) {
              if (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), void 0 === t) throw new Error("No code supplied for error: " + n);this.message = n, this.params = r, this.code = t, this.dataPath = i || "", this.schemaPath = o || "", this.subErrors = a || null;var u = new Error(this.message);if (this.stack = u.stack || u.stacktrace, !this.stack) try {
                throw u;
              } catch (e) {
                this.stack = e.stack || e.stacktrace;
              }this.name = "ValidationError";
            }return r(e, [{ key: "prefixWith", value: function value(e, t) {
                if (null !== e && (e = e.replace(/~/g, "~0").replace(/\//g, "~1"), this.dataPath = "/" + e + this.dataPath), null !== t && (t = t.replace(/~/g, "~0").replace(/\//g, "~1"), this.schemaPath = "/" + t + this.schemaPath), null !== this.subErrors) {
                  var n = 0,
                      r = this.subErrors.length;for (n = 0; n < r; n++) {
                    this.subErrors[n].prefixWith(e, t);
                  }
                }return this;
              } }]), e;
          }(),
              a = {},
              u = void 0;for (u in i) {
            a[i[u]] = u;
          }t.ERROR_CODES = i, t.ERROR_MESSAGES_DEFAULT = { INVALID_TYPE: "Invalid type: {type} (expected {expected})", ENUM_MISMATCH: "No enum match for: {value}", ANY_OF_MISSING: 'Data does not match any schemas from "anyOf"', ONE_OF_MISSING: 'Data does not match any schemas from "oneOf"', ONE_OF_MULTIPLE: 'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}', NOT_PASSED: 'Data matches schema from "not"', NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}", NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}", NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}", NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}", NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}", NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number", STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}", STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}", STRING_PATTERN: "String does not match pattern: {pattern}", OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}", OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}", OBJECT_REQUIRED: "Missing required property: {key}", OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed", OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})", ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}", ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}", ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})", ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed", FORMAT_CUSTOM: "Format validation failed ({message})", KEYWORD_CUSTOM: "Keyword failed: {key} ({message})", CIRCULAR_REFERENCE: "Circular $refs: {urls}", UNKNOWN_PROPERTY: "Unknown property (not in schema)" }, t.ValidationError = o, t.ErrorCodeLookup = a;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          };t.default = function (e) {
            return "string" == typeof e || !!e && "object" === (void 0 === e ? "undefined" : r(e)) && "[object String]" === Object.prototype.toString.call(e);
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
            return "[object Function]" == Object.prototype.toString.call(e);
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = {};r.OAUTH2 = Symbol("oauth2"), r.ACL = Symbol("acl"), t.default = r;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.sortObjects = function (e, t) {
            return e.sort(function (e, n) {
              var r = e[t],
                  i = n[t];return r < i ? -1 : r > i ? 1 : 0;
            });
          }, t.mergeSort = function e(t) {
            if (1 === t.length) return t;var n = Math.floor(t.length / 2),
                i = t.slice(0, n),
                o = t.slice(n);return r(e(i), e(o));
          };var r = function r(e, t) {
            for (var n = [], r = 0, i = 0; r < e.length && i < t.length;) {
              e[r] < t[i] ? (n.push(e[r]), r++) : (n.push(t[i]), i++);
            }return n.concat(e.slice(r)).concat(t.slice(i));
          };t.quickSort = function e(t) {
            if (0 === t.length) return [];var n = 1,
                r = t.length,
                i = [],
                o = [],
                a = t[0];for (n = 1; n < r; n++) {
              t[n] < a ? i.push(t[n]) : o.push(t[n]);
            }return e(i).concat(a, e(o));
          }, t.insertionSort = function (e) {
            var t = [];if (e) {
              var n = (t = e.slice()).length,
                  r = void 0,
                  i = void 0,
                  o = void 0;for (r = 1; r < n; r++) {
                for (o = t[r], i = r - 1; i >= 0 && t[i] > o; i--) {
                  t[i + 1] = t[i];
                }t[i + 1] = o;
              }
            }return t;
          }, t.bubbleSort = function (e) {
            var t = [];if (e) {
              var n = void 0,
                  r = void 0,
                  i = void 0,
                  o = (t = e.slice()).length - 1;do {
                for (n = !1, r = 0; r < o; r++) {
                  t[r] > t[r + 1] && (i = t[r], t[r] = t[r + 1], t[r + 1] = i, n = !0);
                }
              } while (n);
            }return t;
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r,
              i = (r = n(13)) && r.__esModule ? r : { default: r };t.default = function (e) {
            return (0, i.default)(2, e);
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = arguments;t.default = function (e, t) {
            var n = void 0,
                i = void 0;if ("function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);return i = Number.parseInt(e), function () {
              return --i > 0 && (n = t.apply(void 0, r)), i <= 1 && (t = void 0), n;
            };
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          },
              i = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              o = c(n(1)),
              u = c(n(3)),
              s = c(n(2)),
              l = (c(n(15)), c(n(6)));function c(e) {
            return e && e.__esModule ? e : { default: e };
          }var f = n(18),
              h = n(29),
              d = n(30),
              p = n(31),
              v = n(32),
              y = n(33),
              b = n(34),
              _ = n(35),
              m = n(36),
              g = function g(e, t) {
            if (e) {
              var n = t.error;t.error = function (r) {
                n && n.call(t.context, e, r, t), e.trigger("error", e, r, t);
              };
            }
          },
              O = function (e) {
            function t(e, n) {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, t);var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t;
              }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));r.id = 0, r.idAttribute = "id", r.cidPrefix = "c", r.defaults = {}, r.validationError = null, r.urlRoot = "", r._pending = !1, r._changing = !1, r._previousAttributes = null, r._attributes = e || {}, n || (n = {}), r.schema = null, r.validationMessages = { valid: !0 }, n && n.schema && (r.schema = n.schema);for (var i = arguments.length, o = Array(i > 2 ? i - 2 : 0), l = 2; l < i; l++) {
                o[l - 2] = arguments[l];
              }r.preinitialize(o), r.cid = (0, s.default)(r.cidPrefix), n && n.collection && (r.collection = n.collection);var c = void 0;return n && n.parse && (c = r.parse(c, n) || {}), r.defaults = h(r, "defaults"), c = y((0, u.default)({}, r.defaults, c), r.defaults), r.set(c, n), r.changed = {}, r.initialize(o), r;
            }return function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, o.default), i(t, [{ key: "preinitialize", value: function value() {} }, { key: "initialize", value: function value() {} }, { key: "get", value: function value(e) {
                return this._attributes[e];
              } }, { key: "set", value: function value(e, t, n) {
                if (null === e) return this;var i = void 0;if ("object" === (void 0 === e ? "undefined" : r(e)) ? (i = e, n = t) : (i = {})[e] = t, n || (n = {}), !this._validate(i, n)) return !1;var o = n.unset,
                    a = n.silent,
                    u = [],
                    s = this._changing;this._changing = !0, s || (this._previousAttributes = f(this._attributes), this.changed = {});var l = this._attributes,
                    c = this.changed,
                    h = this._previousAttributes,
                    d = void 0;for (d in i) {
                  t = i[d], v(l[d], t) || u.push(d), v(h[d], t) ? delete c[d] : c[d] = t, o ? delete l[d] : l[d] = t;
                }if (this.idAttribute in i && (this.id = this.get(this.idAttribute)), !a) {
                  u.length && (this._pending = n);var p = 0;for (p = 0; p < u.length; p++) {
                    this.trigger("change:" + u[p], this, l[u[p]], n);
                  }
                }if (s) return this;if (!a) for (; this._pending;) {
                  n = this._pending, this._pending = !1, this.trigger("change", this, n);
                }return this._pending = !1, this._changing = !1, this;
              } }, { key: "escape", value: function value(e) {
                return m(this.get(attr));
              } }, { key: "has", value: function value(e) {
                return null !== this.get(attr);
              } }, { key: "matches", value: function value(e) {
                return !!b(e, this)(this._attributes);
              } }, { key: "unset", value: function value(e, t) {
                return this.set(e, void 0, (0, u.default)({}, t, { unset: !0 }));
              } }, { key: "clear", value: function value(e) {
                var t = {};for (var n in this._attributes) {
                  t[n] = void 0;
                }return this.set(t, (0, u.default)({}, e, { unset: !0 }));
              } }, { key: "toJSON", value: function value() {
                return f(this._attributes);
              } }, { key: "fetch", value: function value(e) {
                var t = this,
                    n = (e = (0, u.default)({ parse: !0 }, e)).success;return e.success = function (r) {
                  var i = e.parse ? t.parse(r, e) : r;if (!t.set(i, e)) return !1;n && n.call(e.context, t, r, e), t.trigger("sync", t, r, e);
                }, g(this, e), this.sync("read", this, e);
              } }, { key: "save", value: function value(e, t, n) {
                var i = void 0;null == e || "object" === (void 0 === e ? "undefined" : r(e)) ? (i = e, n = t) : (i = {})[e] = t;var o = (n = (0, u.default)({ validate: !0, parse: !0 }, n)).wait;if (i && !o) {
                  if (!this.set(i, n)) return !1;
                } else if (!this._validate(i, n)) return !1;var a = this,
                    s = n.success,
                    l = this._attributes;n.success = function (e) {
                  a.attributes = l;var t = n.parse ? a.parse(e, n) : e;if (o && (t = (0, u.default)({}, i, t)), t && !a.set(t, n)) return !1;s && s.call(n.context, a, e, n), a.trigger("sync", a, e, n);
                }, g(this, n), i && o && (this._attributes = (0, u.default)({}, l, i));var c = this.isNew() ? "create" : n.patch ? "patch" : "update";"patch" !== c || n.attrs || (n.attrs = i);var f = this.sync(c, this, n);return this._attributes = l, f;
              } }, { key: "destroy", value: function value(e) {
                var t = this,
                    n = (e = e ? f(e) : {}).success,
                    r = e.wait,
                    i = function i() {
                  t.stopListening(), t.trigger("destroy", t, t.collection, e);
                };e.success = function (o) {
                  r && i(), n && n.call(e.context, t, o, e), t.isNew() || t.trigger("sync", t, o, e);
                };var o = !1;return this.isNew() ? _(e.success) : (g(this, e), o = this.sync("delete", this, e)), r || i(), o;
              } }, { key: "url", value: function value() {
                var e = h(this, "urlRoot") || h(this.collection, "url") || urlError();if (this.isNew()) return e;var t = this.get(this.idAttribute);return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t);
              } }, { key: "keys", value: function value() {
                return Object.keys(this._attributes);
              } }, { key: "values", value: function value() {
                return Object.values(this._attributes);
              } }, { key: "isEmpty", value: function value() {
                return !1;
              } }, { key: "parse", value: function value(e, t) {
                return e;
              } }, { key: "clone", value: function value() {
                return new this.constructor(this._attributes);
              } }, { key: "isNew", value: function value() {
                return !this.has(this.idAttribute);
              } }, { key: "isValid", value: function value(e) {
                return this._validate({}, (0, u.default)({}, e, { validate: !0 }));
              } }, { key: "hasChanged", value: function value(e) {
                return null == e ? !d(this.changed) : p(this.changed, e);
              } }, { key: "changedAttributes", value: function value(e) {
                if (!e) return !!this.hasChanged() && f(this.changed);var t = this._changing ? this._previousAttributes : this._attributes,
                    n = {},
                    r = void 0;for (var i in e) {
                  var o = e[i];v(t[i], o) || (n[i] = o, r = !0);
                }return !!r && n;
              } }, { key: "previous", value: function value(e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
              } }, { key: "previousAttributes", value: function value() {
                return f(this._previousAttributes);
              } }, { key: "_validate", value: function value(e, t) {
                if (!t.validate || !this.validate) return !0;e = (0, u.default)({}, this._attributes, e);var n = this.validationError = this.validate(e, t) || null;return !n || (this.trigger("invalid", this, n, (0, u.default)(t, { validationError: n })), !1);
              } }, { key: "supportsValidation", value: function value() {
                return null !== this.schema;
              } }, { key: "isValid", value: function value() {
                return this.validate(), this.validationMessages.valid;
              } }, { key: "validate", value: function value() {
                var e = new l.default();return this.supportsValidation() && e.supportsValidation() ? this.validationMessages = e.validate(this.toJSON(), this.schema) : this.validationMessages.valid = !0, this.validationMessages;
              } }, { key: "getValidationMessages", value: function value() {
                var e = [];if (this.validationMessages && this.validationMessages.errors) {
                  var t = this.validationMessages.errors.length,
                      n = 0;for (n = 0; n < t; n++) {
                    e.push(this.validationMessages.errors[n].message + " from " + this.validationMessages.errors[n].dataPath);
                  }
                }return e;
              } }, { key: "sync", value: function value(e, t, n) {} }, { key: "reset", value: function value(e) {
                this.clear(), e && this.set(e);
              } }, { key: "isEmpty", value: function value() {
                return !this._attributes || 0 === Object.keys(this._attributes).length;
              } }, { key: "toString", value: function value() {
                return JSON.stringify(this.toJSON());
              } }, { key: "fetch", value: function value(e) {
                this.sync("read", this, e);
              } }, { key: "save", value: function value(e) {
                this.sync("create", this, e);
              } }, { key: "update", value: function value(e) {
                this.sync("update", this, e);
              } }, { key: "destroy", value: function value(e) {
                this.sync("delete", this, e);
              } }]), t;
          }();t.default = O;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r,
              i = (r = n(5)) && r.__esModule ? r : { default: r };t.default = function (e) {
            return (0, i.default)(e) ? Object.getOwnPropertyNames(e) : [];
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          },
              i = { $schema: "http://json-schema.org/draft-04/schema#", title: "model", description: "Generated Schema", type: "object", properties: {} };t.default = function (e) {
            var t = i,
                n = void 0,
                o = void 0,
                a = void 0,
                u = void 0,
                s = Object.keys(e),
                l = s.length;for (n = 0; n < l; n++) {
              for (a in o = s[n]) {
                if (o.hasOwnProperty(a)) {
                  u = t.properties[o] = {};var c = r(e[o]);"object" === c ? c = Array.isArray(e[o]) ? "array" : "object" : "number" === c && (c = Number.isInteger(e[o]) ? "integer" : "number"), u.type = c, u.description = String(o);
                }
              }
            }return t;
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          },
              i = (t.URI_TEMPLATE_GLOBAL_MODIFIERS = { "+": !0, "#": !0, ".": !0, "/": !0, ";": !0, "?": !0, "&": !0 }, t.URI_TEMPLATE_SUFFICES = { "*": !0 }, t.parseURI = function (e) {
            var t = String(e).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t ? { href: t[0] || "", protocol: t[1] || "", authority: t[2] || "", host: t[3] || "", hostname: t[4] || "", port: t[5] || "", pathname: t[6] || "", search: t[7] || "", hash: t[8] || "" } : null;
          }),
              o = t.removeDotSegments = function (e) {
            var t = [];return e.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (e) {
              "/.." === e ? t.pop() : t.push(e);
            }), t.join("").replace(/^\//, "/" === e.charAt(0) ? "/" : "");
          },
              u = t.resolveUrl = function (e, t) {
            return t = i(t || ""), e = i(e || ""), t && e ? (t.protocol || e.protocol) + (t.protocol || t.authority ? t.authority : e.authority) + o(t.protocol || t.authority || "/" === t.pathname.charAt(0) ? t.pathname : t.pathname ? (e.authority && !e.pathname ? "/" : "") + e.pathname.slice(0, e.pathname.lastIndexOf("/") + 1) + t.pathname : e.pathname) + (t.protocol || t.authority || t.pathname ? t.search : t.search || e.search) + t.hash : null;
          };t.getDocumentUri = function (e) {
            return e.split("#")[0];
          }, t.isTrustedUrl = function (e, t) {
            if (t.substring(0, e.length) === e) {
              var n = t.substring(e.length);if (t.length > 0 && "/" === t.charAt(e.length - 1) || "#" === n.charAt(0) || "?" === n.charAt(0)) return !0;
            }return !1;
          }, t.normSchema = function e(t, n) {
            if (t && "object" === (void 0 === t ? "undefined" : r(t))) if (void 0 === n ? n = t.id : "string" == typeof t.id && (n = u(n, t.id), t.id = n), Array.isArray(t)) {
              var i = 0,
                  o = t.length;for (i = 0; i < o; i++) {
                e(t[i], n);
              }
            } else for (var a in "string" == typeof t.$ref && (t.$ref = u(n, t.$ref)), t) {
              "enum" !== a && e(t[a], n);
            }
          };
        }, function (e, t, n) {
          (function (e, n) {
            var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
              return void 0 === e ? "undefined" : a(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            },
                i = "__lodash_hash_undefined__",
                o = 9007199254740991,
                u = "[object Arguments]",
                s = "[object Boolean]",
                l = "[object Date]",
                c = "[object Function]",
                f = "[object GeneratorFunction]",
                h = "[object Map]",
                d = "[object Number]",
                p = "[object Object]",
                v = "[object RegExp]",
                y = "[object Set]",
                b = "[object String]",
                _ = "[object Symbol]",
                m = "[object ArrayBuffer]",
                g = "[object DataView]",
                O = "[object Float32Array]",
                E = "[object Float64Array]",
                w = "[object Int8Array]",
                k = "[object Int16Array]",
                j = "[object Int32Array]",
                S = "[object Uint8Array]",
                P = "[object Uint8ClampedArray]",
                A = "[object Uint16Array]",
                T = "[object Uint32Array]",
                C = /\w*$/,
                M = /^\[object .+?Constructor\]$/,
                R = /^(?:0|[1-9]\d*)$/,
                x = {};x[u] = x["[object Array]"] = x[m] = x[g] = x[s] = x[l] = x[O] = x[E] = x[w] = x[k] = x[j] = x[h] = x[d] = x[p] = x[v] = x[y] = x[b] = x[_] = x[S] = x[P] = x[A] = x[T] = !0, x["[object Error]"] = x[c] = x["[object WeakMap]"] = !1;var N = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e,
                I = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                U = N || I || Function("return this")(),
                L = "object" == r(t) && t && !t.nodeType && t,
                D = L && "object" == r(n) && n && !n.nodeType && n,
                B = D && D.exports === L;function F(e, t) {
              return e.set(t[0], t[1]), e;
            }function $(e, t) {
              return e.add(t), e;
            }function z(e, t, n, r) {
              var i = -1,
                  o = e ? e.length : 0;for (r && o && (n = e[++i]); ++i < o;) {
                n = t(n, e[i], i, e);
              }return n;
            }function q(e) {
              var t = !1;if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "");
              } catch (e) {}return t;
            }function H(e) {
              var t = -1,
                  n = Array(e.size);return e.forEach(function (e, r) {
                n[++t] = [r, e];
              }), n;
            }function V(e, t) {
              return function (n) {
                return e(t(n));
              };
            }function G(e) {
              var t = -1,
                  n = Array(e.size);return e.forEach(function (e) {
                n[++t] = e;
              }), n;
            }var W,
                J = Array.prototype,
                K = Function.prototype,
                Y = Object.prototype,
                X = U["__core-js_shared__"],
                Q = (W = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W : "",
                Z = K.toString,
                ee = Y.hasOwnProperty,
                te = Y.toString,
                ne = RegExp("^" + Z.call(ee).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                re = B ? U.Buffer : void 0,
                ie = U.Symbol,
                oe = U.Uint8Array,
                ae = V(Object.getPrototypeOf, Object),
                ue = Object.create,
                se = Y.propertyIsEnumerable,
                le = J.splice,
                ce = Object.getOwnPropertySymbols,
                fe = re ? re.isBuffer : void 0,
                he = V(Object.keys, Object),
                de = Ue(U, "DataView"),
                pe = Ue(U, "Map"),
                ve = Ue(U, "Promise"),
                ye = Ue(U, "Set"),
                be = Ue(U, "WeakMap"),
                _e = Ue(Object, "create"),
                me = $e(de),
                ge = $e(pe),
                Oe = $e(ve),
                Ee = $e(ye),
                we = $e(be),
                ke = ie ? ie.prototype : void 0,
                je = ke ? ke.valueOf : void 0;function Se(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function Pe(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function Ae(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function Te(e) {
              this.__data__ = new Pe(e);
            }function Ce(e, t, n) {
              var r = e[t];ee.call(e, t) && ze(r, n) && (void 0 !== n || t in e) || (e[t] = n);
            }function Me(e, t) {
              for (var n = e.length; n--;) {
                if (ze(e[n][0], t)) return n;
              }return -1;
            }function Re(e, t, n, r, i, o, a) {
              var M;if (r && (M = o ? r(e, i, o, a) : r(e)), void 0 !== M) return M;if (!We(e)) return e;var R = qe(e);if (R) {
                if (M = function (e) {
                  var t = e.length,
                      n = e.constructor(t);return t && "string" == typeof e[0] && ee.call(e, "index") && (n.index = e.index, n.input = e.input), n;
                }(e), !t) return function (e, t) {
                  var n = -1,
                      r = e.length;for (t || (t = Array(r)); ++n < r;) {
                    t[n] = e[n];
                  }return t;
                }(e, M);
              } else {
                var N = De(e),
                    I = N == c || N == f;if (Ve(e)) return function (e, t) {
                  if (t) return e.slice();var n = new e.constructor(e.length);return e.copy(n), n;
                }(e, t);if (N == p || N == u || I && !o) {
                  if (q(e)) return o ? e : {};if (M = function (e) {
                    return "function" != typeof e.constructor || Fe(e) ? {} : We(t = ae(e)) ? ue(t) : {};var t;
                  }(I ? {} : e), !t) return function (e, t) {
                    return Ne(e, Le(e), t);
                  }(e, function (e, t) {
                    return e && Ne(t, Je(t), e);
                  }(M, e));
                } else {
                  if (!x[N]) return o ? e : {};M = function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        u = e.constructor;switch (t) {case m:
                        return xe(e);case s:case l:
                        return new u(+e);case g:
                        return function (e, t) {
                          var n = r ? xe(e.buffer) : e.buffer;return new e.constructor(n, e.byteOffset, e.byteLength);
                        }(e);case O:case E:case w:case k:case j:case S:case P:case A:case T:
                        return function (e, t) {
                          var n = r ? xe(e.buffer) : e.buffer;return new e.constructor(n, e.byteOffset, e.length);
                        }(e);case h:
                        return function (e, t, n) {
                          return z(r ? n(H(e), !0) : H(e), F, new e.constructor());
                        }(e, 0, n);case d:case b:
                        return new u(e);case v:
                        return (a = new (o = e).constructor(o.source, C.exec(o))).lastIndex = o.lastIndex, a;case y:
                        return function (e, t, n) {
                          return z(r ? n(G(e), !0) : G(e), $, new e.constructor());
                        }(e, 0, n);case _:
                        return i = e, je ? Object(je.call(i)) : {};}
                  }(e, N, Re, t);
                }
              }a || (a = new Te());var U = a.get(e);if (U) return U;if (a.set(e, M), !R) var L = n ? function (e) {
                return function (e, t, n) {
                  var r = Je(e);return qe(e) ? r : function (e, t) {
                    for (var n = -1, r = t.length, i = e.length; ++n < r;) {
                      e[i + n] = t[n];
                    }return e;
                  }(r, n(e));
                }(e, 0, Le);
              }(e) : Je(e);return function (e, t) {
                for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n);) {}
              }(L || e, function (i, o) {
                L && (i = e[o = i]), Ce(M, o, Re(i, t, n, r, o, e, a));
              }), M;
            }function xe(e) {
              var t = new e.constructor(e.byteLength);return new oe(t).set(new oe(e)), t;
            }function Ne(e, t, n, r) {
              n || (n = {});for (var i = -1, o = t.length; ++i < o;) {
                var a = t[i],
                    u = r ? r(n[a], e[a], a, n, e) : void 0;Ce(n, a, void 0 === u ? e[a] : u);
              }return n;
            }function Ie(e, t) {
              var n,
                  i,
                  o = e.__data__;return ("string" == (i = void 0 === (n = t) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
            }function Ue(e, t) {
              var n = function (e, t) {
                return null == e ? void 0 : e[t];
              }(e, t);return function (e) {
                return !(!We(e) || Q && Q in e) && (Ge(e) || q(e) ? ne : M).test($e(e));
              }(n) ? n : void 0;
            }Se.prototype.clear = function () {
              this.__data__ = _e ? _e(null) : {};
            }, Se.prototype.delete = function (e) {
              return this.has(e) && delete this.__data__[e];
            }, Se.prototype.get = function (e) {
              var t = this.__data__;if (_e) {
                var n = t[e];return n === i ? void 0 : n;
              }return ee.call(t, e) ? t[e] : void 0;
            }, Se.prototype.has = function (e) {
              var t = this.__data__;return _e ? void 0 !== t[e] : ee.call(t, e);
            }, Se.prototype.set = function (e, t) {
              return this.__data__[e] = _e && void 0 === t ? i : t, this;
            }, Pe.prototype.clear = function () {
              this.__data__ = [];
            }, Pe.prototype.delete = function (e) {
              var t = this.__data__,
                  n = Me(t, e);return !(n < 0 || (n == t.length - 1 ? t.pop() : le.call(t, n, 1), 0));
            }, Pe.prototype.get = function (e) {
              var t = this.__data__,
                  n = Me(t, e);return n < 0 ? void 0 : t[n][1];
            }, Pe.prototype.has = function (e) {
              return Me(this.__data__, e) > -1;
            }, Pe.prototype.set = function (e, t) {
              var n = this.__data__,
                  r = Me(n, e);return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
            }, Ae.prototype.clear = function () {
              this.__data__ = { hash: new Se(), map: new (pe || Pe)(), string: new Se() };
            }, Ae.prototype.delete = function (e) {
              return Ie(this, e).delete(e);
            }, Ae.prototype.get = function (e) {
              return Ie(this, e).get(e);
            }, Ae.prototype.has = function (e) {
              return Ie(this, e).has(e);
            }, Ae.prototype.set = function (e, t) {
              return Ie(this, e).set(e, t), this;
            }, Te.prototype.clear = function () {
              this.__data__ = new Pe();
            }, Te.prototype.delete = function (e) {
              return this.__data__.delete(e);
            }, Te.prototype.get = function (e) {
              return this.__data__.get(e);
            }, Te.prototype.has = function (e) {
              return this.__data__.has(e);
            }, Te.prototype.set = function (e, t) {
              var n = this.__data__;if (n instanceof Pe) {
                var r = n.__data__;if (!pe || r.length < 199) return r.push([e, t]), this;n = this.__data__ = new Ae(r);
              }return n.set(e, t), this;
            };var Le = ce ? V(ce, Object) : function () {
              return [];
            },
                De = function De(e) {
              return te.call(e);
            };function Be(e, t) {
              return !!(t = null == t ? o : t) && ("number" == typeof e || R.test(e)) && e > -1 && e % 1 == 0 && e < t;
            }function Fe(e) {
              var t = e && e.constructor;return e === ("function" == typeof t && t.prototype || Y);
            }function $e(e) {
              if (null != e) {
                try {
                  return Z.call(e);
                } catch (e) {}try {
                  return e + "";
                } catch (e) {}
              }return "";
            }function ze(e, t) {
              return e === t || e != e && t != t;
            }(de && De(new de(new ArrayBuffer(1))) != g || pe && De(new pe()) != h || ve && "[object Promise]" != De(ve.resolve()) || ye && De(new ye()) != y || be && "[object WeakMap]" != De(new be())) && (De = function De(e) {
              var t = te.call(e),
                  n = t == p ? e.constructor : void 0,
                  r = n ? $e(n) : void 0;if (r) switch (r) {case me:
                  return g;case ge:
                  return h;case Oe:
                  return "[object Promise]";case Ee:
                  return y;case we:
                  return "[object WeakMap]";}return t;
            });var qe = Array.isArray;function He(e) {
              return null != e && function (e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
              }(e.length) && !Ge(e);
            }var Ve = fe || function () {
              return !1;
            };function Ge(e) {
              var t = We(e) ? te.call(e) : "";return t == c || t == f;
            }function We(e) {
              var t = void 0 === e ? "undefined" : r(e);return !!e && ("object" == t || "function" == t);
            }function Je(e) {
              return He(e) ? function (e, t) {
                var n = qe(e) || function (e) {
                  return function (e) {
                    return function (e) {
                      return !!e && "object" == (void 0 === e ? "undefined" : r(e));
                    }(e) && He(e);
                  }(e) && ee.call(e, "callee") && (!se.call(e, "callee") || te.call(e) == u);
                }(e) ? function (e, t) {
                  for (var n = -1, r = Array(e); ++n < e;) {
                    r[n] = t(n);
                  }return r;
                }(e.length, String) : [],
                    i = n.length,
                    o = !!i;for (var a in e) {
                  !t && !ee.call(e, a) || o && ("length" == a || Be(a, i)) || n.push(a);
                }return n;
              }(e) : function (e) {
                if (!Fe(e)) return he(e);var t = [];for (var n in Object(e)) {
                  ee.call(e, n) && "constructor" != n && t.push(n);
                }return t;
              }(e);
            }n.exports = function (e) {
              return Re(e, !1, !0);
            };
          }).call(t, n(0), n(4)(e));
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) {
            return !!Array.isArray(e) && e.some(t);
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t, n) {
            n = Math.min(Math.max(n, 0), e.length);var r = Array(e.length - n),
                i = t.length,
                o = void 0;for (o = 0; o < r.length; o++) {
              r[o] = e[o + n];
            }for (o = 0; o < i; o++) {
              e[o + n] = t[o];
            }for (o = 0; o < r.length; o++) {
              e[o + i + n] = r[o];
            }
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { LoggerLevel: "info", MessageBundle: "Messages", AsynchronousQueueTimeout: 2e3, ApplicationInitProcessTimeout: 1e3 };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t, n) {
            return void 0 === t ? e : n ? "" + e + t : "" + t + e;
          };
        }, function (e, t, n) {
          var r = D(n(24)),
              i = n(11),
              o = L(n(1)),
              a = L(n(14)),
              u = L(n(37)),
              s = L(n(39)),
              l = L(n(40)),
              c = L(n(21)),
              f = L(n(41)),
              h = D(n(42)),
              d = L(n(43)),
              p = n(44),
              v = L(n(16)),
              y = L(n(6)),
              b = D(n(45)),
              _ = L(n(10)),
              m = L(n(8)),
              g = L(n(9)),
              O = L(n(3)),
              E = L(n(22)),
              w = L(n(2)),
              k = L(n(47)),
              j = L(n(5)),
              S = L(n(15)),
              P = L(n(48)),
              A = L(n(49)),
              T = L(n(50)),
              C = L(n(51)),
              M = L(n(52)),
              R = L(n(19)),
              x = L(n(20)),
              N = L(n(13)),
              I = L(n(12)),
              U = n(53);function L(e) {
            return e && e.__esModule ? e : { default: e };
          }function D(e) {
            if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }return t.default = e, t;
          }var B = {};B.Utility = r, B.Utility.Map = l.default, B.Utility.Stack = s.default, B.Utility.SchemaGenerator = v.default, B.Utility.extend = O.default, B.Utility.AsynchronousQueue = f.default, B.Utility.pad = E.default, B.Utility.BundleObject = p.BundleObject, B.Utility.ResourceBundle = p.ResourceBundle, B.Utility.MessageReader = p.MessageReader, B.Utility.MessageKeyFormatter = p.MessageKeyFormatter, B.Utility.uniqueId = w.default, B.Utility.sortObjects = i.sortObjects, B.Utility.mergeSort = i.mergeSort, B.Utility.quickSort = i.quickSort, B.Utility.insertionSort = i.insertionSort, B.Utility.bubbleSort = i.bubbleSort, B.Logger = h, B.Object = o.default, B.AbstractModel = a.default, B.AbstractCollection = u.default, B.ValidationFramework = y.default, B.Security = b, B.Security.ClientType = _.default, B.Configuration = c.default, B.Application = d.default, B.isString = m.default, B.isFunction = g.default, B.has = k.default, B.isObject = j.default, B.allKeys = S.default, B.create = P.default, B.result = A.default, B.arrayHas = T.default, B.exec = C.default, B.isDefined = M.default, B.some = R.default, B.fibonacci = U.fibonacci, B.fibonacciSequence = U.fibonacciSequence, B.splice = x.default, B.before = N.default, B.once = I.default, B.VERSION = "2.0.0-alpha.25", B.codename = "JC Denton", B.releasename = "UNATCO", e.exports = B;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = arguments,
              i = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          },
              o = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }();t.shuffle = function (e) {
            var t = e.slice(0),
                n = 0,
                r = void 0,
                i = void 0;for (n = e.length - 1; n > 0; n--) {
              i = Math.floor(Math.random() * (n + 1)), r = t[n], t[n] = t[i], t[i] = r;
            }return t;
          }, t.prettyPrint = function (e, t, n) {
            var r = "\t";return t && (r = " ".repeat(n)), JSON.stringify(e, null, r);
          }, t.binarySearch = function (e, t, n) {
            for (var r = 0, i = e.length - 1, o = void 0, a = void 0; r <= i;) {
              if ((a = n(e[o = Math.floor((r + i) / 2)], t)) < 0) r = o + 1;else {
                if (!(a > 0)) return o;i = o - 1;
              }
            }return null;
          };var u = t.TransformerType = {};u.STRING = Symbol("String"), u.INTEGER = Symbol("Integer"), u.NUMBER = Symbol("Number"), u.BOOLEAN = Symbol("Boolean"), u.ARRAY = Symbol("Array"), u.OBJECT = Symbol("Object"), u.NULL = Symbol("Null"), t.Transformer = function () {
            function e() {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.type = u;
            }return o(e, null, [{ key: "transform", value: function value(e, t) {
                var n = null;switch (t) {case u.STRING:
                    n = "object" === (void 0 === e ? "undefined" : i(e)) ? JSON.stringify(e) : String(e);break;case u.INTEGER:
                    n = parseInt(e);break;case u.NUMBER:
                    n = Number(e);break;case u.BOOLEAN:
                    n = Boolean(e);break;case u.ARRAY:
                    Array.isArray(e) ? n = e : (n = [])[0] = e;break;case u.OBJECT:
                    "object" !== (void 0 === e ? "undefined" : i(e)) ? (n = {})[e] = e : n = e;}return n;
              } }, { key: "isType", value: function value(e) {
                return null === e ? u.NULL : "string" == typeof e ? u.STRING : "number" == typeof e ? u.NUMBER : "boolean" == typeof e ? u.BOOLEAN : Array.isArray(e) ? u.ARRAY : "object" === (void 0 === e ? "undefined" : i(e)) ? u.OBJECT : void 0;
              } }]), e;
          }(), t.wrap = function (e, t) {
            return function () {
              return t.apply(void 0, [e].concat(Array.prototype.slice.call(r)));
            };
          }, t.filterObject = function (e, t) {
            var n = {};if (e && t) {
              var r = t.length,
                  i = 0;for (i = 0; i < r; i++) {
                n[t[i]] = e[t[i]];
              }
            }return n;
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          },
              i = t.EVENT_SPLITTER = /\s+/,
              o = t.eventsApi = function e(t, n, o, a, u) {
            var s = 0,
                l = void 0;if (o && "object" === (void 0 === o ? "undefined" : r(o))) {
              void 0 !== a && "context" in u && void 0 === u.context && (u.context = a);for (l = Object.keys(o); s < l.length; s++) {
                n = e(t, n, l[s], o[l[s]], u);
              }
            } else if (o && i.test(o)) for (l = o.split(i); s < l.length; s++) {
              n = t(n, l[s], a, u);
            } else n = t(n, o, a, u);return n;
          },
              u = (t.internalOn = function (e, t, n, r, i) {
            return e._events = o(u, e._events || {}, t, n, { context: r, ctx: e, listening: i }), i && ((e._listeners || (e._listeners = {}))[i.id] = i), e;
          }, t.onApi = function (e, t, n, r) {
            if (n) {
              var i = e[t] || (e[t] = []),
                  o = r.context,
                  a = r.ctx,
                  u = r.listening;u && u.count++, i.push({ callback: n, context: o, ctx: o || a, listening: u });
            }return e;
          }),
              s = (t.offApi = function (e, t, n, r) {
            if (e) {
              var i = 0,
                  o = void 0,
                  a = r.context,
                  u = r.listeners;if (t || n || a) {
                for (var s = t ? [t] : Object.keys(e); i < s.length; i++) {
                  var l = e[t = s[i]];if (!l) break;var c = [],
                      f = 0;for (f = 0; f < l.length; f++) {
                    var h = l[f];n && n !== h.callback && n !== h.callback._callback || a && a !== h.context ? c.push(h) : (o = h.listening) && 0 == --o.count && (delete u[o.id], delete o.listeningTo[o.objId]);
                  }c.length ? e[t] = c : delete e[t];
                }return e;
              }for (var d = Object.keys(u); i < d.length; i++) {
                delete u[(o = u[d[i]]).id], delete o.listeningTo[o.objId];
              }
            }
          }, t.triggerApi = function (e, t, n, r) {
            if (e) {
              var i = e[t],
                  o = e.all;i && o && (o = o.slice()), i && s(i, r), o && s(o, [t].concat(r));
            }return e;
          }, t.triggerEvents = function (e, t) {
            var n = void 0,
                r = -1,
                i = e.length,
                o = t[0],
                a = t[1],
                u = t[2];switch (t.length) {case 0:
                for (; ++r < i;) {
                  (n = e[r]).callback.call(n.ctx);
                }return;case 1:
                for (; ++r < i;) {
                  (n = e[r]).callback.call(n.ctx, o);
                }return;case 2:
                for (; ++r < i;) {
                  (n = e[r]).callback.call(n.ctx, o, a);
                }return;case 3:
                for (; ++r < i;) {
                  (n = e[r]).callback.call(n.ctx, o, a, u);
                }return;default:
                for (; ++r < i;) {
                  (n = e[r]).callback.apply(n.ctx, t);
                }return;}
          });
        }, function (e, t, n) {
          (function (t) {
            var n = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
              return void 0 === e ? "undefined" : a(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            },
                r = "Expected a function",
                i = "__lodash_placeholder__",
                o = 1,
                u = 2,
                s = 4,
                l = 8,
                c = 16,
                f = 32,
                h = 64,
                d = 128,
                p = 512,
                v = 1 / 0,
                y = 9007199254740991,
                b = 1.7976931348623157e308,
                _ = NaN,
                m = [["ary", d], ["bind", o], ["bindKey", u], ["curry", l], ["curryRight", c], ["flip", p], ["partial", f], ["partialRight", h], ["rearg", 256]],
                g = "[object Function]",
                O = "[object GeneratorFunction]",
                E = "[object Symbol]",
                w = /^\s+|\s+$/g,
                k = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                j = /\{\n\/\* \[wrapped with (.+)\] \*/,
                S = /,? & /,
                P = /^[-+]0x[0-9a-f]+$/i,
                A = /^0b[01]+$/i,
                T = /^\[object .+?Constructor\]$/,
                C = /^0o[0-7]+$/i,
                M = /^(?:0|[1-9]\d*)$/,
                R = parseInt,
                x = "object" == (void 0 === t ? "undefined" : n(t)) && t && t.Object === Object && t,
                N = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                I = x || N || Function("return this")();function U(e, t, n) {
              switch (n.length) {case 0:
                  return e.call(t);case 1:
                  return e.call(t, n[0]);case 2:
                  return e.call(t, n[0], n[1]);case 3:
                  return e.call(t, n[0], n[1], n[2]);}return e.apply(t, n);
            }function L(e) {
              return e != e;
            }function D(e, t) {
              for (var n = -1, r = e.length, o = 0, a = []; ++n < r;) {
                var u = e[n];u !== t && u !== i || (e[n] = i, a[o++] = n);
              }return a;
            }var B,
                F,
                $,
                z = Function.prototype,
                q = Object.prototype,
                H = I["__core-js_shared__"],
                V = (B = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "")) ? "Symbol(src)_1." + B : "",
                G = z.toString,
                W = q.hasOwnProperty,
                J = q.toString,
                K = RegExp("^" + G.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                Y = Object.create,
                X = Math.max,
                Q = Math.min,
                Z = (F = oe(Object, "defineProperty"), ($ = oe.name) && $.length > 2 ? F : void 0);function ee(e) {
              return function () {
                var t = arguments;switch (t.length) {case 0:
                    return new e();case 1:
                    return new e(t[0]);case 2:
                    return new e(t[0], t[1]);case 3:
                    return new e(t[0], t[1], t[2]);case 4:
                    return new e(t[0], t[1], t[2], t[3]);case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);}var n,
                    r = le(n = e.prototype) ? Y(n) : {},
                    i = e.apply(r, t);return le(i) ? i : r;
              };
            }function te(e, t, n, r, i, a, s, f, h, v) {
              var y = t & d,
                  b = t & o,
                  _ = t & u,
                  m = t & (l | c),
                  g = t & p,
                  O = _ ? void 0 : ee(e);return function o() {
                for (var u = arguments.length, l = Array(u), c = u; c--;) {
                  l[c] = arguments[c];
                }if (m) var d = ie(o),
                    p = function (e, t) {
                  for (var n = e.length, r = 0; n--;) {
                    e[n] === t && r++;
                  }return r;
                }(l, d);if (r && (l = function (e, t, n, r) {
                  for (var i = -1, o = e.length, a = n.length, u = -1, s = t.length, l = X(o - a, 0), c = Array(s + l), f = !r; ++u < s;) {
                    c[u] = t[u];
                  }for (; ++i < a;) {
                    (f || i < o) && (c[n[i]] = e[i]);
                  }for (; l--;) {
                    c[u++] = e[i++];
                  }return c;
                }(l, r, i, m)), a && (l = function (e, t, n, r) {
                  for (var i = -1, o = e.length, a = -1, u = n.length, s = -1, l = t.length, c = X(o - u, 0), f = Array(c + l), h = !r; ++i < c;) {
                    f[i] = e[i];
                  }for (var d = i; ++s < l;) {
                    f[d + s] = t[s];
                  }for (; ++a < u;) {
                    (h || i < o) && (f[d + n[a]] = e[i++]);
                  }return f;
                }(l, a, s, m)), u -= p, m && u < v) {
                  var E = D(l, d);return ne(e, t, te, o.placeholder, n, l, E, f, h, v - u);
                }var w = b ? n : this,
                    k = _ ? w[e] : e;return u = l.length, f ? l = function (e, t) {
                  for (var n = e.length, r = Q(t.length, n), i = function (e, t) {
                    var n = -1,
                        r = e.length;for (t || (t = Array(r)); ++n < r;) {
                      t[n] = e[n];
                    }return t;
                  }(e); r--;) {
                    var o = t[r];e[r] = ae(o, n) ? i[o] : void 0;
                  }return e;
                }(l, f) : g && u > 1 && l.reverse(), y && h < u && (l.length = h), this && this !== I && this instanceof o && (k = O || ee(k)), k.apply(w, l);
              };
            }function ne(e, t, n, r, i, a, c, d, p, v) {
              var y = t & l;t |= y ? f : h, (t &= ~(y ? h : f)) & s || (t &= ~(o | u));var b = n(e, t, i, y ? a : void 0, y ? c : void 0, y ? void 0 : a, y ? void 0 : c, d, p, v);return b.placeholder = r, ue(b, e, t);
            }function re(e, t, n, i, a, s, d, p) {
              var v = t & u;if (!v && "function" != typeof e) throw new TypeError(r);var y = i ? i.length : 0;if (y || (t &= ~(f | h), i = a = void 0), d = void 0 === d ? d : X(fe(d), 0), p = void 0 === p ? p : fe(p), y -= a ? a.length : 0, t & h) {
                var b = i,
                    _ = a;i = a = void 0;
              }var m = [e, t, n, i, a, b, _, s, d, p];if (e = m[0], t = m[1], n = m[2], i = m[3], a = m[4], !(p = m[9] = null == m[9] ? v ? 0 : e.length : X(m[9] - y, 0)) && t & (l | c) && (t &= ~(l | c)), t && t != o) g = t == l || t == c ? function (e, t, n) {
                var r = ee(e);return function i() {
                  for (var o = arguments.length, a = Array(o), u = o, s = ie(i); u--;) {
                    a[u] = arguments[u];
                  }var l = o < 3 && a[0] !== s && a[o - 1] !== s ? [] : D(a, s);return (o -= l.length) < n ? ne(e, t, te, i.placeholder, void 0, a, l, void 0, void 0, n - o) : U(this && this !== I && this instanceof i ? r : e, this, a);
                };
              }(e, t, p) : t != f && t != (o | f) || a.length ? te.apply(void 0, m) : function (e, t, n, r) {
                var i = t & o,
                    a = ee(e);return function t() {
                  for (var o = -1, u = arguments.length, s = -1, l = r.length, c = Array(l + u), f = this && this !== I && this instanceof t ? a : e; ++s < l;) {
                    c[s] = r[s];
                  }for (; u--;) {
                    c[s++] = arguments[++o];
                  }return U(f, i ? n : this, c);
                };
              }(e, t, n, i);else var g = function (e, t, n) {
                var r = t & o,
                    i = ee(e);return function t() {
                  return (this && this !== I && this instanceof t ? i : e).apply(r ? n : this, arguments);
                };
              }(e, t, n);return ue(g, e, t);
            }function ie(e) {
              return e.placeholder;
            }function oe(e, t) {
              var n = function (e, t) {
                return null == e ? void 0 : e[t];
              }(e, t);return function (e) {
                return !(!le(e) || V && V in e) && (function (e) {
                  var t = le(e) ? J.call(e) : "";return t == g || t == O;
                }(e) || function (e) {
                  var t = !1;if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "");
                  } catch (e) {}return t;
                }(e) ? K : T).test(function (e) {
                  if (null != e) {
                    try {
                      return G.call(e);
                    } catch (e) {}try {
                      return e + "";
                    } catch (e) {}
                  }return "";
                }(e));
              }(n) ? n : void 0;
            }function ae(e, t) {
              return !!(t = null == t ? y : t) && ("number" == typeof e || M.test(e)) && e > -1 && e % 1 == 0 && e < t;
            }var ue = Z ? function (e, t, n) {
              var r,
                  i = t + "";return Z(e, "toString", { configurable: !0, enumerable: !1, value: (r = function (e, t) {
                  var n = t.length,
                      r = n - 1;return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(k, "{\n/* [wrapped with " + t + "] */\n");
                }(i, function (e, t) {
                  return function (e, t) {
                    for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n]);) {}
                  }(m, function (n) {
                    var r = "_." + n[0];t & n[1] && !function (e, t) {
                      return !(!e || !e.length) && function (e, t, n) {
                        if (t != t) return function (e, t, n, r) {
                          for (var i = e.length, o = -1; ++o < i;) {
                            if (t(e[o], o, e)) return o;
                          }return -1;
                        }(e, L);for (var r = -1, i = e.length; ++r < i;) {
                          if (e[r] === t) return r;
                        }return -1;
                      }(e, t) > -1;
                    }(e, r) && e.push(r);
                  }), e.sort();
                }(function (e) {
                  var t = i.match(j);return t ? t[1].split(S) : [];
                }(), n)), function () {
                  return r;
                }) });
            } : function (e) {
              return e;
            },
                se = function (e, t) {
              return t = X(void 0 === t ? e.length - 1 : t, 0), function () {
                for (var n = arguments, r = -1, i = X(n.length - t, 0), o = Array(i); ++r < i;) {
                  o[r] = n[t + r];
                }r = -1;for (var a = Array(t + 1); ++r < t;) {
                  a[r] = n[r];
                }return a[t] = o, U(e, this, a);
              };
            }(function (e, t, n) {
              var r = o;if (n.length) {
                var i = D(n, ie(se));r |= f;
              }return re(e, r, t, n, i);
            });function le(e) {
              var t = void 0 === e ? "undefined" : n(e);return !!e && ("object" == t || "function" == t);
            }function ce(e) {
              return "symbol" == (void 0 === e ? "undefined" : n(e)) || function (e) {
                return !!e && "object" == (void 0 === e ? "undefined" : n(e));
              }(e) && J.call(e) == E;
            }function fe(e) {
              var t = function (e) {
                return e ? (e = function (e) {
                  if ("number" == typeof e) return e;if (ce(e)) return _;if (le(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;e = le(t) ? t + "" : t;
                  }if ("string" != typeof e) return 0 === e ? e : +e;e = e.replace(w, "");var n = A.test(e);return n || C.test(e) ? R(e.slice(2), n ? 2 : 8) : P.test(e) ? _ : +e;
                }(e)) === v || e === -v ? (e < 0 ? -1 : 1) * b : e == e ? e : 0 : 0 === e ? e : 0;
              }(e),
                  n = t % 1;return t == t ? n ? t - n : t : 0;
            }se.placeholder = {}, e.exports = se;
          }).call(t, n(0));
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r,
              i = arguments,
              o = (r = n(28)) && r.__esModule ? r : { default: r },
              a = n(7),
              u = n(17),
              s = {};t.default = function e(t) {
            var n = new o.default(),
                r = t || "en";return { addFormat: function addFormat(e, t) {
                n.addFormat(e, t);
              }, language: function language(e) {
                return e ? (s[e] || (e = e.split("-")[0]), !!s[e] && (r = e, e)) : r;
              }, addLanguage: function addLanguage(e, t) {
                var n = void 0;for (n in a.ERROR_CODES) {
                  t[n] && !t[a.ERROR_CODES[n]] && (t[a.ERROR_CODES[n]] = t[n]);
                }var r = e.split("-")[0];if (s[r]) for (n in s[e] = Object.create(s[r]), t) {
                  void 0 === s[r][n] && (s[r][n] = t[n]), s[e][n] = t[n];
                } else s[e] = t, s[r] = t;
              }, freshApi: function freshApi(t) {
                var n = e();return t && n.language(t), n;
              }, validate: function validate(e, t, i, a) {
                var u = new o.default(n, !1, s[r], i, a);"string" == typeof t && (t = { $ref: t }), u.addSchema("", t);var l = u.validateAll(e, t, null, null, "");return !l && a && (l = u.banUnknownProperties()), (void 0).error = l, (void 0).missing = u.missing, (void 0).valid = null === l, (void 0).valid;
              }, validateResult: function validateResult() {
                var e = {};return (void 0).validate.apply(e, i), e;
              }, validateMultiple: function validateMultiple(e, t, i, a) {
                var u = new o.default(n, !0, s[r], i, a);"string" == typeof t && (t = { $ref: t }), u.addSchema("", t), u.validateAll(e, t, null, null, ""), a && u.banUnknownProperties();var l = {};return l.errors = u.errors, l.missing = u.missing, l.valid = 0 === l.errors.length, l;
              }, addSchema: function addSchema(e, t) {
                return n.addSchema(e, t);
              }, getSchema: function getSchema(e, t) {
                return n.getSchema(e, t);
              }, getSchemaMap: function getSchemaMap() {
                return n.getSchemaMap.apply(n, i);
              }, getSchemaUris: function getSchemaUris() {
                return n.getSchemaUris.apply(n, i);
              }, getMissingUris: function getMissingUris() {
                return n.getMissingUris.apply(n, i);
              }, dropSchemas: function dropSchemas() {
                n.dropSchemas.apply(n, i);
              }, defineKeyword: function defineKeyword() {
                n.defineKeyword.apply(n, i);
              }, defineError: function defineError(e, t, n) {
                if ("string" != typeof e || !/^[A-Z]+(_[A-Z]+)*$/.test(e)) throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if ("number" != typeof t || t % 1 != 0 || t < 1e4) throw new Error("Code number must be an integer > 10000");if (void 0 !== a.ERROR_CODES[e]) throw new Error("Error already defined: " + e + " as " + a.ERROR_CODES[e]);if (void 0 !== a.ErrorCodeLookup[t]) throw new Error("Error code already used: " + a.ErrorCodeLookup[t] + " as " + t);for (var r in a.ERROR_CODES[e] = t, a.ErrorCodeLookup[t] = e, a.ERROR_MESSAGES_DEFAULT[e] = a.ERROR_MESSAGES_DEFAULT[t] = n, s) {
                  var i = s[r];i[e] && (i[t] = i[t] || i[e]);
                }
              }, reset: function reset() {
                n.reset(), (void 0).error = null, (void 0).missing = [], (void 0).valid = !0;
              }, missing: [], error: null, valid: !0, normSchema: u.normSchema, resolveUrl: u.resolveUrl, getDocumentUri: u.getDocumentUri, errorCodes: a.ERROR_CODES };
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          },
              i = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              o = n(7),
              u = n(17),
              s = Math.pow(2, -51),
              l = 1 - s,
              c = function () {
            function e(t, n, r, i, o) {
              if (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this.missing = [], this.missingMap = {}, this.formatValidators = t ? Object.create(t.formatValidators) : {}, this.schemas = t ? Object.create(t.schemas) : {}, this.collectMultiple = n, this.errors = [], this.handleError = n ? this.collectError : this.returnError, i && (this.checkRecursive = !0, this.scanned = [], this.scannedFrozen = [], this.scannedFrozenSchemas = [], this.scannedFrozenValidationErrors = [], this.validatedSchemasKey = "tv4_validation_id", this.validationErrorsKey = "tv4_validation_errors_id"), o && (this.trackUnknownProperties = !0, this.knownPropertyPaths = {}, this.unknownPropertyPaths = {}), this.errorMessages = r, this.definedKeywords = {}, t) for (var a in t.definedKeywords) {
                this.definedKeywords[a] = t.definedKeywords[a].slice(0);
              }
            }return i(e, [{ key: "notReallyPercentEncode", value: function value(e) {
                return encodeURI(e).replace(/%25[0-9][0-9]/g, function (e) {
                  return "%" + e.substring(3);
                });
              } }, { key: "uriTemplateSubstitution", value: function value(e) {
                var t = this,
                    n = "";URI_TEMPLATE_GLOBAL_MODIFIERS[e.charAt(0)] && (n = e.charAt(0), e = e.substring(1));var i = "",
                    o = "",
                    a = !0,
                    u = !1,
                    s = !1;"+" === n ? a = !1 : "." === n ? (o = ".", i = ".") : "/" === n ? (o = "/", i = "/") : "#" === n ? (o = "#", a = !1) : ";" === n ? (o = ";", i = ";", u = !0, s = !0) : "?" === n ? (o = "?", i = "&", u = !0) : "&" === n && (o = "&", i = "&", u = !0);var l = [],
                    c = e.split(","),
                    f = [],
                    h = {},
                    d = 0,
                    p = c.length;for (d = 0; d < p; d++) {
                  var v = c[d],
                      y = null;if (-1 !== v.indexOf(":")) {
                    var b = v.split(":");v = b[0], y = parseInt(b[1], 10);
                  }for (var _ = {}; URI_TEMPLATE_SUFFICES[v.charAt(v.length - 1)];) {
                    _[v.charAt(v.length - 1)] = !0, v = v.substring(0, v.length - 1);
                  }var m = { truncate: y, name: v, suffices: _ };f.push(m), h[v] = m, l.push(v);
                }var g = function g(e) {
                  var n = "",
                      l = 0,
                      c = 0,
                      h = f.length;for (c = 0; c < h; c++) {
                    var d = f[c];if (!e && !isFunction(e)) throw new Error("Problem qith value function.");var p = e(d.name);if (null === p || void 0 === p || Array.isArray(p) && 0 === p.length || "object" === (void 0 === p ? "undefined" : r(p)) && 0 === Object.keys(p).length) l++;else if (n += c === l ? o : i || ",", Array.isArray(p)) {
                      u && (n += d.name + "=");var v = 0;for (h = p.length, v = 0; v < h; v++) {
                        v > 0 && (n += d.suffices["*"] && i || ",", d.suffices["*"] && u && (n += d.name + "=")), n += a ? encodeURIComponent(p[v]).replace(/!/g, "%21") : t.notReallyPercentEncode(p[v]);
                      }
                    } else if ("object" === (void 0 === p ? "undefined" : r(p))) {
                      u && !d.suffices["*"] && (n += d.name + "=");var y = !0;for (var b in p) {
                        y || (n += d.suffices["*"] && i || ","), y = !1, n += a ? encodeURIComponent(b).replace(/!/g, "%21") : t.notReallyPercentEncode(b), n += d.suffices["*"] ? "=" : ",", n += a ? encodeURIComponent(p[b]).replace(/!/g, "%21") : t.notReallyPercentEncode(p[b]);
                      }
                    } else u && (n += d.name, s && "" === p || (n += "=")), null !== d.truncate && (p = p.substring(0, d.truncate)), n += a ? encodeURIComponent(p).replace(/!/g, "%21") : t.notReallyPercentEncode(p);
                  }return n;
                };return g.varNames = l, { prefix: o, substitution: g };
              } }, { key: "recursiveCompare", value: function value(e, t) {
                if (e === t) return !0;if ("object" === (void 0 === e ? "undefined" : r(e)) && "object" === (void 0 === t ? "undefined" : r(t))) {
                  if (Array.isArray(e) !== Array.isArray(t)) return !1;if (Array.isArray(e)) {
                    if (e.length !== t.length) return !1;var n = 0,
                        i = e.length;for (n = 0; n < i; n++) {
                      if (!this.recursiveCompare(e[n], t[n])) return !1;
                    }
                  } else {
                    var o = void 0;for (o in e) {
                      if (void 0 === t[o] && void 0 !== e[o]) return !1;
                    }for (o in t) {
                      if (void 0 === e[o] && void 0 !== t[o]) return !1;
                    }for (o in e) {
                      if (!this.recursiveCompare(e[o], t[o])) return !1;
                    }
                  }return !0;
                }return !1;
              } }, { key: "defineKeyword", value: function value(e, t) {
                this.definedKeywords[e] = this.definedKeywords[e] || [], this.definedKeywords[e].push(t);
              } }, { key: "createError", value: function value(e, t, n, r, i) {
                var a = this.errorMessages[e] || o.ERROR_MESSAGES_DEFAULT[e];if ("string" != typeof a) return new o.ValidationError(e, "Unknown error code " + e + ": " + JSON.stringify(t), t, n, r, i);var u = a.replace(/\{([^{}]*)\}/g, function (e, n) {
                  var r = t[n];return "string" == typeof r || "number" == typeof r ? r : e;
                });return new o.ValidationError(e, u, t, n, r, i);
              } }, { key: "returnError", value: function value(e) {
                return e;
              } }, { key: "collectError", value: function value(e) {
                return e && this.errors.push(e), null;
              } }, { key: "prefixErrors", value: function value(e, t, n) {
                var r = 0,
                    i = this.errors.length;for (r = e; r < i; r++) {
                  this.errors[r] = this.errors[r].prefixWith(t, n);
                }return this;
              } }, { key: "banUnknownProperties", value: function value() {
                for (var e in this.unknownPropertyPaths) {
                  var t = this.createError(o.ERROR_CODES.UNKNOWN_PROPERTY, { path: e }, e, ""),
                      n = this.handleError(t);if (n) return n;
                }return null;
              } }, { key: "addFormat", value: function value(e, t) {
                if ("object" === (void 0 === e ? "undefined" : r(e))) {
                  for (var n in e) {
                    this.addFormat(n, e[n]);
                  }return this;
                }this.formatValidators[e] = t;
              } }, { key: "resolveRefs", value: function value(e, t) {
                if (void 0 !== e.$ref) {
                  if ((t = t || {})[e.$ref]) return this.createError(o.ERROR_CODES.CIRCULAR_REFERENCE, { urls: Object.keys(t).join(", ") }, "", "");t[e.$ref] = !0, e = this.getSchema(e.$ref, t);
                }return e;
              } }, { key: "getSchema", value: function value(e, t) {
                var n = void 0;if (void 0 !== this.schemas[e]) return n = this.schemas[e], this.resolveRefs(n, t);var i = e,
                    o = "";if (-1 !== e.indexOf("#") && (o = e.substring(e.indexOf("#") + 1), i = e.substring(0, e.indexOf("#"))), "object" === r(this.schemas[i])) {
                  n = this.schemas[i];var a = decodeURIComponent(o);if ("" === a) return this.resolveRefs(n, t);if ("/" !== a.charAt(0)) return;var u = a.split("/").slice(1),
                      s = 0,
                      l = u.length;for (s = 0; s < l; s++) {
                    var c = u[s].replace(/~1/g, "/").replace(/~0/g, "~");if (void 0 === n[c]) {
                      n = void 0;break;
                    }n = n[c];
                  }if (void 0 !== n) return this.resolveRefs(n, t);
                }void 0 === this.missing[i] && (this.missing.push(i), this.missing[i] = i, this.missingMap[i] = i);
              } }, { key: "searchSchemas", value: function value(e, t) {
                if (Array.isArray(e)) {
                  var n = 0,
                      i = e.length;for (n = 0; n < i; n++) {
                    this.searchSchemas(e[n], t);
                  }
                } else if (e && "object" === (void 0 === e ? "undefined" : r(e))) for (var o in "string" == typeof e.id && isTrustedUrl(t, e.id) && void 0 === this.schemas[e.id] && (this.schemas[e.id] = e), e) {
                  if ("enum" !== o) if ("object" === r(e[o])) this.searchSchemas(e[o], t);else if ("$ref" === o) {
                    var a = (0, u.getDocumentUri)(e[o]);a && void 0 === this.schemas[a] && void 0 === this.missingMap[a] && (this.missingMap[a] = a);
                  }
                }
              } }, { key: "addSchema", value: function value(e, t) {
                if ("string" != typeof e || void 0 === t) {
                  if ("object" !== (void 0 === e ? "undefined" : r(e)) || "string" != typeof e.id) return;e = (t = e).id;
                }e === (0, u.getDocumentUri)(e) + "#" && (e = (0, u.getDocumentUri)(e)), this.schemas[e] = t, delete this.missingMap[e], (0, u.normSchema)(t, e), this.searchSchemas(t, e);
              } }, { key: "getSchemaMap", value: function value() {
                var e = {};for (var t in this.schemas) {
                  e[t] = this.schemas[t];
                }return e;
              } }, { key: "getSchemaUris", value: function value(e) {
                var t = [];for (var n in this.schemas) {
                  e && !e.test(n) || t.push(n);
                }return t;
              } }, { key: "getMissingUris", value: function value(e) {
                var t = [];for (var n in this.missingMap) {
                  e && !e.test(n) || t.push(n);
                }return t;
              } }, { key: "dropSchemas", value: function value() {
                this.schemas = {}, this.reset();
              } }, { key: "reset", value: function value() {
                this.missing = [], this.missingMap = {}, this.errors = [];
              } }, { key: "validateAll", value: function value(e, t, n, i, a) {
                var u = void 0;if (!(t = this.resolveRefs(t))) return null;if (t instanceof o.ValidationError) return this.errors.push(t), t;var s = this.errors.length,
                    l = void 0,
                    c = null,
                    f = null;if (this.checkRecursive && e && "object" === (void 0 === e ? "undefined" : r(e))) {
                  if (u = !this.scanned.length, e[this.validatedSchemasKey]) {
                    var h = e[this.validatedSchemasKey].indexOf(t);if (-1 !== h) return this.errors = this.errors.concat(e[this.validationErrorsKey][h]), null;
                  }if (Object.isFrozen(e) && -1 !== (l = this.scannedFrozen.indexOf(e))) {
                    var d = this.scannedFrozenSchemas[l].indexOf(t);if (-1 !== d) return this.errors = this.errors.concat(this.scannedFrozenValidationErrors[l][d]), null;
                  }if (this.scanned.push(e), Object.isFrozen(e)) -1 === l && (l = this.scannedFrozen.length, this.scannedFrozen.push(e), this.scannedFrozenSchemas.push([])), c = this.scannedFrozenSchemas[l].length, this.scannedFrozenSchemas[l][c] = t, this.scannedFrozenValidationErrors[l][c] = [];else {
                    if (!e[this.validatedSchemasKey]) try {
                      Object.defineProperty(e, this.validatedSchemasKey, { value: [], configurable: !0 }), Object.defineProperty(e, this.validationErrorsKey, { value: [], configurable: !0 });
                    } catch (t) {
                      e[this.validatedSchemasKey] = [], e[this.validationErrorsKey] = [];
                    }f = e[this.validatedSchemasKey].length, e[this.validatedSchemasKey][f] = t, e[this.validationErrorsKey][f] = [];
                  }
                }var p = this.errors.length,
                    v = this.validateBasic(e, t, a) || this.validateNumeric(e, t, a) || this.validateString(e, t, a) || this.validateArray(e, t, a) || this.validateObject(e, t, a) || this.validateCombinations(e, t, a) || this.validateHypermedia(e, t, a) || this.validateFormat(e, t, a) || this.validateDefinedKeywords(e, t, a) || null;if (u) {
                  for (; this.scanned.length;) {
                    delete this.scanned.pop()[this.validatedSchemasKey];
                  }this.scannedFrozen = [], this.scannedFrozenSchemas = [];
                }if (v || p !== this.errors.length) for (; n && n.length || i && i.length;) {
                  var y = n && n.length ? "" + n.pop() : null,
                      b = i && i.length ? "" + i.pop() : null;v && (v = v.prefixWith(y, b)), this.prefixErrors(p, y, b);
                }return null !== c ? this.scannedFrozenValidationErrors[l][c] = this.errors.slice(s) : null !== f && (e[this.validationErrorsKey][f] = this.errors.slice(s)), this.handleError(v);
              } }, { key: "validateFormat", value: function value(e, t) {
                if ("string" != typeof t.format || !this.formatValidators[t.format]) return null;var n = this.formatValidators[t.format].call(null, e, t);return "string" == typeof n || "number" == typeof n ? this.createError(o.ERROR_CODES.FORMAT_CUSTOM, { message: n }).prefixWith(null, "format") : n && "object" === (void 0 === n ? "undefined" : r(n)) ? this.createError(o.ERROR_CODES.FORMAT_CUSTOM, { message: n.message || "?" }, n.dataPath || null, n.schemaPath || "/format") : null;
              } }, { key: "validateDefinedKeywords", value: function value(e, t, n) {
                for (var i in this.definedKeywords) {
                  if (void 0 !== t[i]) {
                    var a = this.definedKeywords[i],
                        u = 0,
                        s = a.length;for (u = 0; u < s; u++) {
                      var l = (0, a[u])(e, t[i], t, n);if ("string" == typeof l || "number" == typeof l) return this.createError(o.ERROR_CODES.KEYWORD_CUSTOM, { key: i, message: l }).prefixWith(null, "format");if (l && "object" === (void 0 === l ? "undefined" : r(l))) {
                        var c = l.code;if ("string" == typeof c) {
                          if (!o.ERROR_CODES[c]) throw new Error("Undefined error code (use defineError): " + c);c = o.ERROR_CODES[c];
                        } else "number" != typeof c && (c = o.ERROR_CODES.KEYWORD_CUSTOM);var f = "object" === r(l.message) ? l.message : { key: i, message: l.message || "?" },
                            h = l.schemaPath || "/" + i.replace(/~/g, "~0").replace(/\//g, "~1");return this.createError(c, f, l.dataPath || null, h);
                      }
                    }
                  }
                }return null;
              } }, { key: "validateBasic", value: function value(e, t, n) {
                var r = this.validateType(e, t, n);return r ? r.prefixWith(null, "type") : null;
              } }, { key: "validateType", value: function value(e, t) {
                if (void 0 === t.type) return null;var n = void 0 === e ? "undefined" : r(e);null === e ? n = "null" : Array.isArray(e) && (n = "array");var i = t.type;"object" !== (void 0 === i ? "undefined" : r(i)) && (i = [i]);var a = 0,
                    u = i.length;for (a = 0; a < u; a++) {
                  var s = i[a];if (s === n || "integer" === s && "number" === n && e % 1 == 0) return null;
                }return this.createError(o.ERROR_CODES.INVALID_TYPE, { type: n, expected: i.join("/") });
              } }, { key: "validateEnum", value: function value(e, t) {
                if (void 0 === t.enum) return null;var n = 0,
                    r = t.enum.length;for (n = 0; n < r; n++) {
                  var i = t.enum[n];if (this.recursiveCompare(e, i)) return null;
                }return this.createError(o.ERROR_CODES.ENUM_MISMATCH, { value: "undefined" != typeof JSON ? JSON.stringify(e) : e });
              } }, { key: "validateNumeric", value: function value(e, t, n) {
                return this.validateMultipleOf(e, t, n) || this.validateMinMax(e, t, n) || this.validateNaN(e, t, n) || null;
              } }, { key: "validateMultipleOf", value: function value(e, t) {
                var n = t.multipleOf || t.divisibleBy;if (void 0 === n) return null;if ("number" == typeof e) {
                  var r = e / n % 1;if (r >= s && r < l) return this.createError(o.ERROR_CODES.NUMBER_MULTIPLE_OF, { value: e, multipleOf: n });
                }return null;
              } }, { key: "validateMinMax", value: function value(e, t) {
                if ("number" != typeof e) return null;if (void 0 !== t.minimum) {
                  if (e < t.minimum) return this.createError(o.ERROR_CODES.NUMBER_MINIMUM, { value: e, minimum: t.minimum }).prefixWith(null, "minimum");if (t.exclusiveMinimum && e === t.minimum) return this.createError(o.ERROR_CODES.NUMBER_MINIMUM_EXCLUSIVE, { value: e, minimum: t.minimum }).prefixWith(null, "exclusiveMinimum");
                }if (void 0 !== t.maximum) {
                  if (e > t.maximum) return this.createError(o.ERROR_CODES.NUMBER_MAXIMUM, { value: e, maximum: t.maximum }).prefixWith(null, "maximum");if (t.exclusiveMaximum && e === t.maximum) return this.createError(o.ERROR_CODES.NUMBER_MAXIMUM_EXCLUSIVE, { value: e, maximum: t.maximum }).prefixWith(null, "exclusiveMaximum");
                }return null;
              } }, { key: "validateNaN", value: function value(e) {
                return "number" != typeof e ? null : !0 === isNaN(e) || e === 1 / 0 || e === -1 / 0 ? this.createError(o.ERROR_CODES.NUMBER_NOT_A_NUMBER, { value: e }).prefixWith(null, "type") : null;
              } }, { key: "validateString", value: function value(e, t, n) {
                return this.validateStringLength(e, t, n) || this.validateStringPattern(e, t, n) || null;
              } }, { key: "validateStringLength", value: function value(e, t) {
                return "string" != typeof e ? null : void 0 !== t.minLength && e.length < t.minLength ? this.createError(o.ERROR_CODES.STRING_LENGTH_SHORT, { length: e.length, minimum: t.minLength }).prefixWith(null, "minLength") : void 0 !== t.maxLength && e.length > t.maxLength ? this.createError(o.ERROR_CODES.STRING_LENGTH_LONG, { length: e.length, maximum: t.maxLength }).prefixWith(null, "maxLength") : null;
              } }, { key: "validateStringPattern", value: function value(e, t) {
                return "string" != typeof e || void 0 === t.pattern ? null : new RegExp(t.pattern).test(e) ? null : this.createError(o.ERROR_CODES.STRING_PATTERN, { pattern: t.pattern }).prefixWith(null, "pattern");
              } }, { key: "validateArray", value: function value(e, t, n) {
                return Array.isArray(e) && (this.validateArrayLength(e, t, n) || this.validateArrayUniqueItems(e, t, n) || this.validateArrayItems(e, t, n)) || null;
              } }, { key: "validateArrayLength", value: function value(e, t) {
                var n = void 0;return void 0 !== t.minItems && e.length < t.minItems && (n = this.createError(o.ERROR_CODES.ARRAY_LENGTH_SHORT, { length: e.length, minimum: t.minItems }).prefixWith(null, "minItems"), this.handleError(n)) ? n : void 0 !== t.maxItems && e.length > t.maxItems && (n = this.createError(o.ERROR_CODES.ARRAY_LENGTH_LONG, { length: e.length, maximum: t.maxItems }).prefixWith(null, "maxItems"), this.handleError(n)) ? n : null;
              } }, { key: "validateArrayUniqueItems", value: function value(e, t) {
                if (t.uniqueItems) {
                  var n = 0,
                      r = e.length;for (n = 0; n < r; n++) {
                    var i = 0;for (i = n + 1; i < r; i++) {
                      if (recursiveCompare(e[n], e[i])) {
                        var a = this.createError(o.ERROR_CODES.ARRAY_UNIQUE, { match1: n, match2: i }).prefixWith(null, "uniqueItems");if (this.handleError(a)) return a;
                      }
                    }
                  }
                }return null;
              } }, { key: "validateArrayItems", value: function value(e, t, n) {
                if (void 0 === t.items) return null;var r = void 0,
                    i = void 0;if (Array.isArray(t.items)) {
                  var a = e.length;for (i = 0; i < a; i++) {
                    if (i < t.items.length) {
                      if (r = this.validateAll(e[i], t.items[i], [i], ["items", i], n + "/" + i)) return r;
                    } else if (void 0 !== t.additionalItems) if ("boolean" == typeof t.additionalItems) {
                      if (!t.additionalItems && (r = this.createError(o.ERROR_CODES.ARRAY_ADDITIONAL_ITEMS, {}).prefixWith("" + i, "additionalItems"), this.handleError(r))) return r;
                    } else if (r = this.validateAll(e[i], t.additionalItems, [i], ["additionalItems"], n + "/" + i)) return r;
                  }
                } else {
                  var u = e.length;for (i = 0; i < u; i++) {
                    if (r = this.validateAll(e[i], t.items, [i], ["items"], n + "/" + i)) return r;
                  }
                }return null;
              } }, { key: "validateObject", value: function value(e, t, n) {
                return "object" !== (void 0 === e ? "undefined" : r(e)) || null === e || Array.isArray(e) ? null : this.validateObjectMinMaxProperties(e, t, n) || this.validateObjectRequiredProperties(e, t, n) || this.validateObjectProperties(e, t, n) || this.validateObjectDependencies(e, t, n) || null;
              } }, { key: "validateObjectMinMaxProperties", value: function value(e, t) {
                var n = Object.keys(e),
                    r = void 0;return void 0 !== t.minProperties && n.length < t.minProperties && (r = this.createError(o.ERROR_CODES.OBJECT_PROPERTIES_MINIMUM, { propertyCount: n.length, minimum: t.minProperties }).prefixWith(null, "minProperties"), this.handleError(r)) ? r : void 0 !== t.maxProperties && n.length > t.maxProperties && (r = this.createError(o.ERROR_CODES.OBJECT_PROPERTIES_MAXIMUM, { propertyCount: n.length, maximum: t.maxProperties }).prefixWith(null, "maxProperties"), this.handleError(r)) ? r : null;
              } }, { key: "validateObjectRequiredProperties", value: function value(e, t) {
                if (void 0 !== t.required) {
                  var n = 0,
                      r = t.required.length;for (n = 0; n < r; n++) {
                    var i = t.required[n];if (void 0 === e[i]) {
                      var a = this.createError(o.ERROR_CODES.OBJECT_REQUIRED, { key: i }).prefixWith(null, "" + n).prefixWith(null, "required");if (this.handleError(a)) return a;
                    }
                  }
                }return null;
              } }, { key: "validateObjectProperties", value: function value(e, t, n) {
                var r = void 0;for (var i in e) {
                  var a = n + "/" + i.replace(/~/g, "~0").replace(/\//g, "~1"),
                      u = !1;if (void 0 !== t.properties && void 0 !== t.properties[i] && (u = !0, r = this.validateAll(e[i], t.properties[i], [i], ["properties", i], a))) return r;if (void 0 !== t.patternProperties) for (var s in t.patternProperties) {
                    if (new RegExp(s).test(i) && (u = !0, r = this.validateAll(e[i], t.patternProperties[s], [i], ["patternProperties", s], a))) return r;
                  }if (u) this.trackUnknownProperties && (this.knownPropertyPaths[a] = !0, delete this.unknownPropertyPaths[a]);else if (void 0 !== t.additionalProperties) {
                    if (this.trackUnknownProperties && (this.knownPropertyPaths[a] = !0, delete this.unknownPropertyPaths[a]), "boolean" == typeof t.additionalProperties) {
                      if (!t.additionalProperties && (r = this.createError(o.ERROR_CODES.OBJECT_ADDITIONAL_PROPERTIES, {}).prefixWith(i, "additionalProperties"), this.handleError(r))) return r;
                    } else if (r = this.validateAll(e[i], t.additionalProperties, [i], ["additionalProperties"], a)) return r;
                  } else this.trackUnknownProperties && !this.knownPropertyPaths[a] && (this.unknownPropertyPaths[a] = !0);
                }return null;
              } }, { key: "validateObjectDependencies", value: function value(e, t, n) {
                var r = void 0;if (void 0 !== t.dependencies) for (var i in t.dependencies) {
                  if (void 0 !== e[i]) {
                    var a = t.dependencies[i];if ("string" == typeof a) {
                      if (void 0 === e[a] && (r = this.createError(o.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: i, missing: a }).prefixWith(null, i).prefixWith(null, "dependencies"), this.handleError(r))) return r;
                    } else if (Array.isArray(a)) {
                      var u = 0,
                          s = a.lenth;for (u = 0; u < s; u++) {
                        var l = a[u];if (void 0 === e[l] && (r = this.createError(o.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: i, missing: l }).prefixWith(null, "" + u).prefixWith(null, i).prefixWith(null, "dependencies"), this.handleError(r))) return r;
                      }
                    } else if (r = this.validateAll(e, a, [], ["dependencies", i], n)) return r;
                  }
                }return null;
              } }, { key: "validateCombinations", value: function value(e, t, n) {
                return this.validateAllOf(e, t, n) || this.validateAnyOf(e, t, n) || this.validateOneOf(e, t, n) || this.validateNot(e, t, n) || null;
              } }, { key: "validateAllOf", value: function value(e, t, n) {
                if (void 0 === t.allOf) return null;var r = void 0,
                    i = 0,
                    o = t.allOf.length;for (i = 0; i < o; i++) {
                  var a = t.allOf[i];if (r = this.validateAll(e, a, [], ["allOf", i], n)) return r;
                }return null;
              } }, { key: "validateAnyOf", value: function value(e, t, n) {
                if (void 0 === t.anyOf) return null;var r = [],
                    i = this.errors.length,
                    a = void 0,
                    u = void 0;this.trackUnknownProperties && (a = this.unknownPropertyPaths, u = this.knownPropertyPaths);var s = !0,
                    l = 0,
                    c = t.anyOf.length;for (l = 0; l < c; l++) {
                  this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});var f = t.anyOf[l],
                      h = this.errors.length,
                      d = this.validateAll(e, f, [], ["anyOf", l], n);if (null === d && h === this.errors.length) {
                    if (this.errors = this.errors.slice(0, i), this.trackUnknownProperties) {
                      for (var p in this.knownPropertyPaths) {
                        u[p] = !0, delete a[p];
                      }for (var v in this.unknownPropertyPaths) {
                        u[v] || (a[v] = !0);
                      }s = !1;continue;
                    }return null;
                  }d && r.push(d.prefixWith(null, "" + l).prefixWith(null, "anyOf"));
                }return this.trackUnknownProperties && (this.unknownPropertyPaths = a, this.knownPropertyPaths = u), s ? (r = r.concat(this.errors.slice(i)), this.errors = this.errors.slice(0, i), this.createError(o.ERROR_CODES.ANY_OF_MISSING, {}, "", "/anyOf", r)) : void 0;
              } }, { key: "validateOneOf", value: function value(e, t, n) {
                if (void 0 === t.oneOf) return null;var r = null,
                    i = [],
                    a = this.errors.length,
                    u = void 0,
                    s = void 0;this.trackUnknownProperties && (u = this.unknownPropertyPaths, s = this.knownPropertyPaths);var l = 0,
                    c = t.oneOf.length;for (l = 0; l < c; l++) {
                  this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});var f = t.oneOf[l],
                      h = this.errors.length,
                      d = this.validateAll(e, f, [], ["oneOf", l], n);if (null === d && h === this.errors.length) {
                    if (null !== r) return this.errors = this.errors.slice(0, a), this.createError(o.ERROR_CODES.ONE_OF_MULTIPLE, { index1: r, index2: l }, "", "/oneOf");if (r = l, this.trackUnknownProperties) {
                      for (var p in this.knownPropertyPaths) {
                        s[p] = !0, delete u[p];
                      }for (var v in this.unknownPropertyPaths) {
                        s[v] || (u[v] = !0);
                      }
                    }
                  } else d && i.push(d);
                }return this.trackUnknownProperties && (this.unknownPropertyPaths = u, this.knownPropertyPaths = s), null === r ? (i = i.concat(this.errors.slice(a)), this.errors = this.errors.slice(0, a), this.createError(o.ERROR_CODES.ONE_OF_MISSING, {}, "", "/oneOf", i)) : (this.errors = this.errors.slice(0, a), null);
              } }, { key: "validateNot", value: function value(e, t, n) {
                if (void 0 === t.not) return null;var r = this.errors.length,
                    i = void 0,
                    a = void 0;this.trackUnknownProperties && (i = this.unknownPropertyPaths, a = this.knownPropertyPaths, this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});var u = this.validateAll(e, t.not, null, null, n),
                    s = this.errors.slice(r);return this.errors = this.errors.slice(0, r), this.trackUnknownProperties && (this.unknownPropertyPaths = i, this.knownPropertyPaths = a), null === u && 0 === s.length ? this.createError(o.ERROR_CODES.NOT_PASSED, {}, "", "/not") : null;
              } }, { key: "validateHypermedia", value: function value(e, t, n) {
                if (!t.links) return null;var r = void 0,
                    i = 0,
                    o = t.links.length;for (i = 0; i < o; i++) {
                  var a = t.links[i];if ("describedby" === a.rel) {
                    var u = new UriTemplate(a.href),
                        s = !0,
                        l = 0,
                        c = u.varNames.length;for (l = 0; l < c; l++) {
                      if (!(u.varNames[l] in e)) {
                        s = !1;break;
                      }
                    }if (s) {
                      var f = { $ref: u.fillFromObject(e) };if (r = this.validateAll(e, f, [], ["links", i], n)) return r;
                    }
                  }
                }
              } }]), e;
          }();t.default = c = c;
        }, function (e, t, n) {
          (function (t) {
            var n,
                r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
              return void 0 === e ? "undefined" : a(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            },
                i = "Expected a function",
                o = "__lodash_hash_undefined__",
                u = 1 / 0,
                s = "[object Function]",
                l = "[object GeneratorFunction]",
                c = "[object Symbol]",
                f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                h = /^\w*$/,
                d = /^\./,
                p = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                v = /\\(\\)?/g,
                y = /^\[object .+?Constructor\]$/,
                b = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                _ = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                m = b || _ || Function("return this")(),
                g = Array.prototype,
                O = Function.prototype,
                E = Object.prototype,
                w = m["__core-js_shared__"],
                k = (n = /[^.]+$/.exec(w && w.keys && w.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                j = O.toString,
                S = E.hasOwnProperty,
                P = E.toString,
                A = RegExp("^" + j.call(S).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                T = m.Symbol,
                C = g.splice,
                M = F(m, "Map"),
                R = F(Object, "create"),
                x = T ? T.prototype : void 0,
                N = x ? x.toString : void 0;function I(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function U(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function L(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function D(e, t) {
              for (var n, r, i = e.length; i--;) {
                if ((n = e[i][0]) === (r = t) || n != n && r != r) return i;
              }return -1;
            }function B(e, t) {
              var n,
                  i,
                  o = e.__data__;return ("string" == (i = void 0 === (n = t) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
            }function F(e, t) {
              var n = function (e, t) {
                return null == e ? void 0 : e[t];
              }(e, t);return function (e) {
                return !(!G(e) || k && k in e) && (V(e) || function (e) {
                  var t = !1;if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "");
                  } catch (e) {}return t;
                }(e) ? A : y).test(function (e) {
                  if (null != e) {
                    try {
                      return j.call(e);
                    } catch (e) {}try {
                      return e + "";
                    } catch (e) {}
                  }return "";
                }(e));
              }(n) ? n : void 0;
            }I.prototype.clear = function () {
              this.__data__ = R ? R(null) : {};
            }, I.prototype.delete = function (e) {
              return this.has(e) && delete this.__data__[e];
            }, I.prototype.get = function (e) {
              var t = this.__data__;if (R) {
                var n = t[e];return n === o ? void 0 : n;
              }return S.call(t, e) ? t[e] : void 0;
            }, I.prototype.has = function (e) {
              var t = this.__data__;return R ? void 0 !== t[e] : S.call(t, e);
            }, I.prototype.set = function (e, t) {
              return this.__data__[e] = R && void 0 === t ? o : t, this;
            }, U.prototype.clear = function () {
              this.__data__ = [];
            }, U.prototype.delete = function (e) {
              var t = this.__data__,
                  n = D(t, e);return !(n < 0 || (n == t.length - 1 ? t.pop() : C.call(t, n, 1), 0));
            }, U.prototype.get = function (e) {
              var t = this.__data__,
                  n = D(t, e);return n < 0 ? void 0 : t[n][1];
            }, U.prototype.has = function (e) {
              return D(this.__data__, e) > -1;
            }, U.prototype.set = function (e, t) {
              var n = this.__data__,
                  r = D(n, e);return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
            }, L.prototype.clear = function () {
              this.__data__ = { hash: new I(), map: new (M || U)(), string: new I() };
            }, L.prototype.delete = function (e) {
              return B(this, e).delete(e);
            }, L.prototype.get = function (e) {
              return B(this, e).get(e);
            }, L.prototype.has = function (e) {
              return B(this, e).has(e);
            }, L.prototype.set = function (e, t) {
              return B(this, e).set(e, t), this;
            };var $ = q(function (e) {
              var t;e = null == (t = e) ? "" : function (e) {
                if ("string" == typeof e) return e;if (W(e)) return N ? N.call(e) : "";var t = e + "";return "0" == t && 1 / e == -u ? "-0" : t;
              }(t);var n = [];return d.test(e) && n.push(""), e.replace(p, function (e, t, r, i) {
                n.push(r ? i.replace(v, "$1") : t || e);
              }), n;
            });function z(e) {
              if ("string" == typeof e || W(e)) return e;var t = e + "";return "0" == t && 1 / e == -u ? "-0" : t;
            }function q(e, t) {
              if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(i);var n = function n() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;if (o.has(i)) return o.get(i);var a = e.apply(this, r);return n.cache = o.set(i, a), a;
              };return n.cache = new (q.Cache || L)(), n;
            }q.Cache = L;var H = Array.isArray;function V(e) {
              var t = G(e) ? P.call(e) : "";return t == s || t == l;
            }function G(e) {
              var t = void 0 === e ? "undefined" : r(e);return !!e && ("object" == t || "function" == t);
            }function W(e) {
              return "symbol" == (void 0 === e ? "undefined" : r(e)) || function (e) {
                return !!e && "object" == (void 0 === e ? "undefined" : r(e));
              }(e) && P.call(e) == c;
            }e.exports = function (e, t, n) {
              var i = -1,
                  o = (t = function (e, t) {
                if (H(e)) return !1;var n = void 0 === e ? "undefined" : r(e);return !("number" != n && "symbol" != n && "boolean" != n && null != e && !W(e)) || h.test(e) || !f.test(e) || null != t && e in Object(t);
              }(t, e) ? [t] : function (e) {
                return H(e) ? e : $(e);
              }(t)).length;for (o || (e = void 0, o = 1); ++i < o;) {
                var a = null == e ? void 0 : e[z(t[i])];void 0 === a && (i = o, a = n), e = V(a) ? a.call(e) : a;
              }return e;
            };
          }).call(t, n(0));
        }, function (e, t, n) {
          (function (e, n) {
            var r,
                i,
                o,
                u = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
              return void 0 === e ? "undefined" : a(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            },
                s = 9007199254740991,
                l = "[object Arguments]",
                c = "[object Function]",
                f = "[object GeneratorFunction]",
                h = "[object Map]",
                d = "[object Set]",
                p = /^\[object .+?Constructor\]$/,
                v = "object" == (void 0 === e ? "undefined" : u(e)) && e && e.Object === Object && e,
                y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                b = v || y || Function("return this")(),
                _ = "object" == u(t) && t && !t.nodeType && t,
                m = _ && "object" == u(n) && n && !n.nodeType && n,
                g = m && m.exports === _,
                O = Function.prototype,
                E = Object.prototype,
                w = b["__core-js_shared__"],
                k = (r = /[^.]+$/.exec(w && w.keys && w.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                j = O.toString,
                S = E.hasOwnProperty,
                P = E.toString,
                A = RegExp("^" + j.call(S).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                T = g ? b.Buffer : void 0,
                C = E.propertyIsEnumerable,
                M = T ? T.isBuffer : void 0,
                R = (i = Object.keys, o = Object, function (e) {
              return i(o(e));
            }),
                x = H(b, "DataView"),
                N = H(b, "Map"),
                I = H(b, "Promise"),
                U = H(b, "Set"),
                L = H(b, "WeakMap"),
                D = !C.call({ valueOf: 1 }, "valueOf"),
                B = G(x),
                F = G(N),
                $ = G(I),
                z = G(U),
                q = G(L);function H(e, t) {
              var n = function (e, t) {
                return null == e ? void 0 : e[t];
              }(e, t);return function (e) {
                return !(!X(e) || k && k in e) && (Y(e) || function (e) {
                  var t = !1;if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "");
                  } catch (e) {}return t;
                }(e) ? A : p).test(G(e));
              }(n) ? n : void 0;
            }var V = function V(e) {
              return P.call(e);
            };function G(e) {
              if (null != e) {
                try {
                  return j.call(e);
                } catch (e) {}try {
                  return e + "";
                } catch (e) {}
              }return "";
            }(x && "[object DataView]" != V(new x(new ArrayBuffer(1))) || N && V(new N()) != h || I && "[object Promise]" != V(I.resolve()) || U && V(new U()) != d || L && "[object WeakMap]" != V(new L())) && (V = function V(e) {
              var t = P.call(e),
                  n = "[object Object]" == t ? e.constructor : void 0,
                  r = n ? G(n) : void 0;if (r) switch (r) {case B:
                  return "[object DataView]";case F:
                  return h;case $:
                  return "[object Promise]";case z:
                  return d;case q:
                  return "[object WeakMap]";}return t;
            });var W = Array.isArray;function J(e) {
              return null != e && function (e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
              }(e.length) && !Y(e);
            }var K = M || function () {
              return !1;
            };function Y(e) {
              var t = X(e) ? P.call(e) : "";return t == c || t == f;
            }function X(e) {
              var t = void 0 === e ? "undefined" : u(e);return !!e && ("object" == t || "function" == t);
            }n.exports = function (e) {
              if (J(e) && (W(e) || "string" == typeof e || "function" == typeof e.splice || K(e) || function (e) {
                return function (e) {
                  return function (e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : u(e));
                  }(e) && J(e);
                }(e) && S.call(e, "callee") && (!C.call(e, "callee") || P.call(e) == l);
              }(e))) return !e.length;var t = V(e);if (t == h || t == d) return !e.size;if (D || function (e) {
                var t = e && e.constructor;return e === ("function" == typeof t && t.prototype || E);
              }(e)) return !R(e).length;for (var n in e) {
                if (S.call(e, n)) return !1;
              }return !0;
            };
          }).call(t, n(0), n(4)(e));
        }, function (e, t, n) {
          (function (t) {
            var n,
                r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
              return void 0 === e ? "undefined" : a(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            },
                i = "Expected a function",
                o = "__lodash_hash_undefined__",
                u = 1 / 0,
                s = 9007199254740991,
                l = "[object Arguments]",
                c = "[object Function]",
                f = "[object GeneratorFunction]",
                h = "[object Symbol]",
                d = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                p = /^\w*$/,
                v = /^\./,
                y = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                b = /\\(\\)?/g,
                _ = /^\[object .+?Constructor\]$/,
                m = /^(?:0|[1-9]\d*)$/,
                g = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                O = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                E = g || O || Function("return this")(),
                w = Array.prototype,
                k = Function.prototype,
                j = Object.prototype,
                S = E["__core-js_shared__"],
                P = (n = /[^.]+$/.exec(S && S.keys && S.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                A = k.toString,
                T = j.hasOwnProperty,
                C = j.toString,
                M = RegExp("^" + A.call(T).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                R = E.Symbol,
                x = j.propertyIsEnumerable,
                N = w.splice,
                I = V(E, "Map"),
                U = V(Object, "create"),
                L = R ? R.prototype : void 0,
                D = L ? L.toString : void 0;function B(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function F(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function $(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function z(e, t) {
              for (var n, r, i = e.length; i--;) {
                if ((n = e[i][0]) === (r = t) || n != n && r != r) return i;
              }return -1;
            }function q(e, t) {
              return null != e && T.call(e, t);
            }function H(e, t) {
              var n,
                  i,
                  o = e.__data__;return ("string" == (i = void 0 === (n = t) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
            }function V(e, t) {
              var n = function (e, t) {
                return null == e ? void 0 : e[t];
              }(e, t);return function (e) {
                return !(!Q(e) || P && P in e) && (Y(e) || function (e) {
                  var t = !1;if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "");
                  } catch (e) {}return t;
                }(e) ? M : _).test(function (e) {
                  if (null != e) {
                    try {
                      return A.call(e);
                    } catch (e) {}try {
                      return e + "";
                    } catch (e) {}
                  }return "";
                }(e));
              }(n) ? n : void 0;
            }B.prototype.clear = function () {
              this.__data__ = U ? U(null) : {};
            }, B.prototype.delete = function (e) {
              return this.has(e) && delete this.__data__[e];
            }, B.prototype.get = function (e) {
              var t = this.__data__;if (U) {
                var n = t[e];return n === o ? void 0 : n;
              }return T.call(t, e) ? t[e] : void 0;
            }, B.prototype.has = function (e) {
              var t = this.__data__;return U ? void 0 !== t[e] : T.call(t, e);
            }, B.prototype.set = function (e, t) {
              return this.__data__[e] = U && void 0 === t ? o : t, this;
            }, F.prototype.clear = function () {
              this.__data__ = [];
            }, F.prototype.delete = function (e) {
              var t = this.__data__,
                  n = z(t, e);return !(n < 0 || (n == t.length - 1 ? t.pop() : N.call(t, n, 1), 0));
            }, F.prototype.get = function (e) {
              var t = this.__data__,
                  n = z(t, e);return n < 0 ? void 0 : t[n][1];
            }, F.prototype.has = function (e) {
              return z(this.__data__, e) > -1;
            }, F.prototype.set = function (e, t) {
              var n = this.__data__,
                  r = z(n, e);return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
            }, $.prototype.clear = function () {
              this.__data__ = { hash: new B(), map: new (I || F)(), string: new B() };
            }, $.prototype.delete = function (e) {
              return H(this, e).delete(e);
            }, $.prototype.get = function (e) {
              return H(this, e).get(e);
            }, $.prototype.has = function (e) {
              return H(this, e).has(e);
            }, $.prototype.set = function (e, t) {
              return H(this, e).set(e, t), this;
            };var G = J(function (e) {
              var t;e = null == (t = e) ? "" : function (e) {
                if ("string" == typeof e) return e;if (ee(e)) return D ? D.call(e) : "";var t = e + "";return "0" == t && 1 / e == -u ? "-0" : t;
              }(t);var n = [];return v.test(e) && n.push(""), e.replace(y, function (e, t, r, i) {
                n.push(r ? i.replace(b, "$1") : t || e);
              }), n;
            });function W(e) {
              if ("string" == typeof e || ee(e)) return e;var t = e + "";return "0" == t && 1 / e == -u ? "-0" : t;
            }function J(e, t) {
              if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(i);var n = function n() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;if (o.has(i)) return o.get(i);var a = e.apply(this, r);return n.cache = o.set(i, a), a;
              };return n.cache = new (J.Cache || $)(), n;
            }J.Cache = $;var K = Array.isArray;function Y(e) {
              var t = Q(e) ? C.call(e) : "";return t == c || t == f;
            }function X(e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
            }function Q(e) {
              var t = void 0 === e ? "undefined" : r(e);return !!e && ("object" == t || "function" == t);
            }function Z(e) {
              return !!e && "object" == (void 0 === e ? "undefined" : r(e));
            }function ee(e) {
              return "symbol" == (void 0 === e ? "undefined" : r(e)) || Z(e) && C.call(e) == h;
            }e.exports = function (e, t) {
              return null != e && function (e, t, n) {
                for (var i, o, a = -1, u = (t = function (e, t) {
                  if (K(e)) return !1;var n = void 0 === e ? "undefined" : r(e);return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ee(e)) || p.test(e) || !d.test(e) || null != t && (e in Object(t));
                }(t, e) ? [t] : K(i = t) ? i : G(i)).length; ++a < u;) {
                  var c = W(t[a]);if (!(o = null != e && n(e, c))) break;e = e[c];
                }return o || !!(u = e ? e.length : 0) && X(u) && function (e, t) {
                  return !!(t = null == t ? s : t) && ("number" == typeof e || m.test(e)) && e > -1 && e % 1 == 0 && e < t;
                }(c, u) && (K(e) || function (e) {
                  return function (e) {
                    return Z(e) && function (e) {
                      return null != e && X(e.length) && !Y(e);
                    }(e);
                  }(e) && T.call(e, "callee") && (!x.call(e, "callee") || C.call(e) == l);
                }(e));
              }(e, t, q);
            };
          }).call(t, n(0));
        }, function (e, t, n) {
          (function (e, n) {
            var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
              return void 0 === e ? "undefined" : a(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            },
                i = "__lodash_hash_undefined__",
                o = 1,
                u = 2,
                s = 9007199254740991,
                l = "[object Arguments]",
                c = "[object Array]",
                f = "[object AsyncFunction]",
                h = "[object Boolean]",
                d = "[object Date]",
                p = "[object Error]",
                v = "[object Function]",
                y = "[object GeneratorFunction]",
                b = "[object Map]",
                _ = "[object Number]",
                m = "[object Null]",
                g = "[object Object]",
                O = "[object Proxy]",
                E = "[object RegExp]",
                w = "[object Set]",
                k = "[object String]",
                j = "[object Symbol]",
                S = "[object Undefined]",
                P = "[object ArrayBuffer]",
                A = "[object DataView]",
                T = /^\[object .+?Constructor\]$/,
                C = /^(?:0|[1-9]\d*)$/,
                M = {};M["[object Float32Array]"] = M["[object Float64Array]"] = M["[object Int8Array]"] = M["[object Int16Array]"] = M["[object Int32Array]"] = M["[object Uint8Array]"] = M["[object Uint8ClampedArray]"] = M["[object Uint16Array]"] = M["[object Uint32Array]"] = !0, M[l] = M[c] = M[P] = M[h] = M[A] = M[d] = M[p] = M[v] = M[b] = M[_] = M[g] = M[E] = M[w] = M[k] = M["[object WeakMap]"] = !1;var R = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e,
                x = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                N = R || x || Function("return this")(),
                I = "object" == r(t) && t && !t.nodeType && t,
                U = I && "object" == r(n) && n && !n.nodeType && n,
                L = U && U.exports === I,
                D = L && R.process,
                B = function () {
              try {
                return D && D.binding && D.binding("util");
              } catch (e) {}
            }(),
                F = B && B.isTypedArray;function $(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) {
                if (t(e[n], n, e)) return !0;
              }return !1;
            }function z(e) {
              var t = -1,
                  n = Array(e.size);return e.forEach(function (e, r) {
                n[++t] = [r, e];
              }), n;
            }function q(e) {
              var t = -1,
                  n = Array(e.size);return e.forEach(function (e) {
                n[++t] = e;
              }), n;
            }var H,
                V,
                G,
                W = Array.prototype,
                J = Function.prototype,
                K = Object.prototype,
                Y = N["__core-js_shared__"],
                X = J.toString,
                Q = K.hasOwnProperty,
                Z = (H = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + H : "",
                ee = K.toString,
                te = RegExp("^" + X.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                ne = L ? N.Buffer : void 0,
                re = N.Symbol,
                ie = N.Uint8Array,
                oe = K.propertyIsEnumerable,
                ae = W.splice,
                ue = re ? re.toStringTag : void 0,
                se = Object.getOwnPropertySymbols,
                le = ne ? ne.isBuffer : void 0,
                ce = (V = Object.keys, G = Object, function (e) {
              return V(G(e));
            }),
                fe = Ue(N, "DataView"),
                he = Ue(N, "Map"),
                de = Ue(N, "Promise"),
                pe = Ue(N, "Set"),
                ve = Ue(N, "WeakMap"),
                ye = Ue(Object, "create"),
                be = Fe(fe),
                _e = Fe(he),
                me = Fe(de),
                ge = Fe(pe),
                Oe = Fe(ve),
                Ee = re ? re.prototype : void 0,
                we = Ee ? Ee.valueOf : void 0;function ke(e) {
              var t = -1,
                  n = null == e ? 0 : e.length;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function je(e) {
              var t = -1,
                  n = null == e ? 0 : e.length;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function Se(e) {
              var t = -1,
                  n = null == e ? 0 : e.length;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function Pe(e) {
              var t = -1,
                  n = null == e ? 0 : e.length;for (this.__data__ = new Se(); ++t < n;) {
                this.add(e[t]);
              }
            }function Ae(e) {
              var t = this.__data__ = new je(e);this.size = t.size;
            }function Te(e, t) {
              for (var n = e.length; n--;) {
                if ($e(e[n][0], t)) return n;
              }return -1;
            }function Ce(e) {
              return null == e ? void 0 === e ? S : m : ue && ue in Object(e) ? function (e) {
                var t = Q.call(e, ue),
                    n = e[ue];try {
                  e[ue] = void 0;var r = !0;
                } catch (e) {}var i = ee.call(e);return r && (t ? e[ue] = n : delete e[ue]), i;
              }(e) : function (e) {
                return ee.call(e);
              }(e);
            }function Me(e) {
              return Je(e) && Ce(e) == l;
            }function Re(e, t, n, r, i) {
              return e === t || (null == e || null == t || !Je(e) && !Je(t) ? e != e && t != t : function (e, t, n, r, i, a) {
                var s = qe(e),
                    f = qe(t),
                    v = s ? c : De(e),
                    y = f ? c : De(t),
                    m = (v = v == l ? g : v) == g,
                    O = (y = y == l ? g : y) == g,
                    S = v == y;if (S && He(e)) {
                  if (!He(t)) return !1;s = !0, m = !1;
                }if (S && !m) return a || (a = new Ae()), s || Ke(e) ? xe(e, t, n, r, i, a) : function (e, t, n, r, i, a, s) {
                  switch (n) {case A:
                      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;e = e.buffer, t = t.buffer;case P:
                      return !(e.byteLength != t.byteLength || !a(new ie(e), new ie(t)));case h:case d:case _:
                      return $e(+e, +t);case p:
                      return e.name == t.name && e.message == t.message;case E:case k:
                      return e == t + "";case b:
                      var l = z;case w:
                      var c = r & o;if (l || (l = q), e.size != t.size && !c) return !1;var f = s.get(e);if (f) return f == t;r |= u, s.set(e, t);var v = xe(l(e), l(t), r, i, a, s);return s.delete(e), v;case j:
                      if (we) return we.call(e) == we.call(t);}return !1;
                }(e, t, v, n, r, i, a);if (!(n & o)) {
                  var T = m && Q.call(e, "__wrapped__"),
                      C = O && Q.call(t, "__wrapped__");if (T || C) {
                    var M = T ? e.value() : e,
                        R = C ? t.value() : t;return a || (a = new Ae()), i(M, R, n, r, a);
                  }
                }return !!S && (a || (a = new Ae()), function (e, t, n, r, i, a) {
                  var u = n & o,
                      s = Ne(e),
                      l = s.length;if (l != Ne(t).length && !u) return !1;for (var c = l; c--;) {
                    var f = s[c];if (!(u ? f in t : Q.call(t, f))) return !1;
                  }var h = a.get(e);if (h && a.get(t)) return h == t;var d = !0;a.set(e, t), a.set(t, e);for (var p = u; ++c < l;) {
                    var v = e[f = s[c]],
                        y = t[f];if (r) var b = u ? r(y, v, f, t, e, a) : r(v, y, f, e, t, a);if (!(void 0 === b ? v === y || i(v, y, n, r, a) : b)) {
                      d = !1;break;
                    }p || (p = "constructor" == f);
                  }if (d && !p) {
                    var _ = e.constructor,
                        m = t.constructor;_ != m && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof m && m instanceof m) && (d = !1);
                  }return a.delete(e), a.delete(t), d;
                }(e, t, n, r, i, a));
              }(e, t, n, r, Re, i));
            }function xe(e, t, n, r, i, a) {
              var s = n & o,
                  l = e.length,
                  c = t.length;if (l != c && !(s && c > l)) return !1;var f = a.get(e);if (f && a.get(t)) return f == t;var h = -1,
                  d = !0,
                  p = n & u ? new Pe() : void 0;for (a.set(e, t), a.set(t, e); ++h < l;) {
                var v = e[h],
                    y = t[h];if (r) var b = s ? r(y, v, h, t, e, a) : r(v, y, h, e, t, a);if (void 0 !== b) {
                  if (b) continue;d = !1;break;
                }if (p) {
                  if (!$(t, function (e, t) {
                    if (o = t, !p.has(o) && (v === e || i(v, e, n, r, a))) return p.push(t);var o;
                  })) {
                    d = !1;break;
                  }
                } else if (v !== y && !i(v, y, n, r, a)) {
                  d = !1;break;
                }
              }return a.delete(e), a.delete(t), d;
            }function Ne(e) {
              return function (e, t, n) {
                var r = Ye(e);return qe(e) ? r : function (e, t) {
                  for (var n = -1, r = t.length, i = e.length; ++n < r;) {
                    e[i + n] = t[n];
                  }return e;
                }(r, n(e));
              }(e, 0, Le);
            }function Ie(e, t) {
              var n,
                  i,
                  o = e.__data__;return ("string" == (i = void 0 === (n = t) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
            }function Ue(e, t) {
              var n = function (e, t) {
                return null == e ? void 0 : e[t];
              }(e, t);return function (e) {
                return !(!We(e) || Z && Z in e) && (Ve(e) ? te : T).test(Fe(e));
              }(n) ? n : void 0;
            }ke.prototype.clear = function () {
              this.__data__ = ye ? ye(null) : {}, this.size = 0;
            }, ke.prototype.delete = function (e) {
              var t = this.has(e) && delete this.__data__[e];return this.size -= t ? 1 : 0, t;
            }, ke.prototype.get = function (e) {
              var t = this.__data__;if (ye) {
                var n = t[e];return n === i ? void 0 : n;
              }return Q.call(t, e) ? t[e] : void 0;
            }, ke.prototype.has = function (e) {
              var t = this.__data__;return ye ? void 0 !== t[e] : Q.call(t, e);
            }, ke.prototype.set = function (e, t) {
              var n = this.__data__;return this.size += this.has(e) ? 0 : 1, n[e] = ye && void 0 === t ? i : t, this;
            }, je.prototype.clear = function () {
              this.__data__ = [], this.size = 0;
            }, je.prototype.delete = function (e) {
              var t = this.__data__,
                  n = Te(t, e);return !(n < 0 || (n == t.length - 1 ? t.pop() : ae.call(t, n, 1), --this.size, 0));
            }, je.prototype.get = function (e) {
              var t = this.__data__,
                  n = Te(t, e);return n < 0 ? void 0 : t[n][1];
            }, je.prototype.has = function (e) {
              return Te(this.__data__, e) > -1;
            }, je.prototype.set = function (e, t) {
              var n = this.__data__,
                  r = Te(n, e);return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
            }, Se.prototype.clear = function () {
              this.size = 0, this.__data__ = { hash: new ke(), map: new (he || je)(), string: new ke() };
            }, Se.prototype.delete = function (e) {
              var t = Ie(this, e).delete(e);return this.size -= t ? 1 : 0, t;
            }, Se.prototype.get = function (e) {
              return Ie(this, e).get(e);
            }, Se.prototype.has = function (e) {
              return Ie(this, e).has(e);
            }, Se.prototype.set = function (e, t) {
              var n = Ie(this, e),
                  r = n.size;return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
            }, Pe.prototype.add = Pe.prototype.push = function (e) {
              return this.__data__.set(e, i), this;
            }, Pe.prototype.has = function (e) {
              return this.__data__.has(e);
            }, Ae.prototype.clear = function () {
              this.__data__ = new je(), this.size = 0;
            }, Ae.prototype.delete = function (e) {
              var t = this.__data__,
                  n = t.delete(e);return this.size = t.size, n;
            }, Ae.prototype.get = function (e) {
              return this.__data__.get(e);
            }, Ae.prototype.has = function (e) {
              return this.__data__.has(e);
            }, Ae.prototype.set = function (e, t) {
              var n = this.__data__;if (n instanceof je) {
                var r = n.__data__;if (!he || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;n = this.__data__ = new Se(r);
              }return n.set(e, t), this.size = n.size, this;
            };var Le = se ? function (e) {
              return null == e ? [] : (e = Object(e), function (e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                  var a = e[n];t(a) && (o[i++] = a);
                }return o;
              }(se(e), function (t) {
                return oe.call(e, t);
              }));
            } : function () {
              return [];
            },
                De = Ce;function Be(e, t) {
              return !!(t = null == t ? s : t) && ("number" == typeof e || C.test(e)) && e > -1 && e % 1 == 0 && e < t;
            }function Fe(e) {
              if (null != e) {
                try {
                  return X.call(e);
                } catch (e) {}try {
                  return e + "";
                } catch (e) {}
              }return "";
            }function $e(e, t) {
              return e === t || e != e && t != t;
            }(fe && De(new fe(new ArrayBuffer(1))) != A || he && De(new he()) != b || de && "[object Promise]" != De(de.resolve()) || pe && De(new pe()) != w || ve && "[object WeakMap]" != De(new ve())) && (De = function De(e) {
              var t = Ce(e),
                  n = t == g ? e.constructor : void 0,
                  r = n ? Fe(n) : "";if (r) switch (r) {case be:
                  return A;case _e:
                  return b;case me:
                  return "[object Promise]";case ge:
                  return w;case Oe:
                  return "[object WeakMap]";}return t;
            });var ze = Me(function () {
              return arguments;
            }()) ? Me : function (e) {
              return Je(e) && Q.call(e, "callee") && !oe.call(e, "callee");
            },
                qe = Array.isArray,
                He = le || function () {
              return !1;
            };function Ve(e) {
              if (!We(e)) return !1;var t = Ce(e);return t == v || t == y || t == f || t == O;
            }function Ge(e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
            }function We(e) {
              var t = void 0 === e ? "undefined" : r(e);return null != e && ("object" == t || "function" == t);
            }function Je(e) {
              return null != e && "object" == (void 0 === e ? "undefined" : r(e));
            }var Ke = F ? function (e) {
              return function (t) {
                return e(t);
              };
            }(F) : function (e) {
              return Je(e) && Ge(e.length) && !!M[Ce(e)];
            };function Ye(e) {
              return null != (t = e) && Ge(t.length) && !Ve(t) ? function (e, t) {
                var n = qe(e),
                    r = !n && ze(e),
                    i = !n && !r && He(e),
                    o = !n && !r && !i && Ke(e),
                    a = n || r || i || o,
                    u = a ? function (e, t) {
                  for (var n = -1, r = Array(e); ++n < e;) {
                    r[n] = t(n);
                  }return r;
                }(e.length, String) : [],
                    s = u.length;for (var l in e) {
                  !t && !Q.call(e, l) || a && ("length" == l || i && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Be(l, s)) || u.push(l);
                }return u;
              }(e) : function (e) {
                if (n = (t = e) && t.constructor, t !== ("function" == typeof n && n.prototype || K)) return ce(e);var t,
                    n,
                    r = [];for (var i in Object(e)) {
                  Q.call(e, i) && "constructor" != i && r.push(i);
                }return r;
              }(e);var t;
            }n.exports = function (e, t) {
              return Re(e, t);
            };
          }).call(t, n(0), n(4)(e));
        }, function (e, t, n) {
          var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : a(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
          },
              i = 9007199254740991,
              o = "[object Arguments]",
              u = "[object Function]",
              s = "[object GeneratorFunction]",
              l = /^(?:0|[1-9]\d*)$/;function c(e, t, n) {
            switch (n.length) {case 0:
                return e.call(t);case 1:
                return e.call(t, n[0]);case 2:
                return e.call(t, n[0], n[1]);case 3:
                return e.call(t, n[0], n[1], n[2]);}return e.apply(t, n);
          }var f = Object.prototype,
              h = f.hasOwnProperty,
              d = f.toString,
              p = f.propertyIsEnumerable,
              v = Math.max;function y(e, t) {
            var n = E(e) || function (e) {
              return function (e) {
                return function (e) {
                  return !!e && "object" == (void 0 === e ? "undefined" : r(e));
                }(e) && w(e);
              }(e) && h.call(e, "callee") && (!p.call(e, "callee") || d.call(e) == o);
            }(e) ? function (e, t) {
              for (var n = -1, r = Array(e); ++n < e;) {
                r[n] = t(n);
              }return r;
            }(e.length, String) : [],
                i = n.length,
                a = !!i;for (var u in e) {
              !t && !h.call(e, u) || a && ("length" == u || g(u, i)) || n.push(u);
            }return n;
          }function b(e, t, n, r) {
            return void 0 === e || O(e, f[n]) && !h.call(r, n) ? t : e;
          }function _(e, t, n) {
            var r = e[t];h.call(e, t) && O(r, n) && (void 0 !== n || t in e) || (e[t] = n);
          }function m(e, t) {
            return t = v(void 0 === t ? e.length - 1 : t, 0), function () {
              for (var n = arguments, r = -1, i = v(n.length - t, 0), o = Array(i); ++r < i;) {
                o[r] = n[t + r];
              }r = -1;for (var a = Array(t + 1); ++r < t;) {
                a[r] = n[r];
              }return a[t] = o, c(e, this, a);
            };
          }function g(e, t) {
            return !!(t = null == t ? i : t) && ("number" == typeof e || l.test(e)) && e > -1 && e % 1 == 0 && e < t;
          }function O(e, t) {
            return e === t || e != e && t != t;
          }var E = Array.isArray;function w(e) {
            return null != e && function (e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i;
            }(e.length) && !function (e) {
              var t = k(e) ? d.call(e) : "";return t == u || t == s;
            }(e);
          }function k(e) {
            var t = void 0 === e ? "undefined" : r(e);return !!e && ("object" == t || "function" == t);
          }var j,
              S = (j = function j(e, t, n, r) {
            !function (e, t, n, r) {
              n || (n = {});for (var i = -1, o = t.length; ++i < o;) {
                var a = t[i],
                    u = r ? r(n[a], e[a], a, n, e) : void 0;_(n, a, void 0 === u ? e[a] : u);
              }
            }(t, function (e) {
              return w(e) ? y(e, !0) : function (e) {
                if (!k(e)) return function (e) {
                  var t = [];if (null != e) for (var n in Object(e)) {
                    t.push(n);
                  }return t;
                }(e);var t,
                    n,
                    r = (n = (t = e) && t.constructor, t === ("function" == typeof n && n.prototype || f)),
                    i = [];for (var o in e) {
                  ("constructor" != o || !r && h.call(e, o)) && i.push(o);
                }return i;
              }(e);
            }(t), e, r);
          }, m(function (e, t) {
            var n = -1,
                i = t.length,
                o = i > 1 ? t[i - 1] : void 0,
                a = i > 2 ? t[2] : void 0;for (o = j.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && function (e, t, n) {
              if (!k(n)) return !1;var i = void 0 === t ? "undefined" : r(t);return !!("number" == i ? w(n) && g(t, n.length) : "string" == i && (t in n)) && O(n[t], e);
            }(t[0], t[1], a) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
              var u = t[n];u && j(e, u, 0, o);
            }return e;
          })),
              P = m(function (e) {
            return e.push(void 0, b), c(S, void 0, e);
          });e.exports = P;
        }, function (e, t, n) {
          (function (e, n) {
            var r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
              return void 0 === e ? "undefined" : a(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            },
                i = "Expected a function",
                o = "__lodash_hash_undefined__",
                u = 1,
                s = 2,
                l = 1 / 0,
                c = 9007199254740991,
                f = "[object Arguments]",
                h = "[object Array]",
                d = "[object Boolean]",
                p = "[object Date]",
                v = "[object Error]",
                y = "[object Function]",
                b = "[object GeneratorFunction]",
                _ = "[object Map]",
                m = "[object Number]",
                g = "[object Object]",
                O = "[object RegExp]",
                E = "[object Set]",
                w = "[object String]",
                k = "[object Symbol]",
                j = "[object WeakMap]",
                S = "[object ArrayBuffer]",
                P = "[object DataView]",
                A = "[object Float32Array]",
                T = "[object Float64Array]",
                C = "[object Int8Array]",
                M = "[object Int16Array]",
                R = "[object Int32Array]",
                x = "[object Uint8Array]",
                N = "[object Uint8ClampedArray]",
                I = "[object Uint16Array]",
                U = "[object Uint32Array]",
                L = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                D = /^\w*$/,
                B = /^\./,
                F = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                $ = /\\(\\)?/g,
                z = /\w*$/,
                q = /^\[object .+?Constructor\]$/,
                H = /^(?:0|[1-9]\d*)$/,
                V = {};V[A] = V[T] = V[C] = V[M] = V[R] = V[x] = V[N] = V[I] = V[U] = !0, V[f] = V[h] = V[S] = V[d] = V[P] = V[p] = V[v] = V[y] = V[_] = V[m] = V[g] = V[O] = V[E] = V[w] = V[j] = !1;var G = {};G[f] = G[h] = G[S] = G[P] = G[d] = G[p] = G[A] = G[T] = G[C] = G[M] = G[R] = G[_] = G[m] = G[g] = G[O] = G[E] = G[w] = G[k] = G[x] = G[N] = G[I] = G[U] = !0, G[v] = G[y] = G[j] = !1;var W = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e,
                J = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                K = W || J || Function("return this")(),
                Y = "object" == r(t) && t && !t.nodeType && t,
                X = Y && "object" == r(n) && n && !n.nodeType && n,
                Q = X && X.exports === Y,
                Z = Q && W.process,
                ee = function () {
              try {
                return Z && Z.binding("util");
              } catch (e) {}
            }(),
                te = ee && ee.isTypedArray;function ne(e, t) {
              return e.set(t[0], t[1]), e;
            }function re(e, t) {
              return e.add(t), e;
            }function ie(e, t, n, r) {
              var i = -1,
                  o = e ? e.length : 0;for (r && o && (n = e[++i]); ++i < o;) {
                n = t(n, e[i], i, e);
              }return n;
            }function oe(e, t) {
              for (var n = -1, r = e ? e.length : 0; ++n < r;) {
                if (t(e[n], n, e)) return !0;
              }return !1;
            }function ae(e) {
              var t = !1;if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "");
              } catch (e) {}return t;
            }function ue(e) {
              var t = -1,
                  n = Array(e.size);return e.forEach(function (e, r) {
                n[++t] = [r, e];
              }), n;
            }function se(e, t) {
              return function (n) {
                return e(t(n));
              };
            }function le(e) {
              var t = -1,
                  n = Array(e.size);return e.forEach(function (e) {
                n[++t] = e;
              }), n;
            }var ce,
                fe = Array.prototype,
                he = Function.prototype,
                de = Object.prototype,
                pe = K["__core-js_shared__"],
                ve = (ce = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ce : "",
                ye = he.toString,
                be = de.hasOwnProperty,
                _e = de.toString,
                me = RegExp("^" + ye.call(be).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                ge = Q ? K.Buffer : void 0,
                Oe = K.Symbol,
                Ee = K.Uint8Array,
                we = se(Object.getPrototypeOf, Object),
                ke = Object.create,
                je = de.propertyIsEnumerable,
                Se = fe.splice,
                Pe = Object.getOwnPropertySymbols,
                Ae = ge ? ge.isBuffer : void 0,
                Te = se(Object.keys, Object),
                Ce = at(K, "DataView"),
                Me = at(K, "Map"),
                Re = at(K, "Promise"),
                xe = at(K, "Set"),
                Ne = at(K, "WeakMap"),
                Ie = at(Object, "create"),
                Ue = yt(Ce),
                Le = yt(Me),
                De = yt(Re),
                Be = yt(xe),
                Fe = yt(Ne),
                $e = Oe ? Oe.prototype : void 0,
                ze = $e ? $e.valueOf : void 0,
                qe = $e ? $e.toString : void 0;function He(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function Ve(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function Ge(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.clear(); ++t < n;) {
                var r = e[t];this.set(r[0], r[1]);
              }
            }function We(e) {
              var t = -1,
                  n = e ? e.length : 0;for (this.__data__ = new Ge(); ++t < n;) {
                this.add(e[t]);
              }
            }function Je(e) {
              this.__data__ = new Ve(e);
            }function Ke(e, t, n) {
              var r = e[t];be.call(e, t) && _t(r, n) && (void 0 !== n || t in e) || (e[t] = n);
            }function Ye(e, t) {
              for (var n = e.length; n--;) {
                if (_t(e[n][0], t)) return n;
              }return -1;
            }function Xe(e, t, n, r, i, o, a) {
              var u;if (r && (u = o ? r(e, i, o, a) : r(e)), void 0 !== u) return u;if (!jt(e)) return e;var s = gt(e);if (s) {
                if (u = function (e) {
                  var t = e.length,
                      n = e.constructor(t);return t && "string" == typeof e[0] && be.call(e, "index") && (n.index = e.index, n.input = e.input), n;
                }(e), !t) return function (e, t) {
                  var n = -1,
                      r = e.length;for (t || (t = Array(r)); ++n < r;) {
                    t[n] = e[n];
                  }return t;
                }(e, u);
              } else {
                var l = st(e),
                    c = l == y || l == b;if (Et(e)) return function (e, t) {
                  if (t) return e.slice();var n = new e.constructor(e.length);return e.copy(n), n;
                }(e, t);if (l == g || l == f || c && !o) {
                  if (ae(e)) return o ? e : {};if (u = function (e) {
                    return "function" != typeof e.constructor || ft(e) ? {} : jt(t = we(e)) ? ke(t) : {};var t;
                  }(c ? {} : e), !t) return function (e, t) {
                    return rt(e, ut(e), t);
                  }(e, function (e, t) {
                    return e && rt(t, Ct(t), e);
                  }(u, e));
                } else {
                  if (!G[l]) return o ? e : {};u = function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        u = e.constructor;switch (t) {case S:
                        return nt(e);case d:case p:
                        return new u(+e);case P:
                        return function (e, t) {
                          var n = r ? nt(e.buffer) : e.buffer;return new e.constructor(n, e.byteOffset, e.byteLength);
                        }(e);case A:case T:case C:case M:case R:case x:case N:case I:case U:
                        return function (e, t) {
                          var n = r ? nt(e.buffer) : e.buffer;return new e.constructor(n, e.byteOffset, e.length);
                        }(e);case _:
                        return function (e, t, n) {
                          return ie(r ? n(ue(e), !0) : ue(e), ne, new e.constructor());
                        }(e, 0, n);case m:case w:
                        return new u(e);case O:
                        return (a = new (o = e).constructor(o.source, z.exec(o))).lastIndex = o.lastIndex, a;case E:
                        return function (e, t, n) {
                          return ie(r ? n(le(e), !0) : le(e), re, new e.constructor());
                        }(e, 0, n);case k:
                        return i = e, ze ? Object(ze.call(i)) : {};}
                  }(e, l, Xe, t);
                }
              }a || (a = new Je());var h = a.get(e);if (h) return h;if (a.set(e, u), !s) var v = n ? function (e) {
                return function (e, t, n) {
                  var r = Ct(e);return gt(e) ? r : function (e, t) {
                    for (var n = -1, r = t.length, i = e.length; ++n < r;) {
                      e[i + n] = t[n];
                    }return e;
                  }(r, n(e));
                }(e, 0, ut);
              }(e) : Ct(e);return function (e, t) {
                for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n);) {}
              }(v || e, function (i, o) {
                v && (i = e[o = i]), Ke(u, o, Xe(i, t, n, r, o, e, a));
              }), u;
            }function Qe(e, t) {
              for (var n = 0, r = (t = ct(t, e) ? [t] : tt(t)).length; null != e && n < r;) {
                e = e[vt(t[n++])];
              }return n && n == r ? e : void 0;
            }function Ze(e, t) {
              return null != e && t in Object(e);
            }function et(e, t, n, r, i) {
              return e === t || (null == e || null == t || !jt(e) && !St(t) ? e != e && t != t : function (e, t, n, r, i, o) {
                var a = gt(e),
                    l = gt(t),
                    c = h,
                    y = h;a || (c = (c = st(e)) == f ? g : c), l || (y = (y = st(t)) == f ? g : y);var b = c == g && !ae(e),
                    j = y == g && !ae(t),
                    A = c == y;if (A && !b) return o || (o = new Je()), a || Tt(e) ? it(e, t, n, r, i, o) : function (e, t, n, r, i, o, a) {
                  switch (n) {case P:
                      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;e = e.buffer, t = t.buffer;case S:
                      return !(e.byteLength != t.byteLength || !r(new Ee(e), new Ee(t)));case d:case p:case m:
                      return _t(+e, +t);case v:
                      return e.name == t.name && e.message == t.message;case O:case w:
                      return e == t + "";case _:
                      var l = ue;case E:
                      var c = o & s;if (l || (l = le), e.size != t.size && !c) return !1;var f = a.get(e);if (f) return f == t;o |= u, a.set(e, t);var h = it(l(e), l(t), r, i, o, a);return a.delete(e), h;case k:
                      if (ze) return ze.call(e) == ze.call(t);}return !1;
                }(e, t, c, n, r, i, o);if (!(i & s)) {
                  var T = b && be.call(e, "__wrapped__"),
                      C = j && be.call(t, "__wrapped__");if (T || C) {
                    var M = T ? e.value() : e,
                        R = C ? t.value() : t;return o || (o = new Je()), n(M, R, r, i, o);
                  }
                }return !!A && (o || (o = new Je()), function (e, t, n, r, i, o) {
                  var a = i & s,
                      u = Ct(e),
                      l = u.length;if (l != Ct(t).length && !a) return !1;for (var c = l; c--;) {
                    var f = u[c];if (!(a ? f in t : be.call(t, f))) return !1;
                  }var h = o.get(e);if (h && o.get(t)) return h == t;var d = !0;o.set(e, t), o.set(t, e);for (var p = a; ++c < l;) {
                    var v = e[f = u[c]],
                        y = t[f];if (r) var b = a ? r(y, v, f, t, e, o) : r(v, y, f, e, t, o);if (!(void 0 === b ? v === y || n(v, y, r, i, o) : b)) {
                      d = !1;break;
                    }p || (p = "constructor" == f);
                  }if (d && !p) {
                    var _ = e.constructor,
                        m = t.constructor;_ != m && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof m && m instanceof m) && (d = !1);
                  }return o.delete(e), o.delete(t), d;
                }(e, t, n, r, i, o));
              }(e, t, et, n, r, i));
            }function tt(e) {
              return gt(e) ? e : pt(e);
            }function nt(e) {
              var t = new e.constructor(e.byteLength);return new Ee(t).set(new Ee(e)), t;
            }function rt(e, t, n, r) {
              n || (n = {});for (var i = -1, o = t.length; ++i < o;) {
                var a = t[i],
                    u = r ? r(n[a], e[a], a, n, e) : void 0;Ke(n, a, void 0 === u ? e[a] : u);
              }return n;
            }function it(e, t, n, r, i, o) {
              var a = i & s,
                  l = e.length,
                  c = t.length;if (l != c && !(a && c > l)) return !1;var f = o.get(e);if (f && o.get(t)) return f == t;var h = -1,
                  d = !0,
                  p = i & u ? new We() : void 0;for (o.set(e, t), o.set(t, e); ++h < l;) {
                var v = e[h],
                    y = t[h];if (r) var b = a ? r(y, v, h, t, e, o) : r(v, y, h, e, t, o);if (void 0 !== b) {
                  if (b) continue;d = !1;break;
                }if (p) {
                  if (!oe(t, function (e, t) {
                    if (!p.has(t) && (v === e || n(v, e, r, i, o))) return p.add(t);
                  })) {
                    d = !1;break;
                  }
                } else if (v !== y && !n(v, y, r, i, o)) {
                  d = !1;break;
                }
              }return o.delete(e), o.delete(t), d;
            }function ot(e, t) {
              var n,
                  i,
                  o = e.__data__;return ("string" == (i = void 0 === (n = t) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
            }function at(e, t) {
              var n = function (e, t) {
                return null == e ? void 0 : e[t];
              }(e, t);return function (e) {
                return !(!jt(e) || ve && ve in e) && (wt(e) || ae(e) ? me : q).test(yt(e));
              }(n) ? n : void 0;
            }He.prototype.clear = function () {
              this.__data__ = Ie ? Ie(null) : {};
            }, He.prototype.delete = function (e) {
              return this.has(e) && delete this.__data__[e];
            }, He.prototype.get = function (e) {
              var t = this.__data__;if (Ie) {
                var n = t[e];return n === o ? void 0 : n;
              }return be.call(t, e) ? t[e] : void 0;
            }, He.prototype.has = function (e) {
              var t = this.__data__;return Ie ? void 0 !== t[e] : be.call(t, e);
            }, He.prototype.set = function (e, t) {
              return this.__data__[e] = Ie && void 0 === t ? o : t, this;
            }, Ve.prototype.clear = function () {
              this.__data__ = [];
            }, Ve.prototype.delete = function (e) {
              var t = this.__data__,
                  n = Ye(t, e);return !(n < 0 || (n == t.length - 1 ? t.pop() : Se.call(t, n, 1), 0));
            }, Ve.prototype.get = function (e) {
              var t = this.__data__,
                  n = Ye(t, e);return n < 0 ? void 0 : t[n][1];
            }, Ve.prototype.has = function (e) {
              return Ye(this.__data__, e) > -1;
            }, Ve.prototype.set = function (e, t) {
              var n = this.__data__,
                  r = Ye(n, e);return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
            }, Ge.prototype.clear = function () {
              this.__data__ = { hash: new He(), map: new (Me || Ve)(), string: new He() };
            }, Ge.prototype.delete = function (e) {
              return ot(this, e).delete(e);
            }, Ge.prototype.get = function (e) {
              return ot(this, e).get(e);
            }, Ge.prototype.has = function (e) {
              return ot(this, e).has(e);
            }, Ge.prototype.set = function (e, t) {
              return ot(this, e).set(e, t), this;
            }, We.prototype.add = We.prototype.push = function (e) {
              return this.__data__.set(e, o), this;
            }, We.prototype.has = function (e) {
              return this.__data__.has(e);
            }, Je.prototype.clear = function () {
              this.__data__ = new Ve();
            }, Je.prototype.delete = function (e) {
              return this.__data__.delete(e);
            }, Je.prototype.get = function (e) {
              return this.__data__.get(e);
            }, Je.prototype.has = function (e) {
              return this.__data__.has(e);
            }, Je.prototype.set = function (e, t) {
              var n = this.__data__;if (n instanceof Ve) {
                var r = n.__data__;if (!Me || r.length < 199) return r.push([e, t]), this;n = this.__data__ = new Ge(r);
              }return n.set(e, t), this;
            };var ut = Pe ? se(Pe, Object) : function () {
              return [];
            },
                st = function st(e) {
              return _e.call(e);
            };function lt(e, t) {
              return !!(t = null == t ? c : t) && ("number" == typeof e || H.test(e)) && e > -1 && e % 1 == 0 && e < t;
            }function ct(e, t) {
              if (gt(e)) return !1;var n = void 0 === e ? "undefined" : r(e);return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Pt(e)) || D.test(e) || !L.test(e) || null != t && e in Object(t);
            }function ft(e) {
              var t = e && e.constructor;return e === ("function" == typeof t && t.prototype || de);
            }function ht(e) {
              return e == e && !jt(e);
            }function dt(e, t) {
              return function (n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n));
              };
            }(Ce && st(new Ce(new ArrayBuffer(1))) != P || Me && st(new Me()) != _ || Re && "[object Promise]" != st(Re.resolve()) || xe && st(new xe()) != E || Ne && st(new Ne()) != j) && (st = function st(e) {
              var t = _e.call(e),
                  n = t == g ? e.constructor : void 0,
                  r = n ? yt(n) : void 0;if (r) switch (r) {case Ue:
                  return P;case Le:
                  return _;case De:
                  return "[object Promise]";case Be:
                  return E;case Fe:
                  return j;}return t;
            });var pt = bt(function (e) {
              var t;e = null == (t = e) ? "" : function (e) {
                if ("string" == typeof e) return e;if (Pt(e)) return qe ? qe.call(e) : "";var t = e + "";return "0" == t && 1 / e == -l ? "-0" : t;
              }(t);var n = [];return B.test(e) && n.push(""), e.replace(F, function (e, t, r, i) {
                n.push(r ? i.replace($, "$1") : t || e);
              }), n;
            });function vt(e) {
              if ("string" == typeof e || Pt(e)) return e;var t = e + "";return "0" == t && 1 / e == -l ? "-0" : t;
            }function yt(e) {
              if (null != e) {
                try {
                  return ye.call(e);
                } catch (e) {}try {
                  return e + "";
                } catch (e) {}
              }return "";
            }function bt(e, t) {
              if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(i);var n = function n() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;if (o.has(i)) return o.get(i);var a = e.apply(this, r);return n.cache = o.set(i, a), a;
              };return n.cache = new (bt.Cache || Ge)(), n;
            }function _t(e, t) {
              return e === t || e != e && t != t;
            }function mt(e) {
              return function (e) {
                return St(e) && Ot(e);
              }(e) && be.call(e, "callee") && (!je.call(e, "callee") || _e.call(e) == f);
            }bt.Cache = Ge;var gt = Array.isArray;function Ot(e) {
              return null != e && kt(e.length) && !wt(e);
            }var Et = Ae || function () {
              return !1;
            };function wt(e) {
              var t = jt(e) ? _e.call(e) : "";return t == y || t == b;
            }function kt(e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= c;
            }function jt(e) {
              var t = void 0 === e ? "undefined" : r(e);return !!e && ("object" == t || "function" == t);
            }function St(e) {
              return !!e && "object" == (void 0 === e ? "undefined" : r(e));
            }function Pt(e) {
              return "symbol" == (void 0 === e ? "undefined" : r(e)) || St(e) && _e.call(e) == k;
            }var At,
                Tt = te ? (At = te, function (e) {
              return At(e);
            }) : function (e) {
              return St(e) && kt(e.length) && !!V[_e.call(e)];
            };function Ct(e) {
              return Ot(e) ? function (e, t) {
                var n = gt(e) || mt(e) ? function (e, t) {
                  for (var n = -1, r = Array(e); ++n < e;) {
                    r[n] = t(n);
                  }return r;
                }(e.length, String) : [],
                    r = n.length,
                    i = !!r;for (var o in e) {
                  !t && !be.call(e, o) || i && ("length" == o || lt(o, r)) || n.push(o);
                }return n;
              }(e) : function (e) {
                if (!ft(e)) return Te(e);var t = [];for (var n in Object(e)) {
                  be.call(e, n) && "constructor" != n && t.push(n);
                }return t;
              }(e);
            }function Mt(e) {
              return e;
            }n.exports = function (e) {
              return function (e) {
                return "function" == typeof e ? e : null == e ? Mt : "object" == (void 0 === e ? "undefined" : r(e)) ? gt(e) ? function (e, t) {
                  return ct(e) && ht(t) ? dt(vt(e), t) : function (n) {
                    var r = function (e, t, n) {
                      var r = null == e ? void 0 : Qe(e, t);return void 0 === r ? void 0 : r;
                    }(n, e);return void 0 === r && r === t ? function (e, t) {
                      return null != n && function (e, t, n) {
                        for (var r, i = -1, o = (t = ct(t, e) ? [t] : tt(t)).length; ++i < o;) {
                          var a = vt(t[i]);if (!(r = null != e && n(e, a))) break;e = e[a];
                        }return r || !!(o = e ? e.length : 0) && kt(o) && lt(a, o) && (gt(e) || mt(e));
                      }(n, t, Ze);
                    }(0, e) : et(t, r, void 0, u | s);
                  };
                }(e[0], e[1]) : function (e) {
                  var t = function (e) {
                    for (var t = Ct(e), n = t.length; n--;) {
                      var r = t[n],
                          i = e[r];t[n] = [r, i, ht(i)];
                    }return t;
                  }(e);return 1 == t.length && t[0][2] ? dt(t[0][0], t[0][1]) : function (n) {
                    return n === e || function (e, t, n, r) {
                      var i = n.length,
                          o = i;if (null == e) return !o;for (e = Object(e); i--;) {
                        var a = n[i];if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
                      }for (; ++i < o;) {
                        var l = (a = n[i])[0],
                            c = e[l],
                            f = a[1];if (a[2]) {
                          if (void 0 === c && !(l in e)) return !1;
                        } else {
                          var h,
                              d = new Je();if (!(void 0 === h ? et(f, c, r, u | s, d) : h)) return !1;
                        }
                      }return !0;
                    }(n, 0, t);
                  };
                }(e) : ct(t = e) ? (n = vt(t), function (e) {
                  return null == e ? void 0 : e[n];
                }) : function (e) {
                  return function (t) {
                    return Qe(t, e);
                  };
                }(t);var t, n;
              }("function" == typeof e ? e : Xe(e, !0));
            };
          }).call(t, n(0), n(4)(e));
        }, function (e, t, n) {
          var r,
              i,
              o = Math.max,
              a = (r = function r(e, t) {
            return function (e, t, n) {
              if ("function" != typeof e) throw new TypeError("Expected a function");return setTimeout(function () {
                e.apply(void 0, n);
              }, 1);
            }(e, 0, t);
          }, i = o(void 0 === i ? r.length - 1 : i, 0), function () {
            for (var e = arguments, t = -1, n = o(e.length - i, 0), a = Array(n); ++t < n;) {
              a[t] = e[i + t];
            }t = -1;for (var u = Array(i + 1); ++t < i;) {
              u[t] = e[t];
            }return u[i] = a, function (e, t, n) {
              switch (n.length) {case 0:
                  return e.call(t);case 1:
                  return e.call(t, n[0]);case 2:
                  return e.call(t, n[0], n[1]);case 3:
                  return e.call(t, n[0], n[1], n[2]);}return e.apply(t, n);
            }(r, this, u);
          });e.exports = a;
        }, function (e, t, n) {
          (function (t) {
            var n,
                r = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
              return void 0 === e ? "undefined" : a(e);
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
            },
                i = 1 / 0,
                o = "[object Symbol]",
                u = /[&<>"'`]/g,
                s = RegExp(u.source),
                l = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                c = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                f = l || c || Function("return this")(),
                h = (n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" }, function (e) {
              return null == n ? void 0 : n[e];
            }),
                d = Object.prototype.toString,
                p = f.Symbol,
                v = p ? p.prototype : void 0,
                y = v ? v.toString : void 0;e.exports = function (e) {
              var t;return (e = null == (t = e) ? "" : function (e) {
                if ("string" == typeof e) return e;if (function (e) {
                  return "symbol" == (void 0 === e ? "undefined" : r(e)) || function (e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : r(e));
                  }(e) && d.call(e) == o;
                }(e)) return y ? y.call(e) : "";var t = e + "";return "0" == t && 1 / e == -i ? "-0" : t;
              }(t)) && s.test(e) ? e.replace(u, h) : e;
            };
          }).call(t, n(0));
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              i = v(n(1)),
              o = v(n(3)),
              u = (v(n(2)), v(n(8))),
              s = v(n(9)),
              l = v(n(19)),
              c = v(n(20)),
              f = n(11),
              h = v(n(14)),
              d = v(n(6)),
              p = v(n(38));function v(e) {
            return e && e.__esModule ? e : { default: e };
          }var y = n(18),
              b = { add: !0, remove: !0, merge: !0 },
              _ = { add: !0, remove: !1 },
              m = function (e) {
            function t(e, n) {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, t);var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t;
              }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));return r.length = 0, r.models = [], r._byId = {}, r.schema = null, r.validationMessages = { valid: !0 }, n || (n = {}), r.preinitialize(e, n), n.model && (r.model = n.model), void 0 !== n.comparator && (r.comparator = n.comparator), r._reset(), r.initialize(e, n), e && r.reset(e, (0, o.default)({ silent: !0 }, n)), r.model || (r.model = new h.default()), r;
            }return function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(t, i.default), r(t, [{ key: "preinitialize", value: function value(e, t) {} }, { key: "initialize", value: function value(e, t) {} }, { key: "toJSON", value: function value() {
                var e = 0,
                    t = [],
                    n = this.models.length;for (e = 0; e < n; e++) {
                  t[e] = this.models[e].toJSON();
                }return t;
              } }, { key: "add", value: function value(e, t) {
                return this.set(e, (0, o.default)({ merge: !1 }, t, _));
              } }, { key: "remove", value: function value(e, t) {
                t = (0, o.default)({}, t);var n = Array.isArray(e);e = n ? [e] : e.slice();var r = this._removeModels(e, t);return !t.silent && r.length && (t.changes = { added: [], merged: [], removed: r }, this.trigger("update", this, t)), n ? r[0] : r;
              } }, { key: "set", value: function value(e, t) {
                if (null !== e) {
                  (t = (0, o.default)({}, b, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);var n = !Array.isArray(e);e = n ? [e] : e.slice();var r = t.at;null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);var i = [],
                      a = [],
                      s = [],
                      f = [],
                      h = {},
                      d = t.add,
                      p = t.merge,
                      v = t.remove,
                      y = !1,
                      _ = this.comparator && null == r && !1 !== t.sort,
                      m = (0, u.default)(this.comparator) ? this.comparator : null,
                      g = void 0,
                      O = void 0,
                      E = e.length;for (O = 0; O < E; O++) {
                    g = e[O];var w = this.get(g);if (w) {
                      if (p && g !== w) {
                        var k = this._isModel(g) ? g.attributes : g;t.parse && (k = w.parse(k, t)), w.set(k, t), s.push(w), _ && !y && (y = w.hasChanged(m));
                      }h[w.cid] || (h[w.cid] = !0, i.push(w)), e[O] = w;
                    } else d && (g = e[O] = this._prepareModel(g, t)) && (a.push(g), this._addReference(g, t), h[g.cid] = !0, i.push(g));
                  }if (v) {
                    for (O = 0; O < this.length; O++) {
                      h[(g = this.models[O]).cid] || f.push(g);
                    }f.length && this._removeModels(f, t);
                  }var j = !1,
                      S = !_ && d && v;if (i.length && S ? (j = this.length !== i.length || (0, l.default)(this.models, function (e, t) {
                    return e !== i[t];
                  }), this.models.length = 0, (0, c.default)(this.models, i, 0), this.length = this.models.length) : a.length && (_ && (y = !0), (0, c.default)(this.models, a, null == r ? this.length : r), this.length = this.models.length), y && this.sort({ silent: !0 }), !t.silent) {
                    for (O = 0; O < a.length; O++) {
                      null != r && (t.index = r + O), (g = a[O]).trigger("add", g, this, t);
                    }(y || j) && this.trigger("sort", this, t), (a.length || f.length || s.length) && (t.changes = { added: a, removed: f, merged: s }, this.trigger("update", this, t));
                  }return n ? e[0] : e;
                }
              } }, { key: "reset", value: function value(e, t) {
                t = t ? y(t) : {};for (var n = 0; n < this.models.length; n++) {
                  this._removeReference(this.models[n], t);
                }return t.previousModels = this.models, this._reset(), e = this.add(e, (0, o.default)({ silent: !0 }, t)), t.silent || this.trigger("reset", this, t), e;
              } }, { key: "push", value: function value(e, t) {
                return this.add(e, (0, o.default)({ at: this.length }, t));
              } }, { key: "pop", value: function value(e) {
                var t = this.at(this.length - 1);return this.remove(t, e);
              } }, { key: "unshift", value: function value(e, t) {
                return this.add(e, (0, o.default)({ at: 0 }, t));
              } }, { key: "shift", value: function value(e) {
                var t = this.at(0);return this.remove(t, e);
              } }, { key: "slice", value: function value() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }return this.models.slice(t);
              } }, { key: "get", value: function value(e) {
                if (null != e) return this._byId[e] || this._byId[this.modelId(this._isModel(e) ? e.attributes : e)] || e.cid && this._byId[e.cid];
              } }, { key: "has", value: function value(e) {
                return null !== this.get(e);
              } }, { key: "at", value: function value(e) {
                return e < 0 && (e += this.length), this.models[e];
              } }, { key: "where", value: function value(e, t) {
                return this[t ? "find" : "filter"](e);
              } }, { key: "findWhere", value: function value(e) {
                return this.where(e, !0);
              } }, { key: "sort", value: function value(e) {
                var t = this.comparator;if (!t) throw new Error("Cannot sort a set without a comparator");e || (e = {});var n = t.length;return (0, s.default)(t) && (t = t.bind(this)), 1 === n || (0, u.default)(t) ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("sort", this, e), this;
              } }, { key: "pluck", value: function value(e) {
                var t = 0,
                    n = [],
                    r = this.models.length;for (t = 0; t < r; t++) {
                  n[t] = this.models[t].toJSON()[e];
                }return n;
              } }, { key: "fetch", value: function value(e) {} }, { key: "create", value: function value(e, t) {
                var n = (t = t ? y(t) : {}).wait;if (!(e = this._prepareModel(e, t))) return !1;n || this.add(e, t);var r = this,
                    i = t.success;return t.success = function (e, t, o) {
                  n && r.add(e, o), i && i.call(o.context, e, t, o);
                }, e.save(null, t), e;
              } }, { key: "parse", value: function value(e, t) {
                return e;
              } }, { key: "clone", value: function value() {
                return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
              } }, { key: "modelId", value: function value(e) {
                return e && this.model && this.model.idAttribute ? e[this.model.idAttribute || "id"] : "id";
              } }, { key: "values", value: function value() {
                return new p.default(this, ITERATOR_VALUES);
              } }, { key: "keys", value: function value() {
                return new p.default(this, ITERATOR_KEYS);
              } }, { key: "entries", value: function value() {
                return new p.default(this, ITERATOR_KEYSVALUES);
              } }, { key: "_reset", value: function value() {
                this.length = 0, this.models = [], this._byId = {};
              } }, { key: "_prepareModel", value: function value(e, t) {
                if (this._isModel(e)) return e.collection || (e.collection = this), e;(t = t ? y(t) : {}).collection = this;var n = new h.default(e, t);return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n;
              } }, { key: "_removeModels", value: function value(e, t) {
                for (var n = [], r = 0; r < e.length; r++) {
                  var i = this.get(e[r]);if (i) {
                    var o = this.indexOf(i);doctor, this.models.splice(o, 1), this.length--, delete this._byId[i.cid];var a = this.modelId(i.attributes);null != a && delete this._byId[a], t.silent || (t.index = o, i.trigger("remove", i, this, t)), n.push(i), this._removeReference(i, t);
                  }
                }return n;
              } }, { key: "_isModel", value: function value(e) {
                return e instanceof h.default;
              } }, { key: "_addReference", value: function value(e, t) {
                this._byId[e.cid] = e;var n = this.modelId(e.attributes);null != n && (this._byId[n] = e), e.on("all", this._onModelEvent, this);
              } }, { key: "_removeReference", value: function value(e, t) {
                delete this._byId[e.cid];var n = this.modelId(e.attributes);null != n && delete this._byId[n], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
              } }, { key: "_onModelEvent", value: function value(e, t, n, r) {
                if (t) {
                  if (("add" === e || "remove" === e) && n !== this) return;if ("destroy" === e && this.remove(t, r), "change" === e) {
                    var i = this.modelId(t.previousAttributes()),
                        o = this.modelId(t.attributes);i !== o && (null != i && delete this._byId[i], null != o && (this._byId[o] = t));
                  }
                }this.trigger.apply(this, arguments);
              } }, { key: "supportsValidation", value: function value() {
                return this.schema && this.schema !== {};
              } }, { key: "isValid", value: function value() {
                return !this.validationMessages || this.validationMessages.valid;
              } }, { key: "getValidationMessages", value: function value() {
                return this.validationMessages && this.validationMessages.messages ? this.validationMessages.messages : [];
              } }, { key: "validate", value: function value() {
                if (this.supportsValidation()) {
                  var e = [];this.validationMessages.messages = e, this.validationMessages.valid = !0;var t = this.toJSON(),
                      n = t && Array.isArray(t) ? t.length : 0,
                      r = 0,
                      i = new d.default();for (r = 0; r < n; r++) {
                    e[r] = i.validate(t[r], this.schema), e[r].valid || (this.validationMessages.valid = !1);
                  }
                } else this.validationMessages.valid = !0;return this.validationMessages;
              } }, { key: "sync", value: function value(e, t, n) {} }, { key: "save", value: function value(e) {
                this.sync("create", this, e);
              } }, { key: "update", value: function value(e) {
                this.sync("update", this, e);
              } }, { key: "remove", value: function value(e) {
                this.sync("delete", this, e);
              } }, { key: "sortByKey", value: function value(e) {
                if (e) {
                  var t = this.toJSON();if (t) {
                    var n = (0, f.sortObjects)(t, e);this.reset(n);
                  }
                }
              } }, { key: "isEmpty", value: function value() {
                return 0 === this.length;
              } }, { key: "size", value: function value() {
                return this.length;
              } }, { key: "toString", value: function value() {
                return JSON.stringify(this.toJSON());
              } }]), t;
          }();t.default = m;
        }, function (e, t, n) {
          var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }();!function () {
            r(function e(t, n) {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this._collection = t, this._kind = n, this._index = 0;
            }, [{ key: "next", value: function value() {
                if (this._collection) {
                  if (this._index < this._collection.length) {
                    var e = this._collection.at(this._index);this._index++;var t = void 0;if (1 === this._kind) t = e;else {
                      var n = this._collection.modelId(e.attributes);t = 2 === this._kind ? n : [n, e];
                    }return { value: t, done: !1 };
                  }this._collection = void 0;
                }return { value: void 0, done: !0 };
              } }]);
          }();
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              i = function () {
            function e() {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this._stack = [];
            }return r(e, [{ key: "empty", value: function value() {
                return 0 === this._stack.length;
              } }, { key: "peek", value: function value() {
                return this._stack[0];
              } }, { key: "pop", value: function value() {
                return this._stack.pop();
              } }, { key: "push", value: function value(e) {
                this._stack.push(e);
              } }, { key: "search", value: function value(e) {
                return this._stack.indexOf(e);
              } }, { key: "size", value: function value() {
                return this._stack.length;
              } }, { key: "clear", value: function value() {
                this._stack.splice(0, this._stack.length);
              } }, { key: "toArray", value: function value() {
                return this._stack;
              } }, { key: "toString", value: function value() {
                return this._stack.toString();
              } }]), e;
          }();t.default = i;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r,
              i = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              o = (r = n(8)) && r.__esModule ? r : { default: r },
              a = function () {
            function e(t) {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this._keys = [], this._data = {}, t && this.marshall(t);
            }return i(e, [{ key: "set", value: function value(e, t) {
                null !== e && null !== t && (this._data[e] || this._keys.push(e), this._data[e] = t);
              } }, { key: "get", value: function value(e) {
                return this._data[e];
              } }, { key: "indexOf", value: function value(e) {
                return this._keys.indexOf(e);
              } }, { key: "remove", value: function value(e) {
                var t = this.indexOf(e);this._keys.splice(t, 1), delete this._data[e];
              } }, { key: "has", value: function value(e) {
                return -1 !== this.indexOf(e);
              } }, { key: "forEach", value: function value(e) {
                if ("function" != typeof e) return null;var t = this._keys.length,
                    n = 0,
                    r = void 0;for (n = 0; n < t; n++) {
                  e(r = this._keys[n], this._data[r], n);
                }
              } }, { key: "key", value: function value(e) {
                return this._keys[e];
              } }, { key: "entries", value: function value() {
                var e = 0,
                    t = this._keys.length,
                    n = new Array(t);for (e = 0; e < t; e++) {
                  n[e] = { key: this._keys[e], value: this._data[e] };
                }return n;
              } }, { key: "values", value: function value() {
                var e = this._keys.length,
                    t = new Array(e),
                    n = 0,
                    r = void 0;for (n = 0; n < e; n++) {
                  r = this._keys[n], t[n] = this._data[r];
                }return t;
              } }, { key: "clear", value: function value() {
                this._keys = [], this._data = {};
              } }, { key: "size", value: function value() {
                return this._keys.length;
              } }, { key: "toJSON", value: function value() {
                return this._data;
              } }, { key: "toString", value: function value() {
                return JSON.stringify(this._data);
              } }, { key: "isEmpty", value: function value() {
                return 0 === this._keys.length;
              } }, { key: "marshall", value: function value(t) {
                var n = void 0;if (t && t instanceof e) n = t.toJSON();else if (t && t instanceof Object && Object.keys(t).length > 0) n = t;else {
                  if (!t || !(0, o.default)(t)) return !1;try {
                    n = JSON.parse(t);
                  } catch (e) {
                    return !1;
                  }
                }var r = Object.keys(n);return r.length, this._keys = r, this._data = n, !0;
              } }]), e;
          }();t.default = a;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              i = a(n(3)),
              o = a(n(21));function a(e) {
            return e && e.__esModule ? e : { default: e };
          }var u = function () {
            function e(t) {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this._timeout = t || o.default.AsynchronousQueueTimeout, this._queue = {};
            }return r(e, [{ key: "add", value: function value() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }return !!(t && t.length > 0) && ((0, i.default)(this._queue, t), !0);
              } }, { key: "clear", value: function value() {
                this._queue.length > 0 && this._queue.splice(0, this._queue.length);
              } }, { key: "process", value: function value() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }t && (0, i.default)(this._queue, t);var r = this._queue,
                    o = Object.keys(r).length,
                    a = this._timeout;return !(o <= 0) && (function e(t) {
                  if (t >= o || "function" != typeof r[t]) return !1;setTimeout(function () {
                    r[t](), e(t + 1);
                  }, a);
                }(0), !0);
              } }, { key: "timeout", get: function get() {
                return this._timeout;
              } }, { key: "queue", get: function get() {
                return this._queue;
              } }]), e;
          }();t.default = u;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.LoggerFactory = t.Level = t.Type = void 0;var r,
              i = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              o = (r = n(22)) && r.__esModule ? r : { default: r };function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t;
          }function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
          }function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }var c = t.Type = {};c.CONSOLE = Symbol("console"), c.COLOR_CONSOLE = Symbol("colorConsole"), c.REST = Symbol("rest");var f = t.Level = {};f.INFO = Symbol("info"), f.DEBUG = Symbol("debug"), f.ERROR = Symbol("error"), f.WARN = Symbol("warn");var h = function () {
            function e(t) {
              l(this, e), this.loggerLevel = t || f.INFO, this.label = f, this.TIME_SEPERATOR = ":", this.DATE_SEPERATOR = "-", this.OPEN_GROUP = " [ ", this.CLOSE_GROUP = " ] ";
            }return i(e, [{ key: "_getLogTime", value: function value() {
                var e = new Date(),
                    t = "" + e.getFullYear() + this.DATE_SEPERATOR + (e.getMonth() + 1) + this.DATE_SEPERATOR + e.getDate() + " " + e.getHours() + this.TIME_SEPERATOR + e.getMinutes() + this.TIME_SEPERATOR + e.getSeconds() + this.TIME_SEPERATOR + e.getMilliseconds();return (0, o.default)("                        ", t, !1);
              } }, { key: "log", value: function value(e, t) {
                var n = "";return e && (t || (t = f.INFO), this.loggerLevel === f.DEBUG && t === f.DEBUG ? n = this._logMe("" + this._getLogTime() + this.OPEN_GROUP + "DEBUG" + this.CLOSE_GROUP + e, t) : t === f.ERROR ? n = this._logMe("" + this._getLogTime() + this.OPEN_GROUP + "ERROR" + this.CLOSE_GROUP + e, t) : t === f.WARN ? n = this._logMe("" + this._getLogTime() + this.OPEN_GROUP + "WARN " + this.CLOSE_GROUP + e, t) : this.loggerLevel !== f.DEBUG && this.loggerLevel !== f.INFO || (n = this._logMe("" + this._getLogTime() + this.OPEN_GROUP + "INFO " + this.CLOSE_GROUP + e, t))), n;
              } }, { key: "info", value: function value(e) {
                this.log(e, f.INFO);
              } }, { key: "error", value: function value(e) {
                this.log(e, f.ERROR);
              } }, { key: "debug", value: function value(e) {
                this.log(e, f.DEBUG);
              } }, { key: "warn", value: function value(e) {
                this.log(e, f.WARN);
              } }, { key: "_logMe", value: function value(e, t) {} }]), e;
          }(),
              d = function (e) {
            function t(e) {
              return l(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            }return s(t, h), i(t, [{ key: "_logMe", value: function value(e, t) {
                return t === f.INFO ? console.info(e) : t === f.ERROR ? console.error(e) : t === f.DEBUG ? console.log(e) : t === f.WARN ? console.warn(e) : console.log(e), e;
              } }]), t;
          }(),
              p = function (e) {
            function t(e) {
              return l(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            }return s(t, h), i(t, [{ key: "_logMe", value: function value(e, t) {
                t === f.INFO ? console.info("[36m" + e + "[0m") : t === f.ERROR ? console.error("[31m" + e + "[0m") : t === f.DEBUG ? console.log("[34m" + e + "[0m") : t === f.WARN ? console.warn("[33m" + e + "[0m") : console.log("[37m" + e + "[0m");
              } }]), t;
          }(),
              v = function (e) {
            function t(e, n) {
              l(this, t);var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return r.uri = n, r;
            }return s(t, h), i(t, [{ key: "setURI", value: function value(e) {
                this.uri = e;
              } }, { key: "_logMe", value: function value(e) {} }]), t;
          }();t.LoggerFactory = function () {
            function e() {
              l(this, e);
            }return i(e, null, [{ key: "getLogger", value: function value(e, t) {
                return e === c.CONSOLE ? new d(t) : e === c.COLOR_CONSOLE ? new p(t) : e === c.REST ? new v(t) : void 0;
              } }]), e;
          }();
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              i = function i(e) {
            return new Promise(function (t, n) {
              e.initialize() ? t(e) : n(new Error("failed initialize!"));
            });
          },
              o = function o(e) {
            return new Promise(function (t, n) {
              e.afterInitialize() ? t(e) : n(new Error("failed after initialize!"));
            });
          },
              a = function a(e) {
            return new Promise(function (t, n) {
              e._started = !0, e.started ? t(e) : n(new Error("failed setting started!"));
            });
          },
              u = function u(e) {
            return new Promise(function (t, n) {
              e.started ? t(e) : n(new Error("failed starting!"));
            });
          },
              s = function () {
            function e(t) {
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, e), this._metadata = {}, this._metadata.name = t || "untitled", this._metadata.datastore = {}, this._router = null, this._started = !1;
            }return r(e, [{ key: "initialize", value: function value() {
                return !0;
              } }, { key: "beforeInitialize", value: function value() {
                return !0;
              } }, { key: "afterInitialize", value: function value() {
                return !0;
              } }, { key: "setMetadataItem", value: function value(e, t) {
                this._metadata[e] = t;
              } }, { key: "getMetadataItem", value: function value(e) {
                return this._metadata[e];
              } }, { key: "registerRouter", value: function value(e) {
                e && (this._router = e);
              } }, { key: "start", value: function value() {
                var e = this;return new Promise(function (t, n) {
                  (function (e) {
                    return new Promise(function (t, n) {
                      e.beforeInitialize() ? t(e) : n(new Error("failed before initialize!"));
                    });
                  })(e).then(i).then(o).then(a).then(u).then(function (e) {
                    t(e);
                  }).catch(function (t) {
                    e.stop(), n(t);
                  });
                });
              } }, { key: "stop", value: function value() {
                this._started = !1;
              } }, { key: "router", get: function get() {
                return this._router;
              }, set: function set(e) {
                this._router = e;
              } }, { key: "started", get: function get() {
                return this._started;
              } }, { key: "name", get: function get() {
                return this.getMetadataItem("name");
              }, set: function set(e) {
                return this.setMetadataItem("name", e);
              } }, { key: "metadata", get: function get() {
                return this._metadata;
              } }, { key: "datastore", get: function get() {
                return this.getMetadataItem("datastore");
              }, set: function set(e) {
                e && this.setMetadataItem("datastore", e);
              } }]), e;
          }();t.default = s;
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }();function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }t.BundleObject = { name: "", mode: "both", cache: !0 };var o = t.ResourceBundle = function () {
            function e() {
              i(this, e);
            }return r(e, null, [{ key: "getBundle", value: function value() {
                return {};
              } }, { key: "getString", value: function value() {
                return "";
              } }]), e;
          }();t.MessageReader = function () {
            function e() {
              i(this, e);
            }return r(e, null, [{ key: "getMessage", value: function value(e) {
                for (var t = o.getString(e), n = e.length, r = e; n > 0 && t == "[" + e + "]";) {
                  n = e.lastIndexOf("."), e = e.substring(0, n), t = o.getString(e);
                }return e ? t : "[" + r + "]";
              } }]), e;
          }(), t.MessageKeyFormatter = function () {
            function e() {
              i(this, e), this.delimiter = ".";
            }return r(e, null, [{ key: "format", value: function value(e) {
                var t = "";return e && e.level && (t += e.level, e.kind && (t += this.delimiter + e.kind, e.rule && (t += this.delimiter + e.rule, e.values.title && (t += this.delimiter + e.values.title)))), t || "";
              } }]), e;
          }();
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.Entry = t.AuthenticationFactory = t.Context = t.Principal = void 0;var r,
              i = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              o = function (e) {
            if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }return t.default = e, t;
          }(n(46)),
              a = (r = n(10)) && r.__esModule ? r : { default: r };function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }var s = t.Principal = function () {
            function e(t) {
              u(this, e), t && t.id ? this._id = t.id : this._id = 0, t && t.email ? this._email = t.email : this._email = "", t && t.login ? this._login = t.login : this._login = "", t && t.fullName ? this._fullName = t.fullName : this._fullName = "";
            }return i(e, [{ key: "fullName", get: function get() {
                return this._fullName;
              }, set: function set(e) {
                this._fullName = e;
              } }, { key: "id", get: function get() {
                return this._id;
              }, set: function set(e) {
                this._id = e;
              } }, { key: "login", get: function get() {
                return this._login;
              }, set: function set(e) {
                this._login = e;
              } }, { key: "email", get: function get() {
                return this._email;
              }, set: function set(e) {
                this._email = e;
              } }]), e;
          }();t.Context = function () {
            function e(t, n) {
              u(this, e), this._principal = t || (new s().login = "guest"), this._permissions = n || [];
            }return i(e, [{ key: "addPermission", value: function value(e) {
                this._permissions.push(e);
              } }, { key: "removePermission", value: function value(e) {
                var t = this._permissions.indexOf(e);this._permissions.splice(t, 1);
              } }, { key: "hasPermission", value: function value(e) {
                return -1 !== this._permissions.indexOf(e);
              } }, { key: "principal", get: function get() {
                return this._principal;
              } }, { key: "permissions", get: function get() {
                return this._permissions;
              }, set: function set(e) {
                this._permissions = e;
              } }]), e;
          }(), t.AuthenticationFactory = function () {
            function e() {
              u(this, e);
            }return i(e, null, [{ key: "getSecurityClient", value: function value(e) {
                return e === a.default.OAUTH2 ? new o.OAUTH2Client() : e === a.default.ACL ? new o.ACLClient() : null;
              } }]), e;
          }(), t.Entry = function () {
            function e(t, n) {
              u(this, e), this._permissions = t || [], this._neg = n || !1;
            }return i(e, [{ key: "isNegative", value: function value() {
                return this._neg;
              } }, { key: "addPermission", value: function value(e) {
                this._permissions.push(e);
              } }, { key: "removePermission", value: function value(e) {
                var t = this._permissions.indexOf(e);this._permissions.splice(t, 1);
              } }, { key: "hasPermission", value: function value(e) {
                return -1 != this._permissions.indexOf(e);
              } }, { key: "setNegative", value: function value(e) {
                this.neg = e;
              } }, { key: "permissions", get: function get() {
                return this._permissions;
              }, set: function set(e) {
                this._permissions = e;
              } }]), e;
          }();
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.ACLClient = t.OAUTH2Client = t.AbstractSecurityClient = void 0;var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              i = u(n(1)),
              o = u(n(10));function u(e) {
            return e && e.__esModule ? e : { default: e };
          }function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t;
          }function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
          }var f = t.AbstractSecurityClient = function (e) {
            function t(e) {
              s(this, t);var n = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return n._type = e, n.uri = "", n;
            }return c(t, i.default), r(t, [{ key: "type", get: function get() {
                return this._type;
              } }]), t;
          }();t.OAUTH2Client = function (e) {
            function t() {
              s(this, t);var e = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, o.default.OAUTH2));return e.accessToken = "", e.authorizationToken = "", e;
            }return c(t, f), r(t, [{ key: "authorize", value: function value(e) {
                this.authorizationToken = "";
              } }, { key: "access", value: function value(e) {
                this.accessToken = "";
              } }]), t;
          }(), t.ACLClient = function (e) {
            function t() {
              return s(this, t), l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, o.default.ACL));
            }return c(t, f), r(t, [{ key: "authenticate", value: function value(e, t) {
                return null;
              } }]), t;
          }();
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) {
            return null !== e && hasOwnProperty.call(e, t);
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r,
              i = (r = n(5)) && r.__esModule ? r : { default: r };t.default = function (e, t) {
            var n = function (e) {
              return (0, i.default)(e) ? Object.create(e) : {};
            }(e);return t && Object.assign(n, t), n;
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r,
              i = (r = n(9)) && r.__esModule ? r : { default: r };t.default = function (e, t) {
            if (null !== e) {
              var n = e[t];return (0, i.default)(n) ? n.call(e) : n;
            }
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) {
            return -1 !== e.indexOf(t);
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) {
            for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) {
              r[i - 2] = arguments[i];
            }var o = e.split("."),
                a = o.pop(),
                u = o.length,
                s = 0;for (s = 0; s < u; s++) {
              t = t[o[s]];
            }return t[a].apply(t, r);
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
            return void 0 !== e;
          };
        }, function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });var r = t.fibonacci = function (e) {
            var t = (1 + Math.sqrt(5)) / 2,
                n = Math.pow(t, e) / Math.sqrt(5);return Math.round(n);
          };t.fibonacciSequence = function (e) {
            var t = [],
                n = 0;for (n = 0; n < e; n++) {
              t.push(r(n));
            }return t;
          };
        }]);
      }, "object" == a(t) && "object" == a(e) ? e.exports = o() : (r = [], void 0 === (i = "function" == typeof (n = o) ? n.apply(t, r) : n) || (e.exports = i));
    }).call(t, n(7)(e));
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(0),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
      }return i(e, null, [{ key: "getViewportHeight", value: function value() {
          return window.innerHeight;
        } }, { key: "getViewportWidth", value: function value() {
          return window.innerWidth;
        } }, { key: "setValue", value: function value(e, t, n) {
          if (e) {
            t = t || "";var r = this.selector(e);!r || 1 !== r.nodeType || "select" !== r.nodeName && "SELECT" !== r.nodeName ? !r || 1 !== r.nodeType || "input" !== r.nodeName && "INPUT" !== r.nodeName && "textarea" !== r.nodeName && "TEXTAREA" !== r.nodeName ? r && 1 === r.nodeType && (n ? r.innerText = t : r.innerHTML = t) : r.value = t : _logger.debug("Select box (not supported) set to - " + t);
          }
        } }, { key: "getValue", value: function value(e) {
          if (e) {
            var t = this.selector(e);if (t && 1 === t.nodeType && ("input" === t.nodeName || "INPUT" === t.nodeName || "textarea" === t.nodeName || "TEXTAREA" === t.nodeName || "select" === t.nodeName || "SELECT" === t.nodeName)) return t.value;if (t && 1 === t.nodeType) return t.innerHTML;
          }return null;
        } }, { key: "selector", value: function value(e) {
          return e ? a.default.isString(e) ? document.querySelector(e) : e : null;
        } }, { key: "selectors", value: function value(e) {
          return e ? a.default.isString(e) ? document.querySelectorAll(e) : e : null;
        } }, { key: "query", value: function value(t, n) {
          if (t) {
            var r = document;n && (r = e.selector(n));var i = a.default.isString(t) ? r.querySelectorAll(t) : t;return 1 === i.length ? i[0] : i;
          }return null;
        } }, { key: "hide", value: function value(e) {
          var t = this.selector(e);t && (t.style.display = "none", t.style.visibility = "hidden");
        } }, { key: "show", value: function value(e, t) {
          var n = this.selector(e);n && (n.style.display = t || "block", n.style.visibility = "visible");
        } }, { key: "setClass", value: function value(e, t) {
          var n = this.selector(e);n && n.setAttribute("class", t);
        } }, { key: "addClass", value: function value(e, t) {
          var n = this.selector(e);n && n.classList.add(t);
        } }, { key: "removeClass", value: function value(e, t) {
          var n = this.selector(e);n && n.classList.remove(t);
        } }, { key: "empty", value: function value(e) {
          this.setValue(e, "", !0);
        } }, { key: "injectTemplate", value: function value(e, t) {
          var n = this.selector(e),
              r = this.selector(t);if (n && r) {
            var i = document.importNode(n.content, !0);r.appendChild(i);
          }
        } }]), e;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = s(n(0)),
        o = s(n(15)),
        a = s(n(4)),
        u = s(n(1));s(n(21));function s(e) {
      return e && e.__esModule ? e : { default: e };
    }var l = "data-click",
        c = "data-function",
        f = "data-style",
        h = "data-append-template",
        d = "data-prepend-template",
        p = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.customEvents = {}, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), r(t, [{ key: "events", value: function value() {
          var e = this.customEvents ? this.customEvents : {};return this.name && (e["change input[" + this.bindingAttribute() + "]"] = "_changed", e["change textarea[" + this.bindingAttribute() + "]"] = "_changed", e["change select[" + this.bindingAttribute() + "]"] = "_changed", e["click *[" + this.bindingAttribute() + "][" + l + "]"] = "_click"), e;
        } }, { key: "_changed", value: function value(e) {
          if (e) {
            var t = e.currentTarget.getAttribute(this.bindingAttribute()),
                n = e.currentTarget.value;"checkbox" === e.currentTarget.type && (n = !!e.currentTarget.checked), this.model.set(t || e.currentTarget.name, n), this._func(e);
          }
        } }, { key: "_click", value: function value(e) {
          if (e) {
            var t = e.currentTarget.getAttribute(l);t && this[t] && this._executeFunctionByName(t, this, e), this._func(e);
          }
        } }, { key: "_func", value: function value(e) {
          if (e) {
            var t = e.currentTarget.getAttribute(c);t && this[t] && this._executeFunctionByName(t, this, e);
          }
        } }, { key: "initialize", value: function value(e) {
          this.init(e), this.model || (this.model = new a.default());
        } }, { key: "remove", value: function value() {
          return this.undelegateEvents(), this.off(), this.stopListening(), this;
        } }, { key: "_executeFunctionByName", value: function value(e, t) {
          var n = e.split("."),
              r = n.pop();if (n && r) {
            var i = 0,
                o = n.length;for (i = 0; i < o; i++) {
              t = t[n[i]];
            }for (var a = arguments.length, u = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) {
              u[s - 2] = arguments[s];
            }return t[r].apply(t, u);
          }return null;
        } }, { key: "bindingAttribute", value: function value() {
          return "data-" + this.name;
        } }, { key: "injectTemplate", value: function value(e, t) {
          if (t || (t = this.el), i.default.isString(t)) {
            var n = document.querySelector(t);if (!n) return;t = n;
          }if (i.default.isString(e)) {
            var r = t.innerHTML;t.innerHTML = r + e;
          } else e.nodeType && e.nodeName && e.nodeType > 0 && "template" !== e.nodeName && "TEMPLATE" !== e.nodeName ? t.appendChild(e) : (e instanceof DocumentFragment || "template" === e.nodeName || "TEMPLATE" === e.nodeName) && u.default.injectTemplate(e, t);this.delegateEvents();
        } }, { key: "removeTemplate", value: function value(e, t) {
          if (e) {
            for (; e.firstChild;) {
              e.removeChild(e.firstChild);
            }if (!t) {
              var n = e.parentNode;n && n.removeChild(e);
            }this.delegateEvents();
          }
        } }, { key: "boundElement", value: function value(e) {
          if (this.el && e) {
            var t = this.el;if (i.default.isString(this.el) && (t = document.querySelector(this.el)), t) return t.querySelector("[" + this.bindingAttribute() + "=" + e + "]");
          }return null;
        } }, { key: "syncBoundElement", value: function value(e) {
          if (e) {
            var t = new UIEvent("change", { view: window, bubbles: !0, cancelable: !0 }),
                n = this.boundElement(e);n && n.dispatchEvent(t);
          }
        } }, { key: "syncAllBoundElements", value: function value() {
          var e = this.el.querySelectorAll("[" + this.bindingAttribute() + "]");if (e && e.length > 0) {
            var t = 0,
                n = e.length,
                r = new UIEvent("change", { view: window, bubbles: !0, cancelable: !0 });for (t = 0; t < n; t++) {
              e[t].dispatchEvent(r);
            }
          }
        } }, { key: "addClass", value: function value(e, t) {
          var n = this.boundElement(e);n && n.classList.add(t);
        } }, { key: "removeClass", value: function value(e, t) {
          var n = this.boundElement(e);n && n.classList.remove(t);
        } }, { key: "bindModelChange", value: function value(e) {
          this.model || (this.model = new a.default()), this.model.on("change", e, this);
        } }, { key: "syncModelChange", value: function value(e) {
          this.model || (this.model = new a.default()), e ? this.model.on("change:" + e, this._syncData.bind(this, e), this) : this.model.on("change", this._syncAllData.bind(this, e), this);
        } }, { key: "_syncData", value: function value(e) {
          var t = this.boundElement(e);if (t) {
            var n = this.model.get(e),
                r = t.getAttribute(f),
                i = t.getAttribute(d),
                o = t.getAttribute(h),
                a = void 0,
                s = void 0;if (i && (a = document.createElement("div"), s = u.default.selector("#" + i), t.appendChild(a), this.injectTemplate(s, a)), r) {
              var l = void 0;"list" === r || "unordered-list" === r ? (l = Presentation.Widget.List(null, n, !1), u.default.empty(t), t.appendChild(l)) : "ordered-list" === r ? (l = Presentation.Widget.List(null, n, !0), u.default.empty(t), t.appendChild(l)) : "description-list" === r && (l = Presentation.Widget.DescriptionList(null, n), u.default.empty(t), t.appendChild(l));
            } else u.default.setValue(t, n || "");o && (a = document.createElement("div"), s = u.default.selector("#" + o), t.appendChild(a), this.injectTemplate(s, a));
          }
        } }, { key: "_syncAllData", value: function value() {
          var e = this.model.attributes;if (e) {
            var t = 0,
                n = Object.keys(e),
                r = n.length;for (t = 0; t < r; t++) {
              this._syncData(n[t]);
            }
          }
        } }, { key: "unbindModelChange", value: function value(e) {
          this.model.unBind("change", e, this);
        } }, { key: "unbindModelSync", value: function value(e) {
          this.model.unBind("change:" + e, this._syncData, this);
        } }]), t;
    }();t.default = p;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }return t.default = e, t;
    }(n(0)),
        o = d(n(2)),
        a = n(48),
        u = d(n(24)),
        s = d(n(11)),
        l = d(n(1)),
        c = d(n(4)),
        f = d(n(5)),
        h = d(n(14));function d(e) {
      return e && e.__esModule ? e : { default: e };
    }var p = "augmented.localstorage.autotable.key",
        v = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));if (e && e.theme ? n.theme = e.theme : n.theme = "material", e && e.linkable ? n.linkable = e.linkable : n.linkable = !1, e && e.links ? n.links = e.links : n.links = { wholeRow: !0, column: "", link: "rowLink" }, e && e.selectable ? n.selectable = e.selectable : n.selectable = !1, e && e.sortable ? n.sortable = e.sortable : n.sortable = !1, e && e.sortStyle ? n.sortStyle = e.sortStyle : n.sortStyle = "client", e && e.sortKey ? n.sortKey = e.sortKey : n.sortKey = null, e && e.display ? n.display = e.display : n.display = null, e && e.pagination ? n.renderPaginationControl = e.pagination : n.renderPaginationControl = !1, e && e.paginationAPI ? n.paginationAPI = e.paginationAPI : n.paginationAPI = null, e && e.description ? n.description = e.description : n.description = "", e && e.localStorage ? n.localStorage = e.localStorage : n.localStorage = !1, e && e.localStorageKey ? n.localStorageKey = e.localStorageKey : n.localStorageKey = p, e && e.editable ? n.editable = e.editable : n.editable = !1, e && e.crossOrigin ? n.crossOrigin = e.crossOrigin : n.crossOrigin = !1, e && e.lineNumbers ? n.lineNumbers = e.lineNumbers : n.lineNumbers = !1, e && e.uri ? n.uri = e.uri : n.uri = !1, e && e.data ? n.data = e.data : n.data = [], n._columns = {}, n.isInitalized = !1, n.pageControlBound = !1, n.model || (n.model = new c.default()), n.collection && n.collection.reset(), !n.collection && n.paginationAPI ? (n.collection = i.PaginationFactory.getPaginatedCollection(n.paginationAPI), n.paginationAPI = n.collection.paginationAPI, n.localStorage = !1) : !n.collection && n.localStorage ? n.collection = new h.default() : n.collection || (n.collection = new f.default()), e && e.schema) {
          if (i.isObject(e.schema)) n.schema = e.schema;else {
            var r = null;try {
              (r = JSON.parse(e.schema)) && i.isObject(r) && (n.schema = r);
            } catch (e) {}n.schema || (n.retrieveSchema(e.schema), n.isInitalized = !1);
          }
        } else n.schema = null;return n.uri && n.collection && (n.collection.url = e.uri), n.data && Array.isArray(n.data) && n.populate(n.data), e && e.localStorageKey && !e.uri && (n.localStorageKey = e.localStorageKey, n.uri = null), n.collection && n.uri && (n.collection.url = n.uri), n.collection && (n.collection.crossOrigin = n.crossOrigin), n.schema ? (n.name && "" !== n.name || !n.schema.title || (n.name = n.schema.title), n.description && "" !== n.description || !n.schema.description || (n.description = n.schema.description), n.isInitalized || (n._columns = n.schema.properties, n.collection.schema = n.schema, n.isInitalized = !0)) : n.isInitalized = !1, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), r(t, [{ key: "setTheme", value: function value(e) {
          var t = l.default.selector(this.el);if (t) {
            var n = t.querySelector("table");n && n.setAttribute("class", e);
          }this.theme = e;
        } }, { key: "rowLink", value: function value(e) {
          return "";
        } }, { key: "sortBy", value: function value(e) {
          e && (this.editable || !this.editable && this.sortKey !== e) && (this.sortKey = e, this.collection.sortByKey(e), this.refresh());
        } }, { key: "currentPage", value: function value() {
          return this.collection.currentPage;
        } }, { key: "totalPages", value: function value() {
          return this.collection.totalPages;
        } }, { key: "nextPage", value: function value() {
          this.collection.nextPage(), this.refresh();
        } }, { key: "previousPage", value: function value() {
          this.collection.previousPage(), this.refresh();
        } }, { key: "goToPage", value: function value(e) {
          this.collection.goToPage(e), this.refresh();
        } }, { key: "firstPage", value: function value() {
          this.collection.firstPage(), this.refresh();
        } }, { key: "lastPage", value: function value() {
          this.collection.lastPage(), this.refresh();
        } }, { key: "editCell", value: function value(e, t, n) {
          if (e && t) {
            var r = this.collection.at(e),
                i = this.columns[t];r && i && r.set(i, n);
          }
        } }, { key: "copyCell", value: function value(e, t, n, r) {
          if (e && t && n && r) {
            var i = this.collection.at(e),
                o = this.columns[t],
                a = this.collection.at(row);i && o && a && a.set(o, value1);
          }
        } }, { key: "clearCell", value: function value(e, t) {
          this.editCell(e, t, null);
        } }, { key: "render", value: function value() {
          if (!this.isInitalized) return this;var e = void 0;if (this.template) {
            if (this.showProgressBar(!0), this.el && (e = "string" == typeof this.el ? document.querySelector(this.el) : this.el)) {
              var t = e.querySelector("tbody"),
                  n = e.querySelector("thead");if (this.sortable && this._unbindSortableColumnEvents(), this.editable && this._unbindCellChangeEvents(), this._columns && Object.keys(this._columns).length > 0) {
                for (; n.hasChildNodes();) {
                  n.removeChild(n.lastChild);
                }(0, a.directDOMTableHeader)(n, this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable);
              } else if (n) for (; n.hasChildNodes();) {
                n.removeChild(n.lastChild);
              }if (this.collection && this.collection.length > 0 && t) {
                for (; t.hasChildNodes();) {
                  t.removeChild(t.lastChild);
                }this.editable ? (0, a.directDOMEditableTableBody)(t, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name) : (0, a.directDOMTableBody)(t, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name, this.linkable, this.links, this[this.links.link]);
              } else for (; t.hasChildNodes();) {
                t.removeChild(t.lastChild);
              }
            }
          } else {
            if (this.template = "notused", this.showProgressBar(!0), this.el && (e = "string" == typeof this.el ? document.querySelector(this.el) : this.el)) {
              var r = document.createElement("progress"),
                  i = document.createTextNode("Please wait.");r.appendChild(i), e.appendChild(r), (0, a.directDOMTableCompile)(e, this.name, this.description, this._columns, this.collection.toJSON(), this.lineNumbers, this.sortKey, this.editable, this.display, this.selectable, this.linkable, this.links, this[this.links.link]), this.renderPaginationControl && (0, a.directDOMPaginationControl)(e, this.currentPage(), this.totalPages()), (r = document.createElement("p")).classList.add("message"), e.appendChild(r);
            }this.renderPaginationControl && this._bindPaginationControlEvents();
          }return this.delegateEvents(), this.sortable && this._bindSortableColumnEvents(), this.editable && this._bindCellChangeEvents(), this.showProgressBar(!1), this.setTheme(this.theme), this;
        } }, { key: "retrieveSchema", value: function value(e) {
          var t = this;(0, s.default)({ url: e, contentType: "application/json", dataType: "json", success: function success(e, n) {
              var r = { schema: "string" == typeof e ? JSON.parse(e) : e };t.initialize(r);
            }, error: function error(e, t) {} });
        } }, { key: "fetch", value: function value() {
          this.showProgressBar(!0);var e = this;this.collection.fetch({ reset: !0, success: function success() {
              e.showProgressBar(!1), e.sortKey = null, e.populate(e.collection.toJSON()), e.refresh();
            }, error: function error() {
              e.showProgressBar(!1), e.showMessage("AutomaticTable fetch failed!");
            } });
        } }, { key: "save", value: function value(e) {
          if (this.editable || e) {
            this.showProgressBar(!0);var t = this;this.collection.save({ reset: !0, success: function success() {
                t.showProgressBar(!1);
              }, error: function error() {
                t.showProgressBar(!1), t.showMessage("AutomaticTable save failed!");
              } });
          }return !1;
        } }, { key: "populate", value: function value(e) {
          e && Array.isArray(e) && (this.sortKey = null, this.data = e, this.collection.reset(this.data));
        } }, { key: "clear", value: function value() {
          this.sortKey = null, this.data = [], this.collection.reset(null);
        } }, { key: "refresh", value: function value() {
          return this.render();
        } }, { key: "saveCell", value: function value(e) {
          var t = e.target,
              n = this.collection.at(parseInt(t.getAttribute(a.TABLE_DATA_ATTRIBUTES.INDEX))),
              r = t.value;"number" === t.getAttribute("type") && (r = parseInt(t.value)), n.set(t.getAttribute(a.TABLE_DATA_ATTRIBUTES.NAME), r);
        } }, { key: "_bindCellChangeEvents", value: function value() {
          var e = "string" == typeof this.el ? this.el : this.el.localName,
              t = [].slice.call(document.querySelectorAll(e + " table tr td input")),
              n = 0,
              r = t.length;for (n = 0; n < r; n++) {
            t[n].addEventListener("change", this.saveCell.bind(this), !1);
          }for (n = 0, r = (t = [].slice.call(document.querySelectorAll(e + " table tr td select"))).length, n = 0; n < r; n++) {
            t[n].addEventListener("change", this.saveCell.bind(this), !1);
          }
        } }, { key: "_unbindCellChangeEvents", value: function value() {
          var e = "string" == typeof this.el ? this.el : this.el.localName,
              t = [].slice.call(document.querySelectorAll(e + " table tr td input")),
              n = 0,
              r = t.length;for (n = 0; n < r; n++) {
            t[n].removeEventListener("change", this.saveCell, !1);
          }for (n = 0, r = (t = [].slice.call(document.querySelectorAll(e + " table tr td select"))).length, n = 0; n < r; n++) {
            t[n].removeEventListener("change", this.saveCell, !1);
          }
        } }, { key: "exportTo", value: function value(e) {
          return "csv" === e ? (0, a.csvTableCompile)(this.name, this.description, this._columns, this.collection.toJSON()) : "tsv" === e ? (0, a.tsvTableCompile)(this.name, this.description, this._columns, this.collection.toJSON()) : (0, a.defaultTableCompile)(this.name, this.description, this._columns, this.collection.toJSON(), !1, null);
        } }, { key: "_unbindPaginationControlEvents", value: function value() {
          if (this.pageControlBound) {
            var e = "string" == typeof this.el ? this.el : this.el.localName,
                t = document.querySelector(e + " div.paginationControl span.first"),
                n = document.querySelector(e + " div.paginationControl span.previous"),
                r = document.querySelector(e + " div.paginationControl span.next"),
                i = document.querySelector(e + " div.paginationControl span.last");t && t.removeEventListener("click", this.firstPage, !1), n && n.removeEventListener("click", this.previousPage, !1), r && r.removeEventListener("click", this.nextPage, !1), i && i.removeEventListener("click", this.lastPage, !1), this.pageControlBound = !1;
          }
        } }, { key: "_bindPaginationControlEvents", value: function value() {
          if (!this.pageControlBound) {
            var e = "string" == typeof this.el ? this.el : this.el.localName,
                t = document.querySelector(e + " div.paginationControl span.first"),
                n = document.querySelector(e + " div.paginationControl span.previous"),
                r = document.querySelector(e + " div.paginationControl span.next"),
                i = document.querySelector(e + " div.paginationControl span.last");t && t.addEventListener("click", this.firstPage.bind(this), !1), n && n.addEventListener("click", this.previousPage.bind(this), !1), r && r.addEventListener("click", this.nextPage.bind(this), !1), i && i.addEventListener("click", this.lastPage.bind(this), !1), this.pageControlBound = !0;
          }
        } }, { key: "_deriveEventTarget", value: function value(e) {
          var t = null;return e && (t = e.target.getAttribute(a.TABLE_DATA_ATTRIBUTES.NAME)), t;
        } }, { key: "_sortByHeaderEvent", value: function value(e) {
          var t = this._deriveEventTarget(e);this.sortBy(t);
        } }, { key: "_unbindSortableColumnEvents", value: function value() {
          if (this.el && this.sortable) {
            var e = void 0,
                t = 0,
                n = (e = "string" == typeof this.el ? document.querySelectorAll(this.el + " table tr th") : document.querySelectorAll(this.el.localName + " table tr th")).length;for (t = 0; t < n; t++) {
              e[t].removeEventListener("click", this._sortByHeaderEvent, !1);
            }
          }
        } }, { key: "_bindSortableColumnEvents", value: function value() {
          if (this.el && this.sortable) {
            var e = void 0,
                t = 0,
                n = (e = "string" == typeof this.el ? document.querySelectorAll(this.el + " table tr th") : document.querySelectorAll(this.el.localName + " table tr th")).length;for (t = 0; t < n; t++) {
              "lineNumber" === e[t].getAttribute(a.TABLE_DATA_ATTRIBUTES.NAME) || e[t].addEventListener("click", this._sortByHeaderEvent.bind(this), !1);
            }
          }
        } }, { key: "compileTemplate", value: function value() {
          return "";
        } }, { key: "setURI", value: function value(e) {
          this.uri = e;
        } }, { key: "setSchema", value: function value(e) {
          this.schema = e, this._columns = e.properties, this.collection.reset(), this.collection.schema = e, this.uri && (this.collection.url = this.uri);
        } }, { key: "showProgressBar", value: function value(e) {
          if (this.el) {
            var t = "string" == typeof this.el ? document.querySelector(this.el) : this.el;if (t) {
              var n = t.querySelector("progress");n && (n.style.display = e ? "block" : "none", n.style.visibility = e ? "visible" : "hidden");
            }
          }
        } }, { key: "showMessage", value: function value(e) {
          if (this.el) {
            var t = ("string" == typeof this.el ? document.querySelector(this.el) : this.el).querySelector("p[class=message]");t && (t.innerHTML = e);
          }
        } }, { key: "validate", value: function value() {
          var e = this.collection ? this.collection.validate() : null;return !this.collection.isValid() && e && e.messages ? this.showMessage((0, u.default)(e.messages)) : this.showMessage(""), e;
        } }, { key: "isValid", value: function value() {
          return !this.collection || this.collection.isValid();
        } }, { key: "remove", value: function value() {
          return this.undelegateEvents(), this.off(), this.stopListening(), l.default.empty(this.el), this;
        } }, { key: "getSelected", value: function value() {
          var e = Object.keys(this.model.attributes),
              t = e.length,
              n = [],
              r = 0;for (r = 0; r < t; r++) {
            if (e[r].includes("row-") && !0 === this.model.attributes[e[r]]) {
              var i = Number(e[r].substring(4));n.push(this.collection.at(i));
            }
          }return n;
        } }, { key: "getSelectedIndex", value: function value() {
          var e = Object.keys(this.model.attributes),
              t = e.length,
              n = [],
              r = 0;for (r = 0; r < t; r++) {
            e[r].includes("row-") && !0 === this.model.attributes[e[r]] && n.push(Number(e[r].substring(4)));
          }return n;
        } }, { key: "removeRows", value: function value(e) {
          var t = e.length,
              n = 0;for (n = 0; n < t; n++) {
            var r = e[n];r.url || (r.url = this.uri + "/" + r.id), r.destroy();
          }
        } }]), t;
    }();t.default = v;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(0)),
        o = a(n(10));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = function (e) {
      function t(e, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) {
          i[o - 2] = arguments[o];
        }var a = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, i));return a.mock = !1, a.crossOrigin = !1, a;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default.AbstractModel), r(t, [{ key: "sync", value: function value(e, t, n) {
          return n || (n = {}), !0 === this.crossOrigin && (n.crossDomain = !0), n.xhrFields || (n.xhrFields = { withCredentials: !0 }), this.mock && (n.mock = this.mock), (0, o.default)(e, t, n);
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(0)),
        o = a(n(10));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = function (e) {
      function t(e, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var r = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));return n && n.url ? r.url = n.url : r.url = null, r;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default.AbstractCollection), r(t, [{ key: "sync", value: function value(e, t, n) {
          return n || (n = {}), !0 === this.crossOrigin && (n.crossDomain = !0), n.xhrFields || (n.xhrFields = { withCredentials: !0 }), this.mock && (n.mock = this.mock), (0, o.default)(e, t, n);
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = u(n(0)),
        o = u(n(2)),
        a = u(n(4));function u(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.isInitalized = !1, n._menuItems = [], n.title = "", n.model ? n.model.clear() : n.model = new a.default(), e && (e.data && i.default.isObject(e.data) && n.model.set(e.data), e.title && i.default.isString(e.title) && (n.title = e.title), e.menuItems && i.default.isObject(e.menuItems) && (n._menuItems = e.menuItems)), n.el && n.name && (n.isInitalized = !0), n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), r(t, [{ key: "addItem", value: function value(e, t, n, r, i) {
          i ? this.addSpacer() : this._menuItems.push({ id: e, click: t, icon: n, title: r, spacer: !1 });
        } }, { key: "addSpacer", value: function value() {
          this._menuItems.push({ id: null, click: null, icon: null, title: null, spacer: !0 });
        } }, { key: "menuItems", get: function get() {
          return this._menuItems;
        }, set: function set(e) {
          this._menuItems = e;
        } }]), t;
    }();t.default = s;
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function get() {
          return e.l;
        } }), Object.defineProperty(e, "id", { enumerable: !0, get: function get() {
          return e.i;
        } }), e.webpackPolyfill = 1), e;
    };
  }, function (e, t, n) {
    "use strict";
    var r,
        i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    };r = function () {
      return this;
    }();try {
      r = r || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window);
    }e.exports = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(18),
        a = (r = o) && r.__esModule ? r : { default: r },
        u = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }return t.default = e, t;
    }(n(0));var s = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default), i(t, [{ key: "render", value: function value() {
          if (this._el && this.template) {
            var e = this._el;u.isString(this._el) && (e = document.querySelector(this._el)), e && (e.innerHTML = this.template);
          }return this;
        } }, { key: "remove", value: function value() {
          if (this.undelegateEvents(), this.off(), this.stopListening(), this._el) {
            var e = this._el;u.isString(this._el) && (e = document.querySelector(this._el)), e && (e.innerHTML = "");
          }return this;
        } }]), t;
    }();t.default = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = u(n(0)),
        i = u(n(31)),
        o = u(n(11)),
        a = u(n(20));function u(e) {
      return e && e.__esModule ? e : { default: e };
    }t.default = function (e, t, n) {
      var u = i.default[e];n || (n = {});var s = { type: u, dataType: a.default.JSON };if (!n.url) {
        if (!t.url) throw new Error('A "url" property or function must be specified');r.default.isFunction(t.url) ? s.url = t.url() : s.url = t.url;
      }null != n.data || !t || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(n.attrs || t.toJSON(n))), s.type !== i.default.read && (s.processData = !1);var l = n.error;n.error = function (e, t, r) {
        n.textStatus = t, n.errorThrown = r, l && l.call(n.context, e, t, r);
      };var c = n.xhr = (0, o.default)(r.default.Utility.extend(s, n));return t.trigger("request", t, c, n), c;
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = o(n(32)),
        i = o(n(20));function o(e) {
      return e && e.__esModule ? e : { default: e };
    }t.default = function (e) {
      var t = null;if (e && e.url) {
        e.type, !e.method && e.type && (e.method = e.type);var n = e.method ? e.method : "GET",
            o = !e.cache || e.cache;if (t = e.mock ? new function () {
          var e = this;this.responseType = i.default.TEXT, this.responseText = "", this.async = !0, this.status = 200, this.header = {}, this.timeout = 70, this.open = function (t, n, r, i, o) {
            e.url = n, e.async = r, e.user = i, e.method = t;
          }, this.send = function () {
            e.onload();
          }, this.setRequestHeader = function (t, n) {
            e.header.header = n;
          }, this.done = function () {}, this.fail = function () {}, this.always = function () {}, this.then = function () {}, this.options = {};
        }() : new XMLHttpRequest(), e.timeout && (t.timeout = e.timeout), e.crossDomain && e.xhrFields && e.xhrFields.withCredentials && (t.withCredentials = e.xhrFields.withCredentials), e.dataType && (t.responseType = e.dataType ? e.dataType : i.default.TEXT), t.open(n, encodeURI(e.url), !0, void 0 !== e.user ? e.user : "", void 0 !== e.password ? e.password : ""), t.setRequestHeader(r.default.TYPE, e.contentType ? e.contentType : r.default.TEXT), e.dataType === i.default.JSON && t.setRequestHeader(r.default.ACCEPT, r.default.APPLICATION), o || t.setRequestHeader(r.default.CACHE, r.default.NO_CACHE), t.withCredentials) {
          var a = "*",
              u = "GET";e.allowOrigins && (a = e.allowOrigins), e.allowMethods && (u = e.allowMethods), t.setRequestHeader(r.default.ALLOW_ORIGINS, a), t.setRequestHeader(r.default.ALLOW_METHODS, u);
        }if (t.withCredentials && e.user && e.password && t.setRequestHeader(r.default.AUTH, "Basic " + window.btoa(e.user + ":" + e.password)), e.headers) {
          var s = 0,
              l = Object.keys(e.headers),
              c = l.length;for (s = 0; s < c; s++) {
            t.setRequestHeader(l[s], e.headers[l[s]]);
          }
        }t.onload = function () {
          try {
            t.status > 199 && t.status < 399 ? e.success && ("" === t.responseType || t.responseType === i.default.TEXT ? t.responseText ? e.success(t.responseText, t.status, t) : e.success("", t.status, t) : t.responseType === i.default.JSON ? t.response ? e.success(t.response, t.status, t) : t.responseText ? e.success(JSON.parse(t.responseText), t.status, t) : e.success("", t.status, t) : t.responseText ? e.success(t.responseText, t.status, t) : t.response ? e.success(t.response, t.status, t) : e.success("", t.status, t)) : t.status > 399 && t.status < 600 && (e.failure ? e.failure(t, t.status, t.statusText) : e.error && e.error(t, t.status, t.statusText));
          } catch (n) {
            return e && e.error && e.error(t, t.status, t.statusText), t;
          }return e.complete && e.complete(t, t.status), t;
        }, e.beforeSend && e.beforeSend(t), t.send(e.data ? e.data : "");
      }
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(13),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
      }return i(e, null, [{ key: "getStorage", value: function value(e, t) {
          var n = null;return (n = t ? new a.default(e, t) : new a.default(e)) && n.isSupported() ? n : null;
        } }]), e;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }();var i = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.isPersisted = t, this._myStore = null, this.isSupported() ? this.isPersisted ? this._myStore = localStorage : this._myStore = sessionStorage : console.warn("AUGMENTED: No localStorage.");
      }return r(e, [{ key: "isSupported", value: function value() {
          return "undefined" != typeof Storage;
        } }, { key: "getItem", value: function value(e) {
          var t = this._myStore.getItem(e);return t ? JSON.parse(t) : null;
        } }, { key: "setItem", value: function value(e, t) {
          this._myStore.setItem(e, JSON.stringify(t));
        } }, { key: "removeItem", value: function value(e) {
          this._myStore.removeItem(e);
        } }, { key: "clear", value: function value() {
          this._myStore.clear();
        } }, { key: "key", value: function value(e) {
          return this._myStore.key(e);
        } }, { key: "length", value: function value() {
          return this._myStore.length;
        } }]), e;
    }();t.default = i;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(0)),
        o = a(n(12));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = "augmented.localstorage.collection",
        s = u + ".key",
        l = function (e) {
      function t(e, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var r = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));return r._key = s, r._persist = !1, r._storage = null, n && n.persist && (r._persist = n.persist), n && n.key && (r._key = n.key), r._storage = o.default.getStorage(r._persist, u), r;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default.AbstractCollection), r(t, [{ key: "initialize", value: function value(e) {} }, { key: "init", value: function value(e) {} }, { key: "fetch", value: function value(e) {
          this.sync("read", this, e);
        } }, { key: "save", value: function value(e) {
          this.sync("create", this, e);
        } }, { key: "update", value: function value(e) {
          this.sync("update", this, e);
        } }, { key: "destroy", value: function value(e) {
          this.sync("delete", this, e);
        } }, { key: "sync", value: function value(e, t, n) {
          n || (n = {});var r = {};return "create" === e || "update" === e ? (r = this.toJSON(), this._storage.setItem(this._key, r)) : "delete" === e ? this._storage.removeItem(this._key) : (r = this._storage.getItem(this._key), this.reset(r)), {};
        } }]), t;
    }();t.default = l;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(9),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return e && e.mediator ? n._mediator = mediator : n._mediator = null, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default), i(t, [{ key: "sendMessage", value: function value(e, t) {
          this._mediator && this._mediator.trigger(e, t);
        } }, { key: "setMediatorMessageQueue", value: function value(e) {
          this._mediator && this._mediator._dismissMe(this), this._mediator = e;
        } }, { key: "removeMediatorMessageQueue", value: function value() {
          this._mediator = null;
        } }, { key: "mediator", get: function get() {
          return this._mediator;
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = function (e, t) {
      var n = "";if (e && t && 0 !== t.length) {
        var r = t.length,
            i = 0;for (i = 0; i < r; i++) {
          t[i].spacer ? n += '<div class="spacer"></div>' : n = n + '<div id="' + t[i].id + '" data-' + e + '="' + t[i].id + '" data-click="' + t[i].click + '">' + (t[i].icon ? '<i class="material-icons md-dark">' + t[i].icon + "</i>" : "") + t[i].title + "</div>";
        }
      }return n;
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(2)),
        o = a(n(1));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.name || (n.name = "dialog"), e && e.title ? n._title = e.title : n._title = "", e && e.body ? n._body = e.body : n._body = "", e && e.style ? n._style = e.style : n._style = "form", e && e.buttons ? n._buttons = e.buttons : n._buttons = {}, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default), r(t, [{ key: "_template", value: function value() {
          return '<div class="blur"><dialog class="' + this._style + '"><h1>' + this._title + "</h1>" + this._body + this._getButtonGroup() + "</dialog></div>";
        } }, { key: "_getButtonGroup", value: function value() {
          var e = '<div class="buttonGroup">',
              t = 0,
              n = Object.keys(this._buttons),
              r = n ? n.length : 0;for (t = 0; t < r; t++) {
            e = e + "<button data-" + this.name + '="' + this._buttons[n[t]] + '" data-click="' + this._buttons[n[t]] + '">' + n[t] + "</button>";
          }return e + "</div>";
        } }, { key: "render", value: function value() {
          return this.el && (o.default.setValue(this.el, this._template()), this.delegateEvents(), this.trigger("open")), this;
        } }, { key: "cancel", value: function value(e) {
          this.close(e);
        } }, { key: "open", value: function value(e) {
          this.render();
        } }, { key: "close", value: function value(e) {
          this.trigger("close"), o.default.empty(this.el, !0);
        } }, { key: "title", set: function set(e) {
          this._title = e;
        }, get: function get() {
          return this._title;
        } }, { key: "style", set: function set(e) {
          this._style = e;
        }, get: function get() {
          return this._style;
        } }, { key: "buttons", set: function set(e) {
          this._buttons = e;
        }, get: function get() {
          return this._buttons;
        } }, { key: "body", set: function set(e) {
          this._body = e;
        }, get: function get() {
          return this._body;
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }return t.default = e, t;
    }(n(0));var o = n(27),
        a = /^(\S+)\s*(.*)$/,
        u = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return e && e.name ? n._name = e.name : n._name = "Untitled", e && e.permissions ? n._permissions = e.permissions : n._permissions = { include: [], exclude: [] }, e && e.tagName ? n.tagName = e.tagName : n.tagName = "div", e && e.el ? n._el = e.el : n._el = "", e && e.model ? n.model = e.model : n.model = null, e && e.collection ? n.collection = e.collection : n.collection = null, e && e.id ? n.id = e.id : n.id = 0, e && e.className ? n._style = e.className : n._style = "", e && e.style ? n._style = e.style : n._style = "", e && e.attributes ? n.attributes = e.attributes : n.attributes = {}, n.cid = i.Utility.uniqueId("view"), n._ensureElement(), e && e.template ? n.template = e.template : n.template = "", n.initialize(e), n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.Object), r(t, [{ key: "init", value: function value(e) {} }, { key: "initialize", value: function value(e) {
          this.options = e, this.init(e);
        } }, { key: "beforeRender", value: function value() {
          return this;
        } }, { key: "render", value: function value() {
          return this;
        } }, { key: "afterRender", value: function value() {
          return this;
        } }, { key: "remove", value: function value() {
          return this._removeElement(), this.stopListening(), this;
        } }, { key: "_removeElement", value: function value() {
          var e = this._el;this._el && i.isString(this._el) && (e = document.querySelector(this._el)), e && (e.innerHTML = "");
        } }, { key: "setElement", value: function value(e) {
          return this.undelegateEvents(), this._el = e, this.delegateEvents(), this;
        } }, { key: "delegateEvents", value: function value(e) {
          if (e || (e = i.result(this, "events")), !e) return this;this.undelegateEvents();var t = void 0;for (t in e) {
            var n = e[t];if (i.isFunction(n) || (n = this[n]), n) {
              var r = t.match(a);this.delegate(r[1], r[2], o(n, this));
            }
          }return this;
        } }, { key: "delegate", value: function value(e, t, n) {
          var r = document.querySelectorAll(t);if (r) {
            var i = Array.from(r),
                o = 0,
                a = i.length;for (o = 0; o < a; o++) {
              i[o].addEventListener(e, n);
            }
          }return this;
        } }, { key: "undelegateEvents", value: function value() {
          if (this._el) {
            var e = this._el;if (i.isString(this._el) && (e = document.querySelector(this._el)), e) {
              var t = e.cloneNode(!0);t && t.parentNode && e.parentNode.replaceChild(t, e);
            }
          }return this;
        } }, { key: "undelegate", value: function value(e, t, n) {
          if (this._el) {
            var r = this._el;if (i.isString(this._el) && (r = document.querySelector(this._el)), r) {
              var o = r.querySelectorAll(t);if (o) {
                var a = Array.from(o),
                    u = 0,
                    s = a.length;for (u = 0; u < s; u++) {
                  a[u].removeEventListener(e, n);
                }
              }
            }
          }return this;
        } }, { key: "_createElement", value: function value(e) {
          return document.createElement(e);
        } }, { key: "_ensureElement", value: function value() {
          if (this.el) this.setElement(this._el);else {
            var e = i.Utility.extend({}, i.result(this, "attributes"));this.id && (e.id = this.id), this._style && (e.class = this._style);var t = this._createElement(this.tagName),
                n = document.querySelector("body");n && n.appendChild(t), t && this.setElement(t), this._setAttributes(e);
          }
        } }, { key: "_setAttributes", value: function value(e) {
          var t = void 0;for (t in e) {
            if (this._el) {
              var n = this._el;i.isString(this._el) && (n = document.querySelector(this._el)), n && n.setAttribute(t, e[t]);
            }
          }
        } }, { key: "addPermission", value: function value(e, t) {
          (t || (t = !1), null === e || Array.isArray(e)) || (t ? this._permissions.exclude : this._permissions.include).push(e);
        } }, { key: "removePermission", value: function value(e, t) {
          if (t || (t = !1), null !== e && !Array.isArray(e)) {
            var n = t ? this._permissions.exclude : this._permissions.include;n.splice(n.indexOf(e), 1);
          }
        } }, { key: "clearPermissions", value: function value() {
          this._permissions = { include: [], exclude: [] };
        } }, { key: "matchesPermission", value: function value(e, t) {
          return t || (t = !1), -1 !== (t ? this._permissions.exclude : this._permissions.include).indexOf(e);
        } }, { key: "canDisplay", value: function value() {
          return !0;
        } }, { key: "el", get: function get() {
          return this._el;
        }, set: function set(e) {
          this._el = e;
        } }, { key: "name", set: function set(e) {
          this._name = e;
        }, get: function get() {
          return this._name;
        } }, { key: "permissions", set: function set(e) {
          this._permissions = e;
        }, get: function get() {
          return this._permissions;
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }return t.default = e, t;
    }(n(0));var a = /^[#\/]|\s+$/g,
        u = /^\/+|\/+$/g,
        s = /#.*$/,
        l = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.handlers = [], n.checkUrl = n.checkUrl.bind(n), "undefined" != typeof window && (n.location = window.location, n.history = window.history), n.interval = 50, n.started = !1, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.Object), i(t, [{ key: "atRoot", value: function value() {
          return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
        } }, { key: "matchRoot", value: function value() {
          return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
        } }, { key: "decodeFragment", value: function value(e) {
          return decodeURI(e.replace(/%25/g, "%2525"));
        } }, { key: "getSearch", value: function value() {
          var e = this.location.href.replace(/#.*/, "").match(/\?.+/);return e ? e[0] : "";
        } }, { key: "getHash", value: function value(e) {
          var t = (e || this).location.href.match(/#(.*)$/);return t ? t[1] : "";
        } }, { key: "getPath", value: function value() {
          var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);return "/" === e.charAt(0) ? e.slice(1) : e;
        } }, { key: "getFragment", value: function value(e) {
          return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(a, "");
        } }, { key: "start", value: function value(e) {
          if (this.started) throw new Error("History has already been started");if (this.started = !0, this.options = o.Utility.extend({ root: "/" }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(u, "/"), this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot()) {
              var t = this.root.slice(0, -1) || "/";return this.location.replace(t + "#" + this.getPath()), !0;
            }this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
          }if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
            this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;var n = document.body,
                r = n.insertBefore(this.iframe, n.firstChild).contentWindow;r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment;
          }var i = window.addEventListener ? window.addEventListener : function (e, t) {
            return attachEvent("on" + e, t);
          };if (this._usePushState ? i("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? i("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl();
        } }, { key: "stop", value: function value() {
          var e = window.removeEventListener ? window.removeEventListener : function (e, t) {
            return detachEvent("on" + e, t);
          };this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), this.started = !1;
        } }, { key: "route", value: function value(e, t) {
          this.handlers.unshift({ route: e, callback: t });
        } }, { key: "checkUrl", value: function value(e) {
          var t = this.getFragment();if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment) return !1;this.iframe && this.navigate(t), this.loadUrl();
        } }, { key: "loadUrl", value: function value(e) {
          return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), console.log("loadUrl", e), console.log("this.handlers", this.handlers), this.handlers && Array.isArray(this.handlers) ? this.handlers.some(function (t) {
            if (console.log("handler", t), t.route.test(e)) return console.log("handler.callback", t.callback), console.log("is func", r(t.callback)), t.callback(e), console.log("test", t.route.test(e)), !0;
          }) : null);
        } }, { key: "navigate", value: function value(e, t) {
          if (!this.started) return !1;t && !0 !== t || (t = { trigger: !!t }), e = this.getFragment(e || "");var n = this.root;"" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");var r = n + e;if (e = this.decodeFragment(e.replace(s, "")), this.fragment !== e) {
            if (this.fragment = e, this._usePushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, r);else {
              if (!this._wantsHashChange) return this.location.assign(r);if (this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                var i = this.iframe.contentWindow;t.replace || (i.document.open(), i.document.close()), this._updateHash(i.location, e, t.replace);
              }
            }return t.trigger ? this.loadUrl(e) : void 0;
          }
        } }, { key: "_updateHash", value: function value(e, t, n) {
          if (n) {
            var r = e.href.replace(/(javascript:|#).*$/, "");e.replace(r + "#" + t);
          } else e.hash = "#" + t;
        } }]), t;
    }();t.default = l;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = { TEXT: "text", JSON: "json" };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(0),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
      }return i(e, null, [{ key: "List", value: function value(e, t, n, r) {
          var i = n ? document.createElement("ol") : document.createElement("ul"),
              o = 0,
              a = void 0,
              u = void 0,
              s = void 0;if (e && i.setAttribute("id", e), r && e && i.setAttribute("data-" + r, e), t && Array.isArray(t)) for (a = t.length, o = 0; o < a; o++) {
            (u = document.createElement("li")).setAttribute("data-index", o), s = document.createTextNode(String(t[o])), u.appendChild(s), i.appendChild(u);
          }return i;
        } }, { key: "DescriptionList", value: function value(e, t, n) {
          var r = document.createElement("dl"),
              i = 0,
              o = void 0,
              u = void 0,
              s = void 0,
              l = void 0,
              c = void 0,
              f = void 0;if (e && r.setAttribute("id", e), n && e && r.setAttribute("data-" + n, e), t && a.default.isObject(t)) for (o = (c = Object.keys(t)).length, i = 0; i < o; i++) {
            s = document.createElement("dt"), l = document.createTextNode(String(c[i])), s.appendChild(l), r.appendChild(s), f = t[c[i]], u = document.createElement("dd"), l = document.createTextNode(String(f)), u.appendChild(l), r.appendChild(u);
          }return r;
        } }, { key: "DataList", value: function value(e, t, n) {
          var r = document.createElement("datalist"),
              i = 0,
              o = void 0,
              a = void 0;if (e && r.setAttribute("id", e), n && e && r.setAttribute("data-" + n, e), t && Array.isArray(t)) for (o = t.length, i = 0; i < o; i++) {
            (a = document.createElement("option")).value = String(t[i]), r.appendChild(a);
          }return r;
        } }, { key: "Input", value: function value(e, t, n, r, i, o) {
          if (!e) return null;var a = void 0,
              u = n || "",
              s = e,
              l = e.type;if ("object" === l) {
            if (Array.isArray(u)) {
              var c = 0,
                  f = u.length,
                  h = void 0,
                  d = void 0;for (a = document.createElement("select"), c = 0; c < f; c++) {
                (h = document.createElement("option")).setAttribute("value", u[c]), d = document.createTextNode(u[c]), h.appendChild(d), a.appendChild(h);
              }
            } else (a = document.createElement("textarea")).value = JSON.stringify(u);
          } else if ("boolean" === l) (a = document.createElement("input")).setAttribute("type", "checkbox"), !0 === u && a.setAttribute("checked", "checked"), a.value = u;else if ("number" === l || "integer" === l) (a = document.createElement("input")).setAttribute("type", "number"), a.value = u;else if ("string" === l && s.enum) {
            a = document.createElement("select");var p = 0,
                v = s.enum.length,
                y = void 0,
                b = void 0;for (p = 0; p < v; p++) {
              (y = document.createElement("option")).setAttribute("value", s.enum[p]), b = document.createTextNode(s.enum[p]), u === s.enum[p] && y.setAttribute("selected", "selected"), y.appendChild(b), a.appendChild(y);
            }
          } else "string" === l && "email" === s.format ? ((a = document.createElement("input")).setAttribute("type", "email"), a.value = u) : "string" === l && "uri" === s.format ? ((a = document.createElement("input")).setAttribute("type", "url"), a.value = u) : "string" === l && "date-time" === s.format ? ((a = document.createElement("input")).setAttribute("type", "datetime"), a.value = u) : ((a = document.createElement("input")).setAttribute("type", "text"), a.value = u);return "string" === l && s.pattern && a.setAttribute("pattern", s.pattern), s.minimum && a.setAttribute("min", s.minimum), s.maximum && a.setAttribute("max", s.maximum), "string" === l && s.minlength && a.setAttribute("minlength", s.minlength), "string" === l && s.maxlength && a.setAttribute("maxlength", s.maxlength), i && a.setAttribute("required", "true"), t && a.setAttribute("name", t), r && a.setAttribute("id", r), o && t && a.setAttribute("data-" + o, t), a;
        } }]), e;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(5),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function (e) {
      function t(e, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var r = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));return n && n.paginationConfiguration ? r.paginationConfiguration = n.paginationConfiguration : r.paginationConfiguration = { currentPageParam: "page", pageSizeParam: "per_page" }, n && n.pageSize ? r.pageSize = n.pageSize : r.pageSize = 20, n && n.currentPage ? r.currentPage = n.currentPage : r.currentPage = 1, r.totalPages = 1, r;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default), i(t, [{ key: "setPageSize", value: function value(e) {
          e && (this.pageSize = e), this.refresh();
        } }, { key: "setCurrentPage", value: function value(e) {
          e || (e = 1), this.currentPage = e, this.refresh();
        } }, { key: "setPaginationConfiguration", value: function value(e) {
          this.paginationConfiguration = e;
        } }, { key: "fetch", value: function value(e) {
          e = e || {};var n = this.paginationConfiguration,
              r = {};return r[n.currentPageParam] = this.currentPage, r[n.pageSizeParam] = this.pageSize, e.data = r, function e(t, n, r) {
            null === t && (t = Function.prototype);var i = Object.getOwnPropertyDescriptor(t, n);if (void 0 === i) {
              var o = Object.getPrototypeOf(t);return null === o ? void 0 : e(o, n, r);
            }if ("value" in i) return i.value;var a = i.get;return void 0 !== a ? a.call(r) : void 0;
          }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "fetch", this).call(this, e);
        } }, { key: "nextPage", value: function value() {
          this.currentPage < this.totalPages && (this.currentPage = this.currentPage + 1, this.refresh());
        } }, { key: "previousPage", value: function value() {
          this.currentPage > 0 && (this.currentPage = this.currentPage - 1, this.refresh());
        } }, { key: "goToPage", value: function value(e) {
          e && e < this.totalPages && e > 0 && (this.currentPage = e, this.refresh());
        } }, { key: "firstPage", value: function value() {
          this.currentPage = 1, this.refresh();
        } }, { key: "lastPage", value: function value() {
          this.currentPage = this.totalPages, this.refresh();
        } }, { key: "refresh", value: function value() {
          this.fetch();
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = function e(t, n, r) {
      null === t && (t = Function.prototype);var i = Object.getOwnPropertyDescriptor(t, n);if (void 0 === i) {
        var o = Object.getPrototypeOf(t);return null === o ? void 0 : e(o, n, r);
      }if ("value" in i) return i.value;var a = i.get;return void 0 !== a ? a.call(r) : void 0;
    },
        a = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }return t.default = e, t;
    }(n(0)),
        u = n(15),
        s = (r = u) && r.__esModule ? r : { default: r };var l = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n._defaultChannel = "augmentedChannel", n._defaultIdentifier = "augmentedIdentifier", n._channels = {}, n._colleagueMap = {}, n._subscriptions = {}, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, s.default), i(t, [{ key: "delegateEvents", value: function value(e) {
          o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "delegateEvents", this).call(this, e), this.subscriptions = {};
        } }, { key: "undelegateEvents", value: function value(e) {
          o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "undelegateEvents", this).call(this, e), this.unsetSubscriptions();
        } }, { key: "unsetSubscriptions", value: function value(e) {
          if ((e = e || this._subscriptions) && 0 !== e.length) {
            var t = 0,
                n = e.length;for (t = 0; t < n; t++) {
              var r = e[t];r.$once && (r = r.$once, !0), "string" == typeof r && (r = this[r]), this.unsubscribe(r.channel, r.$once || r, this);
            }
          }
        } }, { key: "observeColleague", value: function value(e, t, n, r) {
          e instanceof Presentation.Colleague && (n || (n = this._defaultChannel), e.setMediatorMessageQueue(this), this.subscribe(n, t, e, !1, r || this._defaultIdentifier));
        } }, { key: "observeColleagueAndTrigger", value: function value(e, t, n) {
          this.observeColleague(e, function () {
            e.trigger(t, arguments.length <= 0 ? void 0 : arguments[0]);
          }, t, n || this._defaultIdentifier);
        } }, { key: "_dismissMe", value: function value(e) {
          if (e instanceof Presentation.Colleague) {
            var t = this._colleagueMap[e],
                n = this._channels[t];this.unsubscribe(t, n.fn, e, n.identifier);
          }
        } }, { key: "dismissColleague", value: function value(e, t, n, r) {
          e instanceof Presentation.Colleague && (n || (n = this._defaultChannel), e.removeMediatorMessageQueue(), this.unsubscribe(n, t, e, r));
        } }, { key: "dismissColleagueTrigger", value: function value(e, t, n) {
          var r = n || this._defaultIdentifier;this.dismissColleague(e, function () {
            e.trigger(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1]);
          }, t, r);
        } }, { key: "subscribe", value: function value(e, t, n, r, i) {
          this._channels[e] || (this._channels[e] = []);var o = { fn: t, context: n || this, once: r, identifier: i || this._defaultIdentifier };this._channels[e].push(o), this._colleagueMap[n] = e, this.on(e, this.publish, n);
        } }, { key: "publish", value: function value(e) {
          if (e && this._channels[e]) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
              n[r - 1] = arguments[r];
            }var i = [].slice.call(n, 1),
                o = void 0,
                a = 0,
                u = this._channels[e].length;for (a = 0; a < u; a++) {
              (o = this._channels[e][a]) && (o.fn && o.fn.apply(o.context, i), o.once && (this.unsubscribe(e, o.fn, o.context, o.identifier), a--));
            }
          }
        } }, { key: "unsubscribe", value: function value(e, t, n, r) {
          if (this._channels[e]) {
            var i = r || this._defaultIdentifier,
                o = void 0,
                a = 0;for (a = 0; a < this._channels[e].length; a++) {
              (o = this._channels[e][a]) && o.identifier === i && o.context === n && (this._channels[e].splice(a, 1), a--, delete this._colleagueMap[o.context]);
            }
          }
        } }, { key: "subscribeOnce", value: function value(e, t, n, r) {
          this.subscribe(e, t, n, !0, r);
        } }, { key: "getColleagues", value: function value(e) {
          var t = this.getChannel(e);return t ? t.context : null;
        } }, { key: "getChannel", value: function value(e) {
          return e || (e = this._defaultChannel), this._channels[e] ? this._channels[e] : null;
        } }, { key: "subscriptions", get: function get() {
          return this._subscriptions;
        }, set: function set(e) {
          if (e && a.Utility.extend(this._subscriptions || {}, e), (e = e || this._subscriptions) && 0 !== e.length) {
            this.unsetSubscriptions(e);var t = 0,
                n = e.length;for (t = 0; t < n; t++) {
              var r = e[t],
                  i = !1;r.$once && (r = r.$once, i = !0), "string" == typeof r && (r = this[r]), this.subscribe(r.channel, r, this, i);
            }
          }
        } }, { key: "channels", get: function get() {
          return this._channels;
        } }, { key: "defaultChannel", get: function get() {
          return this.getChannel(this._defaultChannel);
        } }, { key: "defaultIdentifier", get: function get() {
          return this._defaultIdentifier;
        } }]), t;
    }();t.default = l;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = function (e) {
      var t = "";if (e && e.length > 0) {
        t += '<ul class="errors">';var n = e.length,
            r = 0,
            i = 0;for (r = 0; r < n; r++) {
          var o = e[r].errors.length;for (i = 0; i < o; i++) {
            t = t + "<li>" + e[r].errors[i] + "</li>";
          }
        }t += "</ul>";
      }return t;
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = {};r.GITHUB = Symbol("github"), r.SOLR = Symbol("solr"), r.DATABASE = Symbol("database"), t.default = r;
  }, function (e, t, n) {
    "use strict";
    var r = W(n(18)),
        i = W(n(9)),
        o = W(n(19)),
        a = W(n(28)),
        u = W(n(4)),
        s = W(n(10)),
        l = W(n(11)),
        c = W(n(33)),
        f = W(n(34)),
        h = W(n(21)),
        d = W(n(1)),
        p = W(n(35)),
        v = W(n(12)),
        y = W(n(13)),
        b = W(n(36)),
        _ = W(n(5)),
        m = W(n(22)),
        g = W(n(14)),
        O = W(n(15)),
        E = W(n(23)),
        w = W(n(2)),
        k = W(n(37)),
        j = W(n(38)),
        S = W(n(39)),
        P = W(n(40)),
        A = W(n(41)),
        T = W(n(42)),
        C = W(n(6)),
        M = W(n(43)),
        R = W(n(44)),
        x = W(n(45)),
        N = W(n(17)),
        I = W(n(46)),
        U = W(n(47)),
        L = W(n(3)),
        D = W(n(49)),
        B = W(n(50)),
        F = W(n(51)),
        $ = W(n(52)),
        z = W(n(53)),
        q = W(n(54)),
        H = W(n(55)),
        V = W(n(25)),
        G = W(n(57));function W(e) {
      return e && e.__esModule ? e : { default: e };
    }var J = { VERSION: "2.0.0-alpha.34" };J.History = o.default, J.Router = a.default, J.Widget = h.default, J.Dom = d.default, J.Application = f.default, J.LocalStorageFactory = v.default, J.NamespacedLocalStorage = b.default, J.LocalStorage = y.default, J.Model = u.default, J.Collection = _.default, J.LocalStorageCollection = g.default, J.PaginatedCollection = m.default, J.ViewController = p.default, J.AbstractView = r.default, J.View = i.default, J.Colleague = O.default, J.Mediator = E.default, J.DecoratorView = w.default, J.Component = {}, J.Component.AbstractToolbar = C.default, J.Component.Toolbar = M.default, J.Component.HamburgerMenu = R.default, J.Component.Menu = x.default, J.Component.DialogView = N.default, J.Component.ConfirmationDialogView = I.default, J.Component.AlertDialogView = U.default, J.Component.AutomaticTable = L.default, J.Component.BigDataTable = D.default, J.Component.EditableLocalStorageTable = $.default, J.Component.EditableTable = z.default, J.Component.EditableBigDataTable = B.default, J.Component.Spreadsheet = q.default, J.Component.LocalStorageTable = F.default, J.Component.AutomaticForm = H.default, J.Component.Header = S.default, J.Component.Fotter = P.default, J.Component.Card = A.default, J.Component.Article = T.default, J.Component.Manager = j.default, J.Component.NotificationCenter = k.default, J.sync = s.default, J.request = l.default, J.Request = {}, J.Request.Configuration = c.default, J.Pagination = {}, J.Pagination.PAGINATION_API_TYPE = V.default, J.Pagination.PaginationFactory = G.default, J.$ = d.default.query, e.exports = J;
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          r = "Expected a function",
          i = "__lodash_placeholder__",
          o = 1,
          a = 2,
          u = 4,
          s = 8,
          l = 16,
          c = 32,
          f = 64,
          h = 128,
          d = 512,
          p = 1 / 0,
          v = 9007199254740991,
          y = 1.7976931348623157e308,
          b = NaN,
          _ = [["ary", h], ["bind", o], ["bindKey", a], ["curry", s], ["curryRight", l], ["flip", d], ["partial", c], ["partialRight", f], ["rearg", 256]],
          m = "[object Function]",
          g = "[object GeneratorFunction]",
          O = "[object Symbol]",
          E = /^\s+|\s+$/g,
          w = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          k = /\{\n\/\* \[wrapped with (.+)\] \*/,
          j = /,? & /,
          S = /^[-+]0x[0-9a-f]+$/i,
          P = /^0b[01]+$/i,
          A = /^\[object .+?Constructor\]$/,
          T = /^0o[0-7]+$/i,
          C = /^(?:0|[1-9]\d*)$/,
          M = parseInt,
          R = "object" == (void 0 === t ? "undefined" : n(t)) && t && t.Object === Object && t,
          x = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
          N = R || x || Function("return this")();function I(e, t, n) {
        switch (n.length) {case 0:
            return e.call(t);case 1:
            return e.call(t, n[0]);case 2:
            return e.call(t, n[0], n[1]);case 3:
            return e.call(t, n[0], n[1], n[2]);}return e.apply(t, n);
      }function U(e, t) {
        return !!(e ? e.length : 0) && function (e, t, n) {
          if (t != t) return function (e, t, n, r) {
            var i = e.length,
                o = n + (r ? 1 : -1);for (; r ? o-- : ++o < i;) {
              if (t(e[o], o, e)) return o;
            }return -1;
          }(e, L, n);var r = n - 1,
              i = e.length;for (; ++r < i;) {
            if (e[r] === t) return r;
          }return -1;
        }(e, t, 0) > -1;
      }function L(e) {
        return e != e;
      }function D(e, t) {
        for (var n = -1, r = e.length, o = 0, a = []; ++n < r;) {
          var u = e[n];u !== t && u !== i || (e[n] = i, a[o++] = n);
        }return a;
      }var B,
          F,
          $,
          z = Function.prototype,
          q = Object.prototype,
          H = N["__core-js_shared__"],
          V = (B = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "")) ? "Symbol(src)_1." + B : "",
          G = z.toString,
          W = q.hasOwnProperty,
          J = q.toString,
          K = RegExp("^" + G.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          Y = Object.create,
          X = Math.max,
          Q = Math.min,
          Z = (F = ae(Object, "defineProperty"), ($ = ae.name) && $.length > 2 ? F : void 0);function ee(e) {
        return !(!ce(e) || V && V in e) && (function (e) {
          var t = ce(e) ? J.call(e) : "";return t == m || t == g;
        }(e) || function (e) {
          var t = !1;if (null != e && "function" != typeof e.toString) try {
            t = !!(e + "");
          } catch (e) {}return t;
        }(e) ? K : A).test(function (e) {
          if (null != e) {
            try {
              return G.call(e);
            } catch (e) {}try {
              return e + "";
            } catch (e) {}
          }return "";
        }(e));
      }function te(e) {
        return function () {
          var t = arguments;switch (t.length) {case 0:
              return new e();case 1:
              return new e(t[0]);case 2:
              return new e(t[0], t[1]);case 3:
              return new e(t[0], t[1], t[2]);case 4:
              return new e(t[0], t[1], t[2], t[3]);case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);}var n,
              r = ce(n = e.prototype) ? Y(n) : {},
              i = e.apply(r, t);return ce(i) ? i : r;
        };
      }function ne(e, t, n, r, i, u, c, f, p, v) {
        var y = t & h,
            b = t & o,
            _ = t & a,
            m = t & (s | l),
            g = t & d,
            O = _ ? void 0 : te(e);return function o() {
          for (var a = arguments.length, s = Array(a), l = a; l--;) {
            s[l] = arguments[l];
          }if (m) var h = oe(o),
              d = function (e, t) {
            for (var n = e.length, r = 0; n--;) {
              e[n] === t && r++;
            }return r;
          }(s, h);if (r && (s = function (e, t, n, r) {
            for (var i = -1, o = e.length, a = n.length, u = -1, s = t.length, l = X(o - a, 0), c = Array(s + l), f = !r; ++u < s;) {
              c[u] = t[u];
            }for (; ++i < a;) {
              (f || i < o) && (c[n[i]] = e[i]);
            }for (; l--;) {
              c[u++] = e[i++];
            }return c;
          }(s, r, i, m)), u && (s = function (e, t, n, r) {
            for (var i = -1, o = e.length, a = -1, u = n.length, s = -1, l = t.length, c = X(o - u, 0), f = Array(c + l), h = !r; ++i < c;) {
              f[i] = e[i];
            }for (var d = i; ++s < l;) {
              f[d + s] = t[s];
            }for (; ++a < u;) {
              (h || i < o) && (f[d + n[a]] = e[i++]);
            }return f;
          }(s, u, c, m)), a -= d, m && a < v) {
            var E = D(s, h);return re(e, t, ne, o.placeholder, n, s, E, f, p, v - a);
          }var w = b ? n : this,
              k = _ ? w[e] : e;return a = s.length, f ? s = function (e, t) {
            for (var n = e.length, r = Q(t.length, n), i = function (e, t) {
              var n = -1,
                  r = e.length;for (t || (t = Array(r)); ++n < r;) {
                t[n] = e[n];
              }return t;
            }(e); r--;) {
              var o = t[r];e[r] = ue(o, n) ? i[o] : void 0;
            }return e;
          }(s, f) : g && a > 1 && s.reverse(), y && p < a && (s.length = p), this && this !== N && this instanceof o && (k = O || te(k)), k.apply(w, s);
        };
      }function re(e, t, n, r, i, l, h, d, p, v) {
        var y = t & s;t |= y ? c : f, (t &= ~(y ? f : c)) & u || (t &= ~(o | a));var b = n(e, t, i, y ? l : void 0, y ? h : void 0, y ? void 0 : l, y ? void 0 : h, d, p, v);return b.placeholder = r, se(b, e, t);
      }function ie(e, t, n, i, u, h, d, p) {
        var v = t & a;if (!v && "function" != typeof e) throw new TypeError(r);var y = i ? i.length : 0;if (y || (t &= ~(c | f), i = u = void 0), d = void 0 === d ? d : X(de(d), 0), p = void 0 === p ? p : de(p), y -= u ? u.length : 0, t & f) {
          var b = i,
              _ = u;i = u = void 0;
        }var m = [e, t, n, i, u, b, _, h, d, p];if (e = m[0], t = m[1], n = m[2], i = m[3], u = m[4], !(p = m[9] = null == m[9] ? v ? 0 : e.length : X(m[9] - y, 0)) && t & (s | l) && (t &= ~(s | l)), t && t != o) g = t == s || t == l ? function (e, t, n) {
          var r = te(e);return function i() {
            for (var o = arguments.length, a = Array(o), u = o, s = oe(i); u--;) {
              a[u] = arguments[u];
            }var l = o < 3 && a[0] !== s && a[o - 1] !== s ? [] : D(a, s);return (o -= l.length) < n ? re(e, t, ne, i.placeholder, void 0, a, l, void 0, void 0, n - o) : I(this && this !== N && this instanceof i ? r : e, this, a);
          };
        }(e, t, p) : t != c && t != (o | c) || u.length ? ne.apply(void 0, m) : function (e, t, n, r) {
          var i = t & o,
              a = te(e);return function t() {
            for (var o = -1, u = arguments.length, s = -1, l = r.length, c = Array(l + u), f = this && this !== N && this instanceof t ? a : e; ++s < l;) {
              c[s] = r[s];
            }for (; u--;) {
              c[s++] = arguments[++o];
            }return I(f, i ? n : this, c);
          };
        }(e, t, n, i);else var g = function (e, t, n) {
          var r = t & o,
              i = te(e);return function t() {
            return (this && this !== N && this instanceof t ? i : e).apply(r ? n : this, arguments);
          };
        }(e, t, n);return se(g, e, t);
      }function oe(e) {
        return e.placeholder;
      }function ae(e, t) {
        var n = function (e, t) {
          return null == e ? void 0 : e[t];
        }(e, t);return ee(n) ? n : void 0;
      }function ue(e, t) {
        return !!(t = null == t ? v : t) && ("number" == typeof e || C.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }var se = Z ? function (e, t, n) {
        var r,
            i = t + "";return Z(e, "toString", { configurable: !0, enumerable: !1, value: (r = function (e, t) {
            var n = t.length,
                r = n - 1;return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(w, "{\n/* [wrapped with " + t + "] */\n");
          }(i, function (e, t) {
            return function (e, t) {
              for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e);) {}
            }(_, function (n) {
              var r = "_." + n[0];t & n[1] && !U(e, r) && e.push(r);
            }), e.sort();
          }(function (e) {
            var t = e.match(k);return t ? t[1].split(j) : [];
          }(i), n)), function () {
            return r;
          }) });
      } : function (e) {
        return e;
      };var le = function (e, t) {
        return t = X(void 0 === t ? e.length - 1 : t, 0), function () {
          for (var n = arguments, r = -1, i = X(n.length - t, 0), o = Array(i); ++r < i;) {
            o[r] = n[t + r];
          }r = -1;for (var a = Array(t + 1); ++r < t;) {
            a[r] = n[r];
          }return a[t] = o, I(e, this, a);
        };
      }(function (e, t, n) {
        var r = o;if (n.length) {
          var i = D(n, oe(le));r |= c;
        }return ie(e, r, t, n, i);
      });function ce(e) {
        var t = void 0 === e ? "undefined" : n(e);return !!e && ("object" == t || "function" == t);
      }function fe(e) {
        return "symbol" == (void 0 === e ? "undefined" : n(e)) || function (e) {
          return !!e && "object" == (void 0 === e ? "undefined" : n(e));
        }(e) && J.call(e) == O;
      }function he(e) {
        return e ? (e = function (e) {
          if ("number" == typeof e) return e;if (fe(e)) return b;if (ce(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;e = ce(t) ? t + "" : t;
          }if ("string" != typeof e) return 0 === e ? e : +e;e = e.replace(E, "");var n = P.test(e);return n || T.test(e) ? M(e.slice(2), n ? 2 : 8) : S.test(e) ? b : +e;
        }(e)) === p || e === -p ? (e < 0 ? -1 : 1) * y : e == e ? e : 0 : 0 === e ? e : 0;
      }function de(e) {
        var t = he(e),
            n = t % 1;return t == t ? n ? t - n : t : 0;
      }le.placeholder = {}, e.exports = le;
    }).call(t, n(8));
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(0)),
        o = a(n(19));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = n(29),
        s = n(30),
        l = /\((.*?)\)/g,
        c = /(\(\?)?:\w+/g,
        f = /\*\w+/g,
        h = /[\-{}\[\]+?.,\\\^$|#\s]/g,
        d = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return e || (e = {}), e.routes && (n.routes = e.routes), n.history = new o.default(), n._bindRoutes(), n.initialize(e), n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default.Object), r(t, [{ key: "loadView", value: function value(e) {
          this.cleanup(), this._view = e, this._view.render(), this._view.delegateEvents();
        } }, { key: "cleanup", value: function value() {
          this._view && (this._view.cleanup && this._view.cleanup(), this._view.remove(), this._view = null);
        } }, { key: "initialize", value: function value(e) {} }, { key: "route", value: function value(e, t, n) {
          var r = this;s(e) || (e = this._routeToRegExp(e)), i.default.isFunction(t) && (n = t, t = ""), n || (n = this[t]);var o = this;return this.history.route(e, function (i) {
            var a = o._extractParameters(e, i);!1 !== o.execute(n, a, t) && (o.trigger.apply(o, ["route:" + t].concat(a)), o.trigger("route", t, a), r.history.trigger("route", o, t, a));
          }), this;
        } }, { key: "execute", value: function value(e, t, n) {
          e && e.apply(this, t);
        } }, { key: "navigate", value: function value(e, t) {
          return this.history.navigate(e, t), { routes: this.routes };
        } }, { key: "startHistory", value: function value(e) {
          return this.history.started || this.history.start(e), !0;
        } }, { key: "_bindRoutes", value: function value() {
          if (this.routes) {
            this.routes = i.default.result(this, "routes");for (var e = void 0, t = Object.keys(this.routes); null != (e = t.pop());) {
              this.route(e, this.routes[e]);
            }
          }
        } }, { key: "_routeToRegExp", value: function value(e) {
          return e = e.replace(h, "\\$&").replace(l, "(?:$1)?").replace(c, function (e, t) {
            return t ? e : "([^/?]+)";
          }).replace(f, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$");
        } }, { key: "_extractParameters", value: function value(e, t) {
          var n = e.exec(t).slice(1);return u(n, function (e, t) {
            return t === n.length - 1 ? e || null : e ? decodeURIComponent(e) : null;
          });
        } }]), t;
    }();t.default = d;
  }, function (e, t, n) {
    "use strict";
    (function (e, n) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          i = 200,
          o = "Expected a function",
          a = "__lodash_hash_undefined__",
          u = 1,
          s = 2,
          l = 1 / 0,
          c = 9007199254740991,
          f = "[object Arguments]",
          h = "[object Array]",
          d = "[object Boolean]",
          p = "[object Date]",
          v = "[object Error]",
          y = "[object Function]",
          b = "[object GeneratorFunction]",
          _ = "[object Map]",
          m = "[object Number]",
          g = "[object Object]",
          O = "[object RegExp]",
          E = "[object Set]",
          w = "[object String]",
          k = "[object Symbol]",
          j = "[object ArrayBuffer]",
          S = "[object DataView]",
          P = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          A = /^\w*$/,
          T = /^\./,
          C = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          M = /\\(\\)?/g,
          R = /^\[object .+?Constructor\]$/,
          x = /^(?:0|[1-9]\d*)$/,
          N = {};N["[object Float32Array]"] = N["[object Float64Array]"] = N["[object Int8Array]"] = N["[object Int16Array]"] = N["[object Int32Array]"] = N["[object Uint8Array]"] = N["[object Uint8ClampedArray]"] = N["[object Uint16Array]"] = N["[object Uint32Array]"] = !0, N[f] = N[h] = N[j] = N[d] = N[S] = N[p] = N[v] = N[y] = N[_] = N[m] = N[g] = N[O] = N[E] = N[w] = N["[object WeakMap]"] = !1;var I = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e,
          U = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
          L = I || U || Function("return this")(),
          D = "object" == r(t) && t && !t.nodeType && t,
          B = D && "object" == r(n) && n && !n.nodeType && n,
          F = B && B.exports === D && I.process,
          $ = function () {
        try {
          return F && F.binding("util");
        } catch (e) {}
      }(),
          z = $ && $.isTypedArray;function q(e, t) {
        for (var n = -1, r = e ? e.length : 0, i = Array(r); ++n < r;) {
          i[n] = t(e[n], n, e);
        }return i;
      }function H(e, t) {
        for (var n = -1, r = e ? e.length : 0; ++n < r;) {
          if (t(e[n], n, e)) return !0;
        }return !1;
      }function V(e) {
        var t = !1;if (null != e && "function" != typeof e.toString) try {
          t = !!(e + "");
        } catch (e) {}return t;
      }function G(e) {
        var t = -1,
            n = Array(e.size);return e.forEach(function (e, r) {
          n[++t] = [r, e];
        }), n;
      }function W(e) {
        var t = -1,
            n = Array(e.size);return e.forEach(function (e) {
          n[++t] = e;
        }), n;
      }var J,
          K,
          Y,
          X = Array.prototype,
          Q = Function.prototype,
          Z = Object.prototype,
          ee = L["__core-js_shared__"],
          te = (J = /[^.]+$/.exec(ee && ee.keys && ee.keys.IE_PROTO || "")) ? "Symbol(src)_1." + J : "",
          ne = Q.toString,
          re = Z.hasOwnProperty,
          ie = Z.toString,
          oe = RegExp("^" + ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          ae = L.Symbol,
          ue = L.Uint8Array,
          se = Z.propertyIsEnumerable,
          le = X.splice,
          ce = (K = Object.keys, Y = Object, function (e) {
        return K(Y(e));
      }),
          fe = Ge(L, "DataView"),
          he = Ge(L, "Map"),
          de = Ge(L, "Promise"),
          pe = Ge(L, "Set"),
          ve = Ge(L, "WeakMap"),
          ye = Ge(Object, "create"),
          be = et(fe),
          _e = et(he),
          me = et(de),
          ge = et(pe),
          Oe = et(ve),
          Ee = ae ? ae.prototype : void 0,
          we = Ee ? Ee.valueOf : void 0,
          ke = Ee ? Ee.toString : void 0;function je(e) {
        var t = -1,
            n = e ? e.length : 0;for (this.clear(); ++t < n;) {
          var r = e[t];this.set(r[0], r[1]);
        }
      }function Se(e) {
        var t = -1,
            n = e ? e.length : 0;for (this.clear(); ++t < n;) {
          var r = e[t];this.set(r[0], r[1]);
        }
      }function Pe(e) {
        var t = -1,
            n = e ? e.length : 0;for (this.clear(); ++t < n;) {
          var r = e[t];this.set(r[0], r[1]);
        }
      }function Ae(e) {
        var t = -1,
            n = e ? e.length : 0;for (this.__data__ = new Pe(); ++t < n;) {
          this.add(e[t]);
        }
      }function Te(e) {
        this.__data__ = new Se(e);
      }function Ce(e, t) {
        var n = it(e) || rt(e) ? function (e, t) {
          for (var n = -1, r = Array(e); ++n < e;) {
            r[n] = t(n);
          }return r;
        }(e.length, String) : [],
            r = n.length,
            i = !!r;for (var o in e) {
          !t && !re.call(e, o) || i && ("length" == o || Je(o, r)) || n.push(o);
        }return n;
      }function Me(e, t) {
        for (var n = e.length; n--;) {
          if (nt(e[n][0], t)) return n;
        }return -1;
      }je.prototype.clear = function () {
        this.__data__ = ye ? ye(null) : {};
      }, je.prototype.delete = function (e) {
        return this.has(e) && delete this.__data__[e];
      }, je.prototype.get = function (e) {
        var t = this.__data__;if (ye) {
          var n = t[e];return n === a ? void 0 : n;
        }return re.call(t, e) ? t[e] : void 0;
      }, je.prototype.has = function (e) {
        var t = this.__data__;return ye ? void 0 !== t[e] : re.call(t, e);
      }, je.prototype.set = function (e, t) {
        return this.__data__[e] = ye && void 0 === t ? a : t, this;
      }, Se.prototype.clear = function () {
        this.__data__ = [];
      }, Se.prototype.delete = function (e) {
        var t = this.__data__,
            n = Me(t, e);return !(n < 0 || (n == t.length - 1 ? t.pop() : le.call(t, n, 1), 0));
      }, Se.prototype.get = function (e) {
        var t = this.__data__,
            n = Me(t, e);return n < 0 ? void 0 : t[n][1];
      }, Se.prototype.has = function (e) {
        return Me(this.__data__, e) > -1;
      }, Se.prototype.set = function (e, t) {
        var n = this.__data__,
            r = Me(n, e);return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
      }, Pe.prototype.clear = function () {
        this.__data__ = { hash: new je(), map: new (he || Se)(), string: new je() };
      }, Pe.prototype.delete = function (e) {
        return Ve(this, e).delete(e);
      }, Pe.prototype.get = function (e) {
        return Ve(this, e).get(e);
      }, Pe.prototype.has = function (e) {
        return Ve(this, e).has(e);
      }, Pe.prototype.set = function (e, t) {
        return Ve(this, e).set(e, t), this;
      }, Ae.prototype.add = Ae.prototype.push = function (e) {
        return this.__data__.set(e, a), this;
      }, Ae.prototype.has = function (e) {
        return this.__data__.has(e);
      }, Te.prototype.clear = function () {
        this.__data__ = new Se();
      }, Te.prototype.delete = function (e) {
        return this.__data__.delete(e);
      }, Te.prototype.get = function (e) {
        return this.__data__.get(e);
      }, Te.prototype.has = function (e) {
        return this.__data__.has(e);
      }, Te.prototype.set = function (e, t) {
        var n = this.__data__;if (n instanceof Se) {
          var r = n.__data__;if (!he || r.length < i - 1) return r.push([e, t]), this;n = this.__data__ = new Pe(r);
        }return n.set(e, t), this;
      };var Re,
          xe,
          Ne = (Re = function Re(e, t) {
        return e && Ie(e, t, ht);
      }, function (e, t) {
        if (null == e) return e;if (!ot(e)) return Re(e, t);for (var n = e.length, r = xe ? n : -1, i = Object(e); (xe ? r-- : ++r < n) && !1 !== t(i[r], r, i);) {}return e;
      }),
          Ie = function (e) {
        return function (t, n, r) {
          for (var i = -1, o = Object(t), a = r(t), u = a.length; u--;) {
            var s = a[e ? u : ++i];if (!1 === n(o[s], s, o)) break;
          }return t;
        };
      }();function Ue(e, t) {
        for (var n = 0, r = (t = Ke(t, e) ? [t] : qe(t)).length; null != e && n < r;) {
          e = e[Ze(t[n++])];
        }return n && n == r ? e : void 0;
      }function Le(e, t) {
        return null != e && t in Object(e);
      }function De(e, t, n, r, i) {
        return e === t || (null == e || null == t || !st(e) && !lt(t) ? e != e && t != t : function (e, t, n, r, i, o) {
          var a = it(e),
              l = it(t),
              c = h,
              y = h;a || (c = (c = We(e)) == f ? g : c);l || (y = (y = We(t)) == f ? g : y);var b = c == g && !V(e),
              P = y == g && !V(t),
              A = c == y;if (A && !b) return o || (o = new Te()), a || ft(e) ? He(e, t, n, r, i, o) : function (e, t, n, r, i, o, a) {
            switch (n) {case S:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;e = e.buffer, t = t.buffer;case j:
                return !(e.byteLength != t.byteLength || !r(new ue(e), new ue(t)));case d:case p:case m:
                return nt(+e, +t);case v:
                return e.name == t.name && e.message == t.message;case O:case w:
                return e == t + "";case _:
                var l = G;case E:
                var c = o & s;if (l || (l = W), e.size != t.size && !c) return !1;var f = a.get(e);if (f) return f == t;o |= u, a.set(e, t);var h = He(l(e), l(t), r, i, o, a);return a.delete(e), h;case k:
                if (we) return we.call(e) == we.call(t);}return !1;
          }(e, t, c, n, r, i, o);if (!(i & s)) {
            var T = b && re.call(e, "__wrapped__"),
                C = P && re.call(t, "__wrapped__");if (T || C) {
              var M = T ? e.value() : e,
                  R = C ? t.value() : t;return o || (o = new Te()), n(M, R, r, i, o);
            }
          }if (!A) return !1;return o || (o = new Te()), function (e, t, n, r, i, o) {
            var a = i & s,
                u = ht(e),
                l = u.length,
                c = ht(t).length;if (l != c && !a) return !1;for (var f = l; f--;) {
              var h = u[f];if (!(a ? h in t : re.call(t, h))) return !1;
            }var d = o.get(e);if (d && o.get(t)) return d == t;var p = !0;o.set(e, t), o.set(t, e);for (var v = a; ++f < l;) {
              h = u[f];var y = e[h],
                  b = t[h];if (r) var _ = a ? r(b, y, h, t, e, o) : r(y, b, h, e, t, o);if (!(void 0 === _ ? y === b || n(y, b, r, i, o) : _)) {
                p = !1;break;
              }v || (v = "constructor" == h);
            }if (p && !v) {
              var m = e.constructor,
                  g = t.constructor;m != g && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof g && g instanceof g) && (p = !1);
            }return o.delete(e), o.delete(t), p;
          }(e, t, n, r, i, o);
        }(e, t, De, n, r, i));
      }function Be(e) {
        return !(!st(e) || te && te in e) && (at(e) || V(e) ? oe : R).test(et(e));
      }function Fe(e) {
        return "function" == typeof e ? e : null == e ? dt : "object" == (void 0 === e ? "undefined" : r(e)) ? it(e) ? function (e, t) {
          if (Ke(e) && Ye(t)) return Xe(Ze(e), t);return function (n) {
            var r = function (e, t, n) {
              var r = null == e ? void 0 : Ue(e, t);return void 0 === r ? n : r;
            }(n, e);return void 0 === r && r === t ? function (e, t) {
              return null != e && function (e, t, n) {
                var r,
                    i = -1,
                    o = (t = Ke(t, e) ? [t] : qe(t)).length;for (; ++i < o;) {
                  var a = Ze(t[i]);if (!(r = null != e && n(e, a))) break;e = e[a];
                }if (r) return r;return !!(o = e ? e.length : 0) && ut(o) && Je(a, o) && (it(e) || rt(e));
              }(e, t, Le);
            }(n, e) : De(t, r, void 0, u | s);
          };
        }(e[0], e[1]) : function (e) {
          var t = function (e) {
            var t = ht(e),
                n = t.length;for (; n--;) {
              var r = t[n],
                  i = e[r];t[n] = [r, i, Ye(i)];
            }return t;
          }(e);if (1 == t.length && t[0][2]) return Xe(t[0][0], t[0][1]);return function (n) {
            return n === e || function (e, t, n, r) {
              var i = n.length,
                  o = i,
                  a = !r;if (null == e) return !o;for (e = Object(e); i--;) {
                var l = n[i];if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
              }for (; ++i < o;) {
                var c = (l = n[i])[0],
                    f = e[c],
                    h = l[1];if (a && l[2]) {
                  if (void 0 === f && !(c in e)) return !1;
                } else {
                  var d = new Te();if (r) var p = r(f, h, c, e, t, d);if (!(void 0 === p ? De(h, f, r, u | s, d) : p)) return !1;
                }
              }return !0;
            }(n, e, t);
          };
        }(e) : Ke(t = e) ? (n = Ze(t), function (e) {
          return null == e ? void 0 : e[n];
        }) : function (e) {
          return function (t) {
            return Ue(t, e);
          };
        }(t);var t, n;
      }function $e(e) {
        if (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || Z, t !== r) return ce(e);var t,
            n,
            r,
            i = [];for (var o in Object(e)) {
          re.call(e, o) && "constructor" != o && i.push(o);
        }return i;
      }function ze(e, t) {
        var n = -1,
            r = ot(e) ? Array(e.length) : [];return Ne(e, function (e, i, o) {
          r[++n] = t(e, i, o);
        }), r;
      }function qe(e) {
        return it(e) ? e : Qe(e);
      }function He(e, t, n, r, i, o) {
        var a = i & s,
            l = e.length,
            c = t.length;if (l != c && !(a && c > l)) return !1;var f = o.get(e);if (f && o.get(t)) return f == t;var h = -1,
            d = !0,
            p = i & u ? new Ae() : void 0;for (o.set(e, t), o.set(t, e); ++h < l;) {
          var v = e[h],
              y = t[h];if (r) var b = a ? r(y, v, h, t, e, o) : r(v, y, h, e, t, o);if (void 0 !== b) {
            if (b) continue;d = !1;break;
          }if (p) {
            if (!H(t, function (e, t) {
              if (!p.has(t) && (v === e || n(v, e, r, i, o))) return p.add(t);
            })) {
              d = !1;break;
            }
          } else if (v !== y && !n(v, y, r, i, o)) {
            d = !1;break;
          }
        }return o.delete(e), o.delete(t), d;
      }function Ve(e, t) {
        var n,
            i,
            o = e.__data__;return ("string" == (i = void 0 === (n = t) ? "undefined" : r(n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
      }function Ge(e, t) {
        var n = function (e, t) {
          return null == e ? void 0 : e[t];
        }(e, t);return Be(n) ? n : void 0;
      }var We = function We(e) {
        return ie.call(e);
      };function Je(e, t) {
        return !!(t = null == t ? c : t) && ("number" == typeof e || x.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }function Ke(e, t) {
        if (it(e)) return !1;var n = void 0 === e ? "undefined" : r(e);return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ct(e)) || A.test(e) || !P.test(e) || null != t && e in Object(t);
      }function Ye(e) {
        return e == e && !st(e);
      }function Xe(e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      }(fe && We(new fe(new ArrayBuffer(1))) != S || he && We(new he()) != _ || de && "[object Promise]" != We(de.resolve()) || pe && We(new pe()) != E || ve && "[object WeakMap]" != We(new ve())) && (We = function We(e) {
        var t = ie.call(e),
            n = t == g ? e.constructor : void 0,
            r = n ? et(n) : void 0;if (r) switch (r) {case be:
            return S;case _e:
            return _;case me:
            return "[object Promise]";case ge:
            return E;case Oe:
            return "[object WeakMap]";}return t;
      });var Qe = tt(function (e) {
        var t;e = null == (t = e) ? "" : function (e) {
          if ("string" == typeof e) return e;if (ct(e)) return ke ? ke.call(e) : "";var t = e + "";return "0" == t && 1 / e == -l ? "-0" : t;
        }(t);var n = [];return T.test(e) && n.push(""), e.replace(C, function (e, t, r, i) {
          n.push(r ? i.replace(M, "$1") : t || e);
        }), n;
      });function Ze(e) {
        if ("string" == typeof e || ct(e)) return e;var t = e + "";return "0" == t && 1 / e == -l ? "-0" : t;
      }function et(e) {
        if (null != e) {
          try {
            return ne.call(e);
          } catch (e) {}try {
            return e + "";
          } catch (e) {}
        }return "";
      }function tt(e, t) {
        if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(o);var n = function n() {
          var r = arguments,
              i = t ? t.apply(this, r) : r[0],
              o = n.cache;if (o.has(i)) return o.get(i);var a = e.apply(this, r);return n.cache = o.set(i, a), a;
        };return n.cache = new (tt.Cache || Pe)(), n;
      }function nt(e, t) {
        return e === t || e != e && t != t;
      }function rt(e) {
        return function (e) {
          return lt(e) && ot(e);
        }(e) && re.call(e, "callee") && (!se.call(e, "callee") || ie.call(e) == f);
      }tt.Cache = Pe;var it = Array.isArray;function ot(e) {
        return null != e && ut(e.length) && !at(e);
      }function at(e) {
        var t = st(e) ? ie.call(e) : "";return t == y || t == b;
      }function ut(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= c;
      }function st(e) {
        var t = void 0 === e ? "undefined" : r(e);return !!e && ("object" == t || "function" == t);
      }function lt(e) {
        return !!e && "object" == (void 0 === e ? "undefined" : r(e));
      }function ct(e) {
        return "symbol" == (void 0 === e ? "undefined" : r(e)) || lt(e) && ie.call(e) == k;
      }var ft = z ? function (e) {
        return function (t) {
          return e(t);
        };
      }(z) : function (e) {
        return lt(e) && ut(e.length) && !!N[ie.call(e)];
      };function ht(e) {
        return ot(e) ? Ce(e) : $e(e);
      }function dt(e) {
        return e;
      }n.exports = function (e, t) {
        return (it(e) ? q : ze)(e, Fe(t));
      };
    }).call(t, n(8), n(7)(e));
  }, function (e, t, n) {
    "use strict";
    (function (e, n) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          i = "[object RegExp]",
          o = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e,
          a = "object" == r(t) && t && !t.nodeType && t,
          u = a && "object" == r(n) && n && !n.nodeType && n,
          s = u && u.exports === a && o.process,
          l = function () {
        try {
          return s && s.binding("util");
        } catch (e) {}
      }(),
          c = l && l.isRegExp;var f = Object.prototype.toString;var h,
          d = c ? (h = c, function (e) {
        return h(e);
      }) : function (e) {
        return function (e) {
          var t = void 0 === e ? "undefined" : r(e);return !!e && ("object" == t || "function" == t);
        }(e) && f.call(e) == i;
      };n.exports = d;
    }).call(t, n(8), n(7)(e));
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = { TYPE: "Content-Type", TEXT: "text/plain", APPLICATION: "application/json", ACCEPT: "Accept", CACHE: "Cache-Control", NO_CACHE: "no-cache", ALLOW_ORIGINS: "Access-Control-Allow-Origin", ALLOW_METHODS: "Access-Control-Allow-Methods", AUTH: "Authorization" };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = { url: "localhost", contentType: "text/plain", dataType: "text", method: "GET", cache: !0, timeout: 0, crossDomain: !1, xhrFields: {}, withCredentials: !1, user: null, password: null, allowOrigins: "", allowMethods: null, headers: {}, success: null, error: null, complete: null, beforeSend: null, mock: !1 };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(0),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n._router = null, n._mediators = [], n._stylesheets = [], n._breadcrumb = new a.default.Utility.Stack(), n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default.Application), i(t, [{ key: "initialize", value: function value() {
          this._stylesheets && this._stylesheets.length > 0 && this.attachStylesheets();var e = this.router;return e && e.startHistory(), !0;
        } }, { key: "registerMediator", value: function value(e) {
          e && this._mediators.push(e);
        } }, { key: "deregisterMediator", value: function value(e) {
          if (e) {
            var t = this._mediators.indexOf(e);-1 != t && this._mediators.splice(t, 1);
          }
        } }, { key: "registerStylesheet", value: function value(e) {
          e && this._stylesheets.push(e);
        } }, { key: "deregisterStylesheet", value: function value(e) {
          e && this._stylesheets.splice(this._stylesheets.indexOf(e), 1);
        } }, { key: "attachStylesheets", value: function value() {
          var e = document.getElementsByTagName("head")[0],
              t = document.createDocumentFragment(),
              n = this._stylesheets.length,
              r = 0,
              i = null;for (r = 0; r < n; r++) {
            (i = document.createElement("link")).type = "text/css", i.rel = "stylesheet", i.href = this._stylesheets[r], t.appendChild(i);
          }e.appendChild(t);
        } }, { key: "replaceStylesheets", value: function value() {
          var e = 0;for (e = document.getElementsByTagName("link").length - 1; e >= 0; e--) {
            element[e].parentNode.removeChild(element[e]);
          }this.attachStylesheets();
        } }, { key: "setCurrentBreadcrumb", value: function value(e, t) {
          this._breadcrumb.size() > 1 && this._breadcrumb.pop(), this._breadcrumb.push({ uri: e, name: t });
        } }, { key: "getCurrentBreadcrumb", value: function value() {
          return this._breadcrumb.peek();
        } }, { key: "router", get: function get() {
          return this._router;
        }, set: function set(e) {
          this._router = e;
        } }, { key: "mediators", get: function get() {
          return this._mediators;
        } }, { key: "stylesheets", get: function get() {
          return this._stylesheets;
        } }, { key: "breadcrumbs", get: function get() {
          return this._breadcrumb.toArray();
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(0),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n._views = [], n._permissions = { include: [], exclude: [] }, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default.Object), i(t, [{ key: "initialize", value: function value() {} }, { key: "render", value: function value() {} }, { key: "remove", value: function value() {} }, { key: "manageView", value: function value(e) {
          this._views.push(e);
        } }, { key: "removeAllViews", value: function value() {
          var e = 0,
              t = this._views.length;for (e = 0; e < t; e++) {
            this._views[e].remove();
          }this._views.splice(0);
        } }, { key: "addPermission", value: function value(e, t) {
          (t || (t = !1), null === e || Array.isArray(e)) || (t ? this._permissions.exclude : this._permissions.include).push(e);
        } }, { key: "removePermission", value: function value(e, t) {
          if (t || (t = !1), null !== e && !Array.isArray(e)) {
            var n = t ? this._permissions.exclude : this._permissions.include;n.splice(n.indexOf(e), 1);
          }
        } }, { key: "clearPermissions", value: function value() {
          this._permissions = { include: [], exclude: [] };
        } }, { key: "matchesPermission", value: function value(e, t) {
          return t || (t = !1), -1 !== (t ? this._permissions.exclude : this._permissions.include).indexOf(e);
        } }, { key: "canDisplay", value: function value() {
          return !0;
        } }, { key: "views", get: function get() {
          return this._views;
        } }, { key: "permissions", set: function set(e) {
          this._permissions = e;
        }, get: function get() {
          return this._permissions;
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = u(n(0)),
        o = u(n(13)),
        a = u(n(12));function u(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = function (e) {
      function t(e, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var r = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return r._ls = a.default.getStorage(e), r._myStore = new i.default.Utility.Map(), r.namespace = n, r.isSupported() && r.namespace && !e ? r._ls.setItem(r.namespace, JSON.stringify(r._myStore.toJSON())) : r.isSupported() && r.namespace && e && r.getItem(r.namespace), r;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), r(t, [{ key: "isSupported", value: function value() {
          return this._ls && this._ls.isSupported();
        } }, { key: "getItem", value: function value(e) {
          var t = {};try {
            t = JSON.parse(this._ls.getItem(this.namespace));
          } catch (e) {
            return null;
          }this._myStore.clear(), this._myStore.marshall(t);var n = this._myStore.get(e);if (n) {
            var r = void 0;try {
              r = JSON.parse(n);
            } catch (e) {
              r = n;
            }return r;
          }return null;
        } }, { key: "setItem", value: function value(e, t) {
          this._myStore || (this._myStore = new i.default.Utility.Map()), this._myStore.set(e, t), this._ls.setItem(namespace, JSON.stringify(this._myStore.toJSON()));
        } }, { key: "removeItem", value: function value(e) {
          this._myStore.remove(e), this._ls.setItem(namespace, JSON.stringify(this._myStore.toJSON()));
        } }, { key: "clear", value: function value() {
          this._myStore.clear(), this._ls.setItem(namespace, JSON.stringify(this._myStore.toJSON()));
        } }, { key: "key", value: function value(e) {
          return this._myStore.key(e);
        } }, { key: "length", value: function value() {
          return this._myStore.size();
        } }, { key: "getNamespacedItems", value: function value() {
          return this._myStore;
        } }]), t;
    }();t.default = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(9),
        o = (r = i) && r.__esModule ? r : { default: r };var a = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), t;
    }();t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(23),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default), i(t, [{ key: "manageComponent", value: function value(e) {
          return this.observeColleagueAndTrigger(e, e.name, e.name);
        } }, { key: "unmanageComponent", value: function value(e) {
          return this.dismissColleagueTrigger(e, e.name, e.name);
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(2),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return e && e.title ? n._title = e.title : n._title = "", e && e.subTitle ? n._subTitle = e.subTitle : n._subTitle = "", n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default), i(t, [{ key: "title", set: function set(e) {
          this._title = e;
        }, get: function get() {
          return this._title;
        } }, { key: "subTitle", set: function set(e) {
          this._subTitle = e;
        }, get: function get() {
          return this._subTitle;
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = n(2),
        a = (r = o) && r.__esModule ? r : { default: r };var u = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return e && e.body ? n._body = e.body : n._body = "", n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default), i(t, [{ key: "body", set: function set(e) {
          this._body = e;
        }, get: function get() {
          return this._body;
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(2)),
        o = a(n(1));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.name || (n.name = "card"), e && e.body ? n._body = e.body : n._body = "", e && e.style ? n._style = e.style : n._style = "card", n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default), r(t, [{ key: "_template", value: function value() {
          return '<div class="' + this._style + '">' + this._body + "</div>";
        } }, { key: "render", value: function value() {
          return this.el && (o.default.setValue(this.el, this._template()), this.delegateEvents()), this;
        } }, { key: "style", set: function set(e) {
          this._style = e;
        }, get: function get() {
          return this._style;
        } }, { key: "body", set: function set(e) {
          this._body = e;
        }, get: function get() {
          return this._body;
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(2)),
        o = a(n(1));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = "article",
        s = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.name || (e.name = u), e.tagName = u;var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return e && e.header ? n._header = e.header : n._header = "", e && e.headerEl ? n._headerEl = e.headerEl : n._headerEl = "", e && e.body ? n._body = e.body : n._body = "", e && e.footer ? n._footer = e.footer : n._footer = "", e && e.footerEl ? n._footerEl = e.footerEl : n._footerEl = "", e && e.sections ? n._sections = e.sections : n._sections = [], n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default), r(t, [{ key: "_formatSections", value: function value() {
          var e = this._sections.length,
              t = "",
              n = 0;for (n = 0; n < e; n++) {
            t += this._formatSection(this._sections[n]);
          }return t;
        } }, { key: "_formatSection", value: function value(e) {
          var t = "";if (e && (e.body || e.id || e.class)) {
            var n = e.class ? ' class="' + e.class + '"' : "";t = "<section" + (e.id ? ' id="' + e.id + '"' : "") + n + ">" + (e.body ? e.body : "") + "</section>";
          }return t;
        } }, { key: "addSection", value: function value(e) {
          this._sections.push(e);
        } }, { key: "clearSections", value: function value() {
          this._sections.splice(0, this._sections.length);
        } }, { key: "render", value: function value() {
          return this.el && (o.default.setValue(this.el, this._template()), this.delegateEvents()), this;
        } }, { key: "_template", value: function value() {
          var e = "";if (this._header) {
            var t = "";this._headerEl && (t = ' id="' + this._headerEl + '"'), e = "<header" + t + ">" + this._header + "</header>";
          }var n = "";if (this._footer) {
            var r = "";this._footerEl && (r = ' id="' + this._footerEl + '"'), n = "<footer" + r + ">" + this._footer + "</footer>";
          }var i = "";return this._body && (i = this._bodyEl ? '<div id="' + this._bodyEl + '">' + this._body + "</div>" : "" + this._body), "" + e + i + this._formatSections() + n;
        } }, { key: "header", set: function set(e) {
          this._header = e;
        }, get: function get() {
          return this._header;
        } }, { key: "footer", set: function set(e) {
          this._footer = e;
        }, get: function get() {
          return this._footer;
        } }, { key: "body", set: function set(e) {
          this._body = e;
        }, get: function get() {
          return this._body;
        } }, { key: "sections", set: function set(e) {
          e && Array.isArray(e) && (this._sections = e);
        }, get: function get() {
          return this._sections;
        } }]), t;
    }();t.default = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(6)),
        o = a(n(1));a(n(16));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default), r(t, [{ key: "render", value: function value() {
          if (!this.isInitalized) return this;if (this.template = null, !this.el) return this;var e = o.default.selector(this.el);return e && (o.default.addClass(e, "toolbar"), e.setAttribute("data-" + this.name, "toolbar"), e.innerHTML = buildToolbarItems(this.name, this.menuItems)), this.delegateEvents(), this.syncAllBoundElements(), this;
        } }]), t;
    }();t.default = u;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = u(n(16)),
        o = u(n(1)),
        a = u(n(6));function u(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, a.default), r(t, [{ key: "render", value: function value() {
          if (!this.isInitalized) return this;if (this.template = null, !this.el) return this;var e,
              t,
              n = o.default.selector(this.el);return n && (o.default.addClass(n, "wrapper"), n.setAttribute("data-" + this.name, "hamburger"), n.innerHTML = (e = this.name, t = this.menuItems, '<section class="material-design-hamburger" data-' + e + '="hamburgerClickRegion"><div class="material-design-hamburger__icon" data-' + e + '="hamburgerIcon" data-click="toggle"><i class="material-icons md-light">menu</i></div></section><section class="menu menu--off" data-' + e + '="hamburgerMenu"><div>' + t + "</div>" + (0, i.default)((void 0).name, (void 0).menuItems) + "</section>")), this.delegateEvents(), this.syncAllBoundElements(), this;
        } }, { key: "toggle", value: function value() {
          if (!this.modal) {
            var e = this.boundElement("hamburgerMenu");this.boundElement("hamburgerClickRegion").classList.toggle("model"), e.classList.toggle("menu--on");
          }
        } }]), t;
    }();t.default = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = u(n(6)),
        o = u(n(1)),
        a = u(n(16));function u(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.tagName || (e.tagName = "nav"), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, i.default), r(t, [{ key: "render", value: function value() {
          if (!this.isInitalized) return this;if (this.template = null, !this.el) return this;var e = o.default.selector(this.el);return e && (o.default.addClass(e, "menu"), e.setAttribute("data-" + this.name, "menu"), e.innerHTML = (this.name, this.menuItems, '<i class="material-icons md-dark">more_vert</i><ul>' + (0, a.default)((void 0).name, (void 0).menuItems) + "</ul>")), this.delegateEvents(), this.syncAllBoundElements(), this;
        } }]), t;
    }();t.default = s;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(17),
        o = (r = i) && r.__esModule ? r : { default: r };var a = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.buttons || (e.buttons = {}), e.buttons.yes = "yes", e.buttons.no = "no", e.style = "alert", function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), t;
    }();t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(17),
        o = (r = i) && r.__esModule ? r : { default: r };var a = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.buttons || (e.buttons = {}), e.buttons.cancel = "cancel", e.style = "alert", function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), t;
    }();t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        i = t.TABLE_DATA_ATTRIBUTES = { NAME: "data-name", TYPE: "data-type", DESCRIPTION: "data-description", INDEX: "data-index", LABEL: "data-label", SORT_CLASS: "sorted" },
        o = t.csvTableCompile = function (e, t, n, i, o) {
      var a = "";if (o || (o = ","), n) {
        var u = void 0;for (u in n) {
          n.hasOwnProperty(u) && (n[u], a = a + u + o);
        }a = a.slice(0, -1), a += "\n";
      }var s = void 0,
          l = void 0,
          c = void 0,
          f = void 0,
          h = i.length;for (s = 0; s < h; s++) {
        for (c in l = i[s]) {
          l.hasOwnProperty(c) && (void 0 === (f = l[c]) ? "undefined" : r(f), a = a + f + o);
        }a = a.slice(0, -1), a += "\n";
      }return a;
    },
        a = (t.tsvTableCompile = function (e, t, n, r) {
      return o(e, t, n, r, "\t");
    }, t.defaultTableCompile = function (e, t, n, r, o, s, l, c) {
      var f = "<table " + i.NAME + '="' + e + '" ' + i.DESCRIPTION + '="' + t + '">';return e && (f += "<caption", t && (f = f + ' title="' + t + '"'), f = f + ">" + e + "</caption>"), f += "<thead>", f += a(n, o, s, c), f += "</thead><tbody>", r && (f += l ? editableTableBody(r, n, o, s, c) : u(r, n, o, s, c)), f += "</tbody></table>";
    }, t.defaultTableHeader = function (e, t, n, r) {
      var o = "";if (e) {
        o += "<tr>", t && (o = o + "<th " + i.NAME + '="lineNumber">#</th>');var a = void 0,
            u = void 0;for (a in e) {
          e.hasOwnProperty(a) && (u = e[a], o = o + "<th " + i.NAME + '="' + a + '" ' + i.DESCRIPTION + '="' + u.description + '" ' + i.TYPE + '="' + u.type + '"', n === a && (o = o + ' class="' + i.SORT_CLASS + '"'), o = o + ">" + a + "</th>");
        }o += "</tr>";
      }return o;
    }),
        u = t.defaultTableBody = function (e, t, n, o, a) {
      var u = void 0,
          s = void 0,
          l = void 0,
          c = void 0,
          f = "",
          h = e.length,
          d = void 0;for (u = 0; u < h; u++) {
        for (l in s = e[u], f += "<tr>", n && (f = f + '<td class="label number">' + (u + 1) + "</td>"), s) {
          s.hasOwnProperty(l) && (d = void 0 === (c = s[l]) ? "undefined" : r(c), f = f + "<td " + i.TYPE + '="' + d + '" class="' + d, o === l && (f = f + " " + i.SORT_CLASS), f = f + '">' + c + "</td>");
        }f += "</tr>";
      }return f;
    },
        s = (t.directDOMTableCompile = function (e, t, n, r, o, a, u, f, h, d, p, v, y) {
      var b = document.createElement("table"),
          _ = document.createElement("thead"),
          m = document.createElement("tbody"),
          g = void 0,
          O = void 0;b.setAttribute("data-" + t, t), b.setAttribute(i.NAME, t), b.setAttribute(i.DESCRIPTION, n), n && (g = document.createElement("caption"), t && g.setAttribute("title", t), O = document.createTextNode(n), g.appendChild(O), b.appendChild(g)), s(_, r, a, u, h, d), b.appendChild(_), b.appendChild(m), o && (f ? c(m, o, r, a, u, h, d, t, p, v, y) : l(m, o, r, a, u, h, d, t, p, v, y)), e.appendChild(b);
    }, t.directDOMTableHeader = function (e, t, n, r, o, a) {
      if (t && e) {
        var u = document.createElement("tr"),
            s = void 0,
            l = void 0,
            c = void 0,
            f = void 0;for (c in a && ((s = document.createElement("th")).setAttribute(i.NAME, "select"), l = document.createTextNode("❏"), s.appendChild(l), u.appendChild(s)), n && ((s = document.createElement("th")).setAttribute(i.NAME, "lineNumber"), l = document.createTextNode("#"), s.appendChild(l), u.appendChild(s)), t) {
          var h = !0;null !== o && (h = -1 !== o.indexOf(c)), h && t.hasOwnProperty(c) && (f = t[c], (s = document.createElement("th")).setAttribute(i.NAME, c), s.setAttribute(i.DESCRIPTION, f.description), s.setAttribute(i.TYPE, f.type), r === c && s.classList.add(i.SORT_CLASS), l = document.createTextNode(c), s.appendChild(l), u.appendChild(s));
        }e.appendChild(u);
      }
    }),
        l = t.directDOMTableBody = function (e, t, n, o, a, u, s, l, c, f, h) {
      var d = t.length,
          p = void 0,
          v = void 0,
          y = void 0,
          b = void 0,
          _ = void 0,
          m = void 0,
          g = void 0,
          O = void 0;for (p = 0; p < d; p++) {
        for (y in v = t[p], O = document.createElement("tr"), s && ((m = document.createElement("td")).setAttribute(i.NAME, "select"), (g = document.createElement("input")).type = "checkbox", g.name = String(p), g.value = String(p), g.setAttribute("data-" + l, "row-" + p), m.appendChild(g), m.classList.add("label", "select"), O.appendChild(m)), o && (m = document.createElement("td"), g = document.createTextNode(String(p + 1)), m.appendChild(g), m.classList.add("label", "number"), O.appendChild(m)), n) {
          var E = !0;if (null !== u && (E = -1 !== u.indexOf(y)), E && v.hasOwnProperty(y)) {
            if (_ = void 0 === (b = v[y]) ? "undefined" : r(b), m = document.createElement("td"), g = document.createTextNode(b), c && f && h && (f.column === y || f.wholeRow)) {
              var w = document.createElement("a");w.href = h(v), w.appendChild(g), m.appendChild(w);
            } else m.appendChild(g);m.classList.add(_), a === y && m.classList.add(i.SORT_CLASS), m.setAttribute(i.TYPE, _), m.setAttribute(i.LABEL, y), O.appendChild(m);
          }
        }e.appendChild(O);
      }
    },
        c = t.directDOMEditableTableBody = function (e, t, n, o, a, u, s, l) {
      var c = t.length,
          f = o,
          h = void 0,
          d = void 0,
          p = void 0,
          v = void 0,
          y = void 0,
          b = void 0,
          _ = void 0,
          m = void 0,
          g = void 0,
          O = void 0;for (h = 0; h < c; h++) {
        for (p in d = t[h], m = document.createElement("tr"), s && ((b = document.createElement("td")).setAttribute(i.NAME, "select"), (_ = document.createElement("input")).type = "checkbox", _.name = String(h), _.value = String(h), b.appendChild(_), b.classList.add("label", "select"), m.appendChild(b)), f && (b = document.createElement("td"), _ = document.createTextNode(String(h + 1)), b.appendChild(_), b.classList.add("label", "number"), m.appendChild(b)), d) {
          var E = !0;if (null !== u && (E = -1 !== u.indexOf(p)), E && d.hasOwnProperty(p)) {
            if (O = n[p] ? n[p] : {}, y = void 0 === (v = d[p]) ? "undefined" : r(v), (b = document.createElement("td")).classList.add(y), a === p && b.classList.add(i.SORT_CLASS), b.setAttribute(i.TYPE, y), b.setAttribute(i.LABEL, p), "object" === y) {
              if (Array.isArray(v)) {
                var w = 0,
                    k = v.length,
                    j = void 0,
                    S = void 0;for (g = document.createElement("select"), w = 0; w < k; w++) {
                  (j = document.createElement("option")).setAttribute("value", v[w]), S = document.createTextNode(v[w]), j.appendChild(S), g.appendChild(j);
                }
              } else (g = document.createElement("textarea")).value = JSON.stringify(v);
            } else if ("boolean" === y) (g = document.createElement("input")).setAttribute("type", "checkbox"), !0 === v && g.setAttribute("checked", "checked"), g.value = v;else if ("number" === y) (g = document.createElement("input")).setAttribute("type", "number"), g.value = v;else if ("string" === y && O.enum) {
              g = document.createElement("select");var P = 0,
                  A = O.enum.length,
                  T = void 0,
                  C = void 0;for (P = 0; P < A; P++) {
                (T = document.createElement("option")).setAttribute("value", O.enum[P]), C = document.createTextNode(O.enum[P]), v === O.enum[P] && T.setAttribute("selected", "selected"), T.appendChild(C), g.appendChild(T);
              }
            } else "string" === y && "email" === O.format ? ((g = document.createElement("input")).setAttribute("type", "email"), g.value = v) : "string" === y && "uri" === O.format ? ((g = document.createElement("input")).setAttribute("type", "url"), g.value = v) : "string" === y && "date-time" === O.format ? ((g = document.createElement("input")).setAttribute("type", "datetime"), g.value = v) : ((g = document.createElement("input")).setAttribute("type", "text"), g.value = v);"string" === y && O.pattern && g.setAttribute("pattern", O.pattern), O.minimum && g.setAttribute("min", O.minimum), O.maximum && g.setAttribute("max", O.maximum), "string" === y && O.minlength && g.setAttribute("minlength", O.minlength), "string" === y && O.maxlength && g.setAttribute("maxlength", O.maxlength), g.setAttribute(i.NAME, p), g.setAttribute(i.INDEX, h), g.setAttribute("data-" + l, l), b.appendChild(g), m.appendChild(b);
          }
        }e.appendChild(m);
      }
    };t.directDOMPaginationControl = function (e, t, n) {
      var r = void 0,
          i = void 0,
          o = void 0;(r = document.createElement("div")).classList.add("paginationControl"), (i = document.createElement("span")).classList.add("first"), o = document.createTextNode("<< First"), i.appendChild(o), r.appendChild(i), (i = document.createElement("span")).classList.add("previous"), o = document.createTextNode("< Previous"), i.appendChild(o), r.appendChild(i), (i = document.createElement("span")).classList.add("current"), o = document.createTextNode(t + " of " + n), i.appendChild(o), r.appendChild(i), (i = document.createElement("span")).classList.add("next"), o = document.createTextNode("Next >"), i.appendChild(o), r.appendChild(i), (i = document.createElement("span")).classList.add("last"), o = document.createTextNode("Last >>"), i.appendChild(o), r.appendChild(i), e.appendChild(r);
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(3),
        o = (r = i) && r.__esModule ? r : { default: r };var a = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.lineNumbers = !0, e.sortable = !0;var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.renderPaginationControl = !0, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), t;
    }();t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(3),
        o = (r = i) && r.__esModule ? r : { default: r };var a = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.lineNumbers = !0, e.sortable = !0, e.editable = !0;var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.renderPaginationControl = !0, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), t;
    }();t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(3),
        o = (r = i) && r.__esModule ? r : { default: r };var a = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.lineNumbers = !0, e.sortable = !0, e.editable = !1, e.localStorage = !0;var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.renderPaginationControl = !0, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), t;
    }();t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(3),
        o = (r = i) && r.__esModule ? r : { default: r };var a = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.lineNumbers = !0, e.sortable = !0, e.editable = !0, e.localStorage = !0;var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.renderPaginationControl = !0, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), t;
    }();t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        i = n(3),
        o = (r = i) && r.__esModule ? r : { default: r };var a = function (e) {
      function t(e) {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e || (e = {}), e.lineNumbers = !0, e.editable = !0, function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), t;
    }();t.default = a;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }return t.default = e, t;
    }(n(0)),
        o = s(n(3)),
        a = s(n(5)),
        u = s(n(14));function s(e) {
      return e && e.__esModule ? e : { default: e };
    }var l = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));if (n.lineNumbers = !0, n.sortable = !0, n.editable = !0, e && e.pagination ? n.renderPaginationControl = e.pagination : n.renderPaginationControl = !1, e && e.rows ? n.rows = e.rows : n.rows = 10, e && e.columns ? n.columns = e.columns : n.rows = 5, n.collection ? n.collection.reset() : !n.collection && n.localStorage ? n.collection = new u.default() : n.collection || (n.collection = new a.default()), e) {
          if (e.schema) if (i.isObject(e.schema)) n.schema = e.schema;else {
            var r = null;try {
              (r = JSON.parse(e.schema)) && i.isObject(r) && (n.schema = r);
            } catch (e) {}n.schema || (n.retrieveSchema(e.schema), n.isInitalized = !1);
          }e.el && (n.el = e.el), e.uri && (n.uri = e.uri, n.collection.url = e.uri), e.data && Array.isArray(e.data) && n.populate(e.data), e.sortable && (n.sortable = e.sortable), e.lineNumbers && (n.lineNumbers = e.lineNumbers), e.localStorageKey && !e.uri && (n.localStorageKey = e.localStorageKey, n.uri = null);
        }if (n.collection && n.uri && (n.collection.url = n.uri), n.collection && (n.collection.crossOrigin = n.crossOrigin), n.schema) n.name && "" !== n.name || !n.schema.title || (n.name = n.schema.title), n.description && "" !== n.description || !n.schema.description || (n.description = n.schema.description), n.isInitalized || (n._columns = n.schema.properties, n.collection.schema = n.schema);else {
          n.schema = { $schema: "http://json-schema.org/draft-04/schema#", title: "untitled", type: "object", description: "", properties: {} };var o = 0;for (o = 0; o < n.columns; o++) {
            n.schema.properties[String.fromCharCode(65 + o)] = { description: "", type: "string" };
          }n._columns = n.schema.properties, n.collection.schema = n.schema;
        }return n._generate(), n.collection.set(n.data), n.isInitalized = !0, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), r(t, [{ key: "_generate", value: function value() {
          if (this.schema && this.schema.properties) {
            var e = 0,
                t = 0,
                n = Object.keys(this.schema.properties),
                r = n.length,
                i = {};for (this.data = [], t = 0; t < this.rows; t++) {
              for (i = {}, e = 0; e < r; e++) {
                i[n[e]] = "";
              }this.data.push(i);
            }
          }
        } }]), t;
    }();t.default = l;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }return t.default = e, t;
    }(n(0)),
        o = c(n(2)),
        a = c(n(56)),
        u = c(n(24)),
        s = c(n(1)),
        l = c(n(4));function c(e) {
      return e && e.__esModule ? e : { default: e };
    }var f = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));if (n.crossOrigin = !1, n._fields = {}, n.uri = null, n.isInitalized = !1, n.title = null, n.description = "", n._required = [], n.display = null, n.model && e && e.clearForm ? n.model.clear() : n.model || (n.model = new l.default()), e) {
          if (e.crossOrigin && (n.crossOrigin = e.crossOrigin), e.schema) if (i.isObject(e.schema)) n.schema = e.schema;else {
            var r = null;try {
              (r = JSON.parse(e.schema)) && i.isObject(r) && (n.schema = r);
            } catch (e) {}n.schema || (n._retrieveSchema(e.schema), n.isInitalized = !1);
          }e.el && (n.el = e.el), e.uri && (n.uri = e.uri), e.data && i.isObject(e.data) && n.model.set(e.data), e.title && (n.title = e.title), e.description && (n.description = e.description);
        }return n.model && n.uri && (n.model.url = n.uri), n.model && (n.model.crossOrigin = n.crossOrigin), n.schema ? (n.name && "" !== n.name || !n.schema.title || (n.name = n.schema.title), n.description && "" !== n.description || !n.schema.description || (n.description = n.schema.description), n.schema.required ? n._required = n.schema.required : n._required = [], n.isInitalized || (n._fields = n.schema.properties, n.model.schema = n.schema, n.isInitalized = !0)) : n.isInitalized = !1, n;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, o.default), r(t, [{ key: "_retrieveSchema", value: function value(e) {
          var t = this;i.request({ url: e, contentType: "application/json", dataType: "json", success: function success(e, n) {
              var r = { schema: "string" == typeof e ? JSON.parse(e) : e };t.initialize(r);
            }, error: function error(e, t) {} });
        } }, { key: "setURI", value: function value(e) {
          this.uri = e;
        } }, { key: "setSchema", value: function value(e) {
          this.schema = e, this._fields = e.properties, this.model.reset(), this.model.schema = e, this.uri && (model.url = this.uri);
        } }, { key: "showProgressBar", value: function value(e) {
          if (this.el) {
            var t = s.default.selector(this.el);if (t) {
              var n = t.querySelector("progress");n && (n.style.display = e ? "block" : "none", n.style.visibility = e ? "visible" : "hidden");
            }
          }
        } }, { key: "showMessage", value: function value(e) {
          if (this.el) {
            var t = s.default.selector(this.el);if (t) {
              var n = t.querySelector("p[class=message]");n && (n.innerHTML = e);
            }
          }
        } }, { key: "validate", value: function value() {
          var e = this.model ? this.model.validate() : null;return !this.model.isValid() && e && e.messages ? this.showMessage((0, u.default)(e.messages)) : this.showMessage(""), e;
        } }, { key: "isValid", value: function value() {
          return !this.model || this.model.isValid();
        } }, { key: "render", value: function value() {
          if (!this.isInitalized) return this;if (this.template = null, this.showProgressBar(!0), !this.el) return this.showProgressBar(!1), this;var e = s.default.selector(this.el);if (e) {
            this.theme && s.default.addClass(e, this.theme);var t = document.createElement("progress"),
                n = document.createTextNode("Please wait.");t.appendChild(n), e.appendChild(t);var r = (0, a.default)(this.title ? this.title : this.name, this.description, this._fields, this.model.toJSON(), this._required, this.name, this.display);e.appendChild(r), this._formEl = s.default.query("form", this.el), (t = document.createElement("p")).classList.add("message"), e.appendChild(t);
          }return this.delegateEvents(), this.syncAllBoundElements(), this.showProgressBar(!1), this;
        } }, { key: "reset", value: function value() {
          this._formEl && (this._formEl.reset(), this.model.reset());
        } }, { key: "populate", value: function value(e) {
          this.model.set(e);
        } }, { key: "remove", value: function value() {
          return this.undelegateEvents(), this.off(), this.stopListening(), s.default.empty(this.el), this;
        } }]), t;
    }();t.default = f;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = function (e, t, n, r, i, o, a) {
      var u = document.createElement("form"),
          s = document.createElement("formset"),
          l = Object.keys(n),
          c = a ? a.length : l.length,
          f = void 0,
          h = void 0,
          d = void 0,
          p = void 0,
          v = void 0;if (u.appendChild(s), e) {
        var y = document.createElement("legend");if (f = document.createTextNode(e), t) {
          var b = document.createAttribute("title");b.value = t, y.setAttributeNode(b);
        }y.appendChild(f), s.appendChild(y);
      }for (a || (a = l), h = 0; h < c; h++) {
        var _ = !0;null !== a && (_ = -1 !== l.indexOf(a[h])), _ && (v = -1 !== i.indexOf(a[h]), (p = document.createElement("label")).setAttribute("for", a[h]), f = document.createTextNode(a[h]), p.appendChild(f), s.appendChild(p), (d = Augmented.Presentation.Widget.Input(n[a[h]], a[h], r[a[h]], a[h], v, o)) && s.appendChild(d));
      }return u;
    };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        i = a(n(25)),
        o = a(n(22));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.type = i.default;
      }return r(e, null, [{ key: "getPaginatedCollection", value: function value(e, t, n) {
          var r = t || {},
              a = null;return e || (e = i.default.GITHUB), e === i.default.GITHUB ? (a = new o.default(r, n)).setPaginationConfiguration({ currentPageParam: "page", pageSizeParam: "per_page" }) : e === i.default.SOLR ? (a = new o.default(r, n)).setPaginationConfiguration({ currentPageParam: "start", pageSizeParam: "rows" }) : e === i.default.DATABASE && (a = new o.default(r, n)).setPaginationConfiguration({ currentPageParam: "offset", pageSizeParam: "limit" }), a;
        } }]), e;
    }();t.default = u;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _augmentedjsNextPresentation = __webpack_require__(0);

var _augmentedjsNextPresentation2 = _interopRequireDefault(_augmentedjsNextPresentation);

var _main = __webpack_require__(3);

var _main2 = _interopRequireDefault(_main);

var _app = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = null;
(0, _app.createApp)(app).then(function (app) {
  return new Promise(function (resolve, reject) {
    app.mainController = new _main2.default();
    app.mainController.initialize();
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error creating main controller!"));
    }
  });
}).then(function (app) {
  return new Promise(function (resolve, reject) {
    app.mainController.render();
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error rendering main controller!"));
    }
  });
}).then(_app.createRouter).then(_app.startApp).catch(function (e) {
  console.error(e);
  console.error(e.stack);
});

/*
const header = new Presentation.Component.Header({ "template": "hello"});
header.render();

const ham = new Presentation.Component.HamburgerMenu();
ham.render();
*/

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNextPresentation = __webpack_require__(0);

var _augmentedjsNextPresentation2 = _interopRequireDefault(_augmentedjsNextPresentation);

var _article = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainController = function (_Presentation$ViewCon) {
  _inherits(MainController, _Presentation$ViewCon);

  function MainController(options) {
    _classCallCheck(this, MainController);

    return _possibleConstructorReturn(this, (MainController.__proto__ || Object.getPrototypeOf(MainController)).call(this, options));
  }

  _createClass(MainController, [{
    key: "initialize",
    value: function initialize() {
      var controller = this;
      (0, _article.createMainArticle)(controller).then(_article.addSectionsToMainArticle).catch(function (e) {
        console.error(e);
        console.error(e.stack);
      });

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var controller = this;
      (0, _article.renderMainArticle)(controller).catch(function (e) {
        console.error(e);
        console.error(e.stack);
      });

      return true;
    }
  }, {
    key: "remove",
    value: function remove() {
      var controller = this;
      (0, _article.cleanupMainArticle)(controller).then(function (controller) {
        return new Promise(function (resolve, reject) {
          controller.article = null;
          if (!controller.article) {
            resolve(controller);
          } else {
            reject(new Error("Error nulling article!"));
          }
        });
      }).catch(function (e) {
        console.error(e);
        console.error(e.stack);
      });

      return true;
    }
  }]);

  return MainController;
}(_augmentedjsNextPresentation2.default.ViewController);

;

exports.default = MainController;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanupMainArticle = exports.renderMainArticle = exports.addSectionsToMainArticle = exports.createMainArticle = undefined;

var _augmentedjsNextPresentation = __webpack_require__(0);

var _augmentedjsNextPresentation2 = _interopRequireDefault(_augmentedjsNextPresentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createMainArticle = exports.createMainArticle = function createMainArticle(controller) {
  return new Promise(function (resolve, reject) {
    controller.article = new _augmentedjsNextPresentation2.default.Component.Article({
      "id": "views",
      "style": "article",
      "header": "<h1>Links for views</h1><ul><li><a href=\"#\">Index</a></li><li><a href=\"#simple\">Simple</a></li><li><a href=\"#decorator\">Decorator</a></li><li><a href=\"#table\">Table</a></li></ul>",
      "body": "<p>Augmented Next View Examples</p>",
      "footer": "<p>Built from Augmented <i>Next</i> Presentation - Version " + _augmentedjsNextPresentation2.default.VERSION + "</p>"
    });

    if (controller.article) {
      resolve(controller);
    } else {
      reject(new Error("Error creating article!"));
    }
  });
};

var addSectionsToMainArticle = exports.addSectionsToMainArticle = function addSectionsToMainArticle(controller) {
  return new Promise(function (resolve, reject) {
    controller.article.addSection({ "id": "view1" });
    controller.article.addSection({ "id": "view2" });
    controller.article.addSection({ "id": "decorator" });
    controller.article.addSection({ "id": "table" });

    if (controller.article) {
      resolve(controller);
    } else {
      reject(new Error("Error creating sections!"));
    }
  });
};

var renderMainArticle = exports.renderMainArticle = function renderMainArticle(controller) {
  return new Promise(function (resolve, reject) {
    var t = controller.article.render();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error rendering article!"));
    }
  });
};

var cleanupMainArticle = exports.cleanupMainArticle = function cleanupMainArticle(controller) {
  return new Promise(function (resolve, reject) {
    var t = controller.article.remove();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error removing article!"));
    }
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startApp = exports.createRouter = exports.createApp = undefined;

var _augmentedjsNextPresentation = __webpack_require__(0);

var _augmentedjsNextPresentation2 = _interopRequireDefault(_augmentedjsNextPresentation);

var _router = __webpack_require__(6);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApp = exports.createApp = function createApp(app) {
  return new Promise(function (resolve, reject) {
    app = new _augmentedjsNextPresentation2.default.Application("next-view-example");
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error creating app!"));
    }
  });
};

var createRouter = exports.createRouter = function createRouter(app) {
  return new Promise(function (resolve, reject) {
    app.router = new _router2.default();
    if (app.router) {
      resolve(app);
    } else {
      reject(new Error("Error creating router!"));
    }
  });
};

var startApp = exports.startApp = function startApp(app) {
  return new Promise(function (resolve, reject) {
    app.start();
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error starting app!"));
    }
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _augmentedjsNextPresentation = __webpack_require__(0);

var _augmentedjsNextPresentation2 = _interopRequireDefault(_augmentedjsNextPresentation);

var _table = __webpack_require__(7);

var _simple = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("MyView", _simple.MyView);
var myView = new _augmentedjsNextPresentation2.default.View({ "name": "MyView" });
myView.el = "#view1";
myView.template = "<h1>This is a simple view.</h1><h2>My view name is " + myView.name + ".</h2><p>This is a simple view known as <em>Presentation.View</em></p><p>My permissions are" + JSON.stringify(myView.permissions) + "</p>";

var Router = function (_Presentation$Router) {
  _inherits(Router, _Presentation$Router);

  function Router() {
    var _this;

    _classCallCheck(this, Router);

    return _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, {
      "routes": {
        "": function _() {},
        "simple": function simple() {
          _this.loadView(new _simple.YetAnotherView({
            "el": "#view2",
            "name": "YetAnotherView",
            "template": "<h1>This is a simple view.</h1><h2>My view name is YetAnotherView.</h2><p>This vew is declared by passing options.</p><button id=\"bump2\">Click Me</button>",
            "events": {
              "click #bump2": "bump"
            }
          }));
          _this.loadView(new _simple.MyView());
          myView.render();
        },
        "decorator": function decorator() {
          _this.loadView(new _simple.MyDecoratorView());
        },
        "table": function table() {
          var table = new _augmentedjsNextPresentation2.default.Component.AutomaticTable({
            "el": "#table",
            "name": "table",
            "schema": _table.SCHEMA,
            "data": _table.DATA
          });
          _this.loadView(table);
        }
      }
    }));
  }

  return Router;
}(_augmentedjsNextPresentation2.default.Router);

;

exports.default = Router;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SCHEMA = exports.SCHEMA = {
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

var DATA = exports.DATA = [{ "Name": "Bob", "ID": 123, "Email": "bob@augmentedjs.org" }, { "Name": "Jonathan", "ID": 234, "Email": "jonathon@augmentedjs.org" }, { "Name": "Corey", "ID": 345, "Email": "corey@augmentedjs.org" }, { "Name": "Seema", "ID": 456, "Email": "seema@augmentedjs.org" }, { "Name": "Jasmine", "ID": 567, "Email": "jasmine@augmentedjs.org" }];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyDecoratorView = exports.YetAnotherView = exports.MyView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _augmentedjsNextPresentation = __webpack_require__(0);

var _augmentedjsNextPresentation2 = _interopRequireDefault(_augmentedjsNextPresentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyView = exports.MyView = function (_Presentation$View) {
  _inherits(MyView, _Presentation$View);

  function MyView() {
    _classCallCheck(this, MyView);

    var _this = _possibleConstructorReturn(this, (MyView.__proto__ || Object.getPrototypeOf(MyView)).call(this, { "name": "ChildView" }));

    if (!_this.template) {
      _this.template = "<h1>This is a simple view also.</h1><h2>My view name is " + _this.name + ".</h2><p>This is a simple view extends <em>Presentation.View</em></p><button id=\"bump\">Click Me</button>";
    }
    _this.events = {
      "click #bump": "bump"
    };
    return _this;
  }

  _createClass(MyView, [{
    key: "bump",
    value: function bump(e) {
      alert("I was clicked!");
    }
  }]);

  return MyView;
}(_augmentedjsNextPresentation2.default.View);

;

var YetAnotherView = exports.YetAnotherView = function (_Presentation$View2) {
  _inherits(YetAnotherView, _Presentation$View2);

  function YetAnotherView(options) {
    _classCallCheck(this, YetAnotherView);

    console.log("options", options);

    var _this2 = _possibleConstructorReturn(this, (YetAnotherView.__proto__ || Object.getPrototypeOf(YetAnotherView)).call(this, options));

    console.log("im here", _this2.name);
    if (!_this2.template) {
      console.log("oops no template");
      _this2.template = "oops";
    }
    if (!_this2.events) {
      console.log("oops no events");
      _this2.events = {
        "click #bump2": "bump"
      };
    }

    return _this2;
  }

  _createClass(YetAnotherView, [{
    key: "bump",
    value: function bump(e) {
      alert("I was clicked!");
    }
  }]);

  return YetAnotherView;
}(_augmentedjsNextPresentation2.default.View);

;

var MyDecoratorView = exports.MyDecoratorView = function (_Presentation$Decorat) {
  _inherits(MyDecoratorView, _Presentation$Decorat);

  function MyDecoratorView() {
    _classCallCheck(this, MyDecoratorView);

    var _this3 = _possibleConstructorReturn(this, (MyDecoratorView.__proto__ || Object.getPrototypeOf(MyDecoratorView)).call(this, { "name": "beeper", "el": "#decorator" }));

    if (!_this3.template) {
      _this3.template = "<h1>This is a decorator view</h1><h2>My view name is " + _this3.name + ".</h2><input type=\"text\" data-" + _this3.name + "=\"in\" data-function=\"setOut\"/><p data-" + _this3.name + "=\"out\"></p><button id=\"beep\" data-" + _this3.name + "=\"beep\" data-click=\"beep\">Beep!</button><button id=\"boop\" data-" + _this3.name + "=\"boop\" data-click=\"boop\">Boop!</button>";
    }
    console.log("temp", _this3.template);
    console.log("it", _this3.injectTemplate);
    _this3.injectTemplate(_this3.template);
    _this3.syncBoundElement("in");
    _this3.syncModelChange("out");
    _this3.delegateEvents();
    return _this3;
  }

  _createClass(MyDecoratorView, [{
    key: "beep",
    value: function beep(e) {
      alert("Beep Beep!");
      console.log("Beep Beep!");
    }
  }, {
    key: "boop",
    value: function boop(e) {
      alert("Boop Boop!");
      console.log("Boop Boop!");
    }
  }, {
    key: "setOut",
    value: function setOut(e) {
      this.model.set("out", this.model.get("in"));
    }
  }]);

  return MyDecoratorView;
}(_augmentedjsNextPresentation2.default.DecoratorView);

;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map