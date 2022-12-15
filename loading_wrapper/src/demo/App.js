/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {LoadingWrapper} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            id: 'test',
            redContent: null,
            blueContent: null,
            targetClassName: 'target',
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <LoadingWrapper
                    setProps={this.setProps}
                    {...this.state}
                    children={
                        <div
                            style={{
                                width: '100%',
                                height: '500px',
                                background: 'red',
                            }}
                        >
                            <span>{this.state.redContent}</span>
                            <div data-loading_ignore="test">
                                <span>{this.state.blueContent}</span>
                            </div>
                            <div
                                className="loading"
                                // style={{display: 'none'}}
                                // style={{}}
                            ></div>
                            <textarea
                                onChange={(e) =>
                                    this.setState({redContent: e.target.value})
                                }
                            ></textarea>
                            <textarea
                                onChange={(e) =>
                                    this.setState({blueContent: e.target.value})
                                }
                            ></textarea>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default App;
