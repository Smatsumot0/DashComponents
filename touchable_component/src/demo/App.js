/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {TouchableComponent} from '../lib';

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
                <TouchableComponent
                    setProps={this.setProps}
                    children={
                        <div
                            style={{
                                width: '500px',
                                height: '500px',
                                background: 'red',
                            }}
                        ></div>
                    }
                    {...this.state}
                />
            </div>
        );
    }
}

export default App;
