import PropTypes from 'prop-types';
import React, {Component} from 'react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class OrientationObserver extends Component {
    constructor(props) {
        super(props);
        this.state = {orientation: this.getOrientation()};
        this.observer = null;
    }

    getOrientation() {
        let angle = screen && screen.orientation && screen.orientation.angle;
        if (angle === undefined) {
            angle = window.orientation; // iOS用
        }
        return angle === 0 ? 'portrait' : 'landscape';
    }

    componentDidMount() {
        const _this = this;
        _this.props.setProps({
            orientation: this.getOrientation(),
        });
        window.addEventListener('orientationchange', () => {
            _this.props.setProps({
                orientation: this.getOrientation(),
                before_orientation: this.state.orientation,
            });
            _this.setState({orientation: this.getOrientation()});
        });
    }

    render() {
        return <div id={this.props.id}></div>;
    }
}

OrientationObserver.defaultProps = {};

OrientationObserver.propTypes = {
    id: PropTypes.string,
    orientation: PropTypes.string,
    before_orientation: PropTypes.string,
    setProps: PropTypes.func,
};
