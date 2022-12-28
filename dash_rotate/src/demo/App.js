/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {DashRotate} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            orientation: 'portrait',
            message: 'rotate',
            delay: 0,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashRotate setProps={this.setProps} {...this.state} />
            </div>
        );
    }
}

export default App;
