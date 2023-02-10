/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {DesignableRadioItems} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            readonly: true,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        const options = [];
        for (let i = 0; i < 5; i++) {
            options.push({label: 'TEST' + i, value: i});
        }
        return (
            <div>
                <DesignableRadioItems
                    setProps={this.setProps}
                    options={options}
                    {...this.state}
                />
            </div>
        );
    }
}

export default App;
