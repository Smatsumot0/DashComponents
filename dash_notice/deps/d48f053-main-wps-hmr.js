webpackHotUpdatedash_notice("main",{

/***/ "./src/lib/components/DashNotice.react.js":
/*!************************************************!*\
  !*** ./src/lib/components/DashNotice.react.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashNotice; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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





/* -----------------------------------------------------------
 * Style
 * -----------------------------------------------------------*/
var Background = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"])));
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.attrs(function (props) {
  return {
    iconColor: props.iconColor
  };
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 30px;\n    height: 30px;\n    position: relative;\n\n    svg {\n        width: 100%;\n        height: 100%;\n        color: ", ";\n    }\n"])), function (props) {
  return props.iconColor;
});
var Badge = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.attrs(function (props) {
  return {
    color: props.color,
    badgeColor: props.badgeColor,
    borderColor: props.borderColor
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 1.2em;\n    height: 1.2em;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    right: -0.3em;\n    background-color: ", ";\n    border-radius: 50%;\n    border: solid 2px ", ";\n    color: ", ";\n    font-size: 0.7em;\n    line-height: 1;\n    box-sizing: content-box;\n"])), function (props) {
  return props.badgeColor;
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.color;
});
var NoticeBOX = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.attrs(function (props) {
  return {
    position: props.position,
    bgColor: props.bgColor,
    borderColor: props.borderColor,
    duration: props.duration
  };
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    ", ": 50%;\n    transform-origin: top right;\n    transition: transform ", "ms;\n    padding-top: calc(50% + 10px);\n\n    ul {\n        margin: 0;\n        margin-", ": -10px;\n        padding: 5px 0;\n        list-style: none;\n        background-color: ", ";\n        color: ", ";\n        border: solid 2px ", ";\n        border-radius: 10px;\n    }\n\n    li {\n        display: flex;\n        flex-direction: column;\n        padding: 5px 10px;\n\n        &:not(:first-of-type) {\n            border-top: solid thin ", ";\n        }\n    }\n"])), function (props) {
  return props.position;
}, function (props) {
  return props.duration;
}, function (props) {
  return props.position;
}, function (props) {
  return props.bgColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.borderColor;
});
var NoticeP = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin: 0;\n    line-height: 1;\n"])));
var NoticeTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(NoticeP).attrs(function (props) {
  color: props.color;
})(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 0.85em;\n"])), function (props) {
  return props.color;
});
var NoticeMessage = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(NoticeP)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 10em;\n    padding: 10px 0 10px 0.7em;\n"])));
var NoticeTime = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(NoticeP).attrs(function (props) {
  color: props.color;
})(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 0.7em;\n    margin-left: auto;\n"])), function (props) {
  return props.color;
});

/* -----------------------------------------------------------
 * Component
 * -----------------------------------------------------------*/
var DashNotice = /*#__PURE__*/function (_Component) {
  _inherits(DashNotice, _Component);
  var _super = _createSuper(DashNotice);
  function DashNotice(props) {
    var _this2;
    _classCallCheck(this, DashNotice);
    _this2 = _super.call(this, props);
    var timeout = new Date('2000/1/1 ' + _this2.props.timeout).getTime() - new Date('2000/1/1 00:00:00').getTime();
    _this2.state = {
      isOpen: false,
      timeout: timeout,
      timestamp: new Date()
    };
    _this2.isDisplayed = false;
    _this2.sort();

    // delete
    switch (_this2.props.remove_timing) {
      case 'timeout':
        _this2.deleteTimeout();
      case 'length':
        _this2.deleteLength();
    }

    // bind
    _this2.open = _this2.open.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  /**
   * ソート
   */
  _createClass(DashNotice, [{
    key: "sort",
    value: function sort() {
      if (this.props.sort === 'asc') {
        this.props.notices.sort(function (a, b) {
          return a.timestamp > b.timestamp ? 1 : -1;
        });
      } else {
        this.props.notices.sort(function (a, b) {
          return a.timestamp < b.timestamp ? 1 : -1;
        });
      }
    }

    /**
     * 経過時間がtimeoutより大きいものを削除
     */
  }, {
    key: "deleteTimeout",
    value: function deleteTimeout() {
      var _this$props = this.props,
        notices = _this$props.notices,
        setProps = _this$props.setProps;
      var newNotices = [];
      var isDelete = false;
      var _iterator = _createForOfIteratorHelper(notices),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var notice = _step.value;
          var passed = Date.now() - new Date(notice.timestamp).getTime();
          if (passed < this.state.timeout) {
            newNotices.push(notice);
          } else {
            isDelete = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (isDelete) {
        setProps({
          notices: newNotices
        });
      }
    }

    /**
     * max_lengthより多くなった場合、古い方から削除
     */
  }, {
    key: "deleteLength",
    value: function deleteLength() {
      var _this$props2 = this.props,
        notices = _this$props2.notices,
        max_length = _this$props2.max_length,
        setProps = _this$props2.setProps;
      if (notices.length > max_length) {
        if (this.props.sort === 'asc') {
          setProps({
            notices: notices.slice(notices.length - max_length, notices.length)
          });
        } else {
          setProps({
            notices: notices.slice(0, max_length)
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      this.sort();
      setInterval(function () {
        _this3.setState({
          timestamp: new Date()
        });
        if (_this3.props.remove_timing === 'timeout') {
          var _this = _this3;
          _this.deleteTimeout();
        }
      }, 10000);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.notices.length > 0) {
        // 削除タイミング
        switch (this.props.remove_timing) {
          case 'timeout':
            this.deleteTimeout();
            break;
          case 'length':
            this.deleteLength();
            break;
          default:
            break;
        }
      }
    }

    /**
     * 通知ボックス開閉
     */
  }, {
    key: "open",
    value: function open() {
      if (this.props.notices.length === 0) {
        this.setState({
          isOpen: false
        });
      } else {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }

    /**
     * 通知アイテムが選択された場合、アイテムのvalueを返す
     * @param {*} value
     */
  }, {
    key: "select",
    value: function select(value) {
      var _this4 = this;
      this.props.setProps({
        value: value
      });
      // 該当の通知を削除
      if (this.props.remove_timing === 'check') {
        var newNotices = this.props.notices.filter(function (x) {
          return x.value !== value;
        });
        setTimeout(function () {
          _this4.props.setProps({
            notices: newNotices
          });
        }, this.props.duration + 10);
      }
    }

    /**
     * 経過時間
     * @param {*} timestamp
     * @returns
     */
  }, {
    key: "getPassed",
    value: function getPassed(timestamp) {
      var ms = Date.now() - new Date(timestamp).getTime();
      var min = Math.floor(ms / 1000 / 60) % 60;
      var hours = Math.floor(ms / 1000 / 60 / 60) % 24;
      var days = Math.floor(ms / 1000 / 60 / 60 / 24);
      var passed = [];
      if (days) passed.push(days + 'days');
      if (hours) passed.push(hours + 'hours');
      if (min) passed.push(min + 'minutes');
      if (passed.length === 0) passed.push('0minutes');
      passed.push('ago');
      return passed.join(' ');
    }

    /**
     * 通知ボックスのアイテム
     * @param {*} notice データ
     * @returns
     */
  }, {
    key: "item",
    value: function item(notice) {
      var _this5 = this;
      var passed = this.getPassed(notice.timestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: notice.timestamp,
        onClick: function onClick() {
          return _this5.select(notice.value);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NoticeTitle, {
        className: "dn-title",
        color: this.props.border_color
      }, notice.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NoticeMessage, {
        className: "dn-content"
      }, notice.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NoticeTime, {
        className: "dn-time",
        color: this.props.border_color
      }, passed));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        id = _this$props3.id,
        notices = _this$props3.notices,
        icon_color = _this$props3.icon_color,
        color = _this$props3.color,
        badge_color = _this$props3.badge_color,
        border_color = _this$props3.border_color,
        position = _this$props3.position,
        duration = _this$props3.duration;
      var list = [];
      var _iterator2 = _createForOfIteratorHelper(notices),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var notice = _step2.value;
          list.push(this.item(notice));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        className: "dash-notice"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
        iconColor: icon_color,
        className: "dn-icon",
        onClick: this.open
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Background, {
        style: {
          display: this.state.isOpen ? 'block' : 'none'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaBell"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Badge, {
        color: icon_color,
        badgeColor: badge_color,
        borderColor: color,
        style: {
          display: notices.length > 0 ? 'flex' : 'none'
        }
      }, notices.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NoticeBOX, {
        position: position,
        bgColor: icon_color,
        color: color,
        borderColor: border_color,
        duration: duration,
        style: {
          transform: 'scale(' + (this.state.isOpen ? 1 : 0) + ')'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, list))));
    }
  }]);
  return DashNotice;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

DashNotice.defaultProps = {
  notices: [],
  remove_timing: 'check',
  max_length: 10,
  timeout: '00:30:00',
  icon_color: 'black',
  color: 'white',
  badge_color: 'red',
  border_color: 'gray',
  position: 'right',
  duration: 300,
  sort: 'desc'
};
DashNotice.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  notices: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
  remove_timing: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // check or timeout or length
  max_length: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  icon_color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  badge_color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  border_color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  position: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  duration: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=d48f053-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkNDhmMDUzLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==