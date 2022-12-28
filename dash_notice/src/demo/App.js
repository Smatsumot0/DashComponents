/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {DashNotice} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.num = 1;
        this.state = {
            notices: [],
            // remove_timing: 'length',
            // remove_timing: 'timeout',
            timestamp: 0,
            sort: 'asc',
        };
        this.timestamp = Date.now();
        this.setProps = this.setProps.bind(this);
    }

    componentDidMount() {
        let interval = 0;
        setInterval(() => {
            interval++;
            this.setState({
                timestamp: Math.round((Date.now() - this.timestamp) / 1000),
            });
            if (interval % 10 === 0) {
                const notices = this.state.notices;
                notices.push({
                    title: 'TEST' + this.num,
                    message: 'New Update',
                    timestamp: Date.now(),
                    value: 'test' + this.num,
                });
                this.num++;
                this.setState({notices});
            }
        }, 1000);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <DashNotice
                        setProps={this.setProps}
                        notices={this.state.notices}
                        remove_timing={this.state.remove_timing}
                        sort={this.state.sort}
                    />
                </div>
                <p style={{width: '100%'}}>{this.state.timestamp}秒経過</p>
            </div>
        );
    }
}

export default App;
