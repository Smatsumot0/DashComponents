import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';

const Outer = styled.div`
    height: 1000px;
    overflow: auto;
`;

const Inner = styled.div``;

export default class IosScrollWrapper extends Component {
    constructor(props) {
        super(props);
        this.outerRef = React.createRef();
        this.innerRef = React.createRef();

        this.isScroll = false;
        this.isTouch = false;

        // bind
        this.scroll = this.scroll.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
    }

    /**
     * スクロール中
     */
    scroll() {
        if (!this.isScroll) this.isScroll = true;
        // スクロール終了後300msでスクロール位置設定
        const timeout = setTimeout(() => {
            if (this.isScroll) {
                this.isScroll = false;
                if (!this.isTouch) {
                    this.setScrollTop();
                }
            }
            clearTimeout(timeout);
        }, 300);
    }

    /**
     * タッチ開始
     */
    touchStart() {
        this.isTouch = true;
    }

    /**
     * タッチ終了
     */
    touchEnd() {
        this.isTouch = false;
        this.setScrollTop();
    }

    /**
     * スクロール位置設定
     * @returns
     */
    setScrollTop() {
        let target = this.outerRef.current;
        console.log(target.scrollTop);
        if (target.scrollTop <= 0) {
            target.scrollTop = 1;
            console.log('min', target.scrollTop);
            return;
        }
        const height = target.getBoundingClientRect().height;
        if (target.scrollTop + height > target.scrollHeight - 1) {
            target.scrollTop = target.scrollHeight - height - 1;
            console.log(
                'max',
                target.scrollTop,
                target.scrollHeight - height - 1
            );
            return;
        }
    }

    render() {
        const {id, children} = this.props;

        return (
            <Outer
                id={id}
                className="ios-scroll-outer"
                ref={this.outerRef}
                onScroll={this.scroll}
                onTouchStart={this.touchStart}
                onTouchEnd={this.touchEnd}
            >
                <Inner className="ios-scroll-inner" ref={this.innerRef}>
                    {children}
                </Inner>
            </Outer>
        );
    }
}

IosScrollWrapper.defaultProps = {};

IosScrollWrapper.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    setProps: PropTypes.func,
};
