import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import './navbar.css'


class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="Navbar">
                <ReactBootstrap.Row className="navbarRow">
                    <ReactBootstrap.Col xs={5} className="navbarCol1">
                        <span>Product Roadmap</span>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={2} className="navbarCol2">
                        <button className="roadmapButton">Roadmap</button>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={2} className="navbarCol3">
                        <button className="planningBoardButton">Planning Board</button>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={2} className="navbarCol4">
                        <button className="parkingLotButton">Parking Lot</button>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </div>
        );
    }
}

export default Navbar;