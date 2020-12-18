import React, { Component } from 'react';
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import styles from './DraggableItem.css'

class DraggableItem extends Component {

  componentDidMount() {

  }

  render() {
    return (<div className={"draggable"} ref={element => {
      if (!element) {
        return;
      }
      DayPilot.Scheduler.makeDraggable({
        element: element,
        id: this.props.id,
        text: this.props.text,
        duration: this.props.days * 24 * 60 * 60,
        keepElement: true
      })
    }}>{this.props.text}</div>);
  }
}

export default DraggableItem;
