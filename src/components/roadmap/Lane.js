import React, { Component } from 'react';
import styles from './Lane.css'
import Scheduler from './Scheduler'


class Lane extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isOpen: true
    }

    render() {
        return (
            <div className="container">
                <div className="upperRow">
                    <button class="fas fa-caret-down iconButton" onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} />
                    <span className="lane">Lane</span>
                </div>
                {this.state.isOpen && <div className="lowerRow">
                    <Scheduler />
                </div>}
            </div>
        );
    }
}

export default Lane;