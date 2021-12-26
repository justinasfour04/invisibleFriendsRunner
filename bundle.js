/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./static/stylesheet/index.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/stylesheet/index.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Heebo&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  display: block;\r\n  background-color: rgb(180 202 217);\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  font-family: 'Heebo';\r\n  overflow: scroll;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ncanvas {\r\n  border: 5px black solid;\r\n  border-radius: 15px;\r\n}\r\n\r\n.title {\r\n  flex-basis: 20%;\r\n  align-self: flex-start;\r\n  margin-left: 5%;\r\n  width: fit-content;\r\n}\r\n\r\n.score {\r\n  flex-basis: 5%;\r\n  align-self: flex-start;\r\n  margin-left: 5%;\r\n  width: fit-content;\r\n  margin-bottom: 10px;\r\n}", "",{"version":3,"sources":["webpack://./static/stylesheet/index.css"],"names":[],"mappings":"AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Heebo&display=swap');\r\n\r\nbody {\r\n  display: block;\r\n  background-color: rgb(180 202 217);\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  font-family: 'Heebo';\r\n  overflow: scroll;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ncanvas {\r\n  border: 5px black solid;\r\n  border-radius: 15px;\r\n}\r\n\r\n.title {\r\n  flex-basis: 20%;\r\n  align-self: flex-start;\r\n  margin-left: 5%;\r\n  width: fit-content;\r\n}\r\n\r\n.score {\r\n  flex-basis: 5%;\r\n  align-self: flex-start;\r\n  margin-left: 5%;\r\n  width: fit-content;\r\n  margin-bottom: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./static/stylesheet/index.css":
/*!*************************************!*\
  !*** ./static/stylesheet/index.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./static/stylesheet/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cone.ts":
/*!*********************!*\
  !*** ./src/cone.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const constant_1 = __webpack_require__(/*! ./constant */ "./src/constant.ts");
const imageCache_1 = __importStar(__webpack_require__(/*! ./imageCache */ "./src/imageCache.ts"));
const obstacle_1 = __importDefault(__webpack_require__(/*! ./obstacle */ "./src/obstacle.ts"));
const VELOCITY = -150;
class Cone extends obstacle_1.default {
    constructor(ctx, isTopFloor) {
        const cone = imageCache_1.default.getImage(isTopFloor ? imageCache_1.CacheKey.TOP_CONE : imageCache_1.CacheKey.BOTTOM_CONE);
        super(ctx, cone.width, VELOCITY, isTopFloor ? 1 : 2);
    }
    draw() {
        const cone = imageCache_1.default.getImage(this.isTopFloor ? imageCache_1.CacheKey.TOP_CONE : imageCache_1.CacheKey.BOTTOM_CONE);
        this.ctx.drawImage(cone, this.x, this.isTopFloor ? constant_1.TOP_OBSTACLE : constant_1.BOTTOM_OBSTACLE);
    }
    update(secondsPassed = 1) {
        this.x += (this.velocity * secondsPassed);
    }
}
exports["default"] = Cone;


/***/ }),

/***/ "./src/constant.ts":
/*!*************************!*\
  !*** ./src/constant.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SPRITE_WIDTHS = exports.SPRITE_HEIGHT = exports.SPRITE_WIDTH = exports.FRAME_COUNT = exports.BOTTOM_OBSTACLE = exports.TOP_OBSTACLE = exports.BOTTOM_FLOOR = exports.TOP_FLOOR = exports.ZERO_X_POS = void 0;
exports.ZERO_X_POS = 150;
exports.TOP_FLOOR = 200;
exports.BOTTOM_FLOOR = 250;
exports.TOP_OBSTACLE = 355;
exports.BOTTOM_OBSTACLE = 390;
exports.FRAME_COUNT = 18;
exports.SPRITE_WIDTH = 280;
exports.SPRITE_HEIGHT = 430;
exports.SPRITE_WIDTHS = [
    246,
    180,
    211,
    211,
    197,
    277,
    216,
    191,
    230,
    234,
    208,
    207,
    273,
    208,
    195,
    234,
    185,
    243,
];


/***/ }),

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Controller_buttonPressed;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const keys_1 = __importDefault(__webpack_require__(/*! ./keys */ "./src/keys.ts"));
const TOUCH = 'Touch';
const keyMap = new Map([
    ['KeyW', keys_1.default.UP],
    ['ArrowUp', keys_1.default.UP],
    ['KeyS', keys_1.default.DOWN],
    ['ArrowDown', keys_1.default.DOWN],
    ['Space', keys_1.default.SPACE],
    [TOUCH, keys_1.default.SPACE],
]);
class Controller {
    constructor(canvas) {
        _Controller_buttonPressed.set(this, void 0);
        __classPrivateFieldSet(this, _Controller_buttonPressed, new Set(), "f");
        canvas.addEventListener('touchstart', (event) => {
            event.preventDefault();
            if (keyMap.has(TOUCH)
                && __classPrivateFieldGet(this, _Controller_buttonPressed, "f").size === 0
                && !__classPrivateFieldGet(this, _Controller_buttonPressed, "f").has(keyMap.get(TOUCH))) {
                __classPrivateFieldGet(this, _Controller_buttonPressed, "f").add(keyMap.get(TOUCH));
            }
        });
        canvas.addEventListener('touchmove', (event) => {
            event.preventDefault();
        });
        canvas.addEventListener('touchend', (event) => {
            event.preventDefault();
            if (keyMap.has(TOUCH)
                && __classPrivateFieldGet(this, _Controller_buttonPressed, "f").size === 1
                && __classPrivateFieldGet(this, _Controller_buttonPressed, "f").has(keyMap.get(TOUCH))) {
                __classPrivateFieldGet(this, _Controller_buttonPressed, "f").delete(keyMap.get(TOUCH));
            }
        });
        window.addEventListener('keydown', (event) => {
            const { code } = event;
            if (keyMap.has(code)
                && __classPrivateFieldGet(this, _Controller_buttonPressed, "f").size === 0
                && !__classPrivateFieldGet(this, _Controller_buttonPressed, "f").has(keyMap.get(code))) {
                __classPrivateFieldGet(this, _Controller_buttonPressed, "f").add(keyMap.get(code));
            }
        });
        window.addEventListener('keyup', (event) => {
            const { code } = event;
            if (keyMap.has(code)
                && __classPrivateFieldGet(this, _Controller_buttonPressed, "f").size === 1
                && __classPrivateFieldGet(this, _Controller_buttonPressed, "f").has(keyMap.get(code))) {
                __classPrivateFieldGet(this, _Controller_buttonPressed, "f").delete(keyMap.get(code));
            }
        });
    }
    get buttonPressed() {
        return __classPrivateFieldGet(this, _Controller_buttonPressed, "f");
    }
}
exports["default"] = Controller;
_Controller_buttonPressed = new WeakMap();


/***/ }),

/***/ "./src/friend.ts":
/*!***********************!*\
  !*** ./src/friend.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const constant_1 = __webpack_require__(/*! ./constant */ "./src/constant.ts");
const imageCache_1 = __importStar(__webpack_require__(/*! ./imageCache */ "./src/imageCache.ts"));
const keys_1 = __importDefault(__webpack_require__(/*! ./keys */ "./src/keys.ts"));
class Friend {
    constructor(ctx) {
        this.ctx = ctx;
        this.currentFrame = 0;
        this.frameCycle = 0;
        this.minY = constant_1.BOTTOM_FLOOR;
        this.moved = false;
        this.currentImageInAnimation = null;
    }
    checkCollision(obstacle) {
        if (this.currentImageInAnimation !== null && obstacle !== undefined) {
            const distanceFromObstacle = this.currentImageInAnimation.width - obstacle.x;
            if (distanceFromObstacle > 0 && obstacle.x > 0) {
                if ((obstacle.isTopFloor && this.minY === constant_1.TOP_FLOOR)
                    || (!obstacle.isTopFloor && this.minY === constant_1.BOTTOM_FLOOR)) {
                    return true;
                }
            }
        }
        return false;
    }
    passedObstacle(obstacle) {
        if (this.currentImageInAnimation !== null && obstacle !== undefined) {
            const distanceFromObstacle = this.currentImageInAnimation.width - (obstacle.x + obstacle.w);
            if (distanceFromObstacle > 0 && obstacle.x > 0 && obstacle.passed) {
                if ((obstacle.isTopFloor && this.minY === constant_1.BOTTOM_FLOOR)
                    || (!obstacle.isTopFloor && this.minY === constant_1.TOP_FLOOR)) {
                    return true;
                }
            }
        }
        return false;
    }
    draw() {
        this.frameCycle += 1;
        const sprites = imageCache_1.default.getImage(imageCache_1.CacheKey.SPRITES);
        this.currentImageInAnimation = sprites[this.currentFrame % constant_1.FRAME_COUNT];
        if (this.ctx !== null) {
            this.ctx.drawImage(this.currentImageInAnimation, constant_1.ZERO_X_POS, this.minY);
        }
        if (this.frameCycle > constant_1.FRAME_COUNT) {
            this.currentFrame += 1;
            this.frameCycle = 0;
        }
    }
    update(buttonPressed) {
        if (this.moved && !buttonPressed.has(keys_1.default.SPACE)) {
            this.moved = false;
        }
        else if (!this.moved && buttonPressed.has(keys_1.default.SPACE)) {
            this.minY = this.minY === constant_1.BOTTOM_FLOOR ? constant_1.TOP_FLOOR : constant_1.BOTTOM_FLOOR;
            this.moved = true;
        }
        else if (buttonPressed.has(keys_1.default.DOWN)) {
            this.minY = constant_1.BOTTOM_FLOOR;
        }
        else if (buttonPressed.has(keys_1.default.UP)) {
            this.minY = constant_1.TOP_FLOOR;
        }
    }
}
exports["default"] = Friend;


/***/ }),

/***/ "./src/gamebackground.ts":
/*!*******************************!*\
  !*** ./src/gamebackground.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const imageCache_1 = __importStar(__webpack_require__(/*! ./imageCache */ "./src/imageCache.ts"));
const VELOCITY = -75;
class GameBackground {
    constructor(ctx, xPos) {
        this.ctx = ctx;
        this.xPos = xPos;
        [, this.startingX] = xPos;
    }
    draw() {
        const gameBackground = imageCache_1.default.getImage(imageCache_1.CacheKey.BACKGROUND);
        if (this.ctx !== null) {
            this.ctx.drawImage(gameBackground, this.xPos[0], 0);
            this.ctx.drawImage(gameBackground, this.xPos[1], 0);
        }
    }
    update(secondsPassed = 1) {
        if (this.xPos[1] <= 0) {
            [this.xPos[1], this.xPos[0]] = [this.xPos[0], this.xPos[1]];
            this.xPos[1] = this.startingX;
        }
        this.xPos[0] += (VELOCITY * secondsPassed);
        this.xPos[1] += (VELOCITY * secondsPassed);
    }
}
exports["default"] = GameBackground;


/***/ }),

/***/ "./src/imageCache.ts":
/*!***************************!*\
  !*** ./src/imageCache.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CacheKey = void 0;
const cone_png_1 = __importDefault(__webpack_require__(/*! ../static/img/cone.png */ "./static/img/cone.png"));
const spritesheet_png_1 = __importDefault(__webpack_require__(/*! ../static/img/spritesheet.png */ "./static/img/spritesheet.png"));
const background_png_1 = __importDefault(__webpack_require__(/*! ../static/img/background.png */ "./static/img/background.png"));
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const constant_1 = __webpack_require__(/*! ./constant */ "./src/constant.ts");
var CacheKey;
(function (CacheKey) {
    CacheKey[CacheKey["TOP_CONE"] = 0] = "TOP_CONE";
    CacheKey[CacheKey["BOTTOM_CONE"] = 1] = "BOTTOM_CONE";
    CacheKey[CacheKey["BACKGROUND"] = 2] = "BACKGROUND";
    CacheKey[CacheKey["SPRITES"] = 3] = "SPRITES";
})(CacheKey = exports.CacheKey || (exports.CacheKey = {}));
const cache = new Map();
class ImageCache {
    static async loadAllImages(canvas) {
        cache.set(CacheKey.TOP_CONE, await (0, util_1.loadImage)(cone_png_1.default, 0, 0, 321, 400, {
            resizeQuality: 'high',
            resizeHeight: 100,
        }));
        cache.set(CacheKey.BOTTOM_CONE, await (0, util_1.loadImage)(cone_png_1.default, 0, 0, 321, 400, {
            resizeQuality: 'high',
            resizeHeight: 125,
        }));
        cache.set(CacheKey.BACKGROUND, await (0, util_1.loadImage)(background_png_1.default, 0, 0, 2560, 706, {
            resizeQuality: 'high',
            resizeWidth: canvas.width + 60,
            resizeHeight: 410,
        }));
        cache.set(CacheKey.SPRITES, await Promise.all(Array.from({ length: constant_1.FRAME_COUNT }, (_, i) => (0, util_1.loadImage)(spritesheet_png_1.default, (i % constant_1.FRAME_COUNT) * constant_1.SPRITE_WIDTH, 0, constant_1.SPRITE_WIDTHS[i % constant_1.FRAME_COUNT], constant_1.SPRITE_HEIGHT, {
            resizeQuality: 'high',
            resizeHeight: 250,
        }))));
    }
    static getImage(key) {
        return cache.get(key);
    }
}
exports["default"] = ImageCache;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../static/stylesheet/index.css */ "./static/stylesheet/index.css");
const controller_1 = __importDefault(__webpack_require__(/*! ./controller */ "./src/controller.ts"));
const friend_1 = __importDefault(__webpack_require__(/*! ./friend */ "./src/friend.ts"));
const gamebackground_1 = __importDefault(__webpack_require__(/*! ./gamebackground */ "./src/gamebackground.ts"));
const imageCache_1 = __importDefault(__webpack_require__(/*! ./imageCache */ "./src/imageCache.ts"));
const obstacleFactory_1 = __importDefault(__webpack_require__(/*! ./obstacleFactory */ "./src/obstacleFactory.ts"));
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = (document.body.clientWidth / 1.1);
canvas.height = (document.body.clientHeight / 2);
const container = document.createElement('div');
container.className = 'container';
const scoreDiv = document.createElement('div');
scoreDiv.className = 'score';
const scoreText = document.createElement('p');
let score = 0;
const scoreValue = document.createElement('span');
scoreValue.textContent = score.toString(10);
scoreText.innerHTML = `Score: ${scoreValue.innerHTML}`;
scoreText.style.fontSize = '25px';
scoreDiv.appendChild(scoreText);
const titleDiv = document.createElement('div');
titleDiv.className = 'title';
const title = document.createElement('p');
title.innerText = 'INVISIBLE FRIENDS RUNNER';
title.style.fontSize = '40px';
titleDiv.appendChild(title);
container.appendChild(titleDiv);
container.appendChild(scoreDiv);
container.appendChild(canvas);
document.body.appendChild(container);
const controller = new controller_1.default(canvas);
const friend = new friend_1.default(ctx);
const gameBackgroud = new gamebackground_1.default(ctx, [0, canvas.width]);
const obstacleFactory = new obstacleFactory_1.default(ctx);
const lineDash = [25, 30];
let then;
let elapsed;
let pointScored = false;
function update(secondsPassed = 1) {
    friend.update(controller.buttonPressed);
    gameBackgroud.update(secondsPassed);
    obstacleFactory.update(secondsPassed);
}
async function draw() {
    if (ctx !== null) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.save();
        ctx.setLineDash([0]);
        ctx.beginPath();
        ctx.lineTo(canvas.width, 409);
        ctx.moveTo(0, 409);
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.setLineDash(lineDash);
        ctx.beginPath();
        ctx.moveTo(0, 460);
        ctx.lineTo(canvas.width, 460);
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.fillStyle = '#0083A3';
        ctx.rect(0, 0, canvas.width, 410);
        ctx.fill();
        ctx.restore();
        gameBackgroud.draw();
        obstacleFactory.drawTop();
        friend.draw();
        obstacleFactory.drawBottom();
    }
}
async function mainLoop(frameTime) {
    if (frameTime) {
        if (!then) {
            then = frameTime;
        }
        elapsed = (frameTime - then) / 1000;
        update(Math.min(elapsed, 0.1));
        const closestTopObstacle = obstacleFactory.getClosestObstacle(true);
        const cloestBottomObstacle = obstacleFactory.getClosestObstacle(false);
        const topPassed = friend.passedObstacle(closestTopObstacle);
        const bottomPassed = friend.passedObstacle(cloestBottomObstacle);
        const isCollision = friend.checkCollision(closestTopObstacle)
            || friend.checkCollision(cloestBottomObstacle);
        if ((topPassed || bottomPassed) && !isCollision) {
            score += 1;
            scoreValue.textContent = score.toString(10);
            scoreText.innerHTML = `Score: ${scoreValue.innerHTML}`;
        }
        obstacleFactory.create((0, util_1.randomNumber)(0, 1000) % 2 === 0);
        await draw();
        then = frameTime;
        window.requestAnimationFrame(mainLoop);
    }
    else {
        window.requestAnimationFrame(mainLoop);
    }
}
(async () => {
    await imageCache_1.default.loadAllImages(canvas);
    await mainLoop();
})();


/***/ }),

/***/ "./src/keys.ts":
/*!*********************!*\
  !*** ./src/keys.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Keys;
(function (Keys) {
    Keys["UP"] = "UP";
    Keys["DOWN"] = "DOWN";
    Keys["SPACE"] = "SPACE";
})(Keys || (Keys = {}));
exports["default"] = Keys;


/***/ }),

/***/ "./src/obstacle.ts":
/*!*************************!*\
  !*** ./src/obstacle.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Obstacle {
    constructor(ctx, width, dx, currentFloor) {
        this.ctx = ctx;
        this.width = width;
        this.dx = dx;
        this.currentFloor = currentFloor;
        this.xPos = ctx?.canvas.width;
        this.obstaclePassed = false;
    }
    get w() {
        return this.width;
    }
    set x(newXValue) {
        this.xPos = newXValue;
    }
    get x() {
        return this.xPos;
    }
    set velocity(v) {
        this.dx = v;
    }
    get velocity() {
        return this.dx;
    }
    get isTopFloor() {
        return this.currentFloor === 1;
    }
    set isTopFloor(value) {
        this.currentFloor = value ? 1 : 2;
    }
    get passed() {
        return this.obstaclePassed;
    }
    set passed(didPass) {
        this.obstaclePassed = didPass;
    }
}
exports["default"] = Obstacle;


/***/ }),

/***/ "./src/obstacleFactory.ts":
/*!********************************!*\
  !*** ./src/obstacleFactory.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const cone_1 = __importDefault(__webpack_require__(/*! ./cone */ "./src/cone.ts"));
const constant_1 = __webpack_require__(/*! ./constant */ "./src/constant.ts");
const OBSTACLE_CYCLE = 400;
class ObstacleFactory {
    constructor(ctx) {
        this.ctx = ctx;
        this.topFloorObstacleQueue = [];
        this.bottomFloorObstacleQueue = [];
        this.obstacleCycleCount = 0;
    }
    create(isTopFloor) {
        if (this.ctx !== null) {
            if (this.obstacleCycleCount >= OBSTACLE_CYCLE) {
                this.obstacleCycleCount = 0;
                const cone = new cone_1.default(this.ctx, isTopFloor);
                if (isTopFloor) {
                    this.topFloorObstacleQueue.push(cone);
                }
                else {
                    this.bottomFloorObstacleQueue.push(cone);
                }
            }
        }
        this.obstacleCycleCount += 1;
        const oldestTopObstacle = this.topFloorObstacleQueue[0];
        if (oldestTopObstacle?.x < constant_1.ZERO_X_POS) {
            this.topFloorObstacleQueue.shift();
        }
        const oldestBottomObstacle = this.bottomFloorObstacleQueue[0];
        if (oldestBottomObstacle?.x < constant_1.ZERO_X_POS) {
            this.bottomFloorObstacleQueue.shift();
        }
    }
    drawTop() {
        this.topFloorObstacleQueue.forEach((obstacle) => {
            obstacle.draw();
        });
    }
    drawBottom() {
        this.bottomFloorObstacleQueue.forEach((obstacle) => {
            obstacle.draw();
        });
    }
    update(secondsPassed = 1) {
        this.topFloorObstacleQueue.forEach((obstacle) => {
            obstacle.update(secondsPassed);
        });
        this.bottomFloorObstacleQueue.forEach((obstacle) => {
            obstacle.update(secondsPassed);
        });
    }
    getClosestObstacle(isTopFloor) {
        return isTopFloor ? this.topFloorObstacleQueue[0] : this.bottomFloorObstacleQueue[0];
    }
}
exports["default"] = ObstacleFactory;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomNumber = exports.loadImage = void 0;
async function loadImage(image, sx, sy, sw, sh, options) {
    const img = new Image();
    img.src = image;
    return new Promise((resolve) => {
        img.onload = async () => {
            const bitmapImage = await createImageBitmap(img, sx, sy, sw, sh, options);
            resolve(bitmapImage);
        };
    });
}
exports.loadImage = loadImage;
function randomNumber(a, b) {
    const min = a > b ? b : a;
    const max = a > b ? a : b;
    // Use below if final number doesn't need to be whole number
    // return Math.random() * (max - min + 1) + min;
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomNumber = randomNumber;


/***/ }),

/***/ "./static/img/background.png":
/*!***********************************!*\
  !*** ./static/img/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76299800b8f82d775292.png";

/***/ }),

/***/ "./static/img/cone.png":
/*!*****************************!*\
  !*** ./static/img/cone.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dea2d66c0f8cc8724c80.png";

/***/ }),

/***/ "./static/img/spritesheet.png":
/*!************************************!*\
  !*** ./static/img/spritesheet.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "298ab93140d520acc404.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL3N0YXRpYy9zdHlsZXNoZWV0L2luZGV4LmNzcyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL3N0YXRpYy9zdHlsZXNoZWV0L2luZGV4LmNzcz9kYTk5Iiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvLi9zcmMvY29uZS50cyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL3NyYy9jb25zdGFudC50cyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL3NyYy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lLy4vc3JjL2ZyaWVuZC50cyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL3NyYy9nYW1lYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS8uL3NyYy9pbWFnZUNhY2hlLnRzIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvLi9zcmMvb2JzdGFjbGUudHMiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvLi9zcmMvb2JzdGFjbGVGYWN0b3J5LnRzIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnZpc2libGVmcmllbmRzZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaW52aXNpYmxlZnJpZW5kc2dhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ludmlzaWJsZWZyaWVuZHNnYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SGVlYm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAgMjAyIDIxNyk7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5jYW52YXMge1xcclxcbiAgYm9yZGVyOiA1cHggYmxhY2sgc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZmxleC1iYXNpczogMjAlO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlIHtcXHJcXG4gIGZsZXgtYmFzaXM6IDUlO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0YXRpYy9zdHlsZXNoZWV0L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IZWVibyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCAyMDIgMjE3KTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdIZWVibyc7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICBib3JkZXI6IDVweCBibGFjayBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmbGV4LWJhc2lzOiAyMCU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUge1xcclxcbiAgZmxleC1iYXNpczogNSU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBCT1RUT01fT0JTVEFDTEUsIFRPUF9PQlNUQUNMRSB9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IEltYWdlQ2FjaGUsIHsgQ2FjaGVLZXkgfSBmcm9tICcuL2ltYWdlQ2FjaGUnO1xuaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUnO1xuXG5jb25zdCBWRUxPQ0lUWSA9IC0xNTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmUgZXh0ZW5kcyBPYnN0YWNsZSB7XG4gIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBpc1RvcEZsb29yOiBib29sZWFuKSB7XG4gICAgY29uc3QgY29uZSA9IEltYWdlQ2FjaGUuZ2V0SW1hZ2UoXG4gICAgICBpc1RvcEZsb29yID8gQ2FjaGVLZXkuVE9QX0NPTkUgOiBDYWNoZUtleS5CT1RUT01fQ09ORSxcbiAgICApIGFzIEltYWdlQml0bWFwO1xuICAgIHN1cGVyKGN0eCwgY29uZS53aWR0aCwgVkVMT0NJVFksIGlzVG9wRmxvb3IgPyAxIDogMik7XG4gIH1cblxuICBkcmF3KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmUgPSBJbWFnZUNhY2hlLmdldEltYWdlKFxuICAgICAgdGhpcy5pc1RvcEZsb29yID8gQ2FjaGVLZXkuVE9QX0NPTkUgOiBDYWNoZUtleS5CT1RUT01fQ09ORSxcbiAgICApIGFzIEltYWdlQml0bWFwO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShjb25lLCB0aGlzLngsIHRoaXMuaXNUb3BGbG9vciA/IFRPUF9PQlNUQUNMRSA6IEJPVFRPTV9PQlNUQUNMRSk7XG4gIH1cblxuICB1cGRhdGUoc2Vjb25kc1Bhc3NlZDogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgIHRoaXMueCArPSAodGhpcy52ZWxvY2l0eSAqIHNlY29uZHNQYXNzZWQpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgWkVST19YX1BPUyA9IDE1MDtcbmV4cG9ydCBjb25zdCBUT1BfRkxPT1IgPSAyMDA7XG5leHBvcnQgY29uc3QgQk9UVE9NX0ZMT09SID0gMjUwO1xuZXhwb3J0IGNvbnN0IFRPUF9PQlNUQUNMRSA9IDM1NTtcbmV4cG9ydCBjb25zdCBCT1RUT01fT0JTVEFDTEUgPSAzOTA7XG5leHBvcnQgY29uc3QgRlJBTUVfQ09VTlQgPSAxODtcbmV4cG9ydCBjb25zdCBTUFJJVEVfV0lEVEggPSAyODA7XG5leHBvcnQgY29uc3QgU1BSSVRFX0hFSUdIVCA9IDQzMDtcbmV4cG9ydCBjb25zdCBTUFJJVEVfV0lEVEhTID0gW1xuICAyNDYsXG4gIDE4MCxcbiAgMjExLFxuICAyMTEsXG4gIDE5NyxcbiAgMjc3LFxuICAyMTYsXG4gIDE5MSxcbiAgMjMwLFxuICAyMzQsXG4gIDIwOCxcbiAgMjA3LFxuICAyNzMsXG4gIDIwOCxcbiAgMTk1LFxuICAyMzQsXG4gIDE4NSxcbiAgMjQzLFxuXTtcbiIsImltcG9ydCBLZXlzIGZyb20gJy4va2V5cyc7XG5cbmNvbnN0IFRPVUNIID0gJ1RvdWNoJztcbmNvbnN0IGtleU1hcCA9IG5ldyBNYXAoW1xuICBbJ0tleVcnLCBLZXlzLlVQXSxcbiAgWydBcnJvd1VwJywgS2V5cy5VUF0sXG5cbiAgWydLZXlTJywgS2V5cy5ET1dOXSxcbiAgWydBcnJvd0Rvd24nLCBLZXlzLkRPV05dLFxuXG4gIFsnU3BhY2UnLCBLZXlzLlNQQUNFXSxcbiAgW1RPVUNILCBLZXlzLlNQQUNFXSxcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgI2J1dHRvblByZXNzZWQ6IFNldDxLZXlzIHwgdW5kZWZpbmVkPjtcblxuICBwdWJsaWMgZ2V0IGJ1dHRvblByZXNzZWQoKTogU2V0PEtleXMgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy4jYnV0dG9uUHJlc3NlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICB0aGlzLiNidXR0b25QcmVzc2VkID0gbmV3IFNldCgpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGtleU1hcC5oYXMoVE9VQ0gpXG4gICAgICAgICYmIHRoaXMuI2J1dHRvblByZXNzZWQuc2l6ZSA9PT0gMFxuICAgICAgICAmJiAhdGhpcy4jYnV0dG9uUHJlc3NlZC5oYXMoa2V5TWFwLmdldChUT1VDSCkpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy4jYnV0dG9uUHJlc3NlZC5hZGQoa2V5TWFwLmdldChUT1VDSCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGtleU1hcC5oYXMoVE9VQ0gpXG4gICAgICAgICYmIHRoaXMuI2J1dHRvblByZXNzZWQuc2l6ZSA9PT0gMVxuICAgICAgICAmJiB0aGlzLiNidXR0b25QcmVzc2VkLmhhcyhrZXlNYXAuZ2V0KFRPVUNIKSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLiNidXR0b25QcmVzc2VkLmRlbGV0ZShrZXlNYXAuZ2V0KFRPVUNIKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBldmVudDtcbiAgICAgIGlmIChrZXlNYXAuaGFzKGNvZGUpXG4gICAgICAgICYmIHRoaXMuI2J1dHRvblByZXNzZWQuc2l6ZSA9PT0gMFxuICAgICAgICAmJiAhdGhpcy4jYnV0dG9uUHJlc3NlZC5oYXMoa2V5TWFwLmdldChjb2RlKSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLiNidXR0b25QcmVzc2VkLmFkZChrZXlNYXAuZ2V0KGNvZGUpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBldmVudDtcbiAgICAgIGlmIChrZXlNYXAuaGFzKGNvZGUpXG4gICAgICAgICYmIHRoaXMuI2J1dHRvblByZXNzZWQuc2l6ZSA9PT0gMVxuICAgICAgICAmJiB0aGlzLiNidXR0b25QcmVzc2VkLmhhcyhrZXlNYXAuZ2V0KGNvZGUpKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuI2J1dHRvblByZXNzZWQuZGVsZXRlKGtleU1hcC5nZXQoY29kZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBCT1RUT01fRkxPT1IsXG4gIEZSQU1FX0NPVU5ULFxuICBUT1BfRkxPT1IsXG4gIFpFUk9fWF9QT1MsXG59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IEltYWdlQ2FjaGUsIHsgQ2FjaGVLZXkgfSBmcm9tICcuL2ltYWdlQ2FjaGUnO1xuaW1wb3J0IEtleXMgZnJvbSAnLi9rZXlzJztcbmltcG9ydCBPYnN0YWNsZSBmcm9tICcuL29ic3RhY2xlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kIHtcbiAgcHJpdmF0ZSBjdXJyZW50RnJhbWUgPSAwO1xuXG4gIHByaXZhdGUgZnJhbWVDeWNsZSA9IDA7XG5cbiAgcHJpdmF0ZSBtaW5ZOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBtb3ZlZDogYm9vbGVhbjtcblxuICBwcml2YXRlIGN1cnJlbnRJbWFnZUluQW5pbWF0aW9uOiBJbWFnZUJpdG1hcCB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwpIHtcbiAgICB0aGlzLm1pblkgPSBCT1RUT01fRkxPT1I7XG4gICAgdGhpcy5tb3ZlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudEltYWdlSW5BbmltYXRpb24gPSBudWxsO1xuICB9XG5cbiAgY2hlY2tDb2xsaXNpb24ob2JzdGFjbGU6IE9ic3RhY2xlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlSW5BbmltYXRpb24gIT09IG51bGwgJiYgb2JzdGFjbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlzdGFuY2VGcm9tT2JzdGFjbGUgPSB0aGlzLmN1cnJlbnRJbWFnZUluQW5pbWF0aW9uLndpZHRoIC0gb2JzdGFjbGUueDtcbiAgICAgIGlmIChkaXN0YW5jZUZyb21PYnN0YWNsZSA+IDAgJiYgb2JzdGFjbGUueCA+IDApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChvYnN0YWNsZS5pc1RvcEZsb29yICYmIHRoaXMubWluWSA9PT0gVE9QX0ZMT09SKVxuICAgICAgICAgIHx8ICghb2JzdGFjbGUuaXNUb3BGbG9vciAmJiB0aGlzLm1pblkgPT09IEJPVFRPTV9GTE9PUilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwYXNzZWRPYnN0YWNsZShvYnN0YWNsZTogT2JzdGFjbGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2VJbkFuaW1hdGlvbiAhPT0gbnVsbCAmJiBvYnN0YWNsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZUZyb21PYnN0YWNsZSA9IHRoaXMuY3VycmVudEltYWdlSW5BbmltYXRpb24ud2lkdGggLSAob2JzdGFjbGUueCArIG9ic3RhY2xlLncpO1xuICAgICAgaWYgKGRpc3RhbmNlRnJvbU9ic3RhY2xlID4gMCAmJiBvYnN0YWNsZS54ID4gMCAmJiBvYnN0YWNsZS5wYXNzZWQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChvYnN0YWNsZS5pc1RvcEZsb29yICYmIHRoaXMubWluWSA9PT0gQk9UVE9NX0ZMT09SKVxuICAgICAgICAgIHx8ICghb2JzdGFjbGUuaXNUb3BGbG9vciAmJiB0aGlzLm1pblkgPT09IFRPUF9GTE9PUilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuZnJhbWVDeWNsZSArPSAxO1xuICAgIGNvbnN0IHNwcml0ZXMgPSBJbWFnZUNhY2hlLmdldEltYWdlKENhY2hlS2V5LlNQUklURVMpIGFzIEltYWdlQml0bWFwW107XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbkFuaW1hdGlvbiA9IHNwcml0ZXNbdGhpcy5jdXJyZW50RnJhbWUgJSBGUkFNRV9DT1VOVF07XG5cbiAgICBpZiAodGhpcy5jdHggIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmN1cnJlbnRJbWFnZUluQW5pbWF0aW9uLCBaRVJPX1hfUE9TLCB0aGlzLm1pblkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZyYW1lQ3ljbGUgPiBGUkFNRV9DT1VOVCkge1xuICAgICAgdGhpcy5jdXJyZW50RnJhbWUgKz0gMTtcbiAgICAgIHRoaXMuZnJhbWVDeWNsZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGJ1dHRvblByZXNzZWQ6IFNldDxLZXlzIHwgdW5kZWZpbmVkPikge1xuICAgIGlmICh0aGlzLm1vdmVkICYmICFidXR0b25QcmVzc2VkLmhhcyhLZXlzLlNQQUNFKSkge1xuICAgICAgdGhpcy5tb3ZlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMubW92ZWQgJiYgYnV0dG9uUHJlc3NlZC5oYXMoS2V5cy5TUEFDRSkpIHtcbiAgICAgIHRoaXMubWluWSA9IHRoaXMubWluWSA9PT0gQk9UVE9NX0ZMT09SID8gVE9QX0ZMT09SIDogQk9UVE9NX0ZMT09SO1xuICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChidXR0b25QcmVzc2VkLmhhcyhLZXlzLkRPV04pKSB7XG4gICAgICB0aGlzLm1pblkgPSBCT1RUT01fRkxPT1I7XG4gICAgfSBlbHNlIGlmIChidXR0b25QcmVzc2VkLmhhcyhLZXlzLlVQKSkge1xuICAgICAgdGhpcy5taW5ZID0gVE9QX0ZMT09SO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEltYWdlQ2FjaGUsIHsgQ2FjaGVLZXkgfSBmcm9tICcuL2ltYWdlQ2FjaGUnO1xuXG5jb25zdCBWRUxPQ0lUWSA9IC03NTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJhY2tncm91bmQge1xuICBwcml2YXRlIHN0YXJ0aW5nWDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsLFxuICAgIHByaXZhdGUgeFBvczogW251bWJlciwgbnVtYmVyXSxcbiAgKSB7XG4gICAgWywgdGhpcy5zdGFydGluZ1hdID0geFBvcztcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZ2FtZUJhY2tncm91bmQgPSBJbWFnZUNhY2hlLmdldEltYWdlKENhY2hlS2V5LkJBQ0tHUk9VTkQpIGFzIEltYWdlQml0bWFwO1xuICAgIGlmICh0aGlzLmN0eCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGdhbWVCYWNrZ3JvdW5kLCB0aGlzLnhQb3NbMF0sIDApO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGdhbWVCYWNrZ3JvdW5kLCB0aGlzLnhQb3NbMV0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShzZWNvbmRzUGFzc2VkOiBudW1iZXIgPSAxKSB7XG4gICAgaWYgKHRoaXMueFBvc1sxXSA8PSAwKSB7XG4gICAgICBbdGhpcy54UG9zWzFdLCB0aGlzLnhQb3NbMF1dID0gW3RoaXMueFBvc1swXSwgdGhpcy54UG9zWzFdXTtcbiAgICAgIHRoaXMueFBvc1sxXSA9IHRoaXMuc3RhcnRpbmdYO1xuICAgIH1cbiAgICB0aGlzLnhQb3NbMF0gKz0gKFZFTE9DSVRZICogc2Vjb25kc1Bhc3NlZCk7XG4gICAgdGhpcy54UG9zWzFdICs9IChWRUxPQ0lUWSAqIHNlY29uZHNQYXNzZWQpO1xuICB9XG59XG4iLCJpbXBvcnQgQ29uZVBuZyBmcm9tICcuLi9zdGF0aWMvaW1nL2NvbmUucG5nJztcbmltcG9ydCBTcHJpdGVzaGVldCBmcm9tICcuLi9zdGF0aWMvaW1nL3Nwcml0ZXNoZWV0LnBuZyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9zdGF0aWMvaW1nL2JhY2tncm91bmQucG5nJztcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge1xuICBGUkFNRV9DT1VOVCxcbiAgU1BSSVRFX0hFSUdIVCxcbiAgU1BSSVRFX1dJRFRILFxuICBTUFJJVEVfV0lEVEhTLFxufSBmcm9tICcuL2NvbnN0YW50JztcblxudHlwZSBDYWNoZVZhbHVlID0gSW1hZ2VCaXRtYXAgfCBBcnJheTxJbWFnZUJpdG1hcD47XG5cbmV4cG9ydCBlbnVtIENhY2hlS2V5IHtcbiAgVE9QX0NPTkUsXG4gIEJPVFRPTV9DT05FLFxuICBCQUNLR1JPVU5ELFxuICBTUFJJVEVTLFxufVxuXG5jb25zdCBjYWNoZTogTWFwPENhY2hlS2V5LCBDYWNoZVZhbHVlPiA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VDYWNoZSB7XG4gIHN0YXRpYyBhc3luYyBsb2FkQWxsSW1hZ2VzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjYWNoZS5zZXQoQ2FjaGVLZXkuVE9QX0NPTkUsIGF3YWl0IGxvYWRJbWFnZShcbiAgICAgIENvbmVQbmcsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDMyMSxcbiAgICAgIDQwMCxcbiAgICAgIHtcbiAgICAgICAgcmVzaXplUXVhbGl0eTogJ2hpZ2gnLFxuICAgICAgICByZXNpemVIZWlnaHQ6IDEwMCxcbiAgICAgIH0sXG4gICAgKSk7XG5cbiAgICBjYWNoZS5zZXQoQ2FjaGVLZXkuQk9UVE9NX0NPTkUsIGF3YWl0IGxvYWRJbWFnZShcbiAgICAgIENvbmVQbmcsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDMyMSxcbiAgICAgIDQwMCxcbiAgICAgIHtcbiAgICAgICAgcmVzaXplUXVhbGl0eTogJ2hpZ2gnLFxuICAgICAgICByZXNpemVIZWlnaHQ6IDEyNSxcbiAgICAgIH0sXG4gICAgKSk7XG5cbiAgICBjYWNoZS5zZXQoQ2FjaGVLZXkuQkFDS0dST1VORCwgYXdhaXQgbG9hZEltYWdlKFxuICAgICAgQmFja2dyb3VuZCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMjU2MCxcbiAgICAgIDcwNixcbiAgICAgIHtcbiAgICAgICAgcmVzaXplUXVhbGl0eTogJ2hpZ2gnLFxuICAgICAgICByZXNpemVXaWR0aDogY2FudmFzLndpZHRoICsgNjAsXG4gICAgICAgIHJlc2l6ZUhlaWdodDogNDEwLFxuICAgICAgfSxcbiAgICApKTtcblxuICAgIGNhY2hlLnNldChDYWNoZUtleS5TUFJJVEVTLCBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIEFycmF5LmZyb20oXG4gICAgICAgIHsgbGVuZ3RoOiBGUkFNRV9DT1VOVCB9LFxuICAgICAgICAoXywgaSkgPT4gbG9hZEltYWdlKFxuICAgICAgICAgIFNwcml0ZXNoZWV0LFxuICAgICAgICAgIChpICUgRlJBTUVfQ09VTlQpICogU1BSSVRFX1dJRFRILFxuICAgICAgICAgIDAsXG4gICAgICAgICAgU1BSSVRFX1dJRFRIU1tpICUgRlJBTUVfQ09VTlRdLFxuICAgICAgICAgIFNQUklURV9IRUlHSFQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzaXplUXVhbGl0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgcmVzaXplSGVpZ2h0OiAyNTAsXG4gICAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW1hZ2Uoa2V5OiBDYWNoZUtleSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuLi9zdGF0aWMvc3R5bGVzaGVldC9pbmRleC5jc3MnO1xuXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IEZyaWVuZCBmcm9tICcuL2ZyaWVuZCc7XG5pbXBvcnQgR2FtZUJhY2tncm91bmQgZnJvbSAnLi9nYW1lYmFja2dyb3VuZCc7XG5pbXBvcnQgSW1hZ2VDYWNoZSBmcm9tICcuL2ltYWdlQ2FjaGUnO1xuaW1wb3J0IE9ic3RhY2xlRmFjdG9yeSBmcm9tICcuL29ic3RhY2xlRmFjdG9yeSc7XG5pbXBvcnQgeyByYW5kb21OdW1iZXIgfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLyAxLjEpO1xuY2FudmFzLmhlaWdodCA9IChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAvIDIpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcblxuY29uc3Qgc2NvcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNjb3JlRGl2LmNsYXNzTmFtZSA9ICdzY29yZSc7XG5jb25zdCBzY29yZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5sZXQgc2NvcmUgPSAwO1xuY29uc3Qgc2NvcmVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbnNjb3JlVmFsdWUudGV4dENvbnRlbnQgPSBzY29yZS50b1N0cmluZygxMCk7XG5zY29yZVRleHQuaW5uZXJIVE1MID0gYFNjb3JlOiAke3Njb3JlVmFsdWUuaW5uZXJIVE1MfWA7XG5zY29yZVRleHQuc3R5bGUuZm9udFNpemUgPSAnMjVweCc7XG5zY29yZURpdi5hcHBlbmRDaGlsZChzY29yZVRleHQpO1xuXG5jb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGl0bGVEaXYuY2xhc3NOYW1lID0gJ3RpdGxlJztcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xudGl0bGUuaW5uZXJUZXh0ID0gJ0lOVklTSUJMRSBGUklFTkRTIFJVTk5FUic7XG50aXRsZS5zdHlsZS5mb250U2l6ZSA9ICc0MHB4JztcbnRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZURpdik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoY2FudmFzKTtcbmNvbnN0IGZyaWVuZCA9IG5ldyBGcmllbmQoY3R4KTtcbmNvbnN0IGdhbWVCYWNrZ3JvdWQgPSBuZXcgR2FtZUJhY2tncm91bmQoY3R4LCBbMCwgY2FudmFzLndpZHRoXSk7XG5jb25zdCBvYnN0YWNsZUZhY3RvcnkgPSBuZXcgT2JzdGFjbGVGYWN0b3J5KGN0eCk7XG5cbmNvbnN0IGxpbmVEYXNoID0gWzI1LCAzMF07XG5sZXQgdGhlbjogbnVtYmVyO1xubGV0IGVsYXBzZWQ6IG51bWJlcjtcbmxldCBwb2ludFNjb3JlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiB1cGRhdGUoc2Vjb25kc1Bhc3NlZDogbnVtYmVyID0gMSkge1xuICBmcmllbmQudXBkYXRlKGNvbnRyb2xsZXIuYnV0dG9uUHJlc3NlZCk7XG4gIGdhbWVCYWNrZ3JvdWQudXBkYXRlKHNlY29uZHNQYXNzZWQpO1xuICBvYnN0YWNsZUZhY3RvcnkudXBkYXRlKHNlY29uZHNQYXNzZWQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkcmF3KCkge1xuICBpZiAoY3R4ICE9PSBudWxsKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcblxuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnNldExpbmVEYXNoKFswXSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCA0MDkpO1xuICAgIGN0eC5tb3ZlVG8oMCwgNDA5KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcblxuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnNldExpbmVEYXNoKGxpbmVEYXNoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCA0NjApO1xuICAgIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCA0NjApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyMwMDgzQTMnO1xuICAgIGN0eC5yZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgNDEwKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICBnYW1lQmFja2dyb3VkLmRyYXcoKTtcbiAgICBvYnN0YWNsZUZhY3RvcnkuZHJhd1RvcCgpO1xuICAgIGZyaWVuZC5kcmF3KCk7XG4gICAgb2JzdGFjbGVGYWN0b3J5LmRyYXdCb3R0b20oKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBtYWluTG9vcChmcmFtZVRpbWU/OiBudW1iZXIpIHtcbiAgaWYgKGZyYW1lVGltZSkge1xuICAgIGlmICghdGhlbikge1xuICAgICAgdGhlbiA9IGZyYW1lVGltZTtcbiAgICB9XG4gICAgZWxhcHNlZCA9IChmcmFtZVRpbWUgLSB0aGVuKSAvIDEwMDA7XG5cbiAgICB1cGRhdGUoTWF0aC5taW4oZWxhcHNlZCwgMC4xKSk7XG5cbiAgICBjb25zdCBjbG9zZXN0VG9wT2JzdGFjbGUgPSBvYnN0YWNsZUZhY3RvcnkuZ2V0Q2xvc2VzdE9ic3RhY2xlKHRydWUpO1xuICAgIGNvbnN0IGNsb2VzdEJvdHRvbU9ic3RhY2xlID0gb2JzdGFjbGVGYWN0b3J5LmdldENsb3Nlc3RPYnN0YWNsZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b3BQYXNzZWQgPSBmcmllbmQucGFzc2VkT2JzdGFjbGUoY2xvc2VzdFRvcE9ic3RhY2xlKTtcbiAgICBjb25zdCBib3R0b21QYXNzZWQgPSBmcmllbmQucGFzc2VkT2JzdGFjbGUoY2xvZXN0Qm90dG9tT2JzdGFjbGUpO1xuXG4gICAgY29uc3QgaXNDb2xsaXNpb24gPSBmcmllbmQuY2hlY2tDb2xsaXNpb24oY2xvc2VzdFRvcE9ic3RhY2xlKVxuICAgICAgfHwgZnJpZW5kLmNoZWNrQ29sbGlzaW9uKGNsb2VzdEJvdHRvbU9ic3RhY2xlKTtcblxuICAgIGlmICgodG9wUGFzc2VkIHx8IGJvdHRvbVBhc3NlZCkgJiYgIWlzQ29sbGlzaW9uKSB7XG4gICAgICBzY29yZSArPSAxO1xuICAgICAgc2NvcmVWYWx1ZS50ZXh0Q29udGVudCA9IHNjb3JlLnRvU3RyaW5nKDEwKTtcbiAgICAgIHNjb3JlVGV4dC5pbm5lckhUTUwgPSBgU2NvcmU6ICR7c2NvcmVWYWx1ZS5pbm5lckhUTUx9YDtcbiAgICB9XG5cbiAgICBvYnN0YWNsZUZhY3RvcnkuY3JlYXRlKHJhbmRvbU51bWJlcigwLCAxMDAwKSAlIDIgPT09IDApO1xuICAgIGF3YWl0IGRyYXcoKTtcblxuICAgIHRoZW4gPSBmcmFtZVRpbWU7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluTG9vcCk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluTG9vcCk7XG4gIH1cbn1cblxuKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgSW1hZ2VDYWNoZS5sb2FkQWxsSW1hZ2VzKGNhbnZhcyk7XG4gIGF3YWl0IG1haW5Mb29wKCk7XG59KSgpO1xuIiwiZW51bSBLZXlzIHtcbiAgVVAgPSAnVVAnLFxuICBET1dOID0gJ0RPV04nLFxuICBTUEFDRSA9ICdTUEFDRScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleXM7XG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBPYnN0YWNsZSB7XG4gIHByaXZhdGUgeFBvczogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgb2JzdGFjbGVQYXNzZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcixcbiAgICBwcml2YXRlIGR4OiBudW1iZXIsXG4gICAgcHJpdmF0ZSBjdXJyZW50Rmxvb3I6IDEgfCAyLFxuICApIHtcbiAgICB0aGlzLnhQb3MgPSBjdHg/LmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLm9ic3RhY2xlUGFzc2VkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgdygpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIHNldCB4KG5ld1hWYWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy54UG9zID0gbmV3WFZhbHVlO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMueFBvcyBhcyBudW1iZXI7XG4gIH1cblxuICBzZXQgdmVsb2NpdHkodjogbnVtYmVyKSB7XG4gICAgdGhpcy5keCA9IHY7XG4gIH1cblxuICBnZXQgdmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHg7XG4gIH1cblxuICBnZXQgaXNUb3BGbG9vcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Rmxvb3IgPT09IDE7XG4gIH1cblxuICBzZXQgaXNUb3BGbG9vcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY3VycmVudEZsb29yID0gdmFsdWUgPyAxIDogMjtcbiAgfVxuXG4gIGdldCBwYXNzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzdGFjbGVQYXNzZWQ7XG4gIH1cblxuICBzZXQgcGFzc2VkKGRpZFBhc3M6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9ic3RhY2xlUGFzc2VkID0gZGlkUGFzcztcbiAgfVxuXG4gIGFic3RyYWN0IGRyYXcoKTogdm9pZDtcbiAgYWJzdHJhY3QgdXBkYXRlKHNlY29uZHNQYXNzZWQ6IG51bWJlcik6IHZvaWQ7XG59XG4iLCJpbXBvcnQgQ29uZSBmcm9tICcuL2NvbmUnO1xuaW1wb3J0IHsgWkVST19YX1BPUyB9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUnO1xuXG5jb25zdCBPQlNUQUNMRV9DWUNMRSA9IDQwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGVGYWN0b3J5IHtcbiAgcHJpdmF0ZSBvYnN0YWNsZUN5Y2xlQ291bnQ6IG51bWJlcjtcblxuICBwcml2YXRlIHRvcEZsb29yT2JzdGFjbGVRdWV1ZTogQXJyYXk8T2JzdGFjbGU+O1xuXG4gIHByaXZhdGUgYm90dG9tRmxvb3JPYnN0YWNsZVF1ZXVlOiBBcnJheTxPYnN0YWNsZT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwpIHtcbiAgICB0aGlzLnRvcEZsb29yT2JzdGFjbGVRdWV1ZSA9IFtdO1xuICAgIHRoaXMuYm90dG9tRmxvb3JPYnN0YWNsZVF1ZXVlID0gW107XG4gICAgdGhpcy5vYnN0YWNsZUN5Y2xlQ291bnQgPSAwO1xuICB9XG5cbiAgY3JlYXRlKGlzVG9wRmxvb3I6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5jdHggIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLm9ic3RhY2xlQ3ljbGVDb3VudCA+PSBPQlNUQUNMRV9DWUNMRSkge1xuICAgICAgICB0aGlzLm9ic3RhY2xlQ3ljbGVDb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGNvbmUgPSBuZXcgQ29uZSh0aGlzLmN0eCwgaXNUb3BGbG9vcik7XG4gICAgICAgIGlmIChpc1RvcEZsb29yKSB7XG4gICAgICAgICAgdGhpcy50b3BGbG9vck9ic3RhY2xlUXVldWUucHVzaChjb25lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJvdHRvbUZsb29yT2JzdGFjbGVRdWV1ZS5wdXNoKGNvbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub2JzdGFjbGVDeWNsZUNvdW50ICs9IDE7XG5cbiAgICBjb25zdCBvbGRlc3RUb3BPYnN0YWNsZSA9IHRoaXMudG9wRmxvb3JPYnN0YWNsZVF1ZXVlWzBdO1xuICAgIGlmIChvbGRlc3RUb3BPYnN0YWNsZT8ueCA8IFpFUk9fWF9QT1MpIHtcbiAgICAgIHRoaXMudG9wRmxvb3JPYnN0YWNsZVF1ZXVlLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2xkZXN0Qm90dG9tT2JzdGFjbGUgPSB0aGlzLmJvdHRvbUZsb29yT2JzdGFjbGVRdWV1ZVswXTtcbiAgICBpZiAob2xkZXN0Qm90dG9tT2JzdGFjbGU/LnggPCBaRVJPX1hfUE9TKSB7XG4gICAgICB0aGlzLmJvdHRvbUZsb29yT2JzdGFjbGVRdWV1ZS5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUb3AoKSB7XG4gICAgdGhpcy50b3BGbG9vck9ic3RhY2xlUXVldWUuZm9yRWFjaCgob2JzdGFjbGUpID0+IHtcbiAgICAgIG9ic3RhY2xlLmRyYXcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdCb3R0b20oKSB7XG4gICAgdGhpcy5ib3R0b21GbG9vck9ic3RhY2xlUXVldWUuZm9yRWFjaCgob2JzdGFjbGUpID0+IHtcbiAgICAgIG9ic3RhY2xlLmRyYXcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShzZWNvbmRzUGFzc2VkOiBudW1iZXIgPSAxKSB7XG4gICAgdGhpcy50b3BGbG9vck9ic3RhY2xlUXVldWUuZm9yRWFjaCgob2JzdGFjbGUpID0+IHtcbiAgICAgIG9ic3RhY2xlLnVwZGF0ZShzZWNvbmRzUGFzc2VkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYm90dG9tRmxvb3JPYnN0YWNsZVF1ZXVlLmZvckVhY2goKG9ic3RhY2xlKSA9PiB7XG4gICAgICBvYnN0YWNsZS51cGRhdGUoc2Vjb25kc1Bhc3NlZCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDbG9zZXN0T2JzdGFjbGUoaXNUb3BGbG9vcjogYm9vbGVhbikge1xuICAgIHJldHVybiBpc1RvcEZsb29yID8gdGhpcy50b3BGbG9vck9ic3RhY2xlUXVldWVbMF0gOiB0aGlzLmJvdHRvbUZsb29yT2JzdGFjbGVRdWV1ZVswXTtcbiAgfVxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRJbWFnZShcbiAgaW1hZ2U6IHN0cmluZyxcbiAgc3g6IG51bWJlcixcbiAgc3k6IG51bWJlcixcbiAgc3c6IG51bWJlcixcbiAgc2g6IG51bWJlcixcbiAgb3B0aW9ucz86IEltYWdlQml0bWFwT3B0aW9ucyB8IHVuZGVmaW5lZCxcbik6IFByb21pc2U8SW1hZ2VCaXRtYXA+IHtcbiAgY29uc3QgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBpbWFnZTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaW1nLm9ubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGJpdG1hcEltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoXG4gICAgICAgIGltZyxcbiAgICAgICAgc3gsXG4gICAgICAgIHN5LFxuICAgICAgICBzdyxcbiAgICAgICAgc2gsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApO1xuXG4gICAgICByZXNvbHZlKGJpdG1hcEltYWdlKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bWJlcihhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICBjb25zdCBtaW4gPSBhID4gYiA/IGIgOiBhO1xuICBjb25zdCBtYXggPSBhID4gYiA/IGEgOiBiO1xuICAvLyBVc2UgYmVsb3cgaWYgZmluYWwgbnVtYmVyIGRvZXNuJ3QgbmVlZCB0byBiZSB3aG9sZSBudW1iZXJcbiAgLy8gcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW47XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==