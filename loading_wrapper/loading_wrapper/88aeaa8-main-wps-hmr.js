webpackHotUpdateloading_wrapper("main",{

/***/ "./src/lib/components/LoadingWrapper.react.js":
/*!****************************************************!*\
  !*** ./src/lib/components/LoadingWrapper.react.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingWrapper; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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



/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
var LoadingWrapper = /*#__PURE__*/function (_Component) {
  _inherits(LoadingWrapper, _Component);
  var _super = _createSuper(LoadingWrapper);
  function LoadingWrapper(props) {
    var _this;
    _classCallCheck(this, LoadingWrapper);
    _this = _super.call(this, props);
    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.state = {
      isLoading: false
    };
    _this.interval = null;
    _this.mo = null;
    _this.stop = false;
    return _this;
  }
  /**
   * コンポーネントがマウントされる直前に呼び出される
   */
  _createClass(LoadingWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.mo = new MutationObserver(function (mutations) {
        var _iterator = _createForOfIteratorHelper(mutations),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;
            // this.checkIgnore(mutation.target);
            // if (!this.stop) {
            var isLoading = _this2.isLoading();
            console.log(_this2.props.id, 'is loading', isLoading);
            if (isLoading === null) continue;
            _this2.setLoading(isLoading);
            break;
            if (_this2.isTarget(mutation.addedNodes)) {
              _this2.setLoading(true);
              break;
            }
            if (_this2.isTarget(mutation.removedNodes)) {
              _this2.setLoading(false);
              break;
            }
            // }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      this.mo.observe(this.ref.current, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
      });
    }
    /**
     * コンポーネント破棄直前に呼び出される
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mo) this.mo.disconnect();
    }
    /**
     * ロードの基準となるターゲットか判定
     * @param {*} nodes
     * @returns
     */
  }, {
    key: "isTarget",
    value: function isTarget(nodes) {
      var _iterator2 = _createForOfIteratorHelper(nodes),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var node = _step2.value;
          if (!node.tagName) continue;
          if (!node.className) continue;
          if (node.className.split(' ').indexOf(this.props.targetClassName) !== -1) {
            console.log(this.props.id, node);
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return false;
    }
    /**
     * ロード中か判定
     * @returns
     */
  }, {
    key: "isLoading",
    value: function isLoading() {
      // console.log(
      //     this.props.id,
      //     'check',
      //     this.ref.current.querySelector('.' + this.props.targetClassName)
      // );
      // return !!this.ref.current.querySelector(
      //     '.' + this.props.targetClassName
      // );
      var target = this.ref.current.querySelector('.loading');
      if (this.props.ignores) {
        var _iterator3 = _createForOfIteratorHelper(this.props.ignores),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var ignore = _step3.value;
            var ignoreTarget = this.ref.current.querySelector('[data-loading_ignore=' + ignore + '] .loading');
            if (ignoreTarget && ignoreTarget.style.length > 0) return null;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return target.style.length > 0;
    }
    /**
     * ロード状態をstateとpropsに設定
     * @param {*} isLoading
     */
  }, {
    key: "setLoading",
    value: function setLoading(isLoading) {
      var _this3 = this;
      if (isLoading) {
        console.log(this.props.id, 'start');
        this.props.setProps({
          is_loading: true
        });
        this.setState({
          isLoading: true
        });
        if (!this.interval) {
          this.interval = setInterval(function () {
            if (!_this3.isLoading()) {
              console.log(_this3.props.id, 'end');
              clearInterval(_this3.interval);
              _this3.interval = null;
              _this3.props.setProps({
                is_loading: false
              });
              _this3.setState({
                isLoading: false
              });
            }
          }, this.props.interval);
        }
      }
    }
  }, {
    key: "checkIgnore",
    value: function checkIgnore(target) {
      var _this4 = this;
      if (this.stop) return;
      if (this.isIgnore(target)) {
        this.stop = true;
        if (!this.interval) {
          this.interval = setInterval(function () {
            if (!_this4.isLoading()) {
              clearInterval(_this4.interval);
              _this4.interval = null;
              _this4.stop = false;
            }
          }, 100);
        }
      }
    }
    /**
     * 除外コンテンツ判定
     * @param {*} target
     * @returns
     */
  }, {
    key: "isIgnore",
    value: function isIgnore(target) {
      if (this.props.ignores) {
        var _iterator4 = _createForOfIteratorHelper(this.props.ignores),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var ignore = _step4.value;
            try {
              var result = target.closest('[data-loading_ignore=' + ignore + ']');
              if (result) return true;
            } catch (_unused) {
              var _result = target.parentElement.closest('[data-loading_ignore=' + ignore + ']');
              if (_result) return true;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        id = _this$props.id,
        className = _this$props.className,
        children = _this$props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        className: 'loading_wrapper ' + className + ' loading_' + this.state.isLoading,
        ref: this.ref
      }, children);
    }
  }]);
  return LoadingWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

LoadingWrapper.defaultProps = {
  interval: 1000
};
LoadingWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  targetClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  interval: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  ignores: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=88aeaa8-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4OGFlYWE4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==