import React, { Component } from "react";
import "../App.css";

interface Props {
  weatherData: any;
}
interface State {
  temp: number;
}
export default class Temp extends Component<Props, State> {
  state: State = {
    temp: 0,
  };

  componentDidMount() {
    this.getTemp();
  }

  async getTemp() {
    const result = this.props.weatherData;
    let temp;

    // Om temperaturen är på index 1
    if (result.timeSeries[0].parameters[1].name === "t") {
      temp = result.timeSeries[0].parameters[1].values[0];

      // Om temperaturen är på index 10
    } else if (result.timeSeries[0].parameters[10].name === "t") {
      temp = result.timeSeries[0].parameters[10].values[0];
    }

    this.setState({ temp });
  }

  render() {
    return <div>{this.state.temp}</div>;
  }
}
