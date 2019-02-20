webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/PodcastList.js":
/*!***********************************!*\
  !*** ./components/PodcastList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);










var PodcastList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PodcastList, _React$Component);

  function PodcastList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PodcastList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PodcastList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PodcastList, [{
    key: "render",
    value: function render() {
      var podcasts = this.props.podcasts;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-2503566921"
      }, "Ultimos Podcasts"), podcasts.map(function (clip) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: clip.id,
          href: "/podcast?id=".concat(clip.id),
          prefetch: true
        }, "key", clip.id), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "jsx-2503566921" + " " + 'podcast'
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
          className: "jsx-2503566921"
        }, clip.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "jsx-2503566921" + " " + 'meta'
        }, Math.ceil(clip.duration / 60), " minutes")));
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2503566921"
      }, "h2.jsx-2503566921{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}.podcast.jsx-2503566921{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-2503566921:hover{color:#000;}.podcast.jsx-2503566921 h3.jsx-2503566921{margin:0;}.podcast.jsx-2503566921 .meta.jsx-2503566921{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvY29tcG9uZW50cy9Qb2RjYXN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQjRCLEFBRzZCLEFBT0UsQUFRSCxBQUdGLEFBR0UsU0FGWCxFQUhBLEFBTWlCLENBckJELEVBT0ssY0FOTCxBQXFCQSxnQkFwQlAsQUFxQlQsU0FwQmtCLFdBS1AsT0FKWCxJQUthLGFBQzJCLHdDQUN6QixlQUNmIiwiZmlsZSI6Ii9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvY29tcG9uZW50cy9Qb2RjYXN0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBQb2RjYXN0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKXtcblxuICAgICAgICBjb25zdCB7IHBvZGNhc3RzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XG4gICAgICAgICAgICAgICAgeyBwb2RjYXN0cy5tYXAoKGNsaXApID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtjbGlwLmlkfSBocmVmPXtgL3BvZGNhc3Q/aWQ9JHtjbGlwLmlkfWB9IHByZWZldGNoIGtleT17Y2xpcC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncG9kY2FzdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+eyBjbGlwLnRpdGxlIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21ldGEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBNYXRoLmNlaWwoY2xpcC5kdXJhdGlvbiAvIDYwKSB9IG1pbnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvZGNhc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucG9kY2FzdDpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb2RjYXN0IGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb2RjYXN0IC5tZXRhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3RMaXN0OyJdfQ== */\n/*@ sourceURL=/Users/fajasinternacionales/Desktop/Platzi/next/podcast/components/PodcastList.js */"));
    }
  }]);

  return PodcastList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PodcastList);

/***/ })

})
//# sourceMappingURL=channel.js.d1d91bea84a9ded3406c.hot-update.js.map