(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor~main"],{

/***/ "./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/augmentedjs-next-presentation/dist/augmented-next-presentation.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js"),__webpack_require__(/*! presentation-widget */ "./node_modules/presentation-widget/dist/presentation-widget.js"),__webpack_require__(/*! presentation-view */ "./node_modules/presentation-view/dist/presentation-view.js"),__webpack_require__(/*! presentation-table */ "./node_modules/presentation-table/dist/presentation-table.js"),__webpack_require__(/*! presentation-storage */ "./node_modules/presentation-storage/dist/presentation-storage.js"),__webpack_require__(/*! presentation-router */ "./node_modules/presentation-router/dist/presentation-router.js"),__webpack_require__(/*! presentation-controller */ "./node_modules/presentation-controller/dist/presentation-controller.js"),__webpack_require__(/*! presentation-request */ "./node_modules/presentation-request/dist/presentation-request.js"),__webpack_require__(/*! presentation-models */ "./node_modules/presentation-models/dist/presentation-models.js"),__webpack_require__(/*! presentation-mediator */ "./node_modules/presentation-mediator/dist/presentation-mediator.js"),__webpack_require__(/*! presentation-logger */ "./node_modules/presentation-logger/dist/presentation-logger.js"),__webpack_require__(/*! presentation-form */ "./node_modules/presentation-form/dist/presentation-form.js"),__webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js"),__webpack_require__(/*! presentation-components */ "./node_modules/presentation-components/dist/presentation-components.js"),__webpack_require__(/*! presentation-application */ "./node_modules/presentation-application/dist/presentation-application.js"),__webpack_require__(/*! presentation-decorator */ "./node_modules/presentation-decorator/dist/presentation-decorator.js")):undefined}(window,function(e,t,o,n,r,i,a,p,s,u,l,c,d,g,m,f){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=0)}([function(e,t,o){"use strict";var n=x(o(1)),r=o(2),i=o(3),a=o(4),p=o(5),s=o(6),u=o(7),l=o(8),c=o(9),d=o(10),g=o(11),m=o(12),f=x(o(13)),C=o(14),b=o(15),q=o(16);function x(e){return e&&e.__esModule?e:{default:e}}
/**
 * Augmented.js Next Presentation - The Presentation Component
 *
 * @author Bob Warren
 *
 * @module Presentation
 * @license Apache-2.0
 */const w={VERSION:"2.6.0"};w.History=s.History,w.Router=s.Router,w.Widget=r.Widget,w.Dom=f.default,w.Application=b.Application,w.LocalStorageFactory=p.LocalStorageFactory,w.NamespacedLocalStorage=p.NamespacedLocalStorage,w.LocalStorage=p.LocalStorage,w.Model=c.Model,w.Collection=c.Collection,w.LocalStorageCollection=c.LocalStorageCollection,w.PaginatedCollection=c.PaginatedCollection,w.ViewController=u.ViewController,w.ManagedController=u.ManagedController,w.View=i.View,w.Colleague=d.Colleague,w.Mediator=d.Mediator,w.DecoratorView=q.DecoratorView,w.DirectiveView=q.DirectiveView,w.Utilities={},w.Utilities.serialize=s.serialize,w.Component={},w.Component.Toolbar=C.Toolbar,w.Component.HamburgerMenu=C.HamburgerMenu,w.Component.Menu=C.Menu,w.Component.NavigationMenu=C.NavigationMenu,w.Component.DialogView=C.DialogView,w.Component.ConfirmationDialogView=C.ConfirmationDialogView,w.Component.AlertDialogView=C.AlertDialogView,w.Component.Splash=C.Splash,w.Component.Notification=C.Notification,w.Component.AutomaticTable=a.AutomaticTable,w.Component.BigDataTable=a.BigDataTable,w.Component.EditableLocalStorageTable=a.EditableLocalStorageTable,w.Component.EditableTable=a.EditableTable,w.Component.EditableBigDataTable=a.EditableBigDataTable,w.Component.Spreadsheet=a.Spreadsheet,w.Component.LocalStorageTable=a.LocalStorageTable,w.Component.AutomaticForm=m.AutomaticForm,w.Component.Header=C.Header,w.Component.Footer=C.Footer,w.Component.Card=C.Card,w.Component.Article=C.Article,w.Component.Manager=C.Manager,w.Component.NotificationCenter=C.NotificationCenter,w.sync=l.sync,w.request=l.request,w.Request={},w.Request.Configuration=l.Configuration,w.Pagination={},w.Pagination.PAGINATION_API_TYPE=c.PAGINATION_API_TYPE,w.Pagination.PaginationFactory=c.PaginationFactory,w.RESTLogger=g.RestLogger,w.ColorConsoleLogger=g.ColorConsoleLogger,w.$=f.default.query,n.default.Presentation=w,e.exports=n.default},function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=p},function(e,t){e.exports=s},function(e,t){e.exports=u},function(e,t){e.exports=l},function(e,t){e.exports=c},function(e,t){e.exports=d},function(e,t){e.exports=g},function(e,t){e.exports=m},function(e,t){e.exports=f}])});
//# sourceMappingURL=augmented-next-presentation.js.map

/***/ }),

/***/ "./node_modules/augmentedjs-next/dist/augmented-next.js":
/*!**************************************************************!*\
  !*** ./node_modules/augmentedjs-next/dist/augmented-next.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-application */ "./node_modules/next-core-application/dist/next-core-application.js"),__webpack_require__(/*! next-core-bundle */ "./node_modules/next-core-bundle/dist/next-core-bundle.js"),__webpack_require__(/*! next-core-logger */ "./node_modules/next-core-logger/dist/next-core-logger.js"),__webpack_require__(/*! next-core-model */ "./node_modules/next-core-model/dist/core-next-model.js"),__webpack_require__(/*! next-core-object */ "./node_modules/next-core-object/dist/next-core-object.js"),__webpack_require__(/*! next-core-security */ "./node_modules/next-core-security/dist/next-core-security.js"),__webpack_require__(/*! next-core-sort */ "./node_modules/next-core-sort/dist/next-core-sort.js"),__webpack_require__(/*! next-core-structures */ "./node_modules/next-core-structures/dist/next-core-structures.js"),__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"),__webpack_require__(/*! next-core-validation */ "./node_modules/next-core-validation/dist/core-next-validation.js")):undefined}(window,function(e,t,r,i,o,n,c,u,l,a){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=0)}([function(e,t,r){"use strict";var i=r(1),o=r(2),n=r(3),c=r(4),u=r(5),l=r(6),a=r(7),s=r(8),y=r(9),f=r(10);
/**
 * Augmented.js Next - The Core Component
 *
 * @author Bob Warren
 *
 * @module Augmented
 * @license Apache-2.0
 */
const p={Utility:{}};p.Utility.findByMatchingProperties=y.findByMatchingProperties,p.Utility.filterObject=y.filterObject,p.Utility.wrap=y.wrap,p.Utility.Transformer=y.Transformer,p.Utility.TransformerType=y.TransformerType,p.Utility.binarySearch=y.binarySearch,p.Utility.prettyPrint=y.prettyPrint,p.Utility.shuffle=y.shuffle,p.Utility.Map=s.AugmentedMap,p.Utility.Stack=s.Stack,p.Utility.SchemaGenerator=f.SchemaGenerator,p.Utility.extend=y.extend,p.Utility.AsynchronousQueue=s.AsynchronousQueue,p.Utility.pad=y.pad,p.Utility.BundleObject=o.BundleObject,p.Utility.ResourceBundle=o.ResourceBundle,p.Utility.MessageReader=o.MessageReader,p.Utility.MessageKeyFormatter=o.MessageKeyFormatter,p.Utility.uniqueId=y.uniqueId,p.Utility.sortObjects=a.sortObjects,p.Utility.mergeSort=a.mergeSort,p.Utility.quickSort=a.quickSort,p.Utility.insertionSort=a.insertionSort,p.Utility.bubbleSort=a.bubbleSort,p.Utility.formatDate=y.formatDate,p.Utility.formatBinary=y.formatBinary,p.Logger={},p.Logger.AbstractLogger=n.AbstractLogger,p.Logger.ConsoleLogger=n.ConsoleLogger,p.Logger.ColorConsoleLogger=n.ColorConsoleLogger,p.Logger.LoggerFactory=n.LoggerFactory,p.Logger.Type=n.Type,p.Logger.Level=n.Level,p.Object=u.AugmentedObject,p.AbstractModel=c.AbstractModel,p.AbstractCollection=c.AbstractCollection,p.ValidationFramework=f.ValidationFramework,p.Security={},p.Security.ClientType=l.ClientType,p.Security.AuthenticationFactory=l.AuthenticationFactory,p.Security.Context=l.Context,p.Security.Entry=l.Entry,p.Security.Principal=l.Principal,p.Security.Client={},p.Security.Client.AbstractSecurityClient=l.AbstractSecurityClient,p.Security.Client.ACLClient=l.ACLClient,p.Security.Client.OAUTH2Client=l.OAUTH2Client,p.Configuration=u.Configuration,p.Application=i.Application,p.isString=y.isString,p.isFunction=y.isFunction,p.has=y.has,p.isObject=y.isObject,p.allKeys=y.allKeys,p.create=y.create,p.result=y.result,p.arrayHas=y.arrayHas,p.exec=y.exec,p.isDefined=y.isDefined,p.some=y.some,p.fibonacci=y.fibonacci,p.fibonacciSequence=y.fibonacciSequence,p.splice=y.splice,p.before=y.before,p.once=y.once,p.VERSION="2.3.0",p.codename="JC Denton",p.releasename="UNATCO",e.exports=p},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=c},function(e,t){e.exports=u},function(e,t){e.exports=l},function(e,t){e.exports=a}])});
//# sourceMappingURL=augmented-next.js.map

/***/ }),

/***/ "./node_modules/lodash.bind/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.bind/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG],
  ['bind', BIND_FLAG],
  ['bindKey', BIND_KEY_FLAG],
  ['curry', CURRY_FLAG],
  ['curryRight', CURRY_RIGHT_FLAG],
  ['flip', FLIP_FLAG],
  ['partial', PARTIAL_FLAG],
  ['partialRight', PARTIAL_RIGHT_FLAG],
  ['rearg', REARG_FLAG]
];

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var objectCreate = Object.create;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Used to set `toString` methods. */
var defineProperty = (function() {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return (name && name.length > 2) ? func : undefined;
}());

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }

  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function(wrapper, reference, bitmask) {
  var source = (reference + '');
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.clone/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.clone/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = clone;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.defaults/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.defaults/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;


/***/ }),

/***/ "./node_modules/lodash.defer/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.defer/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number} Returns the timer id.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one or more milliseconds.
 */
var defer = baseRest(function(func, args) {
  return baseDelay(func, 1, args);
});

module.exports = defer;


/***/ }),

/***/ "./node_modules/lodash.escape/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.escape/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the
 * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.has/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.has/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.isempty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isempty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' ||
        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.isregexp/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isregexp/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObject(value) && objectToString.call(value) == regexpTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.iteratee/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.iteratee/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = iteratee;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.map/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = map;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.result/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.result/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    object = undefined;
    length = 1;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = isFunction(value) ? value.call(object) : value;
  }
  return object;
}

module.exports = result;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next-core-application/dist/next-core-application.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-core-application/dist/next-core-application.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=0)}([function(t,e,r){"use strict";var a=function(t){return t&&t.__esModule?t:{default:t}}(r(1));t.exports.Application=a.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=t=>new Promise((e,r)=>{t.beforeInitialize()?e(t):r(new Error("failed before initialize!"))}),n=t=>new Promise((e,r)=>{t.initialize()?e(t):r(new Error("failed initialize!"))}),i=t=>new Promise((e,r)=>{t.afterInitialize()?e(t):r(new Error("failed after initialize!"))}),o=t=>new Promise((e,r)=>{t._started=!0,t.started?e(t):r(new Error("failed setting started!"))}),s=t=>new Promise((e,r)=>{t.started?e(t):r(new Error("failed starting!"))}),u="untitled",d={};d.NAME=Symbol("name"),d.DATASTORE=Symbol("datastore");e.default=class{constructor(t){t||(t={}),t.metadata?this._metadata=t.metadata:this._metadata={},t.name?this._name=t.name:this._name=u,t.datastore?this._datastore=t.datastore:this._datastore={},t.router?this._router=t.router:this._router=null,this._started=!1}get router(){return this._router}set router(t){this._router=t}get started(){return this._started}initialize(){return!0}beforeInitialize(){return!0}afterInitialize(){return!0}get name(){return this.getMetadataItem(d.NAME)}set name(t){return this.setMetadataItem(d.NAME,t)}get metadata(){return this._metadata}setMetadataItem(t,e){this._metadata[t]=e}getMetadataItem(t){return this._metadata[t]}registerRouter(t){t&&(this._router=t)}start(){const t=this;return new Promise((e,r)=>{a(t).then(n).then(i).then(o).then(s).then(t=>{e(t)}).catch(e=>{t.stop(),r(e)})})}stop(){this._started=!1}get datastore(){return this.getMetadataItem(d.DATASTORE)}set datastore(t){t&&this.setMetadataItem(d.DATASTORE,t)}}}])});
//# sourceMappingURL=next-core-application.js.map

/***/ }),

/***/ "./node_modules/next-core-bundle/dist/next-core-bundle.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-core-bundle/dist/next-core-bundle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=0)}([function(e,t,r){"use strict";var n=r(1);e.exports.BundleObject=n.BundleObject,e.exports.ResourceBundle=n.ResourceBundle,e.exports.MessageReader=n.MessageReader,e.exports.MessageKeyFormatter=n.MessageKeyFormatter},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BundleObject={name:"",mode:"both",cache:!0};class n{constructor(){}static getBundle(){return{}}static getString(){return""}}t.ResourceBundle=n;t.MessageReader=class{constructor(){}static getMessage(e){let t=n.getString(e),r=e.length,o=e;for(;r>0&&t=="["+e+"]";)r=e.lastIndexOf("."),e=e.substring(0,r),t=n.getString(e);return e?t:"["+o+"]"}};t.MessageKeyFormatter=class{constructor(){this.delimiter="."}static format(e){let t="";return e&&e.level&&(t+=e.level,e.kind&&(t+=this.delimiter+e.kind,e.rule&&(t+=this.delimiter+e.rule,e.values.title&&(t+=this.delimiter+e.values.title)))),t||""}}}])});
//# sourceMappingURL=next-core-bundle.js.map

/***/ }),

/***/ "./node_modules/next-core-logger/dist/next-core-logger.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-core-logger/dist/next-core-logger.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o={};o.INFO=Symbol("info"),o.DEBUG=Symbol("debug"),o.ERROR=Symbol("error"),o.WARN=Symbol("warn"),t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=class{constructor(e){this.loggerLevel=e||n.default.INFO,this.label=n.default,this.TIME_SEPERATOR=":",this.DATE_SEPERATOR="-",this.OPEN_GROUP=" [ ",this.CLOSE_GROUP=" ] "}_getLogTime(){const e=new Date,t=`${e.getFullYear()}${this.DATE_SEPERATOR}${e.getMonth()+1}${this.DATE_SEPERATOR}${e.getDate()} ${e.getHours()}${this.TIME_SEPERATOR}${e.getMinutes()}${this.TIME_SEPERATOR}${e.getSeconds()}${this.TIME_SEPERATOR}${e.getMilliseconds()}`;return(0,o.pad)("                        ",t,!1)}log(e,t){let r="";return e&&(t||(t=n.default.INFO),this.loggerLevel===n.default.DEBUG&&t===n.default.DEBUG?r=this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}DEBUG${this.CLOSE_GROUP}${e}`,t):t===n.default.ERROR?r=this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}ERROR${this.CLOSE_GROUP}${e}`,t):t===n.default.WARN?r=this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}WARN ${this.CLOSE_GROUP}${e}`,t):this.loggerLevel!==n.default.DEBUG&&this.loggerLevel!==n.default.INFO||(r=this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}INFO ${this.CLOSE_GROUP}${e}`,t))),r}info(e){this.log(e,n.default.INFO)}error(e){this.log(e,n.default.ERROR)}debug(e){this.log(e,n.default.DEBUG)}warn(e){this.log(e,n.default.WARN)}_logMe(e,t){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(r(1)),n=l(r(0));function l(e){return e&&e.__esModule?e:{default:e}}t.default=class extends o.default{constructor(e){super(e)}_logMe(e,t){return t===n.default.INFO?console.info(e):t===n.default.ERROR?console.error(e):t===n.default.DEBUG?console.log(e):t===n.default.WARN?console.warn(e):console.log(e),e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(r(1)),n=l(r(0));function l(e){return e&&e.__esModule?e:{default:e}}t.default=class extends o.default{constructor(e){super(e)}_logMe(e,t){t===n.default.INFO?console.info("[36m"+e+"[0m"):t===n.default.ERROR?console.error("[31m"+e+"[0m"):t===n.default.DEBUG?console.log("[34m"+e+"[0m"):t===n.default.WARN?console.warn("[33m"+e+"[0m"):console.log("[37m"+e+"[0m")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o={};o.CONSOLE=Symbol("console"),o.COLOR_CONSOLE=Symbol("colorConsole"),t.default=o},function(e,t,r){"use strict";var o=i(r(1)),n=i(r(2)),l=i(r(3)),u=i(r(7)),s=i(r(4)),f=i(r(0));function i(e){return e&&e.__esModule?e:{default:e}}e.exports.AbstractLogger=o.default,e.exports.ConsoleLogger=n.default,e.exports.ColorConsoleLogger=l.default,e.exports.LoggerFactory=u.default,e.exports.Type=s.default,e.exports.Level=f.default},function(e,t,r){"use strict";e.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.default=((e,t)=>{let r,n;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return n=Number.parseInt(e),()=>(--n>0&&(r=t.apply(void 0,o)),n<=1&&(t=void 0),r)})},function(e,t,r){var o=m(r(4)),n=m(r(1)),l=m(r(5)),u=m(r(6)),s=m(r(7)),f=m(r(8)),i=m(r(0)),a=m(r(9)),c=m(r(10)),d=m(r(11)),p=m(r(12)),b=m(r(13)),O=m(r(14)),y=m(r(15)),_=m(r(16)),g=m(r(2)),h=m(r(17)),M=r(18),S=r(19),v=r(20),P=m(r(21)),j=m(r(22));function m(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=S.shuffle,e.exports.prettyPrint=S.prettyPrint,e.exports.binarySearch=S.binarySearch,e.exports.TransformerType=S.TransformerType,e.exports.Transformer=S.Transformer,e.exports.wrap=S.wrap,e.exports.filterObject=S.filterObject,e.exports.findByMatchingProperties=S.findByMatchingProperties,e.exports.sortObjects=v.sortObjects,e.exports.mergeSort=v.mergeSort,e.exports.quickSort=v.quickSort,e.exports.insertionSort=v.insertionSort,e.exports.bubbleSort=v.bubbleSort,e.exports.formatDate=P.default,e.exports.formatBinary=j.default,e.exports.isString=o.default,e.exports.isFunction=n.default,e.exports.extend=l.default,e.exports.pad=u.default,e.exports.uniqueId=s.default,e.exports.has=f.default,e.exports.isObject=i.default,e.exports.allKeys=a.default,e.exports.create=c.default,e.exports.result=d.default,e.exports.arrayHas=p.default,e.exports.exec=b.default,e.exports.isDefined=O.default,e.exports.some=y.default,e.exports.splice=_.default,e.exports.before=g.default,e.exports.once=h.default,e.exports.fibonacci=M.fibonacci,e.exports.fibonacciSequence=M.fibonacciSequence},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});let o=0;t.default=(e=>`${e}${++o}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,o.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,o.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,o.default)(r)?r.call(e):r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,...r)=>{const o=e.split("."),n=o.pop(),l=o.length;let u=0;for(u=0;u<l;u++)t=t[o[u]];return t[n].apply(t,r)})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>void 0!==e)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let o=Array(e.length-r);const n=t.length;let l;for(l=0;l<o.length;l++)o[l]=e[l+r];for(l=0;l<n;l++)e[l+r]=t[l];for(l=0;l<o.length;l++)e[l+n+r]=o[l]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,o.default)(2,e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});const o=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(o(r));return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,o,n=0;for(n=e.length-1;n>0;n--)o=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[o],t[o]=r;return t}),t.prettyPrint=((e,t,r)=>{let o="\t";return t&&(o=" ".repeat(r)),JSON.stringify(e,null,o)}),t.binarySearch=((e,t,r)=>{let o,n,l=0,u=e.length-1;for(;l<=u;)if((n=r(e[o=Math.floor((l+u)/2)],t))<0)l=o+1;else{if(!(n>0))return o;u=o-1}return null});const n=t.TransformerType={};n.STRING=Symbol("String"),n.INTEGER=Symbol("Integer"),n.NUMBER=Symbol("Number"),n.BOOLEAN=Symbol("Boolean"),n.ARRAY=Symbol("Array"),n.OBJECT=Symbol("Object"),n.NULL=Symbol("Null"),t.Transformer=class{constructor(){this.type=n}static transform(e,t){let r=null;switch(t){case n.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case n.INTEGER:r=parseInt(e);break;case n.NUMBER:r=Number(e);break;case n.BOOLEAN:r=Boolean(e);break;case n.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case n.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?n.NULL:"string"==typeof e?n.STRING:"number"==typeof e?n.NUMBER:"boolean"==typeof e?n.BOOLEAN:Array.isArray(e)?n.ARRAY:"object"==typeof e?n.OBJECT:void 0}},t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(o)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const o=t.length;let n=0;for(n=0;n<o;n++)r[t[n]]=e[t[n]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=((e,t)=>e.sort((e,r)=>{const o=e[t],n=r[t];return o<n?-1:o>n?1:0}));const o=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),l=e.slice(t);return n(o(r),o(l))}),n=(e,t)=>{let r=[],o=0,n=0;for(;o<e.length&&n<t.length;)e[o]<t[n]?(r.push(e[o]),o++):(r.push(t[n]),n++);return r.concat(e.slice(o)).concat(t.slice(n))},l=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,o=[],n=[],u=e[0];for(t=1;t<r;t++)e[t]<u?o.push(e[t]):n.push(e[t]);return l(o).concat(u,l(n))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let o,n,l;for(o=1;o<r;o++){for(l=t[o],n=o-1;n>=0&&t[n]>l;n--)t[n+1]=t[n];t[n+1]=l}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,o,n;const l=(t=e.slice()).length-1;do{for(r=!1,o=0;o<l;o++)t[o]>t[o+1]&&(n=t[o],t[o]=t[o+1],t[o+1]=n,r=!0)}while(r)}return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),n=e.getHours(),l=e.getMinutes();return e.getSeconds(),`${r}/${o}/${t} ${n%12||12}:${l<10?"0"+l:l}${n<12?"am":"pm"}`})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(e=>{let t=0,r=e,o="";for(t=0;t<32;t++,o+=String(r>>>31),r<<=1);return o})(e).split("").reverse().join("").substring(0,t))}])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(r(2)),n=u(r(3)),l=u(r(4));function u(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(){}static getLogger(e,t){return e===l.default.CONSOLE?new o.default(t):e===l.default.COLOR_CONSOLE?new n.default(t):void 0}}}])});
//# sourceMappingURL=next-core-logger.js.map

/***/ }),

/***/ "./node_modules/next-core-model/dist/core-next-model.js":
/*!**************************************************************!*\
  !*** ./node_modules/next-core-model/dist/core-next-model.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! lodash.clone */ "./node_modules/lodash.clone/index.js"),__webpack_require__(/*! lodash.result */ "./node_modules/lodash.result/index.js"),__webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js"),__webpack_require__(/*! lodash.has */ "./node_modules/lodash.has/index.js"),__webpack_require__(/*! lodash.defaults */ "./node_modules/lodash.defaults/index.js"),__webpack_require__(/*! lodash.iteratee */ "./node_modules/lodash.iteratee/index.js"),__webpack_require__(/*! lodash.defer */ "./node_modules/lodash.defer/index.js"),__webpack_require__(/*! lodash.escape */ "./node_modules/lodash.escape/index.js")):undefined}(this,function(e,t,r,i,n,s,o,l){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=6)}([function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(2),n=r(3),s=r(4);const o=r(0),l=r(9),a=r(10),u=r(11),c=r(0),h=r(12),d=r(13),f=r(14),p=r(15),m=(e,t)=>{if(e){const r=t.error;t.error=(i=>{r&&r.call(t.context,e,i,t),e.trigger("error",e,i,t)})}};t.default=class extends i.AugmentedObject{constructor(e,t,...r){let i;super(t),this.id=0,this.idAttribute="id",this.cidPrefix="c",this.defaults={},this.validationError=null,this.urlRoot="",this._pending=!1,this._changing=!1,this._previousAttributes=null,this._attributes=e||{},t||(t={}),this.schema=null,this.validationMessages={valid:!0},t&&t.schema&&(this.schema=t.schema),this.preinitialize(r),this.cid=(0,n.uniqueId)(this.cidPrefix),t&&t.collection&&(this.collection=t.collection),t&&t.parse&&(i=this.parse(i,t)||{}),this.defaults=l(this,"defaults"),i=h((0,n.extend)({},this.defaults,i),this.defaults),this.set(i,t),this.changed={},this.initialize(r)}preinitialize(...e){}initialize(...e){}get(e){return this._attributes[e]}set(e,t,r){if(null===e)return this;let i;if("object"==typeof e?(i=e,r=t):(i={})[e]=t,r||(r={}),!this._validate(i,r))return console.warn("Model did not validate"),!1;const n=r.unset,s=r.silent,l=[];let a=this._changing;this._changing=!0,a||(this._previousAttributes=o(this._attributes),this.changed={});let u=this._attributes,h=this.changed;const d=this._previousAttributes;let f;for(f in i)t=i[f],"string"==typeof u[f]&&"string"==typeof t&&u[f]!==t?l.push(f):c(u[f],t)||l.push(f),"string"==typeof d[f]&&"string"==typeof t&&d[f]!==t?h[f]=t:c(d[f],t)?delete h[f]:h[f]=t,n?delete u[f]:u[f]=t;if(this.idAttribute in i&&(this.id=this.get(this.idAttribute)),!s){l.length&&(this._pending=r);let e=0;for(e=0;e<l.length;e++)this.trigger("change:"+l[e],this,u[l[e]],r)}if(a)return this;if(!s)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this}escape(e){return p(this.get(attr))}has(e){return null!==this.get(attr)}matches(e){return!!d(e,this)(this._attributes)}unset(e,t){return this.set(e,void 0,(0,n.extend)({},t,{unset:!0}))}clear(e){let t={};for(let e in this._attributes)t[e]=void 0;return this.set(t,(0,n.extend)({},e,{unset:!0}))}toJSON(){return o(this._attributes)}fetch(e){e=(0,n.extend)({parse:!0},e);let t=this,r=e.success;return e.success=(i=>{let n=e.parse?t.parse(i,e):i;if(!t.set(n,e))return!1;r&&r.call(e.context,t,i,e),t.trigger("sync",t,i,e)}),m(this,e),this.sync("read",this,e)}save(e,t,r){let i;null==e||"object"==typeof e?(i=e,r=t):(i={})[e]=t;let s=(r=(0,n.extend)({validate:!0,parse:!0},r)).wait;if(i&&!s){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;let o=this,l=r.success,a=this._attributes;r.success=(e=>{o.attributes=a;let t=r.parse?o.parse(e,r):e;if(s&&(t=(0,n.extend)({},i,t)),t&&!o.set(t,r))return!1;l&&l.call(r.context,o,e,r),o.trigger("sync",o,e,r)}),m(this,r),i&&s&&(this._attributes=(0,n.extend)({},a,i));let u=this.isNew()?"create":r.patch?"patch":"update";"patch"!==u||r.attrs||(r.attrs=i);let c=this.sync(u,this,r);return this._attributes=a,c}destroy(e){e=e?o(e):{};let t=this,r=e.success,i=e.wait,n=()=>{t.stopListening(),t.trigger("destroy",t,t.collection,e)};e.success=(s=>{i&&n(),r&&r.call(e.context,t,s,e),t.isNew()||t.trigger("sync",t,s,e)});let s=!1;return this.isNew()?f(e.success):(m(this,e),s=this.sync("delete",this,e)),i||n(),s}url(){let e=l(this,"urlRoot")||l(this.collection,"url")||urlError();if(this.isNew())return e;let t=this.get(this.idAttribute);return e.replace(/[^\/]$/,"$&/")+encodeURIComponent(t)}keys(){return Object.keys(this._attributes)}values(){return Object.values(this._attributes)}parse(e,t){return e}clone(){return new this.constructor(this._attributes)}isNew(){return!this.has(this.idAttribute)}hasChanged(e){return null==e?!a(this.changed):u(this.changed,e)}changedAttributes(e){if(!e)return!!this.hasChanged()&&o(this.changed);let t,r=this._changing?this._previousAttributes:this._attributes,i={};for(let n in e){let s=e[n];c(r[n],s)||(i[n]=s,t=!0)}return!!t&&i}previous(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null}previousAttributes(){return o(this._previousAttributes)}supportsValidation(){return null!==this.schema}isValid(e){const t=this._validate({},(0,n.extend)({},e,{validate:!0}));return t?(this.validate(),this.validationMessages.valid):t}validate(){this._validationFramework||(this._validationFramework=new s.ValidationFramework);const e=this._validationFramework;return this.supportsValidation()&&e.supportsValidation()?this.validationMessages=e.validate(this.toJSON(),this.schema):this.validationMessages.valid=!0,this.validationMessages}getValidationMessages(){const e=[];if(this.validationMessages&&this.validationMessages.errors){const r=this.validationMessages.errors.length;var t=0;for(t=0;t<r;t++)e.push(this.validationMessages.errors[t].message+" from "+this.validationMessages.errors[t].dataPath)}return e}sync(e,t,r){}reset(e){this.clear(),e&&this.set(e)}isEmpty(){return!this._attributes||0===Object.keys(this._attributes).length}toString(){return JSON.stringify(this.toJSON())}fetch(e){this.sync("read",this,e)}save(e){this.sync("create",this,e)}update(e){this.sync("update",this,e)}destroy(e){this.sync("delete",this,e)}_validate(e,t){if(t&&(!t.validate||!this.validate))return!0;const r=this.validate();return!!r.valid||(this.trigger("invalid",this,r,(0,n.extend)(t,{validationError:r})),!1)}}},function(e,t,r){var i;e.exports=(i=r(7),function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=t.EVENT_SPLITTER=/\s+/,n=t.eventsApi=((e,t,r,s,o)=>{let l,a=0;if(r&&"object"==typeof r){void 0!==s&&"context"in o&&void 0===o.context&&(o.context=s);for(l=Object.keys(r);a<l.length;a++)t=n(e,t,l[a],r[l[a]],o)}else if(r&&i.test(r))for(l=r.split(i);a<l.length;a++)t=e(t,l[a],s,o);else t=e(t,r,s,o);return t}),s=(t.internalOn=((e,t,r,i,o)=>(e._events=n(s,e._events||{},t,r,{context:i,ctx:e,listening:o}),o&&((e._listeners||(e._listeners={}))[o.id]=o),e)),t.onApi=((e,t,r,i)=>{if(r){const n=e[t]||(e[t]=[]),s=i.context,o=i.ctx,l=i.listening;l&&l.count++,n.push({callback:r,context:s,ctx:s||o,listening:l})}return e})),o=(t.offApi=((e,t,r,i)=>{if(!e)return;let n,s=0;const o=i.context,l=i.listeners;if(!t&&!r&&!o){const e=Object.keys(l);for(;s<e.length;s++)delete l[(n=l[e[s]]).id],delete n.listeningTo[n.objId];return}let a=t?[t]:Object.keys(e);for(;s<a.length;s++){const i=e[t=a[s]];if(!i)break;const u=[];let c=0;for(c=0;c<i.length;c++){const e=i[c];r&&r!==e.callback&&r!==e.callback._callback||o&&o!==e.context?u.push(e):(n=e.listening)&&0==--n.count&&(delete l[n.id],delete n.listeningTo[n.objId])}u.length?e[t]=u:delete e[t]}return e}),t.triggerApi=((e,t,r,i)=>{if(e){const r=e[t];let n=e.all;r&&n&&(n=n.slice()),r&&o(r,i),n&&o(n,[t].concat(i))}return e}),t.triggerEvents=((e,t)=>{let r,i=-1;const n=e.length,s=t[0],o=t[1],l=t[2];switch(t.length){case 0:for(;++i<n;)(r=e[i]).callback.call(r.ctx);return;case 1:for(;++i<n;)(r=e[i]).callback.call(r.ctx,s);return;case 2:for(;++i<n;)(r=e[i]).callback.call(r.ctx,s,o);return;case 3:for(;++i<n;)(r=e[i]).callback.call(r.ctx,s,o,l);return;default:for(;++i<n;)(r=e[i]).callback.apply(r.ctx,t);return}}))},function(e,t,r){"use strict";var i=o(r(2)),n=o(r(5)),s=r(0);function o(e){return e&&e.__esModule?e:{default:e}}e.exports.AugmentedObject=i.default,e.exports.Configuration=n.default,e.exports.eventsApi=s.eventsApi,e.exports.eventsApi=s.internalOn,e.exports.eventsApi=s.offApi,e.exports.eventsApi=s.triggerApi},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),n=r(0);const s=r(4);t.default=class{constructor(e){e||(e={}),this._options||(this._options={}),Object.assign(this._options,e),e&&e.events?this._events=e.events:this._events={},this._listeningTo={},this._listenId={},this._listeners={}}initialize(...e){return this}get options(){return this._options}set options(e){this._options=e}get events(){return this._events}set events(e){this._events=e}trigger(e,...t){if(this._events){const r=Array.isArray(t)?t:Array.from(t);(0,n.eventsApi)(n.triggerApi,this._events,e,void 0,r)}return this}once(e,t,r){const i=(0,n.eventsApi)(this._onceMap,{},e,t,s(this.off,this));return"string"==typeof e&&null==r&&(t=void 0),this.on(i,t,r)}off(e,t,r){return this._events&&(this._events=(0,n.eventsApi)(n.offApi,this._events,e,t,{context:r,listeners:this._listeners})),this}stopListening(e,t,r){const i=this._listeningTo;if(i){const n=e?[e._listenId]:Object.keys(i);let s=0;for(s=0;s<n.length;s++){const e=i[n[s]];if(!e)break;e.obj.off(t,r,this)}}return this}on(e,t,r){return(0,n.internalOn)(this,e,t,r)}listenTo(e,t,r){if(e){const s=e._listenId||(e._listenId=(0,i.uniqueId)("l")),o=this._listeningTo||(this._listeningTo={});let l=o[s];if(!l){const t=this._listenId||(this._listenId=(0,i.uniqueId)("l"));l=o[s]={obj:e,objId:s,id:t,listeningTo:o,count:0}}(0,n.internalOn)(e,t,r,this,l)}return this}listenToOnce(e,t,r){const i=(0,n.eventsApi)(this._onceMap,{},t,r,s(this.stopListening,this,e));return this.listenTo(e,i)}_onceMap(e,t,r,n){if(r){const s=e[t]=(0,i.once)(()=>{n(t,s),r.apply(this,arguments)});s._callback=r}return e}}},function(e,t,r){"use strict";e.exports=function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=arguments;t.default=((e,t)=>{let r,n;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return n=Number.parseInt(e),()=>(--n>0&&(r=t.apply(void 0,i)),n<=1&&(t=void 0),r)})},function(e,t,r){var i=S(r(4)),n=S(r(1)),s=S(r(5)),o=S(r(6)),l=S(r(7)),a=S(r(8)),u=S(r(0)),c=S(r(9)),h=S(r(10)),d=S(r(11)),f=S(r(12)),p=S(r(13)),m=S(r(14)),g=S(r(15)),y=S(r(16)),v=S(r(2)),_=S(r(17)),b=r(18),O=r(19),E=r(20),R=S(r(21)),M=S(r(22));function S(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=O.shuffle,e.exports.prettyPrint=O.prettyPrint,e.exports.binarySearch=O.binarySearch,e.exports.TransformerType=O.TransformerType,e.exports.Transformer=O.Transformer,e.exports.wrap=O.wrap,e.exports.filterObject=O.filterObject,e.exports.findByMatchingProperties=O.findByMatchingProperties,e.exports.sortObjects=E.sortObjects,e.exports.mergeSort=E.mergeSort,e.exports.quickSort=E.quickSort,e.exports.insertionSort=E.insertionSort,e.exports.bubbleSort=E.bubbleSort,e.exports.formatDate=R.default,e.exports.formatBinary=M.default,e.exports.isString=i.default,e.exports.isFunction=n.default,e.exports.extend=s.default,e.exports.pad=o.default,e.exports.uniqueId=l.default,e.exports.has=a.default,e.exports.isObject=u.default,e.exports.allKeys=c.default,e.exports.create=h.default,e.exports.result=d.default,e.exports.arrayHas=f.default,e.exports.exec=p.default,e.exports.isDefined=m.default,e.exports.some=g.default,e.exports.splice=y.default,e.exports.before=v.default,e.exports.once=_.default,e.exports.fibonacci=b.fibonacci,e.exports.fibonacciSequence=b.fibonacciSequence},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});let i=0;t.default=(e=>`${e}${++i}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,i.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,i.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,i.default)(r)?r.call(e):r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,...r)=>{const i=e.split("."),n=i.pop(),s=i.length;let o=0;for(o=0;o<s;o++)t=t[i[o]];return t[n].apply(t,r)})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>void 0!==e)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let i=Array(e.length-r);const n=t.length;let s;for(s=0;s<i.length;s++)i[s]=e[s+r];for(s=0;s<n;s++)e[s+r]=t[s];for(s=0;s<i.length;s++)e[s+n+r]=i[s]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,i.default)(2,e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});const i=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(i(r));return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,i,n=0;for(n=e.length-1;n>0;n--)i=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[i],t[i]=r;return t}),t.prettyPrint=((e,t,r)=>{let i="\t";return t&&(i=" ".repeat(r)),JSON.stringify(e,null,i)}),t.binarySearch=((e,t,r)=>{let i,n,s=0,o=e.length-1;for(;s<=o;)if((n=r(e[i=Math.floor((s+o)/2)],t))<0)s=i+1;else{if(!(n>0))return i;o=i-1}return null});const n=t.TransformerType={};n.STRING=Symbol("String"),n.INTEGER=Symbol("Integer"),n.NUMBER=Symbol("Number"),n.BOOLEAN=Symbol("Boolean"),n.ARRAY=Symbol("Array"),n.OBJECT=Symbol("Object"),n.NULL=Symbol("Null"),t.Transformer=class{constructor(){this.type=n}static transform(e,t){let r=null;switch(t){case n.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case n.INTEGER:r=parseInt(e);break;case n.NUMBER:r=Number(e);break;case n.BOOLEAN:r=Boolean(e);break;case n.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case n.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?n.NULL:"string"==typeof e?n.STRING:"number"==typeof e?n.NUMBER:"boolean"==typeof e?n.BOOLEAN:Array.isArray(e)?n.ARRAY:"object"==typeof e?n.OBJECT:void 0}},t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(i)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const i=t.length;let n=0;for(n=0;n<i;n++)r[t[n]]=e[t[n]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=((e,t)=>e.sort((e,r)=>{const i=e[t],n=r[t];return i<n?-1:i>n?1:0}));const i=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),s=e.slice(t);return n(i(r),i(s))}),n=(e,t)=>{let r=[],i=0,n=0;for(;i<e.length&&n<t.length;)e[i]<t[n]?(r.push(e[i]),i++):(r.push(t[n]),n++);return r.concat(e.slice(i)).concat(t.slice(n))},s=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,i=[],n=[],o=e[0];for(t=1;t<r;t++)e[t]<o?i.push(e[t]):n.push(e[t]);return s(i).concat(o,s(n))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let i,n,s;for(i=1;i<r;i++){for(s=t[i],n=i-1;n>=0&&t[n]>s;n--)t[n+1]=t[n];t[n+1]=s}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,i,n;const s=(t=e.slice()).length-1;do{for(r=!1,i=0;i<s;i++)t[i]>t[i+1]&&(n=t[i],t[i]=t[i+1],t[i+1]=n,r=!0)}while(r)}return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=e.getFullYear(),r=e.getMonth()+1,i=e.getDate(),n=e.getHours(),s=e.getMinutes();return e.getSeconds(),`${r}/${i}/${t} ${n%12||12}:${s<10?"0"+s:s}${n<12?"am":"pm"}`})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(e=>{let t=0,r=e,i="";for(t=0;t<32;t++,i+=String(r>>>31),r<<=1);return i})(e).split("").reverse().join("").substring(0,t))}])},function(e,t){e.exports=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={LoggerLevel:"error",MessageBundle:"Messages",AsynchronousQueueTimeout:2e3,ApplicationInitProcessTimeout:1e3}}]))},function(e,t,r){e.exports=function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=arguments;t.default=((e,t)=>{let r,n;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return n=Number.parseInt(e),()=>(--n>0&&(r=t.apply(void 0,i)),n<=1&&(t=void 0),r)})},function(e,t,r){"use strict";var i=x(r(4)),n=x(r(1)),s=x(r(5)),o=x(r(6)),l=x(r(7)),a=x(r(8)),u=x(r(0)),c=x(r(9)),h=x(r(10)),d=x(r(11)),f=x(r(12)),p=x(r(13)),m=x(r(14)),g=x(r(15)),y=x(r(16)),v=x(r(2)),_=x(r(17)),b=r(18),O=r(19),E=r(20),R=x(r(21)),M=x(r(22)),S=x(r(23));function x(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=O.shuffle,e.exports.prettyPrint=O.prettyPrint,e.exports.binarySearch=O.binarySearch,e.exports.TransformerType=O.TransformerType,e.exports.Transformer=O.Transformer,e.exports.wrap=O.wrap,e.exports.filterObject=O.filterObject,e.exports.findByMatchingProperties=O.findByMatchingProperties,e.exports.sortObjects=E.sortObjects,e.exports.mergeSort=E.mergeSort,e.exports.quickSort=E.quickSort,e.exports.insertionSort=E.insertionSort,e.exports.bubbleSort=E.bubbleSort,e.exports.formatDate=R.default,e.exports.formatBinary=M.default,e.exports.isString=i.default,e.exports.isFunction=n.default,e.exports.extend=s.default,e.exports.pad=o.default,e.exports.uniqueId=l.default,e.exports.has=a.default,e.exports.isObject=u.default,e.exports.allKeys=c.default,e.exports.create=h.default,e.exports.result=d.default,e.exports.arrayHas=f.default,e.exports.exec=p.default,e.exports.isDefined=m.default,e.exports.some=g.default,e.exports.splice=y.default,e.exports.before=v.default,e.exports.once=_.default,e.exports.filter=S.default,e.exports.fibonacci=b.fibonacci,e.exports.fibonacciSequence=b.fibonacciSequence},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=0;t.default=(e=>`${e}${++i}`)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,i.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,i.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,i.default)(r)?r.call(e):r})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,...r)=>{const i=e.split("."),n=i.pop(),s=i.length;let o=0;for(o=0;o<s;o++)t=t[i[o]];return t[n].apply(t,r)})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>void 0!==e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let i=Array(e.length-r);const n=t.length;let s;for(s=0;s<i.length;s++)i[s]=e[s+r];for(s=0;s<n;s++)e[s+r]=t[s];for(s=0;s<i.length;s++)e[s+n+r]=i[s]})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,i.default)(2,e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(i(r));return t})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,i,n=0;for(n=e.length-1;n>0;n--)i=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[i],t[i]=r;return t}),t.prettyPrint=((e,t,r)=>{let i="\t";return t&&(i=" ".repeat(r)),JSON.stringify(e,null,i)}),t.binarySearch=((e,t,r)=>{let i,n,s=0,o=e.length-1;for(;s<=o;)if((n=r(e[i=Math.floor((s+o)/2)],t))<0)s=i+1;else{if(!(n>0))return i;o=i-1}return null});const n=t.TransformerType={};n.STRING=Symbol("String"),n.INTEGER=Symbol("Integer"),n.NUMBER=Symbol("Number"),n.BOOLEAN=Symbol("Boolean"),n.ARRAY=Symbol("Array"),n.OBJECT=Symbol("Object"),n.NULL=Symbol("Null"),t.Transformer=class{constructor(){this.type=n}static transform(e,t){let r=null;switch(t){case n.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case n.INTEGER:r=parseInt(e);break;case n.NUMBER:r=Number(e);break;case n.BOOLEAN:r=Boolean(e);break;case n.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case n.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?n.NULL:"string"==typeof e?n.STRING:"number"==typeof e?n.NUMBER:"boolean"==typeof e?n.BOOLEAN:Array.isArray(e)?n.ARRAY:"object"==typeof e?n.OBJECT:void 0}},t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(i)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const i=t.length;let n=0;for(n=0;n<i;n++)r[t[n]]=e[t[n]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=((e,t)=>e.sort((e,r)=>{const i=e[t],n=r[t];return i<n?-1:i>n?1:0}));const i=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),s=e.slice(t);return n(i(r),i(s))}),n=(e,t)=>{let r=[],i=0,n=0;for(;i<e.length&&n<t.length;)e[i]<t[n]?(r.push(e[i]),i++):(r.push(t[n]),n++);return r.concat(e.slice(i)).concat(t.slice(n))},s=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,i=[],n=[],o=e[0];for(t=1;t<r;t++)e[t]<o?i.push(e[t]):n.push(e[t]);return s(i).concat(o,s(n))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let i,n,s;for(i=1;i<r;i++){for(s=t[i],n=i-1;n>=0&&t[n]>s;n--)t[n+1]=t[n];t[n+1]=s}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,i,n;const s=(t=e.slice()).length-1;do{for(r=!1,i=0;i<s;i++)t[i]>t[i+1]&&(n=t[i],t[i]=t[i+1],t[i+1]=n,r=!0)}while(r)}return t})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>{const r=e.getFullYear(),i=e.getMonth()+1,n=e.getDate(),s=e.getHours(),o=e.getMinutes();return e.getSeconds(),t?`${i}/${n}/${r}`:`${i}/${n}/${r} ${s%12||12}:${o<10?"0"+o:o}${s<12?"am":"pm"}`})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(e=>{let t=0,r=e,i="";for(t=0;t<32;t++,i+=String(r>>>31),r<<=1);return i})(e).split("").reverse().join("").substring(0,t))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>e&&t?[].filter.call(e,e=>e!=t).join(""):null)}])},function(e,t,r){e.exports=function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3};let n,s={};for(n in i)s[i[n]]=n;t.ERROR_CODES=i,t.ERROR_MESSAGES_DEFAULT={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"},t.ValidationError=class{constructor(e,t,r,i,n,s){if(void 0===e)throw new Error("No code supplied for error: "+t);this.message=t,this.params=r,this.code=e,this.dataPath=i||"",this.schemaPath=n||"",this.subErrors=s||null;const o=new Error(this.message);if(this.stack=o.stack||o.stacktrace,!this.stack)try{throw o}catch(e){this.stack=e.stack||e.stacktrace}this.name="ValidationError"}prefixWith(e,t){if(null!==e&&(e=e.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+e+this.dataPath),null!==t&&(t=t.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+t+this.schemaPath),null!==this.subErrors){let r=0,i=this.subErrors.length;for(r=0;r<i;r++)this.subErrors[r].prefixWith(e,t)}return this}},t.ErrorCodeLookup=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i={$schema:"http://json-schema.org/draft-04/schema#",title:"model",description:"Generated Schema",type:"object",properties:{}};t.default=(e=>{let t,r,n,s,o=i,l=Object.keys(e),a=l.length;for(t=0;t<a;t++)for(n in r=l[t])if(r.hasOwnProperty(n)){s=o.properties[r]={};let t=typeof e[r];"object"===t?t=Array.isArray(e[r])?"array":"object":"number"===t&&(t=Number.isInteger(e[r])?"integer":"number"),s.type=t,s.description=String(r)}return o})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.URI_TEMPLATE_GLOBAL_MODIFIERS={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},t.URI_TEMPLATE_SUFFICES={"*":!0};const i=t.parseURI=(e=>{const t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}),n=t.removeDotSegments=(e=>{let t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}),s=t.resolveUrl=((e,t)=>(t=i(t||""),e=i(e||""),t&&e?(t.protocol||e.protocol)+(t.protocol||t.authority?t.authority:e.authority)+n(t.protocol||t.authority||"/"===t.pathname.charAt(0)?t.pathname:t.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+t.pathname:e.pathname)+(t.protocol||t.authority||t.pathname?t.search:t.search||e.search)+t.hash:null)),o=(t.getDocumentUri=(e=>e.split("#")[0]),t.isTrustedUrl=((e,t)=>{if(t.substring(0,e.length)===e){let r=t.substring(e.length);if(t.length>0&&"/"===t.charAt(e.length-1)||"#"===r.charAt(0)||"?"===r.charAt(0))return!0}return!1}),t.normSchema=((e,t)=>{if(e&&"object"==typeof e)if(void 0===t?t=e.id:"string"==typeof e.id&&(t=s(t,e.id),e.id=t),Array.isArray(e)){let r=0,i=e.length;for(r=0;r<i;r++)o(e[r],t)}else{"string"==typeof e.$ref&&(e.$ref=s(t,e.$ref));for(let r in e)"enum"!==r&&o(e[r],t)}}))},function(e,t,r){"use strict";var i=s(r(4)),n=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}e.exports.ValidationFramework=i.default,e.exports.SchemaGenerator=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(1)),n=o(r(5)),s=r(0);function o(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(){this._myValidator=(0,n.default)(),this._myValidator&&this._myValidator.addLanguage("en-us",s.ERROR_MESSAGES_DEFAULT)}supportsValidation(){return null!==this._myValidator}registerSchema(e,t){return this._myValidator.addSchema(e,t)}getSchema(e){return this._myValidator.getSchema(e)}getSchemas(){return this._myValidator.getSchemaMap()}clearSchemas(){this._myValidator.dropSchemas()}validate(e,t){return this._myValidator.validateMultiple(e,t)}getValidationMessages(){return this._myValidator.error}generateSchema(e){let t=e;return(0,i.default)(t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=arguments,n=function(e){return e&&e.__esModule?e:{default:e}}(r(6)),s=r(0),o=r(2);let l={};const a=e=>{const t=new n.default;let r=e||"en";return{addFormat:(e,r)=>{t.addFormat(e,r)},language:e=>e?(l[e]||(e=e.split("-")[0]),!!l[e]&&(r=e,e)):r,addLanguage:(e,t)=>{let r;for(r in s.ERROR_CODES)t[r]&&!t[s.ERROR_CODES[r]]&&(t[s.ERROR_CODES[r]]=t[r]);let i=e.split("-")[0];if(l[i])for(r in l[e]=Object.create(l[i]),t)void 0===l[i][r]&&(l[i][r]=t[r]),l[e][r]=t[r];else l[e]=t,l[i]=t},freshApi:e=>{const t=a();return e&&t.language(e),t},validate:(e,i,s,o)=>{const a=new n.default(t,!1,l[r],s,o);"string"==typeof i&&(i={$ref:i}),a.addSchema("",i);let u=a.validateAll(e,i,null,null,"");return!u&&o&&(u=a.banUnknownProperties()),(void 0).error=u,(void 0).missing=a.missing,(void 0).valid=null===u,(void 0).valid},validateResult:()=>{let e={};return(void 0).validate.apply(e,i),e},validateMultiple:(e,i,s,o)=>{const a=new n.default(t,!0,l[r],s,o);"string"==typeof i&&(i={$ref:i}),a.addSchema("",i),a.validateAll(e,i,null,null,""),o&&a.banUnknownProperties();let u={};return u.errors=a.errors,u.missing=a.missing,u.valid=0===u.errors.length,u},addSchema:(e,r)=>t.addSchema(e,r),getSchema:(e,r)=>t.getSchema(e,r),getSchemaMap:()=>t.getSchemaMap.apply(t,i),getSchemaUris:()=>t.getSchemaUris.apply(t,i),getMissingUris:()=>t.getMissingUris.apply(t,i),dropSchemas:()=>{t.dropSchemas.apply(t,i)},defineKeyword:()=>{t.defineKeyword.apply(t,i)},defineError:(e,t,r)=>{if("string"!=typeof e||!/^[A-Z]+(_[A-Z]+)*$/.test(e))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof t||t%1!=0||t<1e4)throw new Error("Code number must be an integer > 10000");if(void 0!==s.ERROR_CODES[e])throw new Error("Error already defined: "+e+" as "+s.ERROR_CODES[e]);if(void 0!==s.ErrorCodeLookup[t])throw new Error("Error code already used: "+s.ErrorCodeLookup[t]+" as "+t);s.ERROR_CODES[e]=t,s.ErrorCodeLookup[t]=e,s.ERROR_MESSAGES_DEFAULT[e]=s.ERROR_MESSAGES_DEFAULT[t]=r;for(let r in l){let i=l[r];i[e]&&(i[t]=i[t]||i[e])}},reset:()=>{t.reset(),(void 0).error=null,(void 0).missing=[],(void 0).valid=!0},missing:[],error:null,valid:!0,normSchema:o.normSchema,resolveUrl:o.resolveUrl,getDocumentUri:o.getDocumentUri,errorCodes:s.ERROR_CODES}};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),n=r(2);let s=Math.pow(2,-51),o=1-s;class l{constructor(e,t,r,i,n){if(this.missing=[],this.missingMap={},this.formatValidators=e?Object.create(e.formatValidators):{},this.schemas=e?Object.create(e.schemas):{},this.collectMultiple=t,this.errors=[],this.handleError=t?this.collectError:this.returnError,i&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),n&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorMessages=r,this.definedKeywords={},e)for(let t in e.definedKeywords)this.definedKeywords[t]=e.definedKeywords[t].slice(0)}notReallyPercentEncode(e){return encodeURI(e).replace(/%25[0-9][0-9]/g,e=>"%"+e.substring(3))}uriTemplateSubstitution(e){let t="";URI_TEMPLATE_GLOBAL_MODIFIERS[e.charAt(0)]&&(t=e.charAt(0),e=e.substring(1));let r="",i="",n=!0,s=!1,o=!1;"+"===t?n=!1:"."===t?(i=".",r="."):"/"===t?(i="/",r="/"):"#"===t?(i="#",n=!1):";"===t?(i=";",r=";",s=!0,o=!0):"?"===t?(i="?",r="&",s=!0):"&"===t&&(i="&",r="&",s=!0);let l=[],a=e.split(","),u=[],c={},h=0,d=a.length;for(h=0;h<d;h++){let e=a[h],t=null;if(-1!==e.indexOf(":")){let r=e.split(":");e=r[0],t=parseInt(r[1],10)}let r={};for(;URI_TEMPLATE_SUFFICES[e.charAt(e.length-1)];)r[e.charAt(e.length-1)]=!0,e=e.substring(0,e.length-1);let i={truncate:t,name:e,suffices:r};u.push(i),c[e]=i,l.push(e)}const f=e=>{let t="",l=0,a=0,c=u.length;for(a=0;a<c;a++){let h=u[a];if(!e&&!isFunction(e))throw new Error("Problem qith value function.");let d=e(h.name);if(null==d||Array.isArray(d)&&0===d.length||"object"==typeof d&&0===Object.keys(d).length)l++;else if(t+=a===l?i:r||",",Array.isArray(d)){s&&(t+=h.name+"=");let e=0;for(c=d.length,e=0;e<c;e++)e>0&&(t+=h.suffices["*"]&&r||",",h.suffices["*"]&&s&&(t+=h.name+"=")),t+=n?encodeURIComponent(d[e]).replace(/!/g,"%21"):this.notReallyPercentEncode(d[e])}else if("object"==typeof d){s&&!h.suffices["*"]&&(t+=h.name+"=");let e=!0;for(let i in d)e||(t+=h.suffices["*"]&&r||","),e=!1,t+=n?encodeURIComponent(i).replace(/!/g,"%21"):this.notReallyPercentEncode(i),t+=h.suffices["*"]?"=":",",t+=n?encodeURIComponent(d[i]).replace(/!/g,"%21"):this.notReallyPercentEncode(d[i])}else s&&(t+=h.name,o&&""===d||(t+="=")),null!==h.truncate&&(d=d.substring(0,h.truncate)),t+=n?encodeURIComponent(d).replace(/!/g,"%21"):this.notReallyPercentEncode(d)}return t};return f.varNames=l,{prefix:i,substitution:f}}recursiveCompare(e,t){if(e===t)return!0;if("object"==typeof e&&"object"==typeof t){if(Array.isArray(e)!==Array.isArray(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;let r=0,i=e.length;for(r=0;r<i;r++)if(!this.recursiveCompare(e[r],t[r]))return!1}else{let r;for(r in e)if(void 0===t[r]&&void 0!==e[r])return!1;for(r in t)if(void 0===e[r]&&void 0!==t[r])return!1;for(r in e)if(!this.recursiveCompare(e[r],t[r]))return!1}return!0}return!1}defineKeyword(e,t){this.definedKeywords[e]=this.definedKeywords[e]||[],this.definedKeywords[e].push(t)}createError(e,t,r,n,s){let o=this.errorMessages[e]||i.ERROR_MESSAGES_DEFAULT[e];if("string"!=typeof o)return new i.ValidationError(e,"Unknown error code "+e+": "+JSON.stringify(t),t,r,n,s);let l=o.replace(/\{([^{}]*)\}/g,function(e,r){let i=t[r];return"string"==typeof i||"number"==typeof i?i:e});return new i.ValidationError(e,l,t,r,n,s)}returnError(e){return e}collectError(e){return e&&this.errors.push(e),null}prefixErrors(e,t,r){let i=0,n=this.errors.length;for(i=e;i<n;i++)this.errors[i]=this.errors[i].prefixWith(t,r);return this}banUnknownProperties(){for(let e in this.unknownPropertyPaths){let t=this.createError(i.ERROR_CODES.UNKNOWN_PROPERTY,{path:e},e,""),r=this.handleError(t);if(r)return r}return null}addFormat(e,t){if("object"==typeof e){for(let t in e)this.addFormat(t,e[t]);return this}this.formatValidators[e]=t}resolveRefs(e,t){if(void 0!==e.$ref){if((t=t||{})[e.$ref])return this.createError(i.ERROR_CODES.CIRCULAR_REFERENCE,{urls:Object.keys(t).join(", ")},"","");t[e.$ref]=!0,e=this.getSchema(e.$ref,t)}return e}getSchema(e,t){let r;if(void 0!==this.schemas[e])return r=this.schemas[e],this.resolveRefs(r,t);let i=e,n="";if(-1!==e.indexOf("#")&&(n=e.substring(e.indexOf("#")+1),i=e.substring(0,e.indexOf("#"))),"object"==typeof this.schemas[i]){r=this.schemas[i];let e=decodeURIComponent(n);if(""===e)return this.resolveRefs(r,t);if("/"!==e.charAt(0))return;let s=e.split("/").slice(1),o=0,l=s.length;for(o=0;o<l;o++){let e=s[o].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===r[e]){r=void 0;break}r=r[e]}if(void 0!==r)return this.resolveRefs(r,t)}void 0===this.missing[i]&&(this.missing.push(i),this.missing[i]=i,this.missingMap[i]=i)}searchSchemas(e,t){if(Array.isArray(e)){let r=0,i=e.length;for(r=0;r<i;r++)this.searchSchemas(e[r],t)}else if(e&&"object"==typeof e){"string"==typeof e.id&&isTrustedUrl(t,e.id)&&void 0===this.schemas[e.id]&&(this.schemas[e.id]=e);for(let r in e)if("enum"!==r)if("object"==typeof e[r])this.searchSchemas(e[r],t);else if("$ref"===r){let t=(0,n.getDocumentUri)(e[r]);t&&void 0===this.schemas[t]&&void 0===this.missingMap[t]&&(this.missingMap[t]=t)}}}addSchema(e,t){if("string"!=typeof e||void 0===t){if("object"!=typeof e||"string"!=typeof e.id)return;e=(t=e).id}e===(0,n.getDocumentUri)(e)+"#"&&(e=(0,n.getDocumentUri)(e)),this.schemas[e]=t,delete this.missingMap[e],(0,n.normSchema)(t,e),this.searchSchemas(t,e)}getSchemaMap(){let e={};for(let t in this.schemas)e[t]=this.schemas[t];return e}getSchemaUris(e){let t=[];for(let r in this.schemas)e&&!e.test(r)||t.push(r);return t}getMissingUris(e){let t=[];for(let r in this.missingMap)e&&!e.test(r)||t.push(r);return t}dropSchemas(){this.schemas={},this.reset()}reset(){this.missing=[],this.missingMap={},this.errors=[]}validateAll(e,t,r,n,s){let o;if(!(t=this.resolveRefs(t)))return null;if(t instanceof i.ValidationError)return this.errors.push(t),t;let l,a=this.errors.length,u=null,c=null;if(this.checkRecursive&&e&&"object"==typeof e){if(o=!this.scanned.length,e[this.validatedSchemasKey]){let r=e[this.validatedSchemasKey].indexOf(t);if(-1!==r)return this.errors=this.errors.concat(e[this.validationErrorsKey][r]),null}if(Object.isFrozen(e)&&-1!==(l=this.scannedFrozen.indexOf(e))){let e=this.scannedFrozenSchemas[l].indexOf(t);if(-1!==e)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[l][e]),null}if(this.scanned.push(e),Object.isFrozen(e))-1===l&&(l=this.scannedFrozen.length,this.scannedFrozen.push(e),this.scannedFrozenSchemas.push([])),u=this.scannedFrozenSchemas[l].length,this.scannedFrozenSchemas[l][u]=t,this.scannedFrozenValidationErrors[l][u]=[];else{if(!e[this.validatedSchemasKey])try{Object.defineProperty(e,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(e,this.validationErrorsKey,{value:[],configurable:!0})}catch(t){e[this.validatedSchemasKey]=[],e[this.validationErrorsKey]=[]}c=e[this.validatedSchemasKey].length,e[this.validatedSchemasKey][c]=t,e[this.validationErrorsKey][c]=[]}}let h=this.errors.length,d=this.validateBasic(e,t,s)||this.validateNumeric(e,t,s)||this.validateString(e,t,s)||this.validateArray(e,t,s)||this.validateObject(e,t,s)||this.validateCombinations(e,t,s)||this.validateHypermedia(e,t,s)||this.validateFormat(e,t,s)||this.validateDefinedKeywords(e,t,s)||null;if(o){for(;this.scanned.length;)delete this.scanned.pop()[this.validatedSchemasKey];this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(d||h!==this.errors.length)for(;r&&r.length||n&&n.length;){let e=r&&r.length?""+r.pop():null,t=n&&n.length?""+n.pop():null;d&&(d=d.prefixWith(e,t)),this.prefixErrors(h,e,t)}return null!==u?this.scannedFrozenValidationErrors[l][u]=this.errors.slice(a):null!==c&&(e[this.validationErrorsKey][c]=this.errors.slice(a)),this.handleError(d)}validateFormat(e,t){if("string"!=typeof t.format||!this.formatValidators[t.format])return null;let r=this.formatValidators[t.format].call(null,e,t);return"string"==typeof r||"number"==typeof r?this.createError(i.ERROR_CODES.FORMAT_CUSTOM,{message:r}).prefixWith(null,"format"):r&&"object"==typeof r?this.createError(i.ERROR_CODES.FORMAT_CUSTOM,{message:r.message||"?"},r.dataPath||null,r.schemaPath||"/format"):null}validateDefinedKeywords(e,t,r){for(let n in this.definedKeywords){if(void 0===t[n])continue;let s=this.definedKeywords[n],o=0,l=s.length;for(o=0;o<l;o++){let l=(0,s[o])(e,t[n],t,r);if("string"==typeof l||"number"==typeof l)return this.createError(i.ERROR_CODES.KEYWORD_CUSTOM,{key:n,message:l}).prefixWith(null,"format");if(l&&"object"==typeof l){let e=l.code;if("string"==typeof e){if(!i.ERROR_CODES[e])throw new Error("Undefined error code (use defineError): "+e);e=i.ERROR_CODES[e]}else"number"!=typeof e&&(e=i.ERROR_CODES.KEYWORD_CUSTOM);let t="object"==typeof l.message?l.message:{key:n,message:l.message||"?"},r=l.schemaPath||"/"+n.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(e,t,l.dataPath||null,r)}}}return null}validateBasic(e,t,r){let i=this.validateType(e,t,r);return i?i.prefixWith(null,"type"):null}validateType(e,t){if(void 0===t.type)return null;let r=typeof e;null===e?r="null":Array.isArray(e)&&(r="array");let n=t.type;"object"!=typeof n&&(n=[n]);let s=0,o=n.length;for(s=0;s<o;s++){let t=n[s];if(t===r||"integer"===t&&"number"===r&&e%1==0)return null}return this.createError(i.ERROR_CODES.INVALID_TYPE,{type:r,expected:n.join("/")})}validateEnum(e,t){if(void 0===t.enum)return null;let r=0,n=t.enum.length;for(r=0;r<n;r++){let i=t.enum[r];if(this.recursiveCompare(e,i))return null}return this.createError(i.ERROR_CODES.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?JSON.stringify(e):e})}validateNumeric(e,t,r){return this.validateMultipleOf(e,t,r)||this.validateMinMax(e,t,r)||this.validateNaN(e,t,r)||null}validateMultipleOf(e,t){let r=t.multipleOf||t.divisibleBy;if(void 0===r)return null;if("number"==typeof e){let t=e/r%1;if(t>=s&&t<o)return this.createError(i.ERROR_CODES.NUMBER_MULTIPLE_OF,{value:e,multipleOf:r})}return null}validateMinMax(e,t){if("number"!=typeof e)return null;if(void 0!==t.minimum){if(e<t.minimum)return this.createError(i.ERROR_CODES.NUMBER_MINIMUM,{value:e,minimum:t.minimum}).prefixWith(null,"minimum");if(t.exclusiveMinimum&&e===t.minimum)return this.createError(i.ERROR_CODES.NUMBER_MINIMUM_EXCLUSIVE,{value:e,minimum:t.minimum}).prefixWith(null,"exclusiveMinimum")}if(void 0!==t.maximum){if(e>t.maximum)return this.createError(i.ERROR_CODES.NUMBER_MAXIMUM,{value:e,maximum:t.maximum}).prefixWith(null,"maximum");if(t.exclusiveMaximum&&e===t.maximum)return this.createError(i.ERROR_CODES.NUMBER_MAXIMUM_EXCLUSIVE,{value:e,maximum:t.maximum}).prefixWith(null,"exclusiveMaximum")}return null}validateNaN(e){return"number"!=typeof e?null:!0===isNaN(e)||e===1/0||e===-1/0?this.createError(i.ERROR_CODES.NUMBER_NOT_A_NUMBER,{value:e}).prefixWith(null,"type"):null}validateString(e,t,r){return this.validateStringLength(e,t,r)||this.validateStringPattern(e,t,r)||null}validateStringLength(e,t){return"string"!=typeof e?null:void 0!==t.minLength&&e.length<t.minLength?this.createError(i.ERROR_CODES.STRING_LENGTH_SHORT,{length:e.length,minimum:t.minLength}).prefixWith(null,"minLength"):void 0!==t.maxLength&&e.length>t.maxLength?this.createError(i.ERROR_CODES.STRING_LENGTH_LONG,{length:e.length,maximum:t.maxLength}).prefixWith(null,"maxLength"):null}validateStringPattern(e,t){return"string"!=typeof e||void 0===t.pattern?null:new RegExp(t.pattern).test(e)?null:this.createError(i.ERROR_CODES.STRING_PATTERN,{pattern:t.pattern}).prefixWith(null,"pattern")}validateArray(e,t,r){return Array.isArray(e)&&(this.validateArrayLength(e,t,r)||this.validateArrayUniqueItems(e,t,r)||this.validateArrayItems(e,t,r))||null}validateArrayLength(e,t){let r;return void 0!==t.minItems&&e.length<t.minItems&&(r=this.createError(i.ERROR_CODES.ARRAY_LENGTH_SHORT,{length:e.length,minimum:t.minItems}).prefixWith(null,"minItems"),this.handleError(r))?r:void 0!==t.maxItems&&e.length>t.maxItems&&(r=this.createError(i.ERROR_CODES.ARRAY_LENGTH_LONG,{length:e.length,maximum:t.maxItems}).prefixWith(null,"maxItems"),this.handleError(r))?r:null}validateArrayUniqueItems(e,t){if(t.uniqueItems){let t=0,r=e.length;for(t=0;t<r;t++){let n=0;for(n=t+1;n<r;n++)if(recursiveCompare(e[t],e[n])){let e=this.createError(i.ERROR_CODES.ARRAY_UNIQUE,{match1:t,match2:n}).prefixWith(null,"uniqueItems");if(this.handleError(e))return e}}}return null}validateArrayItems(e,t,r){if(void 0===t.items)return null;let n,s;if(Array.isArray(t.items)){let o=e.length;for(s=0;s<o;s++)if(s<t.items.length){if(n=this.validateAll(e[s],t.items[s],[s],["items",s],r+"/"+s))return n}else if(void 0!==t.additionalItems)if("boolean"==typeof t.additionalItems){if(!t.additionalItems&&(n=this.createError(i.ERROR_CODES.ARRAY_ADDITIONAL_ITEMS,{}).prefixWith(""+s,"additionalItems"),this.handleError(n)))return n}else if(n=this.validateAll(e[s],t.additionalItems,[s],["additionalItems"],r+"/"+s))return n}else{let i=e.length;for(s=0;s<i;s++)if(n=this.validateAll(e[s],t.items,[s],["items"],r+"/"+s))return n}return null}validateObject(e,t,r){return"object"!=typeof e||null===e||Array.isArray(e)?null:this.validateObjectMinMaxProperties(e,t,r)||this.validateObjectRequiredProperties(e,t,r)||this.validateObjectProperties(e,t,r)||this.validateObjectDependencies(e,t,r)||null}validateObjectMinMaxProperties(e,t){let r,n=Object.keys(e);return void 0!==t.minProperties&&n.length<t.minProperties&&(r=this.createError(i.ERROR_CODES.OBJECT_PROPERTIES_MINIMUM,{propertyCount:n.length,minimum:t.minProperties}).prefixWith(null,"minProperties"),this.handleError(r))?r:void 0!==t.maxProperties&&n.length>t.maxProperties&&(r=this.createError(i.ERROR_CODES.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:n.length,maximum:t.maxProperties}).prefixWith(null,"maxProperties"),this.handleError(r))?r:null}validateObjectRequiredProperties(e,t){if(void 0!==t.required){let r=0,n=t.required.length;for(r=0;r<n;r++){let n=t.required[r];if(void 0===e[n]){let e=this.createError(i.ERROR_CODES.OBJECT_REQUIRED,{key:n}).prefixWith(null,""+r).prefixWith(null,"required");if(this.handleError(e))return e}}}return null}validateObjectProperties(e,t,r){let n;for(let s in e){let o=r+"/"+s.replace(/~/g,"~0").replace(/\//g,"~1"),l=!1;if(void 0!==t.properties&&void 0!==t.properties[s]&&(l=!0,n=this.validateAll(e[s],t.properties[s],[s],["properties",s],o)))return n;if(void 0!==t.patternProperties)for(let r in t.patternProperties)if(new RegExp(r).test(s)&&(l=!0,n=this.validateAll(e[s],t.patternProperties[r],[s],["patternProperties",r],o)))return n;if(l)this.trackUnknownProperties&&(this.knownPropertyPaths[o]=!0,delete this.unknownPropertyPaths[o]);else if(void 0!==t.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[o]=!0,delete this.unknownPropertyPaths[o]),"boolean"==typeof t.additionalProperties){if(!t.additionalProperties&&(n=this.createError(i.ERROR_CODES.OBJECT_ADDITIONAL_PROPERTIES,{}).prefixWith(s,"additionalProperties"),this.handleError(n)))return n}else if(n=this.validateAll(e[s],t.additionalProperties,[s],["additionalProperties"],o))return n}else this.trackUnknownProperties&&!this.knownPropertyPaths[o]&&(this.unknownPropertyPaths[o]=!0)}return null}validateObjectDependencies(e,t,r){let n;if(void 0!==t.dependencies)for(let s in t.dependencies)if(void 0!==e[s]){let o=t.dependencies[s];if("string"==typeof o){if(void 0===e[o]&&(n=this.createError(i.ERROR_CODES.OBJECT_DEPENDENCY_KEY,{key:s,missing:o}).prefixWith(null,s).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(Array.isArray(o)){let t=0,r=o.lenth;for(t=0;t<r;t++){let r=o[t];if(void 0===e[r]&&(n=this.createError(i.ERROR_CODES.OBJECT_DEPENDENCY_KEY,{key:s,missing:r}).prefixWith(null,""+t).prefixWith(null,s).prefixWith(null,"dependencies"),this.handleError(n)))return n}}else if(n=this.validateAll(e,o,[],["dependencies",s],r))return n}return null}validateCombinations(e,t,r){return this.validateAllOf(e,t,r)||this.validateAnyOf(e,t,r)||this.validateOneOf(e,t,r)||this.validateNot(e,t,r)||null}validateAllOf(e,t,r){if(void 0===t.allOf)return null;let i,n=0,s=t.allOf.length;for(n=0;n<s;n++){let s=t.allOf[n];if(i=this.validateAll(e,s,[],["allOf",n],r))return i}return null}validateAnyOf(e,t,r){if(void 0===t.anyOf)return null;let n,s,o=[],l=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,s=this.knownPropertyPaths);let a=!0,u=0,c=t.anyOf.length;for(u=0;u<c;u++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});let i=t.anyOf[u],c=this.errors.length,h=this.validateAll(e,i,[],["anyOf",u],r);if(null===h&&c===this.errors.length){if(this.errors=this.errors.slice(0,l),this.trackUnknownProperties){for(let e in this.knownPropertyPaths)s[e]=!0,delete n[e];for(let e in this.unknownPropertyPaths)s[e]||(n[e]=!0);a=!1;continue}return null}h&&o.push(h.prefixWith(null,""+u).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=s),a?(o=o.concat(this.errors.slice(l)),this.errors=this.errors.slice(0,l),this.createError(i.ERROR_CODES.ANY_OF_MISSING,{},"","/anyOf",o)):void 0}validateOneOf(e,t,r){if(void 0===t.oneOf)return null;let n,s,o=null,l=[],a=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,s=this.knownPropertyPaths);let u=0,c=t.oneOf.length;for(u=0;u<c;u++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});let c=t.oneOf[u],h=this.errors.length,d=this.validateAll(e,c,[],["oneOf",u],r);if(null===d&&h===this.errors.length){if(null!==o)return this.errors=this.errors.slice(0,a),this.createError(i.ERROR_CODES.ONE_OF_MULTIPLE,{index1:o,index2:u},"","/oneOf");if(o=u,this.trackUnknownProperties){for(let e in this.knownPropertyPaths)s[e]=!0,delete n[e];for(let e in this.unknownPropertyPaths)s[e]||(n[e]=!0)}}else d&&l.push(d)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=s),null===o?(l=l.concat(this.errors.slice(a)),this.errors=this.errors.slice(0,a),this.createError(i.ERROR_CODES.ONE_OF_MISSING,{},"","/oneOf",l)):(this.errors=this.errors.slice(0,a),null)}validateNot(e,t,r){if(void 0===t.not)return null;let n,s,o=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,s=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});let l=this.validateAll(e,t.not,null,null,r),a=this.errors.slice(o);return this.errors=this.errors.slice(0,o),this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=s),null===l&&0===a.length?this.createError(i.ERROR_CODES.NOT_PASSED,{},"","/not"):null}validateHypermedia(e,t,r){if(!t.links)return null;let i,n=0,s=t.links.length;for(n=0;n<s;n++){let s=t.links[n];if("describedby"===s.rel){let t=new UriTemplate(s.href),o=!0,l=0,a=t.varNames.length;for(l=0;l<a;l++)if(!(t.varNames[l]in e)){o=!1;break}if(o){let s={$ref:t.fillFromObject(e)};if(i=this.validateAll(e,s,[],["links",n],r))return i}}}}}t.default=l=l}])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=1,n=2;t.default=class{constructor(e,t){this._collection=e,this._kind=t,this._index=0}next(){if(this._collection){if(this._index<this._collection.length){const e=this._collection.at(this._index);let t;if(this._index++,this._kind===i)t=e;else{const r=this._collection.modelId(e.attributes);t=this._kind===n?r:[r,e]}return{value:t,done:!1}}this._collection=void 0}return{value:void 0,done:!0}}}},function(e,t,r){"use strict";var i=o(r(1)),n=o(r(16)),s=o(r(5));function o(e){return e&&e.__esModule?e:{default:e}}e.exports.AbstractModel=i.default,e.exports.AbstractCollection=n.default,e.exports.CollectionIterator=s.default},function(e,t,r){(function(t){var r="Expected a function",i="__lodash_placeholder__",n=1,s=2,o=4,l=8,a=16,u=32,c=64,h=128,d=512,f=1/0,p=9007199254740991,m=1.7976931348623157e308,g=NaN,y=[["ary",h],["bind",n],["bindKey",s],["curry",l],["curryRight",a],["flip",d],["partial",u],["partialRight",c],["rearg",256]],v="[object Function]",_="[object GeneratorFunction]",b="[object Symbol]",O=/^\s+|\s+$/g,E=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,R=/\{\n\/\* \[wrapped with (.+)\] \*/,M=/,? & /,S=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,P=/^\[object .+?Constructor\]$/,A=/^0o[0-7]+$/i,j=/^(?:0|[1-9]\d*)$/,I=parseInt,N="object"==typeof t&&t&&t.Object===Object&&t,T="object"==typeof self&&self&&self.Object===Object&&self,w=N||T||Function("return this")();function U(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function k(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,i){var n=e.length,s=r+(i?1:-1);for(;i?s--:++s<n;)if(t(e[s],s,e))return s;return-1}(e,C,r);var i=r-1,n=e.length;for(;++i<n;)if(e[i]===t)return i;return-1}(e,t,0)>-1}function C(e){return e!=e}function D(e,t){for(var r=-1,n=e.length,s=0,o=[];++r<n;){var l=e[r];l!==t&&l!==i||(e[r]=i,o[s++]=r)}return o}var L,F,B,$=Function.prototype,V=Object.prototype,G=w["__core-js_shared__"],q=(L=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",K=$.toString,Y=V.hasOwnProperty,J=V.toString,W=RegExp("^"+K.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),H=Object.create,z=Math.max,X=Math.min,Q=(F=se(Object,"defineProperty"),(B=se.name)&&B.length>2?F:void 0);function Z(e){return!(!de(e)||(t=e,q&&q in t))&&(function(e){var t=de(e)?J.call(e):"";return t==v||t==_}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?W:P).test(function(e){if(null!=e){try{return K.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function ee(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r,i=de(r=e.prototype)?H(r):{},n=e.apply(i,t);return de(n)?n:i}}function te(e,t,r,i,o,u,c,f,p,m){var g=t&h,y=t&n,v=t&s,_=t&(l|a),b=t&d,O=v?void 0:ee(e);return function n(){for(var s=arguments.length,l=Array(s),a=s;a--;)l[a]=arguments[a];if(_)var h=ne(n),d=function(e,t){for(var r=e.length,i=0;r--;)e[r]===t&&i++;return i}(l,h);if(i&&(l=function(e,t,r,i){for(var n=-1,s=e.length,o=r.length,l=-1,a=t.length,u=z(s-o,0),c=Array(a+u),h=!i;++l<a;)c[l]=t[l];for(;++n<o;)(h||n<s)&&(c[r[n]]=e[n]);for(;u--;)c[l++]=e[n++];return c}(l,i,o,_)),u&&(l=function(e,t,r,i){for(var n=-1,s=e.length,o=-1,l=r.length,a=-1,u=t.length,c=z(s-l,0),h=Array(c+u),d=!i;++n<c;)h[n]=e[n];for(var f=n;++a<u;)h[f+a]=t[a];for(;++o<l;)(d||n<s)&&(h[f+r[o]]=e[n++]);return h}(l,u,c,_)),s-=d,_&&s<m){var E=D(l,h);return re(e,t,te,n.placeholder,r,l,E,f,p,m-s)}var R=y?r:this,M=v?R[e]:e;return s=l.length,f?l=function(e,t){for(var r=e.length,i=X(t.length,r),n=function(e,t){var r=-1,i=e.length;for(t||(t=Array(i));++r<i;)t[r]=e[r];return t}(e);i--;){var s=t[i];e[i]=ae(s,r)?n[s]:void 0}return e}(l,f):b&&s>1&&l.reverse(),g&&p<s&&(l.length=p),this&&this!==w&&this instanceof n&&(M=O||ee(M)),M.apply(R,l)}}function re(e,t,r,i,a,h,d,f,p,m){var g=t&l;t|=g?u:c,(t&=~(g?c:u))&o||(t&=~(n|s));var y=r(e,t,a,g?h:void 0,g?d:void 0,g?void 0:h,g?void 0:d,f,p,m);return y.placeholder=i,ue(y,e,t)}function ie(e,t,i,o,h,d,f,p){var m=t&s;if(!m&&"function"!=typeof e)throw new TypeError(r);var g=o?o.length:0;if(g||(t&=~(u|c),o=h=void 0),f=void 0===f?f:z(pe(f),0),p=void 0===p?p:pe(p),g-=h?h.length:0,t&c){var y=o,v=h;o=h=void 0}var _=[e,t,i,o,h,y,v,d,f,p];if(e=_[0],t=_[1],i=_[2],o=_[3],h=_[4],!(p=_[9]=null==_[9]?m?0:e.length:z(_[9]-g,0))&&t&(l|a)&&(t&=~(l|a)),t&&t!=n)b=t==l||t==a?function(e,t,r){var i=ee(e);return function n(){for(var s=arguments.length,o=Array(s),l=s,a=ne(n);l--;)o[l]=arguments[l];var u=s<3&&o[0]!==a&&o[s-1]!==a?[]:D(o,a);return(s-=u.length)<r?re(e,t,te,n.placeholder,void 0,o,u,void 0,void 0,r-s):U(this&&this!==w&&this instanceof n?i:e,this,o)}}(e,t,p):t!=u&&t!=(n|u)||h.length?te.apply(void 0,_):function(e,t,r,i){var s=t&n,o=ee(e);return function t(){for(var n=-1,l=arguments.length,a=-1,u=i.length,c=Array(u+l),h=this&&this!==w&&this instanceof t?o:e;++a<u;)c[a]=i[a];for(;l--;)c[a++]=arguments[++n];return U(h,s?r:this,c)}}(e,t,i,o);else var b=function(e,t,r){var i=t&n,s=ee(e);return function t(){return(this&&this!==w&&this instanceof t?s:e).apply(i?r:this,arguments)}}(e,t,i);return ue(b,e,t)}function ne(e){return e.placeholder}function se(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Z(r)?r:void 0}function oe(e){var t=e.match(R);return t?t[1].split(M):[]}function le(e,t){var r=t.length,i=r-1;return t[i]=(r>1?"& ":"")+t[i],t=t.join(r>2?", ":" "),e.replace(E,"{\n/* [wrapped with "+t+"] */\n")}function ae(e,t){return!!(t=null==t?p:t)&&("number"==typeof e||j.test(e))&&e>-1&&e%1==0&&e<t}var ue=Q?function(e,t,r){var i,n=t+"";return Q(e,"toString",{configurable:!0,enumerable:!1,value:(i=le(n,ce(oe(n),r)),function(){return i})})}:function(e){return e};function ce(e,t){return function(e,t){for(var r=-1,i=e?e.length:0;++r<i&&!1!==t(e[r],r,e););}(y,function(r){var i="_."+r[0];t&r[1]&&!k(e,i)&&e.push(i)}),e.sort()}var he=function(e,t){return t=z(void 0===t?e.length-1:t,0),function(){for(var r=arguments,i=-1,n=z(r.length-t,0),s=Array(n);++i<n;)s[i]=r[t+i];i=-1;for(var o=Array(t+1);++i<t;)o[i]=r[i];return o[t]=s,U(e,this,o)}}(function(e,t,r){var i=n;if(r.length){var s=D(r,ne(he));i|=u}return ie(e,i,t,r,s)});function de(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function fe(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&J.call(e)==b}(e))return g;if(de(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=de(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var r=x.test(e);return r||A.test(e)?I(e.slice(2),r?2:8):S.test(e)?g:+e}(e))===f||e===-f?(e<0?-1:1)*m:e==e?e:0:0===e?e:0}function pe(e){var t=fe(e),r=t%1;return t==t?r?t-r:t:0}he.placeholder={},e.exports=he}).call(this,r(8))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=n},function(e,t){e.exports=s},function(e,t){e.exports=o},function(e,t){e.exports=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(2),n=r(3),s=a(r(1)),o=r(4),l=a(r(5));function a(e){return e&&e.__esModule?e:{default:e}}const u=(e,t)=>e.filter(e=>Object.keys(t).every(r=>e._attributes[r]===t[r])),c=r(0),h={add:!0,remove:!0,merge:!0},d={add:!0,remove:!1};t.default=class extends i.AugmentedObject{constructor(e,t){super(t),this.length=0,this.models=[],this._byId={},this.schema=null,this.validationMessages={valid:!0},t||(t={}),this.preinitialize(e,t),t.model&&(this.model=t.model),void 0!==t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize(e,t),e&&this.add(e,(0,n.extend)({silent:!0},t)),this.model||(this.model=new s.default)}preinitialize(e,t){}initialize(e,t){}toJSON(){let e=0;const t=[],r=this.models.length;for(e=0;e<r;e++)t[e]=this.models[e].toJSON();return t}add(e,t){return this.set(e,(0,n.extend)({merge:!1},t,d))}remove(e,t){t=(0,n.extend)({},t);const r=Array.isArray(e);e=r?[e]:e.slice();let i=this._removeModels(e,t);return!t.silent&&i.length&&(t.changes={added:[],merged:[],removed:i},this.trigger("update",this,t)),r?i[0]:i}set(e,t){if(null===e)return;(t=(0,n.extend)({},h,t)).parse&&!this._isModel(e)&&(e=this.parse(e,t)||[]);let r=!Array.isArray(e);e=r?[e]:e.slice();let i=t.at;null!=i&&(i=+i),i>this.length&&(i=this.length),i<0&&(i+=this.length+1);let s,o,l=[],a=[],u=[],c=[],d={},f=t.add,p=t.merge,m=t.remove,g=!1,y=this.comparator&&null==i&&!1!==t.sort,v=(0,n.isString)(this.comparator)?this.comparator:null;const _=e.length;for(o=0;o<_;o++){s=e[o];let r=this.get(s);if(r){if(p&&s!==r){let e=this._isModel(s)?s._attributes:s;t.parse&&(e=r.parse(e,t)),r.set(e,t),u.push(r),y&&!g&&(g=r.hasChanged(v))}d[r.cid]||(d[r.cid]=!0,l.push(r)),e[o]=r}else f&&(s=e[o]=this._prepareModel(s,t))&&(a.push(s),this._addReference(s,t),d[s.cid]=!0,l.push(s))}if(m){for(o=0;o<this.length;o++)d[(s=this.models[o]).cid]||c.push(s);c.length&&this._removeModels(c,t)}let b=!1,O=!y&&f&&m;if(l.length&&O?(b=this.length!==l.length||(0,n.some)(this.models,(e,t)=>e!==l[t]),this.models.length=0,(0,n.splice)(this.models,l,0),this.length=this.models.length):a.length&&(y&&(g=!0),(0,n.splice)(this.models,a,null==i?this.length:i),this.length=this.models.length),g&&this.sort({silent:!0}),!t.silent){for(o=0;o<a.length;o++)null!=i&&(t.index=i+o),(s=a[o]).trigger("add",s,this,t);(g||b)&&this.trigger("sort",this,t),(a.length||c.length||u.length)&&(t.changes={added:a,removed:c,merged:u},this.trigger("update",this,t))}return r?e[0]:e}reset(e,t){t=t?c(t):{};for(let e=0;e<this.models.length;e++)this._removeReference(this.models[e],t);return t.previousModels=this.models,this._reset(),e=this.add(e,(0,n.extend)({silent:!0},t)),t.silent||this.trigger("reset",this,t),e}push(e,t){return this.add(e,(0,n.extend)({at:this.length},t))}pop(e){const t=this.at(this.length-1);return this.remove(t,e)}unshift(e,t){return this.add(e,(0,n.extend)({at:0},t))}shift(e){const t=this.at(0);return this.remove(t,e)}slice(...e){return this.models.slice(e)}get(e){if(null!=e)return this._byId[e]||this._byId[this.modelId(this._isModel(e)?e._attributes:e)]||e.cid&&this._byId[e.cid]}has(e){return null!==this.get(e)}at(e){return e<0&&(e+=this.length),this.models[e]}find(e){const t=u(this.models,e);return t&&t.length>0?t[0]:null}filter(e){return u(this.models,e)}where(e,t){return t?this.find(e):this.filter(e)}findWhere(e){return this.where(e,!0)}sort(e){let t=this.comparator;if(!t)throw new Error("Cannot sort a set without a comparator");e||(e={});let r=t.length;return(0,n.isFunction)(t)&&(t=t.bind(this)),1===r||(0,n.isString)(t)?this.models=this.sortBy(t):this.models.sort(t),e.silent||this.trigger("sort",this,e),this}pluck(e){let t=0;const r=[],i=this.models.length;for(t=0;t<i;t++)r[t]=this.models[t].toJSON()[e];return r}fetch(e){}create(e,t){let r=(t=t?c(t):{}).wait;if(!(e=this._prepareModel(e,t)))return!1;r||this.add(e,t);let i=this,n=t.success;return t.success=((e,t,s)=>{r&&i.add(e,s),n&&n.call(s.context,e,t,s)}),e.save(null,t),e}parse(e,t){return e}clone(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})}modelId(e){return e&&this.model&&this.model.idAttribute?e[this.model.idAttribute||"id"]:"id"}values(){return new l.default(this,ITERATOR_VALUES)}keys(){return new l.default(this,ITERATOR_KEYS)}entries(){return new l.default(this,ITERATOR_KEYSVALUES)}supportsValidation(){return!(!this.schema||null===this.schema||this.schema==={})}isValid(){return!this.validationMessages||this.validationMessages.valid}getValidationMessages(){return this.validationMessages&&this.validationMessages.messages?this.validationMessages.messages:[]}validate(){if(this.supportsValidation()){let e=[];this.validationMessages.messages=e,this.validationMessages.valid=!0;const t=this.toJSON(),r=t&&Array.isArray(t)?t.length:0;let i=0;this._validationFramework||(this._validationFramework=new o.ValidationFramework);const n=this._validationFramework;for(i=0;i<r;i++)e[i]=n.validate(t[i],this.schema),e[i].valid||(this.validationMessages.valid=!1)}else this.validationMessages.valid=!0;return this.validationMessages}sync(e,t,r){}save(e){this.sync("create",this,e)}update(e){this.sync("update",this,e)}remove(e){this.sync("delete",this,e)}sortByKey(e){if(e){const t=this.toJSON();if(t){const r=(0,n.sortObjects)(t,e);this.reset(r)}}}isEmpty(){return 0===this.length}size(){return this.length}toString(){let e={};try{e=JSON.stringify(this.toJSON())}catch(e){console.error(e)}return e}_reset(){this.length=0,this.models=[],this._byId={}}_prepareModel(e,t){if(this._isModel(e))return e.collection||(e.collection=this),e;(t=t?c(t):{}).collection=this;const r=new s.default(e,t);return r.validationError?(this.trigger("invalid",this,r.validationError,t),!1):r}_removeModels(e,t){let r=[];for(let i=0;i<e.length;i++){let n=this.get(e[i]);if(!n)continue;let s=this.at(n);this.models.splice(s,1),this.length--,delete this._byId[n.cid];let o=this.modelId(n._attributes);null!=o&&delete this._byId[o],t.silent||(t.index=s,n.trigger("remove",n,this,t)),r.push(n),this._removeReference(n,t)}return r}_isModel(e){return e instanceof s.default}_addReference(e,t){this._byId[e.cid]=e;let r=this.modelId(e._attributes);null!=r&&(this._byId[r]=e),e.on("all",this._onModelEvent,this)}_removeReference(e,t){delete this._byId[e.cid];let r=this.modelId(e._attributes);null!=r&&delete this._byId[r],this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)}_onModelEvent(e,t,r,i){if(t){if(("add"===e||"remove"===e)&&r!==this)return;if("destroy"===e&&this.remove(t,i),"change"===e){let e=this.modelId(t.previousAttributes()),r=this.modelId(t._attributes);e!==r&&(null!=e&&delete this._byId[e],null!=r&&(this._byId[r]=t))}}this.trigger.apply(this,arguments)}}}])});
//# sourceMappingURL=core-next-model.js.map

/***/ }),

/***/ "./node_modules/next-core-object/dist/next-core-object.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-core-object/dist/next-core-object.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! lodash.bind */ "./node_modules/lodash.bind/index.js")):undefined}(this,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=t.EVENT_SPLITTER=/\s+/,o=t.eventsApi=((e,t,r,i,s)=>{let l,u=0;if(r&&"object"==typeof r){void 0!==i&&"context"in s&&void 0===s.context&&(s.context=i);for(l=Object.keys(r);u<l.length;u++)t=o(e,t,l[u],r[l[u]],s)}else if(r&&n.test(r))for(l=r.split(n);u<l.length;u++)t=e(t,l[u],i,s);else t=e(t,r,i,s);return t}),i=(t.internalOn=((e,t,r,n,s)=>{if(e._events=o(i,e._events||{},t,r,{context:n,ctx:e,listening:s}),s){(e._listeners||(e._listeners={}))[s.id]=s}return e}),t.onApi=((e,t,r,n)=>{if(r){const o=e[t]||(e[t]=[]),i=n.context,s=n.ctx,l=n.listening;l&&l.count++,o.push({callback:r,context:i,ctx:i||s,listening:l})}return e})),s=(t.offApi=((e,t,r,n)=>{if(!e)return;let o,i=0;const s=n.context,l=n.listeners;if(!t&&!r&&!s){const e=Object.keys(l);for(;i<e.length;i++)delete l[(o=l[e[i]]).id],delete o.listeningTo[o.objId];return}let u=t?[t]:Object.keys(e);for(;i<u.length;i++){const n=e[t=u[i]];if(!n)break;const c=[];let f=0;for(f=0;f<n.length;f++){const e=n[f];r&&r!==e.callback&&r!==e.callback._callback||s&&s!==e.context?c.push(e):(o=e.listening)&&0==--o.count&&(delete l[o.id],delete o.listeningTo[o.objId])}c.length?e[t]=c:delete e[t]}return e}),t.triggerApi=((e,t,r,n)=>{if(e){const r=e[t];let o=e.all;r&&o&&(o=o.slice()),r&&s(r,n),o&&s(o,[t].concat(n))}return e}),t.triggerEvents=((e,t)=>{let r,n=-1;const o=e.length,i=t[0],s=t[1],l=t[2];switch(t.length){case 0:for(;++n<o;)(r=e[n]).callback.call(r.ctx);return;case 1:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i);return;case 2:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i,s);return;case 3:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i,s,l);return;default:for(;++n<o;)(r=e[n]).callback.apply(r.ctx,t);return}}))},function(e,t,r){"use strict";var n=s(r(2)),o=s(r(5)),i=r(0);function s(e){return e&&e.__esModule?e:{default:e}}e.exports.AugmentedObject=n.default,e.exports.Configuration=o.default,e.exports.eventsApi=i.eventsApi,e.exports.eventsApi=i.internalOn,e.exports.eventsApi=i.offApi,e.exports.eventsApi=i.triggerApi},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(0);const i=r(4);t.default=class{constructor(e){e||(e={}),this._options||(this._options={}),Object.assign(this._options,e),e&&e.events?this._events=e.events:this._events={},this._listeningTo={},this._listenId={},this._listeners={}}initialize(...e){return this}get options(){return this._options}set options(e){this._options=e}get events(){return this._events}set events(e){this._events=e}trigger(e,...t){if(this._events){const r=Array.isArray(t)?t:Array.from(t);(0,o.eventsApi)(o.triggerApi,this._events,e,void 0,r)}return this}once(e,t,r){const n=(0,o.eventsApi)(this._onceMap,{},e,t,i(this.off,this));return"string"==typeof e&&null==r&&(t=void 0),this.on(n,t,r)}off(e,t,r){return this._events&&(this._events=(0,o.eventsApi)(o.offApi,this._events,e,t,{context:r,listeners:this._listeners})),this}stopListening(e,t,r){const n=this._listeningTo;if(n){const o=e?[e._listenId]:Object.keys(n);let i=0;for(i=0;i<o.length;i++){const e=n[o[i]];if(!e)break;e.obj.off(t,r,this)}}return this}on(e,t,r){return(0,o.internalOn)(this,e,t,r)}listenTo(e,t,r){if(e){const i=e._listenId||(e._listenId=(0,n.uniqueId)("l")),s=this._listeningTo||(this._listeningTo={});let l=s[i];if(!l){const t=this._listenId||(this._listenId=(0,n.uniqueId)("l"));l=s[i]={obj:e,objId:i,id:t,listeningTo:s,count:0}}(0,o.internalOn)(e,t,r,this,l)}return this}listenToOnce(e,t,r){const n=(0,o.eventsApi)(this._onceMap,{},t,r,i(this.stopListening,this,e));return this.listenTo(e,n)}_onceMap(e,t,r,o){if(r){const i=e[t]=(0,n.once)(()=>{o(t,i),r.apply(this,arguments)});i._callback=r}return e}}},function(e,t,r){"use strict";e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.default=((e,t)=>{let r,o;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return o=Number.parseInt(e),()=>(--o>0&&(r=t.apply(void 0,n)),o<=1&&(t=void 0),r)})},function(e,t,r){var n=S(r(4)),o=S(r(1)),i=S(r(5)),s=S(r(6)),l=S(r(7)),u=S(r(8)),c=S(r(0)),f=S(r(9)),a=S(r(10)),p=S(r(11)),d=S(r(12)),b=S(r(13)),y=S(r(14)),_=S(r(15)),h=S(r(16)),g=S(r(2)),v=S(r(17)),x=r(18),O=r(19),j=r(20),M=S(r(21)),m=S(r(22));function S(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=O.shuffle,e.exports.prettyPrint=O.prettyPrint,e.exports.binarySearch=O.binarySearch,e.exports.TransformerType=O.TransformerType,e.exports.Transformer=O.Transformer,e.exports.wrap=O.wrap,e.exports.filterObject=O.filterObject,e.exports.findByMatchingProperties=O.findByMatchingProperties,e.exports.sortObjects=j.sortObjects,e.exports.mergeSort=j.mergeSort,e.exports.quickSort=j.quickSort,e.exports.insertionSort=j.insertionSort,e.exports.bubbleSort=j.bubbleSort,e.exports.formatDate=M.default,e.exports.formatBinary=m.default,e.exports.isString=n.default,e.exports.isFunction=o.default,e.exports.extend=i.default,e.exports.pad=s.default,e.exports.uniqueId=l.default,e.exports.has=u.default,e.exports.isObject=c.default,e.exports.allKeys=f.default,e.exports.create=a.default,e.exports.result=p.default,e.exports.arrayHas=d.default,e.exports.exec=b.default,e.exports.isDefined=y.default,e.exports.some=_.default,e.exports.splice=h.default,e.exports.before=g.default,e.exports.once=v.default,e.exports.fibonacci=x.fibonacci,e.exports.fibonacciSequence=x.fibonacciSequence},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});let n=0;t.default=(e=>`${e}${++n}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,n.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,n.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,n.default)(r)?r.call(e):r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,...r)=>{const n=e.split("."),o=n.pop(),i=n.length;let s=0;for(s=0;s<i;s++)t=t[n[s]];return t[o].apply(t,r)})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>void 0!==e)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let n=Array(e.length-r);const o=t.length;let i;for(i=0;i<n.length;i++)n[i]=e[i+r];for(i=0;i<o;i++)e[i+r]=t[i];for(i=0;i<n.length;i++)e[i+o+r]=n[i]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,n.default)(2,e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});const n=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(n(r));return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,n,o=0;for(o=e.length-1;o>0;o--)n=Math.floor(Math.random()*(o+1)),r=t[o],t[o]=t[n],t[n]=r;return t}),t.prettyPrint=((e,t,r)=>{let n="\t";return t&&(n=" ".repeat(r)),JSON.stringify(e,null,n)}),t.binarySearch=((e,t,r)=>{let n,o,i=0,s=e.length-1;for(;i<=s;)if((o=r(e[n=Math.floor((i+s)/2)],t))<0)i=n+1;else{if(!(o>0))return n;s=n-1}return null});const o=t.TransformerType={};o.STRING=Symbol("String"),o.INTEGER=Symbol("Integer"),o.NUMBER=Symbol("Number"),o.BOOLEAN=Symbol("Boolean"),o.ARRAY=Symbol("Array"),o.OBJECT=Symbol("Object"),o.NULL=Symbol("Null"),t.Transformer=class{constructor(){this.type=o}static transform(e,t){let r=null;switch(t){case o.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case o.INTEGER:r=parseInt(e);break;case o.NUMBER:r=Number(e);break;case o.BOOLEAN:r=Boolean(e);break;case o.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case o.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?o.NULL:"string"==typeof e?o.STRING:"number"==typeof e?o.NUMBER:"boolean"==typeof e?o.BOOLEAN:Array.isArray(e)?o.ARRAY:"object"==typeof e?o.OBJECT:void 0}},t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(n)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const n=t.length;let o=0;for(o=0;o<n;o++)r[t[o]]=e[t[o]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=((e,t)=>e.sort((e,r)=>{const n=e[t],o=r[t];return n<o?-1:n>o?1:0}));const n=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),i=e.slice(t);return o(n(r),n(i))}),o=(e,t)=>{let r=[],n=0,o=0;for(;n<e.length&&o<t.length;)e[n]<t[o]?(r.push(e[n]),n++):(r.push(t[o]),o++);return r.concat(e.slice(n)).concat(t.slice(o))},i=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,n=[],o=[],s=e[0];for(t=1;t<r;t++)e[t]<s?n.push(e[t]):o.push(e[t]);return i(n).concat(s,i(o))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let n,o,i;for(n=1;n<r;n++){for(i=t[n],o=n-1;o>=0&&t[o]>i;o--)t[o+1]=t[o];t[o+1]=i}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,n,o;const i=(t=e.slice()).length-1;do{for(r=!1,n=0;n<i;n++)t[n]>t[n+1]&&(o=t[n],t[n]=t[n+1],t[n+1]=o,r=!0)}while(r)}return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),i=e.getMinutes();return e.getSeconds(),`${r}/${n}/${t} ${o%12||12}:${i<10?"0"+i:i}${o<12?"am":"pm"}`})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(e=>{let t=0,r=e,n="";for(t=0;t<32;t++,n+=String(r>>>31),r<<=1);return n})(e).split("").reverse().join("").substring(0,t))}])},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={LoggerLevel:"error",MessageBundle:"Messages",AsynchronousQueueTimeout:2e3,ApplicationInitProcessTimeout:1e3}}])});
//# sourceMappingURL=next-core-object.js.map

/***/ }),

/***/ "./node_modules/next-core-security/dist/next-core-security.js":
/*!********************************************************************!*\
  !*** ./node_modules/next-core-security/dist/next-core-security.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n={};n.OAUTH2=Symbol("oauth2"),n.ACL=Symbol("acl"),t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6);!function(e){e&&e.__esModule}(r(0));t.default=class extends n.AugmentedObject{constructor(e){super(),this._type=e,this._uri=""}get uri(){return this._uri}set uri(e){this._uri=e}get type(){return this._type}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(1)),o=i(r(0));function i(e){return e&&e.__esModule?e:{default:e}}t.default=class extends n.default{constructor(){super(o.default.OAUTH2),this.accessToken="",this.authorizationToken=""}authorize(e){this.authorizationToken=""}access(e){this.accessToken=""}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(1)),o=i(r(0));function i(e){return e&&e.__esModule?e:{default:e}}t.default=class extends n.default{constructor(){super(o.default.ACL)}authenticate(e,t){return null}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){e&&e.id?this._id=e.id:this._id=0,e&&e.email?this._email=e.email:this._email="",e&&e.login?this._login=e.login:this._login="",e&&e.fullName?this._fullName=e.fullName:this._fullName=""}get fullName(){return this._fullName}set fullName(e){this._fullName=e}get id(){return this._id}set id(e){this._id=e}get login(){return this._login}set login(e){this._login=e}get email(){return this._email}set email(e){this._email=e}}},function(e,t,r){"use strict";var n=f(r(1)),o=f(r(2)),i=f(r(3)),s=f(r(0)),u=f(r(9)),l=f(r(4)),c=f(r(10)),a=f(r(11));function f(e){return e&&e.__esModule?e:{default:e}}e.exports.ClientType=s.default,e.exports.AuthenticationFactory=u.default,e.exports.Context=a.default,e.exports.Entry=c.default,e.exports.Principal=l.default,e.exports.AbstractSecurityClient=n.default,e.exports.ACLClient=i.default,e.exports.OAUTH2Client=o.default},function(e,t,r){"use strict";e.exports=function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});const n=t.EVENT_SPLITTER=/\s+/,o=t.eventsApi=((e,t,r,i,s)=>{let u,l=0;if(r&&"object"==typeof r){void 0!==i&&"context"in s&&void 0===s.context&&(s.context=i);for(u=Object.keys(r);l<u.length;l++)t=o(e,t,u[l],r[u[l]],s)}else if(r&&n.test(r))for(u=r.split(n);l<u.length;l++)t=e(t,u[l],i,s);else t=e(t,r,i,s);return t}),i=(t.internalOn=((e,t,r,n,s)=>(e._events=o(i,e._events||{},t,r,{context:n,ctx:e,listening:s}),s&&((e._listeners||(e._listeners={}))[s.id]=s),e)),t.onApi=((e,t,r,n)=>{if(r){const o=e[t]||(e[t]=[]),i=n.context,s=n.ctx,u=n.listening;u&&u.count++,o.push({callback:r,context:i,ctx:i||s,listening:u})}return e})),s=(t.offApi=((e,t,r,n)=>{if(!e)return;let o,i=0;const s=n.context,u=n.listeners;if(!t&&!r&&!s){const e=Object.keys(u);for(;i<e.length;i++)delete u[(o=u[e[i]]).id],delete o.listeningTo[o.objId];return}let l=t?[t]:Object.keys(e);for(;i<l.length;i++){const n=e[t=l[i]];if(!n)break;const c=[];let a=0;for(a=0;a<n.length;a++){const e=n[a];r&&r!==e.callback&&r!==e.callback._callback||s&&s!==e.context?c.push(e):(o=e.listening)&&0==--o.count&&(delete u[o.id],delete o.listeningTo[o.objId])}c.length?e[t]=c:delete e[t]}return e}),t.triggerApi=((e,t,r,n)=>{if(e){const r=e[t];let o=e.all;r&&o&&(o=o.slice()),r&&s(r,n),o&&s(o,[t].concat(n))}return e}),t.triggerEvents=((e,t)=>{let r,n=-1;const o=e.length,i=t[0],s=t[1],u=t[2];switch(t.length){case 0:for(;++n<o;)(r=e[n]).callback.call(r.ctx);return;case 1:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i);return;case 2:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i,s);return;case 3:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i,s,u);return;default:for(;++n<o;)(r=e[n]).callback.apply(r.ctx,t);return}}))},function(e,t,r){var n=s(r(2)),o=s(r(5)),i=r(0);function s(e){return e&&e.__esModule?e:{default:e}}e.exports.AugmentedObject=n.default,e.exports.Configuration=o.default,e.exports.eventsApi=i.eventsApi,e.exports.eventsApi=i.internalOn,e.exports.eventsApi=i.offApi,e.exports.eventsApi=i.triggerApi},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(0);const i=r(4);t.default=class{constructor(e){e||(e={}),this._options||(this._options={}),Object.assign(this._options,e),e&&e.events?this._events=e.events:this._events={},this._listeningTo={},this._listenId={},this._listeners={}}initialize(...e){return this}get options(){return this._options}set options(e){this._options=e}get events(){return this._events}set events(e){this._events=e}trigger(e,...t){if(this._events){const r=Array.isArray(t)?t:Array.from(t);(0,o.eventsApi)(o.triggerApi,this._events,e,void 0,r)}return this}once(e,t,r){const n=(0,o.eventsApi)(this._onceMap,{},e,t,i(this.off,this));return"string"==typeof e&&null==r&&(t=void 0),this.on(n,t,r)}off(e,t,r){return this._events&&(this._events=(0,o.eventsApi)(o.offApi,this._events,e,t,{context:r,listeners:this._listeners})),this}stopListening(e,t,r){const n=this._listeningTo;if(n){const o=e?[e._listenId]:Object.keys(n);let i=0;for(i=0;i<o.length;i++){const e=n[o[i]];if(!e)break;e.obj.off(t,r,this)}}return this}on(e,t,r){return(0,o.internalOn)(this,e,t,r)}listenTo(e,t,r){if(e){const i=e._listenId||(e._listenId=(0,n.uniqueId)("l")),s=this._listeningTo||(this._listeningTo={});let u=s[i];if(!u){const t=this._listenId||(this._listenId=(0,n.uniqueId)("l"));u=s[i]={obj:e,objId:i,id:t,listeningTo:s,count:0}}(0,o.internalOn)(e,t,r,this,u)}return this}listenToOnce(e,t,r){const n=(0,o.eventsApi)(this._onceMap,{},t,r,i(this.stopListening,this,e));return this.listenTo(e,n)}_onceMap(e,t,r,o){if(r){const i=e[t]=(0,n.once)(()=>{o(t,i),r.apply(this,arguments)});i._callback=r}return e}}},function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.default=((e,t)=>{let r,o;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return o=Number.parseInt(e),()=>(--o>0&&(r=t.apply(void 0,n)),o<=1&&(t=void 0),r)})},function(e,t,r){var n=P(r(4)),o=P(r(1)),i=P(r(5)),s=P(r(6)),u=P(r(7)),l=P(r(8)),c=P(r(0)),a=P(r(9)),f=P(r(10)),p=P(r(11)),d=P(r(12)),h=P(r(13)),y=P(r(14)),_=P(r(15)),v=P(r(16)),b=P(r(2)),g=P(r(17)),O=r(18),m=r(19),j=r(20),x=P(r(21)),M=P(r(22));function P(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=m.shuffle,e.exports.prettyPrint=m.prettyPrint,e.exports.binarySearch=m.binarySearch,e.exports.TransformerType=m.TransformerType,e.exports.Transformer=m.Transformer,e.exports.wrap=m.wrap,e.exports.filterObject=m.filterObject,e.exports.findByMatchingProperties=m.findByMatchingProperties,e.exports.sortObjects=j.sortObjects,e.exports.mergeSort=j.mergeSort,e.exports.quickSort=j.quickSort,e.exports.insertionSort=j.insertionSort,e.exports.bubbleSort=j.bubbleSort,e.exports.formatDate=x.default,e.exports.formatBinary=M.default,e.exports.isString=n.default,e.exports.isFunction=o.default,e.exports.extend=i.default,e.exports.pad=s.default,e.exports.uniqueId=u.default,e.exports.has=l.default,e.exports.isObject=c.default,e.exports.allKeys=a.default,e.exports.create=f.default,e.exports.result=p.default,e.exports.arrayHas=d.default,e.exports.exec=h.default,e.exports.isDefined=y.default,e.exports.some=_.default,e.exports.splice=v.default,e.exports.before=b.default,e.exports.once=g.default,e.exports.fibonacci=O.fibonacci,e.exports.fibonacciSequence=O.fibonacciSequence},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});let n=0;t.default=(e=>`${e}${++n}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,n.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,n.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,n.default)(r)?r.call(e):r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,...r)=>{const n=e.split("."),o=n.pop(),i=n.length;let s=0;for(s=0;s<i;s++)t=t[n[s]];return t[o].apply(t,r)})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>void 0!==e)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let n=Array(e.length-r);const o=t.length;let i;for(i=0;i<n.length;i++)n[i]=e[i+r];for(i=0;i<o;i++)e[i+r]=t[i];for(i=0;i<n.length;i++)e[i+o+r]=n[i]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,n.default)(2,e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});const n=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(n(r));return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,n,o=0;for(o=e.length-1;o>0;o--)n=Math.floor(Math.random()*(o+1)),r=t[o],t[o]=t[n],t[n]=r;return t}),t.prettyPrint=((e,t,r)=>{let n="\t";return t&&(n=" ".repeat(r)),JSON.stringify(e,null,n)}),t.binarySearch=((e,t,r)=>{let n,o,i=0,s=e.length-1;for(;i<=s;)if((o=r(e[n=Math.floor((i+s)/2)],t))<0)i=n+1;else{if(!(o>0))return n;s=n-1}return null});const o=t.TransformerType={};o.STRING=Symbol("String"),o.INTEGER=Symbol("Integer"),o.NUMBER=Symbol("Number"),o.BOOLEAN=Symbol("Boolean"),o.ARRAY=Symbol("Array"),o.OBJECT=Symbol("Object"),o.NULL=Symbol("Null"),t.Transformer=class{constructor(){this.type=o}static transform(e,t){let r=null;switch(t){case o.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case o.INTEGER:r=parseInt(e);break;case o.NUMBER:r=Number(e);break;case o.BOOLEAN:r=Boolean(e);break;case o.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case o.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?o.NULL:"string"==typeof e?o.STRING:"number"==typeof e?o.NUMBER:"boolean"==typeof e?o.BOOLEAN:Array.isArray(e)?o.ARRAY:"object"==typeof e?o.OBJECT:void 0}},t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(n)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const n=t.length;let o=0;for(o=0;o<n;o++)r[t[o]]=e[t[o]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=((e,t)=>e.sort((e,r)=>{const n=e[t],o=r[t];return n<o?-1:n>o?1:0}));const n=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),i=e.slice(t);return o(n(r),n(i))}),o=(e,t)=>{let r=[],n=0,o=0;for(;n<e.length&&o<t.length;)e[n]<t[o]?(r.push(e[n]),n++):(r.push(t[o]),o++);return r.concat(e.slice(n)).concat(t.slice(o))},i=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,n=[],o=[],s=e[0];for(t=1;t<r;t++)e[t]<s?n.push(e[t]):o.push(e[t]);return i(n).concat(s,i(o))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let n,o,i;for(n=1;n<r;n++){for(i=t[n],o=n-1;o>=0&&t[o]>i;o--)t[o+1]=t[o];t[o+1]=i}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,n,o;const i=(t=e.slice()).length-1;do{for(r=!1,n=0;n<i;n++)t[n]>t[n+1]&&(o=t[n],t[n]=t[n+1],t[n+1]=o,r=!0)}while(r)}return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),i=e.getMinutes();return e.getSeconds(),`${r}/${n}/${t} ${o%12||12}:${i<10?"0"+i:i}${o<12?"am":"pm"}`})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(e=>{let t=0,r=e,n="";for(t=0;t<32;t++,n+=String(r>>>31),r<<=1);return n})(e).split("").reverse().join("").substring(0,t))}])},function(t,r){t.exports=e},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default={LoggerLevel:"error",MessageBundle:"Messages",AsynchronousQueueTimeout:2e3,ApplicationInitProcessTimeout:1e3}}])}(r(7))},function(e,t,r){"use strict";(function(t){var r="Expected a function",n="__lodash_placeholder__",o=1,i=2,s=4,u=8,l=16,c=32,a=64,f=128,p=512,d=1/0,h=9007199254740991,y=1.7976931348623157e308,_=NaN,v=[["ary",f],["bind",o],["bindKey",i],["curry",u],["curryRight",l],["flip",p],["partial",c],["partialRight",a],["rearg",256]],b="[object Function]",g="[object GeneratorFunction]",O="[object Symbol]",m=/^\s+|\s+$/g,j=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,x=/\{\n\/\* \[wrapped with (.+)\] \*/,M=/,? & /,P=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,A=/^\[object .+?Constructor\]$/,T=/^0o[0-7]+$/i,w=/^(?:0|[1-9]\d*)$/,N=parseInt,k="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,I=k||E||Function("return this")();function $(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function R(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,B,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function B(e){return e!=e}function C(e,t){for(var r=-1,o=e.length,i=0,s=[];++r<o;){var u=e[r];u!==t&&u!==n||(e[r]=n,s[i++]=r)}return s}var L=Function.prototype,q=Object.prototype,F=I["__core-js_shared__"],U=function(){var e=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),G=L.toString,H=q.hasOwnProperty,J=q.toString,z=RegExp("^"+G.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Y=Object.create,D=Math.max,K=Math.min,Q=function(){var e=re(Object,"defineProperty"),t=re.name;return t&&t.length>2?e:void 0}();function V(e){return!(!se(e)||function(e){return!!U&&U in e}(e))&&(function(e){var t=se(e)?J.call(e):"";return t==b||t==g}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?z:A).test(function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function X(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=function(e){return se(e)?Y(e):{}}(e.prototype),n=e.apply(r,t);return se(n)?n:r}}function W(e,t,r,n,s,c,a,d,h,y){var _=t&f,v=t&o,b=t&i,g=t&(u|l),O=t&p,m=b?void 0:X(e);return function o(){for(var i=arguments.length,u=Array(i),l=i;l--;)u[l]=arguments[l];if(g)var f=te(o),p=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&n++;return n}(u,f);if(n&&(u=function(e,t,r,n){for(var o=-1,i=e.length,s=r.length,u=-1,l=t.length,c=D(i-s,0),a=Array(l+c),f=!n;++u<l;)a[u]=t[u];for(;++o<s;)(f||o<i)&&(a[r[o]]=e[o]);for(;c--;)a[u++]=e[o++];return a}(u,n,s,g)),c&&(u=function(e,t,r,n){for(var o=-1,i=e.length,s=-1,u=r.length,l=-1,c=t.length,a=D(i-u,0),f=Array(a+c),p=!n;++o<a;)f[o]=e[o];for(var d=o;++l<c;)f[d+l]=t[l];for(;++s<u;)(p||o<i)&&(f[d+r[s]]=e[o++]);return f}(u,c,a,g)),i-=p,g&&i<y){var j=C(u,f);return Z(e,t,W,o.placeholder,r,u,j,d,h,y-i)}var x=v?r:this,M=b?x[e]:e;return i=u.length,d?u=function(e,t){for(var r=e.length,n=K(t.length,r),o=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(e);n--;){var i=t[n];e[n]=ne(i,r)?o[i]:void 0}return e}(u,d):O&&i>1&&u.reverse(),_&&h<i&&(u.length=h),this&&this!==I&&this instanceof o&&(M=m||X(M)),M.apply(x,u)}}function Z(e,t,r,n,l,f,p,d,h,y){var _=t&u;t|=_?c:a,(t&=~(_?a:c))&s||(t&=~(o|i));var v=r(e,t,l,_?f:void 0,_?p:void 0,_?void 0:f,_?void 0:p,d,h,y);return v.placeholder=n,oe(v,e,t)}function ee(e,t,n,s,f,p,d,h){var y=t&i;if(!y&&"function"!=typeof e)throw new TypeError(r);var _=s?s.length:0;if(_||(t&=~(c|a),s=f=void 0),d=void 0===d?d:D(le(d),0),h=void 0===h?h:le(h),_-=f?f.length:0,t&a){var v=s,b=f;s=f=void 0}var g=[e,t,n,s,f,v,b,p,d,h];if(e=g[0],t=g[1],n=g[2],s=g[3],f=g[4],!(h=g[9]=null==g[9]?y?0:e.length:D(g[9]-_,0))&&t&(u|l)&&(t&=~(u|l)),t&&t!=o)O=t==u||t==l?function(e,t,r){var n=X(e);return function o(){for(var i=arguments.length,s=Array(i),u=i,l=te(o);u--;)s[u]=arguments[u];var c=i<3&&s[0]!==l&&s[i-1]!==l?[]:C(s,l);return(i-=c.length)<r?Z(e,t,W,o.placeholder,void 0,s,c,void 0,void 0,r-i):$(this&&this!==I&&this instanceof o?n:e,this,s)}}(e,t,h):t!=c&&t!=(o|c)||f.length?W.apply(void 0,g):function(e,t,r,n){var i=t&o,s=X(e);return function t(){for(var o=-1,u=arguments.length,l=-1,c=n.length,a=Array(c+u),f=this&&this!==I&&this instanceof t?s:e;++l<c;)a[l]=n[l];for(;u--;)a[l++]=arguments[++o];return $(f,i?r:this,a)}}(e,t,n,s);else var O=function(e,t,r){var n=t&o,i=X(e);return function t(){return(this&&this!==I&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,n);return oe(O,e,t)}function te(e){return e.placeholder}function re(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return V(r)?r:void 0}function ne(e,t){return!!(t=null==t?h:t)&&("number"==typeof e||w.test(e))&&e>-1&&e%1==0&&e<t}var oe=Q?function(e,t,r){var n=t+"";return Q(e,"toString",{configurable:!0,enumerable:!1,value:function(e){return function(){return e}}(function(e,t){var r=t.length,n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(j,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(v,function(r){var n="_."+r[0];t&r[1]&&!R(e,n)&&e.push(n)}),e.sort()}(function(e){var t=e.match(x);return t?t[1].split(M):[]}(n),r)))})}:function(e){return e};var ie=function(e,t){return t=D(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,o=D(r.length-t,0),i=Array(o);++n<o;)i[n]=r[t+n];n=-1;for(var s=Array(t+1);++n<t;)s[n]=r[n];return s[t]=i,$(e,this,s)}}(function(e,t,r){var n=o;if(r.length){var i=C(r,te(ie));n|=c}return ee(e,n,t,r,i)});function se(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ue(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&J.call(e)==O}(e))return _;if(se(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=se(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var r=S.test(e);return r||T.test(e)?N(e.slice(2),r?2:8):P.test(e)?_:+e}(e))===d||e===-d?(e<0?-1:1)*y:e==e?e:0:0===e?e:0}function le(e){var t=ue(e),r=t%1;return t==t?r?t-r:t:0}ie.placeholder={},e.exports=ie}).call(this,r(8))},function(e,t,r){"use strict";var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(0)),o=s(r(2)),i=s(r(3));function s(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(){}static getSecurityClient(e){return e===n.default.OAUTH2?new o.default:e===n.default.ACL?new i.default:null}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e,t){this._permissions=e||[],this._neg=t||!1}isNegative(){return this._neg}get permissions(){return this._permissions}set permissions(e){this._permissions=e}addPermission(e){this._permissions.push(e)}removePermission(e){const t=this._permissions.indexOf(e);this._permissions.splice(t,1)}hasPermission(e){return-1!=this._permissions.indexOf(e)}setNegative(e){this.neg=e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(r(4));t.default=class{constructor(e,t){this._principal=e||((new Principal).login="guest"),this._permissions=t||[]}get principal(){return this._principal}get permissions(){return this._permissions}set permissions(e){this._permissions=e}addPermission(e){this._permissions.push(e)}removePermission(e){const t=this._permissions.indexOf(e);this._permissions.splice(t,1)}hasPermission(e){return-1!==this._permissions.indexOf(e)}}}])});
//# sourceMappingURL=next-core-security.js.map

/***/ }),

/***/ "./node_modules/next-core-sort/dist/next-core-sort.js":
/*!************************************************************!*\
  !*** ./node_modules/next-core-sort/dist/next-core-sort.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
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


var _sort = __webpack_require__(/*! ./sort.js */ "./src/sort.js");

module.exports.sortObjects = _sort.sortObjects;
module.exports.mergeSort = _sort.mergeSort;
module.exports.quickSort = _sort.quickSort;
module.exports.insertionSort = _sort.insertionSort;
module.exports.bubbleSort = _sort.bubbleSort;

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Sorts an array of objects by propery in object
 * @function sortObjects
 * @memberof Utility
 * @param {array} array The object array to sort
 * @param {object} key The property to sort by
 * @returns {array} The sorted array
 */
const sortObjects = exports.sortObjects = (array, key) => {
  return array.sort((a, b) => {
    const x = a[key],
          y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

/**
 * Split the array into halves and merge them recursively
 * @function mergeSort
 * @memberof Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
const mergeSort = exports.mergeSort = arr => {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
};

/*
 * compare the arrays item by item and return the concatenated result
 */
const merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

/**
 * Quick Sort implimentation for Arrays -
 * @function QuickSort
 * @memberof Utility
 * @param {Array} arr Array to Sort
 * @returns {Array} Returns a sorted array
 */
const quickSort = exports.quickSort = arr => {
  //if array is empty
  if (arr.length === 0) {
    return [];
  }

  let i = 1;
  const l = arr.length,
        left = [],
        right = [],
        pivot = arr[0];
  //go through each element in array
  for (i = 1; i < l; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * @function mergeSort
 * @memberof Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
const insertionSort = exports.insertionSort = unsortedList => {
  let sortedList = [];
  if (unsortedList) {
    sortedList = unsortedList.slice();
    const len = sortedList.length;
    let i, j, tmp;
    for (i = 1; i < len; i++) {
      tmp = sortedList[i]; //Copy of the current element.
      /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
      for (j = i - 1; j >= 0 && sortedList[j] > tmp; j--) {
        //Shift the number
        sortedList[j + 1] = sortedList[j];
      }
      //Insert the copied number at the correct position
      //in sorted part.
      sortedList[j + 1] = tmp;
    }
  }
  return sortedList;
};

/**
 * Simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
 * @function mergeSort
 * @memberof Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
const bubbleSort = exports.bubbleSort = a => {
  let sorted = [];
  if (a) {
    sorted = a.slice();
    let swapped, i, tmp;
    const l = sorted.length - 1;
    do {
      swapped = false;
      for (i = 0; i < l; i++) {
        if (sorted[i] > sorted[i + 1]) {
          tmp = sorted[i];
          sorted[i] = sorted[i + 1];
          sorted[i + 1] = tmp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  return sorted;
};

/***/ })

/******/ });
});
//# sourceMappingURL=next-core-sort.js.map

/***/ }),

/***/ "./node_modules/next-core-structures/dist/next-core-structures.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-core-structures/dist/next-core-structures.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){"use strict";e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.default=((e,t)=>{let r,o;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return o=Number.parseInt(e),()=>(--o>0&&(r=t.apply(void 0,n)),o<=1&&(t=void 0),r)})},function(e,t,r){var n=S(r(4)),o=S(r(1)),u=S(r(5)),s=S(r(6)),l=S(r(7)),i=S(r(8)),a=S(r(0)),c=S(r(9)),f=S(r(10)),d=S(r(11)),p=S(r(12)),y=S(r(13)),h=S(r(14)),_=S(r(15)),b=S(r(16)),O=S(r(2)),g=S(r(17)),j=r(18),x=r(19),v=r(20),M=S(r(21)),m=S(r(22));function S(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=x.shuffle,e.exports.prettyPrint=x.prettyPrint,e.exports.binarySearch=x.binarySearch,e.exports.TransformerType=x.TransformerType,e.exports.Transformer=x.Transformer,e.exports.wrap=x.wrap,e.exports.filterObject=x.filterObject,e.exports.findByMatchingProperties=x.findByMatchingProperties,e.exports.sortObjects=v.sortObjects,e.exports.mergeSort=v.mergeSort,e.exports.quickSort=v.quickSort,e.exports.insertionSort=v.insertionSort,e.exports.bubbleSort=v.bubbleSort,e.exports.formatDate=M.default,e.exports.formatBinary=m.default,e.exports.isString=n.default,e.exports.isFunction=o.default,e.exports.extend=u.default,e.exports.pad=s.default,e.exports.uniqueId=l.default,e.exports.has=i.default,e.exports.isObject=a.default,e.exports.allKeys=c.default,e.exports.create=f.default,e.exports.result=d.default,e.exports.arrayHas=p.default,e.exports.exec=y.default,e.exports.isDefined=h.default,e.exports.some=_.default,e.exports.splice=b.default,e.exports.before=O.default,e.exports.once=g.default,e.exports.fibonacci=j.fibonacci,e.exports.fibonacciSequence=j.fibonacciSequence},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});let n=0;t.default=(e=>`${e}${++n}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,n.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,n.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,n.default)(r)?r.call(e):r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,...r)=>{const n=e.split("."),o=n.pop(),u=n.length;let s=0;for(s=0;s<u;s++)t=t[n[s]];return t[o].apply(t,r)})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>void 0!==e)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let n=Array(e.length-r);const o=t.length;let u;for(u=0;u<n.length;u++)n[u]=e[u+r];for(u=0;u<o;u++)e[u+r]=t[u];for(u=0;u<n.length;u++)e[u+o+r]=n[u]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,n.default)(2,e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});const n=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(n(r));return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,n,o=0;for(o=e.length-1;o>0;o--)n=Math.floor(Math.random()*(o+1)),r=t[o],t[o]=t[n],t[n]=r;return t}),t.prettyPrint=((e,t,r)=>{let n="\t";return t&&(n=" ".repeat(r)),JSON.stringify(e,null,n)}),t.binarySearch=((e,t,r)=>{let n,o,u=0,s=e.length-1;for(;u<=s;)if((o=r(e[n=Math.floor((u+s)/2)],t))<0)u=n+1;else{if(!(o>0))return n;s=n-1}return null});const o=t.TransformerType={};o.STRING=Symbol("String"),o.INTEGER=Symbol("Integer"),o.NUMBER=Symbol("Number"),o.BOOLEAN=Symbol("Boolean"),o.ARRAY=Symbol("Array"),o.OBJECT=Symbol("Object"),o.NULL=Symbol("Null"),t.Transformer=class{constructor(){this.type=o}static transform(e,t){let r=null;switch(t){case o.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case o.INTEGER:r=parseInt(e);break;case o.NUMBER:r=Number(e);break;case o.BOOLEAN:r=Boolean(e);break;case o.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case o.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?o.NULL:"string"==typeof e?o.STRING:"number"==typeof e?o.NUMBER:"boolean"==typeof e?o.BOOLEAN:Array.isArray(e)?o.ARRAY:"object"==typeof e?o.OBJECT:void 0}},t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(n)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const n=t.length;let o=0;for(o=0;o<n;o++)r[t[o]]=e[t[o]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=((e,t)=>e.sort((e,r)=>{const n=e[t],o=r[t];return n<o?-1:n>o?1:0}));const n=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),u=e.slice(t);return o(n(r),n(u))}),o=(e,t)=>{let r=[],n=0,o=0;for(;n<e.length&&o<t.length;)e[n]<t[o]?(r.push(e[n]),n++):(r.push(t[o]),o++);return r.concat(e.slice(n)).concat(t.slice(o))},u=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,n=[],o=[],s=e[0];for(t=1;t<r;t++)e[t]<s?n.push(e[t]):o.push(e[t]);return u(n).concat(s,u(o))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let n,o,u;for(n=1;n<r;n++){for(u=t[n],o=n-1;o>=0&&t[o]>u;o--)t[o+1]=t[o];t[o+1]=u}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,n,o;const u=(t=e.slice()).length-1;do{for(r=!1,n=0;n<u;n++)t[n]>t[n+1]&&(o=t[n],t[n]=t[n+1],t[n+1]=o,r=!0)}while(r)}return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),u=e.getMinutes();return e.getSeconds(),`${r}/${n}/${t} ${o%12||12}:${u<10?"0"+u:u}${o<12?"am":"pm"}`})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(e=>{let t=0,r=e,n="";for(t=0;t<32;t++,n+=String(r>>>31),r<<=1);return n})(e).split("").reverse().join("").substring(0,t))}])},function(e,t,r){"use strict";var n=s(r(2)),o=s(r(3)),u=s(r(4));function s(e){return e&&e.__esModule?e:{default:e}}e.exports.Stack=n.default,e.exports.AugmentedMap=o.default,e.exports.AsynchronousQueue=u.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){e||(e={}),e.stack?this._stack=e.stack:this._stack=[]}empty(){return 0===this._stack.length}peek(){return this._stack[0]}pop(){return this._stack.pop()}push(e){this._stack.push(e)}search(e){return this._stack.indexOf(e)}size(){return this._stack.length}clear(){this._stack.splice(0,this._stack.length)}toArray(){return this._stack}toString(){return this._stack.toString()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);class o{constructor(e){this._keys=[],this._data={},e&&this.marshall(e)}set(e,t){null!==e&&null!==t&&(this._data[e]||this._keys.push(e),this._data[e]=t)}get(e){return this._data[e]}indexOf(e){return this._keys.indexOf(e)}remove(e){const t=this.indexOf(e);this._keys.splice(t,1),delete this._data[e]}has(e){return-1!==this.indexOf(e)}forEach(e){if("function"!=typeof e)return null;const t=this._keys.length;let r,n=0;for(n=0;n<t;n++)e(r=this._keys[n],this._data[r],n)}key(e){return this._keys[e]}entries(){let e=0;const t=this._keys.length,r=new Array(t);for(e=0;e<t;e++)r[e]={key:this._keys[e],value:this._data[e]};return r}values(){const e=this._keys.length,t=new Array(e);let r,n=0;for(n=0;n<e;n++)r=this._keys[n],t[n]=this._data[r];return t}clear(){this._keys=[],this._data={}}size(){return this._keys.length}toJSON(){return this._data}toString(){return JSON.stringify(this._data)}isEmpty(){return 0===this._keys.length}marshall(e){let t;if(e&&e instanceof o)t=e.toJSON();else if(e&&e instanceof Object&&Object.keys(e).length>0)t=e;else{if(!e||!(0,n.isString)(e))return console.warn("Map: Could not marshall data."),!1;try{t=JSON.parse(e)}catch(e){return console.warn("Map: Could not marshall data."),!1}}const r=Object.keys(t);r.length;return this._keys=r,this._data=t,!0}}t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);const o=2e3;t.default=class{constructor(e){this._timeout=e||o,this._queue={}}add(...e){return!!(e&&e.length>0)&&((0,n.extend)(this._queue,e),!0)}clear(){this._queue.length>0&&this._queue.splice(0,this._queue.length)}process(...e){e&&(0,n.extend)(this._queue,e);const t=this._queue,r=Object.keys(t).length;let o=this._timeout;if(r<=0)return!1;const u=e=>{if(e>=r||"function"!=typeof t[e])return!1;setTimeout(()=>{t[e](),u(e+1)},o)};return u(0),!0}get timeout(){return this._timeout}get queue(){return this._queue}}}])});
//# sourceMappingURL=next-core-structures.js.map

/***/ }),

/***/ "./node_modules/next-core-utilities/dist/next-core-utilities.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-core-utilities/dist/next-core-utilities.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.default=((e,t)=>{let r,n;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return n=Number.parseInt(e),()=>(--n>0&&(r=t.apply(void 0,o)),n<=1&&(t=void 0),r)})},function(e,t,r){"use strict";var o=P(r(4)),n=P(r(1)),u=P(r(5)),l=P(r(6)),s=P(r(7)),i=P(r(8)),c=P(r(0)),f=P(r(9)),a=P(r(10)),d=P(r(11)),p=P(r(12)),b=P(r(13)),y=P(r(14)),_=P(r(15)),O=P(r(16)),j=P(r(2)),h=P(r(17)),g=r(18),x=r(19),M=r(20),v=P(r(21)),S=P(r(22)),m=P(r(23));function P(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=x.shuffle,e.exports.prettyPrint=x.prettyPrint,e.exports.binarySearch=x.binarySearch,e.exports.TransformerType=x.TransformerType,e.exports.Transformer=x.Transformer,e.exports.wrap=x.wrap,e.exports.filterObject=x.filterObject,e.exports.findByMatchingProperties=x.findByMatchingProperties,e.exports.sortObjects=M.sortObjects,e.exports.mergeSort=M.mergeSort,e.exports.quickSort=M.quickSort,e.exports.insertionSort=M.insertionSort,e.exports.bubbleSort=M.bubbleSort,e.exports.formatDate=v.default,e.exports.formatBinary=S.default,e.exports.isString=o.default,e.exports.isFunction=n.default,e.exports.extend=u.default,e.exports.pad=l.default,e.exports.uniqueId=s.default,e.exports.has=i.default,e.exports.isObject=c.default,e.exports.allKeys=f.default,e.exports.create=a.default,e.exports.result=d.default,e.exports.arrayHas=p.default,e.exports.exec=b.default,e.exports.isDefined=y.default,e.exports.some=_.default,e.exports.splice=O.default,e.exports.before=j.default,e.exports.once=h.default,e.exports.filter=m.default,e.exports.fibonacci=g.fibonacci,e.exports.fibonacciSequence=g.fibonacciSequence},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=0;t.default=(e=>{return`${e}${++o}`})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,o.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,o.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,o.default)(r)?r.call(e):r})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t,...r)=>{const o=e.split("."),n=o.pop(),u=o.length;let l=0;for(l=0;l<u;l++)t=t[o[l]];return t[n].apply(t,r)})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=>void 0!==e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let o=Array(e.length-r);const n=t.length;let u;for(u=0;u<o.length;u++)o[u]=e[u+r];for(u=0;u<n;u++)e[u+r]=t[u];for(u=0;u<o.length;u++)e[u+n+r]=o[u]})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,o.default)(2,e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(o(r));return t})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,o,n=0;for(n=e.length-1;n>0;n--)o=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[o],t[o]=r;return t}),t.prettyPrint=((e,t,r)=>{let o="\t";return t&&(o=" ".repeat(r)),JSON.stringify(e,null,o)}),t.binarySearch=((e,t,r)=>{let o,n,u=0,l=e.length-1;for(;u<=l;)if((n=r(e[o=Math.floor((u+l)/2)],t))<0)u=o+1;else{if(!(n>0))return o;l=o-1}return null});const n=t.TransformerType={};n.STRING=Symbol("String"),n.INTEGER=Symbol("Integer"),n.NUMBER=Symbol("Number"),n.BOOLEAN=Symbol("Boolean"),n.ARRAY=Symbol("Array"),n.OBJECT=Symbol("Object"),n.NULL=Symbol("Null");t.Transformer=class{constructor(){this.type=n}static transform(e,t){let r=null;switch(t){case n.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case n.INTEGER:r=parseInt(e);break;case n.NUMBER:r=Number(e);break;case n.BOOLEAN:r=Boolean(e);break;case n.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case n.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?n.NULL:"string"==typeof e?n.STRING:"number"==typeof e?n.NUMBER:"boolean"==typeof e?n.BOOLEAN:Array.isArray(e)?n.ARRAY:"object"==typeof e?n.OBJECT:void 0}};t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(o)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const o=t.length;let n=0;for(n=0;n<o;n++)r[t[n]]=e[t[n]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sortObjects=((e,t)=>e.sort((e,r)=>{const o=e[t],n=r[t];return o<n?-1:o>n?1:0}));const o=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),u=e.slice(t);return n(o(r),o(u))}),n=(e,t)=>{let r=[],o=0,n=0;for(;o<e.length&&n<t.length;)e[o]<t[n]?(r.push(e[o]),o++):(r.push(t[n]),n++);return r.concat(e.slice(o)).concat(t.slice(n))},u=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,o=[],n=[],l=e[0];for(t=1;t<r;t++)e[t]<l?o.push(e[t]):n.push(e[t]);return u(o).concat(l,u(n))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let o,n,u;for(o=1;o<r;o++){for(u=t[o],n=o-1;n>=0&&t[n]>u;n--)t[n+1]=t[n];t[n+1]=u}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,o,n;const u=(t=e.slice()).length-1;do{for(r=!1,o=0;o<u;o++)t[o]>t[o+1]&&(n=t[o],t[o]=t[o+1],t[o+1]=n,r=!0)}while(r)}return t})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>{const r=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),u=e.getHours(),l=e.getMinutes();e.getSeconds();return t?`${o}/${n}/${r}`:`${o}/${n}/${r} ${u%12||12}:${l<10?"0"+l:l}${u<12?"am":"pm"}`})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>(e=>{let t=0,r=e,o="";for(t=0;t<32;t++,o+=String(r>>>31),r<<=1);return o})(e).split("").reverse().join("").substring(0,t))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>e&&t?[].filter.call(e,e=>e!=t).join(""):null)}])});
//# sourceMappingURL=next-core-utilities.js.map

/***/ }),

/***/ "./node_modules/next-core-validation/dist/core-next-validation.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-core-validation/dist/core-next-validation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3};let n,s={};for(n in i)s[i[n]]=n;t.ERROR_CODES=i,t.ERROR_MESSAGES_DEFAULT={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"},t.ValidationError=class{constructor(e,t,r,i,n,s){if(void 0===e)throw new Error("No code supplied for error: "+t);this.message=t,this.params=r,this.code=e,this.dataPath=i||"",this.schemaPath=n||"",this.subErrors=s||null;const a=new Error(this.message);if(this.stack=a.stack||a.stacktrace,!this.stack)try{throw a}catch(e){this.stack=e.stack||e.stacktrace}this.name="ValidationError"}prefixWith(e,t){if(null!==e&&(e=e.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+e+this.dataPath),null!==t&&(t=t.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+t+this.schemaPath),null!==this.subErrors){let r=0,i=this.subErrors.length;for(r=0;r<i;r++)this.subErrors[r].prefixWith(e,t)}return this}},t.ErrorCodeLookup=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i={$schema:"http://json-schema.org/draft-04/schema#",title:"model",description:"Generated Schema",type:"object",properties:{}};t.default=(e=>{let t,r,n,s,a=i,o=Object.keys(e),l=o.length;for(t=0;t<l;t++)for(n in r=o[t])if(r.hasOwnProperty(n)){s=a.properties[r]={};let t=typeof e[r];"object"===t?t=Array.isArray(e[r])?"array":"object":"number"===t&&(t=Number.isInteger(e[r])?"integer":"number"),s.type=t,s.description=String(r)}return a})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.URI_TEMPLATE_GLOBAL_MODIFIERS={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},t.URI_TEMPLATE_SUFFICES={"*":!0};const i=t.parseURI=(e=>{const t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}),n=t.removeDotSegments=(e=>{let t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}),s=t.resolveUrl=((e,t)=>(t=i(t||""),e=i(e||""),t&&e?(t.protocol||e.protocol)+(t.protocol||t.authority?t.authority:e.authority)+n(t.protocol||t.authority||"/"===t.pathname.charAt(0)?t.pathname:t.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+t.pathname:e.pathname)+(t.protocol||t.authority||t.pathname?t.search:t.search||e.search)+t.hash:null)),a=(t.getDocumentUri=(e=>e.split("#")[0]),t.isTrustedUrl=((e,t)=>{if(t.substring(0,e.length)===e){let r=t.substring(e.length);if(t.length>0&&"/"===t.charAt(e.length-1)||"#"===r.charAt(0)||"?"===r.charAt(0))return!0}return!1}),t.normSchema=((e,t)=>{if(e&&"object"==typeof e)if(void 0===t?t=e.id:"string"==typeof e.id&&(t=s(t,e.id),e.id=t),Array.isArray(e)){let r=0,i=e.length;for(r=0;r<i;r++)a(e[r],t)}else{"string"==typeof e.$ref&&(e.$ref=s(t,e.$ref));for(let r in e)"enum"!==r&&a(e[r],t)}}))},function(e,t,r){"use strict";var i=s(r(4)),n=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}e.exports.ValidationFramework=i.default,e.exports.SchemaGenerator=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(r(1)),n=a(r(5)),s=r(0);function a(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(){this._myValidator=(0,n.default)(),this._myValidator&&this._myValidator.addLanguage("en-us",s.ERROR_MESSAGES_DEFAULT)}supportsValidation(){return null!==this._myValidator}registerSchema(e,t){return this._myValidator.addSchema(e,t)}getSchema(e){return this._myValidator.getSchema(e)}getSchemas(){return this._myValidator.getSchemaMap()}clearSchemas(){this._myValidator.dropSchemas()}validate(e,t){return this._myValidator.validateMultiple(e,t)}getValidationMessages(){return this._myValidator.error}generateSchema(e){let t=e;return(0,i.default)(t)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=arguments,n=function(e){return e&&e.__esModule?e:{default:e}}(r(6)),s=r(0),a=r(2);let o={};const l=e=>{const t=new n.default;let r=e||"en";return{addFormat:(e,r)=>{t.addFormat(e,r)},language:e=>e?(o[e]||(e=e.split("-")[0]),!!o[e]&&(r=e,e)):r,addLanguage:(e,t)=>{let r;for(r in s.ERROR_CODES)t[r]&&!t[s.ERROR_CODES[r]]&&(t[s.ERROR_CODES[r]]=t[r]);let i=e.split("-")[0];if(o[i])for(r in o[e]=Object.create(o[i]),t)void 0===o[i][r]&&(o[i][r]=t[r]),o[e][r]=t[r];else o[e]=t,o[i]=t},freshApi:e=>{const t=l();return e&&t.language(e),t},validate:(e,i,s,a)=>{const l=new n.default(t,!1,o[r],s,a);"string"==typeof i&&(i={$ref:i}),l.addSchema("",i);let h=l.validateAll(e,i,null,null,"");return!h&&a&&(h=l.banUnknownProperties()),(void 0).error=h,(void 0).missing=l.missing,(void 0).valid=null===h,(void 0).valid},validateResult:()=>{let e={};return(void 0).validate.apply(e,i),e},validateMultiple:(e,i,s,a)=>{const l=new n.default(t,!0,o[r],s,a);"string"==typeof i&&(i={$ref:i}),l.addSchema("",i),l.validateAll(e,i,null,null,""),a&&l.banUnknownProperties();let h={};return h.errors=l.errors,h.missing=l.missing,h.valid=0===h.errors.length,h},addSchema:(e,r)=>t.addSchema(e,r),getSchema:(e,r)=>t.getSchema(e,r),getSchemaMap:()=>t.getSchemaMap.apply(t,i),getSchemaUris:()=>t.getSchemaUris.apply(t,i),getMissingUris:()=>t.getMissingUris.apply(t,i),dropSchemas:()=>{t.dropSchemas.apply(t,i)},defineKeyword:()=>{t.defineKeyword.apply(t,i)},defineError:(e,t,r)=>{if("string"!=typeof e||!/^[A-Z]+(_[A-Z]+)*$/.test(e))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof t||t%1!=0||t<1e4)throw new Error("Code number must be an integer > 10000");if(void 0!==s.ERROR_CODES[e])throw new Error("Error already defined: "+e+" as "+s.ERROR_CODES[e]);if(void 0!==s.ErrorCodeLookup[t])throw new Error("Error code already used: "+s.ErrorCodeLookup[t]+" as "+t);s.ERROR_CODES[e]=t,s.ErrorCodeLookup[t]=e,s.ERROR_MESSAGES_DEFAULT[e]=s.ERROR_MESSAGES_DEFAULT[t]=r;for(let r in o){let i=o[r];i[e]&&(i[t]=i[t]||i[e])}},reset:()=>{t.reset(),(void 0).error=null,(void 0).missing=[],(void 0).valid=!0},missing:[],error:null,valid:!0,normSchema:a.normSchema,resolveUrl:a.resolveUrl,getDocumentUri:a.getDocumentUri,errorCodes:s.ERROR_CODES}};t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),n=r(2);let s=Math.pow(2,-51),a=1-s;class o{constructor(e,t,r,i,n){if(this.missing=[],this.missingMap={},this.formatValidators=e?Object.create(e.formatValidators):{},this.schemas=e?Object.create(e.schemas):{},this.collectMultiple=t,this.errors=[],this.handleError=t?this.collectError:this.returnError,i&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),n&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorMessages=r,this.definedKeywords={},e)for(let t in e.definedKeywords)this.definedKeywords[t]=e.definedKeywords[t].slice(0)}notReallyPercentEncode(e){return encodeURI(e).replace(/%25[0-9][0-9]/g,e=>"%"+e.substring(3))}uriTemplateSubstitution(e){let t="";URI_TEMPLATE_GLOBAL_MODIFIERS[e.charAt(0)]&&(t=e.charAt(0),e=e.substring(1));let r="",i="",n=!0,s=!1,a=!1;"+"===t?n=!1:"."===t?(i=".",r="."):"/"===t?(i="/",r="/"):"#"===t?(i="#",n=!1):";"===t?(i=";",r=";",s=!0,a=!0):"?"===t?(i="?",r="&",s=!0):"&"===t&&(i="&",r="&",s=!0);let o=[],l=e.split(","),h=[],u={},d=0,c=l.length;for(d=0;d<c;d++){let e=l[d],t=null;if(-1!==e.indexOf(":")){let r=e.split(":");e=r[0],t=parseInt(r[1],10)}let r={};for(;URI_TEMPLATE_SUFFICES[e.charAt(e.length-1)];)r[e.charAt(e.length-1)]=!0,e=e.substring(0,e.length-1);let i={truncate:t,name:e,suffices:r};h.push(i),u[e]=i,o.push(e)}const f=e=>{let t="",o=0,l=0,u=h.length;for(l=0;l<u;l++){let d=h[l];if(!e&&!isFunction(e))throw new Error("Problem qith value function.");let c=e(d.name);if(null===c||void 0===c||Array.isArray(c)&&0===c.length||"object"==typeof c&&0===Object.keys(c).length)o++;else if(t+=l===o?i:r||",",Array.isArray(c)){s&&(t+=d.name+"=");let e=0;for(u=c.length,e=0;e<u;e++)e>0&&(t+=d.suffices["*"]&&r||",",d.suffices["*"]&&s&&(t+=d.name+"=")),t+=n?encodeURIComponent(c[e]).replace(/!/g,"%21"):this.notReallyPercentEncode(c[e])}else if("object"==typeof c){s&&!d.suffices["*"]&&(t+=d.name+"=");let e=!0;for(let i in c)e||(t+=d.suffices["*"]&&r||","),e=!1,t+=n?encodeURIComponent(i).replace(/!/g,"%21"):this.notReallyPercentEncode(i),t+=d.suffices["*"]?"=":",",t+=n?encodeURIComponent(c[i]).replace(/!/g,"%21"):this.notReallyPercentEncode(c[i])}else s&&(t+=d.name,a&&""===c||(t+="=")),null!==d.truncate&&(c=c.substring(0,d.truncate)),t+=n?encodeURIComponent(c).replace(/!/g,"%21"):this.notReallyPercentEncode(c)}return t};return f.varNames=o,{prefix:i,substitution:f}}recursiveCompare(e,t){if(e===t)return!0;if("object"==typeof e&&"object"==typeof t){if(Array.isArray(e)!==Array.isArray(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;let r=0,i=e.length;for(r=0;r<i;r++)if(!this.recursiveCompare(e[r],t[r]))return!1}else{let r;for(r in e)if(void 0===t[r]&&void 0!==e[r])return!1;for(r in t)if(void 0===e[r]&&void 0!==t[r])return!1;for(r in e)if(!this.recursiveCompare(e[r],t[r]))return!1}return!0}return!1}defineKeyword(e,t){this.definedKeywords[e]=this.definedKeywords[e]||[],this.definedKeywords[e].push(t)}createError(e,t,r,n,s){let a=this.errorMessages[e]||i.ERROR_MESSAGES_DEFAULT[e];if("string"!=typeof a)return new i.ValidationError(e,"Unknown error code "+e+": "+JSON.stringify(t),t,r,n,s);let o=a.replace(/\{([^{}]*)\}/g,function(e,r){let i=t[r];return"string"==typeof i||"number"==typeof i?i:e});return new i.ValidationError(e,o,t,r,n,s)}returnError(e){return e}collectError(e){return e&&this.errors.push(e),null}prefixErrors(e,t,r){let i=0,n=this.errors.length;for(i=e;i<n;i++)this.errors[i]=this.errors[i].prefixWith(t,r);return this}banUnknownProperties(){for(let e in this.unknownPropertyPaths){let t=this.createError(i.ERROR_CODES.UNKNOWN_PROPERTY,{path:e},e,""),r=this.handleError(t);if(r)return r}return null}addFormat(e,t){if("object"==typeof e){for(let t in e)this.addFormat(t,e[t]);return this}this.formatValidators[e]=t}resolveRefs(e,t){if(void 0!==e.$ref){if((t=t||{})[e.$ref])return this.createError(i.ERROR_CODES.CIRCULAR_REFERENCE,{urls:Object.keys(t).join(", ")},"","");t[e.$ref]=!0,e=this.getSchema(e.$ref,t)}return e}getSchema(e,t){let r;if(void 0!==this.schemas[e])return r=this.schemas[e],this.resolveRefs(r,t);let i=e,n="";if(-1!==e.indexOf("#")&&(n=e.substring(e.indexOf("#")+1),i=e.substring(0,e.indexOf("#"))),"object"==typeof this.schemas[i]){r=this.schemas[i];let e=decodeURIComponent(n);if(""===e)return this.resolveRefs(r,t);if("/"!==e.charAt(0))return;let s=e.split("/").slice(1),a=0,o=s.length;for(a=0;a<o;a++){let e=s[a].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===r[e]){r=void 0;break}r=r[e]}if(void 0!==r)return this.resolveRefs(r,t)}void 0===this.missing[i]&&(this.missing.push(i),this.missing[i]=i,this.missingMap[i]=i)}searchSchemas(e,t){if(Array.isArray(e)){let r=0,i=e.length;for(r=0;r<i;r++)this.searchSchemas(e[r],t)}else if(e&&"object"==typeof e){"string"==typeof e.id&&isTrustedUrl(t,e.id)&&void 0===this.schemas[e.id]&&(this.schemas[e.id]=e);for(let r in e)if("enum"!==r)if("object"==typeof e[r])this.searchSchemas(e[r],t);else if("$ref"===r){let t=(0,n.getDocumentUri)(e[r]);t&&void 0===this.schemas[t]&&void 0===this.missingMap[t]&&(this.missingMap[t]=t)}}}addSchema(e,t){if("string"!=typeof e||void 0===t){if("object"!=typeof e||"string"!=typeof e.id)return;e=(t=e).id}e===(0,n.getDocumentUri)(e)+"#"&&(e=(0,n.getDocumentUri)(e)),this.schemas[e]=t,delete this.missingMap[e],(0,n.normSchema)(t,e),this.searchSchemas(t,e)}getSchemaMap(){let e={};for(let t in this.schemas)e[t]=this.schemas[t];return e}getSchemaUris(e){let t=[];for(let r in this.schemas)e&&!e.test(r)||t.push(r);return t}getMissingUris(e){let t=[];for(let r in this.missingMap)e&&!e.test(r)||t.push(r);return t}dropSchemas(){this.schemas={},this.reset()}reset(){this.missing=[],this.missingMap={},this.errors=[]}validateAll(e,t,r,n,s){let a;if(!(t=this.resolveRefs(t)))return null;if(t instanceof i.ValidationError)return this.errors.push(t),t;let o,l=this.errors.length,h=null,u=null;if(this.checkRecursive&&e&&"object"==typeof e){if(a=!this.scanned.length,e[this.validatedSchemasKey]){let r=e[this.validatedSchemasKey].indexOf(t);if(-1!==r)return this.errors=this.errors.concat(e[this.validationErrorsKey][r]),null}if(Object.isFrozen(e)&&-1!==(o=this.scannedFrozen.indexOf(e))){let e=this.scannedFrozenSchemas[o].indexOf(t);if(-1!==e)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[o][e]),null}if(this.scanned.push(e),Object.isFrozen(e))-1===o&&(o=this.scannedFrozen.length,this.scannedFrozen.push(e),this.scannedFrozenSchemas.push([])),h=this.scannedFrozenSchemas[o].length,this.scannedFrozenSchemas[o][h]=t,this.scannedFrozenValidationErrors[o][h]=[];else{if(!e[this.validatedSchemasKey])try{Object.defineProperty(e,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(e,this.validationErrorsKey,{value:[],configurable:!0})}catch(t){e[this.validatedSchemasKey]=[],e[this.validationErrorsKey]=[]}u=e[this.validatedSchemasKey].length,e[this.validatedSchemasKey][u]=t,e[this.validationErrorsKey][u]=[]}}let d=this.errors.length,c=this.validateBasic(e,t,s)||this.validateNumeric(e,t,s)||this.validateString(e,t,s)||this.validateArray(e,t,s)||this.validateObject(e,t,s)||this.validateCombinations(e,t,s)||this.validateHypermedia(e,t,s)||this.validateFormat(e,t,s)||this.validateDefinedKeywords(e,t,s)||null;if(a){for(;this.scanned.length;){delete this.scanned.pop()[this.validatedSchemasKey]}this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(c||d!==this.errors.length)for(;r&&r.length||n&&n.length;){let e=r&&r.length?""+r.pop():null,t=n&&n.length?""+n.pop():null;c&&(c=c.prefixWith(e,t)),this.prefixErrors(d,e,t)}return null!==h?this.scannedFrozenValidationErrors[o][h]=this.errors.slice(l):null!==u&&(e[this.validationErrorsKey][u]=this.errors.slice(l)),this.handleError(c)}validateFormat(e,t){if("string"!=typeof t.format||!this.formatValidators[t.format])return null;let r=this.formatValidators[t.format].call(null,e,t);return"string"==typeof r||"number"==typeof r?this.createError(i.ERROR_CODES.FORMAT_CUSTOM,{message:r}).prefixWith(null,"format"):r&&"object"==typeof r?this.createError(i.ERROR_CODES.FORMAT_CUSTOM,{message:r.message||"?"},r.dataPath||null,r.schemaPath||"/format"):null}validateDefinedKeywords(e,t,r){for(let n in this.definedKeywords){if(void 0===t[n])continue;let s=this.definedKeywords[n],a=0,o=s.length;for(a=0;a<o;a++){let o=(0,s[a])(e,t[n],t,r);if("string"==typeof o||"number"==typeof o)return this.createError(i.ERROR_CODES.KEYWORD_CUSTOM,{key:n,message:o}).prefixWith(null,"format");if(o&&"object"==typeof o){let e=o.code;if("string"==typeof e){if(!i.ERROR_CODES[e])throw new Error("Undefined error code (use defineError): "+e);e=i.ERROR_CODES[e]}else"number"!=typeof e&&(e=i.ERROR_CODES.KEYWORD_CUSTOM);let t="object"==typeof o.message?o.message:{key:n,message:o.message||"?"},r=o.schemaPath||"/"+n.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(e,t,o.dataPath||null,r)}}}return null}validateBasic(e,t,r){let i=this.validateType(e,t,r);return i?i.prefixWith(null,"type"):null}validateType(e,t){if(void 0===t.type)return null;let r=typeof e;null===e?r="null":Array.isArray(e)&&(r="array");let n=t.type;"object"!=typeof n&&(n=[n]);let s=0,a=n.length;for(s=0;s<a;s++){let t=n[s];if(t===r||"integer"===t&&"number"===r&&e%1==0)return null}return this.createError(i.ERROR_CODES.INVALID_TYPE,{type:r,expected:n.join("/")})}validateEnum(e,t){if(void 0===t.enum)return null;let r=0,n=t.enum.length;for(r=0;r<n;r++){let i=t.enum[r];if(this.recursiveCompare(e,i))return null}return this.createError(i.ERROR_CODES.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?JSON.stringify(e):e})}validateNumeric(e,t,r){return this.validateMultipleOf(e,t,r)||this.validateMinMax(e,t,r)||this.validateNaN(e,t,r)||null}validateMultipleOf(e,t){let r=t.multipleOf||t.divisibleBy;if(void 0===r)return null;if("number"==typeof e){let t=e/r%1;if(t>=s&&t<a)return this.createError(i.ERROR_CODES.NUMBER_MULTIPLE_OF,{value:e,multipleOf:r})}return null}validateMinMax(e,t){if("number"!=typeof e)return null;if(void 0!==t.minimum){if(e<t.minimum)return this.createError(i.ERROR_CODES.NUMBER_MINIMUM,{value:e,minimum:t.minimum}).prefixWith(null,"minimum");if(t.exclusiveMinimum&&e===t.minimum)return this.createError(i.ERROR_CODES.NUMBER_MINIMUM_EXCLUSIVE,{value:e,minimum:t.minimum}).prefixWith(null,"exclusiveMinimum")}if(void 0!==t.maximum){if(e>t.maximum)return this.createError(i.ERROR_CODES.NUMBER_MAXIMUM,{value:e,maximum:t.maximum}).prefixWith(null,"maximum");if(t.exclusiveMaximum&&e===t.maximum)return this.createError(i.ERROR_CODES.NUMBER_MAXIMUM_EXCLUSIVE,{value:e,maximum:t.maximum}).prefixWith(null,"exclusiveMaximum")}return null}validateNaN(e){return"number"!=typeof e?null:!0===isNaN(e)||e===1/0||e===-1/0?this.createError(i.ERROR_CODES.NUMBER_NOT_A_NUMBER,{value:e}).prefixWith(null,"type"):null}validateString(e,t,r){return this.validateStringLength(e,t,r)||this.validateStringPattern(e,t,r)||null}validateStringLength(e,t){return"string"!=typeof e?null:void 0!==t.minLength&&e.length<t.minLength?this.createError(i.ERROR_CODES.STRING_LENGTH_SHORT,{length:e.length,minimum:t.minLength}).prefixWith(null,"minLength"):void 0!==t.maxLength&&e.length>t.maxLength?this.createError(i.ERROR_CODES.STRING_LENGTH_LONG,{length:e.length,maximum:t.maxLength}).prefixWith(null,"maxLength"):null}validateStringPattern(e,t){if("string"!=typeof e||void 0===t.pattern)return null;return new RegExp(t.pattern).test(e)?null:this.createError(i.ERROR_CODES.STRING_PATTERN,{pattern:t.pattern}).prefixWith(null,"pattern")}validateArray(e,t,r){return Array.isArray(e)&&(this.validateArrayLength(e,t,r)||this.validateArrayUniqueItems(e,t,r)||this.validateArrayItems(e,t,r))||null}validateArrayLength(e,t){let r;return void 0!==t.minItems&&e.length<t.minItems&&(r=this.createError(i.ERROR_CODES.ARRAY_LENGTH_SHORT,{length:e.length,minimum:t.minItems}).prefixWith(null,"minItems"),this.handleError(r))?r:void 0!==t.maxItems&&e.length>t.maxItems&&(r=this.createError(i.ERROR_CODES.ARRAY_LENGTH_LONG,{length:e.length,maximum:t.maxItems}).prefixWith(null,"maxItems"),this.handleError(r))?r:null}validateArrayUniqueItems(e,t){if(t.uniqueItems){let t=0,r=e.length;for(t=0;t<r;t++){let n=0;for(n=t+1;n<r;n++)if(recursiveCompare(e[t],e[n])){let e=this.createError(i.ERROR_CODES.ARRAY_UNIQUE,{match1:t,match2:n}).prefixWith(null,"uniqueItems");if(this.handleError(e))return e}}}return null}validateArrayItems(e,t,r){if(void 0===t.items)return null;let n,s;if(Array.isArray(t.items)){let a=e.length;for(s=0;s<a;s++)if(s<t.items.length){if(n=this.validateAll(e[s],t.items[s],[s],["items",s],r+"/"+s))return n}else if(void 0!==t.additionalItems)if("boolean"==typeof t.additionalItems){if(!t.additionalItems&&(n=this.createError(i.ERROR_CODES.ARRAY_ADDITIONAL_ITEMS,{}).prefixWith(""+s,"additionalItems"),this.handleError(n)))return n}else if(n=this.validateAll(e[s],t.additionalItems,[s],["additionalItems"],r+"/"+s))return n}else{let i=e.length;for(s=0;s<i;s++)if(n=this.validateAll(e[s],t.items,[s],["items"],r+"/"+s))return n}return null}validateObject(e,t,r){return"object"!=typeof e||null===e||Array.isArray(e)?null:this.validateObjectMinMaxProperties(e,t,r)||this.validateObjectRequiredProperties(e,t,r)||this.validateObjectProperties(e,t,r)||this.validateObjectDependencies(e,t,r)||null}validateObjectMinMaxProperties(e,t){let r,n=Object.keys(e);return void 0!==t.minProperties&&n.length<t.minProperties&&(r=this.createError(i.ERROR_CODES.OBJECT_PROPERTIES_MINIMUM,{propertyCount:n.length,minimum:t.minProperties}).prefixWith(null,"minProperties"),this.handleError(r))?r:void 0!==t.maxProperties&&n.length>t.maxProperties&&(r=this.createError(i.ERROR_CODES.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:n.length,maximum:t.maxProperties}).prefixWith(null,"maxProperties"),this.handleError(r))?r:null}validateObjectRequiredProperties(e,t){if(void 0!==t.required){let r=0,n=t.required.length;for(r=0;r<n;r++){let n=t.required[r];if(void 0===e[n]){let e=this.createError(i.ERROR_CODES.OBJECT_REQUIRED,{key:n}).prefixWith(null,""+r).prefixWith(null,"required");if(this.handleError(e))return e}}}return null}validateObjectProperties(e,t,r){let n;for(let s in e){let a=r+"/"+s.replace(/~/g,"~0").replace(/\//g,"~1"),o=!1;if(void 0!==t.properties&&void 0!==t.properties[s]&&(o=!0,n=this.validateAll(e[s],t.properties[s],[s],["properties",s],a)))return n;if(void 0!==t.patternProperties)for(let r in t.patternProperties){if(new RegExp(r).test(s)&&(o=!0,n=this.validateAll(e[s],t.patternProperties[r],[s],["patternProperties",r],a)))return n}if(o)this.trackUnknownProperties&&(this.knownPropertyPaths[a]=!0,delete this.unknownPropertyPaths[a]);else if(void 0!==t.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[a]=!0,delete this.unknownPropertyPaths[a]),"boolean"==typeof t.additionalProperties){if(!t.additionalProperties&&(n=this.createError(i.ERROR_CODES.OBJECT_ADDITIONAL_PROPERTIES,{}).prefixWith(s,"additionalProperties"),this.handleError(n)))return n}else if(n=this.validateAll(e[s],t.additionalProperties,[s],["additionalProperties"],a))return n}else this.trackUnknownProperties&&!this.knownPropertyPaths[a]&&(this.unknownPropertyPaths[a]=!0)}return null}validateObjectDependencies(e,t,r){let n;if(void 0!==t.dependencies)for(let s in t.dependencies)if(void 0!==e[s]){let a=t.dependencies[s];if("string"==typeof a){if(void 0===e[a]&&(n=this.createError(i.ERROR_CODES.OBJECT_DEPENDENCY_KEY,{key:s,missing:a}).prefixWith(null,s).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(Array.isArray(a)){let t=0,r=a.lenth;for(t=0;t<r;t++){let r=a[t];if(void 0===e[r]&&(n=this.createError(i.ERROR_CODES.OBJECT_DEPENDENCY_KEY,{key:s,missing:r}).prefixWith(null,""+t).prefixWith(null,s).prefixWith(null,"dependencies"),this.handleError(n)))return n}}else if(n=this.validateAll(e,a,[],["dependencies",s],r))return n}return null}validateCombinations(e,t,r){return this.validateAllOf(e,t,r)||this.validateAnyOf(e,t,r)||this.validateOneOf(e,t,r)||this.validateNot(e,t,r)||null}validateAllOf(e,t,r){if(void 0===t.allOf)return null;let i,n=0,s=t.allOf.length;for(n=0;n<s;n++){let s=t.allOf[n];if(i=this.validateAll(e,s,[],["allOf",n],r))return i}return null}validateAnyOf(e,t,r){if(void 0===t.anyOf)return null;let n,s,a=[],o=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,s=this.knownPropertyPaths);let l=!0,h=0,u=t.anyOf.length;for(h=0;h<u;h++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});let i=t.anyOf[h],u=this.errors.length,d=this.validateAll(e,i,[],["anyOf",h],r);if(null===d&&u===this.errors.length){if(this.errors=this.errors.slice(0,o),this.trackUnknownProperties){for(let e in this.knownPropertyPaths)s[e]=!0,delete n[e];for(let e in this.unknownPropertyPaths)s[e]||(n[e]=!0);l=!1;continue}return null}d&&a.push(d.prefixWith(null,""+h).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=s),l?(a=a.concat(this.errors.slice(o)),this.errors=this.errors.slice(0,o),this.createError(i.ERROR_CODES.ANY_OF_MISSING,{},"","/anyOf",a)):void 0}validateOneOf(e,t,r){if(void 0===t.oneOf)return null;let n,s,a=null,o=[],l=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,s=this.knownPropertyPaths);let h=0,u=t.oneOf.length;for(h=0;h<u;h++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});let u=t.oneOf[h],d=this.errors.length,c=this.validateAll(e,u,[],["oneOf",h],r);if(null===c&&d===this.errors.length){if(null!==a)return this.errors=this.errors.slice(0,l),this.createError(i.ERROR_CODES.ONE_OF_MULTIPLE,{index1:a,index2:h},"","/oneOf");if(a=h,this.trackUnknownProperties){for(let e in this.knownPropertyPaths)s[e]=!0,delete n[e];for(let e in this.unknownPropertyPaths)s[e]||(n[e]=!0)}}else c&&o.push(c)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=s),null===a?(o=o.concat(this.errors.slice(l)),this.errors=this.errors.slice(0,l),this.createError(i.ERROR_CODES.ONE_OF_MISSING,{},"","/oneOf",o)):(this.errors=this.errors.slice(0,l),null)}validateNot(e,t,r){if(void 0===t.not)return null;let n,s,a=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,s=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});let o=this.validateAll(e,t.not,null,null,r),l=this.errors.slice(a);return this.errors=this.errors.slice(0,a),this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=s),null===o&&0===l.length?this.createError(i.ERROR_CODES.NOT_PASSED,{},"","/not"):null}validateHypermedia(e,t,r){if(!t.links)return null;let i,n=0,s=t.links.length;for(n=0;n<s;n++){let s=t.links[n];if("describedby"===s.rel){let t=new UriTemplate(s.href),a=!0,o=0,l=t.varNames.length;for(o=0;o<l;o++)if(!(t.varNames[o]in e)){a=!1;break}if(a){let s={$ref:t.fillFromObject(e)};if(i=this.validateAll(e,s,[],["links",n],r))return i}}}}}t.default=o=o}])});
//# sourceMappingURL=core-next-validation.js.map

/***/ }),

/***/ "./node_modules/presentation-application/dist/presentation-application.js":
/*!********************************************************************************!*\
  !*** ./node_modules/presentation-application/dist/presentation-application.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-application */ "./node_modules/next-core-application/dist/next-core-application.js"),__webpack_require__(/*! presentation-router */ "./node_modules/presentation-router/dist/presentation-router.js"),__webpack_require__(/*! next-core-structures */ "./node_modules/next-core-structures/dist/next-core-structures.js")):undefined}(this,function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=0)}([function(e,t,r){"use strict";var n,s=r(1),i=(n=s)&&n.__esModule?n:{default:n};e.exports.Application=i.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),s=r(3),i=r(4);const o=(e,t)=>t?`${e}?${(0,s.serialize)(t)}`:e;t.default=class extends n.Application{constructor(e){super(e),this._router=null,this._mediators=[],this._stylesheets=[],this._breadcrumb=new i.Stack}navigate(e,t){return this._router&&e?this._router.navigate(o(e,t),{trigger:!0}):(console.warn("Can't navigate to nowhere."),this)}launch(e,t){return this._router&&e?this._router.navigate(o(e,t),{trigger:!1}):(console.warn("Can't launch nowhere."),this)}redirect(e){return e?(this.router.cleanup(),window.location=e):console.warn("Can't redirect to nowhere."),this}initialize(){return this._stylesheets&&this._stylesheets.length>0&&this.attachStylesheets(),this._router&&this._router.startHistory(),!0}get router(){return this._router}set router(e){this._router=e}registerMediator(e){e&&this._mediators.push(e)}deregisterMediator(e){if(e){const t=this._mediators.indexOf(e);-1!=t&&this._mediators.splice(t,1)}}get mediators(){return this._mediators}registerStylesheet(e){e&&this._stylesheets.push(e)}deregisterStylesheet(e){e&&this._stylesheets.splice(this._stylesheets.indexOf(e),1)}attachStylesheets(){const e=document.getElementsByTagName("head")[0],t=document.createDocumentFragment(),r=this._stylesheets.length;let n=0,s=null;for(n=0;n<r;n++)(s=document.createElement("link")).type="text/css",s.rel="stylesheet",s.href=this._stylesheets[n],t.appendChild(s);e.appendChild(t)}replaceStylesheets(){let e=0;for(e=document.getElementsByTagName("link").length-1;e>=0;e--)element[e].parentNode.removeChild(element[e]);this.attachStylesheets()}get stylesheets(){return this._stylesheets}setCurrentBreadcrumb(e,t){this._breadcrumb.size()>1&&this._breadcrumb.pop(),this._breadcrumb.push({uri:e,name:t})}getCurrentBreadcrumb(){return this._breadcrumb.peek()}get breadcrumbs(){return this._breadcrumb.toArray()}get title(){return document.title}set title(e){document.title=e}}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r}])});
//# sourceMappingURL=presentation-application.js.map

/***/ }),

/***/ "./node_modules/presentation-components/dist/presentation-components.js":
/*!******************************************************************************!*\
  !*** ./node_modules/presentation-components/dist/presentation-components.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! presentation-decorator */ "./node_modules/presentation-decorator/dist/presentation-decorator.js"),__webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js"),__webpack_require__(/*! presentation-navigation */ "./node_modules/presentation-navigation/dist/presentation-navigation.js"),__webpack_require__(/*! presentation-dialogs */ "./node_modules/presentation-dialogs/dist/presentation-dialogs.js"),__webpack_require__(/*! presentation-mediator */ "./node_modules/presentation-mediator/dist/presentation-mediator.js")):undefined}(this,function(e,t,r,o,s){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(o,s,function(t){return e[t]}.bind(null,s));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";var o=r(3),s=r(4),i=d(r(5)),n=d(r(6)),a=d(r(7)),l=d(r(8)),u=d(r(9));function d(e){return e&&e.__esModule?e:{default:e}}e.exports.Article=i.default,e.exports.Card=n.default,e.exports.DialogView=s.DialogView,e.exports.ConfirmationDialogView=s.ConfirmationDialogView,e.exports.AlertDialogView=s.AlertDialogView,e.exports.Footer=a.default,e.exports.Header=l.default,e.exports.Manager=u.default,e.exports.HamburgerMenu=o.HamburgerMenu,e.exports.Menu=o.Menu,e.exports.NavigationMenu=o.NavigationMenu,e.exports.NotificationCenter=o.NotificationCenter,e.exports.Notification=s.Notification,e.exports.Splash=s.Splash,e.exports.Toolbar=o.Toolbar,e.exports.Iconbar=o.Iconbar},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=r(0),i=r(1),n=(o=i)&&o.__esModule?o:{default:o};const a="article";t.default=class extends s.DecoratorView{constructor(e){e||(e={}),e.name||(e.name=a),e.tagName=a,super(e),e&&e.header?this._header=e.header:this._header="",e&&e.headerEl?this._headerEl=e.headerEl:this._headerEl="",e&&e.headerStyle?this._headerStyle=e.headerStyle:this._headerStyle="",e&&e.body?this._body=e.body:this._body="",e&&e.footer?this._footer=e.footer:this._footer="",e&&e.footerEl?this._footerEl=e.footerEl:this._footerEl="",e&&e.footerStyle?this._footerStyle=e.footerStyle:this._footerStyle="",e&&e.sections?this._sections=e.sections:this._sections=[]}set header(e){this._header=e}get header(){return this._header}set footer(e){this._footer=e}get footer(){return this._footer}set body(e){this._body=e}get body(){return this._body}set sections(e){e&&Array.isArray(e)&&(this._sections=e)}get sections(){return this._sections}_formatSections(){const e=this._sections.length;let t="",r=0;for(r=0;r<e;r++)t+=this._formatSection(this._sections[r]);return t}_formatSection(e){let t="";if(e&&(e.body||e.id||e.class)){const r=e.class?` class="${e.class}"`:"";t=`<section${e.id?` id="${e.id}"`:""}${r}>${e.body?e.body:""}</section>`}return t}addSection(e){this._sections.push(e)}clearSections(){this._sections.splice(0,this._sections.length)}render(){return this.el&&(n.default.setValue(this.el,this._template()),this.delegateEvents()),this}_template(){let e="";if(this._header){let t="",r="";this._headerEl&&(t=` id="${this._headerEl}"`),this._headerStyle&&(r=` class="${this._headerStyle}"`),e=`<header${t}${r}>${this._header}</header>`}let t="";if(this._footer){let e="",r="";this._footerEl&&(e=` id="${this._footerEl}"`),this._footerStyle&&(r=` class="${this._footerStyle}"`),t=`<footer${e}${r}>${this._footer}</footer>`}let r="";return this._body&&(r=this._bodyEl?`<div id="${this._bodyEl}">${this._body}</div>`:`${this._body}`),`${e}${r}${this._formatSections()}${t}`}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=r(0),i=r(1),n=(o=i)&&o.__esModule?o:{default:o};t.default=class extends s.DecoratorView{constructor(e){e||(e={}),e.name||(e.name="card"),e.style?e.style=`card ${e.style}`:e.style="card",super(e),e&&e.body?this._body=e.body:this._body=""}set style(e){this._style=e}get style(){return this._style}_template(){return this._body}set body(e){this._body=e}get body(){return this._body}render(){return this.el&&(n.default.setValue(this.el,this._template()),this.delegateEvents()),this}remove(){return this.removeTemplate(this.el,!0),super.remove()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=r(0),i=r(1),n=(o=i)&&o.__esModule?o:{default:o};t.default=class extends s.DecoratorView{constructor(e){super(e),e&&e.body?this._body=e.body:this._body=""}set body(e){this._body=e}get body(){return this._body}_template(){return this._body}render(){return this.el&&(n.default.setValue(this.el,this._template()),this.delegateEvents(),this.syncAllBoundElements()),this}remove(){return this.removeTemplate(this.el,!0),super.remove()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=r(0),i=r(1),n=(o=i)&&o.__esModule?o:{default:o};t.default=class extends s.DecoratorView{constructor(e){super(e),e&&e.title?this._title=e.title:this._title="",e&&e.subTitle?this._subTitle=e.subTitle:this._subTitle=""}set title(e){this._title=e}get title(){return this._title}set subTitle(e){this._subTitle=e}get subTitle(){return this._subTitle}render(){return n.default.setValue(this.el,`${this.template}${this.title?"<h1>"+this.title+"</h1>":""}${this.subTitle?"<h2>"+this.subTitle+"</h2>":""}`),this.delegateEvents(),this.syncAllBoundElements(),this}remove(){return this.removeTemplate(this.el,!0),super.remove()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(10);t.default=class extends o.Mediator{constructor(e){super(e)}manageComponent(e){return this.observeColleagueAndTrigger(e,e.name,e.name)}unmanageComponent(e){return this.dismissColleagueTrigger(e,e.name,e.name)}}},function(e,t){e.exports=s}])});
//# sourceMappingURL=presentation-components.js.map

/***/ }),

/***/ "./node_modules/presentation-controller/dist/presentation-controller.js":
/*!******************************************************************************!*\
  !*** ./node_modules/presentation-controller/dist/presentation-controller.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-object */ "./node_modules/next-core-object/dist/next-core-object.js")):undefined}(this,function(e){return function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/",s(s.s=1)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(2);t.default=class extends r.AugmentedObject{constructor(e){super(e),e&&e.views?this._views=e.views:this._views=[],e&&e.permissions?this._permissions=e.permissions:this._permissions={include:[],exclude:[]},this.initialize(e)}initialize(e){return this}render(){return this}remove(){return this}manageView(e){this._views.push(e)}removeAllViews(){const e=this._views.length;let t=0;for(t=0;t<e;t++)this._views[t].remove();this._views.splice(0)}get views(){return this._views}addPermission(e,t){t||(t=!1),null===e||Array.isArray(e)||(t?this._permissions.exclude:this._permissions.include).push(e)}removePermission(e,t){if(t||(t=!1),null!==e&&!Array.isArray(e)){const s=t?this._permissions.exclude:this._permissions.include;s.splice(s.indexOf(e),1)}}set permissions(e){this._permissions=e}get permissions(){return this._permissions}clearPermissions(){this._permissions={include:[],exclude:[]}}matchesPermission(e,t){return t||(t=!1),-1!==(t?this._permissions.exclude:this._permissions.include).indexOf(e)}canDisplay(){return!0}}},function(e,t,s){"use strict";var r=n(s(0)),i=n(s(3));function n(e){return e&&e.__esModule?e:{default:e}}e.exports.ViewController=r.default,e.exports.ManagedController=i.default},function(t,s){t.exports=e},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(s(0));const i=e=>new Promise((t,s)=>{e.render()?t(e):s(new Error("Error rendering!"))}),n=e=>new Promise((t,s)=>{e.remove()?t(e):s(new Error("Error removing!"))});t.default=class extends r.default{constructor(e){super(e)}initialize(e){if(this._views&&this._views.length>0){this._instances||(this._instances=[]);const t=this._views.length;let s=0;for(s=0;s<t;s++){const t=this._views[s],r=e;r.views=null;const i=new t(r);this._instances.push(i)}}return this}render(){const e=this._instances.length;let t=0;for(t=0;t<e;t++){const e=this._instances[t];i(e)}return this}remove(){const e=this._instances.length;let t=0;for(t=0;t<e;t++){const e=this._instances[t];n(e)}return this._instances.splice(0),this}}}])});
//# sourceMappingURL=presentation-controller.js.map

/***/ }),

/***/ "./node_modules/presentation-decorator/dist/presentation-decorator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/presentation-decorator/dist/presentation-decorator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"),__webpack_require__(/*! presentation-mediator */ "./node_modules/presentation-mediator/dist/presentation-mediator.js"),__webpack_require__(/*! presentation-models */ "./node_modules/presentation-models/dist/presentation-models.js"),__webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js"),__webpack_require__(/*! presentation-widget */ "./node_modules/presentation-widget/dist/presentation-widget.js")):undefined}(this,function(e,t,n,i,r){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),r=n(4),o=n(5),s=l(n(6));l(n(7));function l(e){return e&&e.__esModule?e:{default:e}}const a={CLICK:"data-click",FUNCTION:"data-function",STYLE:"data-style",APPEND_TEMPLATE:"data-append-template",PREPEND_TEMPLATE:"data-prepend-template"};t.default=class extends r.Colleague{constructor(e){super(e),this.customEvents={}}events(){const e=this.customEvents?this.customEvents:{};return this.name&&(e[`change input[${this.bindingAttribute()}]`]="_changed",e[`change textarea[${this.bindingAttribute()}]`]="_changed",e[`change select[${this.bindingAttribute()}]`]="_changed",e[`click *[${this.bindingAttribute()}][${a.CLICK}]`]="_click"),e}_changed(e){if(e){let t=e.currentTarget.getAttribute(this.bindingAttribute()),n=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(n=!!e.currentTarget.checked),this.model.set(t||e.currentTarget.name,n),this._func(e)}}_click(e){if(e){let t=e.currentTarget.getAttribute(a.CLICK);t&&this[t]&&this._executeFunctionByName(t,this,e),this._func(e)}}_func(e){if(e){let t=e.currentTarget.getAttribute(a.FUNCTION);t&&this[t]&&this._executeFunctionByName(t,this,e)}}initialize(e){this.init(e),this.model||(this.model=new o.Model)}remove(){return this.undelegateEvents(),this.off(),this.stopListening(),this}_executeFunctionByName(e,t,...n){const i=e.split("."),r=i.pop();if(i&&r){let e=0;const o=i.length;for(e=0;e<o;e++)t=t[i[e]];return t[r].apply(t,n)}return null}bindingAttribute(){return"data-"+this.name}injectTemplate(e,t){if(t||(t=this.el),(0,i.isString)(t)){const e=document.querySelector(t);if(!e)return;t=e}if((0,i.isString)(e)){const n=t.innerHTML;t.innerHTML=`${n}${e}`}else e.nodeType&&e.nodeName&&e.nodeType>0&&"template"!==e.nodeName&&"TEMPLATE"!==e.nodeName?t.appendChild(e):(e instanceof DocumentFragment||"template"===e.nodeName||"TEMPLATE"===e.nodeName)&&s.default.injectTemplate(e,t);this.delegateEvents()}removeTemplate(e,t){if(e){let n;if(n=(0,i.isString)(e)?s.default.selector(e):e){for(;n.firstChild;)n.removeChild(n.firstChild);if(!t){const e=n.parentNode;e&&e.removeChild(n)}this.delegateEvents()}else console.warn(`template not removed from ${e}`)}}boundElement(e){if(this.el&&e){let t=this.el;if((0,i.isString)(this.el)&&(t=document.querySelector(this.el)),t)return t.querySelector("["+this.bindingAttribute()+"="+e+"]")}return null}syncBoundElement(e){if(e){let t=new UIEvent("change",{view:window,bubbles:!0,cancelable:!0}),n=this.boundElement(e);n&&n.dispatchEvent(t)}}syncAllBoundElements(){const e=this.bindingAttribute();if(this.el&&e){const t=document.querySelectorAll(`${this.el}[${e}]`);if(t&&t.length>0){let e=0,n=t.length,i=new UIEvent("change",{view:window,bubbles:!0,cancelable:!0});for(e=0;e<n;e++)t[e].dispatchEvent(i)}}}addClass(e,t){const n=this.boundElement(e);n&&n.classList.add(t)}removeClass(e,t){const n=this.boundElement(e);n&&n.classList.remove(t)}bindModelChange(e){this.model||(this.model=new o.Model),this.model.on("change",e,this)}syncModelChange(e){this.model||(this.model=new o.Model),e?this.model.on("change:"+e,this._syncData.bind(this,e),this):this.model.on("change",this._syncAllData.bind(this,e),this)}_syncData(e){let t=this.boundElement(e);if(t){let n,i,r=this.model.get(e),o=t.getAttribute(a.STYLE),l=t.getAttribute(a.PREPEND_TEMPLATE),u=t.getAttribute(a.APPEND_TEMPLATE);if(l&&(n=document.createElement("div"),i=s.default.selector("#"+l),t.appendChild(n),this.injectTemplate(i,n)),o){let e;"list"===o||"unordered-list"===o?(e=Presentation.Widget.List(null,r,!1),s.default.empty(t),t.appendChild(e)):"ordered-list"===o?(e=Presentation.Widget.List(null,r,!0),s.default.empty(t),t.appendChild(e)):"description-list"===o&&(e=Presentation.Widget.DescriptionList(null,r),s.default.empty(t),t.appendChild(e))}else s.default.setValue(t,r||"");u&&(n=document.createElement("div"),i=s.default.selector("#"+u),t.appendChild(n),this.injectTemplate(i,n))}}_syncAllData(){const e=this.model.attributes;if(e){let t=0;const n=Object.keys(e),i=n.length;for(t=0;t<i;t++)this._syncData(n[t])}}unbindModelChange(e){this.model.unBind("change",e,this)}unbindModelSync(e){this.model.unBind("change:"+e,this._syncData,this)}}},function(e,t,n){"use strict";var i=o(n(2)),r=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}e.exports.DecoratorView=r.default,e.exports.DirectiveView=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i};t.default=class extends o.default{constructor(e){super(e)}render(){return super.render()}remove(){return this.removeTemplate(this.el,!0),super.remove()}}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=i},function(e,t){e.exports=r}])});
//# sourceMappingURL=presentation-decorator.js.map

/***/ }),

/***/ "./node_modules/presentation-dialogs/dist/presentation-dialogs.js":
/*!************************************************************************!*\
  !*** ./node_modules/presentation-dialogs/dist/presentation-dialogs.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! presentation-decorator */ "./node_modules/presentation-decorator/dist/presentation-decorator.js"),__webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js"),__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js")):undefined}(this,function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(3),o=r(4),s=(n=o)&&n.__esModule?n:{default:n};t.default=class extends i.DecoratorView{constructor(e){super(e),this.name||(this.name="dialog"),e&&e.title?this._title=e.title:this._title="",e&&e.body?this._body=e.body:this._body="",e&&e.style?this._style=e.style:this._style="form",e&&e.buttons?this._buttons=e.buttons:this._buttons={}}set title(e){this._title=e}get title(){return this._title}set style(e){this._style=e}get style(){return this._style}set buttons(e){this._buttons=e}get buttons(){return this._buttons}_template(){return`<div class="blur"><dialog class="${this._style}"><h1>${this._title}</h1>${this._body}${this._getButtonGroup()}</dialog></div>`}set body(e){this._body=e}get body(){return this._body}_getButtonGroup(){let e='<div class="buttonGroup">',t=0,r=Object.keys(this._buttons),n=r?r.length:0;for(t=0;t<n;t++)e+=`<button data-${this.name}="${this._buttons[r[t]]}" data-click="${this._buttons[r[t]]}">${r[t]}</button>`;return e+"</div>"}render(){return this.el&&(s.default.setValue(this.el,this._template()),this.delegateEvents(),this.trigger("open")),this}cancel(e){this.close(e)}open(e){this.render()}close(e){this.trigger("close"),s.default.empty(this.el,!0)}}},function(e,t,r){(function(t){var r="Expected a function",n="__lodash_placeholder__",i=1,o=2,s=4,u=8,l=16,c=32,a=64,f=128,d=512,p=1/0,h=9007199254740991,y=1.7976931348623157e308,_=NaN,b=[["ary",f],["bind",i],["bindKey",o],["curry",u],["curryRight",l],["flip",d],["partial",c],["partialRight",a],["rearg",256]],v="[object Function]",g="[object GeneratorFunction]",m="[object Symbol]",O=/^\s+|\s+$/g,x=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,j=/\{\n\/\* \[wrapped with (.+)\] \*/,M=/,? & /,S=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,A=/^\[object .+?Constructor\]$/,T=/^0o[0-7]+$/i,w=/^(?:0|[1-9]\d*)$/,E=parseInt,$="object"==typeof t&&t&&t.Object===Object&&t,N="object"==typeof self&&self&&self.Object===Object&&self,k=$||N||Function("return this")();function q(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function I(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var i=e.length,o=r+(n?1:-1);for(;n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}(e,R,r);var n=r-1,i=e.length;for(;++n<i;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function R(e){return e!=e}function L(e,t){for(var r=-1,i=e.length,o=0,s=[];++r<i;){var u=e[r];u!==t&&u!==n||(e[r]=n,s[o++]=r)}return s}var B,F,C,G=Function.prototype,D=Object.prototype,U=k["__core-js_shared__"],V=(B=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",H=G.toString,J=D.hasOwnProperty,Y=D.toString,z=RegExp("^"+H.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),K=Object.create,Q=Math.max,X=Math.min,W=(F=oe(Object,"defineProperty"),(C=oe.name)&&C.length>2?F:void 0);function Z(e){return!(!de(e)||(t=e,V&&V in t))&&(function(e){var t=de(e)?Y.call(e):"";return t==v||t==g}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?z:A).test(function(e){if(null!=e){try{return H.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function ee(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r,n=de(r=e.prototype)?K(r):{},i=e.apply(n,t);return de(i)?i:n}}function te(e,t,r,n,s,c,a,p,h,y){var _=t&f,b=t&i,v=t&o,g=t&(u|l),m=t&d,O=v?void 0:ee(e);return function i(){for(var o=arguments.length,u=Array(o),l=o;l--;)u[l]=arguments[l];if(g)var f=ie(i),d=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&n++;return n}(u,f);if(n&&(u=function(e,t,r,n){for(var i=-1,o=e.length,s=r.length,u=-1,l=t.length,c=Q(o-s,0),a=Array(l+c),f=!n;++u<l;)a[u]=t[u];for(;++i<s;)(f||i<o)&&(a[r[i]]=e[i]);for(;c--;)a[u++]=e[i++];return a}(u,n,s,g)),c&&(u=function(e,t,r,n){for(var i=-1,o=e.length,s=-1,u=r.length,l=-1,c=t.length,a=Q(o-u,0),f=Array(a+c),d=!n;++i<a;)f[i]=e[i];for(var p=i;++l<c;)f[p+l]=t[l];for(;++s<u;)(d||i<o)&&(f[p+r[s]]=e[i++]);return f}(u,c,a,g)),o-=d,g&&o<y){var x=L(u,f);return re(e,t,te,i.placeholder,r,u,x,p,h,y-o)}var j=b?r:this,M=v?j[e]:e;return o=u.length,p?u=function(e,t){for(var r=e.length,n=X(t.length,r),i=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(e);n--;){var o=t[n];e[n]=le(o,r)?i[o]:void 0}return e}(u,p):m&&o>1&&u.reverse(),_&&h<o&&(u.length=h),this&&this!==k&&this instanceof i&&(M=O||ee(M)),M.apply(j,u)}}function re(e,t,r,n,l,f,d,p,h,y){var _=t&u;t|=_?c:a,(t&=~(_?a:c))&s||(t&=~(i|o));var b=r(e,t,l,_?f:void 0,_?d:void 0,_?void 0:f,_?void 0:d,p,h,y);return b.placeholder=n,ce(b,e,t)}function ne(e,t,n,s,f,d,p,h){var y=t&o;if(!y&&"function"!=typeof e)throw new TypeError(r);var _=s?s.length:0;if(_||(t&=~(c|a),s=f=void 0),p=void 0===p?p:Q(he(p),0),h=void 0===h?h:he(h),_-=f?f.length:0,t&a){var b=s,v=f;s=f=void 0}var g=[e,t,n,s,f,b,v,d,p,h];if(e=g[0],t=g[1],n=g[2],s=g[3],f=g[4],!(h=g[9]=null==g[9]?y?0:e.length:Q(g[9]-_,0))&&t&(u|l)&&(t&=~(u|l)),t&&t!=i)m=t==u||t==l?function(e,t,r){var n=ee(e);return function i(){for(var o=arguments.length,s=Array(o),u=o,l=ie(i);u--;)s[u]=arguments[u];var c=o<3&&s[0]!==l&&s[o-1]!==l?[]:L(s,l);return(o-=c.length)<r?re(e,t,te,i.placeholder,void 0,s,c,void 0,void 0,r-o):q(this&&this!==k&&this instanceof i?n:e,this,s)}}(e,t,h):t!=c&&t!=(i|c)||f.length?te.apply(void 0,g):function(e,t,r,n){var o=t&i,s=ee(e);return function t(){for(var i=-1,u=arguments.length,l=-1,c=n.length,a=Array(c+u),f=this&&this!==k&&this instanceof t?s:e;++l<c;)a[l]=n[l];for(;u--;)a[l++]=arguments[++i];return q(f,o?r:this,a)}}(e,t,n,s);else var m=function(e,t,r){var n=t&i,o=ee(e);return function t(){return(this&&this!==k&&this instanceof t?o:e).apply(n?r:this,arguments)}}(e,t,n);return ce(m,e,t)}function ie(e){return e.placeholder}function oe(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Z(r)?r:void 0}function se(e){var t=e.match(j);return t?t[1].split(M):[]}function ue(e,t){var r=t.length,n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(x,"{\n/* [wrapped with "+t+"] */\n")}function le(e,t){return!!(t=null==t?h:t)&&("number"==typeof e||w.test(e))&&e>-1&&e%1==0&&e<t}var ce=W?function(e,t,r){var n,i=t+"";return W(e,"toString",{configurable:!0,enumerable:!1,value:(n=ue(i,ae(se(i),r)),function(){return n})})}:function(e){return e};function ae(e,t){return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(b,function(r){var n="_."+r[0];t&r[1]&&!I(e,n)&&e.push(n)}),e.sort()}var fe=function(e,t){return t=Q(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,i=Q(r.length-t,0),o=Array(i);++n<i;)o[n]=r[t+n];n=-1;for(var s=Array(t+1);++n<t;)s[n]=r[n];return s[t]=o,q(e,this,s)}}(function(e,t,r){var n=i;if(r.length){var o=L(r,ie(fe));n|=c}return ne(e,n,t,r,o)});function de(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function pe(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Y.call(e)==m}(e))return _;if(de(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=de(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var r=P.test(e);return r||T.test(e)?E(e.slice(2),r?2:8):S.test(e)?_:+e}(e))===p||e===-p?(e<0?-1:1)*y:e==e?e:0:0===e?e:0}function he(e){var t=pe(e),r=t%1;return t==t?r?t-r:t:0}fe.placeholder={},e.exports=fe}).call(this,r(12))},function(e,t,r){"use strict";var n=l(r(0)),i=l(r(5)),o=l(r(6)),s=l(r(7)),u=l(r(8));function l(e){return e&&e.__esModule?e:{default:e}}e.exports.DialogView=n.default,e.exports.ConfirmationDialogView=i.default,e.exports.AlertDialogView=o.default,e.exports.Notification=s.default,e.exports.Splash=u.default},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};t.default=class extends o.default{constructor(e){e||(e={}),e.buttons||(e.buttons={}),e.buttons.yes="yes",e.buttons.no="no",e.style="alert",super(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};t.default=class extends o.default{constructor(e){e||(e={}),e.buttons||(e.buttons={}),e.buttons.cancel="cancel",e.style="alert",super(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(0),o=(n=i)&&n.__esModule?n:{default:n};t.default=class extends o.default{constructor(e){e||(e={}),e.style?e.style=`${e.style} notify`:e.style="notify",e.name||(e.name="notify"),e.tagName="div",e.buttons={},super(e),e.timeOut?this.timeOut=e.timeOut:this.timeOut=2e3}_template(){return`${this._title?"<h1>"+this._title+"</h1>":""}${this._body}`}render(){const e=this,t=this.timeOut;return setTimeout(function(){const r=e.el;r.classList.add("slide"),setTimeout(function(){e.remove(),r.remove()},t)},2*t),super.render()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9);t.default=class extends n.View{constructor(e){e||(e={}),e.name||(e.name="splash"),e.style?e.style=`${e.style} splash`:e.style="splash",e.title||(e.title="Untitled"),e.figureStyle||(e.figureStyle="logo_large"),e.template||(e.template=`\n        ${e.title?"<h1>"+e.title+"</h1>":""}\n        ${e.subTitle?"<h2>"+e.subTitle+"</h2>":""}\n        ${e.subSubTitle?"<h3>"+e.subSubTitle+"</h3>":""}\n        <figure class="${e.figureStyle}"></figure>\n      `),super(e),e.timeOut?this.timeOut=e.timeOut:this.timeOut=2e3}render(){const e=this,t=this.timeOut;return setTimeout(function(){const r=e.el;r.classList.add("fade"),setTimeout(function(){e.remove(),r.remove()},t)},2*t),super.render()}}},function(e,t,r){var n,i,o;e.exports=(n=r(10),i=r(11),o=r(1),function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t){e.exports=n},function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(r(2));e.exports.View=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(3)),i=r(0);t.default=class extends n.default{constructor(e){super(e)}render(){if(this._el&&this.template){let e=this._el;(0,i.isString)(this._el)&&(e=document.querySelector(this._el)),e&&(e.innerHTML=this.template)}return this}remove(){if(this.undelegateEvents(),this.off(),this.stopListening(),this._el){let e=this._el;(0,i.isString)(this._el)&&(e=document.querySelector(this._el)),e&&(e.innerHTML="")}return this}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),i=r(0);const o=r(5),s=/^(\S+)\s*(.*)$/;t.default=class extends n.AugmentedObject{constructor(e){super(e),e&&e.name?this._name=e.name:this._name="Untitled",e&&e.permissions?this._permissions=e.permissions:this._permissions={include:[],exclude:[]},e&&e.tagName?this.tagName=e.tagName:this.tagName="div",e&&e.el?this._el=e.el:this._el="",e&&e.model?this.model=e.model:this.model=null,e&&e.collection?this.collection=e.collection:this.collection=null,e&&e.id?this.id=e.id:this.id=0,e&&e.className?this._style=e.className:this._style="",e&&e.style?this._style=e.style:this._style="",e&&e.attributes?this.attributes=e.attributes:this.attributes={},this.cid=(0,i.uniqueId)("view"),e&&e.noEL||this._ensureElement(),e&&e.template?this.template=e.template:this.template="",this.initialize(e)}get el(){return this._el}set el(e){this._el=e}init(e){}initialize(e){return this.options=e,this.init(e),this}beforeRender(){return this}render(){return this}afterRender(){return this}remove(){return this._removeElement(),this.stopListening(),this}_removeElement(){let e=this._el;this._el&&(0,i.isString)(this._el)&&(e=document.querySelector(this._el)),e&&(e.innerHTML="")}setElement(e){return this.undelegateEvents(),this._el=e,this.delegateEvents(),this}delegateEvents(e){if(e||(e=(0,i.result)(this,"events")),!e)return this;let t;for(t in this.undelegateEvents(),e){let r=e[t];if((0,i.isFunction)(r)||(r=this[r]),!r)continue;const n=t.match(s);this.delegate(n[1],n[2],o(r,this))}return this}delegate(e,t,r){const n=document.querySelectorAll(t);if(n){const t=Array.from(n);let i=0;const o=t.length;for(i=0;i<o;i++)t[i].addEventListener(e,r)}return this}undelegateEvents(){if(this._el){let e=this._el;if((0,i.isString)(this._el)&&(e=document.querySelector(this._el)),e){const t=e.cloneNode(!0);t&&t.parentNode&&e.parentNode.replaceChild(t,e)}}return this}undelegate(e,t,r){if(this._el){let n=this._el;if((0,i.isString)(this._el)&&(n=document.querySelector(this._el)),n){const i=n.querySelectorAll(t);if(i){const t=Array.from(i);let n=0;const o=t.length;for(n=0;n<o;n++)t[n].removeEventListener(e,r)}}}return this}_createElement(e){return document.createElement(e)}_ensureElement(){if(this._el)this.setElement(this._el);else{const e=(0,i.extend)({},(0,i.result)(this,"attributes"));this.id&&(e.id=this.id),this._style&&(e.class=this._style);const t=this._createElement(this.tagName),r=document.querySelector("body");r&&r.appendChild(t),t&&this.setElement(t),this._setAttributes(e)}}_setAttributes(e){let t;for(t in e)if(this._el){let r=this._el;(0,i.isString)(this._el)&&(r=document.querySelector(this._el)),r&&r.setAttribute(t,e[t])}}set name(e){this._name=e}get name(){return this._name}addPermission(e,t){t||(t=!1),null===e||Array.isArray(e)||(t?this._permissions.exclude:this._permissions.include).push(e)}removePermission(e,t){if(t||(t=!1),null!==e&&!Array.isArray(e)){const r=t?this._permissions.exclude:this._permissions.include;r.splice(r.indexOf(e),1)}}set permissions(e){this._permissions=e}get permissions(){return this._permissions}clearPermissions(){this._permissions={include:[],exclude:[]}}matchesPermission(e,t){return t||(t=!1),-1!==(t?this._permissions.exclude:this._permissions.include).indexOf(e)}canDisplay(){return!0}}},function(e,t){e.exports=i},function(e,t){e.exports=o}]))},function(e,t){e.exports=r},function(e,t,r){var n;e.exports=(n=r(1),function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=t.EVENT_SPLITTER=/\s+/,i=t.eventsApi=((e,t,r,o,s)=>{let u,l=0;if(r&&"object"==typeof r){void 0!==o&&"context"in s&&void 0===s.context&&(s.context=o);for(u=Object.keys(r);l<u.length;l++)t=i(e,t,u[l],r[u[l]],s)}else if(r&&n.test(r))for(u=r.split(n);l<u.length;l++)t=e(t,u[l],o,s);else t=e(t,r,o,s);return t}),o=(t.internalOn=((e,t,r,n,s)=>(e._events=i(o,e._events||{},t,r,{context:n,ctx:e,listening:s}),s&&((e._listeners||(e._listeners={}))[s.id]=s),e)),t.onApi=((e,t,r,n)=>{if(r){const i=e[t]||(e[t]=[]),o=n.context,s=n.ctx,u=n.listening;u&&u.count++,i.push({callback:r,context:o,ctx:o||s,listening:u})}return e})),s=(t.offApi=((e,t,r,n)=>{if(!e)return;let i,o=0;const s=n.context,u=n.listeners;if(!t&&!r&&!s){const e=Object.keys(u);for(;o<e.length;o++)delete u[(i=u[e[o]]).id],delete i.listeningTo[i.objId];return}let l=t?[t]:Object.keys(e);for(;o<l.length;o++){const n=e[t=l[o]];if(!n)break;const c=[];let a=0;for(a=0;a<n.length;a++){const e=n[a];r&&r!==e.callback&&r!==e.callback._callback||s&&s!==e.context?c.push(e):(i=e.listening)&&0==--i.count&&(delete u[i.id],delete i.listeningTo[i.objId])}c.length?e[t]=c:delete e[t]}return e}),t.triggerApi=((e,t,r,n)=>{if(e){const r=e[t];let i=e.all;r&&i&&(i=i.slice()),r&&s(r,n),i&&s(i,[t].concat(n))}return e}),t.triggerEvents=((e,t)=>{let r,n=-1;const i=e.length,o=t[0],s=t[1],u=t[2];switch(t.length){case 0:for(;++n<i;)(r=e[n]).callback.call(r.ctx);return;case 1:for(;++n<i;)(r=e[n]).callback.call(r.ctx,o);return;case 2:for(;++n<i;)(r=e[n]).callback.call(r.ctx,o,s);return;case 3:for(;++n<i;)(r=e[n]).callback.call(r.ctx,o,s,u);return;default:for(;++n<i;)(r=e[n]).callback.apply(r.ctx,t);return}}))},function(e,t,r){"use strict";var n=s(r(2)),i=s(r(5)),o=r(0);function s(e){return e&&e.__esModule?e:{default:e}}e.exports.AugmentedObject=n.default,e.exports.Configuration=i.default,e.exports.eventsApi=o.eventsApi,e.exports.eventsApi=o.internalOn,e.exports.eventsApi=o.offApi,e.exports.eventsApi=o.triggerApi},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),i=r(0);const o=r(4);t.default=class{constructor(e){e||(e={}),this._options||(this._options={}),Object.assign(this._options,e),e&&e.events?this._events=e.events:this._events={},this._listeningTo={},this._listenId={},this._listeners={}}initialize(...e){return this}get options(){return this._options}set options(e){this._options=e}get events(){return this._events}set events(e){this._events=e}trigger(e,...t){if(this._events){const r=Array.isArray(t)?t:Array.from(t);(0,i.eventsApi)(i.triggerApi,this._events,e,void 0,r)}return this}once(e,t,r){const n=(0,i.eventsApi)(this._onceMap,{},e,t,o(this.off,this));return"string"==typeof e&&null==r&&(t=void 0),this.on(n,t,r)}off(e,t,r){return this._events&&(this._events=(0,i.eventsApi)(i.offApi,this._events,e,t,{context:r,listeners:this._listeners})),this}stopListening(e,t,r){const n=this._listeningTo;if(n){const i=e?[e._listenId]:Object.keys(n);let o=0;for(o=0;o<i.length;o++){const e=n[i[o]];if(!e)break;e.obj.off(t,r,this)}}return this}on(e,t,r){return(0,i.internalOn)(this,e,t,r)}listenTo(e,t,r){if(e){const o=e._listenId||(e._listenId=(0,n.uniqueId)("l")),s=this._listeningTo||(this._listeningTo={});let u=s[o];if(!u){const t=this._listenId||(this._listenId=(0,n.uniqueId)("l"));u=s[o]={obj:e,objId:o,id:t,listeningTo:s,count:0}}(0,i.internalOn)(e,t,r,this,u)}return this}listenToOnce(e,t,r){const n=(0,i.eventsApi)(this._onceMap,{},t,r,o(this.stopListening,this,e));return this.listenTo(e,n)}_onceMap(e,t,r,i){if(r){const o=e[t]=(0,n.once)(()=>{i(t,o),r.apply(this,arguments)});o._callback=r}return e}}},function(e,t,r){"use strict";e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.default=((e,t)=>{let r,i;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return i=Number.parseInt(e),()=>(--i>0&&(r=t.apply(void 0,n)),i<=1&&(t=void 0),r)})},function(e,t,r){var n=S(r(4)),i=S(r(1)),o=S(r(5)),s=S(r(6)),u=S(r(7)),l=S(r(8)),c=S(r(0)),a=S(r(9)),f=S(r(10)),d=S(r(11)),p=S(r(12)),h=S(r(13)),y=S(r(14)),_=S(r(15)),b=S(r(16)),v=S(r(2)),g=S(r(17)),m=r(18),O=r(19),x=r(20),j=S(r(21)),M=S(r(22));function S(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=O.shuffle,e.exports.prettyPrint=O.prettyPrint,e.exports.binarySearch=O.binarySearch,e.exports.TransformerType=O.TransformerType,e.exports.Transformer=O.Transformer,e.exports.wrap=O.wrap,e.exports.filterObject=O.filterObject,e.exports.findByMatchingProperties=O.findByMatchingProperties,e.exports.sortObjects=x.sortObjects,e.exports.mergeSort=x.mergeSort,e.exports.quickSort=x.quickSort,e.exports.insertionSort=x.insertionSort,e.exports.bubbleSort=x.bubbleSort,e.exports.formatDate=j.default,e.exports.formatBinary=M.default,e.exports.isString=n.default,e.exports.isFunction=i.default,e.exports.extend=o.default,e.exports.pad=s.default,e.exports.uniqueId=u.default,e.exports.has=l.default,e.exports.isObject=c.default,e.exports.allKeys=a.default,e.exports.create=f.default,e.exports.result=d.default,e.exports.arrayHas=p.default,e.exports.exec=h.default,e.exports.isDefined=y.default,e.exports.some=_.default,e.exports.splice=b.default,e.exports.before=v.default,e.exports.once=g.default,e.exports.fibonacci=m.fibonacci,e.exports.fibonacciSequence=m.fibonacciSequence},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});let n=0;t.default=(e=>`${e}${++n}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,n.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,n.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,n.default)(r)?r.call(e):r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,...r)=>{const n=e.split("."),i=n.pop(),o=n.length;let s=0;for(s=0;s<o;s++)t=t[n[s]];return t[i].apply(t,r)})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>void 0!==e)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let n=Array(e.length-r);const i=t.length;let o;for(o=0;o<n.length;o++)n[o]=e[o+r];for(o=0;o<i;o++)e[o+r]=t[o];for(o=0;o<n.length;o++)e[o+i+r]=n[o]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,n.default)(2,e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});const n=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(n(r));return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,n,i=0;for(i=e.length-1;i>0;i--)n=Math.floor(Math.random()*(i+1)),r=t[i],t[i]=t[n],t[n]=r;return t}),t.prettyPrint=((e,t,r)=>{let n="\t";return t&&(n=" ".repeat(r)),JSON.stringify(e,null,n)}),t.binarySearch=((e,t,r)=>{let n,i,o=0,s=e.length-1;for(;o<=s;)if((i=r(e[n=Math.floor((o+s)/2)],t))<0)o=n+1;else{if(!(i>0))return n;s=n-1}return null});const i=t.TransformerType={};i.STRING=Symbol("String"),i.INTEGER=Symbol("Integer"),i.NUMBER=Symbol("Number"),i.BOOLEAN=Symbol("Boolean"),i.ARRAY=Symbol("Array"),i.OBJECT=Symbol("Object"),i.NULL=Symbol("Null"),t.Transformer=class{constructor(){this.type=i}static transform(e,t){let r=null;switch(t){case i.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case i.INTEGER:r=parseInt(e);break;case i.NUMBER:r=Number(e);break;case i.BOOLEAN:r=Boolean(e);break;case i.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case i.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?i.NULL:"string"==typeof e?i.STRING:"number"==typeof e?i.NUMBER:"boolean"==typeof e?i.BOOLEAN:Array.isArray(e)?i.ARRAY:"object"==typeof e?i.OBJECT:void 0}},t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(n)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const n=t.length;let i=0;for(i=0;i<n;i++)r[t[i]]=e[t[i]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=((e,t)=>e.sort((e,r)=>{const n=e[t],i=r[t];return n<i?-1:n>i?1:0}));const n=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),o=e.slice(t);return i(n(r),n(o))}),i=(e,t)=>{let r=[],n=0,i=0;for(;n<e.length&&i<t.length;)e[n]<t[i]?(r.push(e[n]),n++):(r.push(t[i]),i++);return r.concat(e.slice(n)).concat(t.slice(i))},o=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,n=[],i=[],s=e[0];for(t=1;t<r;t++)e[t]<s?n.push(e[t]):i.push(e[t]);return o(n).concat(s,o(i))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let n,i,o;for(n=1;n<r;n++){for(o=t[n],i=n-1;i>=0&&t[i]>o;i--)t[i+1]=t[i];t[i+1]=o}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,n,i;const o=(t=e.slice()).length-1;do{for(r=!1,n=0;n<o;n++)t[n]>t[n+1]&&(i=t[n],t[n]=t[n+1],t[n+1]=i,r=!0)}while(r)}return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),i=e.getHours(),o=e.getMinutes();return e.getSeconds(),`${r}/${n}/${t} ${i%12||12}:${o<10?"0"+o:o}${i<12?"am":"pm"}`})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(e=>{let t=0,r=e,n="";for(t=0;t<32;t++,n+=String(r>>>31),r<<=1);return n})(e).split("").reverse().join("").substring(0,t))}])},function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={LoggerLevel:"error",MessageBundle:"Messages",AsynchronousQueueTimeout:2e3,ApplicationInitProcessTimeout:1e3}}]))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r}])});
//# sourceMappingURL=presentation-dialogs.js.map

/***/ }),

/***/ "./node_modules/presentation-dom/dist/presentation-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/presentation-dom/dist/presentation-dom.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));const o=r.default.query;e.exports=r.default,e.exports.$=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e);class o{constructor(){}static getViewportHeight(){return window.innerHeight}static getViewportWidth(){return window.innerWidth}static setValue(e,t,n){if(e){t=t||"";const r=this.selector(e);return(!r||1!==r.nodeType||"select"!==r.nodeName&&"SELECT"!==r.nodeName)&&(!r||1!==r.nodeType||"input"!==r.nodeName&&"INPUT"!==r.nodeName&&"textarea"!==r.nodeName&&"TEXTAREA"!==r.nodeName?r&&1===r.nodeType&&(n?r.innerText=t:r.innerHTML=t):r.value=t),r}return null}static getValue(e){if(e){const t=this.selector(e);if(t&&1===t.nodeType&&("input"===t.nodeName||"INPUT"===t.nodeName||"textarea"===t.nodeName||"TEXTAREA"===t.nodeName||"select"===t.nodeName||"SELECT"===t.nodeName))return t.value;if(t&&1===t.nodeType)return t.innerHTML}return null}static selector(e){return e?r(e)?document.querySelector(e):e:null}static selectors(e){return e?r(e)?document.querySelectorAll(e):e:null}static query(e,t){if(e){let n=document;t&&(n=o.selector(t));const s=r(e)?n.querySelectorAll(e):e;return 1===s.length?s[0]:s}return null}static hide(e){const t=this.selector(e);return t&&(t.style.display="none",t.style.visibility="hidden"),t}static show(e,t){const n=this.selector(e);return n&&(n.style.display=t||"block",n.style.visibility="visible"),n}static setClass(e,t){const n=this.selector(e);return n&&n.setAttribute("class",t),n}static addClass(e,t){const n=this.selector(e);return n&&n.classList.add(t),n}static removeClass(e,t){const n=this.selector(e);return n&&n.classList.remove(t),n}static replaceClass(e,t,n){const r=this.selector(e);return r&&r.classList.replace(t,n),r}static containsClass(e,t){const n=this.selector(e);return!(!n||!n.classList)&&n.classList.contains(t)}static toggleClass(e,t){const n=this.selector(e);return n&&n.classList.toggle(t),n}static empty(e){return this.setValue(e,"",!1),e}static injectTemplate(e,t){const n=this.selector(e),r=this.selector(t);if(n&&r){const e=document.importNode(n.content,!0);r.appendChild(e)}return r}}t.default=o}])});
//# sourceMappingURL=presentation-dom.js.map

/***/ }),

/***/ "./node_modules/presentation-form/dist/presentation-form.js":
/*!******************************************************************!*\
  !*** ./node_modules/presentation-form/dist/presentation-form.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"),__webpack_require__(/*! presentation-decorator */ "./node_modules/presentation-decorator/dist/presentation-decorator.js"),__webpack_require__(/*! presentation-request */ "./node_modules/presentation-request/dist/presentation-request.js"),__webpack_require__(/*! presentation-models */ "./node_modules/presentation-models/dist/presentation-models.js"),__webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js"),__webpack_require__(/*! presentation-widget */ "./node_modules/presentation-widget/dist/presentation-widget.js")):undefined}(this,function(e,t,i,s,r,n){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=1)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(8);t.default=((e,t,i,r,n,o,l,d,a,u,h)=>{const c=document.createElement("form"),p=document.createElement("fieldset"),m=Object.keys(i),f=l?l.length:m.length;let b,y,g,x,_;if(h){const e=h.split(" ");if(e)for(y=0;y<e.length;y++)c.classList.add(e[y])}if(c.appendChild(p),e){const i=document.createElement("legend");if(b=document.createTextNode(e),t){const e=document.createAttribute("title");e.value=t,i.setAttributeNode(e)}i.appendChild(b),p.appendChild(i)}for(l||(l=m),y=0;y<f;y++){let e=!0;l&&(e=-1!==m.indexOf(l[y])),e&&(_=-1!==n.indexOf(l[y]),(x=document.createElement("label")).setAttribute("for",l[y]),b=document.createTextNode(i[l[y]].description),x.appendChild(b),g=s.Widget.Input(i[l[y]],l[y],r[l[y]],l[y],_,o),d?(g&&x.appendChild(g),p.appendChild(x)):(p.appendChild(x),g&&p.appendChild(g)))}if(u){const e=document.createElement("button");e.setAttribute("type","reset"),e.setAttribute(`data-${o}`,"reset"),e.setAttribute("data-click","reset");const t=document.createTextNode(u);e.appendChild(t),c.appendChild(e)}if(a){const e=document.createElement("button");e.setAttribute("type","submit"),e.setAttribute(`data-${o}`,"submit"),e.setAttribute("data-click","submit");const t=document.createTextNode(a);e.appendChild(t),c.appendChild(e)}return c})},function(e,t,i){"use strict";var s=n(i(2)),r=n(i(0));function n(e){return e&&e.__esModule?e:{default:e}}e.exports.AutomaticForm=s.default,e.exports.formCompile=r.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),r=i(4),n=i(5),o=i(6),l=u(i(7)),d=u(i(0)),a=u(i(9));function u(e){return e&&e.__esModule?e:{default:e}}t.default=class extends r.DecoratorView{constructor(e){if(e||(e={}),super(e),this.crossOrigin=!1,this._fields={},this.uri=null,this.isInitalized=!1,this.title=null,this.description="",this._required=[],this.display=null,this.nestedInput=!1,this.submitButton=!1,this.resetButton=!1,this.model&&e&&e.clearForm?this.model.clear():this.model||(this.model=new o.Model),e.submitButton&&(this.submitButton=e.submitButton),e.resetButton&&(this.resetButton=e.resetButton),e.nestedInput&&(this.nestedInput=e.nestedInput),e.crossOrigin&&(this.crossOrigin=e.crossOrigin),e.schema)if((0,s.isObject)(e.schema))this.schema=e.schema;else{let t=null;try{(t=JSON.parse(e.schema))&&(0,s.isObject)(t)&&(this.schema=t)}catch(e){}this.schema||(this._retrieveSchema(e.schema),this.isInitalized=!1)}e.el&&(this.el=e.el),e.uri&&(this.uri=e.uri),e.style?this.style=e.style:this.style="material",e.data&&(0,s.isObject)(e.data)&&this.model.set(e.data),e.title&&(this.title=e.title),e.description&&(this.description=e.description),e.display&&(this.display=e.display),this.model&&this.uri&&(this.model.url=this.uri),this.model&&(this.model.crossOrigin=this.crossOrigin),this.schema?(this.name&&""!==this.name||!this.schema.title||(this.name=this.schema.title),this.description&&""!==this.description||!this.schema.description||(this.description=this.schema.description),this.schema.required?this._required=this.schema.required:this._required=[],this.isInitalized||(this._fields=this.schema.properties,this.model.schema=this.schema,this.isInitalized=!0)):this.isInitalized=!1,console.debug("styles ",this.style)}_retrieveSchema(e){let t=this,i=null;(0,n.request)({url:e,contentType:"application/json",dataType:"json",success:(e,s)=>{let r={schema:i="string"==typeof e?JSON.parse(e):e};t.initialize(r)},error:(e,t)=>{}})}setURI(e){this.uri=e}setSchema(e){this.schema=e,this._fields=e.properties,this.model.reset(),this.model.schema=e,this.uri&&(model.url=this.uri)}showProgressBar(e){if(this.el){const t=l.default.selector(this.el);if(t){const i=t.querySelector("progress");i&&(i.style.display=e?"block":"none",i.style.visibility=e?"visible":"hidden")}}}showMessage(e){if(this.el){const t=l.default.selector(this.el);if(t){const i=t.querySelector("p[class=message]");i&&(i.innerHTML=e)}}}validate(){let e=this.model?this.model.validate():null;return!this.model.isValid()&&e&&e.messages?this.showMessage((0,a.default)(e.messages)):this.showMessage(""),e}isValid(){return!this.model||this.model.isValid()}render(){if(!this.isInitalized)return this;if(this.template=null,this.showProgressBar(!0),!this.el)return this.showProgressBar(!1),this;{const e=l.default.selector(this.el);if(e){this.theme&&l.default.addClass(e,this.theme);let t=document.createElement("progress"),i=document.createTextNode("Please wait.");t.appendChild(i),e.appendChild(t);const s=(0,d.default)(this.title?this.title:null,this.description,this._fields,this.model.toJSON(),this._required,this.name,this.display,this.nestedInput,this.submitButton,this.resetButton,this.style);e.appendChild(s),this._formEl=l.default.query("form",this.el),(t=document.createElement("p")).classList.add("message"),e.appendChild(t)}}return this.delegateEvents(),this.syncAllBoundElements(),this.showProgressBar(!1),this}reset(){this._formEl&&(this._formEl.reset(),this.model.reset())}populate(e){this.model.set(e)}remove(){return this.undelegateEvents(),this.off(),this.stopListening(),l.default.empty(this.el),this}}},function(t,i){t.exports=e},function(e,i){e.exports=t},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=>{let t="";if(e&&e.length>0){t+='<ul class="errors">';const i=e.length;let s=0,r=0;for(s=0;s<i;s++){const i=e[s].errors.length;for(r=0;r<i;r++)t=t+"<li>"+e[s].errors[r]+"</li>"}t+="</ul>"}return t})}])});
//# sourceMappingURL=presentation-form.js.map

/***/ }),

/***/ "./node_modules/presentation-logger/dist/presentation-logger.js":
/*!**********************************************************************!*\
  !*** ./node_modules/presentation-logger/dist/presentation-logger.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r(__webpack_require__(/*! next-core-logger */ "./node_modules/next-core-logger/dist/next-core-logger.js")):undefined}(this,function(e){return function(e){var r={};function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=r,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)o.d(t,s,function(r){return e[r]}.bind(null,s));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="/dist/",o(o.s=1)}([function(r,o){r.exports=e},function(e,r,o){"use strict";var t=n(o(2)),s=n(o(3));function n(e){return e&&e.__esModule?e:{default:e}}e.exports.ColorConsoleLogger=t.default,e.exports.RestLogger=s.default},function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=o(0);r.default=class extends t.AbstractLogger{constructor(e){super(e)}_getLogTime(){return""}_logMe(e,r){r===t.Level.INFO?console.info(`%c${e}`,"color: blue;"):r===t.Level.ERROR?console.error(`%c${e}`,"color: red;"):r===t.Level.DEBUG?console.log(`%c${e}`,"color: gray;"):r===t.Level.WARN?console.warn(`%c${e}`,"color: brown;"):console.log(`%c${e}`,"color: black;")}}},function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=o(0),s=o(4);r.default=class extends t.AbstractLogger{constructor(e,r){super(e),this._uri=r}set uri(e){this._uri=e}get uri(){return this._uri}_logMe(e){(0,s.request)({url:this._uri,method:"POST",contentType:"text/plain",dataType:"text",async:!0,data:e,success:(e,r)=>{},failure:e=>{this.failure(e)}})}}},function(e,r,o){"use strict";!function(r,o){e.exports=o()}(0,function(){return function(e){var r={};function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=r,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)o.d(t,s,function(r){return e[r]}.bind(null,s));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="/dist/",o(o.s="./src/index.js")}({"./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
        !*** ./node_modules/babel-runtime/core-js/promise.js ***!
        \*******************************************************/
/*! no static exports found */function(e,r,o){e.exports={default:o(/*! core-js/library/fn/promise */"./node_modules/core-js/library/fn/promise.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
        !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
        \****************************************************************/
/*! no static exports found */function(e,r,o){r.__esModule=!0;var t=function(e){return e&&e.__esModule?e:{default:e}}(o(/*! ../core-js/promise */"./node_modules/babel-runtime/core-js/promise.js"));r.default=function(e){return function(){var r=e.apply(this,arguments);return new t.default(function(e,o){return function s(n,i){try{var u=r[n](i),l=u.value}catch(e){return void o(e)}if(!u.done)return t.default.resolve(l).then(function(e){s("next",e)},function(e){s("throw",e)});e(l)}("next")})}}},"./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
        !*** ./node_modules/babel-runtime/regenerator/index.js ***!
        \*********************************************************/
/*! no static exports found */function(e,r,o){e.exports=o(/*! regenerator-runtime */"./node_modules/regenerator-runtime/runtime-module.js")},"./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
        !*** ./node_modules/core-js/library/fn/promise.js ***!
        \****************************************************/
/*! no static exports found */function(e,r,o){o(/*! ../modules/es6.object.to-string */"./node_modules/core-js/library/modules/es6.object.to-string.js"),o(/*! ../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js"),o(/*! ../modules/web.dom.iterable */"./node_modules/core-js/library/modules/web.dom.iterable.js"),o(/*! ../modules/es6.promise */"./node_modules/core-js/library/modules/es6.promise.js"),o(/*! ../modules/es7.promise.finally */"./node_modules/core-js/library/modules/es7.promise.finally.js"),o(/*! ../modules/es7.promise.try */"./node_modules/core-js/library/modules/es7.promise.try.js"),e.exports=o(/*! ../modules/_core */"./node_modules/core-js/library/modules/_core.js").Promise},"./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_a-function.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
        \*********************************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(){}},"./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
        \**************************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e,r,o,t){if(!(e instanceof r)||void 0!==t&&t in e)throw TypeError(o+": incorrect invocation!");return e}},"./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_an-object.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
        \*****************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),s=o(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),n=o(/*! ./_to-absolute-index */"./node_modules/core-js/library/modules/_to-absolute-index.js");e.exports=function(e){return function(r,o,i){var u,l=t(r),c=s(l.length),a=n(i,c);if(e&&o!=o){for(;c>a;)if((u=l[a++])!=u)return!0}else for(;c>a;a++)if((e||a in l)&&l[a]===o)return e||a||0;return!e&&-1}}},"./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_classof.js ***!
        \**********************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js"),s=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag"),n="Arguments"==t(function(){return arguments}());e.exports=function(e){var r,o,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=function(e,r){try{return e[r]}catch(e){}}(r=Object(e),s))?o:n?t(r):"Object"==(i=t(r))&&"function"==typeof r.callee?"Arguments":i}},"./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_cof.js ***!
        \******************************************************/
/*! no static exports found */function(e,r,o){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},"./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_core.js ***!
        \*******************************************************/
/*! no static exports found */function(e,r,o){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)},"./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_ctx.js ***!
        \******************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");e.exports=function(e,r,o){if(t(e),void 0===r)return e;switch(o){case 1:return function(o){return e.call(r,o)};case 2:return function(o,t){return e.call(r,o,t)};case 3:return function(o,t,s){return e.call(r,o,t,s)}}return function(){return e.apply(r,arguments)}}},"./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_defined.js ***!
        \**********************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
        \**************************************************************/
/*! no static exports found */function(e,r,o){e.exports=!o(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),s=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").document,n=t(s)&&t(s.createElement);e.exports=function(e){return n?s.createElement(e):{}}},"./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
        \****************************************************************/
/*! no static exports found */function(e,r,o){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_export.js ***!
        \*********************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),s=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),n=o(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),i=o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),u=o(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),l=function(e,r,o){var c,a,d,m=e&l.F,f=e&l.G,j=e&l.S,_=e&l.P,y=e&l.B,p=e&l.W,b=f?s:s[r]||(s[r]={}),h=b.prototype,v=f?t:j?t[r]:(t[r]||{}).prototype;for(c in f&&(o=r),o)(a=!m&&v&&void 0!==v[c])&&u(b,c)||(d=a?v[c]:o[c],b[c]=f&&"function"!=typeof v[c]?o[c]:y&&a?n(d,t):p&&v[c]==d?function(e){var r=function(r,o,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,o)}return new e(r,o,t)}return e.apply(this,arguments)};return r.prototype=e.prototype,r}(d):_&&"function"==typeof d?n(Function.call,d):d,_&&((b.virtual||(b.virtual={}))[c]=d,e&l.R&&h&&!h[c]&&i(h,c,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},"./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_fails.js ***!
        \********************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_for-of.js ***!
        \*********************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),s=o(/*! ./_iter-call */"./node_modules/core-js/library/modules/_iter-call.js"),n=o(/*! ./_is-array-iter */"./node_modules/core-js/library/modules/_is-array-iter.js"),i=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),u=o(/*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js"),l=o(/*! ./core.get-iterator-method */"./node_modules/core-js/library/modules/core.get-iterator-method.js"),c={},a={},d=e.exports=function(e,r,o,d,m){var f,j,_,y,p=m?function(){return e}:l(e),b=t(o,d,r?2:1),h=0;if("function"!=typeof p)throw TypeError(e+" is not iterable!");if(n(p)){for(f=u(e.length);f>h;h++)if((y=r?b(i(j=e[h])[0],j[1]):b(e[h]))===c||y===a)return y}else for(_=p.call(e);!(j=_.next()).done;)if((y=s(_,b,j.value,r))===c||y===a)return y};d.BREAK=c,d.RETURN=a},"./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_global.js ***!
        \*********************************************************/
/*! no static exports found */function(e,r,o){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},"./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_has.js ***!
        \******************************************************/
/*! no static exports found */function(e,r,o){var t={}.hasOwnProperty;e.exports=function(e,r){return t.call(e,r)}},"./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_hide.js ***!
        \*******************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),s=o(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");e.exports=o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?function(e,r,o){return t.f(e,r,s(1,o))}:function(e,r,o){return e[r]=o,e}},"./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_html.js ***!
        \*******************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").document;e.exports=t&&t.documentElement},"./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
        \*****************************************************************/
/*! no static exports found */function(e,r,o){e.exports=!o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")&&!o(/*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function(){return 7!=Object.defineProperty(o(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_invoke.js ***!
        \*********************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e,r,o){var t=void 0===o;switch(r.length){case 0:return t?e():e.call(o);case 1:return t?e(r[0]):e.call(o,r[0]);case 2:return t?e(r[0],r[1]):e.call(o,r[0],r[1]);case 3:return t?e(r[0],r[1],r[2]):e.call(o,r[0],r[1],r[2]);case 4:return t?e(r[0],r[1],r[2],r[3]):e.call(o,r[0],r[1],r[2],r[3])}return e.apply(o,r)}},"./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iobject.js ***!
        \**********************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==t(e)?e.split(""):Object(e)}},"./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
        \****************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),s=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),n=Array.prototype;e.exports=function(e){return void 0!==e&&(t.Array===e||n[s]===e)}},"./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_is-object.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");e.exports=function(e,r,o,s){try{return s?r(t(o)[0],o[1]):r(o)}catch(r){var n=e.return;throw void 0!==n&&t(n.call(e)),r}}},"./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
        \**************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_object-create */"./node_modules/core-js/library/modules/_object-create.js"),s=o(/*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js"),n=o(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),i={};o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")(i,o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),function(){return this}),e.exports=function(e,r,o){e.prototype=t(i,{next:s(1,o)}),n(e,r+" Iterator")}},"./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
        \**************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_library */"./node_modules/core-js/library/modules/_library.js"),s=o(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),n=o(/*! ./_redefine */"./node_modules/core-js/library/modules/_redefine.js"),i=o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),u=o(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),l=o(/*! ./_iter-create */"./node_modules/core-js/library/modules/_iter-create.js"),c=o(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js"),a=o(/*! ./_object-gpo */"./node_modules/core-js/library/modules/_object-gpo.js"),d=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),m=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,r,o,j,_,y,p){l(o,r,j);var b,h,v,g=function(e){if(!m&&e in O)return O[e];switch(e){case"keys":case"values":return function(){return new o(this,e)}}return function(){return new o(this,e)}},x=r+" Iterator",w="values"==_,T=!1,O=e.prototype,E=O[d]||O["@@iterator"]||_&&O[_],P=E||g(_),L=_?w?g("entries"):P:void 0,S="Array"==r&&O.entries||E;if(S&&(v=a(S.call(new e)))!==Object.prototype&&v.next&&(c(v,x,!0),t||"function"==typeof v[d]||i(v,d,f)),w&&E&&"values"!==E.name&&(T=!0,P=function(){return E.call(this)}),t&&!p||!m&&!T&&O[d]||i(O,d,P),u[r]=P,u[x]=f,_)if(b={values:w?P:g("values"),keys:y?P:g("keys"),entries:L},p)for(h in b)h in O||n(O,h,b[h]);else s(s.P+s.F*(m||T),r,b);return b}},"./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
        \**************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),s=!1;try{var n=[7][t]();n.return=function(){s=!0},Array.from(n,function(){throw 2})}catch(e){}e.exports=function(e,r){if(!r&&!s)return!1;var o=!1;try{var n=[7],i=n[t]();i.next=function(){return{done:o=!0}},n[t]=function(){return i},e(n)}catch(e){}return o}},"./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e,r){return{value:r,done:!!e}}},"./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iterators.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){e.exports={}},"./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_library.js ***!
        \**********************************************************/
/*! no static exports found */function(e,r,o){e.exports=!0},"./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_microtask.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),s=o(/*! ./_task */"./node_modules/core-js/library/modules/_task.js").set,n=t.MutationObserver||t.WebKitMutationObserver,i=t.process,u=t.Promise,l="process"==o(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js")(i);e.exports=function(){var e,r,o,c=function(){var t,s;for(l&&(t=i.domain)&&t.exit();e;){s=e.fn,e=e.next;try{s()}catch(t){throw e?o():r=void 0,t}}r=void 0,t&&t.enter()};if(l)o=function(){i.nextTick(c)};else if(!n||t.navigator&&t.navigator.standalone)if(u&&u.resolve){var a=u.resolve(void 0);o=function(){a.then(c)}}else o=function(){s.call(t,c)};else{var d=!0,m=document.createTextNode("");new n(c).observe(m,{characterData:!0}),o=function(){m.data=d=!d}}return function(t){var s={fn:t,next:void 0};r&&(r.next=s),e||(e=s,o()),r=s}}},"./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
        \*************************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");e.exports.f=function(e){return new function(e){var r,o;this.promise=new e(function(e,t){if(void 0!==r||void 0!==o)throw TypeError("Bad Promise constructor");r=e,o=t}),this.resolve=t(r),this.reject=t(o)}(e)}},"./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-create.js ***!
        \****************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),s=o(/*! ./_object-dps */"./node_modules/core-js/library/modules/_object-dps.js"),n=o(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js"),i=o(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),u=function(){},l=function(){var e,r=o(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")("iframe"),t=n.length;for(r.style.display="none",o(/*! ./_html */"./node_modules/core-js/library/modules/_html.js").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;t--;)delete l.prototype[n[t]];return l()};e.exports=Object.create||function(e,r){var o;return null!==e?(u.prototype=t(e),o=new u,u.prototype=null,o[i]=e):o=l(),void 0===r?o:s(o,r)}},"./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),s=o(/*! ./_ie8-dom-define */"./node_modules/core-js/library/modules/_ie8-dom-define.js"),n=o(/*! ./_to-primitive */"./node_modules/core-js/library/modules/_to-primitive.js"),i=Object.defineProperty;r.f=o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperty:function(e,r,o){if(t(e),r=n(r,!0),t(o),s)try{return i(e,r,o)}catch(e){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(e[r]=o.value),e}},"./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),s=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),n=o(/*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js");e.exports=o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js")?Object.defineProperties:function(e,r){s(e);for(var o,i=n(r),u=i.length,l=0;u>l;)t.f(e,o=i[l++],r[o]);return e}},"./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),s=o(/*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js"),n=o(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO"),i=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=s(e),t(e,n)?e[n]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?i:null}},"./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
        \***********************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),s=o(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js"),n=o(/*! ./_array-includes */"./node_modules/core-js/library/modules/_array-includes.js")(!1),i=o(/*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");e.exports=function(e,r){var o,u=s(e),l=0,c=[];for(o in u)o!=i&&t(u,o)&&c.push(o);for(;r.length>l;)t(u,o=r[l++])&&(~n(c,o)||c.push(o));return c}},"./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
        \**************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_object-keys-internal */"./node_modules/core-js/library/modules/_object-keys-internal.js"),s=o(/*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js");e.exports=Object.keys||function(e){return t(e,s)}},"./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_perform.js ***!
        \**********************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},"./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
        \******************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),s=o(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),n=o(/*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js");e.exports=function(e,r){if(t(e),s(r)&&r.constructor===e)return r;var o=n.f(e);return(0,o.resolve)(r),o.promise}},"./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
        \****************************************************************/
/*! no static exports found */function(e,r,o){e.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}}},"./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
        \***************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js");e.exports=function(e,r,o){for(var s in r)o&&e[s]?e[s]=r[s]:t(e,s,r[s]);return e}},"./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_redefine.js ***!
        \***********************************************************/
/*! no static exports found */function(e,r,o){e.exports=o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")},"./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_set-species.js ***!
        \**************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),s=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),n=o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js"),i=o(/*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js"),u=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("species");e.exports=function(e){var r="function"==typeof s[e]?s[e]:t[e];i&&r&&!r[u]&&n.f(r,u,{configurable:!0,get:function(){return this}})}},"./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
        \********************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f,s=o(/*! ./_has */"./node_modules/core-js/library/modules/_has.js"),n=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag");e.exports=function(e,r,o){e&&!s(e=o?e:e.prototype,n)&&t(e,n,{configurable:!0,value:r})}},"./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")("keys"),s=o(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js");e.exports=function(e){return t[e]||(t[e]=s(e))}},"./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_shared.js ***!
        \*********************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),s=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),n=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(e.exports=function(e,r){return n[e]||(n[e]=void 0!==r?r:{})})("versions",[]).push({version:t.version,mode:o(/*! ./_library */"./node_modules/core-js/library/modules/_library.js")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
        \**********************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js"),s=o(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js"),n=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("species");e.exports=function(e,r){var o,i=t(e).constructor;return void 0===i||void 0==(o=t(i)[n])?r:s(o)}},"./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_string-at.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),s=o(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return function(r,o){var n,i,u=String(s(r)),l=t(o),c=u.length;return l<0||l>=c?e?"":void 0:(n=u.charCodeAt(l))<55296||n>56319||l+1===c||(i=u.charCodeAt(l+1))<56320||i>57343?e?u.charAt(l):n:e?u.slice(l,l+2):i-56320+(n-55296<<10)+65536}}},"./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_task.js ***!
        \*******************************************************/
/*! no static exports found */function(e,r,o){var t,s,n,i=o(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),u=o(/*! ./_invoke */"./node_modules/core-js/library/modules/_invoke.js"),l=o(/*! ./_html */"./node_modules/core-js/library/modules/_html.js"),c=o(/*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js"),a=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),d=a.process,m=a.setImmediate,f=a.clearImmediate,j=a.MessageChannel,_=a.Dispatch,y=0,p={},b=function(){var e=+this;if(p.hasOwnProperty(e)){var r=p[e];delete p[e],r()}},h=function(e){b.call(e.data)};m&&f||(m=function(e){for(var r=[],o=1;arguments.length>o;)r.push(arguments[o++]);return p[++y]=function(){u("function"==typeof e?e:Function(e),r)},t(y),y},f=function(e){delete p[e]},"process"==o(/*! ./_cof */"./node_modules/core-js/library/modules/_cof.js")(d)?t=function(e){d.nextTick(i(b,e,1))}:_&&_.now?t=function(e){_.now(i(b,e,1))}:j?(n=(s=new j).port2,s.port1.onmessage=h,t=i(n.postMessage,n,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(t=function(e){a.postMessage(e+"","*")},a.addEventListener("message",h,!1)):t="onreadystatechange"in c("script")?function(e){l.appendChild(c("script")).onreadystatechange=function(){l.removeChild(this),b.call(e)}}:function(e){setTimeout(i(b,e,1),0)}),e.exports={set:m,clear:f}},"./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
        \********************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),s=Math.max,n=Math.min;e.exports=function(e,r){return(e=t(e))<0?s(e+r,0):n(e,r)}},"./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){var t=Math.ceil,s=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?s:t)(e)}},"./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js"),s=o(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return t(s(e))}},"./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-length.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js"),s=Math.min;e.exports=function(e){return e>0?s(t(e),9007199254740991):0}},"./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-object.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");e.exports=function(e){return Object(t(e))}},"./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
        \***************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");e.exports=function(e,r){if(!t(e))return e;var o,s;if(r&&"function"==typeof(o=e.toString)&&!t(s=o.call(e)))return s;if("function"==typeof(o=e.valueOf)&&!t(s=o.call(e)))return s;if(!r&&"function"==typeof(o=e.toString)&&!t(s=o.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_uid.js ***!
        \******************************************************/
/*! no static exports found */function(e,r,o){var t=0,s=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+s).toString(36))}},"./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").navigator;e.exports=t&&t.userAgent||""},"./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_wks.js ***!
        \******************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")("wks"),s=o(/*! ./_uid */"./node_modules/core-js/library/modules/_uid.js"),n=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js").Symbol,i="function"==typeof n;(e.exports=function(e){return t[e]||(t[e]=i&&n[e]||(i?n:s)("Symbol."+e))}).store=t},"./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
        !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
        \**************************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_classof */"./node_modules/core-js/library/modules/_classof.js"),s=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("iterator"),n=o(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");e.exports=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js").getIteratorMethod=function(e){if(void 0!=e)return e[s]||e["@@iterator"]||n[t(e)]}},"./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
        \********************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_add-to-unscopables */"./node_modules/core-js/library/modules/_add-to-unscopables.js"),s=o(/*! ./_iter-step */"./node_modules/core-js/library/modules/_iter-step.js"),n=o(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),i=o(/*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js");e.exports=o(/*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js")(Array,"Array",function(e,r){this._t=i(e),this._i=0,this._k=r},function(){var e=this._t,r=this._k,o=this._i++;return!e||o>=e.length?(this._t=void 0,s(1)):s(0,"keys"==r?o:"values"==r?e[o]:[o,e[o]])},"values"),n.Arguments=n.Array,t("keys"),t("values"),t("entries")},"./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
        \**********************************************************************/
/*! no static exports found */function(e,r,o){},"./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
        \*************************************************************/
/*! no static exports found */function(e,r,o){var t,s,n,i,u=o(/*! ./_library */"./node_modules/core-js/library/modules/_library.js"),l=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),c=o(/*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js"),a=o(/*! ./_classof */"./node_modules/core-js/library/modules/_classof.js"),d=o(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),m=o(/*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js"),f=o(/*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js"),j=o(/*! ./_an-instance */"./node_modules/core-js/library/modules/_an-instance.js"),_=o(/*! ./_for-of */"./node_modules/core-js/library/modules/_for-of.js"),y=o(/*! ./_species-constructor */"./node_modules/core-js/library/modules/_species-constructor.js"),p=o(/*! ./_task */"./node_modules/core-js/library/modules/_task.js").set,b=o(/*! ./_microtask */"./node_modules/core-js/library/modules/_microtask.js")(),h=o(/*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js"),v=o(/*! ./_perform */"./node_modules/core-js/library/modules/_perform.js"),g=o(/*! ./_user-agent */"./node_modules/core-js/library/modules/_user-agent.js"),x=o(/*! ./_promise-resolve */"./node_modules/core-js/library/modules/_promise-resolve.js"),w=l.TypeError,T=l.process,O=T&&T.versions,E=O&&O.v8||"",P=l.Promise,L="process"==a(T),S=function(){},A=s=h.f,k=!!function(){try{var e=P.resolve(1),r=(e.constructor={})[o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("species")]=function(e){e(S,S)};return(L||"function"==typeof PromiseRejectionEvent)&&e.then(S)instanceof r&&0!==E.indexOf("6.6")&&-1===g.indexOf("Chrome/66")}catch(e){}}(),M=function(e){var r;return!(!m(e)||"function"!=typeof(r=e.then))&&r},C=function(e,r){if(!e._n){e._n=!0;var o=e._c;b(function(){for(var t=e._v,s=1==e._s,n=0,i=function(r){var o,n,i,u=s?r.ok:r.fail,l=r.resolve,c=r.reject,a=r.domain;try{u?(s||(2==e._h&&G(e),e._h=1),!0===u?o=t:(a&&a.enter(),o=u(t),a&&(a.exit(),i=!0)),o===r.promise?c(w("Promise-chain cycle")):(n=M(o))?n.call(o,l,c):l(o)):c(t)}catch(e){a&&!i&&a.exit(),c(e)}};o.length>n;)i(o[n++]);e._c=[],e._n=!1,r&&!e._h&&R(e)})}},R=function(e){p.call(l,function(){var r,o,t,s=e._v,n=N(e);if(n&&(r=v(function(){L?T.emit("unhandledRejection",s,e):(o=l.onunhandledrejection)?o({promise:e,reason:s}):(t=l.console)&&t.error&&t.error("Unhandled promise rejection",s)}),e._h=L||N(e)?2:1),e._a=void 0,n&&r.e)throw r.v})},N=function(e){return 1!==e._h&&0===(e._a||e._c).length},G=function(e){p.call(l,function(){var r;L?T.emit("rejectionHandled",e):(r=l.onrejectionhandled)&&r({promise:e,reason:e._v})})},D=function(e){var r=this;r._d||(r._d=!0,(r=r._w||r)._v=e,r._s=2,r._a||(r._a=r._c.slice()),C(r,!0))},H=function(e){var r,o=this;if(!o._d){o._d=!0,o=o._w||o;try{if(o===e)throw w("Promise can't be resolved itself");(r=M(e))?b(function(){var t={_w:o,_d:!1};try{r.call(e,c(H,t,1),c(D,t,1))}catch(e){D.call(t,e)}}):(o._v=e,o._s=1,C(o,!1))}catch(e){D.call({_w:o,_d:!1},e)}}};k||(P=function(e){j(this,P,"Promise","_h"),f(e),t.call(this);try{e(c(H,this,1),c(D,this,1))}catch(e){D.call(this,e)}},(t=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=o(/*! ./_redefine-all */"./node_modules/core-js/library/modules/_redefine-all.js")(P.prototype,{then:function(e,r){var o=A(y(this,P));return o.ok="function"!=typeof e||e,o.fail="function"==typeof r&&r,o.domain=L?T.domain:void 0,this._c.push(o),this._a&&this._a.push(o),this._s&&C(this,!1),o.promise},catch:function(e){return this.then(void 0,e)}}),n=function(){var e=new t;this.promise=e,this.resolve=c(H,e,1),this.reject=c(D,e,1)},h.f=A=function(e){return e===P||e===i?new n(e):s(e)}),d(d.G+d.W+d.F*!k,{Promise:P}),o(/*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js")(P,"Promise"),o(/*! ./_set-species */"./node_modules/core-js/library/modules/_set-species.js")("Promise"),i=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js").Promise,d(d.S+d.F*!k,"Promise",{reject:function(e){var r=A(this);return(0,r.reject)(e),r.promise}}),d(d.S+d.F*(u||!k),"Promise",{resolve:function(e){return x(u&&this===i?P:this,e)}}),d(d.S+d.F*!(k&&o(/*! ./_iter-detect */"./node_modules/core-js/library/modules/_iter-detect.js")(function(e){P.all(e).catch(S)})),"Promise",{all:function(e){var r=this,o=A(r),t=o.resolve,s=o.reject,n=v(function(){var o=[],n=0,i=1;_(e,!1,function(e){var u=n++,l=!1;o.push(void 0),i++,r.resolve(e).then(function(e){l||(l=!0,o[u]=e,--i||t(o))},s)}),--i||t(o)});return n.e&&s(n.v),o.promise},race:function(e){var r=this,o=A(r),t=o.reject,s=v(function(){_(e,!1,function(e){r.resolve(e).then(o.resolve,t)})});return s.e&&t(s.v),o.promise}})},"./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
        \*********************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_string-at */"./node_modules/core-js/library/modules/_string-at.js")(!0);o(/*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,r=this._t,o=this._i;return o>=r.length?{value:void 0,done:!0}:(e=t(r,o),this._i+=e.length,{value:e,done:!1})})},"./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
        \*********************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),s=o(/*! ./_core */"./node_modules/core-js/library/modules/_core.js"),n=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),i=o(/*! ./_species-constructor */"./node_modules/core-js/library/modules/_species-constructor.js"),u=o(/*! ./_promise-resolve */"./node_modules/core-js/library/modules/_promise-resolve.js");t(t.P+t.R,"Promise",{finally:function(e){var r=i(this,s.Promise||n.Promise),o="function"==typeof e;return this.then(o?function(o){return u(r,e()).then(function(){return o})}:e,o?function(o){return u(r,e()).then(function(){throw o})}:e)}})},"./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
        \*****************************************************************/
/*! no static exports found */function(e,r,o){var t=o(/*! ./_export */"./node_modules/core-js/library/modules/_export.js"),s=o(/*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js"),n=o(/*! ./_perform */"./node_modules/core-js/library/modules/_perform.js");t(t.S,"Promise",{try:function(e){var r=s.f(this),o=n(e);return(o.e?r.reject:r.resolve)(o.v),r.promise}})},"./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
        !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
        \******************************************************************/
/*! no static exports found */function(e,r,o){o(/*! ./es6.array.iterator */"./node_modules/core-js/library/modules/es6.array.iterator.js");for(var t=o(/*! ./_global */"./node_modules/core-js/library/modules/_global.js"),s=o(/*! ./_hide */"./node_modules/core-js/library/modules/_hide.js"),n=o(/*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js"),i=o(/*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<u.length;l++){var c=u[l],a=t[c],d=a&&a.prototype;d&&!d[i]&&s(d,i,c),n[c]=n.Array}},"./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
        !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
        \************************************************************/
/*! no static exports found */function(e,r,o){var t=function(){return this}()||Function("return this")(),s=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,n=s&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=o(/*! ./runtime */"./node_modules/regenerator-runtime/runtime.js"),s)t.regeneratorRuntime=n;else try{delete t.regeneratorRuntime}catch(e){t.regeneratorRuntime=void 0}},"./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
        !*** ./node_modules/regenerator-runtime/runtime.js ***!
        \*****************************************************/
/*! no static exports found */function(e,r,o){!function(r){var o,t=Object.prototype,s=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",u=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag",c="object"==typeof e,a=r.regeneratorRuntime;if(a)c&&(e.exports=a);else{(a=r.regeneratorRuntime=c?e.exports:{}).wrap=v;var d="suspendedStart",m="suspendedYield",f="executing",j="completed",_={},y={};y[i]=function(){return this};var p=Object.getPrototypeOf,b=p&&p(p(k([])));b&&b!==t&&s.call(b,i)&&(y=b);var h=T.prototype=x.prototype=Object.create(y);w.prototype=h.constructor=T,T.constructor=w,T[l]=w.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,T):(e.__proto__=T,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(h),e},a.awrap=function(e){return{__await:e}},O(E.prototype),E.prototype[u]=function(){return this},a.AsyncIterator=E,a.async=function(e,r,o,t){var s=new E(v(e,r,o,t));return a.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},O(h),h[l]="Generator",h[i]=function(){return this},h.toString=function(){return"[object Generator]"},a.keys=function(e){var r=[];for(var o in e)r.push(o);return r.reverse(),function o(){for(;r.length;){var t=r.pop();if(t in e)return o.value=t,o.done=!1,o}return o.done=!0,o}},a.values=k,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&s.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=o)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function t(t,s){return u.type="throw",u.arg=e,r.next=t,s&&(r.method="next",r.arg=o),!!s}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],u=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var l=s.call(i,"catchLoc"),c=s.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(e,r){for(var o=this.tryEntries.length-1;o>=0;--o){var t=this.tryEntries[o];if(t.tryLoc<=this.prev&&s.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var n=t;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=r&&r<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=e,i.arg=r,n?(this.method="next",this.next=n.finallyLoc,_):this.complete(i)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),_},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),S(o),_}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc===e){var t=o.completion;if("throw"===t.type){var s=t.arg;S(o)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:k(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=o),_}}}function v(e,r,o,t){var s=r&&r.prototype instanceof x?r:x,n=Object.create(s.prototype),i=new A(t||[]);return n._invoke=function(e,r,o){var t=d;return function(s,n){if(t===f)throw new Error("Generator is already running");if(t===j){if("throw"===s)throw n;return M()}for(o.method=s,o.arg=n;;){var i=o.delegate;if(i){var u=P(i,o);if(u){if(u===_)continue;return u}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(t===d)throw t=j,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);t=f;var l=g(e,r,o);if("normal"===l.type){if(t=o.done?j:m,l.arg===_)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(t=j,o.method="throw",o.arg=l.arg)}}}(e,o,i),n}function g(e,r,o){try{return{type:"normal",arg:e.call(r,o)}}catch(e){return{type:"throw",arg:e}}}function x(){}function w(){}function T(){}function O(e){["next","throw","return"].forEach(function(r){e[r]=function(e){return this._invoke(r,e)}})}function E(e){var r;this._invoke=function(o,t){function n(){return new Promise(function(r,n){!function r(o,t,n,i){var u=g(e[o],e,t);if("throw"!==u.type){var l=u.arg,c=l.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(e){r("next",e,n,i)},function(e){r("throw",e,n,i)}):Promise.resolve(c).then(function(e){l.value=e,n(l)},i)}i(u.arg)}(o,t,r,n)})}return r=r?r.then(n,n):n()}}function P(e,r){var t=e.iterator[r.method];if(t===o){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=o,P(e,r),"throw"===r.method))return _;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var s=g(t,e.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,_;var n=s.arg;return n?n.done?(r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=o),r.delegate=null,_):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function L(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function S(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function k(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function r(){for(;++t<e.length;)if(s.call(e,t))return r.value=e[t],r.done=!1,r;return r.value=o,r.done=!0,r};return n.next=n}}return{next:M}}function M(){return{value:o,done:!0}}}(function(){return this}()||Function("return this")())},"./src/configuration.js":
/*!******************************!*\
        !*** ./src/configuration.js ***!
        \******************************/
/*! no static exports found */function(e,r,o){Object.defineProperty(r,"__esModule",{value:!0});r.default={uri:"localhost",url:"localhost",contentType:"text/plain",dataType:"text",method:"GET",cache:!0,timeout:0,crossDomain:!1,xhrFields:{},withCredentials:!1,user:null,password:null,allowOrigins:"",allowMethods:null,headers:{},success:null,error:null,complete:null,beforeSend:null,mock:!1}},"./src/dataType.js":
/*!*************************!*\
        !*** ./src/dataType.js ***!
        \*************************/
/*! no static exports found */function(e,r,o){Object.defineProperty(r,"__esModule",{value:!0});r.default={TEXT:"text",JSON:"json"}},"./src/headers.js":
/*!************************!*\
        !*** ./src/headers.js ***!
        \************************/
/*! no static exports found */function(e,r,o){Object.defineProperty(r,"__esModule",{value:!0});r.default={TYPE:"Content-Type",TEXT:"text/plain",APPLICATION:"application/json",ACCEPT:"Accept",CACHE:"Cache-Control",NO_CACHE:"no-cache",ALLOW_ORIGINS:"Access-Control-Allow-Origin",ALLOW_METHODS:"Access-Control-Allow-Methods",AUTH:"Authorization"}},"./src/index.js":
/*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
/*! no static exports found */function(e,r,o){var t=c(o(/*! ./configuration.js */"./src/configuration.js")),s=c(o(/*! ./dataType.js */"./src/dataType.js")),n=c(o(/*! ./headers.js */"./src/headers.js")),i=c(o(/*! ./methodMap.js */"./src/methodMap.js")),u=c(o(/*! ./request.js */"./src/request.js")),l=c(o(/*! ./sync.js */"./src/sync.js"));function c(e){return e&&e.__esModule?e:{default:e}}e.exports.Configuration=t.default,e.exports.DATA_TYPE=s.default,e.exports.HEADERS=n.default,e.exports.METHOD_MAP=i.default,e.exports.request=u.default,e.exports.sync=l.default},"./src/methodMap.js":
/*!**************************!*\
        !*** ./src/methodMap.js ***!
        \**************************/
/*! no static exports found */function(e,r,o){Object.defineProperty(r,"__esModule",{value:!0});r.default={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET",CREATE:"POST",UPDATE:"PUT",PATCH:"PATCH",DELETE:"DELETE",READ:"GET"}},"./src/request.js":
/*!************************!*\
        !*** ./src/request.js ***!
        \************************/
/*! no static exports found */function(e,r,o){Object.defineProperty(r,"__esModule",{value:!0});var t=n(o(/*! ./headers.js */"./src/headers.js")),s=n(o(/*! ./dataType.js */"./src/dataType.js"));function n(e){return e&&e.__esModule?e:{default:e}}r.default=(e=>{let r=null;if(e&&e.uri){e.type,!e.method&&e.type&&(e.method=e.type);let o=e.method?e.method:"GET",n=!e.cache||e.cache;if(r=e.mock?new function(){this.responseType=s.default.TEXT,this.responseText="",this.async=!0,this.status=200,this.header={},this.timeout=70,this.open=((e,r,o,t,s)=>{this.uri=r,this.async=o,this.user=t,this.method=e}),this.send=(()=>{this.onload()}),this.setRequestHeader=((e,r)=>{this.header.header=r}),this.done=(()=>{}),this.fail=(()=>{}),this.always=(()=>{}),this.then=(()=>{}),this.options={}}:new XMLHttpRequest,e.timeout&&(r.timeout=e.timeout),e.crossDomain&&e.xhrFields&&e.xhrFields.withCredentials&&(r.withCredentials=e.xhrFields.withCredentials),e.dataType&&(r.responseType=e.dataType?e.dataType:s.default.TEXT),r.open(o,encodeURI(e.uri),!0,void 0!==e.user?e.user:"",void 0!==e.password?e.password:""),r.setRequestHeader(t.default.TYPE,e.contentType?e.contentType:t.default.TEXT),e.dataType===s.default.JSON&&r.setRequestHeader(t.default.ACCEPT,t.default.APPLICATION),n||r.setRequestHeader(t.default.CACHE,t.default.NO_CACHE),r.withCredentials){let o="*",s="GET";e.allowOrigins&&(o=e.allowOrigins),e.allowMethods&&(s=e.allowMethods),r.setRequestHeader(t.default.ALLOW_ORIGINS,o),r.setRequestHeader(t.default.ALLOW_METHODS,s)}if(r.withCredentials&&e.user&&e.password&&r.setRequestHeader(t.default.AUTH,"Basic "+window.btoa(e.user+":"+e.password)),e.headers){let o=0,t=Object.keys(e.headers),s=t.length;for(o=0;o<s;o++)r.setRequestHeader(t[o],e.headers[t[o]])}r.onload=(()=>{try{r.status>199&&r.status<399?e.success&&(""===r.responseType||r.responseType===s.default.TEXT?r.responseText?e.success(r.responseText,r.status,r):(console.warn("AUGMENTED: Ajax ("+r.responseType+" responseType) did not return anything."),e.success("",r.status,r)):r.responseType===s.default.JSON?r.response?e.success(r.response,r.status,r):r.responseText?e.success(JSON.parse(r.responseText),r.status,r):(console.warn("AUGMENTED: Ajax ("+r.responseType+" responseType) did not return anything."),e.success("",r.status,r)):r.responseText?e.success(r.responseText,r.status,r):r.response?e.success(r.response,r.status,r):(console.warn("AUGMENTED: Ajax ("+r.responseType+" responseType) did not return anything."),e.success("",r.status,r))):r.status>399&&r.status<600&&(e.failure?e.failure(r,r.status,r.statusText):e.error&&e.error(r,r.status,r.statusText))}catch(o){return console.error("AUGMENTED: Ajax ("+o+")"),e&&e.error&&e.error(r,r.status,r.statusText),r}return e.complete&&e.complete(r,r.status),r}),e.beforeSend&&e.beforeSend(r),r.send(e.data?e.data:"")}return r})},"./src/sync.js":
/*!*********************!*\
        !*** ./src/sync.js ***!
        \*********************/
/*! no static exports found */function(e,r,o){Object.defineProperty(r,"__esModule",{value:!0});var t=l(o(/*! babel-runtime/regenerator */"./node_modules/babel-runtime/regenerator/index.js")),s=l(o(/*! babel-runtime/helpers/asyncToGenerator */"./node_modules/babel-runtime/helpers/asyncToGenerator.js")),n=l(o(/*! ./methodMap.js */"./src/methodMap.js")),i=(l(o(/*! ./request.js */"./src/request.js")),l(o(/*! ./dataType.js */"./src/dataType.js"))),u=l(o(/*! ./headers.js */"./src/headers.js"));function l(e){return e&&e.__esModule?e:{default:e}}const c=e=>"[object Function]"==Object.prototype.toString.call(e),a=(()=>{var e=(0,s.default)(t.default.mark(function e(r,o,s){var l,a,d,m,f;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=3;break}throw console.error("No model to sync!"),new Error("No model to sync!");case 3:if(l=null,s||(s={}),a=r?n.default[r]:n.default.READ,d={type:a,dataType:i.default.JSON,success:s.success,error:s.error},s.uri){e.next=13;break}if(!o||!o.uri){e.next=12;break}c(o.uri)?s.uri=o.uri():s.uri=o.uri,e.next=13;break;case 12:throw new Error('A "uri" property or model with "uri" must be specified in the collection or model class!');case 13:return null!=s.data||!o||r!==n.default.CREATE&&r!==n.default.UPDATE&&r!==n.default.PATCH||(d.contentType=u.default.APPLICATION,d.data=JSON.stringify(s.attrs||o.toJSON(s))),d.type!==n.default.READ&&(d.data=null),m=d.data?JSON.stringify(l):null,e.next=18,fetch(s.uri,{method:d.type,headers:{"Content-Type":d.contentType},credentials:"include",body:m}).then(function(e){if(e.ok)return e.json();throw new Error(`${e.status}: ${d.uri} ${e.statusText} `)}).then(function(e){return o.set(e),l=e,e}).then(function(e){return d.success?d.success(e):e}).then(function(e){return o.trigger("request",o,null,s),e}).catch(function(e){return d.error?d.error(e):(console.error(e),e)});case 18:return f=e.sent,e.abrupt("return",f);case 20:case"end":return e.stop()}},e,void 0)}));return function(r,o,t){return e.apply(this,arguments)}})();r.default=a}})})}])});
//# sourceMappingURL=presentation-logger.js.map

/***/ }),

/***/ "./node_modules/presentation-mediator/dist/presentation-mediator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/presentation-mediator/dist/presentation-mediator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"),__webpack_require__(/*! presentation-view */ "./node_modules/presentation-view/dist/presentation-view.js")):undefined}(this,function(e,t){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(4);t.default=class extends s.View{constructor(e){super(e),e&&e.mediator?this._mediator=mediator:this._mediator=null}sendMessage(e,t){return this._mediator?this._mediator.trigger(e,t):console.warn(`sendMessage: No mediator is available for ${this.name?this.name:"-unnamed-"}, talking to myself.`),e}setMediatorMessageQueue(e){return e&&(this._mediator&&this._mediator._dismissMe(this),this._mediator=e),e}removeMediatorMessageQueue(){return this._mediator=null,!0}get mediator(){return this._mediator}set mediator(e){return setMediatorMessageQueue(e)}}},function(e,t,n){"use strict";var s=r(n(2)),i=r(n(0));function r(e){return e&&e.__esModule?e:{default:e}}e.exports.Mediator=s.default,e.exports.Colleague=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,i=n(3),r=n(0),u=(s=r)&&s.__esModule?s:{default:s};const o="augmentedChannel",a="augmentedIdentifier";t.default=class extends u.default{constructor(e){e||(e={}),e.el||(e.noEL=!0),super(e),this._defaultChannel=o,this._defaultIdentifier=a,this._channels={},this._colleagueMap={},this._subscriptions={}}_dismissMe(e){if(e instanceof u.default){const t=this._colleagueMap[e],n=this._channels[t];return this.unsubscribe(t,n.fn,e,n.identifier)}return null}delegateEvents(e){return super.delegateEvents(e),this.subscriptions={},e}undelegateEvents(e){return super.undelegateEvents(e),this.unsetSubscriptions(),e}get subscriptions(){return this._subscriptions}set subscriptions(e){if(e&&(0,i.extend)(this._subscriptions||{},e),!(e=e||this._subscriptions)||0===e.length)return;this.unsetSubscriptions(e);let t=0,n=e.length;for(t=0;t<n;t++){let n=e[t],s=!1;n.$once&&(n=n.$once,s=!0),"string"==typeof n&&(n=this[n]),this.subscribe(n.channel,n,this,s)}return e}unsetSubscriptions(e){if(!(e=e||this._subscriptions)||0===e.length)return;let t=0;const n=e.length;for(t=0;t<n;t++){let n=e[t],s=!1;n.$once&&(n=n.$once,s=!0),"string"==typeof n&&(n=this[n]),this.unsubscribe(n.channel,n.$once||n,this)}return e}observeColleague(e,t,n,s){return e instanceof u.default&&(n||(n=this._defaultChannel),e.setMediatorMessageQueue(this),this.subscribe(n,t,e,!1,s||this._defaultIdentifier)),s}observeColleagueAndTrigger(e,t,n){return this.observeColleague(e,(...n)=>{e.trigger(t,n[0])},t,n||this._defaultIdentifier),n}dismissColleague(e,t,n,s){return e instanceof u.default&&(n||(n=this._defaultChannel),e.removeMediatorMessageQueue(),this.unsubscribe(n,t,e,s)),s}dismissColleagueTrigger(e,t,n){const s=n||this._defaultIdentifier;return this.dismissColleague(e,(...t)=>{e.trigger(t[0],t[1])},t,s),n}subscribe(e,t,n,s,i){this._channels[e]||(this._channels[e]=[]);const r={fn:t,context:n||this,once:s,identifier:i||this._defaultIdentifier};return this._channels[e].push(r),this._colleagueMap[n]=e,this.on(e,this.publish,n),i}publish(e,...t){if(!e||!this._channels||!this._channels[e])return console.warn(`Mediator ${this.name}: channel ${e} doesn't exist.`),void(this._channels={});const n=Array.from(t);let s,i=0;const r=this._channels[e].length;for(i=0;i<r;i++)(s=this._channels[e][i])&&(s.fn&&s.fn.apply(s.context,n),s.once&&(this.unsubscribe(e,s.fn,s.context,s.identifier),i--));return e}unsubscribe(e,t,n,s){if(!this._channels[e])return;let i,r=s||this._defaultIdentifier,u=0;for(u=0;u<this._channels[e].length;u++)(i=this._channels[e][u])&&i.identifier===r&&i.context===n&&(this._channels[e].splice(u,1),u--,delete this._colleagueMap[i.context]);return e}subscribeOnce(e,t,n,s){return this.subscribe(e,t,n,!0,s),s}getColleagues(e){const t=this.getChannel(e);return t?t.context:null}get channels(){return this._channels}getChannel(e){return e||(e=this._defaultChannel),this._channels[e]?this._channels[e]:null}get defaultChannel(){return this.getChannel(this._defaultChannel)}get defaultIdentifier(){return this._defaultIdentifier}}},function(t,n){t.exports=e},function(e,n){e.exports=t}])});
//# sourceMappingURL=presentation-mediator.js.map

/***/ }),

/***/ "./node_modules/presentation-models/dist/presentation-models.js":
/*!**********************************************************************!*\
  !*** ./node_modules/presentation-models/dist/presentation-models.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! next-core-model */ "./node_modules/next-core-model/dist/core-next-model.js"),__webpack_require__(/*! presentation-request */ "./node_modules/presentation-request/dist/presentation-request.js"),__webpack_require__(/*! presentation-storage */ "./node_modules/presentation-storage/dist/presentation-storage.js")):undefined}(this,function(t,e,r){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=42)}([function(t,e,r){"use strict";var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,r){"use strict";var n=r(29)("wks"),i=r(30),o=r(0).Symbol,s="function"==typeof o;(t.exports=function(t){return n[t]||(n[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=n},function(t,e,r){"use strict";var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,r){"use strict";var n=r(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){"use strict";var n=r(11),i=r(27);t.exports=r(6)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){"use strict";t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";t.exports=!r(26)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";t.exports={}},function(t,e,r){"use strict";var n=r(0),i=r(2),o=r(9),s=r(4),u=r(12),c=function(t,e,r){var a,f,l,h=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,y=t&c.B,g=t&c.W,m=p?i:i[e]||(i[e]={}),_=m.prototype,x=p?n:d?n[e]:(n[e]||{}).prototype;for(a in p&&(r=e),r)(f=!h&&x&&void 0!==x[a])&&u(m,a)||(l=f?x[a]:r[a],m[a]=p&&"function"!=typeof x[a]?r[a]:y&&f?o(l,n):g&&x[a]==l?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[a]=l,t&c.R&&_&&!_[a]&&s(_,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){"use strict";var n=r(10);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(3),i=r(51),o=r(52),s=Object.defineProperty;e.f=r(6)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,r){"use strict";var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,r){"use strict";var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,r){"use strict";t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){"use strict";t.exports=!0},function(t,e,r){"use strict";var n=r(5),i=r(0).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,r){"use strict";var n=r(59),i=r(15);t.exports=function(t){return n(i(t))}},function(t,e,r){"use strict";var n=r(29)("keys"),i=r(30);t.exports=function(t){return n[t]||(n[t]=i(t))}},function(t,e,r){"use strict";var n=r(11).f,i=r(12),o=r(1)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e,r){"use strict";var n=r(10);t.exports.f=function(t){return new function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=n(e),this.reject=n(r)}(t)}},function(e,r){e.exports=t},function(t,e,r){"use strict";t.exports=r(44)},function(t,e,r){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(46));e.default=function(t){return function(){var e=t.apply(this,arguments);return new n.default(function(t,r){return function i(o,s){try{var u=e[o](s),c=u.value}catch(t){return void r(t)}if(!u.done)return n.default.resolve(c).then(function(t){i("next",t)},function(t){i("throw",t)});t(c)}("next")})}}},function(t,e,r){"use strict";var n=r(16),i=r(8),o=r(53),s=r(4),u=r(7),c=r(54),a=r(20),f=r(62),l=r(1)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,r,d,v,y,g){c(r,e,d);var m,_,x,w=function(t){if(!h&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},P=e+" Iterator",b="values"==v,S=!1,O=t.prototype,j=O[l]||O["@@iterator"]||v&&O[v],L=j||w(v),E=v?b?w("entries"):L:void 0,k="Array"==e&&O.entries||j;if(k&&(x=f(k.call(new t)))!==Object.prototype&&x.next&&(a(x,P,!0),n||"function"==typeof x[l]||s(x,l,p)),b&&j&&"values"!==j.name&&(S=!0,L=function(){return j.call(this)}),n&&!g||!h&&!S&&O[l]||s(O,l,L),u[e]=L,u[P]=p,v)if(m={values:b?L:w("values"),keys:y?L:w("keys"),entries:E},g)for(_ in m)_ in O||o(O,_,m[_]);else i(i.P+i.F*(h||S),e,m);return m}},function(t,e,r){"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";var n=r(14),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e,r){"use strict";var n=r(2),i=r(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(16)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){"use strict";var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,r){"use strict";t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){"use strict";var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){"use strict";var n=r(13),i=r(1)("toStringTag"),o="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,r){"use strict";var n=r(3),i=r(10),o=r(1)("species");t.exports=function(t,e){var r,s=n(t).constructor;return void 0===s||void 0==(r=n(s)[o])?e:i(r)}},function(t,e,r){"use strict";var n,i,o,s=r(9),u=r(74),c=r(32),a=r(17),f=r(0),l=f.process,h=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},_=function(t){m.call(t.data)};h&&p||(h=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return g[++y]=function(){u("function"==typeof t?t:Function(t),e)},n(y),y},p=function(t){delete g[t]},"process"==r(13)(l)?n=function(t){l.nextTick(s(m,t,1))}:v&&v.now?n=function(t){v.now(s(m,t,1))}:d?(o=(i=new d).port2,i.port1.onmessage=_,n=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):n="onreadystatechange"in a("script")?function(t){c.appendChild(a("script")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(s(m,t,1),0)}),t.exports={set:h,clear:p}},function(t,e,r){"use strict";t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,r){"use strict";var n=r(3),i=r(5),o=r(21);t.exports=function(t,e){if(n(t),i(e)&&e.constructor===t)return e;var r=o.f(t);return(0,r.resolve)(e),r.promise}},function(t,r){t.exports=e},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(r(23)),i=u(r(24)),o=r(22),s=r(38);function u(t){return t&&t.__esModule?t:{default:t}}e.default=class extends o.AbstractCollection{constructor(t,e){super(t,e),this._uri=null,e&&e.url&&(console.warn("passing url is deprecated, use uri."),this._uri=e.url),e&&e.uri&&(this._uri=e.uri)}get url(){return console.warn("using url is deprecated, use uri."),this._uri}set url(t){console.warn("using url is deprecated, use uri."),this._uri=t}get uri(){return this._uri}set uri(t){this._uri=t}sync(t,e,r){var o=this;return(0,i.default)(n.default.mark(function i(){var u;return n.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r||(r={}),o._uri?r.uri=o._uri:console.warn("no uri?! :/"),!0===o.crossOrigin&&(r.crossDomain=!0),r.xhrFields||(r.xhrFields={withCredentials:!0}),o.mock&&(r.mock=o.mock),n.next=7,(0,s.sync)(t,e,r);case 7:return u=n.sent,n.abrupt("return",u);case 9:case"end":return n.stop()}},i,o)}))()}fetch(t){return this.sync("read",this,t)}save(t){return this.sync("create",this,t)}update(t){return this.sync("update",this,t)}destroy(t){return this.sync("delete",this,t)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(r(39));e.default=class extends n.default{constructor(t,e){super(t,e),e&&e.paginationConfiguration?this.paginationConfiguration=e.paginationConfiguration:this.paginationConfiguration={currentPageParam:"page",pageSizeParam:"per_page"},e&&e.pageSize?this.pageSize=e.pageSize:this.pageSize=20,e&&e.currentPage?this.currentPage=e.currentPage:this.currentPage=1,this.totalPages=1}setPageSize(t){t&&(this.pageSize=t),this.refresh()}setCurrentPage(t){t||(t=1),this.currentPage=t,this.refresh()}setPaginationConfiguration(t){this.paginationConfiguration=t}fetch(t){t=t||{};const e=this.paginationConfiguration,r={};return r[e.currentPageParam]=this.currentPage,r[e.pageSizeParam]=this.pageSize,t.data=r,super.fetch(t)}nextPage(){this.currentPage<this.totalPages&&(this.currentPage=this.currentPage+1,this.refresh())}previousPage(){this.currentPage>0&&(this.currentPage=this.currentPage-1,this.refresh())}goToPage(t){t&&t<this.totalPages&&t>0&&(this.currentPage=t,this.refresh())}firstPage(){this.currentPage=1,this.refresh()}lastPage(){this.currentPage=this.totalPages,this.refresh()}refresh(){this.fetch()}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n={};n.GITHUB=Symbol("github"),n.SOLR=Symbol("solr"),n.DATABASE=Symbol("database"),e.default=n},function(t,e,r){"use strict";var n=a(r(43)),i=a(r(39)),o=a(r(82)),s=a(r(40)),u=a(r(84)),c=a(r(41));function a(t){return t&&t.__esModule?t:{default:t}}t.exports.Model=n.default,t.exports.Collection=i.default,t.exports.LocalStorageCollection=o.default,t.exports.PaginatedCollection=s.default,t.exports.PaginationFactory=u.default,t.exports.PAGINATION_API_TYPE=c.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(r(23)),i=u(r(24)),o=r(22),s=r(38);function u(t){return t&&t.__esModule?t:{default:t}}e.default=class extends o.AbstractModel{constructor(t,e,...r){super(t,e,r),this.mock=!1,this.crossOrigin=!1,this._uri=null,e&&e.url&&(console.warn("passing url is deprecated, use uri."),this._uri=e.url),e&&e.uri&&(this._uri=e.uri)}get url(){return console.warn("using url is deprecated, use uri."),this._uri}set url(t){console.warn("using url is deprecated, use uri."),this._uri=t}get uri(){return this._uri}set uri(t){this._uri=t}sync(t,e,r){var o=this;return(0,i.default)(n.default.mark(function i(){var u;return n.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r||(r={}),o._uri?r.uri=o._uri:console.warn("no uri?! :/"),!0===o.crossOrigin&&(r.crossDomain=!0),r.xhrFields||(r.xhrFields={withCredentials:!0}),o.mock&&(r.mock=o.mock),n.next=7,(0,s.sync)(t,e,r);case 7:return u=n.sent,n.abrupt("return",u);case 9:case"end":return n.stop()}},i,o)}))()}fetch(t){return this.sync("read",this,t)}save(t){return this.sync("create",this,t)}update(t){return this.sync("update",this,t)}destroy(t){return this.sync("delete",this,t)}}},function(t,e,r){"use strict";var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(45),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e,r){"use strict";!function(e){var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",a="object"==typeof t,f=e.regeneratorRuntime;if(f)a&&(t.exports=f);else{(f=e.regeneratorRuntime=a?t.exports:{}).wrap=x;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},y={};y[s]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(M([])));m&&m!==n&&i.call(m,s)&&(y=m);var _=S.prototype=P.prototype=Object.create(y);b.prototype=_.constructor=S,S.constructor=b,S[c]=b.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},f.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[u]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,r,n){var i=new j(x(t,e,r,n));return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},O(_),_[c]="Generator",_[s]=function(){return this},_.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=M,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return u.type="throw",u.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],u=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),a=i.call(s,"finallyLoc");if(c&&a){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function x(t,e,r,n){var i=e&&e.prototype instanceof P?e:P,o=Object.create(i.prototype),s=new T(n||[]);return o._invoke=function(t,e,r){var n=l;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return C()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var u=L(s,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=w(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,s),o}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function P(){}function b(){}function S(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,s){var u=w(t[r],t,n);if("throw"!==u.type){var c=u.arg,a=c.value;return a&&"object"==typeof a&&i.call(a,"__await")?Promise.resolve(a.__await).then(function(t){e("next",t,o,s)},function(t){e("throw",t,o,s)}):Promise.resolve(a).then(function(t){c.value=t,o(c)},s)}s(u.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=w(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function M(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){"use strict";t.exports={default:r(47),__esModule:!0}},function(t,e,r){"use strict";r(48),r(49),r(64),r(68),r(80),r(81),t.exports=r(2).Promise},function(t,e,r){"use strict"},function(t,e,r){"use strict";var n=r(50)(!0);r(25)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";var n=r(14),i=r(15);t.exports=function(t){return function(e,r){var o,s,u=String(i(e)),c=n(r),a=u.length;return c<0||c>=a?t?"":void 0:(o=u.charCodeAt(c))<55296||o>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):o:t?u.slice(c,c+2):s-56320+(o-55296<<10)+65536}}},function(t,e,r){"use strict";t.exports=!r(6)&&!r(26)(function(){return 7!=Object.defineProperty(r(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";var n=r(5);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){"use strict";t.exports=r(4)},function(t,e,r){"use strict";var n=r(55),i=r(27),o=r(20),s={};r(4)(s,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:i(1,r)}),o(t,e+" Iterator")}},function(t,e,r){"use strict";var n=r(3),i=r(56),o=r(31),s=r(19)("IE_PROTO"),u=function(){},c=function(){var t,e=r(17)("iframe"),n=o.length;for(e.style.display="none",r(32).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[o[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(u.prototype=n(t),r=new u,u.prototype=null,r[s]=t):r=c(),void 0===e?r:i(r,e)}},function(t,e,r){"use strict";var n=r(11),i=r(3),o=r(57);t.exports=r(6)?Object.defineProperties:function(t,e){i(t);for(var r,s=o(e),u=s.length,c=0;u>c;)n.f(t,r=s[c++],e[r]);return t}},function(t,e,r){"use strict";var n=r(58),i=r(31);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e,r){"use strict";var n=r(12),i=r(18),o=r(60)(!1),s=r(19)("IE_PROTO");t.exports=function(t,e){var r,u=i(t),c=0,a=[];for(r in u)r!=s&&n(u,r)&&a.push(r);for(;e.length>c;)n(u,r=e[c++])&&(~o(a,r)||a.push(r));return a}},function(t,e,r){"use strict";var n=r(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(18),i=r(28),o=r(61);t.exports=function(t){return function(e,r,s){var u,c=n(e),a=i(c.length),f=o(s,a);if(t&&r!=r){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){"use strict";var n=r(14),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=n(t))<0?i(t+e,0):o(t,e)}},function(t,e,r){"use strict";var n=r(12),i=r(63),o=r(19)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,r){"use strict";var n=r(15);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";r(65);for(var n=r(0),i=r(4),o=r(7),s=r(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var a=u[c],f=n[a],l=f&&f.prototype;l&&!l[s]&&i(l,s,a),o[a]=o.Array}},function(t,e,r){"use strict";var n=r(66),i=r(67),o=r(7),s=r(18);t.exports=r(25)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,e,r){"use strict";t.exports=function(){}},function(t,e,r){"use strict";t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";var n,i,o,s,u=r(16),c=r(0),a=r(9),f=r(33),l=r(8),h=r(5),p=r(10),d=r(69),v=r(70),y=r(34),g=r(35).set,m=r(75)(),_=r(21),x=r(36),w=r(76),P=r(37),b=c.TypeError,S=c.process,O=S&&S.versions,j=O&&O.v8||"",L=c.Promise,E="process"==f(S),k=function(){},T=i=_.f,M=!!function(){try{var t=L.resolve(1),e=(t.constructor={})[r(1)("species")]=function(t){t(k,k)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof e&&0!==j.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var r=t._c;m(function(){for(var n=t._v,i=1==t._s,o=0,s=function(e){var r,o,s,u=i?e.ok:e.fail,c=e.resolve,a=e.reject,f=e.domain;try{u?(i||(2==t._h&&I(t),t._h=1),!0===u?r=n:(f&&f.enter(),r=u(n),f&&(f.exit(),s=!0)),r===e.promise?a(b("Promise-chain cycle")):(o=C(r))?o.call(r,c,a):c(r)):a(n)}catch(t){f&&!s&&f.exit(),a(t)}};r.length>o;)s(r[o++]);t._c=[],t._n=!1,e&&!t._h&&F(t)})}},F=function(t){g.call(c,function(){var e,r,n,i=t._v,o=R(t);if(o&&(e=x(function(){E?S.emit("unhandledRejection",i,t):(r=c.onunhandledrejection)?r({promise:t,reason:i}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",i)}),t._h=E||R(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},I=function(t){g.call(c,function(){var e;E?S.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},G=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},N=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw b("Promise can't be resolved itself");(e=C(t))?m(function(){var n={_w:r,_d:!1};try{e.call(t,a(N,n,1),a(G,n,1))}catch(t){G.call(n,t)}}):(r._v=t,r._s=1,A(r,!1))}catch(t){G.call({_w:r,_d:!1},t)}}};M||(L=function(t){d(this,L,"Promise","_h"),p(t),n.call(this);try{t(a(N,this,1),a(G,this,1))}catch(t){G.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(77)(L.prototype,{then:function(t,e){var r=T(y(this,L));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=E?S.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&A(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n;this.promise=t,this.resolve=a(N,t,1),this.reject=a(G,t,1)},_.f=T=function(t){return t===L||t===s?new o(t):i(t)}),l(l.G+l.W+l.F*!M,{Promise:L}),r(20)(L,"Promise"),r(78)("Promise"),s=r(2).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var e=T(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!M),"Promise",{resolve:function(t){return P(u&&this===s?L:this,t)}}),l(l.S+l.F*!(M&&r(79)(function(t){L.all(t).catch(k)})),"Promise",{all:function(t){var e=this,r=T(e),n=r.resolve,i=r.reject,o=x(function(){var r=[],o=0,s=1;v(t,!1,function(t){var u=o++,c=!1;r.push(void 0),s++,e.resolve(t).then(function(t){c||(c=!0,r[u]=t,--s||n(r))},i)}),--s||n(r)});return o.e&&i(o.v),r.promise},race:function(t){var e=this,r=T(e),n=r.reject,i=x(function(){v(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return i.e&&n(i.v),r.promise}})},function(t,e,r){"use strict";t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e,r){"use strict";var n=r(9),i=r(71),o=r(72),s=r(3),u=r(28),c=r(73),a={},f={},l=t.exports=function(t,e,r,l,h){var p,d,v,y,g=h?function(){return t}:c(t),m=n(r,l,e?2:1),_=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(p=u(t.length);p>_;_++)if((y=e?m(s(d=t[_])[0],d[1]):m(t[_]))===a||y===f)return y}else for(v=g.call(t);!(d=v.next()).done;)if((y=i(v,m,d.value,e))===a||y===f)return y};l.BREAK=a,l.RETURN=f},function(t,e,r){"use strict";var n=r(3);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&n(o.call(t)),e}}},function(t,e,r){"use strict";var n=r(7),i=r(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[i]===t)}},function(t,e,r){"use strict";var n=r(33),i=r(1)("iterator"),o=r(7);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){"use strict";var n=r(0),i=r(35).set,o=n.MutationObserver||n.WebKitMutationObserver,s=n.process,u=n.Promise,c="process"==r(13)(s);t.exports=function(){var t,e,r,a=function(){var n,i;for(c&&(n=s.domain)&&n.exit();t;){i=t.fn,t=t.next;try{i()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(c)r=function(){s.nextTick(a)};else if(!o||n.navigator&&n.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);r=function(){f.then(a)}}else r=function(){i.call(n,a)};else{var l=!0,h=document.createTextNode("");new o(a).observe(h,{characterData:!0}),r=function(){h.data=l=!l}}return function(n){var i={fn:n,next:void 0};e&&(e.next=i),t||(t=i,r()),e=i}}},function(t,e,r){"use strict";var n=r(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,r){"use strict";var n=r(4);t.exports=function(t,e,r){for(var i in e)r&&t[i]?t[i]=e[i]:n(t,i,e[i]);return t}},function(t,e,r){"use strict";var n=r(0),i=r(2),o=r(11),s=r(6),u=r(1)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:n[t];s&&e&&!e[u]&&o.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,r){"use strict";var n=r(1)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:r=!0}},o[n]=function(){return s},t(o)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(8),i=r(2),o=r(0),s=r(34),u=r(37);n(n.P+n.R,"Promise",{finally:function(t){var e=s(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return u(e,t()).then(function(){return r})}:t,r?function(r){return u(e,t()).then(function(){throw r})}:t)}})},function(t,e,r){"use strict";var n=r(8),i=r(21),o=r(36);n(n.S,"Promise",{try:function(t){var e=i.f(this),r=o(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(22),i=r(83);const o="augmented.localstorage.collection",s=`${o}.key`;e.default=class extends n.AbstractCollection{constructor(t,e){e||(e={}),super(t,e),e.persist?this._persist=e.persist:this._persist=!1,e.key?this._key=e.key:this._key=s,e.namespace?this._namespace=e.namespace:this._namespace=o,this._storage=i.LocalStorageFactory.getStorage(this._persist,this._namespace)}get key(){return this._key}get persist(){return this._persist}get namespace(){return this._namespace}initialize(t){}init(t){}fetch(t){return this.sync("read",this,t)}save(t){return this.sync("create",this,t)}update(t){return this.sync("update",this,t)}destroy(t){return this.sync("delete",this,t)}sync(t,e,r){let n={};try{r||(r={}),"create"===t||"update"===t?(n=this.toJSON(),this._storage.setItem(this._key,n)):"delete"===t?this._storage.removeItem(this._key):(n=this._storage.getItem(this._key),this.reset(n))}catch(t){throw console.error(t),t}return n}}},function(t,e){t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(r(41)),i=o(r(40));function o(t){return t&&t.__esModule?t:{default:t}}e.default=class{constructor(){this.type=n.default}static getPaginatedCollection(t,e,r){const o=e||{};let s=null;return t||(t=n.default.GITHUB),t===n.default.GITHUB?(s=new i.default(o,r)).setPaginationConfiguration({currentPageParam:"page",pageSizeParam:"per_page"}):t===n.default.SOLR?(s=new i.default(o,r)).setPaginationConfiguration({currentPageParam:"start",pageSizeParam:"rows"}):t===n.default.DATABASE&&(s=new i.default(o,r)).setPaginationConfiguration({currentPageParam:"offset",pageSizeParam:"limit"}),s}}}])});
//# sourceMappingURL=presentation-models.js.map

/***/ }),

/***/ "./node_modules/presentation-navigation/dist/presentation-navigation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/presentation-navigation/dist/presentation-navigation.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"), __webpack_require__(/*! presentation-decorator */ "./node_modules/presentation-decorator/dist/presentation-decorator.js"), __webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js"), __webpack_require__(/*! presentation-models */ "./node_modules/presentation-models/dist/presentation-models.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_next_core_utilities__, __WEBPACK_EXTERNAL_MODULE_presentation_decorator__, __WEBPACK_EXTERNAL_MODULE_presentation_dom__, __WEBPACK_EXTERNAL_MODULE_presentation_models__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/buildIconItems.js":
/*!*****************************************!*\
  !*** ./src/functions/buildIconItems.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const buildIconItems = (name, data, tooltip) => {
  let items = "";

  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;

    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<div class="spacer"></div>';
      } else {
        items = items + `
          <div id="${data[i].id}" data-${name}="${data[i].id}" data-click="${data[i].click}"${tooltip ? ' title="' + data[i].title + '"' : ''}>
            ${data[i].icon && !data[i].isImageLink ? '<i class="material-icons md-dark">' + data[i].icon + '</i>' : ''}
            ${data[i].icon && data[i].isImageLink ? '<img src="' + data[i].icon + '" alt="' + data[i].title + '" />' : ''}
          </div>
        `;
      }
    }
  }

  return items;
};

exports.default = buildIconItems;

/***/ }),

/***/ "./src/functions/buildMenuItems.js":
/*!*****************************************!*\
  !*** ./src/functions/buildMenuItems.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// data structure = { id: "itemID", "click": "event", "icon": "web", "title": "something", "spacer": false }
const buildMenuItems = (name, data, tooltip) => {
  let items = "";

  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;

    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<div class="spacer"></div>';
      } else {
        items = items + `<div id="${data[i].id}" data-${name}="${data[i].id}" data-click="${data[i].click}"${tooltip ? ' title="' + data[i].title + '"' : ''}>${data[i].icon ? '<i class="material-icons md-dark">' + data[i].icon + '</i>' : ''}${tooltip ? "" : data[i].title}</div>`;
        /*
        items = items + '<div id="' + data[i].id + '" data-' + name + '="' + data[i].id + '" data-click="' + data[i].click + '">' +
        ( (data[i].icon) ? ('<i class="material-icons md-dark">' + data[i].icon + '</i>') : '' ) + data[i].title + '</div>';
        */
      }
    }
  }

  return items;
};

exports.default = buildMenuItems;

/***/ }),

/***/ "./src/functions/buildNavItems.js":
/*!****************************************!*\
  !*** ./src/functions/buildNavItems.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const buildMenuItems = (name, data) => {
  let items = "";

  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;

    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<li class="spacer"></li>';
      } else {
        items = items + '<li id="' + data[i].id + '" data-' + name + '="' + data[i].id + '" data-click="' + data[i].click + '">' + (data[i].icon ? '<i class="material-icons md-dark">' + data[i].icon + '</i>' : '') + data[i].title + '</li>';
      }
    }
  }

  return items;
};

exports.default = buildMenuItems;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hamburgerMenu = __webpack_require__(/*! ./menu/hamburgerMenu.js */ "./src/menu/hamburgerMenu.js");

var _hamburgerMenu2 = _interopRequireDefault(_hamburgerMenu);

var _menu = __webpack_require__(/*! ./menu/menu.js */ "./src/menu/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _navigation = __webpack_require__(/*! ./menu/navigation.js */ "./src/menu/navigation.js");

var _navigation2 = _interopRequireDefault(_navigation);

var _notificationCenter = __webpack_require__(/*! ./notification/notificationCenter.js */ "./src/notification/notificationCenter.js");

var _notificationCenter2 = _interopRequireDefault(_notificationCenter);

var _toolbar = __webpack_require__(/*! ./toolbar/toolbar.js */ "./src/toolbar/toolbar.js");

var _toolbar2 = _interopRequireDefault(_toolbar);

var _iconbar = __webpack_require__(/*! ./toolbar/iconbar.js */ "./src/toolbar/iconbar.js");

var _iconbar2 = _interopRequireDefault(_iconbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.HamburgerMenu = _hamburgerMenu2.default;
module.exports.Menu = _menu2.default;
module.exports.NavigationMenu = _navigation2.default;
module.exports.NotificationCenter = _notificationCenter2.default;
module.exports.Toolbar = _toolbar2.default;
module.exports.Iconbar = _iconbar2.default;

/***/ }),

/***/ "./src/menu/hamburgerMenu.js":
/*!***********************************!*\
  !*** ./src/menu/hamburgerMenu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildMenu = (name, title, menuItems) => {
  return `
    <section class="material-design-hamburger" data-${name}="hamburgerClickRegion">
      <div class="material-design-hamburger__icon" data-${name}="hamburgerIcon" data-click="toggle">
        <i class="material-icons md-light">menu</i>
      </div>
    </section>
    <section class="menu menu--off" data-${name}="hamburgerMenu">
      <div>${title}</div>
      ${(0, _buildMenuItems2.default)(name, menuItems)}
    </section>
  `;
};
/**
 * A Hamburger Menu View
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */


class HamburgerMenu extends _abstractToolbar2.default {
  constructor(options) {
    super(options);
  }

  /**
   * Render the Hamburger Menu
   * @method render Renders the Hamburger
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (this.isInitalized) {
      this.template = null; //"notused";

      if (this.el) {
        const e = _presentationDom2.default.selector(this.el);

        if (e) {
          // the menu
          _presentationDom2.default.addClass(e, "wrapper");

          e.setAttribute(`data-${this.name}`, "hamburger");
          e.innerHTML = buildMenu(this.name, this.title, this.menuItems);
        }

        this.delegateEvents();
        this.syncAllBoundElements();
      }
    }

    return this;
  }

  /**
   * Toggle the Hamburger menu view
   * @method toggle
   */
  toggle() {
    if (!this.modal) {
      const menu = this.boundElement("hamburgerMenu");
      const r = this.boundElement("hamburgerClickRegion");
      r.classList.toggle("model");
      menu.classList.toggle("menu--on");
    }
  }

}

;
exports.default = HamburgerMenu;

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildNavItems = __webpack_require__(/*! ../functions/buildNavItems.js */ "./src/functions/buildNavItems.js");

var _buildNavItems2 = _interopRequireDefault(_buildNavItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildMenu = (name, menuItems) => {
  return `<i class="material-icons md-dark">more_vert</i><ul>${(0, _buildNavItems2.default)(name, menuItems)}</ul>`;
};
/**
 * A Menu
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */


class Menu extends _abstractToolbar2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }

    if (!options.tagName) {
      options.tagName = "nav";
    }

    super(options);
  }

  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      return this;
    }

    this.template = null; //"notused";

    if (this.el) {
      const e = _presentationDom2.default.selector(this.el);

      if (e) {
        // the menu
        _presentationDom2.default.addClass(e, "tools");

        e.setAttribute("data-" + this.name, "menu");
        e.innerHTML = buildMenu(this.name, this.menuItems);
      }
    } else {
      //_logger.warn("AUGMENTED: Menu no element anchor, not rendering.");
      return this;
    }

    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  }

}

;
exports.default = Menu;

/***/ }),

/***/ "./src/menu/navigation.js":
/*!********************************!*\
  !*** ./src/menu/navigation.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildNavItems = __webpack_require__(/*! ../functions/buildNavItems.js */ "./src/functions/buildNavItems.js");

var _buildNavItems2 = _interopRequireDefault(_buildNavItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Navigation Menu
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */
class NavigationMenu extends _abstractToolbar2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }

    if (!options.tagName) {
      options.tagName = "nav";
    }

    if (!options.style) {
      options.style = "navigation";
    } else {
      options.style = `${option.style} navigation`;
    }

    super(options);
  }

  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (this.isInitalized) {
      this.template = null; //"notused";

      if (this.el) {
        const e = _presentationDom2.default.selector(this.el);

        if (e) {
          // the menu
          _presentationDom2.default.addClass(e, "navigation");

          e.setAttribute("data-" + this.name, "navigation-menu");
          e.innerHTML = (0, _buildNavItems2.default)(this.name, this.menuItems);
        }

        this.delegateEvents();
        this.syncAllBoundElements();
      }
    }

    ;
    return this;
  }

}

;
exports.default = NavigationMenu;

/***/ }),

/***/ "./src/notification/notificationCenter.js":
/*!************************************************!*\
  !*** ./src/notification/notificationCenter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Notfication Center Component
 * @memberof Presentation.Component
 * @extends Presentation.Component.AbstractToolbar
 */
class NotificationCenter extends _abstractToolbar2.default {
  constructor(options) {
    super(options);
  }

  /**
   * @property notifications {array} The notifications as notify object array
   */
  get notifications() {
    return this.menuItems;
  }

  set notifications(n) {
    this.menuItems = n;
  }

  /**
   * Show the NotificationCenter
   */
  showNotification() {// show the widget
  }

  /**
   * Hide the NotificationCenter
   */
  hideNotification() {// hide the widget
  }

  /**
   * Clear the NotificationCenter
   */
  clearNotifications() {
    this.clearMenuItems();
  }

  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    this.template = null; //"notused";

    if (this.el) {
      const e = _presentationDom2.default.selector(this.el);

      if (e) {
        // the menu
        _presentationDom2.default.addClass(e, "notify");

        e.setAttribute("data-" + this.name, "notify");
        e.innerHTML = `<ul>${(0, _buildMenuItems2.default)(this.name, this.menuItems)}</ul>`;
      }

      this.delegateEvents();
      this.syncAllBoundElements();
    }

    return this;
  }

}

;
exports.default = NotificationCenter;

/***/ }),

/***/ "./src/toolbar/abstractToolbar.js":
/*!****************************************!*\
  !*** ./src/toolbar/abstractToolbar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextCoreUtilities = __webpack_require__(/*! next-core-utilities */ "next-core-utilities");

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _presentationModels = __webpack_require__(/*! presentation-models */ "presentation-models");

var _presentationModels2 = _interopRequireDefault(_presentationModels);

var _presentationDecorator = __webpack_require__(/*! presentation-decorator */ "presentation-decorator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * An abstract tooldbar Component, designed to be extended
  * @memberof Presentation.Component
  * @extends Presentation.DecoratorView
  * @abstract
  */
class AbstractToolbar extends _presentationDecorator.DecoratorView {
  constructor(options) {
    super(options);
    this.isInitalized = false, this._menuItems = [];
    this.title = "";

    if (this.model) {
      this.model.clear();
    } else {
      this.model = new _presentationModels2.default();
    }

    if (options) {
      if (options.data && (0, _nextCoreUtilities.isObject)(options.data)) {
        this.model.set(options.data);
      }

      if (options.title && (0, _nextCoreUtilities.isString)(options.title)) {
        this.title = options.title;
      }

      if (options.menuItems && (0, _nextCoreUtilities.isObject)(options.menuItems)) {
        this._menuItems = options.menuItems;
      }

      if (options.tooltip) {
        this.tooltip = options.tooltip;
      } else {
        this.tooltip = false;
      }
    }

    if (this.el && this.name) {
      this.isInitalized = true;
    }
  }

  /**
    * The model property
    * @property {Model} model The model property
    */

  /**
    * The initialized property
    * @property {boolean} isInitalized The initialized property
    */

  /**
    * The menuItems property
    * @property {array} menuItems The initialized property
    */

  /**
    * The title property
    * @property {string} title The title property
    */

  /**
    * Adds an item to the menu
    * @param id {string} The id of the itemID
    * @param click {string} The bound click method to call
    * @param icon {string} The icon name (webfont)
    * @param title {string} The title of the itemID
    * @param spacer {boolean} Sets a spacer item vs text (not clickable)
    * @example addItem({"itemID", "event", "web", "something", false });
    * @example addItem({"space", null, null, null, true });
    */
  addItem(id, click, icon, title, spacer) {
    if (!spacer) {
      this._menuItems.push({
        "id": id,
        "click": click,
        "icon": icon,
        "title": title,
        "spacer": false
      });
    } else {
      this.addSpacer();
    }
  }

  /**
    * Adds a spacer item to the menu
    * @example addSpacer();
    */
  addSpacer() {
    this._menuItems.push({
      "id": null,
      "click": null,
      "icon": null,
      "title": null,
      "spacer": true
    });
  }

  get menuItems() {
    return this._menuItems;
  }

  set menuItems(items) {
    this._menuItems = items;
  }

  /**
   * Clear all items in the menu
   */
  clearMenuItems() {
    this._menuItems.length = 0;
  }

  /**
   * Select an item in the menu
   * @param {string} id The id
   */
  select(id) {
    return getItem(id);
  }

  /**
   * Get an item in the menu
   * @param {string} id The id
   */
  getItem(id) {
    const l = this._menuItems.length;
    let i = 0;

    for (i = 0; i < l; i++) {
      if (this._menuItems[i].id && this._menuItems[i].id === id) {
        return this._menuItems[i];
      }
    }

    return null;
  }

}

;
exports.default = AbstractToolbar;

/***/ }),

/***/ "./src/toolbar/iconbar.js":
/*!********************************!*\
  !*** ./src/toolbar/iconbar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ./abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildIconItems = __webpack_require__(/*! ../functions/buildIconItems.js */ "./src/functions/buildIconItems.js");

var _buildIconItems2 = _interopRequireDefault(_buildIconItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Iconbar View
 * @extends AbstractToolbar
 */
class Iconbar extends _abstractToolbar2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }

    options.tooltip = true;
    super(options);
  }

  /**
   * Adds an item to the menu
   * @param id {string} The id of the itemID
   * @param click {string} The bound click method to call
   * @param icon {string} The icon name (webfont) or image src uri
   * @param toolTip {string} The toolTip of the itemID
   * @param isImageLink {boolean} Sets is icon is an image link vs web font
   * @example addIcon({"itemID", "event", "settings", "something", false });
   * @example addIcon({"itemID", "event", "/images/blah.png", "something", true });
   */
  addIcon(id, click, icon, toolTip, isImageLink) {
    this._menuItems.push({
      "id": id,
      "click": click,
      "icon": icon,
      "title": toolTip,
      "spacer": false,
      "isImageLink": isImageLink
    });
  }

  /**
   * Render the Toolbar
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      //_logger.warn("AUGMENTED: Toolbar Can't render yet, not initialized!");
      return this;
    }

    this.template = null; //"notused";

    if (this.el) {
      const e = _presentationDom2.default.selector(this.el);

      if (e) {
        // the menu
        _presentationDom2.default.addClass(e, "toolbar");

        _presentationDom2.default.addClass(e, "iconbar");

        e.setAttribute("data-" + this.name, "iconbar");
        e.innerHTML = (0, _buildIconItems2.default)(this.name, this.menuItems, this.tooltip);
      }
    } else {
      //_logger.warn("AUGMENTED: Toolbar no element anchor, not rendering.");
      return this;
    }

    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  }

}

;
exports.default = Iconbar;

/***/ }),

/***/ "./src/toolbar/toolbar.js":
/*!********************************!*\
  !*** ./src/toolbar/toolbar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ./abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Toolbar View
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */
class Toolbar extends _abstractToolbar2.default {
  constructor(options) {
    super(options);
  }

  /**
   * Render the Toolbar
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      //_logger.warn("AUGMENTED: Toolbar Can't render yet, not initialized!");
      return this;
    }

    this.template = null; //"notused";

    if (this.el) {
      const e = _presentationDom2.default.selector(this.el);

      if (e) {
        // the menu
        _presentationDom2.default.addClass(e, "toolbar");

        e.setAttribute("data-" + this.name, "toolbar");
        e.innerHTML = (0, _buildMenuItems2.default)(this.name, this.menuItems, this.tooltip);
      }
    } else {
      //_logger.warn("AUGMENTED: Toolbar no element anchor, not rendering.");
      return this;
    }

    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  }

}

;
exports.default = Toolbar;

/***/ }),

/***/ "next-core-utilities":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"next-core-utilities","commonjs2":"next-core-utilities","amd":"next-core-utilities","root":"next-core-utilities"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_next_core_utilities__;

/***/ }),

/***/ "presentation-decorator":
/*!**********************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-decorator","commonjs2":"presentation-decorator","amd":"presentation-decorator","root":"presentation-decorator"} ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_decorator__;

/***/ }),

/***/ "presentation-dom":
/*!**********************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-dom","commonjs2":"presentation-dom","amd":"presentation-dom","root":"presentation-dom"} ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_dom__;

/***/ }),

/***/ "presentation-models":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-models","commonjs2":"presentation-models","amd":"presentation-models","root":"presentation-models"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_models__;

/***/ })

/******/ });
});
//# sourceMappingURL=presentation-navigation.js.map

/***/ }),

/***/ "./node_modules/presentation-request/dist/presentation-request.js":
/*!************************************************************************!*\
  !*** ./node_modules/presentation-request/dist/presentation-request.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=39)}([function(t,e,r){"use strict";var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,r){"use strict";var n=r(30)("wks"),o=r(31),i=r(0).Symbol,s="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=n},function(t,e,r){"use strict";var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,r){"use strict";var n=r(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){"use strict";var n=r(11),o=r(28);t.exports=r(6)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){"use strict";t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";t.exports=!r(27)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";t.exports={}},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(9),s=r(4),u=r(12),c=function(t,e,r){var a,f,l,p=t&c.F,h=t&c.G,d=t&c.S,v=t&c.P,y=t&c.B,m=t&c.W,x=h?o:o[e]||(o[e]={}),g=x.prototype,w=h?n:d?n[e]:(n[e]||{}).prototype;for(a in h&&(r=e),r)(f=!p&&w&&void 0!==w[a])&&u(x,a)||(l=f?w[a]:r[a],x[a]=h&&"function"!=typeof w[a]?r[a]:y&&f?i(l,n):m&&w[a]==l?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((x.virtual||(x.virtual={}))[a]=l,t&c.R&&g&&!g[a]&&s(g,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){"use strict";var n=r(10);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(3),o=r(51),i=r(52),s=Object.defineProperty;e.f=r(6)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,r){"use strict";var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={TEXT:"text",JSON:"json"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={TYPE:"Content-Type",TEXT:"text/plain",APPLICATION:"application/json",ACCEPT:"Accept",CACHE:"Cache-Control",NO_CACHE:"no-cache",ALLOW_ORIGINS:"Access-Control-Allow-Origin",ALLOW_METHODS:"Access-Control-Allow-Methods",AUTH:"Authorization"}},function(t,e,r){"use strict";var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,r){"use strict";t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){"use strict";t.exports=!0},function(t,e,r){"use strict";var n=r(5),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){"use strict";var n=r(59),o=r(17);t.exports=function(t){return n(o(t))}},function(t,e,r){"use strict";var n=r(30)("keys"),o=r(31);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){"use strict";var n=r(11).f,o=r(12),i=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){"use strict";var n=r(10);t.exports.f=function(t){return new function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=n(e),this.reject=n(r)}(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET",CREATE:"POST",UPDATE:"PUT",PATCH:"PATCH",DELETE:"DELETE",READ:"GET"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r(15)),o=i(r(14));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(t=>{let e=null;if(t&&t.uri){t.type,!t.method&&t.type&&(t.method=t.type);let r=t.method?t.method:"GET",i=!t.cache||t.cache;if(e=t.mock?new function(){this.responseType=o.default.TEXT,this.responseText="",this.async=!0,this.status=200,this.header={},this.timeout=70,this.open=((t,e,r,n,o)=>{this.uri=e,this.async=r,this.user=n,this.method=t}),this.send=(()=>{this.onload()}),this.setRequestHeader=((t,e)=>{this.header.header=e}),this.done=(()=>{}),this.fail=(()=>{}),this.always=(()=>{}),this.then=(()=>{}),this.options={}}:new XMLHttpRequest,t.timeout&&(e.timeout=t.timeout),t.crossDomain&&t.xhrFields&&t.xhrFields.withCredentials&&(e.withCredentials=t.xhrFields.withCredentials),t.dataType&&(e.responseType=t.dataType?t.dataType:o.default.TEXT),e.open(r,encodeURI(t.uri),!0,void 0!==t.user?t.user:"",void 0!==t.password?t.password:""),e.setRequestHeader(n.default.TYPE,t.contentType?t.contentType:n.default.TEXT),t.dataType===o.default.JSON&&e.setRequestHeader(n.default.ACCEPT,n.default.APPLICATION),i||e.setRequestHeader(n.default.CACHE,n.default.NO_CACHE),e.withCredentials){let r="*",o="GET";t.allowOrigins&&(r=t.allowOrigins),t.allowMethods&&(o=t.allowMethods),e.setRequestHeader(n.default.ALLOW_ORIGINS,r),e.setRequestHeader(n.default.ALLOW_METHODS,o)}if(e.withCredentials&&t.user&&t.password&&e.setRequestHeader(n.default.AUTH,"Basic "+window.btoa(t.user+":"+t.password)),t.headers){let r=0,n=Object.keys(t.headers),o=n.length;for(r=0;r<o;r++)e.setRequestHeader(n[r],t.headers[n[r]])}e.onload=(()=>{try{e.status>199&&e.status<399?t.success&&(""===e.responseType||e.responseType===o.default.TEXT?e.responseText?t.success(e.responseText,e.status,e):(console.warn("AUGMENTED: Ajax ("+e.responseType+" responseType) did not return anything."),t.success("",e.status,e)):e.responseType===o.default.JSON?e.response?t.success(e.response,e.status,e):e.responseText?t.success(JSON.parse(e.responseText),e.status,e):(console.warn("AUGMENTED: Ajax ("+e.responseType+" responseType) did not return anything."),t.success("",e.status,e)):e.responseText?t.success(e.responseText,e.status,e):e.response?t.success(e.response,e.status,e):(console.warn("AUGMENTED: Ajax ("+e.responseType+" responseType) did not return anything."),t.success("",e.status,e))):e.status>399&&e.status<600&&(t.failure?t.failure(e,e.status,e.statusText):t.error&&t.error(e,e.status,e.statusText))}catch(r){return console.error("AUGMENTED: Ajax ("+r+")"),t&&t.error&&t.error(e,e.status,e.statusText),e}return t.complete&&t.complete(e,e.status),e}),t.beforeSend&&t.beforeSend(e),e.send(t.data?t.data:"")}return e})},function(t,e,r){"use strict";var n=r(18),o=r(8),i=r(53),s=r(4),u=r(7),c=r(54),a=r(22),f=r(62),l=r(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,r,d,v,y,m){c(r,e,d);var x,g,w,_=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},T=e+" Iterator",E="values"==v,b=!1,O=t.prototype,P=O[l]||O["@@iterator"]||v&&O[v],j=P||_(v),S=v?E?_("entries"):j:void 0,L="Array"==e&&O.entries||P;if(L&&(w=f(L.call(new t)))!==Object.prototype&&w.next&&(a(w,T,!0),n||"function"==typeof w[l]||s(w,l,h)),E&&P&&"values"!==P.name&&(b=!0,j=function(){return P.call(this)}),n&&!m||!p&&!b&&O[l]||s(O,l,j),u[e]=j,u[T]=h,v)if(x={values:E?j:_("values"),keys:y?j:_("keys"),entries:S},m)for(g in x)g in O||i(O,g,x[g]);else o(o.P+o.F*(p||b),e,x);return x}},function(t,e,r){"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";var n=r(16),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){"use strict";var n=r(2),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){"use strict";var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,r){"use strict";t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){"use strict";var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){"use strict";var n=r(13),o=r(1)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,r){"use strict";var n=r(3),o=r(10),i=r(1)("species");t.exports=function(t,e){var r,s=n(t).constructor;return void 0===s||void 0==(r=n(s)[i])?e:o(r)}},function(t,e,r){"use strict";var n,o,i,s=r(9),u=r(74),c=r(33),a=r(19),f=r(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,y=0,m={},x=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){x.call(t.data)};p&&h||(p=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),e)},n(y),y},h=function(t){delete m[t]},"process"==r(13)(l)?n=function(t){l.nextTick(s(x,t,1))}:v&&v.now?n=function(t){v.now(s(x,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=g,n=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):n="onreadystatechange"in a("script")?function(t){c.appendChild(a("script")).onreadystatechange=function(){c.removeChild(this),x.call(t)}}:function(t){setTimeout(s(x,t,1),0)}),t.exports={set:p,clear:h}},function(t,e,r){"use strict";t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,r){"use strict";var n=r(3),o=r(5),i=r(23);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},function(t,e,r){"use strict";var n=a(r(40)),o=a(r(14)),i=a(r(15)),s=a(r(24)),u=a(r(25)),c=a(r(41));function a(t){return t&&t.__esModule?t:{default:t}}t.exports.Configuration=n.default,t.exports.DATA_TYPE=o.default,t.exports.HEADERS=i.default,t.exports.METHOD_MAP=s.default,t.exports.request=u.default,t.exports.sync=c.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={uri:"localhost",url:"localhost",contentType:"text/plain",dataType:"text",method:"GET",cache:!0,timeout:0,crossDomain:!1,xhrFields:{},withCredentials:!1,user:null,password:null,allowOrigins:"",allowMethods:null,headers:{},success:null,error:null,complete:null,beforeSend:null,mock:!1}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(r(42)),o=c(r(45)),i=c(r(24)),s=(c(r(25)),c(r(14))),u=c(r(15));function c(t){return t&&t.__esModule?t:{default:t}}const a=t=>"[object Function]"==Object.prototype.toString.call(t),f=(()=>{var t=(0,o.default)(n.default.mark(function t(e,r,o){var c,f,l,p,h;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=3;break}throw console.error("No model to sync!"),new Error("No model to sync!");case 3:if(c=null,o||(o={}),f=e?i.default[e]:i.default.READ,l={type:f,dataType:s.default.JSON,success:o.success,error:o.error},o.uri){t.next=13;break}if(!r||!r.uri){t.next=12;break}a(r.uri)?o.uri=r.uri():o.uri=r.uri,t.next=13;break;case 12:throw new Error('A "uri" property or model with "uri" must be specified in the collection or model class!');case 13:return null!=o.data||!r||e!==i.default.CREATE&&e!==i.default.UPDATE&&e!==i.default.PATCH||(l.contentType=u.default.APPLICATION,l.data=JSON.stringify(o.attrs||r.toJSON(o))),l.type!==i.default.READ&&(l.data=null),p=l.data?JSON.stringify(c):null,t.next=18,fetch(o.uri,{method:l.type,headers:{"Content-Type":l.contentType},credentials:"include",body:p}).then(function(t){if(t.ok)return t.json();throw new Error(`${t.status}: ${l.uri} ${t.statusText} `)}).then(function(t){return r.set(t),c=t,t}).then(function(t){return l.success?l.success(t):t}).then(function(t){return r.trigger("request",r,null,o),t}).catch(function(t){return l.error?l.error(t):(console.error(t),t)});case 18:return h=t.sent,t.abrupt("return",h);case 20:case"end":return t.stop()}},t,void 0)}));return function(e,r,n){return t.apply(this,arguments)}})();e.default=f},function(t,e,r){"use strict";t.exports=r(43)},function(t,e,r){"use strict";var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(44),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e,r){"use strict";!function(e){var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",a="object"==typeof t,f=e.regeneratorRuntime;if(f)a&&(t.exports=f);else{(f=e.regeneratorRuntime=a?t.exports:{}).wrap=w;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},y={};y[s]=function(){return this};var m=Object.getPrototypeOf,x=m&&m(m(M([])));x&&x!==n&&o.call(x,s)&&(y=x);var g=b.prototype=T.prototype=Object.create(y);E.prototype=g.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},f.awrap=function(t){return{__await:t}},O(P.prototype),P.prototype[u]=function(){return this},f.AsyncIterator=P,f.async=function(t,e,r,n){var o=new P(w(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(g),g[c]="Generator",g[s]=function(){return this},g.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=M,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],u=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),a=o.call(s,"finallyLoc");if(c&&a){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var o=e&&e.prototype instanceof T?e:T,i=Object.create(o.prototype),s=new A(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var u=j(s,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=_(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,s),i}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function T(){}function E(){}function b(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function P(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,s){var u=_(t[r],t,n);if("throw"!==u.type){var c=u.arg,a=c.value;return a&&"object"==typeof a&&o.call(a,"__await")?Promise.resolve(a.__await).then(function(t){e("next",t,i,s)},function(t){e("throw",t,i,s)}):Promise.resolve(a).then(function(t){c.value=t,i(c)},s)}s(u.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=_(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function M(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(46));e.default=function(t){return function(){var e=t.apply(this,arguments);return new n.default(function(t,r){return function o(i,s){try{var u=e[i](s),c=u.value}catch(t){return void r(t)}if(!u.done)return n.default.resolve(c).then(function(t){o("next",t)},function(t){o("throw",t)});t(c)}("next")})}}},function(t,e,r){"use strict";t.exports={default:r(47),__esModule:!0}},function(t,e,r){"use strict";r(48),r(49),r(64),r(68),r(80),r(81),t.exports=r(2).Promise},function(t,e,r){"use strict"},function(t,e,r){"use strict";var n=r(50)(!0);r(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";var n=r(16),o=r(17);t.exports=function(t){return function(e,r){var i,s,u=String(o(e)),c=n(r),a=u.length;return c<0||c>=a?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):i:t?u.slice(c,c+2):s-56320+(i-55296<<10)+65536}}},function(t,e,r){"use strict";t.exports=!r(6)&&!r(27)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";var n=r(5);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){"use strict";t.exports=r(4)},function(t,e,r){"use strict";var n=r(55),o=r(28),i=r(22),s={};r(4)(s,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){"use strict";var n=r(3),o=r(56),i=r(32),s=r(21)("IE_PROTO"),u=function(){},c=function(){var t,e=r(19)("iframe"),n=i.length;for(e.style.display="none",r(33).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[i[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(u.prototype=n(t),r=new u,u.prototype=null,r[s]=t):r=c(),void 0===e?r:o(r,e)}},function(t,e,r){"use strict";var n=r(11),o=r(3),i=r(57);t.exports=r(6)?Object.defineProperties:function(t,e){o(t);for(var r,s=i(e),u=s.length,c=0;u>c;)n.f(t,r=s[c++],e[r]);return t}},function(t,e,r){"use strict";var n=r(58),o=r(32);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(12),o=r(20),i=r(60)(!1),s=r(21)("IE_PROTO");t.exports=function(t,e){var r,u=o(t),c=0,a=[];for(r in u)r!=s&&n(u,r)&&a.push(r);for(;e.length>c;)n(u,r=e[c++])&&(~i(a,r)||a.push(r));return a}},function(t,e,r){"use strict";var n=r(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(20),o=r(29),i=r(61);t.exports=function(t){return function(e,r,s){var u,c=n(e),a=o(c.length),f=i(s,a);if(t&&r!=r){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){"use strict";var n=r(16),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){"use strict";var n=r(12),o=r(63),i=r(21)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,r){"use strict";var n=r(17);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";r(65);for(var n=r(0),o=r(4),i=r(7),s=r(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var a=u[c],f=n[a],l=f&&f.prototype;l&&!l[s]&&o(l,s,a),i[a]=i.Array}},function(t,e,r){"use strict";var n=r(66),o=r(67),i=r(7),s=r(20);t.exports=r(26)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e,r){"use strict";t.exports=function(){}},function(t,e,r){"use strict";t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";var n,o,i,s,u=r(18),c=r(0),a=r(9),f=r(34),l=r(8),p=r(5),h=r(10),d=r(69),v=r(70),y=r(35),m=r(36).set,x=r(75)(),g=r(23),w=r(37),_=r(76),T=r(38),E=c.TypeError,b=c.process,O=b&&b.versions,P=O&&O.v8||"",j=c.Promise,S="process"==f(b),L=function(){},A=o=g.f,M=!!function(){try{var t=j.resolve(1),e=(t.constructor={})[r(1)("species")]=function(t){t(L,L)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e&&0!==P.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},R=function(t,e){if(!t._n){t._n=!0;var r=t._c;x(function(){for(var n=t._v,o=1==t._s,i=0,s=function(e){var r,i,s,u=o?e.ok:e.fail,c=e.resolve,a=e.reject,f=e.domain;try{u?(o||(2==t._h&&G(t),t._h=1),!0===u?r=n:(f&&f.enter(),r=u(n),f&&(f.exit(),s=!0)),r===e.promise?a(E("Promise-chain cycle")):(i=C(r))?i.call(r,c,a):c(r)):a(n)}catch(t){f&&!s&&f.exit(),a(t)}};r.length>i;)s(r[i++]);t._c=[],t._n=!1,e&&!t._h&&N(t)})}},N=function(t){m.call(c,function(){var e,r,n,o=t._v,i=k(t);if(i&&(e=w(function(){S?b.emit("unhandledRejection",o,t):(r=c.onunhandledrejection)?r({promise:t,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=S||k(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},k=function(t){return 1!==t._h&&0===(t._a||t._c).length},G=function(t){m.call(c,function(){var e;S?b.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},H=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},D=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw E("Promise can't be resolved itself");(e=C(t))?x(function(){var n={_w:r,_d:!1};try{e.call(t,a(D,n,1),a(H,n,1))}catch(t){H.call(n,t)}}):(r._v=t,r._s=1,R(r,!1))}catch(t){H.call({_w:r,_d:!1},t)}}};M||(j=function(t){d(this,j,"Promise","_h"),h(t),n.call(this);try{t(a(D,this,1),a(H,this,1))}catch(t){H.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(77)(j.prototype,{then:function(t,e){var r=A(y(this,j));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=S?b.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new n;this.promise=t,this.resolve=a(D,t,1),this.reject=a(H,t,1)},g.f=A=function(t){return t===j||t===s?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:j}),r(22)(j,"Promise"),r(78)("Promise"),s=r(2).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var e=A(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!M),"Promise",{resolve:function(t){return T(u&&this===s?j:this,t)}}),l(l.S+l.F*!(M&&r(79)(function(t){j.all(t).catch(L)})),"Promise",{all:function(t){var e=this,r=A(e),n=r.resolve,o=r.reject,i=w(function(){var r=[],i=0,s=1;v(t,!1,function(t){var u=i++,c=!1;r.push(void 0),s++,e.resolve(t).then(function(t){c||(c=!0,r[u]=t,--s||n(r))},o)}),--s||n(r)});return i.e&&o(i.v),r.promise},race:function(t){var e=this,r=A(e),n=r.reject,o=w(function(){v(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}})},function(t,e,r){"use strict";t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e,r){"use strict";var n=r(9),o=r(71),i=r(72),s=r(3),u=r(29),c=r(73),a={},f={},l=t.exports=function(t,e,r,l,p){var h,d,v,y,m=p?function(){return t}:c(t),x=n(r,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=u(t.length);h>g;g++)if((y=e?x(s(d=t[g])[0],d[1]):x(t[g]))===a||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=o(v,x,d.value,e))===a||y===f)return y};l.BREAK=a,l.RETURN=f},function(t,e,r){"use strict";var n=r(3);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){"use strict";var n=r(7),o=r(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},function(t,e,r){"use strict";var n=r(34),o=r(1)("iterator"),i=r(7);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){"use strict";var n=r(0),o=r(36).set,i=n.MutationObserver||n.WebKitMutationObserver,s=n.process,u=n.Promise,c="process"==r(13)(s);t.exports=function(){var t,e,r,a=function(){var n,o;for(c&&(n=s.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(c)r=function(){s.nextTick(a)};else if(!i||n.navigator&&n.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);r=function(){f.then(a)}}else r=function(){o.call(n,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),r=function(){p.data=l=!l}}return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}},function(t,e,r){"use strict";var n=r(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,r){"use strict";var n=r(4);t.exports=function(t,e,r){for(var o in e)r&&t[o]?t[o]=e[o]:n(t,o,e[o]);return t}},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(11),s=r(6),u=r(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];s&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,r){"use strict";var n=r(1)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:r=!0}},i[n]=function(){return s},t(i)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(8),o=r(2),i=r(0),s=r(35),u=r(38);n(n.P+n.R,"Promise",{finally:function(t){var e=s(this,o.Promise||i.Promise),r="function"==typeof t;return this.then(r?function(r){return u(e,t()).then(function(){return r})}:t,r?function(r){return u(e,t()).then(function(){throw r})}:t)}})},function(t,e,r){"use strict";var n=r(8),o=r(23),i=r(37);n(n.S,"Promise",{try:function(t){var e=o.f(this),r=i(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})}])});
//# sourceMappingURL=presentation-request.js.map

/***/ }),

/***/ "./node_modules/presentation-router/dist/presentation-router.js":
/*!**********************************************************************!*\
  !*** ./node_modules/presentation-router/dist/presentation-router.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! next-core-object */ "./node_modules/next-core-object/dist/next-core-object.js"),__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"),__webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js"),__webpack_require__(/*! lodash.map */ "./node_modules/lodash.map/index.js"),__webpack_require__(/*! lodash.isregexp */ "./node_modules/lodash.isregexp/index.js")):undefined}(this,function(t,e,r,n,i){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=38)}([function(t,e,r){"use strict";var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,r){"use strict";var n=r(26)("wks"),i=r(27),o=r(0).Symbol,s="function"==typeof o;(t.exports=function(t){return n[t]||(n[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=n},function(t,e,r){"use strict";var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,r){"use strict";var n=r(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){"use strict";var n=r(11),i=r(24);t.exports=r(6)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){"use strict";t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";t.exports=!r(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";t.exports={}},function(t,e,r){"use strict";var n=r(0),i=r(2),o=r(9),s=r(4),u=r(12),a=function(t,e,r){var c,f,h,l=t&a.F,p=t&a.G,d=t&a.S,v=t&a.P,y=t&a.B,m=t&a.W,g=p?i:i[e]||(i[e]={}),x=g.prototype,_=p?n:d?n[e]:(n[e]||{}).prototype;for(c in p&&(r=e),r)(f=!l&&_&&void 0!==_[c])&&u(g,c)||(h=f?_[c]:r[c],g[c]=p&&"function"!=typeof _[c]?r[c]:y&&f?o(h,n):m&&_[c]==h?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):v&&"function"==typeof h?o(Function.call,h):h,v&&((g.virtual||(g.virtual={}))[c]=h,t&a.R&&x&&!x[c]&&s(x,c,h)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,r){"use strict";var n=r(10);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(3),i=r(49),o=r(50),s=Object.defineProperty;e.f=r(6)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,r){"use strict";var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,r){"use strict";var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,r){"use strict";t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){"use strict";t.exports=!0},function(t,e,r){"use strict";var n=r(5),i=r(0).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,r){"use strict";var n=r(57),i=r(15);t.exports=function(t){return n(i(t))}},function(t,e,r){"use strict";var n=r(26)("keys"),i=r(27);t.exports=function(t){return n[t]||(n[t]=i(t))}},function(t,e,r){"use strict";var n=r(11).f,i=r(12),o=r(1)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e,r){"use strict";var n=r(10);t.exports.f=function(t){return new function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=n(e),this.reject=n(r)}(t)}},function(t,e,r){"use strict";var n=r(16),i=r(8),o=r(51),s=r(4),u=r(7),a=r(52),c=r(20),f=r(60),h=r(1)("iterator"),l=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,r,d,v,y,m){a(r,e,d);var g,x,_,w=function(t){if(!l&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},b=e+" Iterator",P="values"==v,S=!1,j=t.prototype,O=j[h]||j["@@iterator"]||v&&j[v],k=O||w(v),L=v?P?w("entries"):k:void 0,E="Array"==e&&j.entries||O;if(E&&(_=f(E.call(new t)))!==Object.prototype&&_.next&&(c(_,b,!0),n||"function"==typeof _[h]||s(_,h,p)),P&&O&&"values"!==O.name&&(S=!0,k=function(){return O.call(this)}),n&&!m||!l&&!S&&j[h]||s(j,h,k),u[e]=k,u[b]=p,v)if(g={values:P?k:w("values"),keys:y?k:w("keys"),entries:L},m)for(x in g)x in j||o(j,x,g[x]);else i(i.P+i.F*(l||S),e,g);return g}},function(t,e,r){"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";var n=r(14),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e,r){"use strict";var n=r(2),i=r(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(16)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){"use strict";var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,r){"use strict";t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){"use strict";var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){"use strict";var n=r(13),i=r(1)("toStringTag"),o="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,r){"use strict";var n=r(3),i=r(10),o=r(1)("species");t.exports=function(t,e){var r,s=n(t).constructor;return void 0===s||void 0==(r=n(s)[o])?e:i(r)}},function(t,e,r){"use strict";var n,i,o,s=r(9),u=r(72),a=r(29),c=r(17),f=r(0),h=f.process,l=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){g.call(t.data)};l&&p||(l=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),e)},n(y),y},p=function(t){delete m[t]},"process"==r(13)(h)?n=function(t){h.nextTick(s(g,t,1))}:v&&v.now?n=function(t){v.now(s(g,t,1))}:d?(o=(i=new d).port2,i.port1.onmessage=x,n=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):n="onreadystatechange"in c("script")?function(t){a.appendChild(c("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(s(g,t,1),0)}),t.exports={set:l,clear:p}},function(t,e,r){"use strict";t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,r){"use strict";var n=r(3),i=r(5),o=r(21);t.exports=function(t,e){if(n(t),i(e)&&e.constructor===t)return e;var r=o.f(t);return(0,r.resolve)(e),r.promise}},function(e,r){e.exports=t},function(t,r){t.exports=e},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(35),i=r(36);const o=/^[#\/]|\s+$/g,s=/^\/+|\/+$/g,u=/#.*$/;e.default=class extends n.AugmentedObject{constructor(t){super(t),this.handlers=[],this.checkUrl=this.checkUrl.bind(this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history),this.interval=50,this.started=!1}atRoot(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()}matchRoot(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root}decodeFragment(t){return decodeURI(t.replace(/%25/g,"%2525"))}getSearch(){const t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""}getHash(t){const e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""}getPath(){const t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t}getFragment(t){return null==t&&(t=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),t.replace(o,"")}start(t){if(this.started)throw new Error("History has already been started");if(this.started=!0,this.options=(0,i.extend)({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=`/${this.root}/`.replace(s,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){const t=this.root.slice(0,-1)||"/";return this.location.replace(`${t}#${this.getPath()}`),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;const t=document.body,e=t.insertBefore(this.iframe,t.firstChild).contentWindow;e.document.open(),e.document.close(),e.location.hash="#"+this.fragment}const e=window.addEventListener?window.addEventListener:(t,e)=>attachEvent("on"+t,e);if(this._usePushState?e("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?e("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()}stop(){const t=window.removeEventListener?window.removeEventListener:(t,e)=>detachEvent("on"+t,e);this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),this.started=!1}route(t,e){this.handlers.unshift({route:t,callback:e})}checkUrl(t){let e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getHash(this.iframe.contentWindow)),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()}loadUrl(t){return!!this.matchRoot()&&(t=this.fragment=this.getFragment(t),this.handlers&&Array.isArray(this.handlers)?this.handlers.some(e=>{if(e.route.test(t))return e.callback(t),!0}):null)}navigate(t,e){if(!this.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");let r=this.root;""!==t&&"?"!==t.charAt(0)||(r=r.slice(0,-1)||"/");const n=r+t;if(t=this.decodeFragment(t.replace(u,"")),this.fragment!==t){if(this.fragment=t,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){const r=this.iframe.contentWindow;e.replace||(r.document.open(),r.document.close()),this._updateHash(r.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}}_updateHash(t,e,r){if(r){const r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else t.hash="#"+e}}},function(t,e,r){"use strict";var n=s(r(39)),i=s(r(37)),o=s(r(83));function s(t){return t&&t.__esModule?t:{default:t}}t.exports.Router=n.default,t.exports.History=i.default,t.exports.serialize=o.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(r(40)),i=c(r(43)),o=r(35),s=r(36),u=c(r(37)),a=c(r(80));function c(t){return t&&t.__esModule?t:{default:t}}const f=r(81),h=r(82),l=/\((.*?)\)/g,p=/(\(\?)?:\w+/g,d=/\*\w+/g,v=/[\-{}\[\]+?.,\\\^$|#\s]/g;e.default=class extends o.AugmentedObject{constructor(t){t||(t={}),super(t),t.routes&&(this.routes=t.routes),t.transition&&(this.transition=t.transition),this.history=new u.default,this._bindRoutes(),this.initialize(t)}static parseQuery(t){let e={},r=("?"===t[0]?t.substr(1):t).split("&"),n=0;const i=r.length;for(n=0;n<i;n++){const t=r[n].split("=");e[decodeURIComponent(t[0])]=decodeURIComponent(t[1]||"")}return e}get view(){return this._view}loadView(t){var e=this;return(0,i.default)(n.default.mark(function r(){var i;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!t){r.next=31;break}if(i=e._view,!e.transition||!e.transition.in){r.next=20;break}if(!i){r.next=9;break}return r.next=7,a.default.addClass(t.el,"transition-out");case 7:return r.next=9,e.cleanup();case 9:return r.next=11,window.setTimeout(function(){},e.transition.out);case 11:if(!t.render){r.next=14;break}return r.next=14,window.setTimeout(function(){a.default.removeClass(t.el,"transition-out"),t.render()},e.transition.in);case 14:if(!t.delegateEvents){r.next=17;break}return r.next=17,t.delegateEvents();case 17:e._view=t,r.next=29;break;case 20:if(!i){r.next=23;break}return r.next=23,e.cleanup(i);case 23:return r.next=25,t.render();case 25:if(!t.delegateEvents){r.next=28;break}return r.next=28,t.delegateEvents();case 28:e._view=t;case 29:r.next=32;break;case 31:console.warn("No view passed.");case 32:r.next=37;break;case 34:r.prev=34,r.t0=r.catch(0),console.error(r.t0);case 37:return r.abrupt("return",e);case 38:case"end":return r.stop()}},r,e,[[0,34]])}))()}cleanup(t){var e=this;return(0,i.default)(n.default.mark(function r(){var o,s,u;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t&&!e._view){r.next=15;break}if(o=t||e._view,!(e.transition&&e.transition.out&&o.el)){r.next=9;break}return s=(0,i.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.remove){t.next=3;break}return t.next=3,o.remove();case 3:return t.abrupt("return",o);case 4:case"end":return t.stop()}},t,e)})),u=function(){return s.apply(this,arguments)},r.next=6,window.setTimeout(u,e.transition.out);case 6:e._view=null,r.next=13;break;case 9:if(!e.view.remove){r.next=12;break}return r.next=12,e.view.remove();case 12:e._view=null;case 13:r.next=15;break;case 15:return r.abrupt("return",e);case 16:case"end":return r.stop()}},r,e)}))()}initialize(t){return super.initialize(t)}route(t,e,r){h(t)||(t=this._routeToRegExp(t)),(0,s.isFunction)(e)&&(r=e,e=""),r||(r=this[e]);const n=this;return this.history.route(t,i=>{const o=n._extractParameters(t,i);!1!==n.execute(r,o,e)&&(n.trigger.apply(n,["route:"+e].concat(o)),n.trigger("route",e,o),this.history.trigger("route",n,e,o))}),this}execute(t,e){t&&t.apply(this,e)}navigate(t,e){return this.history.navigate(t,e),{routes:this.routes}}startHistory(t){return this.history.started||this.history.start(t),!0}_bindRoutes(){if(!this.routes)return;this.routes=(0,s.result)(this,"routes");let t,e=Object.keys(this.routes);for(;null!=(t=e.pop());)this.route(t,this.routes[t])}_routeToRegExp(t){return t=t.replace(v,"\\$&").replace(l,"(?:$1)?").replace(p,(t,e)=>e?t:"([^/?]+)").replace(d,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")}_extractParameters(t,e){let r=t.exec(e).slice(1);return f(r,(t,e)=>e===r.length-1?t||null:t?decodeURIComponent(t):null)}}},function(t,e,r){"use strict";t.exports=r(41)},function(t,e,r){"use strict";var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(42),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e,r){"use strict";!function(e){var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag",c="object"==typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{(f=e.regeneratorRuntime=c?t.exports:{}).wrap=_;var h="suspendedStart",l="suspendedYield",p="executing",d="completed",v={},y={};y[s]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(M([])));g&&g!==n&&i.call(g,s)&&(y=g);var x=S.prototype=b.prototype=Object.create(y);P.prototype=x.constructor=S,S.constructor=P,S[a]=P.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===P||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(x),t},f.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[u]=function(){return this},f.AsyncIterator=O,f.async=function(t,e,r,n){var i=new O(_(t,e,r,n));return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(x),x[a]="Generator",x[s]=function(){return this},x.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=M,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return u.type="throw",u.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],u=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var a=i.call(s,"catchLoc"),c=i.call(s,"finallyLoc");if(a&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function _(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,o=Object.create(i.prototype),s=new T(n||[]);return o._invoke=function(t,e,r){var n=h;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return R()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var u=k(s,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var a=w(t,e,r);if("normal"===a.type){if(n=r.done?d:l,a.arg===v)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n=d,r.method="throw",r.arg=a.arg)}}}(t,r,s),o}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function P(){}function S(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,s){var u=w(t[r],t,n);if("throw"!==u.type){var a=u.arg,c=a.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,s)},function(t){e("throw",t,o,s)}):Promise.resolve(c).then(function(t){a.value=t,o(a)},s)}s(u.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=w(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function M(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(44));e.default=function(t){return function(){var e=t.apply(this,arguments);return new n.default(function(t,r){return function i(o,s){try{var u=e[o](s),a=u.value}catch(t){return void r(t)}if(!u.done)return n.default.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});t(a)}("next")})}}},function(t,e,r){"use strict";t.exports={default:r(45),__esModule:!0}},function(t,e,r){"use strict";r(46),r(47),r(62),r(66),r(78),r(79),t.exports=r(2).Promise},function(t,e,r){"use strict"},function(t,e,r){"use strict";var n=r(48)(!0);r(22)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";var n=r(14),i=r(15);t.exports=function(t){return function(e,r){var o,s,u=String(i(e)),a=n(r),c=u.length;return a<0||a>=c?t?"":void 0:(o=u.charCodeAt(a))<55296||o>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):o:t?u.slice(a,a+2):s-56320+(o-55296<<10)+65536}}},function(t,e,r){"use strict";t.exports=!r(6)&&!r(23)(function(){return 7!=Object.defineProperty(r(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";var n=r(5);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){"use strict";t.exports=r(4)},function(t,e,r){"use strict";var n=r(53),i=r(24),o=r(20),s={};r(4)(s,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:i(1,r)}),o(t,e+" Iterator")}},function(t,e,r){"use strict";var n=r(3),i=r(54),o=r(28),s=r(19)("IE_PROTO"),u=function(){},a=function(){var t,e=r(17)("iframe"),n=o.length;for(e.style.display="none",r(29).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;n--;)delete a.prototype[o[n]];return a()};t.exports=Object.create||function(t,e){var r;return null!==t?(u.prototype=n(t),r=new u,u.prototype=null,r[s]=t):r=a(),void 0===e?r:i(r,e)}},function(t,e,r){"use strict";var n=r(11),i=r(3),o=r(55);t.exports=r(6)?Object.defineProperties:function(t,e){i(t);for(var r,s=o(e),u=s.length,a=0;u>a;)n.f(t,r=s[a++],e[r]);return t}},function(t,e,r){"use strict";var n=r(56),i=r(28);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e,r){"use strict";var n=r(12),i=r(18),o=r(58)(!1),s=r(19)("IE_PROTO");t.exports=function(t,e){var r,u=i(t),a=0,c=[];for(r in u)r!=s&&n(u,r)&&c.push(r);for(;e.length>a;)n(u,r=e[a++])&&(~o(c,r)||c.push(r));return c}},function(t,e,r){"use strict";var n=r(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(18),i=r(25),o=r(59);t.exports=function(t){return function(e,r,s){var u,a=n(e),c=i(a.length),f=o(s,c);if(t&&r!=r){for(;c>f;)if((u=a[f++])!=u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){"use strict";var n=r(14),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=n(t))<0?i(t+e,0):o(t,e)}},function(t,e,r){"use strict";var n=r(12),i=r(61),o=r(19)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,r){"use strict";var n=r(15);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";r(63);for(var n=r(0),i=r(4),o=r(7),s=r(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],f=n[c],h=f&&f.prototype;h&&!h[s]&&i(h,s,c),o[c]=o.Array}},function(t,e,r){"use strict";var n=r(64),i=r(65),o=r(7),s=r(18);t.exports=r(22)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,e,r){"use strict";t.exports=function(){}},function(t,e,r){"use strict";t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";var n,i,o,s,u=r(16),a=r(0),c=r(9),f=r(30),h=r(8),l=r(5),p=r(10),d=r(67),v=r(68),y=r(31),m=r(32).set,g=r(73)(),x=r(21),_=r(33),w=r(74),b=r(34),P=a.TypeError,S=a.process,j=S&&S.versions,O=j&&j.v8||"",k=a.Promise,L="process"==f(S),E=function(){},T=i=x.f,M=!!function(){try{var t=k.resolve(1),e=(t.constructor={})[r(1)("species")]=function(t){t(E,E)};return(L||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e&&0!==O.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},C=function(t,e){if(!t._n){t._n=!0;var r=t._c;g(function(){for(var n=t._v,i=1==t._s,o=0,s=function(e){var r,o,s,u=i?e.ok:e.fail,a=e.resolve,c=e.reject,f=e.domain;try{u?(i||(2==t._h&&A(t),t._h=1),!0===u?r=n:(f&&f.enter(),r=u(n),f&&(f.exit(),s=!0)),r===e.promise?c(P("Promise-chain cycle")):(o=R(r))?o.call(r,a,c):a(r)):c(n)}catch(t){f&&!s&&f.exit(),c(t)}};r.length>o;)s(r[o++]);t._c=[],t._n=!1,e&&!t._h&&F(t)})}},F=function(t){m.call(a,function(){var e,r,n,i=t._v,o=H(t);if(o&&(e=_(function(){L?S.emit("unhandledRejection",i,t):(r=a.onunhandledrejection)?r({promise:t,reason:i}):(n=a.console)&&n.error&&n.error("Unhandled promise rejection",i)}),t._h=L||H(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},H=function(t){return 1!==t._h&&0===(t._a||t._c).length},A=function(t){m.call(a,function(){var e;L?S.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),C(e,!0))},U=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw P("Promise can't be resolved itself");(e=R(t))?g(function(){var n={_w:r,_d:!1};try{e.call(t,c(U,n,1),c(I,n,1))}catch(t){I.call(n,t)}}):(r._v=t,r._s=1,C(r,!1))}catch(t){I.call({_w:r,_d:!1},t)}}};M||(k=function(t){d(this,k,"Promise","_h"),p(t),n.call(this);try{t(c(U,this,1),c(I,this,1))}catch(t){I.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(75)(k.prototype,{then:function(t,e){var r=T(y(this,k));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=L?S.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&C(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n;this.promise=t,this.resolve=c(U,t,1),this.reject=c(I,t,1)},x.f=T=function(t){return t===k||t===s?new o(t):i(t)}),h(h.G+h.W+h.F*!M,{Promise:k}),r(20)(k,"Promise"),r(76)("Promise"),s=r(2).Promise,h(h.S+h.F*!M,"Promise",{reject:function(t){var e=T(this);return(0,e.reject)(t),e.promise}}),h(h.S+h.F*(u||!M),"Promise",{resolve:function(t){return b(u&&this===s?k:this,t)}}),h(h.S+h.F*!(M&&r(77)(function(t){k.all(t).catch(E)})),"Promise",{all:function(t){var e=this,r=T(e),n=r.resolve,i=r.reject,o=_(function(){var r=[],o=0,s=1;v(t,!1,function(t){var u=o++,a=!1;r.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,r[u]=t,--s||n(r))},i)}),--s||n(r)});return o.e&&i(o.v),r.promise},race:function(t){var e=this,r=T(e),n=r.reject,i=_(function(){v(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return i.e&&n(i.v),r.promise}})},function(t,e,r){"use strict";t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e,r){"use strict";var n=r(9),i=r(69),o=r(70),s=r(3),u=r(25),a=r(71),c={},f={},h=t.exports=function(t,e,r,h,l){var p,d,v,y,m=l?function(){return t}:a(t),g=n(r,h,e?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(p=u(t.length);p>x;x++)if((y=e?g(s(d=t[x])[0],d[1]):g(t[x]))===c||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=i(v,g,d.value,e))===c||y===f)return y};h.BREAK=c,h.RETURN=f},function(t,e,r){"use strict";var n=r(3);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&n(o.call(t)),e}}},function(t,e,r){"use strict";var n=r(7),i=r(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[i]===t)}},function(t,e,r){"use strict";var n=r(30),i=r(1)("iterator"),o=r(7);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){"use strict";var n=r(0),i=r(32).set,o=n.MutationObserver||n.WebKitMutationObserver,s=n.process,u=n.Promise,a="process"==r(13)(s);t.exports=function(){var t,e,r,c=function(){var n,i;for(a&&(n=s.domain)&&n.exit();t;){i=t.fn,t=t.next;try{i()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(a)r=function(){s.nextTick(c)};else if(!o||n.navigator&&n.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);r=function(){f.then(c)}}else r=function(){i.call(n,c)};else{var h=!0,l=document.createTextNode("");new o(c).observe(l,{characterData:!0}),r=function(){l.data=h=!h}}return function(n){var i={fn:n,next:void 0};e&&(e.next=i),t||(t=i,r()),e=i}}},function(t,e,r){"use strict";var n=r(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,r){"use strict";var n=r(4);t.exports=function(t,e,r){for(var i in e)r&&t[i]?t[i]=e[i]:n(t,i,e[i]);return t}},function(t,e,r){"use strict";var n=r(0),i=r(2),o=r(11),s=r(6),u=r(1)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:n[t];s&&e&&!e[u]&&o.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,r){"use strict";var n=r(1)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:r=!0}},o[n]=function(){return s},t(o)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(8),i=r(2),o=r(0),s=r(31),u=r(34);n(n.P+n.R,"Promise",{finally:function(t){var e=s(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return u(e,t()).then(function(){return r})}:t,r?function(r){return u(e,t()).then(function(){throw r})}:t)}})},function(t,e,r){"use strict";var n=r(8),i=r(21),o=r(33);n(n.S,"Promise",{try:function(t){var e=i.f(this),r=o(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})},function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e){t.exports=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=(t=>{let e=[],r=null;for(r in t)t.hasOwnProperty(r)&&e.push(`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`);return e.join("&")})}])});
//# sourceMappingURL=presentation-router.js.map

/***/ }),

/***/ "./node_modules/presentation-storage/dist/presentation-storage.js":
/*!************************************************************************!*\
  !*** ./node_modules/presentation-storage/dist/presentation-storage.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-structures */ "./node_modules/next-core-structures/dist/next-core-structures.js")):undefined}(this,function(e){return function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=()=>"undefined"!=typeof Storage;t.default=class{constructor(e){this.isPersisted=e,this._myStore=null,s()?this.isPersisted?this._myStore=localStorage:this._myStore=sessionStorage:console.warn("AUGMENTED: No localStorage.")}isSupported(){return s()}getItem(e){if(this._myStore){const t=this._myStore.getItem(e);if(t)return JSON.parse(t)}return null}setItem(e,t){this._myStore&&e&&t&&this._myStore.setItem(e,JSON.stringify(t))}removeItem(e){this._myStore&&this._myStore.removeItem(e)}clear(){this._myStore&&this._myStore.clear()}key(e){return this._myStore?this._myStore.key(e):null}length(){return this._myStore?this._myStore.length:0}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(0)),o=n(r(2));function n(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(){}static getStorage(e,t){let r=null;return(r=t?new o.default(e,t):new s.default(e))&&r.isSupported()?r:null}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(4),o=i(r(0)),n=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=class extends o.default{constructor(e,t){super(e),this._ls=n.default.getStorage(e),this._myStore=new s.AugmentedMap,this.namespace=t,this.isSupported()&&this.namespace&&!e?this._ls.setItem(this.namespace,JSON.stringify(this._myStore.toJSON())):this.isSupported()&&this.namespace&&e&&this.getItem(this.namespace)}isSupported(){return this._ls&&this._ls.isSupported()}getItem(e){let t={};try{t=JSON.parse(this._ls.getItem(this.namespace))}catch(e){return null}this._myStore.clear(),this._myStore.marshall(t);const r=this._myStore.get(e);if(r){let e;try{e=JSON.parse(r)}catch(t){e=r}return e}return null}setItem(e,t){this._myStore||(this._myStore=new s.AugmentedMap),this._myStore.set(e,t),this._ls.setItem(this.namespace,JSON.stringify(this._myStore.toJSON()))}removeItem(e){this._myStore.remove(e),this._ls.setItem(this.namespace,JSON.stringify(this._myStore.toJSON()))}clear(){this._myStore.clear(),this._ls.setItem(this.namespace,JSON.stringify(this._myStore.toJSON()))}key(e){return this._myStore.key(e)}length(){return this._myStore.size()}getNamespacedItems(){return this._myStore}}},function(e,t,r){"use strict";var s=i(r(0)),o=i(r(1)),n=i(r(2));function i(e){return e&&e.__esModule?e:{default:e}}e.exports.LocalStorage=s.default,e.exports.LocalStorageFactory=o.default,e.exports.NamespacedLocalStorage=n.default},function(t,r){t.exports=e}])});
//# sourceMappingURL=presentation-storage.js.map

/***/ }),

/***/ "./node_modules/presentation-table/dist/presentation-table.js":
/*!********************************************************************!*\
  !*** ./node_modules/presentation-table/dist/presentation-table.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"),__webpack_require__(/*! presentation-models */ "./node_modules/presentation-models/dist/presentation-models.js"),__webpack_require__(/*! presentation-decorator */ "./node_modules/presentation-decorator/dist/presentation-decorator.js"),__webpack_require__(/*! presentation-request */ "./node_modules/presentation-request/dist/presentation-request.js"),__webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js")):undefined}(this,function(e,t,i,s,l){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var l=t[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(s,l,function(t){return e[t]}.bind(null,l));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=3)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),l=i(4),n=i(5),r=h(i(6)),o=i(7),a=h(i(8)),c=i(2);function h(e){return e&&e.__esModule?e:{default:e}}const d="augmented.localstorage.autotable.key",u="client",p="material";t.default=class extends l.DecoratorView{constructor(e){super(e);const t=this.style?this.style+" ":"";if(e&&e.theme?this.theme=`${t}${e.theme}`:this.theme=`${t}${p}`,e&&e.linkable?this.linkable=e.linkable:this.linkable=!1,e&&e.links?this.links=e.links:this.links={wholeRow:!0,column:"",link:"rowLink"},e&&e.selectable?this.selectable=e.selectable:this.selectable=!1,e&&e.sortable?this.sortable=e.sortable:this.sortable=!1,e&&e.sortStyle?this.sortStyle=e.sortStyle:this.sortStyle=u,e&&e.sortKey?this.sortKey=e.sortKey:this.sortKey=null,e&&e.display?this.display=e.display:this.display=null,e&&e.pagination?this.renderPaginationControl=e.pagination:this.renderPaginationControl=!1,e&&e.paginationAPI?this.paginationAPI=e.paginationAPI:this.paginationAPI=null,e&&e.description?this.description=e.description:this.description="",e&&e.localStorage?this.localStorage=e.localStorage:this.localStorage=!1,e&&e.localStorageKey?this.localStorageKey=e.localStorageKey:this.localStorageKey=d,e&&e.editable?this.editable=e.editable:this.editable=!1,e&&e.crossOrigin?this.crossOrigin=e.crossOrigin:this.crossOrigin=!1,e&&e.lineNumbers?this.lineNumbers=e.lineNumbers:this.lineNumbers=!1,e&&e.uri?this.uri=e.uri:this.uri=!1,e&&e.data?this.data=e.data:this.data=[],this._columns={},this.isInitalized=!1,this.pageControlBound=!1,this.model||(this.model=new c.Model),this.collection&&this.collection.reset(),!this.collection&&this.paginationAPI?(this.collection=c.PaginationFactory.getPaginatedCollection(this.paginationAPI),this.paginationAPI=this.collection.paginationAPI,this.localStorage=!1):!this.collection&&this.localStorage?this.collection=new c.LocalStorageCollection:this.collection||(this.collection=new c.Collection),e&&e.schema)if((0,s.isObject)(e.schema))this.schema=e.schema;else{let t=null;try{(t=JSON.parse(e.schema))&&(0,s.isObject)(t)&&(this.schema=t)}catch(e){}this.schema||(this.retrieveSchema(e.schema),this.isInitalized=!1)}else this.schema=null;this.uri&&this.collection&&(this.collection.uri=e.uri),this.data&&Array.isArray(this.data)&&this.populate(this.data),e&&e.localStorageKey&&!e.uri&&(this.localStorageKey=e.localStorageKey,this.uri=null),this.collection&&this.uri&&(this.collection.uri=this.uri),this.collection&&(this.collection.crossOrigin=this.crossOrigin),this.schema?(this.name&&""!==this.name||!this.schema.title||(this.name=this.schema.title,this.name.split(" ").join("")),this.description&&""!==this.description||!this.schema.description||(this.description=this.schema.description),this.isInitalized||(this._columns=this.schema.properties,this.collection.schema=this.schema,this.isInitalized=!0)):this.isInitalized=!1}setTheme(e){const t=a.default.selector(this.el);if(t){let i=t.querySelector("table");i&&i.setAttribute("class",e)}this.theme=e}rowLink(e){return""}sortBy(e){e&&(this.editable||!this.editable&&this.sortKey!==e)&&(this.sortKey=e,this.collection.sortByKey(e),this.refresh())}currentPage(){return this.collection.currentPage}totalPages(){return this.collection.totalPages}nextPage(){this.collection.nextPage(),this.refresh()}previousPage(){this.collection.previousPage(),this.refresh()}goToPage(e){this.collection.goToPage(e),this.refresh()}firstPage(){this.collection.firstPage(),this.refresh()}lastPage(){this.collection.lastPage(),this.refresh()}editCell(e,t,i){if(e&&t){let s=this.collection.at(e),l=this.columns[t];s&&l&&s.set(l,i)}}copyCell(e,t,i,s){if(e&&t&&i&&s){let i=this.collection.at(e),s=this.columns[t],l=this.collection.at(row);i&&s&&l&&l.set(s,value1)}}clearCell(e,t){this.editCell(e,t,null)}render(){if(!this.isInitalized)return this;let e;if(this.template){if(this.showProgressBar(!0),this.el&&(e="string"==typeof this.el?document.querySelector(this.el):this.el)){let t=e.querySelector("tbody"),i=e.querySelector("thead");if(this.sortable&&this._unbindSortableColumnEvents(),this.editable&&this._unbindCellChangeEvents(),this._columns&&Object.keys(this._columns).length>0){for(;i.hasChildNodes();)i.removeChild(i.lastChild);(0,n.directDOMTableHeader)(i,this._columns,this.lineNumbers,this.sortKey,this.display,this.selectable)}else if(i)for(;i.hasChildNodes();)i.removeChild(i.lastChild);if(this.collection&&this.collection.length>0&&t){for(;t.hasChildNodes();)t.removeChild(t.lastChild);this.editable?(0,n.directDOMEditableTableBody)(t,this.collection.toJSON(),this._columns,this.lineNumbers,this.sortKey,this.display,this.selectable,this.name):(0,n.directDOMTableBody)(t,this.collection.toJSON(),this._columns,this.lineNumbers,this.sortKey,this.display,this.selectable,this.name,this.linkable,this.links,this[this.links.link])}else for(;t.hasChildNodes();)t.removeChild(t.lastChild)}}else{if(this.template="notused",this.showProgressBar(!0),this.el&&(e="string"==typeof this.el?document.querySelector(this.el):this.el)){e.innerHTML="";let t=document.createElement("progress"),i=document.createTextNode("Please wait.");t.appendChild(i),e.appendChild(t),(0,n.directDOMTableCompile)(e,this.name,this.description,this._columns,this.collection.toJSON(),this.lineNumbers,this.sortKey,this.editable,this.display,this.selectable,this.linkable,this.links,this[this.links.link]),this.renderPaginationControl&&(0,n.directDOMPaginationControl)(e,this.currentPage(),this.totalPages()),(t=document.createElement("p")).classList.add("message"),e.appendChild(t)}this.renderPaginationControl&&this._bindPaginationControlEvents()}return this.delegateEvents(),this.sortable&&this._bindSortableColumnEvents(),this.editable&&this._bindCellChangeEvents(),this.showProgressBar(!1),this.setTheme(this.theme),this}retrieveSchema(e){const t=this;let i=null;(0,o.request)({url:e,contentType:"application/json",dataType:"json",success:(e,s)=>{const l={schema:i="string"==typeof e?JSON.parse(e):e};t.initialize(l)},error:(e,t)=>{this.showMessage("AutomaticTable Failed to fetch schema!!")}})}fetch(){this.showProgressBar(!0);const e=this;console.debug(this.uri),this.uri&&(this.collection.uri=this.uri),this.collection.fetch({reset:!0,success(){e.showProgressBar(!1),e.sortKey=null,e.populate(e.collection.toJSON()),e.refresh()},error(){e.showProgressBar(!1),e.showMessage("AutomaticTable fetch failed!")}})}save(e){if(this.editable||e){this.showProgressBar(!0);const e=this,t=function(){return e.showProgressBar(!1),!0},i=function(){return e.showProgressBar(!1),e.showMessage("AutomaticTable save failed!"),!1};this.collection.save({reset:!0,success(){t()},error(){i()}})}return!1}populate(e){e&&Array.isArray(e)&&(this.sortKey=null,this.data=e,this.collection.reset(this.data))}clear(){this.sortKey=null,this.data=[],this.collection.reset(null)}refresh(){return this.render()}saveCell(e){const t=e.target,i=this.collection.at(parseInt(t.getAttribute(n.TABLE_DATA_ATTRIBUTES.INDEX)));let s=t.value;"number"===t.getAttribute("type")&&(s=parseInt(t.value)),i.set(t.getAttribute(n.TABLE_DATA_ATTRIBUTES.NAME),s)}_bindCellChangeEvents(){let e="string"==typeof this.el?this.el:this.el.localName,t=[].slice.call(document.querySelectorAll(e+" table tr td input")),i=0,s=t.length;for(i=0;i<s;i++)t[i].addEventListener("change",this.saveCell.bind(this),!1);for(i=0,s=(t=[].slice.call(document.querySelectorAll(e+" table tr td select"))).length,i=0;i<s;i++)t[i].addEventListener("change",this.saveCell.bind(this),!1)}_unbindCellChangeEvents(){let e="string"==typeof this.el?this.el:this.el.localName,t=[].slice.call(document.querySelectorAll(e+" table tr td input")),i=0,s=t.length;for(i=0;i<s;i++)t[i].removeEventListener("change",this.saveCell,!1);for(i=0,s=(t=[].slice.call(document.querySelectorAll(e+" table tr td select"))).length,i=0;i<s;i++)t[i].removeEventListener("change",this.saveCell,!1)}exportTo(e){let t="";return t="csv"===e?(0,n.csvTableCompile)(this.name,this.description,this._columns,this.collection.toJSON()):"tsv"===e?(0,n.tsvTableCompile)(this.name,this.description,this._columns,this.collection.toJSON()):(0,n.defaultTableCompile)(this.name,this.description,this._columns,this.collection.toJSON(),!1,null)}_unbindPaginationControlEvents(){if(this.pageControlBound){let e="string"==typeof this.el?this.el:this.el.localName,t=document.querySelector(e+" div.paginationControl span.first"),i=document.querySelector(e+" div.paginationControl span.previous"),s=document.querySelector(e+" div.paginationControl span.next"),l=document.querySelector(e+" div.paginationControl span.last");t&&t.removeEventListener("click",this.firstPage,!1),i&&i.removeEventListener("click",this.previousPage,!1),s&&s.removeEventListener("click",this.nextPage,!1),l&&l.removeEventListener("click",this.lastPage,!1),this.pageControlBound=!1}}_bindPaginationControlEvents(){if(!this.pageControlBound){let e="string"==typeof this.el?this.el:this.el.localName,t=document.querySelector(e+" div.paginationControl span.first"),i=document.querySelector(e+" div.paginationControl span.previous"),s=document.querySelector(e+" div.paginationControl span.next"),l=document.querySelector(e+" div.paginationControl span.last");t&&t.addEventListener("click",this.firstPage.bind(this),!1),i&&i.addEventListener("click",this.previousPage.bind(this),!1),s&&s.addEventListener("click",this.nextPage.bind(this),!1),l&&l.addEventListener("click",this.lastPage.bind(this),!1),this.pageControlBound=!0}}_deriveEventTarget(e){let t=null;return e&&(t=e.target.getAttribute(n.TABLE_DATA_ATTRIBUTES.NAME)),t}_sortByHeaderEvent(e){let t=this._deriveEventTarget(e);this.sortBy(t)}_unbindSortableColumnEvents(){if(this.el&&this.sortable){let e,t=0,i=(e="string"==typeof this.el?document.querySelectorAll(this.el+" table tr th"):document.querySelectorAll(this.el.localName+" table tr th")).length;for(t=0;t<i;t++)e[t].removeEventListener("click",this._sortByHeaderEvent,!1)}}_bindSortableColumnEvents(){if(this.el&&this.sortable){let e,t=0,i=(e="string"==typeof this.el?document.querySelectorAll(this.el+" table tr th"):document.querySelectorAll(this.el.localName+" table tr th")).length;for(t=0;t<i;t++)"lineNumber"===e[t].getAttribute(n.TABLE_DATA_ATTRIBUTES.NAME)||e[t].addEventListener("click",this._sortByHeaderEvent.bind(this),!1)}}compileTemplate(){return""}setURI(e){this.uri=e,this.collection.uri=e}setSchema(e){this.schema=e,this._columns=e.properties,this.collection.reset(),this.collection.schema=e,this.uri&&(this.collection.uri=this.uri)}showProgressBar(e){if(this.el){let t="string"==typeof this.el?document.querySelector(this.el):this.el;if(t){let i=t.querySelector("progress");i&&(i.style.display=e?"block":"none",i.style.visibility=e?"visible":"hidden")}}}showMessage(e){if(this.el){let t=("string"==typeof this.el?document.querySelector(this.el):this.el).querySelector("p[class=message]");t&&(t.innerHTML=e)}}validate(){let e=this.collection?this.collection.validate():null;return!this.collection.isValid()&&e&&e.messages?this.showMessage((0,r.default)(e.messages)):this.showMessage(""),e}isValid(){return!this.collection||this.collection.isValid()}remove(){if(this.undelegateEvents(),this.off(),this.stopListening(),this.el){const e=a.default.selector(this.el);e&&(e.innerHTML="")}return a.default.empty(this.el),this}getSelected(){const e=Object.keys(this.model.attributes),t=e.length,i=[];let s=0;for(s=0;s<t;s++)if(e[s].includes("row-")&&!0===this.model.attributes[e[s]]){const t=Number(e[s].substring(4));i.push(this.collection.at(t))}return i}getSelectedIndex(){const e=Object.keys(this.model.attributes),t=e.length,i=[];let s=0;for(s=0;s<t;s++)e[s].includes("row-")&&!0===this.model.attributes[e[s]]&&i.push(Number(e[s].substring(4)));return i}removeRows(e){const t=e.length;let i=0;for(i=0;i<t;i++){const t=e[i];t.uri||(t.uri=this.uri+"/"+t.id),t.destroy()}}}},function(t,i){t.exports=e},function(e,i){e.exports=t},function(e,t,i){"use strict";var s=h(i(0)),l=h(i(9)),n=h(i(10)),r=h(i(11)),o=h(i(12)),a=h(i(13)),c=h(i(14));function h(e){return e&&e.__esModule?e:{default:e}}e.exports.AutomaticTable=s.default,e.exports.BigDataTable=l.default,e.exports.EditableBigDataTable=n.default,e.exports.EditableLocalStorageTable=r.default,e.exports.EditableTable=o.default,e.exports.LocalStorageTable=a.default,e.exports.Spreadsheet=c.default},function(e,t){e.exports=i},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=t.TABLE_DATA_ATTRIBUTES={NAME:"data-name",TYPE:"data-type",DESCRIPTION:"data-description",INDEX:"data-index",LABEL:"data-label",SORT_CLASS:"sorted"},l=t.csvTableCompile=((e,t,i,s,l)=>{let n,r,o,a,c,h="";if(l||(l=","),i){let e,t;for(e in i)i.hasOwnProperty(e)&&(t=i[e],h=h+e+l);h=h.slice(0,-1),h+="\n"}const d=s.length;for(n=0;n<d;n++){for(o in r=s[n])r.hasOwnProperty(o)&&(c=typeof(a=r[o]),h=h+a+l);h=h.slice(0,-1),h+="\n"}return h}),n=(t.tsvTableCompile=((e,t,i,s)=>l(e,t,i,s,"\t")),t.defaultTableCompile=((e,t,i,l,o,a,c,h)=>{let d=`<table ${s.NAME}="${e}" ${s.DESCRIPTION}="${t}">`;return e&&(d+="<caption",t&&(d+=` title="${t}"`),d+=`>${e}</caption>`),d+="<thead>",d+=n(i,o,a,h),d+="</thead><tbody>",l&&(d+=c?editableTableBody(l,i,o,a,h):r(l,i,o,a,h)),d+="</tbody></table>"}),t.defaultTableHeader=((e,t,i,l)=>{let n="";if(e){let l,r;for(l in n+="<tr>",t&&(n+=`<th ${s.NAME}="lineNumber">#</th>`),e)e.hasOwnProperty(l)&&(r=e[l],n+=`<th ${s.NAME}="${l}" ${s.DESCRIPTION}="${r.description}" ${s.TYPE}="${r.type}"`,i===l&&(n=n+' class="'+s.SORT_CLASS+'"'),n=n+">"+l+"</th>");n+="</tr>"}return n})),r=t.defaultTableBody=((e,t,i,l,n)=>{let r,o,a,c,h,d="",u=e.length;for(r=0;r<u;r++){for(a in o=e[r],d+="<tr>",i&&(d=d+'<td class="label number">'+(r+1)+"</td>"),o)o.hasOwnProperty(a)&&(c=o[a],d=d+"<td "+s.TYPE+'="'+(h=typeof c)+'" class="'+h,l===a&&(d=d+" "+s.SORT_CLASS),d=d+'">'+c+"</td>");d+="</tr>"}return d}),o=(t.directDOMTableCompile=((e,t,i,l,n,r,h,d,u,p,m,b,f)=>{const g=document.createElement("table"),y=document.createElement("thead"),C=document.createElement("tbody");let v,E;g.setAttribute("data-"+t,t),g.setAttribute(s.NAME,t),g.setAttribute(s.DESCRIPTION,i),i&&(v=document.createElement("caption"),t&&v.setAttribute("title",t),E=document.createTextNode(i),v.appendChild(E),g.appendChild(v)),o(y,l,r,h,u,p),g.appendChild(y),g.appendChild(C),n&&(d?c(C,n,l,r,h,u,p,t,m,b,f):a(C,n,l,r,h,u,p,t,m,b,f)),e.appendChild(g)}),t.directDOMTableHeader=((e,t,i,l,n,r)=>{if(t&&e){const o=document.createElement("tr");let a,c,h,d;for(h in r&&((a=document.createElement("th")).setAttribute(s.NAME,"select"),c=document.createTextNode("❏"),a.appendChild(c),o.appendChild(a)),i&&((a=document.createElement("th")).setAttribute(s.NAME,"lineNumber"),c=document.createTextNode("#"),a.appendChild(c),o.appendChild(a)),t){let e=!0;null!==n&&(e=-1!==n.indexOf(h)),e&&t.hasOwnProperty(h)&&(d=t[h],(a=document.createElement("th")).setAttribute(s.NAME,h),a.setAttribute(s.DESCRIPTION,d.description),a.setAttribute(s.TYPE,d.type),l===h&&a.classList.add(s.SORT_CLASS),c=document.createTextNode(h),a.appendChild(c),o.appendChild(a))}e.appendChild(o)}})),a=t.directDOMTableBody=((e,t,i,l,n,r,o,a,c,h,d)=>{const u=t.length;let p,m,b,f,g,y,C,v;for(p=0;p<u;p++){for(b in m=t[p],v=document.createElement("tr"),o&&((y=document.createElement("td")).setAttribute(s.NAME,"select"),(C=document.createElement("input")).type="checkbox",C.name=String(p),C.value=String(p),C.setAttribute("data-"+a,"row-"+p),y.appendChild(C),y.classList.add("label","select"),v.appendChild(y)),l&&(y=document.createElement("td"),C=document.createTextNode(String(p+1)),y.appendChild(C),y.classList.add("label","number"),v.appendChild(y)),i){let e=!0;if(null!==r&&(e=-1!==r.indexOf(b)),e&&m.hasOwnProperty(b)){if(g=typeof(f=m[b]),y=document.createElement("td"),C=document.createTextNode(f),c&&h&&d&&(h.column===b||h.wholeRow)){const e=document.createElement("a");e.href=d(m),e.appendChild(C),y.appendChild(e)}else y.appendChild(C);y.classList.add(g),n===b&&y.classList.add(s.SORT_CLASS),y.setAttribute(s.TYPE,g),y.setAttribute(s.LABEL,b),v.appendChild(y)}}e.appendChild(v)}}),c=t.directDOMEditableTableBody=((e,t,i,l,n,r,o,a)=>{const c=t.length,h=l;let d,u,p,m,b,f,g,y,C,v;for(d=0;d<c;d++){for(p in u=t[d],y=document.createElement("tr"),o&&((f=document.createElement("td")).setAttribute(s.NAME,"select"),(g=document.createElement("input")).type="checkbox",g.name=String(d),g.value=String(d),f.appendChild(g),f.classList.add("label","select"),y.appendChild(f)),h&&(f=document.createElement("td"),g=document.createTextNode(String(d+1)),f.appendChild(g),f.classList.add("label","number"),y.appendChild(f)),u){let e=!0;if(null!==r&&(e=-1!==r.indexOf(p)),e&&u.hasOwnProperty(p)){if(v=i[p]?i[p]:{},b=typeof(m=u[p]),(f=document.createElement("td")).classList.add(b),n===p&&f.classList.add(s.SORT_CLASS),f.setAttribute(s.TYPE,b),f.setAttribute(s.LABEL,p),"object"===b)if(Array.isArray(m)){let e,t,i=0,s=m.length;for(C=document.createElement("select"),i=0;i<s;i++)(e=document.createElement("option")).setAttribute("value",m[i]),t=document.createTextNode(m[i]),e.appendChild(t),C.appendChild(e)}else(C=document.createElement("textarea")).value=JSON.stringify(m);else if("boolean"===b)(C=document.createElement("input")).setAttribute("type","checkbox"),!0===m&&C.setAttribute("checked","checked"),C.value=m;else if("number"===b)(C=document.createElement("input")).setAttribute("type","number"),C.value=m;else if("string"===b&&v.enum){C=document.createElement("select");let e,t,i=0,s=v.enum.length;for(i=0;i<s;i++)(e=document.createElement("option")).setAttribute("value",v.enum[i]),t=document.createTextNode(v.enum[i]),m===v.enum[i]&&e.setAttribute("selected","selected"),e.appendChild(t),C.appendChild(e)}else"string"===b&&"email"===v.format?((C=document.createElement("input")).setAttribute("type","email"),C.value=m):"string"===b&&"uri"===v.format?((C=document.createElement("input")).setAttribute("type","url"),C.value=m):"string"===b&&"date-time"===v.format?((C=document.createElement("input")).setAttribute("type","datetime"),C.value=m):((C=document.createElement("input")).setAttribute("type","text"),C.value=m);"string"===b&&v.pattern&&C.setAttribute("pattern",v.pattern),v.minimum&&C.setAttribute("min",v.minimum),v.maximum&&C.setAttribute("max",v.maximum),"string"===b&&v.minlength&&C.setAttribute("minlength",v.minlength),"string"===b&&v.maxlength&&C.setAttribute("maxlength",v.maxlength),C.setAttribute(s.NAME,p),C.setAttribute(s.INDEX,d),C.setAttribute("data-"+a,a),f.appendChild(C),y.appendChild(f)}}e.appendChild(y)}});t.directDOMPaginationControl=((e,t,i)=>{let s,l,n;(s=document.createElement("div")).classList.add("paginationControl"),(l=document.createElement("span")).classList.add("first"),n=document.createTextNode("<< First"),l.appendChild(n),s.appendChild(l),(l=document.createElement("span")).classList.add("previous"),n=document.createTextNode("< Previous"),l.appendChild(n),s.appendChild(l),(l=document.createElement("span")).classList.add("current"),n=document.createTextNode(`${t} of ${i}`),l.appendChild(n),s.appendChild(l),(l=document.createElement("span")).classList.add("next"),n=document.createTextNode("Next >"),l.appendChild(n),s.appendChild(l),(l=document.createElement("span")).classList.add("last"),n=document.createTextNode("Last >>"),l.appendChild(n),s.appendChild(l),e.appendChild(s)})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e=>{let t="";if(e&&e.length>0){t+='<ul class="errors">';const i=e.length;let s=0,l=0;for(s=0;s<i;s++){const i=e[s].errors.length;for(l=0;l<i;l++)t=t+"<li>"+e[s].errors[l]+"</li>"}t+="</ul>"}return t})},function(e,t){e.exports=s},function(e,t){e.exports=l},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(i(0));t.default=class extends s.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.sortable=!0,super(e),this.renderPaginationControl=!0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(i(0));t.default=class extends s.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.sortable=!0,e.editable=!0,super(e),this.renderPaginationControl=!0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(i(0));t.default=class extends s.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.sortable=!0,e.editable=!0,e.localStorage=!0,super(e),this.renderPaginationControl=!0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(i(0));t.default=class extends s.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.editable=!0,super(e)}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(i(0));t.default=class extends s.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.sortable=!0,e.editable=!1,e.localStorage=!0,super(e),this.renderPaginationControl=!0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),l=function(e){return e&&e.__esModule?e:{default:e}}(i(0)),n=i(2);t.default=class extends l.default{constructor(e){if(super(e),this.lineNumbers=!0,this.sortable=!0,this.editable=!0,e&&e.pagination?this.renderPaginationControl=e.pagination:this.renderPaginationControl=!1,e&&e.rows?this.rows=e.rows:this.rows=10,e&&e.columns?this.columns=e.columns:this.rows=5,this.collection?this.collection.reset():!this.collection&&this.localStorage?this.collection=new n.LocalStorageCollection:this.collection||(this.collection=new n.Collection),e){if(e.schema)if((0,s.isObject)(e.schema))this.schema=e.schema;else{let t=null;try{(t=JSON.parse(e.schema))&&(0,s.isObject)(t)&&(this.schema=t)}catch(e){}this.schema||(this.retrieveSchema(e.schema),this.isInitalized=!1)}e.el&&(this.el=e.el),e.uri&&(this.uri=e.uri,this.collection.url=e.uri),e.data&&Array.isArray(e.data)&&this.populate(e.data),e.sortable&&(this.sortable=e.sortable),e.lineNumbers&&(this.lineNumbers=e.lineNumbers),e.localStorageKey&&!e.uri&&(this.localStorageKey=e.localStorageKey,this.uri=null)}if(this.collection&&this.uri&&(this.collection.url=this.uri),this.collection&&(this.collection.crossOrigin=this.crossOrigin),this.schema)this.name&&""!==this.name||!this.schema.title||(this.name=this.schema.title),this.description&&""!==this.description||!this.schema.description||(this.description=this.schema.description),this.isInitalized||(this._columns=this.schema.properties,this.collection.schema=this.schema);else{this.schema={$schema:"http://json-schema.org/draft-04/schema#",title:"untitled",type:"object",description:"",properties:{}};let e=0;for(e=0;e<this.columns;e++)this.schema.properties[String.fromCharCode(65+e)]={description:"",type:"string"};this._columns=this.schema.properties,this.collection.schema=this.schema}this._generate(),this.collection.set(this.data),this.isInitalized=!0}_generate(){if(this.schema&&this.schema.properties){let e=0,t=0,i=Object.keys(this.schema.properties),s=i.length,l={};for(this.data=[],t=0;t<this.rows;t++){for(l={},e=0;e<s;e++)l[i[e]]="";this.data.push(l)}}}}}])});
//# sourceMappingURL=presentation-table.js.map

/***/ }),

/***/ "./node_modules/presentation-view/dist/presentation-view.js":
/*!******************************************************************!*\
  !*** ./node_modules/presentation-view/dist/presentation-view.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"),__webpack_require__(/*! next-core-object */ "./node_modules/next-core-object/dist/next-core-object.js"),__webpack_require__(/*! lodash.bind */ "./node_modules/lodash.bind/index.js")):undefined}(this,function(e,t,i){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=1)}([function(t,i){t.exports=e},function(e,t,i){"use strict";var s=function(e){return e&&e.__esModule?e:{default:e}}(i(2));e.exports.View=s.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(i(3)),n=i(0);t.default=class extends s.default{constructor(e){super(e)}render(){if(this._el&&this.template){let e=this._el;(0,n.isString)(this._el)&&(e=document.querySelector(this._el)),e&&(e.innerHTML=this.template)}return this}remove(){if(this.undelegateEvents(),this.off(),this.stopListening(),this._el){let e=this._el;(0,n.isString)(this._el)&&(e=document.querySelector(this._el)),e&&(e.innerHTML="")}return this}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(4),n=i(0);const r=i(5),l=/^(\S+)\s*(.*)$/;t.default=class extends s.AugmentedObject{constructor(e){super(e),e&&e.name?this._name=e.name:this._name="Untitled",e&&e.permissions?this._permissions=e.permissions:this._permissions={include:[],exclude:[]},e&&e.tagName?this.tagName=e.tagName:this.tagName="div",e&&e.el?this._el=e.el:this._el="",e&&e.model?this.model=e.model:this.model=null,e&&e.collection?this.collection=e.collection:this.collection=null,e&&e.id?this.id=e.id:this.id=0,e&&e.className?this._style=e.className:this._style="",e&&e.style?this._style=e.style:this._style="",e&&e.attributes?this.attributes=e.attributes:this.attributes={},this.cid=(0,n.uniqueId)("view"),e&&e.noEL||this._ensureElement(),e&&e.template?this.template=e.template:this.template="",this.initialize(e)}get el(){return this._el}set el(e){this._el=e}init(e){}initialize(e){return this.options=e,this.init(e),this}beforeRender(){return this}render(){return this}afterRender(){return this}remove(){return this._removeElement(),this.stopListening(),this}_removeElement(){let e=this._el;this._el&&(0,n.isString)(this._el)&&(e=document.querySelector(this._el)),e&&(e.innerHTML="")}setElement(e){return this.undelegateEvents(),this._el=e,this.delegateEvents(),this}delegateEvents(e){if(e||(e=(0,n.result)(this,"events")),!e)return this;let t;for(t in this.undelegateEvents(),e){let i=e[t];if((0,n.isFunction)(i)||(i=this[i]),!i)continue;const s=t.match(l);this.delegate(s[1],s[2],r(i,this))}return this}delegate(e,t,i){const s=document.querySelectorAll(t);if(s){const t=Array.from(s);let n=0;const r=t.length;for(n=0;n<r;n++)t[n].addEventListener(e,i)}return this}undelegateEvents(){if(this._el){let e=this._el;if((0,n.isString)(this._el)&&(e=document.querySelector(this._el)),e){const t=e.cloneNode(!0);t&&t.parentNode&&e.parentNode.replaceChild(t,e)}}return this}undelegate(e,t,i){if(this._el){let s=this._el;if((0,n.isString)(this._el)&&(s=document.querySelector(this._el)),s){const n=s.querySelectorAll(t);if(n){const t=Array.from(n);let s=0;const r=t.length;for(s=0;s<r;s++)t[s].removeEventListener(e,i)}}}return this}_createElement(e){return document.createElement(e)}_ensureElement(){if(this._el)this.setElement(this._el);else{const e=(0,n.extend)({},(0,n.result)(this,"attributes"));this.id&&(e.id=this.id),this._style&&(e.class=this._style);const t=this._createElement(this.tagName),i=document.querySelector("body");i&&i.appendChild(t),t&&this.setElement(t),this._setAttributes(e)}}_setAttributes(e){let t;for(t in e)if(this._el){let i=this._el;(0,n.isString)(this._el)&&(i=document.querySelector(this._el)),i&&i.setAttribute(t,e[t])}}set name(e){this._name=e}get name(){return this._name}addPermission(e,t){t||(t=!1),null===e||Array.isArray(e)||(t?this._permissions.exclude:this._permissions.include).push(e)}removePermission(e,t){if(t||(t=!1),null!==e&&!Array.isArray(e)){const i=t?this._permissions.exclude:this._permissions.include;i.splice(i.indexOf(e),1)}}set permissions(e){this._permissions=e}get permissions(){return this._permissions}clearPermissions(){this._permissions={include:[],exclude:[]}}matchesPermission(e,t){return t||(t=!1),-1!==(t?this._permissions.exclude:this._permissions.include).indexOf(e)}canDisplay(){return!0}}},function(e,i){e.exports=t},function(e,t){e.exports=i}])});
//# sourceMappingURL=presentation-view.js.map

/***/ }),

/***/ "./node_modules/presentation-widget/dist/presentation-widget.js":
/*!**********************************************************************!*\
  !*** ./node_modules/presentation-widget/dist/presentation-widget.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js")):undefined}(this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));e.exports.Widget=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=class{constructor(){}static List(e,t,n,r){let i,u,o,a=n?document.createElement("ol"):document.createElement("ul"),l=0;if(e&&a.setAttribute("id",e),r&&e&&a.setAttribute("data-"+r,e),t&&Array.isArray(t))for(i=t.length,l=0;l<i;l++)(u=document.createElement("li")).setAttribute("data-index",l),o=document.createTextNode(String(t[l])),u.appendChild(o),a.appendChild(u);return a}static DescriptionList(e,t,n){let i,u,o,a,l,c,d=document.createElement("dl"),s=0;if(e&&d.setAttribute("id",e),n&&e&&d.setAttribute("data-"+n,e),t&&(0,r.isObject)(t))for(i=(l=Object.keys(t)).length,s=0;s<i;s++)o=document.createElement("dt"),a=document.createTextNode(String(l[s])),o.appendChild(a),d.appendChild(o),c=t[l[s]],u=document.createElement("dd"),a=document.createTextNode(String(c)),u.appendChild(a),d.appendChild(u);return d}static DataList(e,t,n){let r,i,u=document.createElement("datalist"),o=0;if(e&&u.setAttribute("id",e),n&&e&&u.setAttribute("data-"+n,e),t&&Array.isArray(t))for(r=t.length,o=0;o<r;o++)(i=document.createElement("option")).value=String(t[o]),u.appendChild(i);return u}static Input(e,t,n,r,i,u){if(!e)return null;let o,a=n||"",l=e,c=e.type;if("object"===c)if(Array.isArray(a)){let e,t,n=0,r=a.length;for(o=document.createElement("select"),n=0;n<r;n++)(e=document.createElement("option")).setAttribute("value",a[n]),t=document.createTextNode(a[n]),e.appendChild(t),o.appendChild(e)}else(o=document.createElement("textarea")).value=JSON.stringify(a);else if("boolean"===c)(o=document.createElement("input")).setAttribute("type","checkbox"),!0===a&&o.setAttribute("checked","checked"),o.value=a;else if("number"===c||"integer"===c)(o=document.createElement("input")).setAttribute("type","number"),o.value=a;else if("string"===c&&l.enum){o=document.createElement("select");let e,t,n=0,r=l.enum.length;for(n=0;n<r;n++)(e=document.createElement("option")).setAttribute("value",l.enum[n]),t=document.createTextNode(l.enum[n]),a===l.enum[n]&&e.setAttribute("selected","selected"),e.appendChild(t),o.appendChild(e)}else"string"===c&&"email"===l.format?((o=document.createElement("input")).setAttribute("type","email"),o.value=a):"string"===c&&"uri"===l.format?((o=document.createElement("input")).setAttribute("type","url"),o.value=a):"string"===c&&"date-time"===l.format?((o=document.createElement("input")).setAttribute("type","datetime"),o.value=a):((o=document.createElement("input")).setAttribute("type","text"),o.value=a);return"string"===c&&l.pattern&&o.setAttribute("pattern",l.pattern),l.minimum&&o.setAttribute("min",l.minimum),l.maximum&&o.setAttribute("max",l.maximum),"string"===c&&l.minlength&&o.setAttribute("minlength",l.minlength),"string"===c&&l.maxlength&&o.setAttribute("maxlength",l.maxlength),i&&o.setAttribute("required","true"),t&&o.setAttribute("name",t),r&&o.setAttribute("id",r),u&&t&&o.setAttribute("data-"+u,t),o}}},function(t,n){t.exports=e}])});
//# sourceMappingURL=presentation-widget.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=vendor~main.js.map