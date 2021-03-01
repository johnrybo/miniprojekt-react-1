import React from "react";
import { Component } from "react";
import "../App.css";

interface Props {
  weatherData: any;
}
interface State {
  windDirection: any;
  windSpeed: any;
}
export default class Wind extends Component<Props, State> {
  state: State = {
    windDirection: 0,
    windSpeed: 0,
  };

  componentDidMount() {
    this.getWind();
  }

  // Hämtar vädret från Weather
  async getWind() {
   
    const result = this.props.weatherData;
    let wd;
    let ws;

    // Om temperaturen är på index 1
    if (result.timeSeries[0].parameters[3].name === "wd") {
      wd = this.getWindDirection(result.timeSeries[0].parameters[3].values[0]);
      ws = result.timeSeries[0].parameters[4].values[0];

      // Om temperaturen är på index 10
    } else if (result.timeSeries[0].parameters[13].name === "wd") {
      wd = this.getWindDirection(result.timeSeries[0].parameters[13].values[0]);
      ws = result.timeSeries[0].parameters[14].values[0];
    }

    this.setState({
      windDirection: wd,
      windSpeed: ws,
    });
  }

  // Hämtar vindriktning och gör om till pil
  getWindDirection = (wd: number) => {
    let west: string = "\u2190";
    let north: string = "\u2191";
    let east: string = "\u2192";
    let south: string = "\u2193";
    let northwest: string = "\u2196";
    let northeast: string = "\u2197";
    let southeast: string = "\u2198";
    let southwest: string = "\u2199";

    if (wd > 337.5 || wd < 22.5) {
      return west;
    } else if (wd > 22.5 && wd < 67.5) {
      return northwest;
    } else if (wd > 67.5 && wd < 112.5) {
      return north;
    } else if (wd > 112.5 && wd < 157.5) {
      return northeast;
    } else if (wd > 157.5 && wd < 202.5) {
      return east;
    } else if (wd > 202.5 && wd < 247.5) {
      return southeast;
    } else if (wd > 247.5 && wd < 292.5) {
      return south;
    } else if (wd > 292.5 && wd < 337.5) {
      return southwest;
    }
  };

  render() {
    return (
      <div>{this.state.windDirection + ' ' + this.state.windSpeed + " m/s"}</div>
    );
  }
}
