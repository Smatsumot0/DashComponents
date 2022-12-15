webpackHotUpdatetouchable_component("main",{

/***/ "./node_modules/react-swipeable/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-swipeable/es/index.js ***!
  \**************************************************/
/*! exports provided: DOWN, LEFT, RIGHT, UP, useSwipeable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSwipeable", function() { return useSwipeable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const LEFT = "Left";
const RIGHT = "Right";
const UP = "Up";
const DOWN = "Down";

/* global document */
const defaultProps = {
    delta: 10,
    preventScrollOnSwipe: false,
    rotationAngle: 0,
    trackMouse: false,
    trackTouch: true,
    swipeDuration: Infinity,
    touchEventOptions: { passive: true },
};
const initialState = {
    first: true,
    initial: [0, 0],
    start: 0,
    swiping: false,
    xy: [0, 0],
};
const mouseMove = "mousemove";
const mouseUp = "mouseup";
const touchEnd = "touchend";
const touchMove = "touchmove";
const touchStart = "touchstart";
function getDirection(absX, absY, deltaX, deltaY) {
    if (absX > absY) {
        if (deltaX > 0) {
            return RIGHT;
        }
        return LEFT;
    }
    else if (deltaY > 0) {
        return DOWN;
    }
    return UP;
}
function rotateXYByAngle(pos, angle) {
    if (angle === 0)
        return pos;
    const angleInRadians = (Math.PI / 180) * angle;
    const x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
    const y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
    return [x, y];
}
function getHandlers(set, handlerProps) {
    const onStart = (event) => {
        const isTouch = "touches" in event;
        // if more than a single touch don't track, for now...
        if (isTouch && event.touches.length > 1)
            return;
        set((state, props) => {
            // setup mouse listeners on document to track swipe since swipe can leave container
            if (props.trackMouse && !isTouch) {
                document.addEventListener(mouseMove, onMove);
                document.addEventListener(mouseUp, onUp);
            }
            const { clientX, clientY } = isTouch ? event.touches[0] : event;
            const xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
            props.onTouchStartOrOnMouseDown &&
                props.onTouchStartOrOnMouseDown({ event });
            return Object.assign(Object.assign(Object.assign({}, state), initialState), { initial: xy.slice(), xy, start: event.timeStamp || 0 });
        });
    };
    const onMove = (event) => {
        set((state, props) => {
            const isTouch = "touches" in event;
            // Discount a swipe if additional touches are present after
            // a swipe has started.
            if (isTouch && event.touches.length > 1) {
                return state;
            }
            // if swipe has exceeded duration stop tracking
            if (event.timeStamp - state.start > props.swipeDuration) {
                return state.swiping ? Object.assign(Object.assign({}, state), { swiping: false }) : state;
            }
            const { clientX, clientY } = isTouch ? event.touches[0] : event;
            const [x, y] = rotateXYByAngle([clientX, clientY], props.rotationAngle);
            const deltaX = x - state.xy[0];
            const deltaY = y - state.xy[1];
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            const time = (event.timeStamp || 0) - state.start;
            const velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1);
            const vxvy = [deltaX / (time || 1), deltaY / (time || 1)];
            const dir = getDirection(absX, absY, deltaX, deltaY);
            // if swipe is under delta and we have not started to track a swipe: skip update
            const delta = typeof props.delta === "number"
                ? props.delta
                : props.delta[dir.toLowerCase()] ||
                    defaultProps.delta;
            if (absX < delta && absY < delta && !state.swiping)
                return state;
            const eventData = {
                absX,
                absY,
                deltaX,
                deltaY,
                dir,
                event,
                first: state.first,
                initial: state.initial,
                velocity,
                vxvy,
            };
            // call onSwipeStart if present and is first swipe event
            eventData.first && props.onSwipeStart && props.onSwipeStart(eventData);
            // call onSwiping if present
            props.onSwiping && props.onSwiping(eventData);
            // track if a swipe is cancelable (handler for swiping or swiped(dir) exists)
            // so we can call preventDefault if needed
            let cancelablePageSwipe = false;
            if (props.onSwiping ||
                props.onSwiped ||
                props[`onSwiped${dir}`]) {
                cancelablePageSwipe = true;
            }
            if (cancelablePageSwipe &&
                props.preventScrollOnSwipe &&
                props.trackTouch &&
                event.cancelable) {
                event.preventDefault();
            }
            return Object.assign(Object.assign({}, state), { 
                // first is now always false
                first: false, eventData, swiping: true });
        });
    };
    const onEnd = (event) => {
        set((state, props) => {
            let eventData;
            if (state.swiping && state.eventData) {
                // if swipe is less than duration fire swiped callbacks
                if (event.timeStamp - state.start < props.swipeDuration) {
                    eventData = Object.assign(Object.assign({}, state.eventData), { event });
                    props.onSwiped && props.onSwiped(eventData);
                    const onSwipedDir = props[`onSwiped${eventData.dir}`];
                    onSwipedDir && onSwipedDir(eventData);
                }
            }
            else {
                props.onTap && props.onTap({ event });
            }
            props.onTouchEndOrOnMouseUp && props.onTouchEndOrOnMouseUp({ event });
            return Object.assign(Object.assign(Object.assign({}, state), initialState), { eventData });
        });
    };
    const cleanUpMouse = () => {
        // safe to just call removeEventListener
        document.removeEventListener(mouseMove, onMove);
        document.removeEventListener(mouseUp, onUp);
    };
    const onUp = (e) => {
        cleanUpMouse();
        onEnd(e);
    };
    /**
     * The value of passive on touchMove depends on `preventScrollOnSwipe`:
     * - true => { passive: false }
     * - false => { passive: true } // Default
     *
     * NOTE: When preventScrollOnSwipe is true, we attempt to call preventDefault to prevent scroll.
     *
     * props.touchEventOptions can also be set for all touch event listeners,
     * but for `touchmove` specifically when `preventScrollOnSwipe` it will
     * supersede and force passive to false.
     *
     */
    const attachTouch = (el, props) => {
        let cleanup = () => { };
        if (el && el.addEventListener) {
            const baseOptions = Object.assign(Object.assign({}, defaultProps.touchEventOptions), props.touchEventOptions);
            // attach touch event listeners and handlers
            const tls = [
                [touchStart, onStart, baseOptions],
                // preventScrollOnSwipe option supersedes touchEventOptions.passive
                [
                    touchMove,
                    onMove,
                    Object.assign(Object.assign({}, baseOptions), (props.preventScrollOnSwipe ? { passive: false } : {})),
                ],
                [touchEnd, onEnd, baseOptions],
            ];
            tls.forEach(([e, h, o]) => el.addEventListener(e, h, o));
            // return properly scoped cleanup method for removing listeners, options not required
            cleanup = () => tls.forEach(([e, h]) => el.removeEventListener(e, h));
        }
        return cleanup;
    };
    const onRef = (el) => {
        // "inline" ref functions are called twice on render, once with null then again with DOM element
        // ignore null here
        if (el === null)
            return;
        set((state, props) => {
            // if the same DOM el as previous just return state
            if (state.el === el)
                return state;
            const addState = {};
            // if new DOM el clean up old DOM and reset cleanUpTouch
            if (state.el && state.el !== el && state.cleanUpTouch) {
                state.cleanUpTouch();
                addState.cleanUpTouch = void 0;
            }
            // only attach if we want to track touch
            if (props.trackTouch && el) {
                addState.cleanUpTouch = attachTouch(el, props);
            }
            // store event attached DOM el for comparison, clean up, and re-attachment
            return Object.assign(Object.assign(Object.assign({}, state), { el }), addState);
        });
    };
    // set ref callback to attach touch event listeners
    const output = {
        ref: onRef,
    };
    // if track mouse attach mouse down listener
    if (handlerProps.trackMouse) {
        output.onMouseDown = onStart;
    }
    return [output, attachTouch];
}
function updateTransientState(state, props, previousProps, attachTouch) {
    // if trackTouch is off or there is no el, then remove handlers if necessary and exit
    if (!props.trackTouch || !state.el) {
        if (state.cleanUpTouch) {
            state.cleanUpTouch();
        }
        return Object.assign(Object.assign({}, state), { cleanUpTouch: undefined });
    }
    // trackTouch is on, so if there are no handlers attached, attach them and exit
    if (!state.cleanUpTouch) {
        return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });
    }
    // trackTouch is on and handlers are already attached, so if preventScrollOnSwipe changes value,
    // remove and reattach handlers (this is required to update the passive option when attaching
    // the handlers)
    if (props.preventScrollOnSwipe !== previousProps.preventScrollOnSwipe ||
        props.touchEventOptions.passive !== previousProps.touchEventOptions.passive) {
        state.cleanUpTouch();
        return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });
    }
    return state;
}
function useSwipeable(options) {
    const { trackMouse } = options;
    const transientState = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object.assign({}, initialState));
    const transientProps = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object.assign({}, defaultProps));
    // track previous rendered props
    const previousProps = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](Object.assign({}, transientProps.current));
    previousProps.current = Object.assign({}, transientProps.current);
    // update current render props & defaults
    transientProps.current = Object.assign(Object.assign({}, defaultProps), options);
    // Force defaults for config properties
    let defaultKey;
    for (defaultKey in defaultProps) {
        if (transientProps.current[defaultKey] === void 0) {
            transientProps.current[defaultKey] = defaultProps[defaultKey];
        }
    }
    const [handlers, attachTouch] = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => getHandlers((stateSetter) => (transientState.current = stateSetter(transientState.current, transientProps.current)), { trackMouse }), [trackMouse]);
    transientState.current = updateTransientState(transientState.current, transientProps.current, previousProps.current, attachTouch);
    return handlers;
}


//# sourceMappingURL=index.js.map


/***/ }),

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
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
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
console.log('Swipeable', react_swipeable__WEBPACK_IMPORTED_MODULE_2__["swipeable"]);
var TouchableComponent = /*#__PURE__*/function (_Component) {
  _inherits(TouchableComponent, _Component);
  var _super = _createSuper(TouchableComponent);
  function TouchableComponent(props) {
    var _this;
    _classCallCheck(this, TouchableComponent);
    _this = _super.call(this, props);
    _this.state = {
      active: false
    };
    _this.swipedTop = _this.swipedTop.bind(_assertThisInitialized(_this));
    _this.swipedRight = _this.swipedRight.bind(_assertThisInitialized(_this));
    _this.swipedBottom = _this.swipedBottom.bind(_assertThisInitialized(_this));
    _this.swipedLeft = _this.swipedLeft.bind(_assertThisInitialized(_this));
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
    key: "swipedTop",
    value: function swipedTop(e, x, y, isFlick, velocity) {
      console.log('--- Swiped Top', e, x, y, isFlick, velocity);
    }
  }, {
    key: "swipedLeft",
    value: function swipedLeft(e, x, y, isFlick, velocity) {
      console.log('--- Swiped Left', e, x, y, isFlick, velocity);
    }
  }, {
    key: "swipedBottom",
    value: function swipedBottom(e, x, y, isFlick, velocity) {
      console.log('--- Swiped Bottom', e, x, y, isFlick, velocity);
    }
  }, {
    key: "swipedRight",
    value: function swipedRight(e, x, y, isFlick, velocity) {
      console.log('--- Swiped Right', e, x, y, isFlick, velocity);
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
            y: t.clientY - rect.top
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      console.log(touches);
      return touches;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        className = _this$props.className,
        setProps = _this$props.setProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        className: className + (this.state.active ? ' active' : ''),
        onTouchStart: function onTouchStart(e) {
          _this2.updateActive(true);
          setProps({
            start_timestamp: e.timeStamp
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          _this2.updateActive(false);
          setProps({
            end_timestamp: e.timeStamp
          });
        },
        onTouchMove: function onTouchMove(e) {
          return setProps({
            touches: _this2.touchData(e)
          });
        },
        onClick: function onClick(e) {
          return setProps({
            end_timestamp: e.timeStamp
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Swipeable, {
        onSwipedTop: this.swipedTop,
        onSwipedLeft: this.swipedLeft,
        onSwipedBottom: this.swipedBottom,
        onSwipedRight: this.swipedRight
      }, children));
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
  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=20dd6a9-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMGRkNmE5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==