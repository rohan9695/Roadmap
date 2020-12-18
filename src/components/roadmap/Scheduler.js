import React, { Component } from 'react';
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import DraggableItem from "./DraggableItem";

class Scheduler extends Component {

  constructor(props) {
    super(props);

    this.state = {
      treeEnabled: true
    };
  }

  componentDidMount() {
    // load resource and event data
    this.setState({
      resources: [
        { name: "", id: "A" }
      ],
      events: [],
      startDate: "2018-01-01",
      days: 5000,
      scale: "Month",
      timeHeaders: [{ groupBy: "Year" }, { groupBy: "Quarter" }],
    });

  }

  render() {
    let { ...config } = this.state;
    return (
      <div>
        <DayPilotScheduler {...config} ref={component => this.scheduler = component && component.control} />
      </div>

    );
  }
}

export default Scheduler;
