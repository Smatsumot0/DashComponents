/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {UrlObserver} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <UrlObserver setProps={this.setProps} {...this.state} />
                <input
                    onChange={(e) => {
                        this.setState({value: e.target.value});
                    }}
                />
                <div>{this.state.value}</div>
            </div>
        );
    }
}

export default App;
