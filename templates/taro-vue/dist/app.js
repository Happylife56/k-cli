require("./runtime");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/app.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/app.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_2__);



var App = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createApp */ "a"])({
  onShow: function onShow(options) {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖

});
App.use(_store__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./app.js */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/app.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");







var config = {"pages":["pages/index/index","pages/login/login"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createVue3App"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_app_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], vue__WEBPACK_IMPORTED_MODULE_3__[/* h */ "k"], config))



/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-browser.js");

var state = {
  numbers: [1, 2, 3]
};
var mutations = {
  ADD_NUMBER: function ADD_NUMBER(state, payload) {
    state.numbers.push(payload);
  }
};
var actions = {
  addNumber: function addNumber(context, number) {
    context.commit('ADD_NUMBER', number);
  }
};
var getters = {
  getNumbers: function getNumbers(state) {
    return state.numbers;
  }
};
var store = Object(vuex__WEBPACK_IMPORTED_MODULE_0__[/* createStore */ "a"])({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

},[["./src/app.js","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map