webpackHotUpdatedash_alert("main",{

/***/ "./src/lib/components/DashAlert.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/DashAlert.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashAlert; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
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
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var BORDER_TRANSPARENT = '99';
var BACKGROUND_TRANSPARENT = '99';
var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from{\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var fadeOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from{\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"])));
var Background = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs(function (props) {
  return {
    duration: props.duration,
    isFadeout: props.isFadeout
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n    padding: 50px;\n    box-sizing: border-box;\n    animation: ", " ease-in-out\n        ", "ms forwards;\n"])), '#000000' + BACKGROUND_TRANSPARENT, function (props) {
  return props.isFadeout ? fadeOut : fadeIn;
}, function (props) {
  return props.duration;
});
var Alert = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 15px 0 20px;\n    background-color: white;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n"])));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border-bottom: solid thin black;\n    padding: 5px 30px;\n"])));
var Message = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding: 10px 30px;\n"])));
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n    padding: 0 30px;\n    box-sizing: content-box;\n"])));
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    flex: 1;\n    padding: 3px 0;\n    background-color: ", ";\n    border-radius: 9999px;\n    border: solid thin ", ";\n    color: white;\n"])), '#000000' + BACKGROUND_TRANSPARENT, '#000000' + BORDER_TRANSPARENT);
var DashAlert = /*#__PURE__*/function (_Component) {
  _inherits(DashAlert, _Component);
  var _super = _createSuper(DashAlert);
  function DashAlert(props) {
    var _this;
    _classCallCheck(this, DashAlert);
    _this = _super.call(this, props);
    _this.buttons = _this.props.buttons;
    _this.maxCount = _this.getMaxCount();
    _this.state = {
      isFadeout: false
    };
    _this.timeoutID = null;
    return _this;
  }

  /**
   * ボタンがクリックされた場合の動作
   * @param {*} value ボタンのvalue
   */
  _createClass(DashAlert, [{
    key: "click",
    value: function click(value) {
      var _this2 = this;
      console.log('-- ON CLICK', value);
      this.setState({
        isFadeout: true
      });
      if (!this.timeoutID) {
        this.timeoutID = setTimeout(function () {
          _this2.setState({
            isFadeout: false
          });
          _this2.props.setProps({
            value: value,
            is_open: false
          });
          clearTimeout(_this2.timeoutID);
          _this2.timeoutID = null;
        }, this.props.duration + 100);
      }
    }

    /**
     * ボタンの最大文字数を取得
     * @returns 最大文字数
     */
  }, {
    key: "getMaxCount",
    value: function getMaxCount() {
      var cnt = 0;
      var _iterator = _createForOfIteratorHelper(this.buttons),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var btn = _step.value;
          cnt = Math.max(cnt, btn.title.length);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return cnt;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // 最大文字数設定
      if (JSON.stringify(this.buttons) !== JSON.stringify(this.props.buttons)) {
        this.buttons = this.props.buttons;
        this.maxCount = this.getMaxCount();
      }

      // 開くときに値をリセット
      if (this.props.is_open) {
        if (this.props.value || this.props.value == 0) {
          this.props.setProps({
            value: null
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      console.log(this.state.isFadeout);
      var _this$props = this.props,
        id = _this$props.id,
        message = _this$props.message,
        title = _this$props.title,
        buttons = _this$props.buttons,
        duration = _this$props.duration,
        is_open = _this$props.is_open;
      var children = [];
      // タイトル
      if (title) {
        children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
          className: "da-title"
        }, title));
      }

      // メッセージ
      children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Message, {
        className: "da-msg"
      }, message));

      // ボタン
      var btns = [];
      var _iterator2 = _createForOfIteratorHelper(buttons),
        _step2;
      try {
        var _loop = function _loop() {
          var btn = _step2.value;
          var style = {
            maxWidth: 'calc(' + _this3.maxCount + 'em + 50px)'
          };
          if (btn.color) {
            style.backgroundColor = btn.color + BACKGROUND_TRANSPARENT;
            style.borderColor = btn.color + BORDER_TRANSPARENT;
          }
          btns.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
            type: "button",
            key: btn.value,
            onClick: function onClick() {
              return _this3.click(btn.value);
            },
            style: style
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, btn.title)));
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWrapper, {
        className: "da-button-wrapper"
      }, btns));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        style: {
          display: is_open ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Background, {
        className: "da-background",
        duration: duration,
        isFadeout: this.state.isFadeout
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Alert, {
        className: "da-alert"
      }, children)));
    }
  }]);
  return DashAlert;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

DashAlert.defaultProps = {
  is_open: false,
  duration: 150
};
DashAlert.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  buttons: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object).isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  is_open: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  duration: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  output_target: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=83b5b21-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4M2I1YjIxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==