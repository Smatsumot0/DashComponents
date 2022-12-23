import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {VscChromeClose} from 'react-icons/vsc';
import styled from 'styled-components';

/* -----------------------------------------------------------
 * Style
 * -----------------------------------------------------------*/
const ListWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    margin: 0;
    border: solid thin black;
    border-top: none;
    overflow: auto;
    position: fixed;
    z-index: 150;
    /* height: 100px; */
`;
const List = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    height: max-content;
`;

const ListItem = styled.li`
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 2px 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Value = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 2rem;
    padding: 2px 5px;
    margin: 0;
    border: solid thin black;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 50;
`;

const Label = styled.span`
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    margin: 0;
`;

const Icon = styled.span`
    position: absolute;
    height: 100%;
    width: 30px;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
`;

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class MobileDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.wrapRef = React.createRef();
        this.listRef = React.createRef();

        this.options = this.props.options;
        this.opt = {value: null, label: null};

        this.isScroll = false;
        this.isTouch = false;
        this.interval = 300;

        this.listStyle = {display: 'none'};
        this.pos = 1;
        // eslint-disable-next-line no-magic-numbers
        this.id = Math.random().toString(32).substring(2);
        this.closeStyle = {display: 'none'};

        // bind
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.clear = this.clear.bind(this);
        this.close = this.close.bind(this);
        this.scroll = this.scroll.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
    }

    toggle() {
        const clientRect = document
            .getElementById(this.id + '-value')
            .getBoundingClientRect();
        const maxHeight = getComputedStyle(
            document.getElementById(this.id + '-list')
        ).maxHeight;
        if (Number(maxHeight.replace('px', '')) <= 0) {
            return;
        }
        if (this.state.open) {
            // 閉じる
            this.listStyle = this.closeStyle;
        } else {
            // 開く
            this.listStyle = {
                display: 'block',
                width: clientRect.width,
            };
        }
        this.setState({open: !this.state.open});
    }

    select(e) {
        const opt = e.currentTarget.dataset;
        this.listStyle = this.closeStyle;
        this.opt = {value: opt.value, label: opt.label};
        this.setState({open: false});
        this.props.setProps({value: opt.value});
    }

    clear(e) {
        this.opt = {value: null, label: null};
        this.props.setProps({value: null});
        if (e) {
            e.stopPropagation();
        }
    }

    close() {
        this.listStyle = this.closeStyle;
        this.setState({open: false});
    }

    // scroll() {
    //     // 一番上までスクロールされたらtop:1
    //     const scrollTop = this.wrapRef.current.scrollTop;
    //     console.log(scrollTop);
    //     if (scrollTop <= 0) {
    //         // ios bug
    //         this.pos = 1;
    //         this.wrapRef.current.scrollTop = this.pos;
    //         return;
    //     }

    //     // 一番下までスクロールされたらtop: height - 1
    //     const listHeight = this.listRef.current.scrollHeight;
    //     const wrapHeight = this.wrapRef.current.getBoundingClientRect().height;
    //     if (wrapHeight + scrollTop > listHeight) {
    //         this.pos = listHeight - wrapHeight - 1;
    //         this.wrapRef.current.scrollTop = this.pos;
    //         return;
    //     }

    //     this.pos = null;
    // }

    /**
     * スクロール中
     */
    scroll() {
        if (!this.isScroll) {
            this.isScroll = true;
        }
        // スクロール終了後300msでスクロール位置設定
        const timeout = setTimeout(() => {
            if (this.isScroll) {
                this.isScroll = false;
                console.log(this.isTouch);
                if (!this.isTouch) {
                    this.setScrollTop();
                }
            }
            clearTimeout(timeout);
        }, this.interval);
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
        const target = this.wrapRef.current;
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

    componentDidUpdate() {
        // optionsの変更
        if (
            JSON.stringify(this.options) !== JSON.stringify(this.props.options)
        ) {
            const opt = this.getOption();
            this.opt = opt;
            this.options = this.props.options;
            this.props.setProps({value: opt.value});
        }

        // valueの変更
        // eslint-disable-next-line eqeqeq
        if (this.opt.value != this.props.value) {
            this.opt = this.getOption();
        }

        // スクロール位置調整
        if (this.pos) {
            this.wrapRef.current.scrollTop = this.pos;
        }
    }

    getOption() {
        const {options, value} = this.props;
        if (value !== null && options) {
            // eslint-disable-next-line eqeqeq
            const result = options.filter((opt) => opt.value == value);
            if (result.length > 0) {
                return {label: result[0].label, value: value};
            }
        }
        // optionに存在しない値
        return {label: null, value: null};
    }

    render() {
        const {id, className, options, notfoundMsg, clearable} = this.props;

        const li = [];
        if (options && options.length > 0) {
            for (const opt of options) {
                li.push(
                    <ListItem
                        key={opt.value}
                        data-value={opt.value}
                        data-label={opt.label}
                        onClick={this.select}
                    >
                        <span>{opt.label}</span>
                    </ListItem>
                );
            }
        } else {
            li.push(
                <ListItem key={'not_found'} onClick={this.select}>
                    <span>
                        {notfoundMsg ? notfoundMsg : 'No results found'}
                    </span>
                </ListItem>
            );
        }

        return (
            <div
                id={id}
                style={{width: '100%', position: 'relative'}}
                className={
                    'mobile_dropdown ' +
                    className +
                    (this.state.open ? ' open' : '')
                }
            >
                <Background
                    style={{display: this.state.open ? 'block' : 'none'}}
                    onTouchEnd={this.close}
                ></Background>
                <Value
                    id={this.id + '-value'}
                    className="mobile_dropdown-value"
                    onTouchEnd={this.toggle}
                >
                    <Label>{this.opt.label}</Label>
                    {clearable ? (
                        <Icon onTouchEnd={this.clear}>
                            <VscChromeClose />
                        </Icon>
                    ) : null}
                </Value>
                <ListWrapper
                    className="mobile_dropdown-list"
                    style={this.listStyle}
                    ref={this.wrapRef}
                    onScroll={this.scroll}
                    onTouchStart={this.touchStart}
                    onTouchEnd={this.touchEnd}
                >
                    <List id={this.id + '-list'} ref={this.listRef}>
                        {li}
                    </List>
                </ListWrapper>
            </div>
        );
    }
}

MobileDropdown.defaultProps = {
    clearable: true,
};

MobileDropdown.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    notfoundMsg: PropTypes.string,
    clearable: PropTypes.bool,
    setProps: PropTypes.func,
};
