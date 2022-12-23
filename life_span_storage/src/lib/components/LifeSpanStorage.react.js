import PropTypes from 'prop-types';
import React, {Component} from 'react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class LifeSpanStorage extends Component {
    constructor(props) {
        super(props);
        this.key = this.props.id;
        this.timestampKey = this.props.id + '-timestamp';
        this.storage =
            this.props.storage_type === 'session'
                ? sessionStorage
                : localStorage;
    }

    /**
     * コンポーネントがマウントされる直前に呼ばれる
     */
    componentDidMount() {
        if (this.props.data || this.props.data == 0) {
            // dataがある場合、セッションストレージに保存
            this.setItem(this.props.data);
        } else {
            // dataが空の場合、セッションストレージから取得する
            this.props.setProps(this.getItem());
        }

        // 10秒ごとに保存期限をチェック
        if (this.props.limit) {
            this.interval = setInterval(() => {
                const timestamp = this.getItem().timestamp;
                if (timestamp) {
                    // 期限切れの場合削除
                    if (Date.now() - Number(timestamp) > this.props.limit) {
                        this.storage.removeItem(this.key);
                        this.storage.removeItem(this.timestampKey);
                        if (this.props.reload) {
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
    componentDidUpdate() {
        if (
            JSON.stringify(this.props.data) !==
            JSON.stringify(this.getItem().data)
        ) {
            this.setItem(this.props.data);
            this.props.setProps(this.getItem());
        }
    }

    /**
     * コンポーネントが破棄される直前に呼ばれる
     */
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    /**
     * セッションストレージにデータを保存
     * @param {*} data
     */
    setItem(data) {
        this.storage.setItem(this.key, JSON.stringify(data));
        this.storage.setItem(this.timestampKey, Date.now());
    }

    /**
     * セッションストレージからデータを取得
     * @returns
     */
    getItem() {
        let data = this.storage.getItem(this.key);
        try {
            data = JSON.parse(data);
        } catch (error) {}
        return {
            data,
            timestamp: this.storage.getItem(this.timestampKey),
        };
    }

    render() {
        const {id} = this.props;
        return <div id={id}></div>;
    }
}

LifeSpanStorage.defaultProps = {
    reload: false,
    storage_type: 'session',
};

LifeSpanStorage.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
    ]),
    limit: PropTypes.number,
    reload: PropTypes.bool,
    storage_type: PropTypes.oneOfType(['local', 'session']),
    setProps: PropTypes.func,
};
