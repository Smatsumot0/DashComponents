/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {IosScrollWrapper} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {};
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <IosScrollWrapper
                    setProps={this.setProps}
                    children={
                        <div
                            style={{
                                height: '5000px',
                                background: 'linear-gradient(red,blue)',
                            }}
                        >
                            TEST
                        </div>
                    }
                />
            </div>
        );
    }
}

export default App;
