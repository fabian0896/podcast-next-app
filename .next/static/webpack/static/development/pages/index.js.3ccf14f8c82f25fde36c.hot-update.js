webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/fajasinternacionales/Desktop/Platzi/next/podcast/pages/index.js";





var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1545173333",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-1545173333",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Podcast"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1545173333" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, channels.map(function (chanel, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          key: index,
          href: "/channel",
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "jsx-1545173333" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: chanel.urls.logo_image.original,
          alt: chanel.title,
          className: "jsx-1545173333",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "jsx-1545173333",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, chanel.title)));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "762095678",
        __self: this
      }, "header.jsx-1545173333{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-1545173333{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-1545173333{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-1545173333 img.jsx-1545173333{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-1545173333{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0M0QixBQUdvQyxBQU1FLEFBTUMsQUFNSSxBQUtOLFdBdEJPLENBdUJILENBakJGLENBTU0sSUFNb0IsU0FYM0IsQ0FpQkcsRUF2QkgsSUFZRixNQUxpRCxHQU4xQyxDQXVCVCxDQVhZLFFBWUgsS0FQUCxHQWhCaEIsUUFpQkEsRUFPQSx3QkFaQSxHQU5BIiwiZmlsZSI6Ii9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy9yZWNvbW1lbmRlZCcpO1xuICAgICAgICBsZXQge2JvZHk6IGNoYW5uZWxzfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgIHJldHVybiB7IGNoYW5uZWxzIH1cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5Qb2RjYXN0PC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzLm1hcCgoY2hhbmVsLCBpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2luZGV4fSBocmVmPVwiL2NoYW5uZWxcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD17Y2hhbmVsLnRpdGxlfS8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntjaGFuZWwudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgLmNoYW5uZWxze1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgLmNoYW5uZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdfQ== */\n/*@ sourceURL=/Users/fajasinternacionales/Desktop/Platzi/next/podcast/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3558141794",
        __self: this
      }, "body{margin:0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVtQyxBQUdrQyxTQUVkLHNCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9mYWphc2ludGVybmFjaW9uYWxlcy9EZXNrdG9wL1BsYXR6aS9uZXh0L3BvZGNhc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy9yZWNvbW1lbmRlZCcpO1xuICAgICAgICBsZXQge2JvZHk6IGNoYW5uZWxzfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgIHJldHVybiB7IGNoYW5uZWxzIH1cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5Qb2RjYXN0PC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzLm1hcCgoY2hhbmVsLCBpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2luZGV4fSBocmVmPVwiL2NoYW5uZWxcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD17Y2hhbmVsLnRpdGxlfS8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntjaGFuZWwudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgLmNoYW5uZWxze1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgLmNoYW5uZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdfQ== */\n/*@ sourceURL=/Users/fajasinternacionales/Desktop/Platzi/next/podcast/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var req, _ref, channels;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.audioboom.com/channels/recommended');

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                _ref = _context.sent;
                channels = _ref.body;
                return _context.abrupt("return", {
                  channels: channels
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3ccf14f8c82f25fde36c.hot-update.js.map