/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import {LifeSpanStorage} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            session: {
                id: 'test',
                data: 'session',
            },
            local: {
                id: 'test',
                data: {type: 'local', data: 'test'},
                storage_type: 'local',
            },
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <LifeSpanStorage
                    setProps={this.setProps}
                    {...this.state.session}
                />
                <LifeSpanStorage
                    setProps={this.setProps}
                    {...this.state.local}
                />
            </div>
        );
    }
}

export default App;
