import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Boston", "me"],
        datasets: [
          {
            label: "p",
            data: [44222, 422222],
            backgroundColor: "rgba(255,99,132,0.6)"
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="chart">
        <Bar date={this.state.chartData} options={{}} />
      </div>
    );
  }
}
export default Chart;
