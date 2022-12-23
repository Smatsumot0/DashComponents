webpackHotUpdatestorage_observer("main",{

/***/ "./src/lib/components/StorageObserver.react.js":
/*!*****************************************************!*\
  !*** ./src/lib/components/StorageObserver.react.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StorageObserver; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2, _templateObject3;
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



var Background = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: #00000099;\n"])));
var Alert = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 10px 20px;\n    background-color: white;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n"])));
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
var StorageObserver = /*#__PURE__*/function (_Component) {
  _inherits(StorageObserver, _Component);
  var _super = _createSuper(StorageObserver);
  function StorageObserver(props) {
    var _this;
    _classCallCheck(this, StorageObserver);
    _this = _super.call(this, props);
    _this.state = {
      clear: false
    };
    _this.LAST_OPERATE_KEY = 'last_operate';
    _this.interval = null;

    // bind
    _this.setLastOperate = _this.setLastOperate.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(StorageObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.setLastOperate();
      window.addEventListener('touchstart', this.setLastOperate);
      window.addEventListener('touchend', this.setLastOperate);
      window.addEventListener('touchmove', this.setLastOperate);
      this.interval = setInterval(function () {
        var timestamp = sessionStorage.getItem(_this2.LAST_OPERATE_KEY);
        if (timestamp && Date.now() - Number(timestamp) > _this2.props.limit) {
          sessionStorage.clear();
          _this2.setState({
            clear: true
          });
          // alert(MSG.SESSION_TIMEOUT);
          // location.reload();
        }
      }, this.props.interval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
      window.removeEventListener('touchstart', this.setLastOperate);
      window.removeEventListener('touchend', this.setLastOperate);
      window.removeEventListener('touchmove', this.setLastOperate);
    }
  }, {
    key: "setLastOperate",
    value: function setLastOperate() {
      sessionStorage.setItem(this.LAST_OPERATE_KEY, Date.now());
      this.setState({
        clear: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        id = _this$props.id,
        show_alert = _this$props.show_alert,
        message = _this$props.message,
        button_title = _this$props.button_title,
        setProps = _this$props.setProps;
      var children;
      if (show_alert) {
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Background, {
          id: id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Alert, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "msg"
        }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
          type: "button"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, button_title))));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        className: "storage_observer"
      }, children);
    }
  }]);
  return StorageObserver;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

StorageObserver.defaultProps = {
  interval: 10000,
  show_alert: true,
  message: 'Reload.',
  button_title: 'OK',
  reload: true
};
StorageObserver.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  interval: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  show_alert: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  button_title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  reload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=0f392fb-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwZjM5MmZiLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==