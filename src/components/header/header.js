import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import Logo from '../../assets/images/productplan.png'
import './header.css';

class Header extends Component {
    state = {}
    render() {
        return (
            <div className="header">
                <ReactBootstrap.Row className="headerRow">
                    <ReactBootstrap.Col xs={2} className="headerCol1 d-flex justify-content-start">
                        <img src={Logo} className="logo"></img>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={2} className="headerCol2 d-flex justify-content-start">
                        <span>Candidate Roadmap</span>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={8} className="headerCol3 d-flex justify-content-end">
                        <span><i class="fas fa-search"></i></span>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </div>
        );
    }
}

export default Header;