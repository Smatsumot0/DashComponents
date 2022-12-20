/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {MobileDropdown} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {clearable: true};
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        const options = [];
        for (let i = 0; i < 10; i++) {
            options.push({label: 'TEST' + i, value: i});
        }
        return (
            <div style={{width: '100%', height: '100px'}}>
                <MobileDropdown
                    setProps={this.setProps}
                    options={options}
                    {...this.state}
                />
            </div>
        );
    }
}

export default App;
