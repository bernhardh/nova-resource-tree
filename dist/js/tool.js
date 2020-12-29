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
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(14);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
  Vue.component('nova-resource-tree', __webpack_require__(3));
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(13)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeItem__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TreeItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TreeItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NodeDetail__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NodeDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__NodeDetail__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: { NodeDetail: __WEBPACK_IMPORTED_MODULE_1__NodeDetail___default.a, TreeItem: __WEBPACK_IMPORTED_MODULE_0__TreeItem___default.a },
    props: ['resourceName', 'resourceId', 'panel'],

    data: function data() {
        return {
            treeNodes: null,
            currentNode: null,
            config: this.panel.fields[0],
            loadingAll: false,
            loadingDetails: false,
            labels: null
        };
    },


    methods: {
        getDetails: function getDetails(id) {
            var _this = this;

            this.loadingDetails = true;
            Nova.request().get("/nova-api/" + this.resourceName + "/" + id).then(function (res) {
                _this.parseDetails(res.data);
            }).catch(function (err) {
                _this.$router.replace('/404');
            }).finally(function () {
                return _this.loadingDetails = false;
            });
        },
        parseDetails: function parseDetails(data) {
            var _this2 = this;

            this.currentNode = {};
            this.labels = {};
            data.resource.fields.forEach(function (field) {
                if (_this2.config.detail_fields.includes(field.attribute)) {
                    _this2.currentNode[field.attribute] = field.value;
                    _this2.labels[field.attribute] = field.name;
                }
            });

            this.currentNode.data = data;
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(11)
/* template */
var __vue_template__ = __webpack_require__(25)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/TreeItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e8928bc", Component.options)
  } else {
    hotAPI.reload("data-v-0e8928bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'tree-item',
    props: ['modelId', 'modelClass', 'currentNodeId'],
    data: function data() {
        return {
            isOpen: false,
            loading: true,
            currentActive: null,
            treeNodes: {}
        };
    },
    mounted: function mounted() {
        this.getNodes(this.modelClass, this.modelId);
    },

    computed: {
        hasChildren: function hasChildren() {
            return this.treeNodes && this.treeNodes.children && this.treeNodes.children.length > 0;
        }
    },
    watch: {
        loading: function loading() {
            if (this.loading) this.$emit('loading', true);else this.$emit('loading-finished', true);
        }
    },
    methods: {
        onclick: function onclick() {
            this.selected(this.treeNodes.id);
            this.toggle();
        },
        selected: function selected(id) {
            this.$emit('selected', id);
        },
        toggle: function toggle() {
            if (this.hasChildren) {
                this.isOpen = !this.isOpen;
            }
        },
        getNodes: function getNodes(modelClass, id) {
            var _this = this;

            this.loading = true;
            Nova.request().get('/nova-vendor/nova-resource-tree/tree', {
                params: {
                    model: modelClass,
                    id: id
                }
            }).then(function (res) {
                _this.treeNodes = res.data;
                _this.loading = false;
            });
        }
    }
});

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("loading-view", { attrs: { loading: _vm.loadingAll } }, [
        _c("div", { staticClass: "flex" }, [
          _c("div", { staticClass: "w-1/4" }, [
            _c(
              "h3",
              {
                staticClass: "flex-no-shrink text-90 font-normal text-2xl mb-3"
              },
              [_vm._v("Resource Tree")]
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "resource-tree" },
              [
                _c("tree-item", {
                  attrs: {
                    "model-class": _vm.config.model,
                    "model-id": _vm.resourceId,
                    "current-node-id": _vm.currentNode && _vm.currentNode.id
                  },
                  on: {
                    selected: _vm.getDetails,
                    loading: function($event) {
                      _vm.loadingAll = true
                    },
                    "loading-finished": function($event) {
                      _vm.loadingAll = false
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-3/4" },
            [
              _c("loading-view", { attrs: { loading: _vm.loadingDetails } }, [
                _vm.currentNode
                  ? _c(
                      "div",
                      [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "flex-no-shrink text-90 font-normal text-2xl mb-3"
                          },
                          [_vm._v("Details: " + _vm._s(_vm.currentNode.title))]
                        ),
                        _vm._v(" "),
                        _c("node-detail", {
                          attrs: {
                            item: _vm.currentNode,
                            fields: this.config.detail_fields,
                            labels: this.labels
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "mt-1 mb-1" }, [
    _c("div", { on: { click: _vm.onclick } }, [
      _vm.hasChildren
        ? _c("span", { staticClass: "collapse-icon pt-1 pb-1" }, [
            !_vm.isOpen
              ? _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5l7 7-7 7"
                      }
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isOpen
              ? _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M19 9l-7 7-7-7"
                      }
                    })
                  ]
                )
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "label pt-1 pb-1 mr-2",
          class: _vm.currentNodeId == _vm.treeNodes.id && "active"
        },
        [
          _c("span", { staticClass: "node-type" }, [
            _vm.hasChildren
              ? _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      }
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.hasChildren
              ? _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d:
                          "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      }
                    })
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(
            "\n\n            " + _vm._s(_vm.treeNodes.title) + "\n        "
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm.hasChildren && _vm.isOpen
      ? _c(
          "ul",
          { staticClass: "resource-tree resource-tree-child" },
          _vm._l(_vm.treeNodes.children, function(child, index) {
            return _c("tree-item", {
              key: index,
              attrs: {
                "model-id": child.id,
                "model-class": _vm.modelClass,
                "current-node-id": _vm.currentNodeId
              },
              on: { selected: _vm.selected }
            })
          }),
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e8928bc", module.exports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(27)
/* template */
var __vue_template__ = __webpack_require__(28)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/NodeDetail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-072ab7c4", Component.options)
  } else {
    hotAPI.reload("data-v-072ab7c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['item', 'fields', 'labels']
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card mb-6 py-3 px-6" },
    _vm._l(_vm.fields, function(field, index) {
      return _c(
        "div",
        {
          key: field.attribute,
          staticClass: "flex border-b border-40 -mx-6 px-6",
          class: index == _vm.fields.length - 1 && "remove-bottom-border"
        },
        [
          _c("div", { staticClass: "w-1/4 py-4" }, [
            _c("h4", { staticClass: "font-normal text-80" }, [
              _vm._v(_vm._s(_vm.labels[field]))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-3/4 py-4 break-words" }, [
            _c("p", { staticClass: "text-90" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.item[field]) +
                  "\n            "
              )
            ])
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-072ab7c4", module.exports)
  }
}

/***/ })
/******/ ]);