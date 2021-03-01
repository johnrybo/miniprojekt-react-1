import { Component } from "react";
import "../App.css";
import { longitude, latitude } from "./Main";

interface State {
  temp: number;
}
export default class Temp extends Component {
  state: State = {
    temp: 0,
  };

  componentDidMount() {
    // this.getTemp(longitude, latitude);
    this.getTemp2(longitude, latitude);
  }

  async getTemp2(lon: number, lat: number) {

    let APIKey = 'c2a3479cf7f0d7dd2b48b2f371689e02'
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
    const response = await fetch(url);
    const result = await response.json();
    
    console.log('temp: ' + result.main.temp)

    this.setState({
      temp: result.main.temp.toFixed(0)
    });

  }

  async getTemp(lon: number, lat: number) {
    let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    const response = await fetch(url);
    const result = await response.json();

    let temp;

    // Om temperaturen är på index 1
    if (result.timeSeries[0].parameters[1].name === "t") {
      temp = result.timeSeries[0].parameters[1].values[0];

      // Om temperaturen är på index 10
    } else if (result.timeSeries[0].parameters[10].name === "t") {
      temp = result.timeSeries[0].parameters[10].values[0];
    }

    this.setState({
      temp: temp,
    });
  }

  render() {
    return <div>{this.state.temp + " °C"}</div>;
  }
}
