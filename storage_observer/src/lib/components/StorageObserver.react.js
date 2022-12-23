import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class StorageObserver extends Component {
    constructor(props) {
        super(props);

        this.state = {clear: false};

        this.LAST_OPERATE_KEY = 'last_operate';
        this.interval = null;

        // bind
        this.setLastOperate = this.setLastOperate.bind(this);
    }

    componentDidMount() {
        this.setLastOperate();
        window.addEventListener('touchstart', this.setLastOperate);
        window.addEventListener('touchend', this.setLastOperate);
        window.addEventListener('touchmove', this.setLastOperate);

        this.interval = setInterval(() => {
            const timestamp = sessionStorage.getItem(this.LAST_OPERATE_KEY);
            if (
                sessionStorage.length > 1 &&
                Date.now() - Number(timestamp) > this.props.limit
            ) {
                sessionStorage.clear();
                console.log('-- CLEAR');
                this.props.setProps({clear: true});
            }
        }, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        window.removeEventListener('touchstart', this.setLastOperate);
        window.removeEventListener('touchend', this.setLastOperate);
        window.removeEventListener('touchmove', this.setLastOperate);
    }

    setLastOperate() {
        sessionStorage.setItem(this.LAST_OPERATE_KEY, Date.now());
        this.props.setProps({clear: false});
    }

    render() {
        const {id} = this.props;
        return <div id={id}></div>;
    }
}

StorageObserver.defaultProps = {
    interval: 10000,
    clear: false,
};

StorageObserver.propTypes = {
    id: PropTypes.string,
    limit: PropTypes.number.isRequired,
    interval: PropTypes.number,
    clear: PropTypes.bool,
    setProps: PropTypes.func,
};
