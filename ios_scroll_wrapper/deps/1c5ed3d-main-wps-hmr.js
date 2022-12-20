webpackHotUpdateios_scroll_wrapper("main",{

/***/ "./src/lib/components/IosScrollWrapper.react.js":
/*!******************************************************!*\
  !*** ./src/lib/components/IosScrollWrapper.react.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IosScrollWrapper; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Outer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 1000px;\n    overflow: auto;\n"])));
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
var IosScrollWrapper = /*#__PURE__*/function (_Component) {
  _inherits(IosScrollWrapper, _Component);
  var _super = _createSuper(IosScrollWrapper);
  function IosScrollWrapper(props) {
    var _this;
    _classCallCheck(this, IosScrollWrapper);
    _this = _super.call(this, props);
    _this.outerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.innerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.isScroll = false;
    _this.isTouch = false;

    // bind
    _this.scroll = _this.scroll.bind(_assertThisInitialized(_this));
    _this.touchStart = _this.touchStart.bind(_assertThisInitialized(_this));
    _this.touchEnd = _this.touchEnd.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * スクロール中
   */
  _createClass(IosScrollWrapper, [{
    key: "scroll",
    value: function scroll() {
      var _this2 = this;
      if (!this.isScroll) this.isScroll = true;
      // スクロール終了後300msでスクロール位置設定
      var timeout = setTimeout(function () {
        if (_this2.isScroll) {
          _this2.isScroll = false;
          if (!_this2.isTouch) {
            _this2.setScrollTop();
          }
        }
        clearTimeout(timeout);
      }, 300);
    }

    /**
     * タッチ開始
     */
  }, {
    key: "touchStart",
    value: function touchStart() {
      this.isTouch = true;
    }

    /**
     * タッチ終了
     */
  }, {
    key: "touchEnd",
    value: function touchEnd() {
      this.isTouch = false;
      this.setScrollTop();
    }

    /**
     * スクロール位置設定
     * @returns
     */
  }, {
    key: "setScrollTop",
    value: function setScrollTop() {
      var target = this.outerRef.current;
      console.log(target.scrollTop);
      if (target.scrollTop <= 0) {
        target.scrollTop = 1;
        console.log('min', target.scrollTop);
        return;
      }
      var height = target.getBoundingClientRect().height;
      if (target.scrollTop + height > target.scrollHeight - 1) {
        target.scrollTop = target.scrollHeight - height - 1;
        console.log('max', target.scrollTop, target.scrollHeight - height - 1);
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        id = _this$props.id,
        children = _this$props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Outer, {
        id: id,
        className: "ios-scroll-outer",
        ref: this.outerRef,
        onScroll: this.scroll,
        onTouchStart: this.touchStart,
        onTouchEnd: this.touchEnd
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner, {
        className: "ios-scroll-inner",
        ref: this.innerRef
      }, children));
    }
  }]);
  return IosScrollWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

IosScrollWrapper.defaultProps = {};
IosScrollWrapper.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=1c5ed3d-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxYzVlZDNkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==