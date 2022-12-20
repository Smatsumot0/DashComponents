webpackHotUpdatelife_span_storage("main",{

/***/ "./src/lib/components/LifeSpanStorage.react.js":
/*!*****************************************************!*\
  !*** ./src/lib/components/LifeSpanStorage.react.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LifeSpanStorage; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var LifeSpanStorage = /*#__PURE__*/function (_Component) {
  _inherits(LifeSpanStorage, _Component);
  var _super = _createSuper(LifeSpanStorage);
  function LifeSpanStorage(props) {
    var _this;
    _classCallCheck(this, LifeSpanStorage);
    _this = _super.call(this, props);
    _this.key = _this.props.id;
    _this.timestampKey = _this.props.id + '-timestamp';
    _this.storage = _this.props.storage_type === 'session' ? sessionStorage : localStorage;
    return _this;
  }

  /**
   * コンポーネントがマウントされる直前に呼ばれる
   */
  _createClass(LifeSpanStorage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.props.data || this.props.data == 0) {
        // dataがある場合、セッションストレージに保存
        this.setItem(this.props.data);
      } else {
        // dataが空の場合、セッションストレージから取得する
        this.props.setProps(this.getItem());
      }

      // 10秒ごとに保存期限をチェック
      if (this.props.limit) {
        this.interval = setInterval(function () {
          var timestamp = _this2.getItem().timestamp;
          if (timestamp) {
            // 期限切れの場合削除
            var now = Date.now();
            if (Date.now() - Number(timestamp) > _this2.props.limit) {
              _this2.storage.removeItem(_this2.key);
              _this2.storage.removeItem(_this2.timestampKey);
              if (_this2.props.reload) {
                location.reload();
              }
            }
          }
        }, 10000);
      }
      this.getItem();
    }

    /**
     * コンポーネントが更新される直前に呼ばれる
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (JSON.stringify(this.props.data) !== JSON.stringify(this.getItem().data)) {
        this.setItem(this.props.data);
        this.props.setProps(this.getItem());
      }
    }

    /**
     * コンポーネントが破棄される直前に呼ばれる
     */
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }

    /**
     * セッションストレージにデータを保存
     * @param {*} data
     */
  }, {
    key: "setItem",
    value: function setItem(data) {
      this.storage.setItem(this.key, JSON.stringify(data));
      this.storage.setItem(this.timestampKey, Date.now());
    }

    /**
     * セッションストレージからデータを取得
     * @returns
     */
  }, {
    key: "getItem",
    value: function getItem() {
      var data = this.storage.getItem(this.key);
      try {
        data = JSON.parse(data);
      } catch (error) {}
      return {
        data: data,
        timestamp: this.storage.getItem(this.timestampKey)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id
      });
    }
  }]);
  return LifeSpanStorage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

LifeSpanStorage.defaultProps = {
  reload: false,
  storage_type: 'session'
};
LifeSpanStorage.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  limit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  reload: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  storage_type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType(['local', 'session']),
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=33de521-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzM2RlNTIxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==