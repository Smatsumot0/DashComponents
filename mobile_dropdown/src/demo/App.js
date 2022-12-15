/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {MobileDropdown} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {clearable: false};
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        let options = [];
        for (let i = 0; i < 10; i++) {
            options.push({label: 'TEST' + i, value: i});
        }
        return (
            <div style={{width: '100%'}}>
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
