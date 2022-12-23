/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {DashCookies} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            id: 'test',
            // data: 'test',
            data: {type: 'local', data: 'test'},
            max_age: 10,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashCookies setProps={this.setProps} {...this.state} />
            </div>
        );
    }
}

export default App;
