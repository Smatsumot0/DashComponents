import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {VscChromeClose} from 'react-icons/vsc';
import styled from 'styled-components';

/* -----------------------------------------------------------
 * Style
 * -----------------------------------------------------------*/
const List = styled.ul`
    box-sizing: border-box;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    border: solid thin black;
    border-top: none;
    overflow-y: scroll;
    position: fixed;
    z-index: 150;
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
        this.state = {value: null, open: false};
        this.listStyle = {display: 'none'};
        this.pos = {};
        // eslint-disable-next-line no-magic-numbers
        this.id = Math.random().toString(32).substring(2);
        this.closeStyle = {display: 'none'};
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

    select(opt) {
        this.listStyle = this.closeStyle;
        this.setState({open: false});
        this.props.setProps({value: opt.value});
    }

    clear(e) {
        this.props.setProps({value: null});
        if (e) {
            e.stopPropagation();
        }
    }

    close() {
        this.listStyle = this.closeStyle;
        this.setState({open: false});
    }

    render() {
        const {id, className, options, value, notfoundMsg, clearable} =
            this.props;

        let label = null;
        if (value !== null) {
            if (options) {
                const result = options.filter((opt) => opt.value === value);
                if (result.length > 0) {
                    // ラベル初期設定
                    label = result[0].label;
                    // eslint-disable-next-line react/no-direct-mutation-state
                    this.state.value = result[0].value;
                } else {
                    // optionに存在しない値
                    // eslint-disable-next-line react/no-direct-mutation-state
                    this.state.value = null;
                }
            }
        }

        const li = [];
        if (options && options.length > 0) {
            for (const opt of options) {
                li.push(
                    <ListItem key={opt.value} onClick={() => this.select(opt)}>
                        <span>{opt.label}</span>
                    </ListItem>
                );
            }
        } else {
            li.push(
                <ListItem key={'not_found'} onClick={() => this.select({})}>
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
                    onTouchEnd={() => this.close()}
                ></Background>
                <Value
                    id={this.id + '-value'}
                    className="mobile_dropdown-value"
                    onTouchEnd={() => this.toggle()}
                >
                    <Label>{label}</Label>
                    {clearable ? (
                        <Icon onTouchEnd={(e) => this.clear(e)}>
                            <VscChromeClose />
                        </Icon>
                    ) : null}
                </Value>
                <List
                    id={this.id + '-list'}
                    className="mobile_dropdown-list"
                    style={this.listStyle}
                >
                    {li}
                </List>
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
