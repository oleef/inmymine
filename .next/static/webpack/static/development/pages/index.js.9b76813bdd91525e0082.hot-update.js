webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card/card */ "./components/card/card.js");
/* harmony import */ var _configs_sidebar_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/sidebar.config */ "./configs/sidebar.config.js");
var _jsxFileName = "/Users/atfirstbyte/Documents/inmymine/components/sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Sidebar = function Sidebar() {
  return __jsx(_components_card_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("ul", {
    className: "nav nav-pills nav-sidebar flex-column",
    "data-widget": "treeview",
    role: "menu",
    "data-accordion": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(_configs_sidebar_config__WEBPACK_IMPORTED_MODULE_4__["SIDEBAR_ITEM"]) ? _configs_sidebar_config__WEBPACK_IMPORTED_MODULE_4__["SIDEBAR_ITEM"].map(function (item) {
    return __jsx(SidebarItem, {
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var SidebarItem = function SidebarItem(_ref) {
  var item = _ref.item;
  return __jsx("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: item.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, item.label, __jsx("span", {
    className: "right badge badge-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "New")))));
};

/***/ })

})
//# sourceMappingURL=index.js.9b76813bdd91525e0082.hot-update.js.map