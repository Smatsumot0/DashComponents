import PropTypes from 'prop-types';
import React, {Component} from 'react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashCookies extends Component {
    constructor(props) {
        super(props);
        this.key = this.props.id;

        if (this.props.data || this.props.data == 0) {
            // dataがある場合、Cookieに保存
            this.setItem(this.props.data);
        } else {
            // dataが空の場合、Cookieから取得する
            this.props.setProps({data: this.getItem()});
        }
    }

    /**
     * コンポーネントが更新される直前に呼ばれる
     */
    componentDidUpdate() {
        if (
            JSON.stringify(this.props.data) !== JSON.stringify(this.getItem())
        ) {
            this.setItem(this.props.data);
            this.props.setProps(this.getItem());
        }
    }

    /**
     * Cookieにデータを保存
     * @param {*} data
     */
    setItem(data) {
        const value = this.key + '=' + JSON.stringify(data);
        document.cookie = this.props.max_age
            ? value + '; Max-Age=' + this.props.max_age
            : value;
    }

    /**
     * Cookieからデータを取得
     * @returns
     */
    getItem() {
        const cookies = document.cookie;
        const arr = cookies.split('; ');
        let data;
        for (const itemStr of arr) {
            const item = itemStr.split('=');
            if (item[0] === this.key) {
                data = item[1];
                break;
            }
        }

        try {
            data = JSON.parse(data);
        } catch (error) {}
        return data;
    }

    render() {
        const {id} = this.props;
        return <div id={id}></div>;
    }
}

DashCookies.defaultProps = {};

DashCookies.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
    ]),
    max_age: PropTypes.number,
    setProps: PropTypes.func,
};
