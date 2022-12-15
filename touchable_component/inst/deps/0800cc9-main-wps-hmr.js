webpackHotUpdatetouchable_component("main",{

/***/ "./src/lib/components/TouchableComponent.react.js":
/*!********************************************************!*\
  !*** ./src/lib/components/TouchableComponent.react.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TouchableComponent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
var TouchableComponent = /*#__PURE__*/function (_Component) {
  _inherits(TouchableComponent, _Component);
  var _super = _createSuper(TouchableComponent);
  function TouchableComponent(props) {
    var _this;
    _classCallCheck(this, TouchableComponent);
    _this = _super.call(this, props);

    // swipe
    _this.startPos = {};
    _this.endPos = {};
    _this.minDistance = 100;
    _this.maxTime = 150;

    // long tap
    _this.count = 0;
    _this.maxCount = 5;
    _this.interval = 100;
    _this.timerId = null;
    _this.state = {
      active: false,
      isLongTap: false
    };
    return _this;
  }
  _createClass(TouchableComponent, [{
    key: "updateActive",
    value: function updateActive(isActive) {
      this.setState({
        active: isActive
      });
    }
  }, {
    key: "touchData",
    value: function touchData(e) {
      var touches = [];
      var rect = e.target.getBoundingClientRect();
      var _iterator = _createForOfIteratorHelper(e.touches),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var t = _step.value;
          touches.push({
            x: t.clientX - rect.left,
            y: t.clientY - rect.Up
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return touches;
    }

    /* ----------------------------------------------------------------------
     * スワイプ
     * ---------------------------------------------------------------------*/
  }, {
    key: "swipeStart",
    value: function swipeStart(e) {
      this.startPos = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
        timeStamp: Date.now()
      };
      this.endPos = {};
    }
  }, {
    key: "swipeMove",
    value: function swipeMove(e) {
      this.endPos = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY
      };
    }
  }, {
    key: "swipeEnd",
    value: function swipeEnd(e) {
      this.endPos.timeStamp = Date.now();
      var info = this.getSwipeInfo();
      if (!info) return;

      // 最大時間以上の場合 何もしない
      if (info.isTimeOver) {
        console.log('--- TOUCHABLE COMPONENT MAX TIME', info.time + ' > ' + this.maxTime);
        return;
      }
      if (info.isShort) {
        // 最短距離以下 フリック
        console.log('--- TOUCHABLE COMPONENT FLICK', info.direction);
        this.props.setProps({
          direction: info.direction,
          flick: Date.now()
        });
      } else {
        // 最短距離以上 スワイプ
        console.log('--- TOUCHABLE COMPONENT SWIPE', info.direction);
        this.props.setProps({
          direction: info.direction,
          swipe: Date.now()
        });
      }
    }

    /* ----------------------------------------------------------------------
     * 長押し
     * ---------------------------------------------------------------------*/
  }, {
    key: "longTap",
    value: function longTap() {
      var _this2 = this;
      this.timerId = setInterval(function () {
        _this2.count++;
        if (_this2.count === _this2.maxCount && !_this2.getSwipeInfo()) {
          _this2.setState({
            isLongTap: true
          });
          _this2.props.setProps({
            long_tap: Date.now()
          });
          console.log('--- TOUCHABLE COMPONENT LONG TAP');
        }
      }, this.interval);
    }
  }, {
    key: "longTapEnd",
    value: function longTapEnd() {
      if (this.state.isLongTap) {
        this.props.setProps({
          long_tap_end: Date.now()
        });
        var info = this.getSwipeInfo();
        if (info && !info.isShort) {
          console.log('--- TOUCHABLE COMPONENT LONG SWIPE', info.direction);
          this.props.setProps({
            direction: info.direction,
            long_swipe: Date.now()
          });
        }
      }
      this.count = 0;
      this.setState({
        isLongTap: false
      });
      clearInterval(this.timerId);
    }

    /**
     * スワイプ情報取得
     * @returns
     */
  }, {
    key: "getSwipeInfo",
    value: function getSwipeInfo() {
      if (!this.endPos.x || !this.startPos.x) return null;
      var x = this.endPos.x - this.startPos.x;
      var y = this.endPos.y - this.startPos.y;
      var isTimeOver = false;
      var time = null;
      if (this.endPos.timeStamp) {
        time = this.endPos.timeStamp - this.startPos.timeStamp;
        isTimeOver = time > this.maxTime;
      }

      // スワイプの方向
      var direction;
      var distance;
      if (Math.abs(x) > Math.abs(y)) {
        direction = x < 0 ? 'left' : 'right';
        distance = Math.abs(x);
      } else {
        direction = y < 0 ? 'up' : 'down';
        distance = Math.abs(y);
      }
      return {
        time: time,
        direction: direction,
        distance: distance,
        isTimeOver: isTimeOver,
        isShort: distance < this.minDistance
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        className = _this$props.className,
        setProps = _this$props.setProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        className: className + (this.state.active ? ' active' : '') + (this.state.isLongTap ? ' long_tap' : ''),
        onTouchStart: function onTouchStart(e) {
          _this3.updateActive(true);
          _this3.longTap();
          _this3.swipeStart(e);
          setProps({
            start_timestamp: Date.now()
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          _this3.updateActive(false);
          _this3.longTapEnd();
          _this3.swipeEnd(e);
          setProps({
            end_timestamp: Date.now()
          });
        },
        onTouchMove: function onTouchMove(e) {
          _this3.swipeMove(e);
          setProps({
            touches: _this3.touchData(e)
          });
        },
        onClick: function onClick(e) {
          return setProps({
            end_timestamp: Date.now()
          });
        }
      }, children);
    }
  }]);
  return TouchableComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

TouchableComponent.defaultProps = {};
TouchableComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  n_clicks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=0800cc9-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwODAwY2M5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==