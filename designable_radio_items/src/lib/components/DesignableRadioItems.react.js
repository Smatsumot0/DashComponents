import PropTypes from 'prop-types';
import React, {Component} from 'react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DesignableRadioItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            move: 0,
        };
        this.name = this.props.name
            ? this.props.name
            : // eslint-disable-next-line no-magic-numbers
              Math.random().toString(32).substring(2);
    }
    updateValue(value, isForced) {
        if (this.props.readonly && !isForced) {
            return;
        }
        const befIndex = this.props.options.findIndex(
            (opt) => opt.value === this.state.value
        );
        const index = this.props.options.findIndex(
            (opt) => opt.value === value
        );
        this.props.setProps({value});
        this.setState({value, move: befIndex === -1 ? 0 : index - befIndex});
    }
    render() {
        const {id, options, className, value, readonly} = this.props;
        if (
            this.state.value &&
            options.map((opt) => opt.value).indexOf(this.state.value) === -1
        ) {
            this.setState({value: value, move: 0});
        }

        if (
            this.state.value !== value &&
            options.map((opt) => opt.value).indexOf(value) > -1
        ) {
            this.updateValue(value, true);
        }

        const optList = [];
        for (const opt of options) {
            optList.push(
                <label
                    key={opt.value}
                    className={
                        this.state.value === opt.value
                            ? 'selected move_' + this.state.move
                            : ''
                    }
                >
                    <input
                        type="radio"
                        name={this.name}
                        value={opt.value}
                        checked={this.state.value === opt.value}
                        onChange={() => this.updateValue(opt.value)}
                        onClick={() =>
                            this.props.setProps({
                                n_clicks: this.props.n_clicks + 1,
                            })
                        }
                    />
                    <span>{opt.label}</span>
                </label>
            );
        }

        return (
            <div id={id} className={className + (readonly ? ' readonly' : '')}>
                {optList}
            </div>
        );
    }
}

DesignableRadioItems.defaultProps = {
    readonly: false,
    n_clicks: 0,
};

DesignableRadioItems.propTypes = {
    id: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    className: PropTypes.string,
    readonly: PropTypes.bool,
    n_clicks: PropTypes.number,
    setProps: PropTypes.func,
};
