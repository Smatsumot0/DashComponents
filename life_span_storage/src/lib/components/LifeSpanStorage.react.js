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
        this.state = this.props;
    }
    componentDidUpdate() {
        console.log(this.props === this.state, this.props, this.state);
    }
    render() {
        const {id} = this.props;
        return <div id={id}></div>;
    }
}

LifeSpanStorage.defaultProps = {};

LifeSpanStorage.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
    ]),
    setProps: PropTypes.func,
};
