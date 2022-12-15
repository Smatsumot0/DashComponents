import PropTypes from 'prop-types';
import React, {Component} from 'react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class LoadingWrapper extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {isLoading: false};
        this.interval = null;
        this.mo = null;
        this.stop = false;
    }
    /**
     * コンポーネントがマウントされる直前に呼び出される
     */
    componentDidMount() {
        this.mo = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                // this.checkIgnore(mutation.target);
                // if (!this.stop) {
                const isLoading = this.isLoading();
                console.log(this.props.id, 'is loading', isLoading);
                if (isLoading === null) continue;
                this.setLoading(isLoading);
                break;
                if (this.isTarget(mutation.addedNodes)) {
                    this.setLoading(true);
                    break;
                }
                if (this.isTarget(mutation.removedNodes)) {
                    this.setLoading(false);
                    break;
                }
                // }
            }
        });
        this.mo.observe(this.ref.current, {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true,
        });
    }
    /**
     * コンポーネント破棄直前に呼び出される
     */
    componentWillUnmount() {
        if (this.mo) this.mo.disconnect();
    }
    /**
     * ロードの基準となるターゲットか判定
     * @param {*} nodes
     * @returns
     */
    isTarget(nodes) {
        for (const node of nodes) {
            if (!node.tagName) continue;
            if (!node.className) continue;
            if (
                node.className
                    .split(' ')
                    .indexOf(this.props.targetClassName) !== -1
            ) {
                console.log(this.props.id, node);
                return true;
            }
        }
        return false;
    }
    /**
     * ロード中か判定
     * @returns
     */
    isLoading() {
        // console.log(
        //     this.props.id,
        //     'check',
        //     this.ref.current.querySelector('.' + this.props.targetClassName)
        // );
        // return !!this.ref.current.querySelector(
        //     '.' + this.props.targetClassName
        // );
        console.log(this.props.id, this.ref.current, this.ref);
        const target = this.ref.current.querySelector('.loading');
        if (this.props.ignores) {
            for (const ignore of this.props.ignores) {
                const ignoreTarget = this.ref.current.querySelector(
                    '[data-loading_ignore=' + ignore + '] .loading'
                );
                if (ignoreTarget && ignoreTarget.style.length > 0) return null;
            }
        }
        return target.style.length > 0;
    }
    /**
     * ロード状態をstateとpropsに設定
     * @param {*} isLoading
     */
    setLoading(isLoading) {
        if (isLoading) {
            console.log(this.props.id, 'start');
            this.props.setProps({is_loading: true});
            this.setState({isLoading: true});
            if (!this.interval) {
                this.interval = setInterval(() => {
                    if (!this.isLoading()) {
                        console.log(this.props.id, 'end');
                        clearInterval(this.interval);
                        this.interval = null;
                        this.props.setProps({is_loading: false});
                        this.setState({isLoading: false});
                    }
                }, this.props.interval);
            }
        }
    }
    checkIgnore(target) {
        if (this.stop) return;
        if (this.isIgnore(target)) {
            this.stop = true;
            if (!this.interval) {
                this.interval = setInterval(() => {
                    if (!this.isLoading()) {
                        clearInterval(this.interval);
                        this.interval = null;
                        this.stop = false;
                    }
                }, 100);
            }
        }
    }
    /**
     * 除外コンテンツ判定
     * @param {*} target
     * @returns
     */
    isIgnore(target) {
        if (this.props.ignores) {
            for (const ignore of this.props.ignores)
                try {
                    const result = target.closest(
                        '[data-loading_ignore=' + ignore + ']'
                    );
                    if (result) return true;
                } catch {
                    const result = target.parentElement.closest(
                        '[data-loading_ignore=' + ignore + ']'
                    );
                    if (result) return true;
                }
        }
        return false;
    }
    render() {
        const {id, className, children} = this.props;
        return (
            <div
                id={id}
                className={
                    'loading_wrapper ' +
                    className +
                    ' loading_' +
                    this.state.isLoading
                }
                ref={this.ref}
            >
                {children}
            </div>
        );
    }
}

LoadingWrapper.defaultProps = {
    interval: 1000,
};

LoadingWrapper.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    targetClassName: PropTypes.string.isRequired,
    interval: PropTypes.number,
    ignores: PropTypes.arrayOf(PropTypes.string),
    is_loading: PropTypes.bool,
    setProps: PropTypes.func,
};
