import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import './roadmap.css'
import Lane from './Lane'
import DraggableItem from './DraggableItem'
import Modal from 'react-modal';

class Roadmap extends Component {
    state = {
        numberOfLanes: 0,
        isAddLaneModal: true,
        isAddBarModal: false
    }

    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };
        const lanes = []

        for (let i = 0; i < this.state.numberOfLanes; i++) {
            lanes.push(<Lane />)
        }

        return (
            <div className="Roadmap">
                <ReactBootstrap.Row className="roadmapRow">
                    <ReactBootstrap.Col xs={8} className="roadmapCol1 d-flex justify-content-start">
                        {lanes.map(lane => lane)}

                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col xs={4} className="roadmapCol2 d-flrx justify-content-start">
                        <div class="buttonContainer">
                            <button className="button" onClick={() => this.setState({ numberOfLanes: this.state.numberOfLanes + 1, isAddBarModal: true })}>
                                Add Lane
                            </button>
                            <button className="button" onClick={() => this.setState({ numberOfLanes: this.state.numberOfLanes - 1 })}>
                                Remove lane
                            </button>
                            <DraggableItem id={this.state.draggableKey} days={90} text={"Add Bar"} />
                        </div>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <Modal
                    isOpen={this.state.isAddLaneModal}
                    onRequestClose={() => this.setState({ isAddLaneModal: false })}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <button type="button" class="close" data-dismiss="modal" onClick={() => this.setState({ isAddLaneModal: false })}>&times;</button>
                    <h4 class="modal-title">Add a Lane</h4>
                    <div class="modal-body">
                        <p>Start with a lane</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" onClick={() => this.setState({ isAddLaneModal: false })}>Close</button>
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.isAddBarModal}
                    onRequestClose={() => this.setState({ isAddBarModal: false })}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <button type="button" class="close" data-dismiss="modal" onClick={() => this.setState({ isAddBarModal: false })}>&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                    <div class="modal-body">
                        <p>Add few bars</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" onClick={() => this.setState({ isAddBarModal: false })}>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Roadmap;