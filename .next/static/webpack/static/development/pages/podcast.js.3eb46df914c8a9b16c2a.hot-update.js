webpackHotUpdate("static/development/pages/podcast.js",{

/***/ "./pages/podcast.js":
/*!**************************!*\
  !*** ./pages/podcast.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");







var _jsxFileName = "/Users/fajasinternacionales/Desktop/Platzi/next/podcast/pages/podcast.js";






var Podcast =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Podcast, _React$Component);

  function Podcast() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Podcast);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Podcast).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Podcast, [{
    key: "render",
    value: function render() {
      var podcast = this.props.podcast;
      console.log(podcast);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2163617124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2163617124" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: podcast.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("figure", {
        className: "jsx-2163617124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: podcast.urls.image || podcast.channel.urls.logo_image.original,
        alt: "",
        className: "jsx-2163617124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2163617124" + " " + "player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-2163617124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, podcast.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
        className: "jsx-2163617124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, podcast.channel.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-2163617124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: podcast.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-2163617124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2860112232",
        __self: this
      }, "header.jsx-2163617124{color:#fff;background:#8756ca;padding:15px;text-align:center;position:relative;}figure.jsx-2163617124{width:80%;max-width:500px;max-height:400px margin:0 auto;padding:0;}img.jsx-2163617124{width:100%;box-shadow:0px 3px 6px rgba(0,0,0,.3);}audio.jsx-2163617124{width:80%;}header.jsx-2163617124 a.jsx-2163617124{color:#FFF;-webkit-text-decoration:none;text-decoration:none;position:absolute;left:15px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.wrapper.jsx-2163617124{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:#8756ca;}.player.jsx-2163617124{padding:40px 0;background:rgba(0,0,0,.5);color:#FFF;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-align:center;}.player.jsx-2163617124 h3.jsx-2163617124{text-align:center;padding:0;margin:0;margin-bottom:10px;}.player.jsx-2163617124 h6.jsx-2163617124{text-align:center;padding:0;margin:0;margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvcGFnZXMvcG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQzRCLEFBR29DLEFBT0QsQUFPQyxBQUlELEFBR0MsQUFRRSxBQU9DLEFBVUksQUFNQSxVQTVDRixBQVdwQixDQWxCdUIsQUFjbUIsQUFPakIsRUFRUixFQU9hLEdBVWhCLEFBTUEsUUEzQ0ksRUFzQ0wsQUFNQSxFQXBESSxPQStDTSxBQU1BLElBakJSLEVBbkNPLE1BYXRCLEdBdUJpQixJQVdqQixBQU1BLENBN0NjLElBUFEsQUFtQkEsTUFYdEIsWUFQQSxBQW1CYyxRQU9ZLEVBTmQsUUFDbUIsNkJBY0wsdUNBUlEseUJBTGxDLGNBY3VCLDRFQVJBLGlCQVNVLEVBUmpDLHlIQVNzQixrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2ZhamFzaW50ZXJuYWNpb25hbGVzL0Rlc2t0b3AvUGxhdHppL25leHQvcG9kY2FzdC9wYWdlcy9wb2RjYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNsYXNzIFBvZGNhc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnl9KXtcbiAgICAgICAgY29uc3QgcG9kY2FzdElkID0gcXVlcnkuaWQ7XG4gICAgICAgIGNvbnN0IGRhdGFQb2RjYXN0ID0gYXdhaXQgKGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2F1ZGlvX2NsaXBzLyR7IHBvZGNhc3RJZCB9Lm1wM2ApKS5qc29uKCk7XG4gICAgICAgIGNvbnN0IHBvZGNhc3QgPSBkYXRhUG9kY2FzdC5ib2R5LmF1ZGlvX2NsaXA7XG4gICAgICAgIHJldHVybnsgcG9kY2FzdCB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IHBvZGNhc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvZGNhc3QpO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9e3BvZGNhc3QudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BvZGNhc3QudXJscy5pbWFnZSB8fCBwb2RjYXN0LmNoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57IHBvZGNhc3QudGl0bGUgfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+eyBwb2RjYXN0LmNoYW5uZWwudGl0bGUgfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW8gY29udHJvbHMgYXV0b1BsYXk9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXsgcG9kY2FzdC51cmxzLmhpZ2hfbXAzIH0gdHlwZT0nYXVkaW8vbXBlZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXVkaW8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke3BvZGNhc3QuY2hhbm5lbC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Nsb3NlJz4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBvZGNhc3RzXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPiAqL31cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZ3VyZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlve1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgYXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBsYXllcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgNDBweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wbGF5ZXIgaDN7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGxheWVyIGg2e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9kY2FzdDsiXX0= */\n/*@ sourceURL=/Users/fajasinternacionales/Desktop/Platzi/next/podcast/pages/podcast.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2714173829",
        __self: this
      }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvcGFnZXMvcG9kY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R21DLEFBRzhCLFNBQ2Esc0JBQ0wsaUJBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvcGFnZXMvcG9kY2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jbGFzcyBQb2RjYXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIFxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSl7XG4gICAgICAgIGNvbnN0IHBvZGNhc3RJZCA9IHF1ZXJ5LmlkO1xuICAgICAgICBjb25zdCBkYXRhUG9kY2FzdCA9IGF3YWl0IChhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9hdWRpb19jbGlwcy8keyBwb2RjYXN0SWQgfS5tcDNgKSkuanNvbigpO1xuICAgICAgICBjb25zdCBwb2RjYXN0ID0gZGF0YVBvZGNhc3QuYm9keS5hdWRpb19jbGlwO1xuICAgICAgICByZXR1cm57IHBvZGNhc3QgfVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBwb2RjYXN0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyhwb2RjYXN0KTtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0IHRpdGxlPXtwb2RjYXN0LnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb2RjYXN0LnVybHMuaW1hZ2UgfHwgcG9kY2FzdC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+eyBwb2RjYXN0LnRpdGxlIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PnsgcG9kY2FzdC5jaGFubmVsLnRpdGxlIH08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIGF1dG9QbGF5PXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17IHBvZGNhc3QudXJscy5oaWdoX21wMyB9IHR5cGU9J2F1ZGlvL21wZWcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtwb2RjYXN0LmNoYW5uZWwuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdjbG9zZSc+Jmx0OyBWb2x2ZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb2RjYXN0c1xuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj4gKi99XG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWd1cmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhdWRpb3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIGF7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wbGF5ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDQwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGxheWVyIGgze1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBsYXllciBoNntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3Q7Il19 */\n/*@ sourceURL=/Users/fajasinternacionales/Desktop/Platzi/next/podcast/pages/podcast.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, podcastId, dataPodcast, podcast;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                podcastId = query.id;
                _context.next = 4;
                return fetch("https://api.audioboom.com/audio_clips/".concat(podcastId, ".mp3"));

              case 4:
                _context.next = 6;
                return _context.sent.json();

              case 6:
                dataPodcast = _context.sent;
                podcast = dataPodcast.body.audio_clip;
                return _context.abrupt("return", {
                  podcast: podcast
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Podcast;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Podcast);

/***/ })

})
//# sourceMappingURL=podcast.js.3eb46df914c8a9b16c2a.hot-update.js.map