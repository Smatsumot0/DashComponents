/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {DashAlert} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            // title: <span>タイトル</span>,
            message: (
                <span>
                    メッセージメッセージメッセージメッセージメッセージメッセージ
                </span>
            ),
            buttons: [
                {title: 'OK', value: 'ok', color: '#ff0000'},
                {title: 'NG', value: 'ng'},
            ],
            // is_open: true,
            // duration: 3000,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({is_open: true});
                    }}
                >
                    alert
                </button>
                <DashAlert setProps={this.setProps} {...this.state} />
            </div>
        );
    }
}

export default App;
