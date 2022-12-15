import PropTypes from 'prop-types';
import React, {Component} from 'react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class SelectableBoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
    }
    updateValue(value) {
        this.setState({value});
        this.props.setProps({value});
    }
    render() {
        const {id, optionChildren, optionValues, className} = this.props;

        const children = [];
        for (const i in optionChildren) {
            children.push(
                <div
                    key={optionValues[i]}
                    onClick={() => this.updateValue(optionValues[i])}
                    className={
                        'selectable_box_item ' +
                        (this.state.value === optionValues[i] ? 'selected' : '')
                    }
                >
                    {optionChildren[i]}
                </div>
            );
        }

        return (
            <div id={id} className={'selectable_box_list ' + className}>
                {children}
            </div>
        );
    }
}

SelectableBoxList.defaultProps = {};

SelectableBoxList.propTypes = {
    id: PropTypes.string,
    optionChildren: PropTypes.arrayOf(PropTypes.node).isRequired,
    optionValues: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    setProps: PropTypes.func,
};
