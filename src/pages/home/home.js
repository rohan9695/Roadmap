import React, { Component } from 'react';
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Roadmap from '../../components/roadmap'

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Roadmap />
            </div>
        );
    }
}

export default Home;