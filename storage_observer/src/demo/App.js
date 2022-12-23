/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {StorageObserver} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            limit: 1000 * 10,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <StorageObserver setProps={this.setProps} {...this.state} />
            </div>
        );
    }
}

export default App;
