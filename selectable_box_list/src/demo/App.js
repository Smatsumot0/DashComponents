/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {SelectableBoxList} from '../lib';

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
        let children = [];
        let values = [];

        for (let i = 0; i < 10; i++) {
            children.push(
                <div
                    style={{width: '300px', height: '50px', background: 'blue'}}
                >
                    TEST{i}
                </div>
            );
            values.push(i);
        }
        return (
            <div>
                <SelectableBoxList
                    setProps={this.setProps}
                    optionChildren={children}
                    optionValues={values}
                    {...this.state}
                />
            </div>
        );
    }
}

export default App;
