import PropTypes from 'prop-types';
import React, {Component} from 'react';
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class TouchableComponent extends Component {
    constructor(props) {
        super(props);

        // swipe
        this.startPos = {};
        this.endPos = {};
        this.minDistance = 100;
        this.maxTime = 150;

        // long tap
        this.count = 0;
        this.maxCount = 5;
        this.interval = 100;
        this.timerId = null;

        this.state = {active: false, isLongTap: false};
    }
    updateActive(isActive) {
        this.setState({active: isActive});
    }
    touchData(e) {
        let touches = [];
        const rect = e.target.getBoundingClientRect();
        for (let t of e.touches) {
            touches.push({
                x: t.clientX - window.scrollX - rect.left,
                y: t.clientY - window.scrollY - rect.top,
                clientX: t.clientX,
                clientY: t.clientY,
                top: rect.top,
                left: rect.left,
            });
        }
        return touches;
    }

    /* ----------------------------------------------------------------------
     * スワイプ
     * ---------------------------------------------------------------------*/
    swipeStart(e) {
        this.startPos = {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY,
            timeStamp: Date.now(),
        };
        this.endPos = {};
    }
    swipeMove(e) {
        this.endPos = {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY,
        };
    }
    swipeEnd(e) {
        this.endPos.timeStamp = Date.now();
        const info = this.getSwipeInfo();
        if (!info) return;

        // 最大時間以上の場合 何もしない
        if (info.isTimeOver) {
            console.log(
                '--- TOUCHABLE COMPONENT MAX TIME',
                info.time + ' > ' + this.maxTime
            );
            this.props.setProps({direction: info.direction});
            return;
        }

        if (info.isShort) {
            // 最短距離以下 フリック
            console.log('--- TOUCHABLE COMPONENT FLICK', info.direction);
            this.props.setProps({direction: info.direction, flick: Date.now()});
        } else {
            // 最短距離以上 スワイプ
            console.log('--- TOUCHABLE COMPONENT SWIPE', info.direction);
            this.props.setProps({direction: info.direction, swipe: Date.now()});
        }
    }

    /* ----------------------------------------------------------------------
     * 長押し
     * ---------------------------------------------------------------------*/
    longTap() {
        this.timerId = setInterval(() => {
            this.count++;
            if (this.count === this.maxCount && !this.getSwipeInfo()) {
                this.setState({isLongTap: true});
                this.props.setProps({long_tap: Date.now()});
                console.log('--- TOUCHABLE COMPONENT LONG TAP');
            }
        }, this.interval);
    }
    longTapEnd() {
        if (this.state.isLongTap) {
            this.props.setProps({long_tap_end: Date.now()});
            const info = this.getSwipeInfo();
            if (info && !info.isShort) {
                console.log(
                    '--- TOUCHABLE COMPONENT LONG SWIPE',
                    info.direction
                );
                this.props.setProps({
                    direction: info.direction,
                    long_swipe: Date.now(),
                });
            }
        }

        this.count = 0;
        this.setState({isLongTap: false});
        clearInterval(this.timerId);
    }

    /**
     * スワイプ情報取得
     * @returns
     */
    getSwipeInfo() {
        if (!this.endPos.x || !this.startPos.x) return null;

        const x = this.endPos.x - this.startPos.x;
        const y = this.endPos.y - this.startPos.y;

        let isTimeOver = false;
        let time = null;
        if (this.endPos.timeStamp) {
            time = this.endPos.timeStamp - this.startPos.timeStamp;
            isTimeOver = time > this.maxTime;
        }

        // スワイプの方向
        let direction;
        let distance;
        if (Math.abs(x) > Math.abs(y)) {
            direction = x < 0 ? 'left' : 'right';
            distance = Math.abs(x);
        } else {
            direction = y < 0 ? 'up' : 'down';
            distance = Math.abs(y);
        }

        return {
            time,
            direction,
            distance,
            isTimeOver,
            isShort: distance < this.minDistance,
        };
    }

    render() {
        const {children, id, className, setProps} = this.props;
        return (
            <div
                id={id}
                className={
                    'touchable_component ' +
                    className +
                    (this.state.active ? ' active' : '') +
                    (this.state.isLongTap ? ' long_tap' : '')
                }
                onTouchStart={(e) => {
                    this.updateActive(true);
                    this.longTap();
                    this.swipeStart(e);
                    setProps({
                        start_timestamp: Date.now(),
                        touches: this.touchData(e),
                    });
                }}
                onTouchEnd={(e) => {
                    this.updateActive(false);
                    this.longTapEnd();
                    this.swipeEnd(e);
                    setProps({end_timestamp: Date.now()});
                }}
                onTouchMove={(e) => {
                    this.swipeMove(e);
                    setProps({touches: this.touchData(e)});
                }}
                onClick={(e) => setProps({end_timestamp: Date.now()})}
            >
                {children}
            </div>
        );
    }
}

TouchableComponent.defaultProps = {};

TouchableComponent.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    n_clicks: PropTypes.number,
    setProps: PropTypes.func,
};
